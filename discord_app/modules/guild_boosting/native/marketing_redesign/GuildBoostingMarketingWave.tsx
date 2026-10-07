// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(5);
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      if (cResult[0] !== token) {
        const obj3 = {
          d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z",
          fill: token,
        };
        const tmp8 = jsx(inlineStyles.Path, {
          d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z",
          fill: token,
        });
        cResult[0] = token;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === arg0) {
        if (cResult[3] === tmp6) {
          let tmp9 = cResult[4];
        }
        return tmp9;
      }
      const obj4 = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
      const merged = Object.assign(arg0);
      obj4.children = tmp6;
      const tmp12 = jsx(inlineStylesDefault, { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" });
      cResult[2] = arg0;
      cResult[3] = tmp6;
      cResult[4] = tmp12;
      tmp9 = tmp12;
      const tmp4Result = inlineStylesDefault;
    }
  : (arg0) => {
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      const obj2 = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
      const merged = Object.assign(arg0);
      obj2.children = jsx(inlineStyles.Path, {
        d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z",
        fill: token,
      });
      return jsx(inlineStylesDefault, { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" });
    };
