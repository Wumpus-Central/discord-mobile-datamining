// === Module 11191: ForumPostNewTag ===

// Module 11191 (ForumPostNewTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { paddingVertical: 1, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [, ];
  containerStyle[0] = containerStyle.containerStyle;
  containerStyle[1] = callback().container;
  return jsx(Button.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};