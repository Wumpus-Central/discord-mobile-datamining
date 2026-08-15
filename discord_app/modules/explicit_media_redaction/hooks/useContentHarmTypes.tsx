// discord_app/modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import ensureGuildLoaded from "ensureGuildLoaded";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getEligibleHarmTypesConfigsForContext } from "../ObscuredMediaUtils.tsx";
import { getShouldObscureForSetting } from "../SensitiveMediaRedactionSettingUtils.tsx";

const require = arg1;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  const _require = channelId;
  const dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = _getEligibleHarmTypesConfigsForContext.getEligibleHarmTypesConfigsForContext();
  let obj = _getEligibleHarmTypesConfigsForContext;
  let items = [mergeGuildAvatar];
  const stateFromStores = _initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = _initialize;
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return channelId(authorId[5]).getChannelTypeById(channelId, authorId, items);
  });
  const obj3 = _initialize;
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = _initialize.useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((arg0, harmType) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, _getShouldObscureForSetting.areSettingsEqual);
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
            if (null != ensureGuildLoaded) {
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
    let NONE = tmp(5020).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(5019).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(5019);
  }
  return NONE;
}
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

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