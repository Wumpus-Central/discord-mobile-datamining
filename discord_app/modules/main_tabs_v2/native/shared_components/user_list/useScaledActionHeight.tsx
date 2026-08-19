// === Module 9640: useScaledActionHeight ===

// Module 9640 (useScaledActionHeight)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import getFontScale from "getFontScale" /* 4751 */;

const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = getFontScale.useFontScale();
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};