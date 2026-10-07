// discord_app/design/void/Form/native/FormHint.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  formHintText: { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED },
  redesignHorizontalPadding: { paddingHorizontal: 12 },
  horizonatalPadding: { paddingHorizontal: 16 },
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ inset, style, children } = arg0);
      const tmp5 = closure_4();
      let redesignHorizontalPadding = !tmp4;
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        if (!tmp4) {
          redesignHorizontalPadding = tmp5.redesignHorizontalPadding;
        }
        if (cResult[0] === style) {
          if (cResult[1] === redesignHorizontalPadding) {
            let tmp10 = cResult[2];
          }
          if (cResult[3] === children) {
            if (cResult[4] === tmp10) {
              let tmp11 = cResult[5];
            }
            return tmp11;
          }
          const obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp10, children };
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
        if (!tmp4) {
          horizonatalPadding = tmp5.horizonatalPadding;
        }
        if (cResult[6] === style) {
          if (cResult[7] === tmp5.formHintText) {
            if (cResult[8] === horizonatalPadding) {
              let tmp6 = cResult[9];
            }
            if (cResult[10] === children) {
              if (cResult[11] === tmp6) {
                let tmp7 = cResult[12];
              }
              return tmp7;
            }
            const obj3 = { style: tmp6, children };
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
      let flag = inset.inset;
      if (flag === undefined) {
        flag = false;
      }
      ({ style, children } = inset);
      const tmp = closure_4();
      if (noop.useContext(RedesignCompat.RedesignCompatContext)) {
        let redesignHorizontalPadding = !flag;
        if (!flag) {
          redesignHorizontalPadding = tmp.redesignHorizontalPadding;
        }
        const obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
        const items = [redesignHorizontalPadding, style];
        obj2.style = items;
        obj2.children = children;
        let tmp4Result = jsx(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          style: null,
          children: null,
        });
      } else {
        const items1 = [tmp.formHintText, ,];
        let horizonatalPadding = !flag;
        if (!flag) {
          horizonatalPadding = tmp.horizonatalPadding;
        }
        const obj = { style: null, children: null };
        items1[1] = horizonatalPadding;
        items1[2] = style;
        obj.style = items1;
        obj.children = children;
        tmp4Result = jsx(native.LegacyText, { style: null, children: null });
      }
      return tmp4Result;
    };
