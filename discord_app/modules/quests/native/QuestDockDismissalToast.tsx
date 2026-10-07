// === Module 14923: QuestDockDismissalToast ===

// Module 14923 (QuestDockDismissalToast)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import _modDef4821 from "module_4821" /* 4821 */;
import _modDef11928 from "module_11928" /* 11928 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles(() => {
  const obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: null };
  const size = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: null };
  const items = [{ translateY: -10 }];
  size.transform = items;
  obj.toastArrowForwardIcon = size;
  return obj;
});
const ReactCompilerGating = fn(558);
const content = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(4);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const intl = tmp(1126).intl;
    const obj2 = {
      arrowHook() {
          const obj = { style: closure_0.toastArrowForwardIconContainer, children: <React3 resizeMode="contain" source={_modDef11928} style={closure_0.toastArrowForwardIcon} /> };
          return <React4 style={closure_0.toastArrowForwardIconContainer}><React3 resizeMode="contain" source={_modDef11928} style={closure_0.toastArrowForwardIcon} /></React4>;
        }
    };
    const formatResult = intl.format(tmp(1126).t.dYE1px, obj2);
    cResult[0] = tmp4;
    cResult[1] = formatResult;
    let tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj3 = { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: tmp5 };
    const tmp9 = jsx(tmp(4892).Text, { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: tmp5 });
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  _require = closure_6();
  let obj = { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t.dYE1px, {
    arrowHook() {
      const obj = { style: closure_0.toastArrowForwardIconContainer, children: <React3 resizeMode="contain" source={_modDef11928} style={closure_0.toastArrowForwardIcon} /> };
      return <React4 style={closure_0.toastArrowForwardIconContainer}><React3 resizeMode="contain" source={_modDef11928} style={closure_0.toastArrowForwardIcon} /></React4>;
    }
  });
  return jsx(require("Text/Text").Text, { color: "mobile-text-heading-primary", variant: "text-sm/semibold", children: null });
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "QUEST_BAR_DISMISS_TOAST", content, icon: _modDef4821, position: "bottom" });
};