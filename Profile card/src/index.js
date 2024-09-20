import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
    },
    {
        skill: "Javascript",
        level: "advanced",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCEF",
    },
    {
        skill: "Git and Github",
        level: "intermediate",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB",
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
    },
];

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="./profile/ravi.png" alt="profile" />;
}

function Intro() {
    return (
        <div>
            <h1>Ravi Modi</h1>
            <p>
                Experienced in creating dynamic, user-friendly websites and
                applications. Proficient in HTML, CSS, JavaScript, and modern
                frameworks like React, Magento, and WordPress. Adept at
                translating designs into responsive interfaces. Collaborative,
                committed to continuous learning and high-quality solutions.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((s1) => (
                <Skill
                    skill={s1.skill}
                    level={s1.level}
                    color={s1.color}
                    key={s1.skill}
                />
            ))}
            {/* <Skill skill="React" emoji="👍" color="aqua" />
            <Skill skill="HTML+CSS" emoji="👍" color="orange" />
            <Skill skill="JavaScript" emoji="👍" color="yellow" />
            <Skill skill="Svelte" emoji="🙂" color="red" /> */}
        </div>
    );
}

function Skill({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </div>
    );
}

App();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
