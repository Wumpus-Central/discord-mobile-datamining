// discord_app/modules/user_settings/premium/native/PremiumFeaturesLogo.tsx
import c from "../../../../../_runtime/00576_c.js";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import _modDef6941 from "../../../../../_runtime/metro/06941__.js";
import _modDef8888 from "../../../../../_runtime/metro/08888__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      ({ premiumType, style } = arg0);
      if (premiumType === PremiumTypes.TIER_0) {
        let tmp5 = _modDef8888;
        let tmp6 = importDefault;
      } else {
        tmp5 = _modDef6941;
        tmp6 = importDefault;
      }
      if (cResult[0] !== premiumType) {
        const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(premiumType);
        cResult[0] = premiumType;
        cResult[1] = premiumTypeDisplayName;
        let tmp8 = premiumTypeDisplayName;
        const tmpResult = PremiumUtils;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === style) {
          if (cResult[4] === tmp8) {
            let tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
      const tmp11 = jsx(tmp6(5974), {
        accessible: true,
        accessibilityLabel: tmp8,
        accessibilityRole: "header",
        style,
        resizeMode: "contain",
        source: tmp5,
      });
      cResult[2] = tmp5;
      cResult[3] = style;
      cResult[4] = tmp8;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (premiumType) => {
      premiumType = premiumType.premiumType;
      if (premiumType === PremiumTypes.TIER_0) {
        let tmp3 = _modDef8888;
        let tmp = importDefault;
      } else {
        tmp = importDefault;
        tmp3 = _modDef6941;
      }
      const obj = {
        accessible: true,
        accessibilityLabel: null,
        accessibilityRole: "header",
        style: null,
        resizeMode: "contain",
        source: null,
      };
      const tmpResult = tmp(5974);
      obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
      obj.style = premiumType.style;
      obj.source = tmp3;
      return (
        <tmpResult
          accessible
          accessibilityLabel={null}
          accessibilityRole="header"
          style={null}
          resizeMode="contain"
          source={null}
        />
      );
    };
