// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require("../../../../screen/native/useFontScale.tsx") /* getFontScale */.useFontScale();
  const obj = require("../../../../screen/native/useFontScale.tsx") /* getFontScale */;
  const token = require("../../../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require("../../../../../design/tokens/native/useToken.tsx") /* map */;
  const token1 = require("../../../../../design/tokens/native/useToken.tsx") /* map */.useToken(require("../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};