// === Module 9228: TwoWayLinkStepHeader ===

// Module 9228 (TwoWayLinkStepHeader)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import styles from "styles" /* 9227 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(getSystemLocale.t.fHz6eR, { number: idx, total });
  return jsx(Text.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};