// ✅ Importation des modules nécessaires depuis React et React-Bootstrap
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du style principal de Bootstrap
import { Container, Navbar, Nav, Card, Row, Col, Button, Form } from "react-bootstrap"; // Import des composants UI Bootstrap

// ✅ Définition du composant principal App
function App() {
  return (
    <>
      {/* 🧩 React Fragment : utilisé ici pour englober plusieurs éléments sans créer un élément HTML inutile */}
      <div className="App" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        
        {/* 🔹 Barre de navigation (Navbar) en haut de la page */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
          <Container>
            {/* 🔸 Titre du site affiché à gauche dans la barre de navigation */}
            <Navbar.Brand href="#home" className="fw-bold text-warning">
              🌟 Mon Projet React
            </Navbar.Brand>

            {/* 🔸 Bouton pour ouvrir/fermer le menu sur les petits écrans */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* 🔸 Contenu du menu (liens de navigation à droite) */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#features">Fonctionnalités</Nav.Link>
                <Nav.Link href="#about">À propos</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 🔸 Section principale du contenu */}
        <Container className="mt-5">
          
          {/* 🏷️ Titre principal centré */}
          <h1 className="text-center mb-5 fw-bold text-primary">
            Bienvenue dans mon premier projet React 🚀
          </h1>

          {/* 🧱 Disposition en grille (Row / Col) pour organiser les cartes */}
          <Row className="justify-content-center">
            
            {/* ✅ Première carte */}
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4">
                {/* 🖼️ Image au-dessus de la carte */}
                <Card.Img 
                  variant="top" 
                  src="https://picsum.photos/300/200?random=1" 
                  alt="Illustration 1" 
                />
                <Card.Body>
                  {/* 🔖 Titre de la carte */}
                  <Card.Title className="fw-bold">💡 Innovation</Card.Title>
                  {/* 📝 Description de la carte */}
                  <Card.Text>
                    Découvrez comment React facilite la création d’interfaces modernes et dynamiques.
                  </Card.Text>
                  {/* 🔘 Bouton interactif */}
                  <Button variant="primary">En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* ✅ Deuxième carte */}
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Img 
                  variant="top" 
                  src="https://picsum.photos/300/200?random=2" 
                  alt="Illustration 2" 
                />
                <Card.Body>
                  <Card.Title className="fw-bold">⚙️ Simplicité</Card.Title>
                  <Card.Text>
                    Grâce à React-Bootstrap, la mise en page devient simple, élégante et responsive.
                  </Card.Text>
                  <Button variant="success">Découvrir</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* ✅ Troisième carte */}
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Img 
                  variant="top" 
                  src="https://picsum.photos/300/200?random=3" 
                  alt="Illustration 3" 
                />
                <Card.Body>
                  <Card.Title className="fw-bold">📘 Apprentissage</Card.Title>
                  <Card.Text>
                    Pratiquez vos compétences en React tout en créant de vrais projets web.
                  </Card.Text>
                  <Button variant="warning" text="dark">Commencer</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* 📬 Section Contact avec formulaire Bootstrap */}
        <Container id="contact" className="my-5">
          <h2 className="text-center mb-4 fw-bold text-success">Contactez-nous 📩</h2>
          <Form className="p-4 bg-light rounded-4 shadow-sm">
            {/* Champ Nom */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom complet</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" />
            </Form.Group>

            {/* Champ Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control type="email" placeholder="exemple@email.com" />
            </Form.Group>

            {/* Champ Message */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Votre message..." />
            </Form.Group>

            {/* Bouton d'envoi */}
            <Button variant="primary" type="submit" className="w-100">
              Envoyer le message
            </Button>
          </Form>
        </Container>

        {/* 🔻 Pied de page du site */}
        <footer className="bg-dark text-light text-center py-3 mt-5">
          <p className="mb-0">© 2025 Mon Projet React - Créé avec ❤️ par Mourad</p>
        </footer>
      </div>
    </>
  );
}

// ✅ Exportation du composant App pour l’utiliser dans index.js
export default App;
