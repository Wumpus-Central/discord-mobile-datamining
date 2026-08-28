// === Module 15787: fetchMobileGameCommunities ===

// Module 15787 (fetchMobileGameCommunities)
import setDefault from "set" /* 687 */;
import parseDefault from "parse" /* 1484 */;
import closure_3 from "set" /* 15153 */;
import { Endpoints } from "ME" /* 676 */;
import importDefaultResult from "fails" /* 584 */;
import importDefaultResult1 from "dispatcher" /* 709 */;

const require = arg1;
importDefaultResult = new importDefaultResult(setDefault.Millis.SECOND, setDefault.Millis.MINUTE, true);
let c5 = importDefaultResult;
const subscription = importDefaultResult1.subscribe("LOGOUT", () => importDefaultResult.succeed());
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

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
  const HTTP = _require(530).HTTP;
  let obj = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
  obj = { game_ids: gameIdsForDetectedGames, limit: num, ignored_guild_ids: items };
  obj[1] = parseDefault.stringify(obj);
  const value = HTTP.get(obj);
  return value.then((body) => {
    closure_1_5.succeed();
    let obj = closure_1_1(closure_1_2[4]);
    obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
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
        value.then((body) => {
          closure_1_5.succeed();
          let obj = closure_1_1(closure_1_2[4]);
          obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
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
              value.then(() => { ... }, () => { ... }).catch(/* F120601 */ function() { ... });
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
      obj[1] = parseDefault.stringify(obj);
      const value = HTTP.get(obj);
      return value.then((body) => {
        closure_1_5.succeed();
        let obj = closure_1_1(closure_1_2[4]);
        obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
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
            value.then((body) => {
              closure_1_5.succeed();
              let obj = closure_1_1(closure_1_2[4]);
              obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds: arr };
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
                  value.then(() => { ... }, () => { ... }).catch(/* F120601 */ function() { ... });
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
  let obj = importDefaultResult1;
  obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};