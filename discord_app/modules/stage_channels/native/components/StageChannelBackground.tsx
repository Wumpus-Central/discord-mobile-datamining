// discord_app/modules/stage_channels/native/components/StageChannelBackground.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.container) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <View style={tmp2.container}>{children}</View>;
      cResult[0] = children;
      cResult[1] = tmp2.container;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => <View style={closure_4().container}>{children.children}</View>;
