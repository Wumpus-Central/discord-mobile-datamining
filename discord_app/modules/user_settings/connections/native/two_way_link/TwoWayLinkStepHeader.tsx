// === Module 9881: TwoWayLinkStepHeader ===

// Module 9881 (TwoWayLinkStepHeader)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5761 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  const obj = { variant: "body-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: null });
}