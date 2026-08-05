import { parse } from "../../../../_runtime/01464_parse.js";
import { sendRequest } from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
import { Endpoints } from "ME";

const result = require("parse").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(arr, arr2, arg2) {
  const _require = arr;
  let items = arr2;
  if (arr2 === undefined) {
    items = [];
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 20;
  }
  const HTTP = _sendRequest.HTTP;
  let obj = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
  obj = { game_ids: arr, limit: num, ignored_guild_ids: items };
  obj[1] = parse.stringify(obj);
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: closure_0 };
    obj.dispatch(obj);
  }, () => {
    callback(table[3]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
  });
};
export const dismissGuild = function dismissGuild(guildId) {
  let obj = dispatcher;
  obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};