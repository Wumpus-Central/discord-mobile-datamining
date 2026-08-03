// === Module 9005: useScaledActionHeight ===

// Module 9005 (useScaledActionHeight)
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4672) /* getFontScale */.useFontScale();
  const obj = require(4672) /* getFontScale */;
  const token = require(3959) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3959) /* map */;
  const token1 = require(3959) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};