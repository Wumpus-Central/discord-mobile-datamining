// discord_app/modules/mfa/native/components/KeyImage.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/assets/native.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { container: null };
obj = { marginBottom: nativeDefault.space.PX_8 };
obj.container = obj;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={closure_4().container}>{jsx(native.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};
