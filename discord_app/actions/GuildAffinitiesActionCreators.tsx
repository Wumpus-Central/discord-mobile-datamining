// === Module 8346: fetchGuildAffinities ===

// Module 8346 (fetchGuildAffinities)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    callback(573).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    callback(573).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};