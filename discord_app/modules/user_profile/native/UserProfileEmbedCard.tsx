// === Module 11981: UserProfileEmbedCard ===

// Module 11981 (UserProfileEmbedCard)
import UserSettings from "UserSettings" /* 4868 */;
import useDisplayProfile from "useDisplayProfile" /* 6162 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6807 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8822 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;

require = fn;
function readUserProfileEmbedCard(code, guild_id, id) {
  const user = UserStore.getUser(code);
  if (null == user) {
    const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
    let tmp11 = !isFetchingProfileResult;
    if (!isFetchingProfileResult) {
      tmp11 = null != UserProfileStore.getUserProfile(code);
    }
    return tmp11 ? closure_7 : closure_6;
  } else {
    const displayProfile = useDisplayProfile.getDisplayProfile(code, guild_id);
    let guildId = guild_id;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    const name = NicknameUtilsDefault.getName(guildId, id, user);
    const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(user.getAvatarSource(guildId));
    const isBlockedResult = RelationshipStore.isBlocked(code);
    const tmp12Result = renderer_EmbedUtils;
    if (isBlockedResult) {
      if (!isIgnoredResult) {
        let str = "ignore";
        if (isBlockedResult) {
          str = "block";
        }
        let tmp8 = str;
      } else {
        const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
        tmp8 = null;
      }
    } else {
      tmp8 = null;
    }
    if (null != tmp8) {
      const obj = { type: "restricted", speedBumpType: tmp8, displayName: name, avatarUri: assetUriForEmbed };
      let obj3 = obj;
    } else {
      obj3 = { type: "card", title: name, username: user.username, pronouns: null, avatarUri: null, isPrivate: null };
      let str2;
      if (displayProfile != null) {
        str2 = displayProfile.pronouns;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj3.pronouns = str2;
      obj3.avatarUri = assetUriForEmbed;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      obj3.isPrivate = true === _private;
    }
    return obj3;
  }
}
let closure_6 = { type: "loading" };
let closure_7 = { type: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedCard.tsx");

export { readUserProfileEmbedCard };
export function userProfileEmbedCardKey(nextResult, guild_id, id) {
  const tmp = readUserProfileEmbedCard(nextResult, guild_id, id);
  if ("restricted" === tmp.type) {
    items = [, , , ];
    ({ type: arr2[0], speedBumpType: arr2[1], displayName: arr2[2], avatarUri: arr2[3] } = tmp);
    let type = items.join("\0");
  } else if ("card" !== tmp.type) {
    type = tmp.type;
  } else {
    const items1 = [, , , , , ];
    ({ type: arr[0], title: arr[1], username: arr[2], pronouns: arr[3], avatarUri: arr[4] } = tmp);
    const _String = String;
    items1[5] = String(tmp.isPrivate);
    type = items1.join("\0");
  }
  return type;
}