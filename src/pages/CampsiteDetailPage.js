import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentList from '../features/comments/CommentList';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage;