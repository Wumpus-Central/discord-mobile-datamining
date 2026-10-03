// === Module 14858: BountiesModalCloseButton ===

// Module 14858 (BountiesModalCloseButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 5909 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles(() => {
  const obj = { closeButton: null };
  const size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32 };
  obj.closeButton = size;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(5);
  onPress = onPress.onPress;
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.cpT0Cq);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
    const tmp10 = jsx(XSmallIcon.XSmallIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === onPress) {
    if (cResult[3] === tmp4.closeButton) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(Pressables.PressableOpacity, { accessibilityLabel: first, accessibilityRole: "button", hitSlop: 12, onPress, style: tmp4.closeButton, children: tmp7 });
  cResult[2] = onPress;
  cResult[3] = tmp4.closeButton;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { accessibilityLabel: first, accessibilityRole: "button", hitSlop: 12, onPress, style: tmp4.closeButton, children: tmp7 };
}) : ((onPress) => {
  const obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = onPress.onPress;
  obj.style = closure_4().closeButton;
  const tmp = closure_4();
  obj.children = jsx(XSmallIcon.XSmallIcon, { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null });
});