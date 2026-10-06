// === Module 14923: QuestDockDismissalToast ===

// Module 14923 (QuestDockDismissalToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4821 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11928 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Image: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => {
  let items;
  const obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: size };
  size = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  items = [{ translateY: -10 }];
  return obj;
});
const content = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let tmp5;
  let tmp7;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const intl = tmp(1126).intl;
    const obj2 = {
      arrowHook() {
          ({ resizeMode: "contain", source: AssetRegistryDefault2, style: closure_0.toastArrowForwardIcon });
          return <React3 style={closure_0.toastArrowForwardIconContainer}>{null}</React3>;
        }
    };
    const formatResult = intl.format(require("intl").t.dYE1px, obj2);
    cResult[0] = tmp4;
    cResult[1] = formatResult;
    tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const tmp9 = jsx(require("Text/Text").Text, { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: tmp5 });
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  let closure_0;
  _require = closure_6();
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  const obj2 = {
    arrowHook() {
      ({ resizeMode: "contain", source: AssetRegistryDefault2, style: closure_0.toastArrowForwardIcon });
      return <React3 style={closure_0.toastArrowForwardIconContainer}>{null}</React3>;
    }
  };
  return <Text color="mobile-text-heading-primary" variant="text-sm/semibold">{intl.format(require("intl").t.dYE1px, obj2)}</Text>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "QUEST_BAR_DISMISS_TOAST", content, icon: AssetRegistryDefault, position: "bottom" };
  obj.open(obj2);
};