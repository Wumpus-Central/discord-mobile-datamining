// discord_app/modules/billing/native/smoke/BillingFlows.android.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let obj = {
  RunAllFlows: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        const obj = react;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp5 = <View />;
          cResult[0] = tmp5;
          first = tmp5;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => <View />,
};
const result = size.fileFinishedImporting("modules/billing/native/smoke/BillingFlows.android.tsx");

export default obj;
