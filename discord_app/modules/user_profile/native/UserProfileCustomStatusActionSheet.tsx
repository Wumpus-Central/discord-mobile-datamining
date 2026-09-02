// === Module 9231: UserProfileCustomStatusActionSheet ===

// Module 9231 (UserProfileCustomStatusActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getNicknameDefault from "getNickname" /* 4673 */;
import _modDef8114 from "module_8114" /* 8114 */;
import useCustomStatusActivityForUserDefault from "useCustomStatusActivityForUser" /* 9068 */;
import EmojiImageDefault from "EmojiImage" /* 9100 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 9232 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 6009 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = ARBITRARY_LARGE_OFFSET);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { statusPreviewContainer: null, avatarContainer: null, avatarStatus: null, customStatusBubble: null };
createCacheKey = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj2 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = callback3();
  let obj = user(586);
  const items = [closure_4];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = closure_1_4.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  obj1 = getNicknameDefault;
  const name = obj1.useName(guildId, channelId, user);
  const intl = user(1233).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp2(1233).t.AHoLf4);
  } else {
    obj = { username: null };
    obj[0] = name;
    stringResult = intl.formatToPlainString(tmp2(1233).t["pP5Aa+"], obj);
  }
  obj = { title: stringResult, children: null };
  obj1 = { style: tmp.statusPreviewContainer, children: null };
  const obj2 = { style: tmp.avatarContainer, children: null };
  const tmp6 = useCustomStatusActivityForUserDefault(user.id);
  obj2[1] = callback(_modDef8114, { user, statusStyle: tmp.avatarStatus });
  const items2 = [callback(View, obj2), callback(EmojiImageDefault, { customStatusActivity: tmp6, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText })];
  obj1[1] = items2;
  obj[1] = callback2(View, obj1);
  return callback(UserProfileStackedActionSheetDefault, obj);
};