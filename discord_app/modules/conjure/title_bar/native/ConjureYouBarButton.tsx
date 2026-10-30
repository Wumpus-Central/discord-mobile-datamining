// discord_app/modules/conjure/title_bar/native/ConjureYouBarButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Link from "../../../../../_runtime/01499_Link.js";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import useConjureWandStatusDefault from "useConjureWandStatus.tsx";
import ConjureWorkingWandDefault from "ConjureWorkingWand.tsx";
import openConjureProjectsSheetDefault from "../../projects/native/openConjureProjectsSheet.tsx";
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin.tsx";
import YouBarButtonDefault from "../../../main_tabs_v2/native/you_bar/YouBarButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function confirmUnpin() {
  confirmConjureYouBarPinDefault(false);
}
const YOU_BAR_BUTTON_ICON_SIZE = fn(17004).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = {
  icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE },
  badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
};
let closure_5 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default noop.memo(function ConjureYouBarButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  const tmp4 = useConjureWandStatusDefault();
  const isFocused = Link.useIsFocused();
  const obj2 = {
    hasNameplate,
    icon: null,
    hasBadge: null,
    badgeStyle: null,
    onPress: null,
    onLongPress: null,
    accessibilityLabel: null,
  };
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
  return jsx(YouBarButtonDefault, {
    hasNameplate,
    icon: null,
    hasBadge: null,
    badgeStyle: null,
    onPress: null,
    onLongPress: null,
    accessibilityLabel: null,
  });
});
