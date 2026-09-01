// discord_app/modules/quests/native/QuestDockDismissalToast.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/12307_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function QuestDockDismissalNotification() {
  const _require = callback();
  let obj = { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj = {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer, children: null };
      obj = { resizeMode: "contain", source: closure_1_1(closure_1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj[1] = closure_1_5(closure_1_3, obj);
      return closure_1_5(closure_1_4, obj);
    }
  };
  obj[2] = intl.format(require("../../../intl/index.native.tsx").t.dYE1px, obj);
  return jsx(require("../../../design/components/Text/native/Text.tsx").Text, {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer, children: null };
      obj = { resizeMode: "contain", source: closure_1_1(closure_1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj[1] = closure_1_5(closure_1_3, obj);
      return closure_1_5(closure_1_4, obj);
    }
  });
}
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles(() => {
  let obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: null };
  obj = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  items = [{ translateY: -10 }];
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  let obj = dispatcherDefault;
  obj = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: registerAssetDefault, position: "bottom" };
  obj.open(obj);
};