// === Module 14609: DEFAULT_FONT_SCALE_STORE_STATE ===

// Module 14609 (DEFAULT_FONT_SCALE_STORE_STATE)
import enforcingDefault from "enforcing" /* 9289 */;
import obj132 from "obj132" /* 500 */;
import identity from "identity" /* 700 */;

if (obj132.isAndroid()) {
  let customFontScale = enforcingDefault.getCustomFontScale();
  const importDefaultResult = enforcingDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = obj132.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
export const useFontScaleStore = withEqualityFn;