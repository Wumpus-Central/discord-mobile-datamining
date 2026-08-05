// discord_app/modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getNickname } from "../../../utils/NicknameUtils.tsx";
import { useCustomStatusActivityForUser } from "../../custom_status/utils/useCustomStatusActivityForUser.tsx";
import { HeaderAvatar } from "../../profile_customization/native/HeaderAvatar.tsx";
import { EmojiImage } from "UserProfileCustomStatusBubble.tsx";
import { UserProfileStackedActionSheet } from "UserProfileStackedActionSheet.tsx";

let AVATAR_CONTAINER_SIZE;
let AVATAR_CUSTOM_STATUS_GAP;
let c5;
let closure_6;
const require = arg1;
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = ARBITRARY_LARGE_OFFSET);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { statusPreviewContainer: null, avatarContainer: null, avatarStatus: null, customStatusBubble: null };
createCacheKey = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj2 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  let channelId;
  let guildId;
  let previewEmoji;
  let previewText;
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = createCacheKey();
  let obj = user(589);
  const items = [mergeGuildAvatar];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  let obj1 = getNickname;
  const name = obj1.useName(guildId, channelId, user);
  const intl = user(1236).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp2(1236).t.AHoLf4);
  } else {
    obj = { username: null };
    obj[0] = name;
    stringResult = intl.formatToPlainString(tmp2(1236).t["pP5Aa+"], obj);
  }
  obj = { title: stringResult, children: null };
  obj1 = { style: tmp.statusPreviewContainer, children: null };
  const obj2 = { style: tmp.avatarContainer, children: null };
  const tmp6 = useCustomStatusActivityForUser(user.id);
  obj2[1] = callback(HeaderAvatar, { user, statusStyle: tmp.avatarStatus });
  const items2 = [callback(View, obj2), callback(EmojiImage, { customStatusActivity: tmp6, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText })];
  obj1[1] = items2;
  obj[1] = callback2(View, obj1);
  return callback(UserProfileStackedActionSheet, obj);
};