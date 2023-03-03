export const getTeams = async () => {
  const res = await fetch("http://api.football-data.org/v2/teams", {
    headers: {
      "X-Auth-token": "8db0cc10dbc84eea919b4ae18574a72b",
    },
  });
  return res.json();
};
