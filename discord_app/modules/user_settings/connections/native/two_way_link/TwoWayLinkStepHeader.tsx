import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("styles").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  let idx;
  let total;
  ({ idx, total } = arg0);
  let obj = require(10413) /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(require(1236) /* getSystemLocale */.t.fHz6eR, { number: idx, total });
  return jsx(require(4281) /* Text */.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};