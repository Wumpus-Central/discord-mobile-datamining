// discord_app/modules/parent_tools/native/FamilyCenterActivityPage.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import FamilyCenterDataConfirmationDefault from "FamilyCenterDataConfirmation.tsx";
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice.tsx";
import FamilyCenterActivityBannerDefault from "FamilyCenterActivityBanner.tsx";
import FamilyCenterFeatureRowDefault from "FamilyCenterFeatureRow.tsx";
import FamilyCenterActivityCardDefault from "FamilyCenterActivityCard.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: { flex: 1 }, dataConfirmation: obj2, container: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let items1;
      let obj5;
      let tmp12;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_8();
      const obj2 = useUserLinks;
      const activeLinkUserIds = obj2.useActiveLinkUserIds();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {});
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === activeLinkUserIds.length) {
        let tmp9;
        if (cResult[2] === tmp4.dataConfirmation) {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.container) {
          let tmp18;
          if (cResult[5] === tmp9) {
            tmp18 = cResult[6];
          }
          if (cResult[7] === tmp4.scrollView) {
            let tmp23;
            if (cResult[8] === tmp18) {
              tmp23 = cResult[9];
            }
            return tmp23;
          }
          const obj3 = { style: tmp4.scrollView, children: tmp18 };
          const tmp26 = hasOwnProperty(React3, obj3);
          cResult[7] = tmp4.scrollView;
          cResult[8] = tmp18;
          cResult[9] = tmp26;
          tmp23 = tmp26;
        }
        const obj4 = { bottom: true, children: metroImportDefault(_false, obj5) };
        obj5 = { style: tmp4.container, children: items };
        items = [first, tmp9];
        const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
        const tmp22 = hasOwnProperty(SafeAreaPaddingView, obj4);
        cResult[4] = tmp4.container;
        cResult[5] = tmp9;
        cResult[6] = tmp22;
        tmp18 = tmp22;
      }
      if (0 === activeLinkUserIds.length) {
        const obj6 = { children: items1 };
        items1 = [
          hasOwnProperty(FamilyCenterActivityBannerDefault, {}),
          hasOwnProperty(FamilyCenterFeatureRowDefault, {}),
        ];
        const obj7 = {
          style: tmp4.dataConfirmation,
          children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}),
        };
        items1[2] = hasOwnProperty(_false, obj7);
        tmp12 = metroImportDefault(metroRequire, obj6);
      } else {
        tmp12 = hasOwnProperty(FamilyCenterActivityCardDefault, {});
      }
      cResult[1] = activeLinkUserIds.length;
      cResult[2] = tmp4.dataConfirmation;
      cResult[3] = tmp12;
      tmp9 = tmp12;
    }
  : () => {
      let SafeAreaPaddingView;
      let items;
      let items1;
      let obj6;
      let tmp3Result;
      const tmp = closure_8();
      const obj2 = { style: tmp.scrollView, children: hasOwnProperty(SafeAreaPaddingView, obj6) };
      const obj = useUserLinks;
      const activeLinkUserIds = obj.useActiveLinkUserIds();
      const obj3 = { style: tmp.container, children: items };
      SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      items = [hasOwnProperty(FamilyCenterParentalConsentNoticeDefault, {})];
      if (0 === activeLinkUserIds.length) {
        const obj4 = { children: items1 };
        items1 = [
          hasOwnProperty(FamilyCenterActivityBannerDefault, {}),
          hasOwnProperty(FamilyCenterFeatureRowDefault, {}),
        ];
        const obj5 = { style: tmp.dataConfirmation, children: hasOwnProperty(FamilyCenterDataConfirmationDefault, {}) };
        items1[2] = hasOwnProperty(_false, obj5);
        tmp3Result = metroImportDefault(metroRequire, obj4);
      } else {
        tmp3Result = hasOwnProperty(FamilyCenterActivityCardDefault, {});
      }
      items[1] = tmp3Result;
      obj6 = { bottom: true, children: metroImportDefault(_false, obj3) };
      return hasOwnProperty(React3, obj2);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPage.tsx");

export default tmp6;
