// discord_app/modules/launchpad/native/shared/renderChannelPressableWrapper.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{children}</View>;
}
