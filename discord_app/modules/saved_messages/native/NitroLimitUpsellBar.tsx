// discord_app/modules/saved_messages/native/NitroLimitUpsellBar.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import WarningIcon from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef9508 from "../../../../_runtime/metro/09508__.js";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.md,
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    marginBottom: nativeDefault.space.PX_16,
    marginHorizontal: nativeDefault.space.PX_16,
    padding: nativeDefault.space.PX_12,
  },
  icon: { height: 20, width: 20 },
  text: { flex: 1 },
};
let closure_6 = createStyles.createStyles(obj);
let obj2 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_12,
};
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NitroLimitUpsellBar(arg0) {
      let stringResult = dependencyMap;
      const cResult = c.c(16);
      ({ text, isAtLimit, onPress, loading } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === isAtLimit) {
        if (cResult[1] === tmp4.icon) {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-xs/bold", color: "text-brand", children: null };
            const intl = util.intl;
            obj2.children = intl.string(util.t.oW0eUd).toUpperCase();
            const tmp13 = React4(Text_Text.Text, obj2);
            cResult[3] = tmp13;
            let tmp11 = tmp13;
            const str2 = intl.string(util.t.oW0eUd);
          } else {
            tmp11 = cResult[3];
          }
          if (cResult[4] === tmp4.text) {
            if (cResult[5] === text) {
              let tmp14 = cResult[6];
            }
            if (cResult[7] === isAtLimit) {
              if (cResult[8] === loading) {
                if (cResult[9] === onPress) {
                  if (cResult[11] === tmp4.container) {
                    if (cResult[12] === tmp5) {
                      if (cResult[13] === tmp14) {
                        if (cResult[14] === tmp17) {
                          let tmp22 = cResult[15];
                        }
                        return tmp22;
                      }
                    }
                  }
                  const obj3 = { style: tmp4.container, children: null };
                  const items = [tmp5, tmp14, cResult[10]];
                  obj3.children = items;
                  const tmp25 = hasOwnProperty(View, obj3);
                  cResult[11] = tmp4.container;
                  cResult[12] = tmp5;
                  cResult[13] = tmp14;
                  cResult[14] = cResult[10];
                  cResult[15] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
            if (isAtLimit) {
              let Button = NitroUpsellButtonDefault;
            } else {
              Button = components_Button_Button.Button;
            }
            const obj4 = { size: "sm", text: null, onPress: null, loading: null };
            const intl2 = util.intl;
            stringResult = intl2.string(util.t["8x0jKT"]);
            obj4.text = stringResult;
            obj4.onPress = onPress;
            obj4.loading = loading;
            const tmp18Result = React4(Button, obj4);
            cResult[7] = isAtLimit;
            cResult[8] = loading;
            cResult[9] = onPress;
            cResult[10] = tmp18Result;
          }
          const obj5 = { variant: "text-xs/medium", color: "text-default", style: tmp4.text, children: null };
          const items1 = [tmp11, " \u00B7 ", text];
          obj5.children = items1;
          const tmp16 = hasOwnProperty(Text_Text.Text, obj5);
          cResult[4] = tmp4.text;
          cResult[5] = text;
          cResult[6] = tmp16;
          tmp14 = tmp16;
        }
      }
      if (isAtLimit) {
        const obj6 = { color: "text-feedback-warning", style: tmp4.icon };
        let tmp6Result = React4(WarningIcon.WarningIcon, obj6);
      } else {
        const obj7 = { source: _modDef9508, style: tmp4.icon };
        tmp6Result = React4(FastImageDefault, obj7);
      }
      cResult[0] = isAtLimit;
      cResult[1] = tmp4.icon;
      cResult[2] = tmp6Result;
    }
  : function NitroLimitUpsellBar(isAtLimit) {
      isAtLimit = isAtLimit.isAtLimit;
      ({ text, onPress, loading } = isAtLimit);
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      if (isAtLimit) {
        const obj2 = { color: "text-feedback-warning", style: tmp.icon };
        let tmp4Result = React4(WarningIcon.WarningIcon, obj2);
        let tmp9 = React4;
      } else {
        const obj3 = { source: _modDef9508, style: tmp.icon };
        tmp4Result = React4(FastImageDefault, obj3);
        tmp9 = React4;
      }
      const items = [tmp4Result, ,];
      const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
      const obj5 = { variant: "text-xs/bold", color: "text-brand", children: null };
      const intl = util.intl;
      obj5.children = intl.string(util.t.oW0eUd).toUpperCase();
      const items1 = [tmp9(Text_Text.Text, obj5), " \u00B7 ", text];
      obj4.children = items1;
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      if (isAtLimit) {
        let Button = NitroUpsellButtonDefault;
      } else {
        Button = components_Button_Button.Button;
      }
      const obj6 = { size: "sm", text: null, onPress: null, loading: null };
      const intl2 = util.intl;
      obj6.text = intl2.string(util.t["8x0jKT"]);
      obj6.onPress = onPress;
      obj6.loading = loading;
      items[2] = tmp9(Button, obj6);
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
