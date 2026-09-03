// discord_app/modules/links/native/DiscordVariants.android.tsx
import set from "../../../../_runtime/00002_set.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeIntentsModule.tsx";

const result = set.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = require("DiscordVariantTypes.tsx").DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(arg0) {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = require("DiscordVariantTypes.tsx").DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(true);
  } else {
    resolved = Promise.resolve(enforcingDefault.isDiscordVariantInstalled(arg0));
    const tmpResult = enforcingDefault;
  }
  return resolved;
};
export const launchVariant = function launchVariant(arg0) {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = require("DiscordVariantTypes.tsx").DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(false);
  } else {
    resolved = Promise.resolve(enforcingDefault.launchDiscordVariant(arg0));
    const tmpResult = enforcingDefault;
  }
  return resolved;
};
