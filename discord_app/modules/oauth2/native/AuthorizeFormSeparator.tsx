// discord_app/modules/oauth2/native/AuthorizeFormSeparator.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { separator: null };
obj = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={closure_2().separator} />;
};
