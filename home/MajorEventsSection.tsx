export default function MajorEventsSection() {
  const homepageFeatures = [
    {
      title: "Experience What's Happening",
      cta: "Explore Events",
      href: "https://www.judahglobal.org/events",
      image: "/images/home/experience-whats-happening.jpg",
    },
    {
      title: "Find What Speaks to You",
      cta: "Discover Major Events",
      href: "https://www.judahglobal.org/major-events",
      image: "/images/home/find-what-speaks-to-you.jpg",
    },
    {
      title: "Built for Event Goers and Event Organizers",
      cta: "Promote Your Event",
      href: "https://www.judahglobal.org/promote-your-event",
      image: "/images/home/built-for-event-goers-and-organizers.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-12 sm:px-8">
      {/* Section heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0E1B34] md:text-4xl">
          One trusted destination for the global faith community
        </h2>

        <p className="mt-2 text-base text-gray-500">
          Discover what's happening across the Kingdom.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {homepageFeatures.map((feature) => (
          <a
            key={feature.title}
            href={feature.href}
            className="group relative overflow-hidden rounded-[28px] bg-[#0E1B34] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B34] via-[#0E1B34]/45 to-transparent" />

            {/* Text overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="text-2xl font-extrabold leading-tight md:text-3xl">
                {feature.title}
              </h3>

              <div className="mt-4 flex items-center gap-2">
                <span className="font-bold text-[#C7A24A]">
                  {feature.cta}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl font-bold text-[#C7A24A]"
                >
                  →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Main Judah Global CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://app.judahglobal.org/login"
          className="rounded-2xl bg-[#0E1B34] px-10 py-5 text-base font-extrabold text-white shadow-xl transition hover:bg-[#162847] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A24A] focus-visible:ring-offset-2">
          Enter Judah Global →
        </a>
      </div>
    </section>
  );
}