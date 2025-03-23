import React, { useState } from "react";

const skillsData = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "Node.js", category: "Backend" },
  { id: 3, name: "JavaScript", category: "Frontend" },
  { id: 4, name: "Python", category: "Backend" },
  { id: 5, name: "CSS", category: "Frontend" },
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredSkills(
      skillsData.filter((skill) =>
        skill.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <section>
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredSkills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
