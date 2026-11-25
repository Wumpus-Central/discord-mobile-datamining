// === Module 14970: ConjureCustomWidgetAddOption ===

// Module 14970 (ConjureCustomWidgetAddOption)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5226 */;
import RowButton from "RowButton" /* 8048 */;
import MagicWandIcon from "MagicWandIcon" /* 11438 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 11441 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 14963 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 14965 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ConjureCustomWidgetAddOption = "ConjureCustomWidgetAddOption";
const createStyles = fn(5012);
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
    obj4.label = intl.string(_modDef4244["5WHmVU"]);
    const intl2 = util.intl;
    obj4.subLabel = intl2.string(_modDef4244.yI85oV);
    obj4.onPress = tmp6;
    obj3.children = jsx(RowButton.RowButton, { icon: null, label: null, subLabel: null, onPress: null });
    tmp7 = <View style={tmp.container}>{null}</View>;
  }
  return tmp7;
};