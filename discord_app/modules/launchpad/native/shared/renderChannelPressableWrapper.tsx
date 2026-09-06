// discord_app/modules/launchpad/native/shared/renderChannelPressableWrapper.tsx
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{children}</View>;
}
