// discord_app/actions/GuildAffinitiesActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/GuildAffinitiesActionCreators.tsx");

export const fetchGuildAffinities = function fetchGuildAffinities() {
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: Endpoints.GUILD_AFFINITIES,
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  value = HTTP.get(obj);
  return value.then(
    (guildAffinities) => {
      DispatcherDefault.dispatch({
        type: "LOAD_GUILD_AFFINITIES_SUCCESS",
        guildAffinities: guildAffinities.body.guild_affinities,
      });
    },
    () => {
      DispatcherDefault.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
    },
  );
};
