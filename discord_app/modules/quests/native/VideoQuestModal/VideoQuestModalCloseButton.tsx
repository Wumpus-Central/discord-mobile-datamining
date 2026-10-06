// === Module 14967: VideoQuestModalCloseButton ===

// Module 14967 (VideoQuestModalCloseButton)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Pressables from "Pressables" /* 5916 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let iconColor;
  let onClose;
  let style;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(10);
  ({ onClose, iconColor, style } = arg0);
  if (undefined === iconColor) {
    iconColor = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flexShrink: 0, minWidth: 24, minHeight: 24 };
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== style) {
    const items = [tmp7, style];
    cResult[2] = style;
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== iconColor) {
    const tmp11 = jsx(XSmallIcon.XSmallIcon, { color: iconColor });
    cResult[4] = iconColor;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === onClose) {
    if (cResult[7] === tmp8) {
      let tmp12;
      if (cResult[8] === tmp9) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const tmp13 = jsx(Pressables.PressableOpacity, { accessibilityLabel: first, accessibilityRole: "button", hitSlop: 12, onPress: onClose, style: tmp8, children: tmp9 });
  cResult[6] = onClose;
  cResult[7] = tmp8;
  cResult[8] = tmp9;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((iconColor) => {
  let MOBILE_TEXT_HEADING_PRIMARY = iconColor.iconColor;
  const onClose = iconColor.onClose;
  if (MOBILE_TEXT_HEADING_PRIMARY === undefined) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  const style = iconColor.style;
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  const items = [{ flexShrink: 0, minWidth: 24, minHeight: 24 }, style];
  return <PressableOpacity accessibilityLabel={intl.string(intl2.t.cpT0Cq)} accessibilityRole="button" hitSlop={12} onPress={onClose} style={items}>{null}</PressableOpacity>;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalCloseButton.tsx");

export default tmp2;