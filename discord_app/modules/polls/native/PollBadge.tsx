// discord_app/modules/polls/native/PollBadge.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef16827 from "../../../../_runtime/metro/16827__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    color: nativeDefault.colors.TEXT_MUTED,
    flexDirection: "row",
    alignItems: "center",
  },
  text: { marginLeft: 4, textTransform: "uppercase" },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  color: nativeDefault.colors.TEXT_MUTED,
  flexDirection: "row",
  alignItems: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const cResult = c.c(10);
      style = style.style;
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: native.IconSizes.EXTRA_SMALL_10, source: _modDef16827 };
          const tmp10 = React4(native.Icon, obj2);
          cResult[3] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.RgIi2B);
          cResult[4] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp4.text) {
          const obj3 = { style: tmp4.text, variant: "text-xs/semibold", children: tmp11 };
          const tmp15 = React4(Text_Text.Text, obj3);
          cResult[5] = tmp4.text;
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp13) {
            let tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj4 = { style: tmp5, children: null };
        const items = [tmp7, tmp13];
        obj4.children = items;
        const tmp19 = hasOwnProperty(View, obj4);
        cResult[7] = tmp5;
        cResult[8] = tmp13;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const items1 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : (style) => {
      const tmp = closure_6();
      const obj = { style: null, children: null };
      const items = [tmp.container, style.style];
      obj.style = items;
      const items1 = [React4(native.Icon, { size: native.IconSizes.EXTRA_SMALL_10, source: _modDef16827 })];
      const obj3 = { style: tmp.text, variant: "text-xs/semibold", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.RgIi2B);
      items1[1] = React4(Text_Text.Text, obj3);
      obj.children = items1;
      return hasOwnProperty(View, obj);
    };
