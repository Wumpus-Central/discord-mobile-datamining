// discord_app/modules/billing/native/smoke/BillingFlows.android.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/billing/native/smoke/BillingFlows.android.tsx");

export default {
  RunAllFlows: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp5 = <View />;
          cResult[0] = tmp5;
          let first = tmp5;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => <View />,
};
