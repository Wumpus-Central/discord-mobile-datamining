// discord_app/modules/launchpad/native/shared/renderChannelWrapper.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { getScaledChannelRowHeight } from "getScaledChannelRowHeight.tsx";

let closure_4 = require("getLayoutStyle")();
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(arg0, fontScale) {
  let obj = { style: null, children: null };
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, , ];
  obj = { minHeight: getScaledChannelRowHeight(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical };
  items[1] = obj;
  items[2] = closure_4.container.padding;
  obj[0] = items;
  obj[1] = arg0;
  return <View minHeight={getScaledChannelRowHeight(arg1.fontScale) - 2 * closure_4.layout.margin.marginVertical} />;
};