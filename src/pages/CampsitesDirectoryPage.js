import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CommentList from '../features/comments/CommentList';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList />
            <CommentList />
        </Container>
    )
}

export default CampsitesDirectoryPage;