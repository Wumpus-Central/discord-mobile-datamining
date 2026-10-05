// discord_app/modules/user_settings/premium/native/Header.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13274_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/13275_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let style;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "column", alignItems: "center" },
  headerText: { marginTop: 16, marginBottom: 24 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let items;
      const obj = react2;
      const cResult = obj.c(13);
      style = style.style;
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        let tmp7;
        let tmp9;
        let tmp5Result;
        let tmp12;
        let tmp15;
        let tmp17;
        if (cResult[1] === tmp4.container) {
          tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t.lpNrPu);
          cResult[3] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        const tmpResult = shared;
        if (tmpResult.isThemeDark(tmp6)) {
          tmp5Result = AssetRegistryDefault;
        } else {
          tmp5Result = AssetRegistryDefault2;
        }
        if (cResult[4] !== tmp5Result) {
          const obj2 = { accessible: true, accessibilityLabel: tmp9, accessibilityRole: "header", source: tmp5Result };
          const tmp14 = React3(FastImageDefault, obj2);
          cResult[4] = tmp5Result;
          cResult[5] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        const headerText = tmp4.headerText;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.SD5MJW);
          cResult[6] = stringResult1;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== tmp4.headerText) {
          const obj3 = {
            style: headerText,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: tmp15,
          };
          const tmp19 = React3(Text_Text.Text, obj3);
          cResult[7] = tmp4.headerText;
          cResult[8] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp12) {
            let tmp20;
            if (cResult[11] === tmp17) {
              tmp20 = cResult[12];
            }
            return tmp20;
          }
        }
        const obj4 = { style: tmp7, children: items };
        items = [tmp12, tmp17];
        const tmp23 = hasOwnProperty(View, obj4);
        cResult[9] = tmp7;
        cResult[10] = tmp12;
        cResult[11] = tmp17;
        cResult[12] = tmp23;
        tmp20 = tmp23;
      }
      const items1 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items1;
      tmp7 = items1;
    }
  : (style) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let tmp2Result;
      style = style.style;
      const tmp = closure_6();
      const obj = { style: items, children: items1 };
      items = [tmp.container, style];
      const obj2 = {
        accessible: true,
        accessibilityLabel: intl.string(intl3.t.lpNrPu),
        accessibilityRole: "header",
        source: tmp2Result,
      };
      const tmp4 = useThemeDefault();
      const tmp8 = FastImageDefault;
      intl = intl3.intl;
      const obj3 = shared;
      if (obj3.isThemeDark(tmp4)) {
        tmp2Result = AssetRegistryDefault;
      } else {
        tmp2Result = AssetRegistryDefault2;
      }
      items1 = [React3(tmp8, obj2)];
      const obj4 = {
        style: tmp.headerText,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: intl2.string(intl3.t.SD5MJW),
      };
      const Text = Text_Text.Text;
      intl2 = intl3.intl;
      items1[1] = React3(Text, obj4);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default tmp4;
