// discord_app/modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3831 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import ConjureMobileExperiment from "../../experiments/ConjureMobileExperiment.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import ConjureCustomWidget from "../ConjureCustomWidget.tsx";
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ConjureCustomWidgetAddOption = "ConjureCustomWidgetAddOption";
const createStyles = fn(4972);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureCustomWidgetAddOption() {
      const cResult = c.c(4);
      let container = closure_7();
      const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(ConjureCustomWidgetAddOption);
      const isConjureMobileEnabled = ConjureMobileExperiment.useIsConjureMobileEnabled(
        canConjureCustomWidget,
        ConjureCustomWidgetAddOption,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = ActionSheetActionCreators;
          obj.showActionSheet({
            content: jsx(ConjureCustomWidgetSheetDefault, {}),
            key: ConjureCustomWidgetSheet.CONJURE_CUSTOM_WIDGET_SHEET_KEY,
            stackingBehavior: "stack",
          });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (!isConjureMobileEnabled) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { icon: null, label: null, subLabel: null, onPress: null };
          const obj5 = { IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" };
          obj4.icon = jsx(RowButton.RowButton.Icon, {
            IconComponent: MagicWandIcon.MagicWandIcon,
            variant: "secondary",
          });
          const intl = util.intl;
          obj4.label = intl.string(_modDef3831["5WHmVU"]);
          const intl2 = util.intl;
          obj4.subLabel = intl2.string(_modDef3831.yI85oV);
          obj4.onPress = first;
          const tmp10 = jsx(RowButton.RowButton, { icon: null, label: null, subLabel: null, onPress: null });
          cResult[1] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] !== container.container) {
          const obj6 = { style: container.container, children: tmp7 };
          const tmp14 = <View style={container.container}>{tmp7}</View>;
          container = container.container;
          cResult[2] = container;
          cResult[3] = tmp14;
        }
      }
    }
  : function ConjureCustomWidgetAddOption() {
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
        obj4.label = intl.string(_modDef3831["5WHmVU"]);
        const intl2 = util.intl;
        obj4.subLabel = intl2.string(_modDef3831.yI85oV);
        obj4.onPress = tmp6;
        obj3.children = jsx(RowButton.RowButton, { icon: null, label: null, subLabel: null, onPress: null });
        tmp7 = <View style={tmp.container}>{null}</View>;
      }
      return tmp7;
    };
