// === Module 16219: getCurrentVariant ===

// Module 16219 (getCurrentVariant)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4658 */;

const result = set.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = _require(16220).DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(arg0) {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = _require(16220).DISCORD_VARIANT_LIST;
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
  const DISCORD_VARIANT_LIST = _require(16220).DISCORD_VARIANT_LIST;
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