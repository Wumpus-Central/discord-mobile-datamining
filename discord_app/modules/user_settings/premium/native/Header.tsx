// discord_app/modules/user_settings/premium/native/Header.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef13684 from "../../../../../_runtime/metro/13684__.js";
import _modDef13685 from "../../../../../_runtime/metro/13685__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "column", alignItems: "center" },
  headerText: { marginTop: 16, marginBottom: 24 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Header(style) {
      const cResult = c.c(13);
      style = style.style;
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp7 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.lpNrPu);
          cResult[3] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (tmpResult.isThemeDark(tmp6)) {
          let tmp5Result = _modDef13684;
        } else {
          tmp5Result = _modDef13685;
        }
        if (cResult[4] !== tmp5Result) {
          const obj2 = { accessible: true, accessibilityLabel: tmp9, accessibilityRole: "header", source: tmp5Result };
          const tmp14 = React4(FastImageDefault, obj2);
          cResult[4] = tmp5Result;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.SD5MJW);
          cResult[6] = stringResult1;
          let tmp15 = stringResult1;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== tmp4.headerText) {
          const obj3 = {
            style: tmp4.headerText,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: tmp15,
          };
          const tmp19 = React4(Text_Text.Text, obj3);
          cResult[7] = tmp4.headerText;
          cResult[8] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp12) {
            if (cResult[11] === tmp17) {
              let tmp20 = cResult[12];
            }
            return tmp20;
          }
        }
        const obj4 = { style: tmp7, children: null };
        const items = [tmp12, tmp17];
        obj4.children = items;
        const tmp23 = hasOwnProperty(View, obj4);
        cResult[9] = tmp7;
        cResult[10] = tmp12;
        cResult[11] = tmp17;
        cResult[12] = tmp23;
        tmp20 = tmp23;
        tmpResult = shared;
      }
      const items1 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items1;
      tmp7 = items1;
    }
  : function Header(style) {
      const tmp = closure_6();
      const obj = { style: null, children: null };
      const items = [tmp.container, style.style];
      obj.style = items;
      const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
      const tmp4 = useThemeDefault();
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.lpNrPu);
      const tmp8 = FastImageDefault;
      if (obj3.isThemeDark(tmp4)) {
        let tmp2Result = _modDef13684;
      } else {
        tmp2Result = _modDef13685;
      }
      obj2.source = tmp2Result;
      const items1 = [React4(tmp8, obj2)];
      const obj4 = {
        style: tmp.headerText,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.SD5MJW);
      items1[1] = React4(Text_Text.Text, obj4);
      obj.children = items1;
      return hasOwnProperty(View, obj);
    };
