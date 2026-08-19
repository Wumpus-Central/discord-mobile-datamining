// discord_app/modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx
import getEligibleHarmTypesConfigsForContext from "../ObscuredMediaUtils.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleConnectionClosedOrResumed from "../../user_settings/UserSettingsProtoStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getEligibleHarmTypesConfigsForContext } from "../ObscuredMediaUtils.tsx";

require = fn;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  const _require = channelId;
  dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = require("../ObscuredMediaUtils.tsx").getEligibleHarmTypesConfigsForContext();
  let obj = getEligibleHarmTypesConfigsForContext;
  let items = [closure_6];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = initialize;
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => {
    const items = [stateFromStores1, stateFromStores2];
    return channelId(authorId[5]).getChannelTypeById(channelId, authorId, items);
  });
  const obj3 = initialize;
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((acc, item, index) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[item.harmType] = item.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, require("../SensitiveMediaRedactionSettingUtils.tsx").areSettingsEqual);
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