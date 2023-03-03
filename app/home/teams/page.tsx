import React from "react";
import { TeamList } from "./components";
import { getTeams } from "./services/teams.service";

async function Teams() {
  const data = await getTeams();
  return <div><TeamList teams={data}/></div>;
}

export default Teams;
