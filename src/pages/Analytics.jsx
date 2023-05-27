import Layout from 'antd/es/layout/layout';
import React, { useState } from 'react';

const {Content} = Layout;

const Analytics = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [hometown, setHometown] = useState('');
  const [description, setDescription] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();

    // Thực hiện xử lý dữ liệu, ví dụ: gửi yêu cầu tạo mới tới API

    // Sau khi xử lý, có thể reset trạng thái
    setId('');
    setName('');
    setBirthday('');
    setHometown('');
    setDescription('');
  };

  return (
    <div>
        <Layout>
            <Content style={{padding: '0px 0px',}}>
                <div style={{ background:'#fff', padding:24, minHeight:810, }}>
                    <h2>Tạo mới</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="id">ID:</label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="name">Tên:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="birthday">Ngày tháng năm sinh:</label>
                        <input
                            type="date"
                            id="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="hometown">Quê quán:</label>
                        <input
                            type="text"
                            id="hometown"
                            value={hometown}
                            onChange={(e) => setHometown(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="description">Mô tả:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>
                        <button type="submit">Tạo mới</button>
                    </form>
                </div>
            
            </Content>
            
            </Layout>
            
    </div>
  );
};

export default Analytics;