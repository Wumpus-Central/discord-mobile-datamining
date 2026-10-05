// discord_app/modules/display_name_styles/native/effects/GummyStripes.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, colors;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, Fragment: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (colors) => {
      let closure_0;
      let tmp4;
      let obj = require("react");
      const cResult = obj.c(7);
      colors = colors.colors;
      const tmp2 = closure_5();
      _require = tmp2;
      if (cResult[0] === colors) {
        let tmp3;
        let tmp6;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        if (cResult[5] !== tmp3) {
          let obj2 = { children: tmp3 };
          const tmp9 = closure_3(closure_4, obj2);
          cResult[5] = tmp3;
          cResult[6] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
      if (cResult[3] !== tmp2) {
        const fn = function c(color, arg1) {
          let obj3;
          const items = [closure_0.stripe, ,];
          const stripeOverlap = arg1 > 0 && closure_0.stripeOverlap;
          const obj = { style: items };
          items[1] = stripeOverlap;
          const obj2 = { backgroundColor: obj3.int2hex(color) };
          items[2] = obj2;
          obj3 = utils_ColorUtils;
          return _false(View, obj, arg1);
        };
        cResult[3] = tmp2;
        cResult[4] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[4];
      }
      const mapped = colors.map(tmp4);
      cResult[0] = colors;
      cResult[1] = tmp2;
      cResult[2] = mapped;
      tmp3 = mapped;
    }
  : (colors) => {
      colors = colors.colors;
      let closure_0 = closure_5();
      let obj = {
        children: colors.map((item, index) => {
          let obj3;
          const items = [closure_0.stripe, ,];
          const stripeOverlap = index > 0 && closure_0.stripeOverlap;
          const obj = { style: items };
          items[1] = stripeOverlap;
          const obj2 = { backgroundColor: obj3.int2hex(item) };
          items[2] = obj2;
          obj3 = utils_ColorUtils;
          return _false(View, obj, index);
        }),
      };
      return closure_3(closure_4, obj);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default tmp4;
