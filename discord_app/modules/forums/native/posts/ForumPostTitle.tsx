// discord_app/modules/forums/native/posts/ForumPostTitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformTypes from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";

require = arg1;
noopAll;
createCacheKey = null;
if (PlatformTypes.isIOS()) {
  createCacheKey = { lineHeight: 22 };
}
createCacheKey = { title: null };
PlatformTypes = { marginBottom: 6 };
createCacheKey = Object.assign(createCacheKey);
createCacheKey[0] = PlatformTypes;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = callback();
  return jsx(Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: callback().title, onTextLayout, children: title });
};