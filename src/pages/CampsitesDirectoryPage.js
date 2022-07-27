import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CommentList from '../features/comments/CommentList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
            <CommentList />
        </Container>
    )
}

export default CampsitesDirectoryPage;