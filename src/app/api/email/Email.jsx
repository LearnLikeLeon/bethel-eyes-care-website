import {
  Body,
  Button,
  Container,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

export const Email = ({ fullname, email, service, communication, message }) => {
  return (
    <Html>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://maria-bucket-1.s3.us-east-1.amazonaws.com/D%C3%A9veloppeuse+Web/Les+plateformes+web+de+ma+client%C3%A8le/Bethel+Eyes+Care_Site+Internet/Les+images+du+site+internet/Leur+logos/Bethel+Eyes+care_logo.jpg"
              width="200"
              height="200"
              alt="Bethel Eyes Care Logo"
              style={{
                borderRadius: "15px",
              }}
            />

            <Text>
              Thanks for reading this information. You&apos;re now ready to
              collect the data from your deployed website.
            </Text>

            <Text>
              <p className="text-lg text-zinc-300">
                Hi, someone submitted a form with the following details:
              </p>
              <ul className="flex flex-col space-y-4">
                <li>
                  <strong>
                    {" "}
                    <i>Prospective client: </i>{" "}
                  </strong>{" "}
                  {fullname}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Email: </i>{" "}
                  </strong>
                  <a className="font-medium" href={`mailto:${email}`}>
                    {" "}
                    {email}
                  </a>{" "}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Selected service: </i>
                  </strong>{" "}
                  {service}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Méthode de communication choisie: </i>{" "}
                  </strong>{" "}
                  {communication}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Message: </i>{" "}
                  </strong>{" "}
                  {message}
                </li>
                <br></br>
              </ul>

              <Button
                href="https://womengreencloud.com"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "5px",
                }}
              >
                Repondre à ce client
              </Button>

              <p>
                Best regards, <br />
                Bethel Eyes Care Team
              </p>
            </Text>

            <Text>
              {" "}
              © Bethel Eyes Care - © {new Date().getFullYear()} Clinique
              Optique Privée - Tous droits réservés - Douala, Cameroun.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
