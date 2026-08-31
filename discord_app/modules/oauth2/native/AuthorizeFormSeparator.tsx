// === Module 9322: AuthorizeFormSeparator ===

// Module 9322 (AuthorizeFormSeparator)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { separator: null };
obj = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={callback().separator} />;
};