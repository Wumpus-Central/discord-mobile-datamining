// discord_app/modules/quests/native/QuestDockDismissalToast.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import registerAssetDefault from "../../../../_runtime/07919_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/08037_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
function QuestDockDismissalNotification() {
  const _require = callback();
  const intl = require("../../../intl/index.native.tsx").intl;
  let obj = {
    arrowHook() {
      const obj = { resizeMode: "contain", source: registerAssetDefault2, style: closure_0.toastArrowForwardIcon };
      obj[1] = <closure_1_3 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
      return <closure_1_4 resizeMode="contain" source={registerAssetDefault2} style={closure_0.toastArrowForwardIcon} />;
    }
  };
  obj[2] = intl.format(require("../../../intl/index.native.tsx").t.dYE1px, obj);
  return jsx(require("../../../design/components/Text/native/Text.tsx").Text, {
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