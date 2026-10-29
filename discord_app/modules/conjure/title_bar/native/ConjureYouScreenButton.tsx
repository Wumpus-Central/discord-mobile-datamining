// === Module 14625: ConjureYouScreenButton ===

// Module 14625 (ConjureYouScreenButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Link from "Link" /* 1504 */;
import _modDef3864 from "module_3864" /* 3864 */;
import MagicWandIcon from "MagicWandIcon" /* 12266 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14626 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14631 */;
import getIconSize from "getIconSize" /* 14633 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14634 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14636 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj = { dot: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouScreenButton() {
  const cResult = c.c(9);
  const tmp4 = closure_4();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp6 = useConjureWandStatusDefault();
  const isFocused = Link.useIsFocused();
  if (cResult[0] === isFocused) {
    if (cResult[1] === working) {
      let tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3864.uk6jhJ);
      cResult[3] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === accessibilityLabel) {
      if (cResult[5] === hasBadge) {
        if (cResult[6] === tmp4.dot) {
          if (cResult[7] === tmp8) {
            let tmp15 = cResult[8];
          }
          return tmp15;
        }
      }
    }
    const obj3 = { IconComponent: MagicWandIcon.MagicWandIcon, icon: tmp8, accessibilityLabel, label: tmp13, onPress: openConjureProjectsSheetDefault, showRedDot: hasBadge, dotStyle: tmp4.dot };
    const tmp18 = jsx(YouScreenNavIconDefault, { IconComponent: MagicWandIcon.MagicWandIcon, icon: tmp8, accessibilityLabel, label: tmp13, onPress: openConjureProjectsSheetDefault, showRedDot: hasBadge, dotStyle: tmp4.dot });
    cResult[4] = accessibilityLabel;
    cResult[5] = hasBadge;
    cResult[6] = tmp4.dot;
    cResult[7] = tmp8;
    cResult[8] = tmp18;
    tmp15 = tmp18;
    const tmp5Result = YouScreenNavIconDefault;
  }
  let tmp9;
  if (working) {
    const obj4 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
    tmp9 = jsx(ConjureWorkingWandDefault, { size: getIconSize.ICON_SIZE.md, paused: !isFocused });
    const tmp5Result2 = ConjureWorkingWandDefault;
  }
  cResult[0] = isFocused;
  cResult[1] = working;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureYouScreenButton() {
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
  obj2.label = intl.string(_modDef3864.uk6jhJ);
  obj2.onPress = openConjureProjectsSheetDefault;
  obj2.showRedDot = hasBadge;
  obj2.dotStyle = tmp.dot;
  return jsx(YouScreenNavIconDefault, { IconComponent: null, icon: null, accessibilityLabel: null, label: null, onPress: null, showRedDot: null, dotStyle: null });
}));