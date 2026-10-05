// discord_app/actions/GuildAffinitiesActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.GUILD_AFFINITIES, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
  const get = HTTP.get;
  obj2 = HTTPUtils;
  const value = get(obj);
  return value.then(
    (body) => {
      const guild_affinities = body.body.guild_affinities;
      const obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: guild_affinities });
    },
    () => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
    },
  );
};
