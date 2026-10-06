// discord_app/modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RowButton2 from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import ConjureCustomWidget from "../ConjureCustomWidget.tsx";
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const VibegrationsCustomWidgetAddOption = "VibegrationsCustomWidgetAddOption";
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_7();
      let obj2 = ConjureCustomWidget;
      const canConjureCustomWidget = obj2.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const obj = ActionSheetActionCreators;
          const obj2 = {
            content: jsx(ConjureCustomWidgetSheetDefault, {}),
            key: ConjureCustomWidgetSheet.CONJURE_CUSTOM_WIDGET_SHEET_KEY,
            stackingBehavior: "stack",
          };
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
          const tmp11 = (
            <RowButton
              icon={null}
              label={intl.string(_modDef3753["5WHmVU"])}
              subLabel={intl2.string(_modDef3753.yI85oV)}
              onPress={first}
            />
          );
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
    }
  : () => {
      let intl;
      let intl2;
      const tmp = closure_7();
      let obj = ConjureCustomWidget;
      const canConjureCustomWidget = obj.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
      let tmp6 = null;
      if (canConjureCustomWidget) {
        ({
          icon: null,
          label: intl.string(_modDef3753["5WHmVU"]),
          subLabel: intl2.string(_modDef3753.yI85oV),
          onPress: tmp5,
        });
        const RowButton = RowButton2.RowButton;
        ({ IconComponent: MagicWandIcon.MagicWandIcon, variant: "secondary" });
        const Icon = RowButton2.RowButton.Icon;
        intl = intl3.intl;
        intl2 = intl3.intl;
        tmp6 = <View style={tmp.container}>{null}</View>;
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default tmp2;
