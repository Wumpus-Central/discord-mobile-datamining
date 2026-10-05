// discord_app/modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileSharedStylesDefault from "../../../user_profile/native/UserProfileSharedStyles.tsx";
import ConjureCustomWidget from "../ConjureCustomWidget.tsx";
import ConjureCustomWidgetSheet from "ConjureCustomWidgetSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ConjureCustomWidgetSheetDefault = ConjureCustomWidgetSheet;

const util = PressableOpacity(1126);
const Text_Text = PressableOpacity(4886);
const Pressables = PressableOpacity(5909);
const ChevronSmallRightIcon = PressableOpacity(6708);
const MagicWandIcon = PressableOpacity(12500);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const VibegrationsCustomWidgetAddOption = "VibegrationsCustomWidgetAddOption";
const createStyles = fn(4890);
let obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
  },
  copy: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_16,
};
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetAddOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let PressableOpacity = require;
      let tmp = dependencyMap;
      const cResult = c.c(14);
      const tmp3 = closure_8();
      const tmp5 = UserProfileSharedStylesDefault();
      const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = ActionSheetActionCreators;
          obj.showActionSheet({
            content: closure_1_5(ConjureCustomWidgetSheetDefault, {}),
            key: ConjureCustomWidgetSheet.CONJURE_CUSTOM_WIDGET_SHEET_KEY,
            stackingBehavior: "stack",
          });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (!canConjureCustomWidget) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(_modDef3723.yI85oV);
          cResult[1] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp5.card) {
          if (cResult[3] === tmp3.row) {
            let tmp9 = cResult[4];
          }
          const _Symbol2 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
            const tmp12 = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
            cResult[5] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[5];
          }
          const _Symbol3 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: null };
            const intl2 = util.intl;
            obj4.children = intl2.string(_modDef3723["5WHmVU"]);
            const tmp15 = hasOwnProperty(Text_Text.Text, obj4);
            cResult[6] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[6];
          }
          const _Symbol4 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
            const intl3 = util.intl;
            obj5.children = intl3.string(_modDef3723.yI85oV);
            const tmp18 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[7] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] !== tmp3.copy) {
            const obj6 = { style: tmp3.copy, children: null };
            const items = [tmp13, tmp16];
            obj6.children = items;
            const tmp22 = timestampProducer(View, obj6);
            cResult[8] = tmp3.copy;
            cResult[9] = tmp22;
            let tmp19 = tmp22;
          } else {
            tmp19 = cResult[9];
          }
          const _Symbol5 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
            const tmp25 = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, obj7);
            cResult[10] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[10];
          }
          if (cResult[11] === tmp9) {
          }
          PressableOpacity = Pressables.PressableOpacity;
          const obj8 = {
            accessibilityRole: "button",
            accessibilityLabel: tmp7,
            style: tmp9,
            onPress: first,
            children: null,
          };
          first = [tmp10, tmp19, tmp23];
          obj8.children = first;
          tmp = timestampProducer(PressableOpacity, obj8);
          cResult[11] = tmp9;
          cResult[12] = tmp19;
          cResult[13] = tmp;
        }
        const items1 = [tmp5.card, tmp3.row];
        cResult[2] = tmp5.card;
        cResult[3] = tmp3.row;
        cResult[4] = items1;
        tmp9 = items1;
      }
    }
  : () => {
      const tmp = closure_8();
      const tmp4 = UserProfileSharedStylesDefault();
      const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(VibegrationsCustomWidgetAddOption);
      let tmp8 = null;
      if (canConjureCustomWidget) {
        const obj2 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          style: null,
          onPress: null,
          children: null,
        };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(_modDef3723.yI85oV);
        const items = [tmp4.card, tmp.row];
        obj2.style = items;
        obj2.onPress = tmp7;
        const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const items1 = [hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3), ,];
        const obj4 = { style: tmp.copy, children: null };
        const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: null };
        const intl2 = util.intl;
        obj5.children = intl2.string(_modDef3723["5WHmVU"]);
        const items2 = [hasOwnProperty(Text_Text.Text, obj5)];
        const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl3 = util.intl;
        obj6.children = intl3.string(_modDef3723.yI85oV);
        items2[1] = hasOwnProperty(Text_Text.Text, obj6);
        obj4.children = items2;
        items1[1] = timestampProducer(View, obj4);
        const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        items1[2] = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, obj7);
        obj2.children = items1;
        tmp8 = timestampProducer(Pressables.PressableOpacity, obj2);
      }
      return tmp8;
    };
