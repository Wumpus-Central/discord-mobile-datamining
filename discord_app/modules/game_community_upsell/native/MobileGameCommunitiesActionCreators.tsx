// discord_app/modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import _modDef1471 from "../../../../_runtime/metro/01471__.js";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";
import Backoff from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import Dispatcher from "../../../Dispatcher.tsx";

const require = fn;
const Endpoints = fn(1074).Endpoints;
Backoff = new Backoff(DurationsDefault.Millis.SECOND, DurationsDefault.Millis.MINUTE, true);
const subscription = Dispatcher.subscribe("LOGOUT", () => Backoff.succeed());
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(gameIdsForDetectedGames, arg1, arg2) {
  _require = gameIdsForDetectedGames;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 20;
  }
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: _modDef1471.stringify({ game_ids: gameIdsForDetectedGames, limit: num, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(request);
  return value.then((body) => {
    pending.succeed();
    closure_2_1(dependencyMap[4]);
    const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds };
    obj.dispatch(obj);
  }, () => {
    closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
    if (!pending.pending) {
      pending.fail(() => {
        let game_ids = Array.from(closure_3.getLastFetchedGameIds());
        let items = Array.from(closure_3.getDismissedGuildIds());
        if (items === undefined) {
          items = [];
        }
        let HTTP = game_ids(dependencyMap[5]).HTTP;
        let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
        let value = HTTP.get(request);
        let obj2 = closure_1(dependencyMap[6]);
        value.then((body) => {
          pending.succeed();
          closure_2_1(dependencyMap[4]);
          const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds };
          obj.dispatch(obj);
        }, () => {
          closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
          if (!pending.pending) {
            pending.fail(() => {
              let game_ids = Array.from(closure_3.getLastFetchedGameIds());
              let items = Array.from(closure_3.getDismissedGuildIds());
              if (items === undefined) {
                items = [];
              }
              let HTTP = game_ids(dependencyMap[5]).HTTP;
              let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
              let value = HTTP.get(request);
              let obj2 = closure_1(dependencyMap[6]);
              value.then(() => { ... }, () => { ... }).catch(/* F123678 */ function() { ... });
            });
          }
        }).catch(() => {

        });
      });
    }
  });
};
export const fetchMobileGameCommunitiesIfStale = function fetchMobileGameCommunitiesIfStale() {
  if (!Backoff.pending) {
    const _Date = Date;
    let obj = MobileGameCommunitiesStore;
    const timestamp = Date.now();
    if (timestamp - MobileGameCommunitiesStore.getLastFetchedAt() >= 15000) {
      const _Array = Array;
      const game_ids = Array.from(obj.getLastFetchedGameIds());
      const _Array2 = Array;
      let items = Array.from(obj.getDismissedGuildIds());
      if (items === undefined) {
        items = [];
      }
      const HTTP = game_ids(1272).HTTP;
      const request = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
      obj = { game_ids, limit: 20, ignored_guild_ids: items };
      request.query = _modDef1471.stringify(obj);
      value = HTTP.get(request);
      return value.then((body) => {
        pending.succeed();
        closure_2_1(dependencyMap[4]);
        const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds };
        obj.dispatch(obj);
      }, () => {
        closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
        if (!pending.pending) {
          pending.fail(() => {
            let game_ids = Array.from(closure_3.getLastFetchedGameIds());
            let items = Array.from(closure_3.getDismissedGuildIds());
            if (items === undefined) {
              items = [];
            }
            let HTTP = game_ids(dependencyMap[5]).HTTP;
            let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
            let value = HTTP.get(request);
            let obj2 = closure_1(dependencyMap[6]);
            value.then((body) => {
              pending.succeed();
              closure_2_1(dependencyMap[4]);
              const obj = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds };
              obj.dispatch(obj);
            }, () => {
              closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
              if (!pending.pending) {
                pending.fail(() => {
                  let game_ids = Array.from(closure_3.getLastFetchedGameIds());
                  let items = Array.from(closure_3.getDismissedGuildIds());
                  if (items === undefined) {
                    items = [];
                  }
                  let HTTP = game_ids(dependencyMap[5]).HTTP;
                  let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
                  let value = HTTP.get(request);
                  let obj2 = closure_1(dependencyMap[6]);
                  value.then(() => { ... }, () => { ... }).catch(/* F123678 */ function() { ... });
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
  const obj = { type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId };
  obj.dispatch(obj);
};