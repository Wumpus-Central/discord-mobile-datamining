// === Module 18115: ConjureYouBarButton ===

// Module 18115 (ConjureYouBarButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Link from "Link" /* 1503 */;
import MagicWandIcon from "MagicWandIcon" /* 12212 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14392 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14397 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14402 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14404 */;
import YouBarButtonDefault from "YouBarButton" /* 18116 */;
import noop from "module_19" /* 19 */;

require = fn;
function confirmUnpin() {
  confirmConjureYouBarPinDefault(false);
}
const YOU_BAR_BUTTON_ICON_SIZE = fn(16712).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarButton(hasNameplate) {
  const cResult = c.c(12);
  hasNameplate = hasNameplate.hasNameplate;
  const tmp4 = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp6 = useConjureWandStatusDefault();
  let icon = Link.useIsFocused();
  if (cResult[0] === icon) {
    if (cResult[1] === hasNameplate) {
      if (cResult[2] === tmp4.icon) {
        if (cResult[3] === working) {
          let tmp11;
          if (hasNameplate.canUnpin) {
            tmp11 = confirmUnpin;
          }
          if (cResult[5] === accessibilityLabel) {
            if (cResult[6] === hasBadge) {
              if (cResult[7] === hasNameplate) {
                if (cResult[8] === tmp4.badge) {
                  if (cResult[9] === tmp7) {
                    if (cResult[10] === tmp11) {
                      let tmp12 = cResult[11];
                    }
                    return tmp12;
                  }
                }
              }
            }
          }
          const obj3 = { hasNameplate, icon: cResult[4], hasBadge, badgeStyle: tmp4.badge, onPress: openConjureProjectsSheetDefault, onLongPress: tmp11, accessibilityLabel };
          const tmp15 = jsx(YouBarButtonDefault, { hasNameplate, icon: cResult[4], hasBadge, badgeStyle: tmp4.badge, onPress: openConjureProjectsSheetDefault, onLongPress: tmp11, accessibilityLabel });
          cResult[5] = accessibilityLabel;
          cResult[6] = hasBadge;
          cResult[7] = hasNameplate;
          cResult[8] = tmp4.badge;
          cResult[9] = cResult[4];
          cResult[10] = tmp11;
          cResult[11] = tmp15;
          tmp12 = tmp15;
          const tmp5Result = YouBarButtonDefault;
        }
      }
    }
  }
  if (working) {
    const obj4 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !icon };
    let tmp8Result = jsx(ConjureWorkingWandDefault, { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !icon });
  } else {
    const obj5 = { size: "custom", style: tmp4.icon, color: null };
    let str;
    if (hasNameplate) {
      str = "white";
    }
    obj5.color = str;
    tmp8Result = jsx(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp4.icon, color: null });
  }
  cResult[0] = icon;
  cResult[1] = hasNameplate;
  icon = tmp4.icon;
  cResult[2] = icon;
  cResult[3] = working;
  cResult[4] = tmp8Result;
}) : (function ConjureYouBarButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp4 = useConjureWandStatusDefault();
  const isFocused = Link.useIsFocused();
  const obj2 = { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, onLongPress: null, accessibilityLabel: null };
  if (working) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    let tmp7Result = jsx(ConjureWorkingWandDefault, { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused });
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: null };
    let str;
    if (hasNameplate) {
      str = "white";
    }
    obj4.color = str;
    tmp7Result = jsx(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp.icon, color: null });
  }
  obj2.icon = tmp7Result;
  obj2.hasBadge = hasBadge;
  obj2.badgeStyle = tmp.badge;
  obj2.onPress = openConjureProjectsSheetDefault;
  let tmp11;
  if (hasNameplate.canUnpin) {
    tmp11 = confirmUnpin;
  }
  obj2.onLongPress = tmp11;
  obj2.accessibilityLabel = accessibilityLabel;
  return jsx(YouBarButtonDefault, { hasNameplate, icon: null, hasBadge: null, badgeStyle: null, onPress: null, onLongPress: null, accessibilityLabel: null });
}));