import React from 'react';

const About = () => {
  return (
    <>
      {/* //left side */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-2  gap-12 max-w-7xl container mx-auto">
          <div className="mt-8">
            <h1 className="font-extrabold text-4xl  ">About Us</h1>
            <p className=" mt-[40px]  lg:w-[640px] ">
              Medswiss Hospicare & Research Institute (P) Ltd. was founded in
              2022 with registered entity under the Ministry of Corporate
              Affairs (MCA), Government of India, and an accredited MSME.
              Medswiss Healthcare & Research Institute was established with a
              visionary goal to bridge the gaps across various healthcare
              domains, contributing to community development and ensuring easy
              accessibility to quality healthcare services. By integrating
              advanced research, cutting-edge healthcare solutions, and a deep
              focus on community well-being, Medswiss Healthcare & Research
              Institute is dedicated to making healthcare more accessible,
              affordable, and effective for all. Our approach blends clinical
              excellence with a community-centric model, aiming to transform the
              healthcare landscape through collaborative efforts,
              research-driven insights, and tailored programs. <br />
              <br />​ Medswiss Academy is a leading institution dedicated to
              empowering healthcare professionals through advanced,
              industry-driven educational programs. With a focus on bridging the
              gap between academic knowledge and industry demands, we offer
              specialized courses designed to upskill professionals and enhance
              their employability in an ever-evolving healthcare landscape. By
              partnering with industry leaders and academic experts, Medswiss
              Academy is shaping the future of healthcare education, preparing
              professionals to excel in a dynamic and competitive market
            </p>

            <button
              type="button"
              className="mt-6 flex items-end justify-end rounded-sm bg-black px-8 py-3 text-white transition hover:bg-white hover:border hover:border-black hover:text-black ml-[450px]"
            >
              Know More
            </button>
          </div>
          {/* Right section */}
          <div className=" px-10 lg:py-24">
            <h3 className="text-4xl font-light mb-8 text-[#7a2b22]">
              Contact information
            </h3>

            <form className="space-y-5  ">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="firstName"
                    required
                    className="rounded-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Last name</label>
                  <input
                    name="lastName"
                    className="rounded-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Address</label>
                  <input
                    name="address"
                    className="rounded-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Phone</label>
                <div className="flex">
                  <select
                    name="countryCode"
                    className="rounded-l-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    defaultValue="+91"
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-r-sm border border-l-0 border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">
                  Interested For <span className="text-red-500">*</span>
                </label>
                <input
                  name="interestedFor"
                  required
                  className="rounded-sm border border-orange-400 bg-orange-50 px-3 py-2 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <button className="w-full rounded-sm bg-[#c24414] py-3 text-white font-medium tracking-wide transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c24414] focus:ring-offset-2 disabled:opacity-60">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
