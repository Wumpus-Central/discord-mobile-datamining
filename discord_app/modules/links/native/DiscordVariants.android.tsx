// === Module 16381: DiscordVariants ===

// Module 16381 (DiscordVariants)
import NativeIntentsModuleDefault from "NativeIntentsModule" /* 4694 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 16382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(item) {
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
};
export const launchVariant = function launchVariant(arg0) {
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
};