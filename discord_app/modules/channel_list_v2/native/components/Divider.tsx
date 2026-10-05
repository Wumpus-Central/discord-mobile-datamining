// discord_app/modules/channel_list_v2/native/components/Divider.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
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
  ({
    height: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_5();
      if (cResult[0] !== tmp2.divider) {
        const tmp6 = <View style={tmp2.divider} />;
        cResult[0] = tmp2.divider;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => <View style={closure_5().divider} />;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default tmp3;
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
