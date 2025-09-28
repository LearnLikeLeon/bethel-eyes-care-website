import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { navItems } from "@/lib/constants";

const socialLinks = [
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  // {
  //   icon: Github,
  //   href: "#",
  //   label: "GitHub",
  // },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
];

// const quickLinks = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "Categories",
//     href: "/categories",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
//   {
//     name: "Privacy",
//     href: "/privacy",
//   },
// ];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Belissima
            </h3>
            <p className="text-muted-foreground mb-4">Nos Horaires</p>
            <p className="text-muted-foreground mb-4">
              Lundi à vendredi : 8h30 - 17h30
            </p>
            <p className="text-muted-foreground mb-4">Samedi : 8h30 - 15h00</p>

            <p className="text-muted-foreground mb-2">Notre addresse</p>
            <p className="text-muted-foreground mb-4">
              Ange Raphael derrière Santa Lucia ( Douala-Cameroun )
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick links using the navigation items */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Accès Rapide</h4>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Ne ratez aucune actualité
            </h4>
            <p className="text-muted-foreground mb-4">
              Inscrivez-vous à notre newsletter et recevez nos offres par email.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Entrez votre adresse e-mail" />
              <Button>S’abonner</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>
            Bethel Eyes Care - {`© ${new Date().getFullYear()}`} Clinique
            Optique Privée - Tous droits réservés.
          </p>
          <p className="mt-2">
            Ce site est maintenu par Belissima - Consultante Cloud et
            Hébergement des sites internet.
          </p>
        </div>
      </div>
    </footer>
  );
}
