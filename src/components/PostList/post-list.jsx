import { Grid } from '@mui/material';
import Post from '../Post/post';

const PostList = ({posts}) => {

    return (
        <Grid container spacing={'40px'}>
            {posts.map(item => (
                <Post key={item._id} {...item}/>
            ))}
            
        </Grid>

    );
};

export default PostList;
