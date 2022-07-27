import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home'/>
            <DisplayList />
        </Container>
    );
};

export default HomePage;