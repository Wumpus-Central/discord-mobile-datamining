// === Module 11676: ForumPostNewTag ===

// Module 11676 (ForumPostNewTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 1, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, callback().container];
  return jsx(Button.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};