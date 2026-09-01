// discord_app/modules/launchpad/native/shared/renderChannelWrapper.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
let closure_4 = getLayoutStyleDefault();
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(arg0, fontScale) {
  let obj = { style: null, children: null };
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, ,];
  obj = {
    minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical,
  };
  items[1] = obj;
  items[2] = closure_4.container.padding;
  obj[0] = items;
  obj[1] = arg0;
  return (
    <View minHeight={getScaledChannelRowHeightDefault(arg1.fontScale) - 2 * closure_4.layout.margin.marginVertical} />
  );
}
