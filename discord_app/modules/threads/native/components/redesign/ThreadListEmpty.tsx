// discord_app/modules/threads/native/components/redesign/ThreadListEmpty.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/11867_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let onCreateThreadPress;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconWrapper: obj2,
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 16 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  padding: 12,
};
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onCreateThreadPress) => {
        let first;
        let intl3;
        let items;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp20;
        let tmp23;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(17);
        onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
        const tmp4 = closure_6();
        const container = tmp4.container;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
          const Icon = native.Icon;
          const tmp8 = React3(Icon, obj2);
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.iconWrapper) {
          const obj3 = { style: tmp4.iconWrapper, children: first };
          const tmp12 = React3(View, obj3);
          cResult[1] = tmp4.iconWrapper;
          cResult[2] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[2];
        }
        const title = tmp4.title;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.HgTQ8p);
          cResult[3] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] !== tmp4.title) {
          const obj4 = {
            style: title,
            accessibilityRole: "header",
            maxFontSizeMultiplier: 2,
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            children: tmp13,
          };
          const tmp17 = React3(Text_Text.Text, obj4);
          cResult[4] = tmp4.title;
          cResult[5] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[5];
        }
        const subtext = tmp4.subtext;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.jmq9GC);
          cResult[6] = stringResult1;
          tmp18 = stringResult1;
        } else {
          tmp18 = cResult[6];
        }
        if (cResult[7] !== tmp4.subtext) {
          const obj5 = {
            style: subtext,
            maxFontSizeMultiplier: 2,
            variant: "text-sm/medium",
            color: "text-default",
            children: tmp18,
          };
          const tmp22 = React3(Text_Text.Text, obj5);
          cResult[7] = tmp4.subtext;
          cResult[8] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] !== onCreateThreadPress) {
          let tmp25 = null != onCreateThreadPress;
          if (tmp25) {
            const obj6 = { onPress: onCreateThreadPress, text: intl3.string(intl4.t.rBIGBL) };
            const Button = components_Button_Button.Button;
            intl3 = intl4.intl;
            tmp25 = React3(Button, obj6);
          }
          cResult[9] = onCreateThreadPress;
          cResult[10] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp4.container) {
          if (cResult[12] === tmp23) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp15) {
                let tmp27;
                if (cResult[15] === tmp20) {
                  tmp27 = cResult[16];
                }
                return tmp27;
              }
            }
          }
        }
        const obj7 = { style: container, children: items };
        items = [tmp9, tmp15, tmp20, tmp23];
        const tmp28 = hasOwnProperty(View, obj7);
        cResult[11] = tmp4.container;
        cResult[12] = tmp23;
        cResult[13] = tmp9;
        cResult[14] = tmp15;
        cResult[15] = tmp20;
        cResult[16] = tmp28;
        tmp27 = tmp28;
      }
    : (onCreateThreadPress) => {
        let Icon;
        let intl;
        let intl2;
        let intl3;
        let items;
        let obj3;
        onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
        const tmp = closure_6();
        const obj = { style: tmp.container, children: items };
        const obj2 = { style: tmp.iconWrapper, children: React3(Icon, obj3) };
        obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
        Icon = native.Icon;
        items = [React3(View, obj2), , ,];
        const obj4 = {
          style: tmp.title,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: intl.string(intl4.t.HgTQ8p),
        };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        items[1] = React3(Text, obj4);
        const obj5 = {
          style: tmp.subtext,
          maxFontSizeMultiplier: 2,
          variant: "text-sm/medium",
          color: "text-default",
          children: intl2.string(intl4.t.jmq9GC),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        items[2] = React3(Text2, obj5);
        let tmp4Result = null != onCreateThreadPress;
        if (tmp4Result) {
          const obj6 = { onPress: onCreateThreadPress, text: intl3.string(intl4.t.rBIGBL) };
          const Button = components_Button_Button.Button;
          intl3 = intl4.intl;
          tmp4Result = React3(Button, obj6);
        }
        items[3] = tmp4Result;
        return hasOwnProperty(View, obj);
      },
);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;
