import { Briefcase, Code, GraduationCap, Notebook, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3> */}

            <p className="text-muted-foreground">
              I’m a CS graduate with a sharp focus on web development, digital
              education, and intellectual storytelling. Backed by two industry
              internships, I’ve built fast, accessible web experiences.
              {/* and mentored students in core CS concepts and programming.
              My teaching style is rooted in clarity, curiosity, and real-world application. */}
            </p>

            <p className="text-muted-foreground">
              Outside the dev world, I create compelling content on sci-fi,
              philosophy, and history, blending deep research with creative
              insight to spark thought and imagination. At the intersection of
              code, curiosity, and creativity — that’s where I thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Aashish_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Development</h4>
                  <p className="text-muted-foreground">
                    Crafting ideas into interactive, user-friendly web & mobile
                    applications with latest technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Notebook className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mentorship</h4>
                  <p className="text-muted-foreground">
                    Tutored undergraduate and pre-university level students in
                    CS & specific subjects.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Video Creation & UI/UX</h4>
                  <p className="text-muted-foreground">
                    Created engaging short videos for social media,
                    using tools like CapCut, DaVinci Resolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
