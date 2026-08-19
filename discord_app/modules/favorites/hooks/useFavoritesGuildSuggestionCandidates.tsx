// discord_app/modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx
import noop from "../../../../_runtime/00019_noop.js";
import map from "../../channel_affinities_v2/ChannelAffinitiesV2Store.tsx";
import recomputeAffinities from "../../user_affinities/UserAffinitiesV2Store.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { NO_SUGGESTIONS } from "../FavoritesGuildSuggestionsStore.tsx";
import { isAllowedType } from "../../share/ShareConstants.tsx";

const require = fn;
function getAffineChannelId(channelId) {
  return channelId.channelId;
}
function getAffineUserDMId(otherUserId) {
  return dMFromUserId.getDMFromUserId(otherUserId.otherUserId);
}
let result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx");

export default function useFavoritesGuildSuggestionCandidates(arg0) {
  let stateFromStores1 = arg0;
  const tmp = importDefault(results[9])();
  importDefault = tmp;
  results = stateFromStores1(results[10]).useShareSearchResults({ channelFilter: tmp, includeFrecency: false }).results;
  stateFromStores1 = undefined;
  const effect = memo.useEffect(() => {
    const channelAffinitiesV2 = stateFromStores1(results[6]).fetchChannelAffinitiesV2();
  }, []);
  let obj = stateFromStores1(results[10]);
  let items = [memo1];
  const stateFromStores = stateFromStores1(results[7]).useStateFromStores(items, () => memo1.getChannelAffinities());
  const items1 = [stateFromStores];
  memo = memo.useMemo(() => {
    const substr = stateFromStores1.slice();
    return substr.sort((score, score2) => score2.score - score.score);
  }, items1);
  stateFromStores1 = undefined;
  const effect1 = memo.useEffect(() => {
    const userAffinitiesV2 = stateFromStores1(results[8]).fetchUserAffinitiesV2();
  }, []);
  const obj2 = stateFromStores1(results[7]);
  const items2 = [closure_5];
  stateFromStores1 = stateFromStores1(results[7]).useStateFromStores(items2, () => userAffinitiesMap.getUserAffinitiesMap());
  const items3 = [stateFromStores1];
  memo1 = memo.useMemo(() => {
    array = new Array(array.size);
    c1 = 0;
    const item = array.forEach((item, index) => {
      closure_1 = tmp + 1;
      array[+closure_1] = item;
    });
    return array.sort((dmProbability, dmProbability2) => dmProbability2.dmProbability - dmProbability.dmProbability);
  }, items3);
  const items4 = [memo, tmp, arg0, results, memo1];
  return memo.useMemo(() => {
    let items = [];
    const set = new Set();
    const obj = { affinities: memo1, getChannelId: getAffineUserDMId, index: 0 };
    let num = 0;
    if (items.length < stateFromStores1) {
      while (true) {
        let result = items.length % 2;
        let obj4 = obj;
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
                let tmp8 = callback(results[11])(channelId);
                if (null != tmp8) {
                  if (isAllowedType(tmp8)) {
                    if (!set.has(tmp8.record.id)) {
                      tmp3 = tmp8;
                      if (callback(tmp8, false)) {
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
            obj5 = obj;
          }
          let tmp11 = null;
          if (obj5.index < obj5.affinities.length) {
            while (true) {
              let tmp12 = obj5.affinities[obj5.index];
              obj5.index = obj5.index + 1;
              if (null != tmp12) {
                let channelId1 = obj5.getChannelId(tmp12);
                if (null != channelId1) {
                  let tmp16 = callback(results[11])(channelId1);
                  if (null != tmp16) {
                    if (isAllowedType(tmp16)) {
                      if (!set.has(tmp16.record.id)) {
                        tmp11 = tmp16;
                        if (callback(tmp16, false)) {
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
                if (tmp20.type !== stateFromStores1(results[12]).AutocompleterResultTypes.HEADER) {
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
          if (items.length >= stateFromStores1) {
            break;
          }
        }
      }
    }
    if (items.length <= 0) {
      items = NO_SUGGESTIONS;
    }
    return items;
  }, items4);
};