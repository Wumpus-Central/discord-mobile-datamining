// discord_app/design/void/Form/native/FormCheckmark.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckmarkSmallIcon from "../../../components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RowCheckmark(selected) {
      const cResult = c.c(2);
      selected = selected.selected;
      if (cResult[0] !== selected) {
        let tmp5 = null;
        if (selected) {
          const obj2 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
          tmp5 = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.unsafe_rawColors.BRAND_500 });
        }
        cResult[0] = selected;
        cResult[1] = tmp5;
        let tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function RowCheckmark(selected) {
      let tmp = null;
      if (selected.selected) {
        const obj = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
        tmp = jsx(CheckmarkSmallIcon.CheckmarkSmallIcon, { color: nativeDefault.unsafe_rawColors.BRAND_500 });
      }
      return tmp;
    };
