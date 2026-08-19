// discord_app/modules/launchpad/native/shared/renderChannelPressableWrapper.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

noopAll;
const items = [getLayoutStyleDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = require("obj132").fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{children}</View>;
};