// discord_app/modules/channel_list_v2/native/components/Divider.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles(() => {
  const obj = {
    divider: {
      height: 1,
      backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
      marginTop: 8,
      marginBottom: 8,
      marginHorizontal: 16,
    },
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Divider() {
      const cResult = c.c(2);
      const tmp2 = closure_5();
      if (cResult[0] !== tmp2.divider) {
        const obj2 = { style: tmp2.divider };
        const tmp6 = <View style={tmp2.divider} />;
        cResult[0] = tmp2.divider;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function Divider() {
      return <View style={closure_5().divider} />;
    };
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
