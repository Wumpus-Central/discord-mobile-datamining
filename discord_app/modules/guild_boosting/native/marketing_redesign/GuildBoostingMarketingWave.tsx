// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default function GuildBoostingMarketingWave(arg0) {
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW);
  obj = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
  const merged = Object.assign(arg0);
  obj.children = jsx(require("../../../../../_runtime/08437_inlineStyles.js") /* inlineStyles */.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: token });
  return jsx(require("../../../../../_runtime/08437_inlineStyles.js"), { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" });
};