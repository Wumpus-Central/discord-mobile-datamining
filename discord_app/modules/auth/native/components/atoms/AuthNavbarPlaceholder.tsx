// discord_app/modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import HeaderBackImage from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { navBar: null };
createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = callback();
  return jsx(HeaderBackImage.FauxHeader, { style: callback().navBar, children: null });
};