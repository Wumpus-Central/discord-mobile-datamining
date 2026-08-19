// discord_app/modules/user_settings/appearance/native/FontScaleStore.tsx
import enforcingDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import obj132 from "../../../../utils/PlatformUtils.tsx";
import identity from "../../../../../_runtime/00700_identity.js";

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