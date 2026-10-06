// discord_app/modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import _mod9509 from "../../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../../autocompleter/createAutocompleterResultForChannelId.tsx";
import ShareConstants from "../../share/ShareConstants.tsx";
import FavoritesGuildSuggestionsStore from "../FavoritesGuildSuggestionsStore.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import ChannelAffinitiesV2Store from "../../channel_affinities_v2/ChannelAffinitiesV2Store.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_1, importDefault, set;

function getAffineChannelId(channelId) {
  return channelId.channelId;
}
function getAffineUserDMId(otherUserId) {
  return ChannelStore.getDMFromUserId(otherUserId.otherUserId);
}
let react = react_mod;
const NO_SUGGESTIONS = FavoritesGuildSuggestionsStore.NO_SUGGESTIONS;
const isAllowedType = ShareConstants.isAllowedType;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channelAffinities;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = require("ChannelAffinitiesV2ActionCreators");
          const channelAffinitiesV2 = obj.fetchChannelAffinitiesV2();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelAffinitiesV2Store];
        const fn2 = function l() {
          return channelAffinities.getChannelAffinities();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] !== stateFromStores) {
        let tmp11;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function c(score, score2) {
            return score2.score - score.score;
          };
          cResult[6] = fn3;
          tmp11 = fn3;
        } else {
          tmp11 = cResult[6];
        }
        const substr = stateFromStores.slice();
        const sorted = substr.sort(tmp11);
        cResult[4] = stateFromStores;
        cResult[5] = sorted;
        tmp10 = sorted;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  : () => {
      let channelAffinities;
      let stateFromStores;
      const effect = react.useEffect(() => {
        const obj = stateFromStores(dependencyMap[8]);
        const channelAffinitiesV2 = obj.fetchChannelAffinitiesV2();
      }, []);
      let obj = stateFromStores(504);
      const items = [ChannelAffinitiesV2Store];
      stateFromStores = obj.useStateFromStores(items, () => channelAffinities.getChannelAffinities());
      const items1 = [stateFromStores];
      return react.useMemo(() => {
        const substr = stateFromStores.slice();
        return substr.sort((score, score2) => score2.score - score.score);
      }, items1);
    };
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx");

export default function useFavoritesGuildSuggestionCandidates(arg0) {
  let affinities;
  let closure_0;
  let results;
  let userAffinitiesMap;
  _require = arg0;
  const tmp = require("useFavoritesGuildChannelFilter")();
  importDefault = tmp;
  let obj = require("useShareSearchResults");
  results = obj.useShareSearchResults({ channelFilter: tmp, includeFrecency: false }).results;
  let tmp2 = closure_11();
  react = tmp2;
  const effect = react.useEffect(() => {
    const obj = closure_0(results[10]);
    const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
  }, []);
  let obj2 = require("get initialized");
  let items = [UserAffinitiesV2Store];
  const stateFromStores = obj2.useStateFromStores(items, () => userAffinitiesMap.getUserAffinitiesMap());
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const array = new Array(stateFromStores.size);
    closure_1 = 0;
    const item = stateFromStores.forEach((item) => {
      closure_1 = tmp + 1;
      array[+closure_1] = item;
    });
    return array.sort((dmProbability, dmProbability2) => dmProbability2.dmProbability - dmProbability.dmProbability);
  }, items1);
  const items2 = [tmp2, tmp, arg0, results, memo];
  return react.useMemo(() => {
    let items = [];
    set = new Set();
    const obj = { affinities, getChannelId: getAffineChannelId, index: 0 };
    const obj2 = { affinities: memo, getChannelId: getAffineUserDMId, index: 0 };
    let num = 0;
    if (items.length < closure_0) {
      while (true) {
        let result = items.length % 2;
        let obj4 = obj2;
        if (result === 0) {
          obj4 = obj;
        }
        let tmp3 = null;
        if (obj4.index < obj4.affinities.length) {
          while (true) {
            let tmp4 = obj4.affinities[obj4.index];
            obj4.index = obj4.index + 1;
            if (null != tmp4) {
              let channelId = obj4.getChannelId(tmp4);
              if (null != channelId) {
                let tmp8 = createAutocompleterResultForChannelIdDefault(channelId);
                if (null != tmp8) {
                  if (isAllowedType(tmp8)) {
                    if (!set.has(tmp8.record.id)) {
                      tmp3 = tmp8;
                      if (closure_1(tmp8, false)) {
                        break;
                      }
                    }
                    break;
                  }
                }
              }
            }
            tmp3 = null;
            if (obj4.index >= obj4.affinities.length) {
              break;
            }
          }
        }
        if (null == tmp3) {
          let obj5 = obj;
          if (result === 0) {
            obj5 = obj2;
          }
          let tmp11 = null;
          if (obj5.index < obj5.affinities.length) {
            while (true) {
              let tmp12 = obj5.affinities[obj5.index];
              obj5.index = obj5.index + 1;
              if (null != tmp12) {
                let channelId1 = obj5.getChannelId(tmp12);
                if (null != channelId1) {
                  let tmp16 = createAutocompleterResultForChannelIdDefault(channelId1);
                  if (null != tmp16) {
                    if (isAllowedType(tmp16)) {
                      if (!set.has(tmp16.record.id)) {
                        tmp11 = tmp16;
                        if (closure_1(tmp16, false)) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                }
              }
              tmp11 = null;
              if (obj5.index >= obj5.affinities.length) {
                break;
              }
            }
          }
          tmp3 = tmp11;
        }
        let tmp19 = num;
        if (null == tmp3) {
          let tmp25 = num;
          let tmp26 = num;
          if (num < results.length) {
            while (true) {
              let tmp20 = results[tmp25];
              let sum = tmp25 + 1;
              if (null != tmp20) {
                let tmp24;
                if (tmp20.type !== _mod9509.AutocompleterResultTypes.HEADER) {
                  tmp24 = sum;
                  if (!set.has(tmp20.record.id)) {
                    break;
                  }
                }
                tmp19 = tmp24;
                tmp3 = tmp20;
              }
              tmp25 = sum;
              tmp26 = sum;
            }
          }
          tmp24 = tmp26;
          tmp20 = null;
        }
        if (null == tmp3) {
          break;
        } else {
          let addResult = set.add(tmp3.record.id);
          let arr = items.push(tmp3);
          num = tmp19;
          if (items.length >= closure_0) {
            break;
          }
        }
      }
    }
    if (items.length <= 0) {
      items = NO_SUGGESTIONS;
    }
    return items;
  }, items2);
}
