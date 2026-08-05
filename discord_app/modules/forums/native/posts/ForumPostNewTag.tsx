// discord_app/modules/forums/native/posts/ForumPostNewTag.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/void/native.tsx";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 1, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, createCacheKey().container];
  return jsx(Button /* Button */.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};