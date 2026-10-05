// discord_app/modules/billing/native/BlockedPaymentsCountryDisplay.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import AssetRegistryDefault from "../../../../_runtime/11095_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11096_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { alignItems: "center" }, header: obj2, image: { marginTop: 38 } };
obj2 = { fontSize: 20, fontWeight: "700", color: nativeDefault.colors.TEXT_SUBTLE, marginBottom: 16 };
let closure_8 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let IHxEJU;
      let container;
      let first;
      let format;
      let header;
      let items;
      let obj4;
      let tmp12;
      let tmp5Result;
      let tmp5Result2;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(11);
      const tmp4 = closure_8();
      ({ container, header } = tmp4);
      const tmp6 = useThemeDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.vwMEHS);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.header) {
        const obj2 = { style: header, children: first };
        const tmp11 = metroRequire(native.LegacyText, obj2);
        cResult[1] = tmp4.header;
        cResult[2] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: format(IHxEJU, obj4) };
        const LegacyText = native.LegacyText;
        const intl2 = intl3.intl;
        format = intl2.format;
        obj4 = { helpdeskArticle: tmp5Result.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
        IHxEJU = intl3.t.IHxEJU;
        tmp5Result = HelpdeskUtilsDefault;
        const tmp15 = metroRequire(LegacyText, obj3);
        cResult[3] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[3];
      }
      const tmpResult = shared;
      if (tmpResult.isThemeDark(tmp6)) {
        tmp5Result2 = AssetRegistryDefault;
      } else {
        tmp5Result2 = AssetRegistryDefault2;
      }
      if (cResult[4] === tmp4.image) {
        let tmp17;
        if (cResult[5] === tmp5Result2) {
          tmp17 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp9) {
            let tmp19;
            if (cResult[9] === tmp17) {
              tmp19 = cResult[10];
            }
            return tmp19;
          }
        }
        const obj5 = { style: container, children: items };
        items = [tmp9, tmp12, tmp17];
        const tmp22 = metroImportDefault(_false, obj5);
        cResult[7] = tmp4.container;
        cResult[8] = tmp9;
        cResult[9] = tmp17;
        cResult[10] = tmp22;
        tmp19 = tmp22;
      }
      const obj6 = { style: tmp4.image, source: tmp5Result2 };
      const tmp18 = metroRequire(React3, obj6);
      cResult[4] = tmp4.image;
      cResult[5] = tmp5Result2;
      cResult[6] = tmp18;
      tmp17 = tmp18;
    }
  : () => {
      let IHxEJU;
      let format;
      let intl;
      let items;
      let obj4;
      let obj5;
      let tmp2Result;
      const tmp = closure_8();
      const obj = { style: tmp.container, children: items };
      const obj2 = { style: tmp.header, children: intl.string(intl3.t.vwMEHS) };
      const tmp4 = useThemeDefault();
      const LegacyText = native.LegacyText;
      intl = intl3.intl;
      items = [metroRequire(LegacyText, obj2), ,];
      const obj3 = { children: format(IHxEJU, obj4) };
      const LegacyText2 = native.LegacyText;
      const intl2 = intl3.intl;
      format = intl2.format;
      obj4 = { helpdeskArticle: obj5.getArticleURL(HelpdeskArticles.BLOCKED_PAYMENTS) };
      IHxEJU = intl3.t.IHxEJU;
      obj5 = HelpdeskUtilsDefault;
      items[1] = metroRequire(LegacyText2, obj3);
      const obj6 = { style: tmp.image, source: tmp2Result };
      const obj7 = shared;
      if (obj7.isThemeDark(tmp4)) {
        tmp2Result = AssetRegistryDefault;
      } else {
        tmp2Result = AssetRegistryDefault2;
      }
      items[2] = metroRequire(React3, obj6);
      return metroImportDefault(_false, obj);
    };
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryDisplay.tsx");

export default tmp5;
