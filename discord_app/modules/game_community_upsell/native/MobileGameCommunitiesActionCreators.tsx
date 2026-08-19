// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
import obj132Default from "../../../utils/Durations.tsx";
import parseDefault from "../../../../_runtime/01484_parse.js";
import set from "MobileGameCommunitiesStore.tsx";
import { Endpoints } from "../../../Constants.tsx";
import importDefaultResult from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import importDefaultResult1 from "../../../Dispatcher.tsx";

const require = fn;
importDefaultResult = new importDefaultResult(obj132Default.Millis.SECOND, obj132Default.Millis.MINUTE, true);
let c5 = importDefaultResult;
const subscription = importDefaultResult1.subscribe("LOGOUT", () => importDefaultResult.succeed());
const result = require("obj132").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

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
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  const obj = { game_ids: gameIdsForDetectedGames, limit: num, ignored_guild_ids: items };
  obj[1] = parseDefault.stringify(obj);
  const value = HTTP.get(obj);
  return value.then((result) => {
    closure_1_5.succeed();
    closure_1_1(closure_1_2[4]);
    const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: result.body.guilds, gameIds: arr };
    obj.dispatch(obj);
  }, () => {
    callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
    if (!pending.pending) {
      pending.fail(() => {
        arr = Array.from(store.getLastFetchedGameIds());
        let items = Array.from(store.getDismissedGuildIds());
        if (items === undefined) {
          items = [];
        }
        let HTTP = arr(dependencyMap[5]).HTTP;
        let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
        let value = HTTP.get(obj);
        let obj2 = callback(dependencyMap[6]);
        value.then((result) => {
          closure_1_5.succeed();
          closure_1_1(closure_1_2[4]);
          const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: result.body.guilds, gameIds: arr };
          obj.dispatch(obj);
        }, () => {
          callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
          if (!pending.pending) {
            pending.fail(() => {
              arr = Array.from(store.getLastFetchedGameIds());
              let items = Array.from(store.getDismissedGuildIds());
              if (items === undefined) {
                items = [];
              }
              let HTTP = arr(dependencyMap[5]).HTTP;
              let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
              let value = HTTP.get(obj);
              let obj2 = callback(dependencyMap[6]);
              value.then(() => { ... }, () => { ... }).catch(/* F118736 */ function() { ... });
            });
          }
          let obj = callback(table[4]);
        }).catch((error) => {

        });
      });
    }
    let obj = callback(table[4]);
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
      obj[1] = parseDefault.stringify(obj);
      const value = HTTP.get(obj);
      return value.then((result) => {
        closure_1_5.succeed();
        closure_1_1(closure_1_2[4]);
        const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: result.body.guilds, gameIds: arr };
        obj.dispatch(obj);
      }, () => {
        callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
        if (!pending.pending) {
          pending.fail(() => {
            arr = Array.from(store.getLastFetchedGameIds());
            let items = Array.from(store.getDismissedGuildIds());
            if (items === undefined) {
              items = [];
            }
            let HTTP = arr(dependencyMap[5]).HTTP;
            let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
            let value = HTTP.get(obj);
            let obj2 = callback(dependencyMap[6]);
            value.then((result) => {
              closure_1_5.succeed();
              closure_1_1(closure_1_2[4]);
              const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: result.body.guilds, gameIds: arr };
              obj.dispatch(obj);
            }, () => {
              callback(table[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
              if (!pending.pending) {
                pending.fail(() => {
                  arr = Array.from(store.getLastFetchedGameIds());
                  let items = Array.from(store.getDismissedGuildIds());
                  if (items === undefined) {
                    items = [];
                  }
                  let HTTP = arr(dependencyMap[5]).HTTP;
                  let obj = { url: constants.MOBILE_GAME_COMMUNITIES, query: callback(dependencyMap[6]).stringify({ game_ids: arr, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
                  let value = HTTP.get(obj);
                  let obj2 = callback(dependencyMap[6]);
                  value.then(() => { ... }, () => { ... }).catch(/* F118736 */ function() { ... });
                });
              }
              let obj = callback(table[4]);
            }).catch((error) => {

            });
          });
        }
        let obj = callback(table[4]);
      });
    }
  }
};
export const dismissGuild = function dismissGuild(guildId) {
  const obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};