// discord_app/modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ShinyButtonDefault from "ShinyButton.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { borderRadius: 3 } });
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx",
);

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container];
  style[1] = style;
  return jsx(ShinyButtonDefault, { style, loading, disabled, onPress, text });
};
