import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "../src/components/common/footer";

const Login = function(){
    return(
        <>
            <Head>
                <title>Onebitflix - Login</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric 
                    logoUrl="/"
                    btnUrl="/register"
                    btnContent="Quero fazer parte"
                />
                <Container className="py-5">
                    <p className={styles.formTitle}>Bem-vindo(a) de volta!</p>
                    <Form className={styles.form}>
                    <p className="text-center">
                        <strong>Bem-vindo(a) ao Onebitflix!</strong>
                    </p>
                    <FormGroup for="email" className={styles.label}>
                        <Label>
                            E-MAIL
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Qual o seu email?"
                            required
                            className={styles.input}
                        />
                    </FormGroup>
                    <FormGroup for="password" className={styles.label}>
                        <Label>
                            SENHA
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Qual o sua senha?"
                            required
                            className={styles.input}
                        />
                    </FormGroup>
                    <Button outline className={styles.formBtn}>
                        ENTRAR
                    </Button>
                    </Form>
                </Container>
                <Footer/>
            </main>
        </>
    );
};

export default Login;