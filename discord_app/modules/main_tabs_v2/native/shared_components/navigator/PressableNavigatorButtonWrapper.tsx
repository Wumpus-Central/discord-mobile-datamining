// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MIN_HEADER_HEIGHT2 from "../MainTabsV2Constants.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const MIN_HEADER_HEIGHT = MIN_HEADER_HEIGHT2.MIN_HEADER_HEIGHT;
const jsx = jsxProd.jsx;
const obj = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj[0] = obj;
obj[1] = { marginLeft: -8 };
let closure_2 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{children.children}</View>;
};