import './App.css';
import TextBox from './components/TextBox';
import Title from './components/Title';
import me from './images/me.jpg';
import coding from './images/code.svg';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('franidalgo16@gmail.com');

  const handleOnClick = (event) => {
    navigator.clipboard.writeText('franidalgo16@gmail.com');
    setMessage('Copied to clipboard!');
    setTimeout(() => {
      setMessage('franidalgo16@gmail.com');
    }, 3000);
  };

  return (
    <div className="App">
      <main className="flex flex-col bg-black min-h-screen">
        <Title color="text-main">Francisco Idalgo</Title>
        <Title color="text-sc_1">Developer</Title>
        <img src={coding} className="h-56 w-56 self-center my-10" />
        <TextBox bg="bg-main" color="text-black" pic={me}>
          <h1 className="text-xl">About me</h1>
          <p className="text-lg">
            Enthusiastic System Engineering student eager to gain expertise and
            develop in the professional world. Passionate about technology and
            teamwork. Fast learner, always looking for new skills and knowledge
            especially in software developing area. Creative, resolute,
            target-driven and disciplined.
          </p>
        </TextBox>
        <TextBox bg="bg-sc_2" color="text-white">
          <h1 className="text-xl">Programming Skills</h1>
          <p className="text-lg">
            Beyond the programming languages themselves, I'm studying
            Information Systems Engineering (currently attending third year) and
            I've learnt about algorithms, desing patterns and diagrams in
            general so I feel pretty comfortable with almost any object oriented
            programming language. I can guarantee I could learn the basics of
            ANY language with some time and its documentation. That being said,
            here are some of the languages I've written some code in:
          </p>
          <ul className="list-disc mt-3 ml-5">
            <li>
              Java: Made a web app for university using the{' '}
              <a href="https://sparkjava.com">Spark framework</a> and Hibernate
              following the MVC pattern.
            </li>
            <li>
              Python: I've learnt some of it for customizing my window manager
              in my computer, more specifically for "hacking"{' '}
              <a href="http://www.qtile.org/">qTile</a>.
            </li>
            <li>
              C: Although many people seems to be afraid of this language I fell
              in love with it. It's one of the languages I know better. I've
              used it for university (Operative Systems) and I'm proud to say:
              I'm not afraid of pointers, their arithmetic, function pointers,
              its way of managing files, threads, semaphores, etc. I've debugged
              with gdb and <a href="https://valgrind.org">valgrind/helgrind</a>.
              This language taught me so much!
            </li>
            <li>
              HTML/Css: As you can see! Made this website from scratch without
              any template. I always try to pay attention to colors, contrast
              and UI/UX in general. And also, finally...
            </li>
            <li>
              React: This was actually made using React (mostly for practicing
              as this a static web page) along with{' '}
              <a href="https://tailwindcss.com">Tailwind CSS</a>. I've also made
              a live chat with it, mongoose, a little bit of express,{' '}
              <a href="https://chakra-ui.com/">ChakraUI</a> and{' '}
              <a href="https://socket.io/">Socket.IO</a>.
            </li>
          </ul>
        </TextBox>
        <TextBox bg="bg-main" color="text-black">
          <h1 className="text-xl">Studies</h1>
          <p className="text-lg font-semibold mt-3">
            Information Systems Engineering
          </p>
          <p>
            Universidad Tecnológica Nacional - Buenos Aires Regional Faculty,
            Argentina (2018 - Currently attending third year)
          </p>
          <p className="text-lg font-semibold mt-2">
            Bachelor of Social Sciences
          </p>
          <p>
            Nuestra Señora del Valle - Muñiz, Buenos Aires, Argentina (2011 -
            2017)
          </p>
        </TextBox>
        <TextBox bg="bg-sc_1" color="text-black">
          <h1 className="text-xl">Languages</h1>
          <ul className="list-disc ml-5">
            <li>Spanish: Native.</li>
            <li>
              English: Fluent. I've studied in Cambridge Institute (Buenos
              Aires) for 6 years and I'm always consuming media in this
              language.
            </li>
          </ul>
        </TextBox>
        <TextBox
          bg="bg-hl"
          color="text-white"
          cssClasses="w-80 self-center text-center justify-center z-40"
        >
          <h1 className="text-xl">Contact me</h1>
          <p className="mt-4">
            Email:
            <a
              className="underline mx-3 hover:cursor-pointer"
              onClick={handleOnClick}
            >
              {message}
            </a>
          </p>
        </TextBox>
        <div className="cool-wave lg:-mt-48" />
      </main>
    </div>
  );
}

export default App;
