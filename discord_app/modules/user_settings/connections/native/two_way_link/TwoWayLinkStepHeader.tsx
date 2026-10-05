// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../../design/useTypeConsolidationTextTransform.tsx";
import TwoWayLinkStyles from "TwoWayLinkStyles.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let idx;
      let total;
      const obj = react2;
      const cResult = obj.c(10);
      ({ idx, total } = arg0);
      const obj2 = TwoWayLinkStyles;
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      const obj3 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj3.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
      if (cResult[0] === typeConsolidationEyebrow.style) {
        let tmp7;
        if (cResult[1] === twoWayLinkStyles.stepHeader) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === idx) {
          let tmp8;
          if (cResult[4] === total) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === typeConsolidationEyebrow.variant) {
            if (cResult[7] === tmp7) {
              let tmp10;
              if (cResult[8] === tmp8) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          const tmp12 = jsx(Text_Text.Text, { variant: tmp6, color: "text-default", style: tmp7, children: tmp8 });
          cResult[6] = typeConsolidationEyebrow.variant;
          cResult[7] = tmp7;
          cResult[8] = tmp8;
          cResult[9] = tmp12;
          tmp10 = tmp12;
        }
        const intl = intl2.intl;
        const obj5 = { number: idx, total };
        const formatResult = intl.format(intl2.t.fHz6eR, obj5);
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
    }
  : (arg0) => {
      let idx;
      let total;
      ({ idx, total } = arg0);
      const obj = TwoWayLinkStyles;
      const twoWayLinkStyles = obj.useTwoWayLinkStyles();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
      const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      return (
        <Text variant={typeConsolidationEyebrow.variant} color="text-default" style={items}>
          {intl.format(intl2.t.fHz6eR, { number: idx, total })}
        </Text>
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx",
);

export const TwoWayLinkStepHeader = tmp3;
