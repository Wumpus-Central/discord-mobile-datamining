// discord_app/modules/connections/FederatedSocialUtils.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/connections/FederatedSocialUtils.tsx");

export const validateHandle = function validateHandle(arg0, platformType) {
  if (platformType === PlatformTypes.MASTODON) {
    const obj = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
    const isMatch = obj.test(arg0);
  }
  const obj2 = /^.+\.[^.@]{2,}$/;
  return obj2.test(arg0);
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
