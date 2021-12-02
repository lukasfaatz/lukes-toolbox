import { GetStaticProps } from 'next';
import './about.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({name}: AboutProps) {
  return (
    <div>
      <h1>Welcome to About! {name}</h1>
    </div>
  );
}

export default About;

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: "Lukas"
    }
  }
}