// === Module 9053: fetchGuildAffinities ===

// Module 9053 (fetchGuildAffinities)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((result) => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: result.body.guild_affinities });
  }, () => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};