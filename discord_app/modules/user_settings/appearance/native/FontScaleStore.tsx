// === Module 14812: FontScaleStore ===

// Module 14812 (FontScaleStore)
import NativeFontModuleDefault from "NativeFontModule" /* 9579 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import identity from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let customFontScale = NativeFontModuleDefault.getCustomFontScale();
  const importDefaultResult = NativeFontModuleDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;