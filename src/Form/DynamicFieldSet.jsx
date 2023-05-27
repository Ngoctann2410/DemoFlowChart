import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

// import "./index.css";
import { Form, Input, Button, Table } from "antd";
import { PlusOutlined, EditOutlined, MinusOutlined } from "@ant-design/icons";
import { useForm } from "antd/lib/form/util";

const { Column } = Table;

const mockData = {
  userlistName: "name",
  users: [
    {
      age: 1,
      name: "john"
    },
    {
      age: 2,
      name: "marry"
    }
  ]
};

const EditableUserTable = props => {
  const { users, add, remove } = props;
  const [editingIndex, setEditingIndex] = useState(undefined);

  return (
    <Table
      dataSource={users}
      pagination={false}
      footer={() => {
        return (
          <Form.Item>
            <Button onClick={add}>
              <PlusOutlined /> Add field
            </Button>
          </Form.Item>
        );
      }}
    >
      <Column
        dataIndex={"age"}
        title={"Age"}
        render={(value, row, index) => {
          // console.log(row);
          return (
            <Form.Item name={[index, "age"]}>
              {({ getFieldValue, getFieldsValue }) => {
                console.log(getFieldsValue());
                return (
                  <React.Fragment>
                    {editingIndex === index ? (
                      <Input
                        placeholder="age"
                        style={{ width: "30%", marginRight: 8 }}
                      />
                    ) : (
                      getFieldValue(["users", index, "age"])
                    )}
                  </React.Fragment>
                );
              }}
            </Form.Item>
          );
        }}
      />
      <Column
        dataIndex={"name"}
        title={"Name"}
        render={(value, row, index) => {
          return (
            <Form.Item name={[index, "name"]}>
              <Input
                placeholder="name"
                style={{ width: "30%", marginRight: 8 }}
              />
            </Form.Item>
          );
        }}
      />
      <Column
        title={"Action"}
        render={(value, row, index) => {
          return (
            <React.Fragment>
              <Button
                icon={<EditOutlined />}
                shape={"circle"}
                style={{ marginRight: 8 }}
              />
              <Button
                icon={<MinusOutlined />}
                shape={"circle"}
                onClick={() => remove(row.name)}
              />
            </React.Fragment>
          );
        }}
      />
    </Table>
  );
};

const DynamicFieldSet = () => {
  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  return (
    <Form name="dynamic_form_item" onFinish={onFinish} initialValues={mockData}>
      <Form.Item name={["userlistName"]}>
        <Input
          placeholder="user list name"
          style={{ width: "30%", marginRight: 8 }}
        />
      </Form.Item>
      <Form.List name="users">
        {(users, { add, remove }) => {
          return <EditableUserTable users={users} add={add} remove={remove} />;
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        
      </Form.Item>
      
    </Form>
  );
};

// ReactDOM.render(<React.StrictMode>
//   <DynamicFieldSet />
// </React.StrictMode>, document.getElementById("container"));




export default DynamicFieldSet;