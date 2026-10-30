// discord_app/modules/conjure/title_bar/native/ConjureYouScreenButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Link from "../../../../../_runtime/01499_Link.js";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import useConjureWandStatusDefault from "useConjureWandStatus.tsx";
import YouScreenNavIconDefault from "../../../main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx";
import getIconSize from "../../../../../discord_common/js/packages/design/components/Icon/getIconSize.tsx";
import ConjureWorkingWandDefault from "ConjureWorkingWand.tsx";
import openConjureProjectsSheetDefault from "../../projects/native/openConjureProjectsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
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
  const obj2 = {
    IconComponent: null,
    icon: null,
    accessibilityLabel: null,
    label: null,
    onPress: null,
    showRedDot: null,
    dotStyle: null,
  };
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
  obj2.label = intl.string(_modDef3865.uk6jhJ);
  obj2.onPress = openConjureProjectsSheetDefault;
  obj2.showRedDot = hasBadge;
  obj2.dotStyle = tmp.dot;
  return jsx(YouScreenNavIconDefault, {
    IconComponent: null,
    icon: null,
    accessibilityLabel: null,
    label: null,
    onPress: null,
    showRedDot: null,
    dotStyle: null,
  });
});
