// === Module 14460: QuestDockDismissalNotification ===

// Module 14460 (QuestDockDismissalNotification)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import registerAssetDefault from "registerAsset" /* 7919 */;
import registerAssetDefault2 from "registerAsset" /* 8037 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function QuestDockDismissalNotification() {
  const _require = callback();
  const intl = _require(1236).intl;
  let obj = {
    arrowHook() {
      const obj = { resizeMode: "contain", source: registerAssetDefault2, style: closure_0.toastArrowForwardIcon };
      obj[1] = <closure_1_3 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
      return <closure_1_4 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
    }
  };
  obj[2] = intl.format(_require(1236).t.dYE1px, obj);
  return jsx(_require(4734).Text, {
    arrowHook() {
      const obj = { resizeMode: "contain", source: registerAssetDefault2, style: closure_0.toastArrowForwardIcon };
      obj[1] = <closure_1_3 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
      return <closure_1_4 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
    }
  });
}
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles(() => {
  const obj = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  items = [{ translateY: -10 }];
  obj[1] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: registerAssetDefault, position: "bottom" };
  obj.open(obj);
};