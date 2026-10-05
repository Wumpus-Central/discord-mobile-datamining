// discord_app/modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import sortByMatchScore from "../../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../../autocompleter/createAutocompleterResultForChannelId.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelAffinitiesV2Store from "../../channel_affinities_v2/ChannelAffinitiesV2Store.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
function getAffineChannelId(channelId) {
  return channelId.channelId;
}
function getAffineUserDMId(otherUserId) {
  return ChannelStore.getDMFromUserId(otherUserId.otherUserId);
}
const NO_SUGGESTIONS = fn(16127).NO_SUGGESTIONS;
const isAllowedType = fn(10712).isAllowedType;
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const channelAffinitiesV2 = require("ChannelAffinitiesV2ActionCreators").fetchChannelAffinitiesV2();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelAffinitiesV2Store];
        const fn2 = function l() {
          return channelAffinities.getChannelAffinities();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp8 = fn2;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function c(score, score2) {
            return score2.score - score.score;
          };
          cResult[6] = fn3;
          let tmp10 = fn3;
        } else {
          tmp10 = cResult[6];
        }
        const substr = stateFromStores.slice();
        const sorted = substr.sort(tmp10);
        cResult[4] = stateFromStores;
        cResult[5] = sorted;
      } else {
        return cResult[5];
      }
      const tmpResult = initialize;
    }
  : () => {
      const effect = noop.useEffect(() => {
        const channelAffinitiesV2 = stateFromStores(dependencyMap[8]).fetchChannelAffinitiesV2();
      }, []);
      const items = [ChannelAffinitiesV2Store];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => channelAffinities.getChannelAffinities());
      const items1 = [stateFromStores];
      return noop.useMemo(() => {
        const substr = stateFromStores.slice();
        return substr.sort((score, score2) => score2.score - score.score);
      }, items1);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx");

export default function useFavoritesGuildSuggestionCandidates(arg0) {
  _require = arg0;
  const tmp = require("useFavoritesGuildChannelFilter")();
  importDefault = tmp;
  results = require("useShareSearchResults").useShareSearchResults({
    channelFilter: tmp,
    includeFrecency: false,
  }).results;
  let tmp2 = closure_11();
  noop = tmp2;
  const effect = noop.useEffect(() => {
    const userAffinitiesV2 = closure_0(results[10]).fetchUserAffinitiesV2();
  }, []);
  let obj = require("useShareSearchResults");
  let items = [UserAffinitiesV2Store];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    userAffinitiesMap.getUserAffinitiesMap(),
  );
  closure_129_0 = stateFromStores;
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const array = new Array(closure_0.size);
    closure_1 = 0;
    const item = closure_0.forEach((item) => {
      closure_1 = tmp + 1;
      array[+closure_1] = item;
    });
    return array.sort((dmProbability, dmProbability2) => dmProbability2.dmProbability - dmProbability.dmProbability);
  }, items1);
  const items2 = [tmp2, tmp, arg0, results, memo];
  return noop.useMemo(() => {
    let items = [];
    const set = new Set();
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
                if (tmp20.type !== sortByMatchScore.AutocompleterResultTypes.HEADER) {
                  let tmp24 = sum;
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
