// === Module 13540: ModalDisclaimer ===

// Module 13540 (ModalDisclaimer)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const result = require("obj132").fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = callback();
  { style: tmp.container, children: jsx(Text.Text, obj) };
  obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children };
  return <View variant="text-xs/medium" color="text-muted" style={tmp.disclaimer}>{children.children}</View>;
};