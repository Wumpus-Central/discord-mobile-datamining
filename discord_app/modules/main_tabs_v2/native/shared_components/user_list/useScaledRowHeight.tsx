// === Module 8633: useScaledRowHeight ===

// Module 8633 (useScaledRowHeight)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import getFontScale from "getFontScale" /* 4751 */;

let result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = getFontScale.useFontScale();
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = getFontScale;
  const fontScale = obj.useFontScale();
  const token = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = map.useToken(ThemesDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};