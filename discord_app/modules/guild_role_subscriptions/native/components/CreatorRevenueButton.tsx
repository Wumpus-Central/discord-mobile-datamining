// discord_app/modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import ShinyButtonDefault from "ShinyButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { borderRadius: 3 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disabled;
      let loading;
      let onPress;
      let style;
      let text;
      const obj = react2;
      const cResult = obj.c(9);
      ({ disabled, text, onPress, style, loading } = arg0);
      const tmp3 = closure_4();
      if (cResult[0] === style) {
        let tmp4;
        if (cResult[1] === tmp3.container) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === disabled) {
          if (cResult[4] === loading) {
            if (cResult[5] === onPress) {
              if (cResult[6] === tmp4) {
                let tmp5;
                if (cResult[7] === text) {
                  tmp5 = cResult[8];
                }
                return tmp5;
              }
            }
          }
        }
        const tmp8 = jsx(ShinyButtonDefault, { style: tmp4, loading, disabled, onPress, text });
        cResult[3] = disabled;
        cResult[4] = loading;
        cResult[5] = onPress;
        cResult[6] = tmp4;
        cResult[7] = text;
        cResult[8] = tmp8;
        tmp5 = tmp8;
      }
      const items = [tmp3.container, style];
      cResult[0] = style;
      cResult[1] = tmp3.container;
      cResult[2] = items;
      tmp4 = items;
    }
  : (arg0) => {
      let disabled;
      let loading;
      let onPress;
      let style;
      let text;
      ({ disabled, text, onPress, style, loading } = arg0);
      const items = [closure_4().container, style];
      closure_4();
      return jsx(ShinyButtonDefault, { style: items, loading, disabled, onPress, text });
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx",
);

export const CreatorRevenueButton = tmp3;
