import React from "react";
import { Teams } from "../../models";

interface Props {
  teams: Teams;
}

function TeamList({ teams }: Props) {
  return (
    <section className="">
      <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">
        {teams.teams.map((team) => (
          <div key={team.id}>
            <a href="">
              <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                  {/* <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/images/placeholders/neon-1.jpg" alt="blog" > */}
                  <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                      <span className="">{team.name}</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                      Install Tailwind CSS without any Javascript Framewrok
                      locally with purgeCSS, enable the dark mode option,
                      prefferences or class is upt to you.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamList;
