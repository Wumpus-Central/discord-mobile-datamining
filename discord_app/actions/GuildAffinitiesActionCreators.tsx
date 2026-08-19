// discord_app/actions/GuildAffinitiesActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../Constants.tsx";

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