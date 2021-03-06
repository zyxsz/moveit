import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Move.It</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}
