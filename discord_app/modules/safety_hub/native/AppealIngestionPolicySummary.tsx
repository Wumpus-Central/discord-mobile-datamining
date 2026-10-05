// discord_app/modules/safety_hub/native/AppealIngestionPolicySummary.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let classification;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 }, borderColor: obj2, userContainer: obj3 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = {
  marginTop: 8,
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 18,
};
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (classification) => {
      let items;
      let policy;
      let sectionTitle;
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp6;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(21);
      classification = classification.classification;
      const tmp4 = closure_5();
      let description;
      if (classification != null) {
        description = classification.description;
      }
      if (cResult[0] !== description) {
        const tmpResult = SafetyHubUtils;
        const capitalizeTextResult = tmpResult.capitalizeText(description);
        cResult[0] = description;
        cResult[1] = capitalizeTextResult;
        tmp6 = capitalizeTextResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp4.borderColor.color) {
        const tmpResult2 = ColorUtils;
        const hexWithOpacityResult = tmpResult2.hexWithOpacity(tmp4.borderColor.color, 0.08);
        cResult[2] = tmp4.borderColor.color;
        cResult[3] = hexWithOpacityResult;
        tmp8 = hexWithOpacityResult;
      } else {
        tmp8 = cResult[3];
      }
      ({ policy, sectionTitle } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.xsdcxh);
        cResult[4] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== tmp4.sectionTitle) {
        const obj2 = { style: sectionTitle, variant: "text-sm/bold", children: tmp10 };
        const tmp14 = _false(Text_Text.Text, obj2);
        cResult[5] = tmp4.sectionTitle;
        cResult[6] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== tmp8) {
        const obj3 = { borderColor: tmp8 };
        cResult[7] = tmp8;
        cResult[8] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp4.userContainer) {
        let tmp16;
        let tmp17;
        if (cResult[10] === tmp15) {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== tmp6) {
          const obj4 = { variant: "text-md/semibold", children: tmp6 };
          const tmp19 = _false(Text_Text.Text, obj4);
          cResult[12] = tmp6;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[13];
        }
        if (cResult[14] === tmp17) {
          let tmp20;
          if (cResult[15] === tmp16) {
            tmp20 = cResult[16];
          }
          if (cResult[17] === tmp4.policy) {
            if (cResult[18] === tmp20) {
              let tmp24;
              if (cResult[19] === tmp12) {
                tmp24 = cResult[20];
              }
              return tmp24;
            }
          }
          const obj5 = { style: policy, children: items };
          items = [tmp12, tmp20];
          const tmp27 = React3(View, obj5);
          cResult[17] = tmp4.policy;
          cResult[18] = tmp20;
          cResult[19] = tmp12;
          cResult[20] = tmp27;
          tmp24 = tmp27;
        }
        const obj6 = { style: tmp16, children: tmp17 };
        const tmp23 = _false(View, obj6);
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
  : (classification) => {
      let intl;
      let items;
      let items1;
      classification = classification.classification;
      const tmp = closure_5();
      let description;
      const capitalizeText = SafetyHubUtils.capitalizeText;
      SafetyHubUtils;
      if (classification != null) {
        description = classification.description;
      }
      const capitalizeTextResult = capitalizeText(description);
      const obj = { style: tmp.policy, children: items };
      const tmp2Result = ColorUtils;
      const obj2 = { style: tmp.sectionTitle, variant: "text-sm/bold", children: intl.string(intl2.t.xsdcxh) };
      const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp.borderColor.color, 0.08);
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items = [_false(Text, obj2)];
      const obj3 = {
        style: items1,
        children: _false(Text_Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }),
      };
      items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
      items[1] = _false(View, obj3);
      return React3(View, obj);
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default tmp5;
