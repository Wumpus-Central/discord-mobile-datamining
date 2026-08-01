// === Module 14153: QuestDockDismissalNotification ===

// Module 14153 (QuestDockDismissalNotification)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function QuestDockDismissalNotification() {
  const _require = callback();
  let obj = { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null };
  const intl = _require(1236).intl;
  obj = {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer, children: null };
      obj = { resizeMode: "contain", source: outer1_1(outer1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj[1] = outer1_5(outer1_3, obj);
      return outer1_5(outer1_4, obj);
    }
  };
  obj[2] = intl.format(_require(1236).t.dYE1px, obj);
  return jsx(_require(4189).Text, {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer, children: null };
      obj = { resizeMode: "contain", source: outer1_1(outer1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj[1] = outer1_5(outer1_3, obj);
      return outer1_5(outer1_4, obj);
    }
  });
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles(() => {
  let obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: null };
  obj = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: importDefault(712).colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  items = [{ translateY: -10 }];
  obj[1] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  let obj = importDefault(3894);
  obj = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: importDefault(6553), position: "bottom" };
  obj.open(obj);
};