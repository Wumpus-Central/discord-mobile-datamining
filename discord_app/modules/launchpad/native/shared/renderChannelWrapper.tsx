// discord_app/modules/launchpad/native/shared/renderChannelWrapper.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = getLayoutStylesDefault();
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  const items = [
    { flex: 1, flexDirection: "row", alignItems: "center", position: "relative" },
    { minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical },
    closure_4.container.padding,
  ];
  ({ minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical });
  return <View style={items}>{children}</View>;
}
