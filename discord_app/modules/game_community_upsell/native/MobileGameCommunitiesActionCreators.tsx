// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
import set from "set";
import { Endpoints } from "ME";
import importDefaultResult from "fails";
import importDefaultResult1 from "dispatcher";
import { parse } from "../../../../_runtime/01483_parse.js";
import { sendRequest } from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";

const require = arg1;
importDefaultResult = new importDefaultResult(require("set").Millis.SECOND, require("set").Millis.MINUTE, true);
let c5 = importDefaultResult;
const subscription = require("dispatcher").subscribe("LOGOUT", () => importDefaultResult.succeed());
const result = require("fails").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(gameIdsForDetectedGames, arg1, closure_5) {
  const _require = gameIdsForDetectedGames;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let num = closure_5;
  if (closure_5 === undefined) {
    num = 20;
  }
  const HTTP = _sendRequest.HTTP;
  let obj = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
  obj = { game_ids: gameIdsForDetectedGames, limit: num, ignored_guild_ids: items };
  obj[1] = parse.stringify(obj);
  const value = HTTP.get(obj);
  return value.then((body) => {
    outer1_5.succeed();
    let obj = outer1_1(outer1_2[4]);
    obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
    obj.dispatch(obj);
  }, () => {
    callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
    if (!pending.pending) {
      pending.fail(() => {
        let arr = Array.from(store.getLastFetchedGameIds());
        let items = Array.from(store.getDismissedGuildIds());
        if (items === undefined) {
          items = [];
        }
        let HTTP = arr(dependencyMap[5]).HTTP;
        let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
        obj[1] = callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items });
        let value = HTTP.get(obj);
        let obj2 = callback(dependencyMap[6]);
        value.then((body) => {
          outer1_5.succeed();
          let obj = outer1_1(outer1_2[4]);
          obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
          obj.dispatch(obj);
        }, () => {
          callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
          if (!pending.pending) {
            pending.fail(() => {
              let arr = Array.from(store.getLastFetchedGameIds());
              let items = Array.from(store.getDismissedGuildIds());
              if (items === undefined) {
                items = [];
              }
              let HTTP = arr(dependencyMap[5]).HTTP;
              let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
              obj[1] = callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items });
              let value = HTTP.get(obj);
              let obj2 = callback(dependencyMap[6]);
              value.then(() => { ... }, () => { ... }).catch(/* F118482 */ function() { ... });
            });
          }
        }).catch(() => {

        });
      });
    }
  });
};
export const fetchMobileGameCommunitiesIfStale = function fetchMobileGameCommunitiesIfStale() {
  if (!importDefaultResult.pending) {
    const _Date = Date;
    let obj = lastFetchedAt;
    const timestamp = Date.now();
    if (timestamp - lastFetchedAt.getLastFetchedAt() >= 15000) {
      const _Array = Array;
      const arr = Array.from(obj.getLastFetchedGameIds());
      const _Array2 = Array;
      let items = Array.from(obj.getDismissedGuildIds());
      if (items === undefined) {
        items = [];
      }
      const HTTP = arr(530).HTTP;
      obj = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
      obj[0] = Endpoints.MOBILE_GAME_COMMUNITIES;
      obj = { game_ids: null, limit: null, ignored_guild_ids: null };
      obj[0] = arr;
      obj[1] = 20;
      obj[2] = items;
      obj[1] = parse.stringify(obj);
      const value = HTTP.get(obj);
      return value.then((body) => {
        outer1_5.succeed();
        let obj = outer1_1(outer1_2[4]);
        obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
        obj.dispatch(obj);
      }, () => {
        callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
        if (!pending.pending) {
          pending.fail(() => {
            let arr = Array.from(store.getLastFetchedGameIds());
            let items = Array.from(store.getDismissedGuildIds());
            if (items === undefined) {
              items = [];
            }
            let HTTP = arr(dependencyMap[5]).HTTP;
            let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
            obj[1] = callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items });
            let value = HTTP.get(obj);
            let obj2 = callback(dependencyMap[6]);
            value.then((body) => {
              outer1_5.succeed();
              let obj = outer1_1(outer1_2[4]);
              obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
              obj.dispatch(obj);
            }, () => {
              callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
              if (!pending.pending) {
                pending.fail(() => {
                  let arr = Array.from(store.getLastFetchedGameIds());
                  let items = Array.from(store.getDismissedGuildIds());
                  if (items === undefined) {
                    items = [];
                  }
                  let HTTP = arr(dependencyMap[5]).HTTP;
                  let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
                  obj[1] = callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items });
                  let value = HTTP.get(obj);
                  let obj2 = callback(dependencyMap[6]);
                  value.then(() => { ... }, () => { ... }).catch(/* F118482 */ function() { ... });
                });
              }
            }).catch(() => {

            });
          });
        }
      });
    }
  }
};
export const dismissGuild = function dismissGuild(guildId) {
  let obj = dispatcher;
  obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};