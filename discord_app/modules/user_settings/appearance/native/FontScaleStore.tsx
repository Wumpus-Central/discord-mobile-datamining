// === Module 15088: DEFAULT_FONT_SCALE_STORE_STATE ===

// Module 15088 (DEFAULT_FONT_SCALE_STORE_STATE)
import enforcingDefault from "enforcing" /* 9103 */;
import set from "set" /* 1234 */;
import identity from "identity" /* 697 */;

if (set.isAndroid()) {
  let customFontScale = enforcingDefault.getCustomFontScale();
  const importDefaultResult = enforcingDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const obj = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = set.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = obj;
export const useFontScaleStore = withEqualityFn;