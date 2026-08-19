// === Module 10118: useEnabledHarmTypesBitmaskForChannelAndAuthorId ===

// Module 10118 (useEnabledHarmTypesBitmaskForChannelAndAuthorId)
import getEligibleHarmTypesConfigsForContext from "getEligibleHarmTypesConfigsForContext" /* 5019 */;
import noop from "noop" /* 19 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  const _require = channelId;
  dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = _require(5019).getEligibleHarmTypesConfigsForContext();
  let obj = _require(5019);
  let items = [closure_6];
  const stateFromStores = _require(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = _require(589);
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return channelId(authorId[5]).getChannelTypeById(channelId, authorId, items);
  });
  const obj3 = _require(589);
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = _require(589).useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((acc, item, index) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[item.harmType] = item.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, _require(5024).areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (closure_1 !== id) {
        if (null != stateFromStores) {
          const mapped = eligibleHarmTypesConfigsForContext.map((item, index) => {
            let tmp3 = null;
            if (null != closure_4) {
              tmp3 = item.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            let harmType = null;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = item.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((item, index) => null != item);
        }
        return [];
      }
    }
  }, items4);
  if (0 === memo.length) {
    let NONE = tmp(5020).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(5019).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(5019);
  }
  return NONE;
}
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export { useEnabledHarmTypesBitmaskForChannelAndAuthorId };
export const useEnabledHarmTypesBitmaskForMessage = function useEnabledHarmTypesBitmaskForMessage(stateFromStores) {
  if (null == stateFromStores) {
    let channelIdAndAuthorIdFromMessage = {};
  } else {
    channelIdAndAuthorIdFromMessage = getEligibleHarmTypesConfigsForContext;
    channelIdAndAuthorIdFromMessage = channelIdAndAuthorIdFromMessage.getChannelIdAndAuthorIdFromMessage(stateFromStores);
  }
  return useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelIdAndAuthorIdFromMessage.channelId, channelIdAndAuthorIdFromMessage.authorId);
};