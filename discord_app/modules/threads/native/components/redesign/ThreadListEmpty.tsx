// discord_app/modules/threads/native/components/redesign/ThreadListEmpty.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import _modDef11881 from "../../../../../../_runtime/metro/11881__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconWrapper: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: nativeDefault.radii.round,
    padding: 12,
  },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 16 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 },
};
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  padding: 12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onCreateThreadPress) => {
        const cResult = c.c(17);
        onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: _modDef11881, size: native.Icon.Sizes.MEDIUM };
          const tmp8 = React4(native.Icon, obj2);
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.iconWrapper) {
          const obj3 = { style: tmp4.iconWrapper, children: first };
          const tmp12 = React4(View, obj3);
          cResult[1] = tmp4.iconWrapper;
          cResult[2] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.HgTQ8p);
          cResult[3] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] !== tmp4.title) {
          const obj4 = {
            style: tmp4.title,
            accessibilityRole: "header",
            maxFontSizeMultiplier: 2,
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            children: tmp13,
          };
          const tmp17 = React4(Text_Text.Text, obj4);
          cResult[4] = tmp4.title;
          cResult[5] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.jmq9GC);
          cResult[6] = stringResult1;
          let tmp18 = stringResult1;
        } else {
          tmp18 = cResult[6];
        }
        if (cResult[7] !== tmp4.subtext) {
          const obj5 = {
            style: tmp4.subtext,
            maxFontSizeMultiplier: 2,
            variant: "text-sm/medium",
            color: "text-default",
            children: tmp18,
          };
          const tmp22 = React4(Text_Text.Text, obj5);
          cResult[7] = tmp4.subtext;
          cResult[8] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[8];
        }
        if (cResult[9] !== onCreateThreadPress) {
          let tmp25 = null != onCreateThreadPress;
          if (tmp25) {
            const obj6 = { onPress: onCreateThreadPress, text: null };
            const intl3 = util.intl;
            obj6.text = intl3.string(util.t.rBIGBL);
            tmp25 = React4(components_Button_Button.Button, obj6);
          }
          cResult[9] = onCreateThreadPress;
          cResult[10] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp4.container) {
          if (cResult[12] === tmp23) {
            if (cResult[13] === tmp9) {
              if (cResult[14] === tmp15) {
                if (cResult[15] === tmp20) {
                  let tmp27 = cResult[16];
                }
                return tmp27;
              }
            }
          }
        }
        const obj7 = { style: tmp4.container, children: null };
        const items = [tmp9, tmp15, tmp20, tmp23];
        obj7.children = items;
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
        onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
        const tmp = closure_6();
        const obj = { style: tmp.container, children: null };
        const obj2 = {
          style: tmp.iconWrapper,
          children: React4(native.Icon, { source: _modDef11881, size: native.Icon.Sizes.MEDIUM }),
        };
        const items = [React4(View, obj2), , ,];
        const obj4 = {
          style: tmp.title,
          accessibilityRole: "header",
          maxFontSizeMultiplier: 2,
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = util.intl;
        obj4.children = intl.string(util.t.HgTQ8p);
        items[1] = React4(Text_Text.Text, obj4);
        const obj5 = {
          style: tmp.subtext,
          maxFontSizeMultiplier: 2,
          variant: "text-sm/medium",
          color: "text-default",
          children: null,
        };
        const intl2 = util.intl;
        obj5.children = intl2.string(util.t.jmq9GC);
        items[2] = React4(Text_Text.Text, obj5);
        let tmp4Result = null != onCreateThreadPress;
        if (tmp4Result) {
          const obj6 = { onPress: onCreateThreadPress, text: null };
          const intl3 = util.intl;
          obj6.text = intl3.string(util.t.rBIGBL);
          tmp4Result = React4(components_Button_Button.Button, obj6);
        }
        items[3] = tmp4Result;
        obj.children = items;
        return hasOwnProperty(View, obj);
      },
);
