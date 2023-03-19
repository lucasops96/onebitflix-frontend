/* eslint-disable @next/next/no-img-element */
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const UserForm = function(){
    return(
        <>
            <Form className={styles.form}>
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>NT</p>
                    <p className={styles.userName}>NAME TEST</p>
                </div>
                <div className={styles.memberTime}>
                    <img 
                        src="/profile/iconUserAccount.svg" alt="iconProfile"
                        className={styles.memberTimeImg}
                    />
                    <p className={styles.memberTimeText}>
                        Membro desde <br />20 de abril de 2022
                    </p>
                </div>
                <hr />
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label for="firstName" className={styles.label}>
                            NOME
                        </Label>
                        <Input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Qual o seu primeiro nome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Name"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className={styles.label}>
                            SOBRENOME
                        </Label>
                        <Input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Qual o seu último nome?"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={"Test"}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label for="phone" className={styles.label}>
                            WHASTAPP / TELEGRAM</Label>
                        <Input
                            name="phone"
                            type="tel"
                            id="phone"
                            placeholder="(xx) 9xxxx-xxxx"
                            required
                            className={styles.input}
                            value={"+55 (21) 99999-9999"}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={styles.label}>
                            E-MAIL</Label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Coloque seu e-mail"
                            required
                            className={styles.input}
                            value={"testeemail@gmail.com"}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type="submit">
                        Salvar Alterações
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default UserForm;