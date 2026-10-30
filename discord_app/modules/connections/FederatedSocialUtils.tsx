// === Module 14609: FederatedSocialUtils ===

// Module 14609 (FederatedSocialUtils)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/FederatedSocialUtils.tsx");

export function validateHandle(arg0, platformType) {
  if (platformType === PlatformTypes.MASTODON) {
    const isMatch = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(arg0);
    const obj = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
  }
  return /^.+\.[^.@]{2,}$/.test(arg0);
}
export function getExampleHandle(platformType) {
  let str = "@example@mastodon.social";
  if (platformType !== PlatformTypes.MASTODON) {
    let str2 = "clyde@example.com";
    if (platformType === PlatformTypes.BLUESKY) {
      str2 = "example.bsky.social";
    }
    str = str2;
  }
  return str;
}