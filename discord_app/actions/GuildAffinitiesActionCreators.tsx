import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: null };
  obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
  const value = HTTP.get(obj);
  return value.then((guildAffinities) => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guildAffinities.body.guild_affinities });
  }, () => {
    callback(709).dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
  });
};