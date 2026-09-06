// discord_app/modules/guild_profile/GuildPopoutActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _fetchGuildForPopout() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.GUILD_PREVIEW(guildId), oldFormErrors: true, rejectWithError: true });
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[2]).dispatch({ type: "GUILD_POPOUT_FETCH_FAILURE", guildId: closure_129_0 });
      c6 = 3;
      closure_130_1(closure_130_2[2]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_1 = value;
      closure_130_1(closure_130_2[2]).dispatch({
        type: "GUILD_POPOUT_FETCH_SUCCESS",
        guildId: closure_129_0,
        guild: closure_129_1.body,
      });
      c4 = 0;
      closure_130_1(closure_130_2[2]);
    }
    return value;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/GuildPopoutActionCreators.tsx");

export const fetchGuildForPopout = function fetchGuildForPopout() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
