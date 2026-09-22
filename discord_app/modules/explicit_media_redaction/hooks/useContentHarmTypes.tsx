// === Module 10438: useContentHarmTypes ===

// Module 10438 (useContentHarmTypes)
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7536 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId) {
  _require = channelId;
  dependencyMap = authorId;
  const eligibleHarmTypesConfigsForContext = require("ObscuredMediaUtils").getEligibleHarmTypesConfigsForContext();
  let obj = require("ObscuredMediaUtils");
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const items1 = [stateFromStores1, stateFromStores2];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const items = [ChannelStore, RelationshipStore];
    return ObscuredMediaUtils.getChannelTypeById(closure_0, closure_1, items);
  });
  const obj3 = require("initialize");
  const items2 = [stateFromStores];
  const items3 = [eligibleHarmTypesConfigsForContext];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => eligibleHarmTypesConfigsForContext.reduce((acc, harmType) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[harmType.harmType] = harmType.getProtoUserSettings(settings.settings);
    return obj;
  }, {}), items3, require("SensitiveMediaRedactionSettingUtils").areSettingsEqual);
  const items4 = [stateFromStores1, eligibleHarmTypesConfigsForContext, stateFromStores2, authorId, stateFromStores];
  const memo = eligibleHarmTypesConfigsForContext.useMemo(() => {
    if (null != stateFromStores1) {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (closure_1 !== id) {
        if (null != stateFromStores) {
          const mapped = eligibleHarmTypesConfigsForContext.map((harmType) => {
            let tmp3 = null;
            if (null != stateFromStores1) {
              tmp3 = harmType.getUserSettingsWithDefaults(tmp)[tmp2];
            }
            harmType = null;
            if (obj.shouldRedactForSettingValue(tmp3)) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          const found = mapped.filter((item) => null != item);
        }
        return [];
      }
    }
  }, items4);
  if (0 === memo.length) {
    let NONE = tmp(7539).ContentHarmTypeBitMask.NONE;
  } else {
    NONE = tmp(7536).contentHarmTypesToFlags(memo);
    const tmpResult = tmp(7536);
  }
  return NONE;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useContentHarmTypes.tsx");

export { useEnabledHarmTypesBitmaskForChannelAndAuthorId };
export const useEnabledHarmTypesBitmaskForMessage = function useEnabledHarmTypesBitmaskForMessage(stateFromStores) {
  if (null == stateFromStores) {
    let obj2 = {};
  } else {
    obj2 = ObscuredMediaUtils.getChannelIdAndAuthorIdFromMessage(stateFromStores);
  }
  return useEnabledHarmTypesBitmaskForChannelAndAuthorId(obj2.channelId, obj2.authorId);
};