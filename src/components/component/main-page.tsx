/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "@/components/ui/button";

import ContactPage from "../contact/contact";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/logo.png" width="40" height="40" alt="NITO SERVICES" />
          <span className="text-xl font-bold">NITO SERVICES</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Accueil
          </Link>
          <Link
            href="#about"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            À propos
          </Link>
          <Link
            href="#services"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-full max-w-xs  p-6 backgroundCustom"
            side="right"
          >
            <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#about"
                >
                  À propos
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#services"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Bienvenue chez NITO SERVICES
              </h1>
              <p className="text-muted-foreground">
                Nous sommes un cabinet de conseil de premier plan dédié à aider
                les entreprises à atteindre leurs objectifs. Grâce à notre
                expertise en stratégie, en opérations et en technologie, nous
                proposons des solutions sur mesure qui favorisent une croissance
                durable.
              </p>
              <div className="flex gap-4">
                <Link href="#about" prefetch={false}>
                  <Button>En savoir plus</Button>
                </Link>
                <Link href="#contact" prefetch={false}>
                  <Button variant="outline">Contactez-nous</Button>
                </Link>
              </div>
            </div>
            <img
              src="/intro.png"
              width="600"
              height="400"
              alt="NITO SERVICES"
              className="rounded-xl"
            />
          </div>
        </section>
        <section
          id="about"
          className="flex justify-center py-12 md:py-24 bg-input"
        >
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold flex justify-center">
                À propos de NITO SERVICES
              </h2>
              <p className="text-muted-foreground mt-4">
                NITO SERVICES a été fondée en 2010 avec pour mission de
                transformer les entreprises grâce à des solutions de conseil
                innovantes. Notre équipe de professionnels expérimentés apporte
                une grande expertise sectorielle et une passion pour obtenir des
                résultats.
              </p>
              <p className="text-muted-foreground mt-4">
                Nous croyons en la construction de partenariats à long terme
                avec nos clients, en travaillant en étroite collaboration pour
                comprendre leurs défis uniques et développer des stratégies sur
                mesure pour réussir. Notre engagement envers l&apos;excellence
                et la satisfaction des clients nous a valu la réputation de
                conseiller de confiance dans le secteur.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <UsersIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">Notre équipe</h3>
                <p className="text-muted-foreground mt-2">
                  Rencontrez les talentueux individus qui composent
                  l&apos;équipe de NITO SERVICES.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <TargetIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">Notre mission</h3>
                <p className="text-muted-foreground mt-2">
                  Impulser la transformation des entreprises et une croissance
                  durable.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <BriefcaseIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">Notre expertise</h3>
                <p className="text-muted-foreground mt-2">
                  Tirer parti de notre profonde connaissance sectorielle pour
                  proposer des solutions sur mesure.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <AwardIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">Nos clients</h3>
                <p className="text-muted-foreground mt-2">
                  Faire confiance à des organisations de premier plan dans
                  divers secteurs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="flex justify-center py-12 md:py-24 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center">Nos services</h2>
            <p className="text-muted-foreground text-center mt-4">
              NITO SERVICES propose une gamme complète de services de conseil
              pour aider les entreprises à prospérer.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-card p-6 rounded-lg">
                <PieChartIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">Conseil en stratégie</h3>
                <p className="text-muted-foreground mt-2">
                  Nous aidons les organisations à développer et à mettre en
                  œuvre des stratégies efficaces pour atteindre leurs objectifs
                  commerciaux.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <CpuIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">
                  Conseil en opérations
                </h3>
                <p className="text-muted-foreground mt-2">
                  Nos experts optimisent les processus, améliorent
                  l&apos;efficacité et renforcent les performances
                  opérationnelles.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <CodeIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold mt-2">
                  Conseil en technologie
                </h3>
                <p className="text-muted-foreground mt-2">
                  Nous tirons parti des dernières technologies pour stimuler la
                  transformation numérique et l&apos;innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex justify-center py-12 md:py-24 bg-input"
        >
          <div>
            <h2 className="text-3xl font-bold flex justify-center ">
              Contactez-nous
            </h2>
            <p className="text-muted-foreground m-4 ">
              Vous avez un projet en tête ou avez besoin de services de conseil
              d&apos;experts ? Remplissez le formulaire ci-dessous et notre
              équipe vous contactera.
            </p>
            <ContactPage />
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 NITO SERVICES.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">22 RUE MONTGRAND</p>
          <p className="   ">13006 MARSEILLE</p>
          <p className="  mt-4 ">contact@nito-services.fr</p>

          <p className="  mt-4 ">TEL: 04 84 89 63 53</p>
        </div>
      </footer>
    </div>
  );
}

function AwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CpuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
