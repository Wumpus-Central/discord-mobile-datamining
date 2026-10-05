// discord_app/design/void/Form/native/FormHint.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let obj = {
  formHintText: obj2,
  redesignHorizontalPadding: { paddingHorizontal: 12 },
  horizonatalPadding: { paddingHorizontal: 16 },
};
obj2 = { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let inset;
      let style;
      const obj = react2;
      const cResult = obj.c(13);
      ({ inset, style, children } = arg0);
      const tmp5 = closure_4();
      let redesignHorizontalPadding = !tmp4;
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        if (!(undefined !== inset && inset)) {
          redesignHorizontalPadding = tmp5.redesignHorizontalPadding;
        }
        if (cResult[0] === style) {
          let tmp10;
          if (cResult[1] === redesignHorizontalPadding) {
            tmp10 = cResult[2];
          }
          if (cResult[3] === children) {
            let tmp11;
            if (cResult[4] === tmp10) {
              tmp11 = cResult[5];
            }
            return tmp11;
          }
          const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", style: tmp10, children });
          cResult[3] = children;
          cResult[4] = tmp10;
          cResult[5] = tmp13;
          tmp11 = tmp13;
        }
        const items = [redesignHorizontalPadding, style];
        cResult[0] = style;
        cResult[1] = redesignHorizontalPadding;
        cResult[2] = items;
        tmp10 = items;
      } else {
        let horizonatalPadding = redesignHorizontalPadding;
        if (!(undefined !== inset && inset)) {
          horizonatalPadding = tmp5.horizonatalPadding;
        }
        if (cResult[6] === style) {
          if (cResult[7] === tmp5.formHintText) {
            let tmp6;
            if (cResult[8] === horizonatalPadding) {
              tmp6 = cResult[9];
            }
            if (cResult[10] === children) {
              let tmp7;
              if (cResult[11] === tmp6) {
                tmp7 = cResult[12];
              }
              return tmp7;
            }
            const tmp9 = jsx(native.LegacyText, { style: tmp6, children });
            cResult[10] = children;
            cResult[11] = tmp6;
            cResult[12] = tmp9;
            tmp7 = tmp9;
          }
        }
        const items1 = [tmp5.formHintText, horizonatalPadding, style];
        cResult[6] = style;
        cResult[7] = tmp5.formHintText;
        cResult[8] = horizonatalPadding;
        cResult[9] = items1;
        tmp6 = items1;
      }
    }
  : (inset) => {
      let children;
      let style;
      let tmp4Result;
      let flag = inset.inset;
      if (flag === undefined) {
        flag = false;
      }
      ({ style, children } = inset);
      const tmp = closure_4();
      if (react.useContext(RedesignCompat.RedesignCompatContext)) {
        let redesignHorizontalPadding = !flag;
        const Text = Text_Text.Text;
        if (!flag) {
          redesignHorizontalPadding = tmp.redesignHorizontalPadding;
        }
        const items = [redesignHorizontalPadding, style];
        tmp4Result = (
          <Text variant="text-sm/medium" color="text-muted" style={items}>
            {children}
          </Text>
        );
      } else {
        const items1 = [tmp.formHintText, ,];
        let horizonatalPadding = !flag;
        const LegacyText = native.LegacyText;
        if (!flag) {
          horizonatalPadding = tmp.horizonatalPadding;
        }
        items1[1] = horizonatalPadding;
        items1[2] = style;
        tmp4Result = <LegacyText style={items1}>{children}</LegacyText>;
      }
      return tmp4Result;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default tmp2;
