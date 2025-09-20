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
              <p style={{ fontSize: "1.125rem", color: "#71717a" }}>
                Hi, someone submitted a form with the following details:
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  paddingLeft: 0,
                  listStyle: "none",
                }}
              >
                <li>
                  <strong>
                    <i>Prospective client: </i>
                  </strong>
                  {fullname}
                </li>
                <li>
                  <strong>
                    <i>Email: </i>
                  </strong>
                  <a href={`mailto:${email}`} style={{ fontWeight: "500" }}>
                    {email}
                  </a>
                </li>
                <li>
                  <strong>
                    <i>Selected service: </i>
                  </strong>
                  {service}
                </li>
                <li>
                  <strong>
                    <i>Méthode de communication choisie: </i>
                  </strong>
                  {communication}
                </li>
                <li>
                  <strong>
                    <i>Message: </i>
                  </strong>
                  {message}
                </li>
              </ul>

              <Button
                href="https://google.com"
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

            <Text style={{ marginTop: "1rem", color: "#71717a" }}>
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
