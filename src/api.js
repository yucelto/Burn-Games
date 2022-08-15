//Base URL
const base_url = "https://api.rawg.io/api/";
//Get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Get day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Get current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
//Current date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//Popular Games
const popular_games = `games?key=f7fd1ce93f584ff88893d692f366cd4e&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
//Upcoming games
const upcoming_games = `games?key=f7fd1ce93f584ff88893d692f366cd4e&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
//New Games
const new_games = `games?key=f7fd1ce93f584ff88893d692f366cd4e&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
export const newGamesURL = () => `${base_url}${new_games}`;
