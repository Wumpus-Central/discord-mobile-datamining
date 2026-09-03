// === Module 10286: useEnabledHarmTypesBitmaskForChannelAndAuthorId ===

// Module 10286 (useEnabledHarmTypesBitmaskForChannelAndAuthorId)
import getEligibleHarmTypesConfigsForContext from "getEligibleHarmTypesConfigsForContext" /* 6147 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1339 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "markAllUserIdListsStale" /* 4130 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  const _require = channelId;
  dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = _require(6147).getEligibleHarmTypesConfigsForContext();
  let obj = _require(6147);
  let items = [closure_6];
  const stateFromStores = _require(586).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = _require(586);
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = _require(586).useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return channelId(authorId[5]).getChannelTypeById(channelId, authorId, items);
  });
  const obj3 = _require(586);
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = _require(586).useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((arg0, harmType) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, _require(6154).areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = tmp2.id;
      }
      if (tmp !== id) {
        if (null != tmp2) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp3 = null;
            if (null != closure_4) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((arg0) => null != arg0);
        }
        return [];
      }
      tmp = closure_1;
    }
  }, items4);
  if (0 === memo.length) {
    let NONE = tmp(6150).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(6147).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(6147);
  }
  return NONE;
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

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