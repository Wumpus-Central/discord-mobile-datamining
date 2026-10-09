// discord_app/modules/safety_hub/native/AppealIngestionPolicySummary.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  sectionTitle: { marginBottom: 8 },
  policy: { marginBottom: 16 },
  borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  userContainer: null,
};
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.userContainer = {
  marginTop: 8,
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 18,
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  marginTop: 8,
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 18,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppealIngestionPolicySummary(classification) {
      const cResult = c.c(21);
      classification = classification.classification;
      const tmp4 = closure_5();
      let description;
      if (classification != null) {
        description = classification.description;
      }
      if (cResult[0] !== description) {
        const capitalizeTextResult = SafetyHubUtils.capitalizeText(description);
        cResult[0] = description;
        cResult[1] = capitalizeTextResult;
        let tmp6 = capitalizeTextResult;
        const tmpResult = SafetyHubUtils;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp4.borderColor.color) {
        const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[2] = tmp4.borderColor.color;
        cResult[3] = hexWithOpacityResult;
        let tmp8 = hexWithOpacityResult;
        const tmpResult2 = ColorUtils;
      } else {
        tmp8 = cResult[3];
      }
      ({ policy, sectionTitle } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.xsdcxh);
        cResult[4] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4.sectionTitle) {
        const obj2 = { style: sectionTitle, variant: "text-sm/bold", children: tmp10 };
        const tmp14 = React3(Text_Text.Text, obj2);
        cResult[5] = tmp4.sectionTitle;
        cResult[6] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj3 = { borderColor: tmp8 };
        cResult[7] = tmp8;
        cResult[8] = obj3;
        let tmp15 = obj3;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp4.userContainer) {
        if (cResult[10] === tmp15) {
          let tmp16 = cResult[11];
        }
        if (cResult[12] !== tmp6) {
          const obj4 = { variant: "text-md/semibold", children: tmp6 };
          const tmp19 = React3(Text_Text.Text, obj4);
          cResult[12] = tmp6;
          cResult[13] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[13];
        }
        if (cResult[14] === tmp17) {
          if (cResult[15] === tmp16) {
            let tmp20 = cResult[16];
          }
          if (cResult[17] === tmp4.policy) {
            if (cResult[18] === tmp20) {
              if (cResult[19] === tmp12) {
                let tmp24 = cResult[20];
              }
              return tmp24;
            }
          }
          const obj5 = { style: policy, children: null };
          const items = [tmp12, tmp20];
          obj5.children = items;
          const tmp27 = React4(View, obj5);
          cResult[17] = tmp4.policy;
          cResult[18] = tmp20;
          cResult[19] = tmp12;
          cResult[20] = tmp27;
          tmp24 = tmp27;
        }
        const obj6 = { style: tmp16, children: tmp17 };
        const tmp23 = React3(View, obj6);
        cResult[14] = tmp17;
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        tmp20 = tmp23;
      }
      const items1 = [tmp4.userContainer, tmp15];
      cResult[9] = tmp4.userContainer;
      cResult[10] = tmp15;
      cResult[11] = items1;
      tmp16 = items1;
    }
  : function AppealIngestionPolicySummary(classification) {
      classification = classification.classification;
      const tmp = closure_5();
      let description;
      if (classification != null) {
        description = classification.description;
      }
      const capitalizeTextResult = SafetyHubUtils.capitalizeText(description);
      const obj2 = { style: tmp.policy, children: null };
      const tmp2Result = ColorUtils;
      const obj3 = { style: tmp.sectionTitle, variant: "text-sm/bold", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.xsdcxh);
      const items = [React3(Text_Text.Text, obj3)];
      const obj4 = {
        style: null,
        children: React3(Text_Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }),
      };
      const items1 = [tmp.userContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
      obj4.style = items1;
      items[1] = React3(View, obj4);
      obj2.children = items;
      return React4(View, obj2);
    };
