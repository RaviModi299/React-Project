import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectsCard from "../../common/ProjectsCard";

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard src={viberr} h3="Viberr" p="Streaming App" />
                <ProjectsCard
                    src={freshBurger}
                    h3="Fresh Burger"
                    p="Humburger Restaurant"
                />
                <ProjectsCard src={hipsster} h3="Hipsster" p="Glasses Shop" />
                <ProjectsCard src={fitLift} h3="FitLift" p="Fitness App" />
            </div>
        </section>
    );
}

export default Projects;
