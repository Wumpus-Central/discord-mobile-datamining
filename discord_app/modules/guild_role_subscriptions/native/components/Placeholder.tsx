// discord_app/modules/guild_role_subscriptions/native/components/Placeholder.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_4 = createStyles.createStyles({ spinner: { marginTop: 12 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/Placeholder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp2 = closure_4();
      if (cResult[0] !== tmp2.spinner) {
        const obj2 = { style: tmp2.spinner };
        const tmp6 = <ActivityIndicator style={tmp2.spinner} />;
        cResult[0] = tmp2.spinner;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => <ActivityIndicator style={closure_4().spinner} />;
