// === Module 18442: DiscordVariants ===

// Module 18442 (DiscordVariants)
import NativeIntentsModuleDefault from "NativeIntentsModule" /* 7896 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 18443 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export function getCurrentVariant() {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
}
export function isVariantInstalled(item) {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  if (item === found) {
    let resolved = Promise.resolve(true);
  } else {
    resolved = Promise.resolve(NativeIntentsModuleDefault.isDiscordVariantInstalled(item));
    const tmpResult = NativeIntentsModuleDefault;
  }
  return resolved;
}
export function launchVariant(arg0) {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(false);
  } else {
    resolved = Promise.resolve(NativeIntentsModuleDefault.launchDiscordVariant(arg0));
    const tmpResult = NativeIntentsModuleDefault;
  }
  return resolved;
}