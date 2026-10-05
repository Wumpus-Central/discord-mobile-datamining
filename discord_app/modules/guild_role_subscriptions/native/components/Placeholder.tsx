// discord_app/modules/guild_role_subscriptions/native/components/Placeholder.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ spinner: { marginTop: 12 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_4();
      if (cResult[0] !== tmp2.spinner) {
        const tmp6 = <ActivityIndicator style={tmp2.spinner} />;
        cResult[0] = tmp2.spinner;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => <ActivityIndicator style={closure_4().spinner} />;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default tmp3;
