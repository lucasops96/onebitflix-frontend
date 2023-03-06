import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import { CourseType } from "../../../services/courseService";
import Link from "next/link";
import SlideComponent from "../../common/slideComponent";

interface props{
    newestCourses: CourseType[];
}

const SlideSection = function ({newestCourses}:props){
    return(
        <>
            <Container>
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent course={newestCourses}/>
                <Link href="/register">
                    <Button outline color="light" className={styles.slidesSectionBtn}>
                        Se cadastre para acessar!
                    </Button>
                </Link>
            </Container>
        </>
    );
};

export default SlideSection;