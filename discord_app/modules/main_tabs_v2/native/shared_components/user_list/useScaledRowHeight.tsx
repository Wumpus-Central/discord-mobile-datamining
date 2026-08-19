// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import getFontScale from "../../../../screen/native/useFontScale.tsx";

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