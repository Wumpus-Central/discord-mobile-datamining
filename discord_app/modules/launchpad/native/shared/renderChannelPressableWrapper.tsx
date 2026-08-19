// === Module 16197: items ===

// Module 16197 (items)
import noopAll from "noop" /* 19 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16196 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const items = [getLayoutStyleDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = require("obj132").fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{children}</View>;
};