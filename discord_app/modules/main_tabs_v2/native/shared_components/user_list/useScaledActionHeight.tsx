// === Module 10575: useScaledActionHeight ===

// Module 10575 (useScaledActionHeight)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4166 */;
import getFontScale from "getFontScale" /* 4900 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = getFontScale.useFontScale();
  const obj = getFontScale;
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = map;
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};