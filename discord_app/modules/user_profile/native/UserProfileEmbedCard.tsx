// === Module 11826: UserProfileEmbedCard ===

// Module 11826 (UserProfileEmbedCard)
import useDisplayProfile from "useDisplayProfile" /* 6036 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6681 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8680 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6037 */;

require = fn;
function readUserProfileEmbedCard(code, guild_id, id) {
  const user = UserStore.getUser(code);
  if (null == user) {
    const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
    let tmp5 = !isFetchingProfileResult;
    if (!isFetchingProfileResult) {
      tmp5 = null != UserProfileStore.getUserProfile(code);
    }
    return tmp5 ? closure_6 : closure_5;
  } else {
    const displayProfile = useDisplayProfile.getDisplayProfile(code, guild_id);
    let guildId = guild_id;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    const obj = { type: "card", title: null, username: null, pronouns: null, avatarUri: null };
    obj.title = NicknameUtilsDefault.getName(guildId, id, user);
    obj.username = user.username;
    let str;
    if (displayProfile != null) {
      str = displayProfile.pronouns;
    }
    if (str == null) {
      str = "";
    }
    obj.pronouns = str;
    obj.avatarUri = renderer_EmbedUtils.getAssetUriForEmbed(user.getAvatarSource(guildId));
    return obj;
  }
}
let closure_5 = { type: "loading" };
let closure_6 = { type: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEmbedCard.tsx");

export { readUserProfileEmbedCard };
export function userProfileEmbedCardKey(nextResult, guild_id, id) {
  const tmp = readUserProfileEmbedCard(nextResult, guild_id, id);
  if ("card" !== tmp.type) {
    let type = tmp.type;
  } else {
    items = [, , , , ];
    ({ type: arr[0], title: arr[1], username: arr[2], pronouns: arr[3], avatarUri: arr[4] } = tmp);
    type = items.join("\0");
  }
  return type;
}