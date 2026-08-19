// discord_app/design/components/Modal/native/ModalDisclaimer.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

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