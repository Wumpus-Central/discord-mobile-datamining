// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TwoWayLinkStyles from "TwoWayLinkStyles.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx",
);

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    style: twoWayLinkStyles.stepHeader,
    children: null,
  });
};
