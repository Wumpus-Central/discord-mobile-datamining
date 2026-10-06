// === Module 12920: ConjureCustomWidgetAddOption ===

// Module 12920 (ConjureCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import RowButton2 from "RowButton" /* 8926 */;
import MagicWandIcon from "MagicWandIcon" /* 12515 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 12921 */;
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet" /* 12922 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const VibegrationsCustomWidgetAddOption = "VibegrationsCustomWidgetAddOption";
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_7();
  let obj2 = ConjureCustomWidget;
  const canConjureCustomWidget = obj2.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = ActionSheetActionCreators;
      const obj2 = { content: jsx(ConjureCustomWidgetSheetDefault, {}), key: ConjureCustomWidgetSheet.CONJURE_CUSTOM_WIDGET_SHEET_KEY, stackingBehavior: "stack" };
      obj.showActionSheet(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp7 = null;
  if (canConjureCustomWidget) {
    let tmp8;
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const RowButton = RowButton2.RowButton;
      ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
      const Icon = RowButton2.RowButton.Icon;
      const intl = intl3.intl;
      const intl2 = intl3.intl;
      const tmp11 = <RowButton icon={null} label={intl.string(_modDef3753["5WHmVU"])} subLabel={intl2.string(_modDef3753.yI85oV)} onPress={first} />;
      cResult[1] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] !== tmp4.container) {
      const tmp15 = <View style={tmp4.container}>{tmp8}</View>;
      cResult[2] = tmp4.container;
      cResult[3] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    tmp7 = tmp12;
  }
  return tmp7;
}) : (() => {
  let intl;
  let intl2;
  const tmp = closure_7();
  let obj = ConjureCustomWidget;
  const canConjureCustomWidget = obj.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
  let tmp6 = null;
  if (canConjureCustomWidget) {
    ({ icon: null, label: intl.string(_modDef3753["5WHmVU"]), subLabel: intl2.string(_modDef3753.yI85oV), onPress: tmp5 });
    const RowButton = RowButton2.RowButton;
    ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
    const Icon = RowButton2.RowButton.Icon;
    intl = intl3.intl;
    intl2 = intl3.intl;
    tmp6 = <View style={tmp.container}>{null}</View>;
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default tmp2;