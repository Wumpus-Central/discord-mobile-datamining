// discord_app/modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import ShinyButtonDefault from "ShinyButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ container: { borderRadius: 3 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx",
);

export const CreatorRevenueButton = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ disabled, text, onPress, style, loading } = arg0);
      const tmp3 = closure_4();
      if (cResult[0] === style) {
        if (cResult[1] === tmp3.container) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === disabled) {
          if (cResult[4] === loading) {
            if (cResult[5] === onPress) {
              if (cResult[6] === tmp4) {
                if (cResult[7] === text) {
                  let tmp5 = cResult[8];
                }
                return tmp5;
              }
            }
          }
        }
        const obj2 = { style: tmp4, loading, disabled, onPress, text };
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
      ({ disabled, text, onPress, style, loading } = arg0);
      const obj = { style: null, loading, disabled, onPress, text };
      const items = [closure_4().container, style];
      obj.style = items;
      return jsx(ShinyButtonDefault, { style: null, loading, disabled, onPress, text });
    };
