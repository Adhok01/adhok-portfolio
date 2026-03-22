import "./styles/Education.css";

const educationData = [
    {
        degree: "MBA in Marketing & Product Management",
        university: "Jain CMS Business School",
        year: "2025 — 2027",
    },
    {
        degree: "Executive PGP in AI Product Management",
        university: "Indian School of Business, Hyderabad",
        year: "1 Year Program",
    },
    {
        degree: "MS by Research in AI & Data Science",
        university: "Reva University",
        year: "2021 — 2023",
    },
    {
        degree: "BSc in Computer Science",
        university: "Karnataka University",
        year: "2018 — 2021",
    },
];

const Education = () => {
    return (
        <section className="education-section" id="education">
            <h2 className="education-title">Education</h2>
            {educationData.map((edu, index) => (
                <div className="education-card" key={index}>
                    <div className="education-left">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-university">{edu.university}</p>
                    </div>
                    <div className="education-right">
                        <p className="education-year">{edu.year}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;
