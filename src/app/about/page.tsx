import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur eveniet illum
        quibusdam adipisci, quas exercitationem incidunt unde quia possimus?
      </p>
    </>
  );
}
