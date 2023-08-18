import React from "react";
import Title from "../../components/Title";

function Blog() {
  return (
    <section className="py-20" id="blog">
      <div className="container">
        <Title
          page="Useful Reading"
          text="Few articles to read to know more about cryptocurrency"
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <span
                className="absolute top-3 bg-orange-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                }}
              >
                Announcement
              </span>
              <img src="assets/images/blog/blog-1.png" className="rounded-md" />
            </div>
            <p className="text-slate-500 mt-5">May 19 2020 . 5 min read</p>
            <h4 className="mt-1 text-lg">
              <a href="#">Introducing blazzing fast new user interface</a>
            </h4>
          </div>
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <span
                className="absolute top-3 bg-red-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                }}
              >
                Bitcoin
              </span>
              <img src="assets/images/blog/blog-3.png" className="rounded-md" />
            </div>
            <p className="text-slate-500 mt-5">May 18 2020 . 8 min read</p>
            <h4 className="mt-1 text-lg">
              <a href="#">What you should know before buying bitcoin</a>
            </h4>
          </div>
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <span
                className="absolute top-3 bg-blue-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                }}
              >
                Event
              </span>
              <img src="assets/images/blog/blog-2.png" className="rounded-md" />
            </div>
            <p className="text-slate-500 mt-5">May 13 2020 . 2 min read</p>
            <h4 className="mt-1 text-lg">
              <a href="#">A biggest crypto event to attend this month</a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
