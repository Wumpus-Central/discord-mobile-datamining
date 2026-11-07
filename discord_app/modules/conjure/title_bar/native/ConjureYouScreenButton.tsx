// === Module 14945: ConjureYouScreenButton ===

// Module 14945 (ConjureYouScreenButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Link from "Link" /* 1500 */;
import _modDef4026 from "module_4026" /* 4026 */;
import MagicWandIcon from "MagicWandIcon" /* 11105 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13220 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14946 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14948 */;
import getIconSize from "getIconSize" /* 14949 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj = { dot: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_4 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default noop.memo(function ConjureYouScreenButton() {
  const tmp = closure_4();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp4 = useConjureWandStatusDefault();
  const isFocused = Link.useIsFocused();
  const obj2 = { IconComponent: null, icon: null, accessibilityLabel: null, label: null, onPress: null, showRedDot: null, dotStyle: null };
  obj2.IconComponent = MagicWandIcon.MagicWandIcon;
  let tmp7Result;
  if (working) {
    const obj3 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
    tmp7Result = jsx(ConjureWorkingWandDefault, { size: getIconSize.ICON_SIZE.md, paused: !isFocused });
    const tmp2Result = ConjureWorkingWandDefault;
  }
  obj2.icon = tmp7Result;
  obj2.accessibilityLabel = accessibilityLabel;
  const intl = util.intl;
  obj2.label = intl.string(_modDef4026.uk6jhJ);
  obj2.onPress = openConjureProjectsSheetDefault;
  obj2.showRedDot = hasBadge;
  obj2.dotStyle = tmp.dot;
  return jsx(YouScreenNavIconDefault, { IconComponent: null, icon: null, accessibilityLabel: null, label: null, onPress: null, showRedDot: null, dotStyle: null });
});