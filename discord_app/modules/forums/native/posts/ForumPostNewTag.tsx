// === Module 11318: ForumPostNewTag ===

// Module 11318 (ForumPostNewTag)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 1, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, createCacheKey().container];
  return jsx(require(1297) /* Button */.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};