import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore iure suscipit aut
        voluptas dicta molestiae sunt consequatur praesentium autem!
      </p>
    </>
  );
}
