// discord_app/modules/user_settings/appearance/native/FontScaleStore.tsx
import enforcingDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import set from "../../../../utils/PlatformUtils.tsx";
import identity from "../../../../../_runtime/00697_identity.js";

if (set.isAndroid()) {
  let customFontScale = enforcingDefault.getCustomFontScale();
  const importDefaultResult = enforcingDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const obj = {
  persistedFontScale: customFontScale.fontScale,
  persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled,
  fontScale: customFontScale.fontScale,
  isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled,
};
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = set.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = obj;
export const useFontScaleStore = withEqualityFn;
