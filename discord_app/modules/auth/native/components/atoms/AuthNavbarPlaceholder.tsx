// === Module 9230: AuthNavbarPlaceholder ===

// Module 9230 (AuthNavbarPlaceholder)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { navBar: null };
createCacheKey = { backgroundColor: require("Themes").unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = createCacheKey();
  return jsx(require(5147) /* HeaderBackImage */.FauxHeader, { style: createCacheKey().navBar, children: null });
};