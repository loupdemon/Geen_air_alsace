import buts from "../assets/images/faq/buts.png";
import lora from "../assets/images/faq/lora.png";

const Faqs = [
    {
        id: 2,
        question: "Why G2A?",
        col: "collapseTwo",
        answer: <ol>
            <p>But, one of the limitations of this sensor which has given rise to several discussions among users is the need to connect to a wifi access point..</p>
            <img  sx={{ width: "100%", height: "auto" }} src={buts} alt="buts" />
        </ol>
    },
    {
        id: 3,
        question: "What's our next Steps ?",
        col: "collapseThree",
        answer: <ol>
            <p>There are transfer technologies that are much more suitable for this kind of use, much less energy-consuming and with a range much greater than wifi, in particular LoRa technology.</p>
            <img  sx={{ width: "100%", height: "auto" }} src={lora} alt="lora" />
        </ol>
    },
    {
        id: 5,
        question: "what we focused on ?",
        col: "collapseFive",
        answer: <ol>
            <p>In our development community, we focused on brushing up skills, team management, etc. </p>

            <p> Mainly we provide knowledge on various technologies and try to build influential communication network among all programmer by online meetings.</p>
        </ol>
    },
    {
        id: 6,
        question: "what's project Work ?",
        col: "collapseSix",
        answer: <ol>
            <p>We began our journey by developing and hosting an individual portfolio of each developer in this group.</p>

            <p>We are currently, working on a landing page aka the Official Website of the G2A community an others projects</p>
        </ol>
    },
    {
        id: 7,
        question: "How to developed Skill ?",
        col: "collapseSeven",
        answer: <ol>
            <p>For starters, we have invested a lot of time in learning the basics of nodeJS, and C#.</p>

            <p>Further, we will try to move on to the new trending technologies of  Angular, Laravel,  C++ etc.</p>

            <p>We have plans to develop real-time project with other members.</p>
        </ol>
    },
    {
        id: 8,
        question: "How to communicate ?",
        col: "collapseEight",
        answer: <ol>
            <p>For the sake of this community, we regularly try to meet at least once and discuss our progress.</p>

            <p>We are working to reach out more and having active social media profiles are one of the most important things </p>

            <p><strong>The two important things that we learn that "We are as powerful and strong as we allow yourself to be", and "The most challenging part of any endeavor is taking the first step, i.e.  making the first decision."</strong></p>
        </ol>
    },
];
export default Faqs;