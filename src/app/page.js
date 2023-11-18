import antd from 'antd';
import React from 'react';
import { Space , Row , Col , Button } from 'antd';

export default function Home() {
  return (
    <Space direction="vertical" style={{width:"100%"}} size={[0,48]}>
      <Row justify="center">
        <Col span={18}>
          <Button type="default">B</Button>
          <Button type="default">I</Button>
          <Button type="default">U</Button>
          <Button type="default">S</Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={18}>
          <div style={{height:"300px",border:"3px solid black", padding:"7px"}} contentEditable="true">

          </div>
        </Col>
      </Row>
    </Space>
  )
}
