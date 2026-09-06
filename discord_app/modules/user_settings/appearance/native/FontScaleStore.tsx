// discord_app/modules/user_settings/appearance/native/FontScaleStore.tsx
import NativeFontModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeFontModule.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import identity from "../../../../../_runtime/metro/01244__.js";
import size from "../../../../../_runtime/metro/00002__.js";

if (PlatformUtils.isAndroid()) {
  let customFontScale = NativeFontModuleDefault.getCustomFontScale();
  const importDefaultResult = NativeFontModuleDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const DEFAULT_FONT_SCALE_STORE_STATE = {
  persistedFontScale: customFontScale.fontScale,
  persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled,
  fontScale: customFontScale.fontScale,
  isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled,
};
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export { DEFAULT_FONT_SCALE_STORE_STATE };
export const useFontScaleStore = withEqualityFn;
