import AppHeader from "../AppHeader/app-header";
import { Container } from '@mui/material';
import PostList from "../PostList/post-list";
import { postData } from "./posts";

const AppMUI = () => {
    return (
        <>
          <AppHeader/>
          <Container>
            <PostList posts={postData}/>
          </Container>
        </>

    );
};

export default AppMUI;
