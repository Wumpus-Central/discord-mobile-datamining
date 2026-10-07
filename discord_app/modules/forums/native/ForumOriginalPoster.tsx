// discord_app/modules/forums/native/ForumOriginalPoster.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  opIcon: { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 },
  opIconBackground: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 };
obj2.opIconBackground = { backgroundColor: fn(5627).DARK_BRAND_260_LIGHT_BRAND_200 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(10);
      const tmp4 = closure_5();
      if (cResult[0] === tmp4.opIcon) {
        if (cResult[1] === tmp4.opIconBackground) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: null };
          const intl = util.intl;
          obj2.children = intl.string(util.t.fyE8sH);
          const tmp9 = React3(Text_Text.Text, obj2);
          cResult[3] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp5) {
          const obj3 = { style: tmp5, children: tmp7 };
          const tmp13 = React3(View, obj3);
          cResult[4] = tmp5;
          cResult[5] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl2 = util.intl;
          obj4.children = intl2.string(util.t.uN6Emt);
          const tmp16 = React3(Text_Text.Text, obj4);
          cResult[6] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp10) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
        const obj5 = { style: tmp4.container, children: null };
        const items = [tmp10, tmp14];
        obj5.children = items;
        const tmp20 = React4(View, obj5);
        cResult[7] = tmp4.container;
        cResult[8] = tmp10;
        cResult[9] = tmp20;
        tmp17 = tmp20;
      }
      const items1 = [,];
      ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp4);
      cResult[0] = tmp4.opIcon;
      cResult[1] = tmp4.opIconBackground;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : () => {
      const tmp = closure_5();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: null, children: null };
      const items = [,];
      ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
      obj2.style = items;
      const obj3 = { variant: "text-xs/semibold", color: "text-brand", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.fyE8sH);
      obj2.children = React3(Text_Text.Text, obj3);
      const items1 = [React3(View, obj2)];
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.uN6Emt);
      items1[1] = React3(Text_Text.Text, obj4);
      obj.children = items1;
      return React4(View, obj);
    };
let closure_6 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default tmp4;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return React3(closure_6, {});
};
