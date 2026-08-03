// === Module 5104: HeaderRecord ===

// Module 5104 (HeaderRecord)
const result = require("set").fileFinishedImporting("modules/autocompleter/AutocompleterConstants.tsx");

export const HeaderRecord = function HeaderRecord(id) {
  const obj = Object.create(new.target.prototype);
  obj.id = id;
  obj.text = id;
  return obj;
}.prototype;
export const FindResultDirections = { UP: "UP", DOWN: "DOWN" };
export const AutocompleterResultTypes = { GUILD: "GUILD", TEXT_CHANNEL: "TEXT_CHANNEL", GROUP_DM: "GROUP_DM", VOICE_CHANNEL: "VOICE_CHANNEL", USER: "USER", HEADER: "HEADER", APPLICATION: "APPLICATION", GAME_PROFILE: "GAME_PROFILE", SKU: "SKU", LINK: "LINK", IN_APP_NAVIGATION: "IN_APP_NAVIGATION", DM: "DM" };
export const AutocompleterQuerySymbols = { USER: "@", TEXT_CHANNEL: "#", VOICE_CHANNEL: "!", GUILD: "*", GAME_PROFILE: "$" };