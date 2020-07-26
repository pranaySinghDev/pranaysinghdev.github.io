<script>
  import { afterUpdate } from "svelte";
  import { tsParticles } from "tsparticles";
  export let id = "tsparticles";
  export let dataset;
  let oldId = id;
  export let options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000000",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
  };
  afterUpdate(() => {
    if (oldId) {
      const oldContainer = tsParticles.dom().find((c) => c.id == oldId);
      if (oldContainer) {
        oldContainer.destroy();
      }
    }
    if (id) {
      tsParticles.load(id, options).then(() => {
        oldId = id;
      });
    }
  });
</script>

<svelte:options tag="svelte-particles" accessors={true} />
<main>
  <div id="tsparticles" style="position: relative;">
    <body id="page-top">
      <!-- Navigation-->
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Clarence Taylor</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.jpg"
              alt=""
              height="250"
              width="150" />
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Page Content-->
      <div class="container-fluid p-0">
        <!-- About-->
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              {dataset.first_name}
              <span class="text-primary">{dataset.last_name}</span>
            </h1>
            <div class="subheading mb-5">
              {dataset.reaching}
              <a href={dataset.email}>{dataset.email}</a>
            </div>
            <p class="lead mb-5">{dataset.aspirations}</p>
            <span class="typed" />
            <div class="social-icons">
              <a class="social-icon" href={dataset.linkedin} target="_blank">
                <i class="fab fa-linkedin-in" />
              </a>
              <a class="social-icon" href={dataset.github} target="_blank">
                <i class="fab fa-github" />
              </a>
              <a class="social-icon" href={dataset.twitter} target="_blank">
                <i class="fab fa-twitter" />
              </a>
              <a class="social-icon" href={dataset.instagram} target="_blank">
                <i class="fab fa-instagram" />
              </a>
              <a class="social-icon" href={dataset.medium} target="_blank">
                <i class="fab fa-medium" />
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <!-- Experience-->
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            {#each dataset.experiences as experience}
              <div
                class="d-flex flex-column flex-md-row justify-content-between
                mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">{experience.title}</h3>
                  <div class="subheading mb-3">{experience.company}</div>
                  <p>{experience.description}</p>
                </div>
                <div class="flex-shrink-0">
                  <span class="text-primary">{experience.duration}</span>
                </div>
              </div>
            {/each}
          </div>
        </section>
        <hr class="m-0" />
        <!-- Education-->
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            {#each dataset.educations as education}
              <div
                class="d-flex flex-column flex-md-row justify-content-between
                mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">{education.college}</h3>
                  <div class="subheading mb-3">{education.university}</div>
                  <div>{education.course}</div>
                  <p>GPA: {education.score}</p>
                </div>
                <div class="flex-shrink-0">
                  <span class="text-primary">{education.duration}</span>
                </div>
              </div>
            {/each}
          </div>
        </section>
        <hr class="m-0" />
        <!-- Skills-->
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            {#each dataset.skills as skill}
              <div class="subheading mb-3">{skill.name}</div>
              <ul class="list-inline dev-icons">
                {#each skill.techs as tech}
                  <li class="list-inline-item">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={tech} height="50" width="50" />
                  </li>
                {/each}
              </ul>
            {/each}
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check" />
                </span>
                Mobile-First, Responsive Design
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
        <!-- Interests-->
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            {#each dataset.interests as interest}
              <p>{interest}</p>
            {/each}
          </div>
        </section>
        <hr class="m-0" />
        <!-- Awards-->
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              {#each dataset.awards as award}
                <li>
                  <span class="fa-li">
                    <i class="fas fa-trophy text-warning" />
                  </span>
                  {award}
                </li>
              {/each}
            </ul>
          </div>
        </section>
      </div>
    </body>
  </div>
</main>
