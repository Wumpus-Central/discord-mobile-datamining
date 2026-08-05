import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";
import { getFontScale } from "../../../../screen/native/useFontScale.tsx";
// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = getFontScale /* getFontScale */.useFontScale();
  const obj = getFontScale /* getFontScale */;
  const token = map /* map */.useToken(Themes.modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = map /* map */;
  const token1 = map /* map */.useToken(Themes.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};