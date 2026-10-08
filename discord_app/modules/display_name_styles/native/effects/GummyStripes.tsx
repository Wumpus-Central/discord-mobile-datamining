// discord_app/modules/display_name_styles/native/effects/GummyStripes.tsx
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4 } = jsxProd);
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GummyStripes(colors) {
      const cResult = require("c").c(7);
      colors = colors.colors;
      const tmp2 = closure_5();
      _require = tmp2;
      if (cResult[0] === colors) {
        if (cResult[1] === tmp2) {
          if (cResult[5] !== cResult[2]) {
            let obj2 = { children: tmp3 };
            const tmp9 = closure_3(closure_4, obj2);
            cResult[5] = tmp3;
            cResult[6] = tmp9;
            let tmp6 = tmp9;
          } else {
            tmp6 = cResult[6];
          }
          return tmp6;
        }
      }
      if (cResult[3] !== tmp2) {
        const fn = function c(color, arg1) {
          const items = [closure_0.stripe, ,];
          let stripeOverlap = arg1 > 0;
          if (stripeOverlap) {
            stripeOverlap = closure_0.stripeOverlap;
          }
          const obj = { style: null };
          items[1] = stripeOverlap;
          const obj2 = { backgroundColor: utils_ColorUtils.int2hex(color) };
          items[2] = obj2;
          obj.style = items;
          return React3(View, obj, arg1);
        };
        cResult[3] = tmp2;
        cResult[4] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[4];
      }
      const mapped = colors.map(tmp4);
      cResult[0] = colors;
      cResult[1] = tmp2;
      cResult[2] = mapped;
      let obj = require("c");
    }
  : function GummyStripes(colors) {
      colors = colors.colors;
      closure_0 = closure_5();
      return closure_3(closure_4, {
        children: colors.map((item, index) => {
          const items = [closure_0.stripe, ,];
          let stripeOverlap = index > 0;
          if (stripeOverlap) {
            stripeOverlap = closure_0.stripeOverlap;
          }
          const obj = { style: null };
          items[1] = stripeOverlap;
          const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
          items[2] = obj2;
          obj.style = items;
          return React3(View, obj, index);
        }),
      });
    };
