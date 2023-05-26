/* eslint-disable @next/next/no-img-element */
import { Container } from "reactstrap";
import styles from "./styles.module.scss"

const Footer = function (){
    return(
        <>
        <Container className={styles.footer}>
            <img 
                src="/logoOnebitFLIX.svg" 
                alt="logoFooter"
                className={styles.footerLogo} 
            />
            <p 
                className={styles.footerLink}
            >
                ONEBITFLIX.COM
            </p>
        </Container>
        </>
    );
};

export default Footer;