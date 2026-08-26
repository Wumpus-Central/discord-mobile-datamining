// === Module 9124: fetchGuildAffinities ===

// Module 9124 (fetchGuildAffinities)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};