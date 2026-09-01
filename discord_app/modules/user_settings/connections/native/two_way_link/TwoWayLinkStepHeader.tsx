// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import styles from "TwoWayLinkStyles.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx",
);

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  let obj = styles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(getSystemLocale.t.fHz6eR, { number: idx, total });
  return jsx(Text.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    style: twoWayLinkStyles.stepHeader,
    children: null,
  });
};
