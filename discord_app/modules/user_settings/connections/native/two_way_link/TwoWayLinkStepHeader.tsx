// === Module 9227: TwoWayLinkStepHeader ===

// Module 9227 (TwoWayLinkStepHeader)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9226 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};