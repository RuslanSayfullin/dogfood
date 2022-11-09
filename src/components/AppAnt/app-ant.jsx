import s from './index.module.css';
import { Layout, Row, Col, Typography, Slider} from 'antd';
import Table from '../Table/table';
import { useState } from 'react';
import styled from 'styled-components';

// const Button = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// const TitleStyle = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

// const LayoutStyle = styled(Layout)`
//     .header {
//         color: red;
//         background-color: #ccc;
//     }

//     .main {
//         background-color: #ccc;
//     }
// `

// const HeaderStyle = styled(Header)`
//     color: red;
//     background-color: #ccc;
    
//     &:hover {
//         background-color: #fff;
//     }
// `
function AppAnt() {
    const [rows, setRows] = useState(10)
    return (
        <Layout>
            <Header className={s.header + ' header'}>
                Header
            </Header>
            <Content>
                {/* <TitleStyle>
                    Hello World!
                </TitleStyle>
                <Button>Normal</Button>
                <Button as="a" href="#">Link with Button styles</Button>
                <TomatoButton>TomatoButton</TomatoButton> */}
                <Row>
                    <Col xs={24} md={{ span: 16, offset: 4 }}>
                        <Slider min={1} max={50} defaultValue={rows} onChange={setRows}/>
                        
                        <Title level={4}> Колличество Покемонов</Title>
                        <Table rows={rows}/>
                    </Col>
                    
                </Row>
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
}

export default AppAnt;
