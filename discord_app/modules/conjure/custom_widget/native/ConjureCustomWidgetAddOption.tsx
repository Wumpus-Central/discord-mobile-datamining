// === Module 14578: ConjureCustomWidgetAddOption ===

// Module 14578 (ConjureCustomWidgetAddOption)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import RowButton from "RowButton" /* 7711 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9953 */;
import MagicWandIcon from "MagicWandIcon" /* 12329 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14571 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14573 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ConjureCustomWidgetAddOption = "ConjureCustomWidgetAddOption";
const createStyles = fn(4913);
const obj2 = { container: { marginBottom: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default function ConjureCustomWidgetAddOption() {
  const tmp = closure_7();
  const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(ConjureCustomWidgetAddOption);
  const isConjureMobileEnabled = ConjureMobileExperiment.useIsConjureMobileEnabled(canConjureCustomWidget, ConjureCustomWidgetAddOption);
  let tmp7 = null;
  if (isConjureMobileEnabled) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { icon: null, label: null, subLabel: null, onPress: null };
    const obj5 = { IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" };
    obj4.icon = jsx(RowButton.RowButton.Icon, { IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const intl = util.intl;
    obj4.label = intl.string(_modDef4190["5WHmVU"]);
    const intl2 = util.intl;
    obj4.subLabel = intl2.string(_modDef4190.yI85oV);
    obj4.onPress = tmp6;
    obj3.children = jsx(RowButton.RowButton, { icon: null, label: null, subLabel: null, onPress: null });
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};