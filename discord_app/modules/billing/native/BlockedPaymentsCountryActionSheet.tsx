// discord_app/modules/billing/native/BlockedPaymentsCountryActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BlockedPaymentsCountryActionSheet() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) };
        const tmp7 = jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function BlockedPaymentsCountryActionSheet() {
      return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
    };
