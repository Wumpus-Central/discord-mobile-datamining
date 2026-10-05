// discord_app/modules/parent_tools/native/FamilyCenterActivityBanner.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import _modDef2493 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText3 from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterBannerButton from "FamilyCenterBannerButton.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles({ container: { width: "100%" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_7();
      const obj2 = useUserLinks;
      const hasActiveLinks = obj2.useHasActiveLinks();
      const tmp6 = useIsInAdultAgeGroupDefault();
      let tmp7 = null;
      const obj3 = useUserLinks;
      if (!obj3.useHasMaxConnections()) {
        if (!tmp6) {
          let tmp8;
          if (cResult[0] !== tmp6) {
            const tmpResult = FamilyCenterBannerButton;
            const tmp9Result = hasOwnProperty(
              tmp6 ? tmpResult.FamilyCenterParentQRCodeButton : tmpResult.FamilyCenterTeenQRCodeButton,
              {},
            );
            cResult[0] = tmp6;
            cResult[1] = tmp9Result;
            tmp8 = tmp9Result;
          } else {
            tmp8 = cResult[1];
          }
          if (cResult[2] === tmp4.container) {
            let tmp12;
            if (cResult[3] === tmp8) {
              tmp12 = cResult[4];
            }
            tmp7 = tmp12;
          }
          const obj4 = { style: tmp4.container, children: tmp8 };
          const tmp15 = hasOwnProperty(_false, obj4);
          cResult[2] = tmp4.container;
          cResult[3] = tmp8;
          cResult[4] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp7 = null;
        }
      }
      return tmp7;
    }
  : () => {
      let tmp2Result;
      const tmp = closure_7();
      const obj = useUserLinks;
      const hasActiveLinks = obj.useHasActiveLinks();
      const tmp5 = useIsInAdultAgeGroupDefault();
      let tmp7Result = null;
      const obj2 = useUserLinks;
      if (!obj2.useHasMaxConnections()) {
        if (!tmp5) {
          const obj3 = {
            style: tmp.container,
            children: hasOwnProperty(
              tmp5 ? tmp2Result.FamilyCenterParentQRCodeButton : tmp2Result.FamilyCenterTeenQRCodeButton,
              {},
            ),
          };
          tmp2Result = FamilyCenterBannerButton;
          tmp7Result = hasOwnProperty(_false, obj3);
        } else {
          tmp7Result = null;
        }
      }
      return tmp7Result;
    };
createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, header: obj4, description: { textAlign: "center" } };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: 16,
  padding: 24,
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  elevation: 2,
};
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_9 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp13;
      let tmp14;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(21);
      const tmp5 = useIsInAdultAgeGroupDefault();
      const tmp6 = closure_9();
      const obj2 = useUserLinks;
      const hasMaxConnections = obj2.useHasMaxConnections();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(_modDef2493["T7GyW+"]);
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(_modDef2493.goKE2b);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp8 = stringResult;
        tmp9 = stringResult1;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult = useAgeSpecificText3;
      const ageSpecificText = tmpResult.useAgeSpecificText(tmp8, tmp9);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl5.intl;
        const formatResult = intl3.format(_modDef2493.MXjDSv, {
          articleLink: "https://support.discord.com/hc/articles/14155060633623",
        });
        const intl4 = intl5.intl;
        const formatResult1 = intl4.format(_modDef2493.EMCf6j, {
          articleLink: "https://support.discord.com/hc/articles/14155043715735",
        });
        cResult[2] = formatResult;
        cResult[3] = formatResult1;
        tmp14 = formatResult1;
        tmp13 = formatResult;
      } else {
        tmp13 = cResult[2];
        tmp14 = cResult[3];
      }
      const tmpResult2 = useAgeSpecificText3;
      const ageSpecificText1 = tmpResult2.useAgeSpecificText(tmp13, tmp14);
      const tmp4Result = importDefault(tmp5 ? 14691 : 14692);
      if (cResult[4] === tmp6.art) {
        let tmp19;
        if (cResult[5] === tmp4Result) {
          tmp19 = cResult[6];
        }
        if (cResult[7] === ageSpecificText) {
          let tmp21;
          if (cResult[8] === tmp6.header) {
            tmp21 = cResult[9];
          }
          if (cResult[10] === ageSpecificText1) {
            let tmp24;
            let tmp27;
            if (cResult[11] === tmp6.description) {
              tmp24 = cResult[12];
            }
            if (cResult[13] !== hasMaxConnections) {
              let tmp28 = null;
              if (!hasMaxConnections) {
                tmp28 = hasOwnProperty(closure_8, {});
              }
              cResult[13] = hasMaxConnections;
              cResult[14] = tmp28;
              tmp27 = tmp28;
            } else {
              tmp27 = cResult[14];
            }
            if (cResult[15] === tmp6.container) {
              if (cResult[16] === tmp19) {
                if (cResult[17] === tmp21) {
                  if (cResult[18] === tmp24) {
                    let tmp31;
                    if (cResult[19] === tmp27) {
                      tmp31 = cResult[20];
                    }
                    return tmp31;
                  }
                }
              }
            }
            const obj3 = { style: tmp6.container, children: items };
            items = [tmp19, tmp21, tmp24, tmp27];
            const tmp34 = metroRequire(_false, obj3);
            cResult[15] = tmp6.container;
            cResult[16] = tmp19;
            cResult[17] = tmp21;
            cResult[18] = tmp24;
            cResult[19] = tmp27;
            cResult[20] = tmp34;
            tmp31 = tmp34;
          }
          const obj4 = {
            style: tmp6.description,
            variant: "text-sm/medium",
            color: "text-muted",
            children: ageSpecificText1,
          };
          const tmp26 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[10] = ageSpecificText1;
          cResult[11] = tmp6.description;
          cResult[12] = tmp26;
          tmp24 = tmp26;
        }
        const obj5 = { style: tmp6.header, variant: "heading-lg/semibold", children: ageSpecificText };
        const tmp23 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[7] = ageSpecificText;
        cResult[8] = tmp6.header;
        cResult[9] = tmp23;
        tmp21 = tmp23;
      }
      const obj6 = { source: tmp4Result, style: tmp6.art };
      const tmp20 = hasOwnProperty(React3, obj6);
      cResult[4] = tmp6.art;
      cResult[5] = tmp4Result;
      cResult[6] = tmp20;
      tmp19 = tmp20;
    }
  : () => {
      let items;
      const tmp3 = useIsInAdultAgeGroupDefault();
      const tmp4 = closure_9();
      const obj = useUserLinks;
      const hasMaxConnections = obj.useHasMaxConnections();
      const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
      useAgeSpecificText3;
      const intl = intl5.intl;
      const stringResult = intl.string(_modDef2493["T7GyW+"]);
      const intl2 = intl5.intl;
      const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2493.goKE2b));
      const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
      useAgeSpecificText3;
      const intl3 = intl5.intl;
      const formatResult = intl3.format(_modDef2493.MXjDSv, {
        articleLink: "https://support.discord.com/hc/articles/14155060633623",
      });
      const intl4 = intl5.intl;
      const obj2 = { style: tmp4.container, children: items };
      const obj3 = { source: importDefault(tmp3 ? 14691 : 14692), style: tmp4.art };
      const ageSpecificText2 = useAgeSpecificText2(
        formatResult,
        intl4.format(_modDef2493.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }),
      );
      items = [hasOwnProperty(React3, obj3), , ,];
      const obj4 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
      items[1] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = {
        style: tmp4.description,
        variant: "text-sm/medium",
        color: "text-muted",
        children: ageSpecificText2,
      };
      items[2] = hasOwnProperty(Text_Text.Text, obj5);
      let tmp15Result = null;
      if (!hasMaxConnections) {
        tmp15Result = hasOwnProperty(closure_8, {});
      }
      items[3] = tmp15Result;
      return metroRequire(_false, obj2);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default tmp6;
