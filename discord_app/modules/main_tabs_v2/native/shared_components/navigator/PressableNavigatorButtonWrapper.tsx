// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MainTabsV2Constants from "../MainTabsV2Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx",
);

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_2();
  return (
    <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">
      {arg0.children}
    </View>
  );
}
