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
      title: "To-Do List",
      demo: "https://koya-madhusudhana-rao.github.io/100DaysJS/Day2/",
      code: "https://github.com/Koya-Madhusudhana-Rao/100DaysJS/tree/main/Day2",
      description: "A simple to-do app with add & delete features."
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
  