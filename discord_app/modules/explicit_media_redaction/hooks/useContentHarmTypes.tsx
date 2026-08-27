// discord_app/modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx
import getEligibleHarmTypesConfigsForContext from "../ObscuredMediaUtils.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import closure_3 from "../../user_settings/UserSettingsProtoStore.tsx";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/RelationshipStore.tsx";
import closure_6 from "../../../stores/UserStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getEligibleHarmTypesConfigsForContext } from "../ObscuredMediaUtils.tsx";

require = arg1;
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
  stateFromStores2 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((arg0, harmType) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, require("../SensitiveMediaRedactionSettingUtils.tsx").areSettingsEqual);
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
    let NONE = tmp(6093).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(6090).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(6090);
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