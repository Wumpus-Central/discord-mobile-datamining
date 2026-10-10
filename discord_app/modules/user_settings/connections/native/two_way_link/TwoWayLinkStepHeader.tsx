// === Module 9215: TwoWayLinkStepHeader ===

// Module 9215 (TwoWayLinkStepHeader)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6662 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9214 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkStepHeader(arg0) {
  const cResult = c.c(10);
  ({ idx, total } = arg0);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
  if (cResult[0] === typeConsolidationEyebrow.style) {
    if (cResult[1] === twoWayLinkStyles.stepHeader) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === idx) {
      if (cResult[4] === total) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === typeConsolidationEyebrow.variant) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      const obj4 = { variant: tmp6, color: "text-default", style: tmp7, children: tmp8 };
      const tmp12 = jsx(Text_Text.Text, { variant: tmp6, color: "text-default", style: tmp7, children: tmp8 });
      cResult[6] = typeConsolidationEyebrow.variant;
      cResult[7] = tmp7;
      cResult[8] = tmp8;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const intl = util.intl;
    const obj5 = { number: idx, total };
    const formatResult = intl.format(util.t.fHz6eR, obj5);
    cResult[3] = idx;
    cResult[4] = total;
    cResult[5] = formatResult;
    tmp8 = formatResult;
  }
  const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
  cResult[0] = typeConsolidationEyebrow.style;
  cResult[1] = twoWayLinkStyles.stepHeader;
  cResult[2] = items;
  tmp7 = items;
}) : (function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null };
  const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
  obj3.style = items;
  const intl = util.intl;
  obj3.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null });
});