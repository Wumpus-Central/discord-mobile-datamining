// === Module 9292: validateHandle ===

// Module 9292 (validateHandle)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/connections/FederatedSocialUtils.tsx");

export const validateHandle = function validateHandle(first, platformType) {
  if (platformType === PlatformTypes.MASTODON) {
    const isMatch = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(first);
    const obj = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
  }
  return /^.+\.[^.@]{2,}$/.test(first);
};
export const getExampleHandle = function getExampleHandle(platformType) {
  let str = "@example@mastodon.social";
  if (platformType !== PlatformTypes.MASTODON) {
    let str2 = "clyde@example.com";
    if (platformType === PlatformTypes.BLUESKY) {
      str2 = "example.bsky.social";
    }
    str = str2;
  }
  return str;
};