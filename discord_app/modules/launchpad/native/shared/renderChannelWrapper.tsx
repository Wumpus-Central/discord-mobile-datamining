// discord_app/modules/launchpad/native/shared/renderChannelWrapper.tsx
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_4 = getLayoutStylesDefault();
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  let obj = { style: null, children: null };
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, ,];
  obj = {
    minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical,
  };
  items[1] = obj;
  items[2] = closure_4.container.padding;
  obj.style = items;
  obj.children = children;
  return (
    <View
      minHeight={getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical}
    />
  );
}
