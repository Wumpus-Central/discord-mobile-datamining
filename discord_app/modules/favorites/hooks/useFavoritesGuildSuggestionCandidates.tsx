// discord_app/modules/favorites/hooks/useFavoritesGuildSuggestionCandidates.tsx
import sortByMatchScore from "../../autocompleter/index.tsx";
import createAutocompleterResultForChannelIdDefault from "../../autocompleter/createAutocompleterResultForChannelId.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelAffinitiesV2Store from "../../channel_affinities_v2/ChannelAffinitiesV2Store.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function getAffineChannelId(channelId) {
  return channelId.channelId;
}
function getAffineUserDMId(otherUserId) {
  return ChannelStore.getDMFromUserId(otherUserId.otherUserId);
}
const NO_SUGGESTIONS = fn(16202).NO_SUGGESTIONS;
const isAllowedType = fn(10982).isAllowedType;
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
  const effect = memo.useEffect(() => {
    const channelAffinitiesV2 = closure_0(results[6]).fetchChannelAffinitiesV2();
  }, []);
  let obj = require("useShareSearchResults");
  let items = [memo1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => memo1.getChannelAffinities());
  closure_129_0 = stateFromStores;
  const items1 = [stateFromStores];
  memo = memo.useMemo(() => {
    const substr = closure_0.slice();
    return substr.sort((score, score2) => score2.score - score.score);
  }, items1);
  const effect1 = memo.useEffect(() => {
    const userAffinitiesV2 = closure_0(results[8]).fetchUserAffinitiesV2();
  }, []);
  const obj2 = require("initialize");
  const items2 = [UserAffinitiesV2Store];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
    userAffinitiesMap.getUserAffinitiesMap(),
  );
  closure_130_0 = stateFromStores1;
  const items3 = [stateFromStores1];
  memo1 = memo.useMemo(() => {
    const array = new Array(closure_0.size);
    closure_1 = 0;
    const item = closure_0.forEach((item) => {
      closure_1 = tmp + 1;
      array[+closure_1] = item;
    });
    return array.sort((dmProbability, dmProbability2) => dmProbability2.dmProbability - dmProbability.dmProbability);
  }, items3);
  const items4 = [memo, tmp, arg0, results, memo1];
  return memo.useMemo(() => {
    let items = [];
    const set = new Set();
    let obj = { affinities: memo, getChannelId: getAffineChannelId, index: 0 };
    obj = { affinities: memo1, getChannelId: getAffineUserDMId, index: 0 };
    let num = 0;
    if (items.length < closure_0) {
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
  }, items4);
}
