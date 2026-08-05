// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("styles").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  let obj = require("TwoWayLinkStyles.tsx") /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.format(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.fHz6eR, { number: idx, total });
  return jsx(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};