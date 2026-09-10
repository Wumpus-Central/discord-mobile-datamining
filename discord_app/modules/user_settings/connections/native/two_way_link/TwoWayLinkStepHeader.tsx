// === Module 9296: TwoWayLinkStepHeader ===

// Module 9296 (TwoWayLinkStepHeader)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4601 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7031 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9295 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
  obj = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null };
  const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
  obj.style = items;
  const intl = util.intl;
  obj.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null });
};