// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import react_native2 from "../MainTabsV2Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let size;
const View = react_native.View;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const jsx = Fragment.jsx;
let obj = { buttonWrapper: size, buttonWrapperModal: { marginLeft: -8 } };
size = {
  flexShrink: 0,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
  height: MIN_HEADER_HEIGHT,
  width: MIN_HEADER_HEIGHT,
};
let closure_4 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let isModal;
      const obj = react;
      const cResult = obj.c(3);
      ({ children, isModal } = arg0);
      const tmp2 = undefined !== isModal && isModal;
      const tmp3 = closure_4();
      const tmp4 = tmp2 ? tmp3.buttonWrapperModal : tmp3.buttonWrapper;
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = (
        <View collapsable={false} style={tmp4} importantForAccessibility="yes">
          {children}
        </View>
      );
      cResult[0] = children;
      cResult[1] = tmp4;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (isModal) => {
      let flag = isModal.isModal;
      const children = isModal.children;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_4();
      return (
        <View
          collapsable={false}
          style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper}
          importantForAccessibility="yes"
        >
          {children}
        </View>
      );
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx",
);

export default tmp2;
