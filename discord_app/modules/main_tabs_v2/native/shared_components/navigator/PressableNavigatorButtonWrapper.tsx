// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MainTabsV2Constants from "../MainTabsV2Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const MIN_HEADER_HEIGHT = MainTabsV2Constants.MIN_HEADER_HEIGHT;
const jsx = jsxProd.jsx;
const obj = { buttonWrapper: null, buttonWrapperModal: null };
let size = {
  flexShrink: 0,
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_8,
  height: MIN_HEADER_HEIGHT,
  width: MIN_HEADER_HEIGHT,
};
obj.buttonWrapper = size;
obj.buttonWrapperModal = { marginLeft: -8 };
let closure_4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      ({ children, isModal } = arg0);
      const tmp3 = closure_4();
      const tmp4 = undefined !== isModal && isModal ? tmp3.buttonWrapperModal : tmp3.buttonWrapper;
      if (cResult[0] === children) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
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
  : (children) => {
      let flag = children.isModal;
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
          {children.children}
        </View>
      );
    };
