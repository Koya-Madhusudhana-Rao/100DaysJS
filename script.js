const projects = [
    {
      id: 1,
      title: "Digital Clock",
      demo: "https://koya-madhusudhana-rao.github.io/100DaysJS/Day1/",
      code: "https://github.com/Koya-Madhusudhana-Rao/100DaysJS/tree/main/Day1",
      description: "A real-time digital clock using JS."
    },
    {
      id: 2,
      title: "Age-Calculator",
      demo: "https://koya-madhusudhana-rao.github.io/100DaysJS/Day_2/",
      code: "https://github.com/Koya-Madhusudhana-Rao/100DaysJS/tree/main/Day_2",
      description: "A simple site to calculate your Age."
    },
    {
      id: 3,
      title: "Stop-Watch",
      demo: "https://koya-madhusudhana-rao.github.io/100DaysJS/Day_3/",
      code: "https://github.com/Koya-Madhusudhana-Rao/100DaysJS/tree/main/Day_3",
      description: "A simple site to calculate your Age."
    }
    // Add more projects here
  ];
  
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <h3>Day ${project.id}: ${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.demo}" target="_blank">🔗 Live</a>
      <a href="${project.code}" target="_blank">💻 Code</a>
    `;
    container.appendChild(div);
  });
  