// discord_app/modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import ConjureMobileExperiment from "../../experiments/ConjureMobileExperiment.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import ConjureCustomWidget from "../ConjureCustomWidget.tsx";
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ConjureCustomWidgetAddOption = "ConjureCustomWidgetAddOption";
const createStyles = fn(5014);
const obj2 = { container: { marginBottom: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default function ConjureCustomWidgetAddOption() {
  const tmp = closure_7();
  const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(ConjureCustomWidgetAddOption);
  const isConjureMobileEnabled = ConjureMobileExperiment.useIsConjureMobileEnabled(
    canConjureCustomWidget,
    ConjureCustomWidgetAddOption,
  );
  let tmp7 = null;
  if (isConjureMobileEnabled) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { icon: null, label: null, subLabel: null, onPress: null };
    const obj5 = { IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" };
    obj4.icon = jsx(RowButton.RowButton.Icon, { IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const intl = util.intl;
    obj4.label = intl.string(_modDef3868["5WHmVU"]);
    const intl2 = util.intl;
    obj4.subLabel = intl2.string(_modDef3868.yI85oV);
    obj4.onPress = tmp6;
    obj3.children = jsx(RowButton.RowButton, { icon: null, label: null, subLabel: null, onPress: null });
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
}
