// === Module 11149: UserProfileCustomStatusActionSheet ===

// Module 11149 (UserProfileCustomStatusActionSheet)
import nativeDefault from "native" /* 576 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 8257 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 11112 */;
import useCustomStatusActivityForUserDefault from "useCustomStatusActivityForUser" /* 11150 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11151 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(7208);
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { statusPreviewContainer: null, avatarContainer: null, avatarStatus: null, customStatusBubble: null };
createStyles = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: nativeDefault.space.PX_16 };
createStyles.statusPreviewContainer = createStyles;
createStyles.avatarContainer = { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" };
createStyles.avatarStatus = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.customStatusBubble = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = closure_7();
  let obj = user(504);
  const items = [UserStore];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  let obj1 = NicknameUtilsDefault;
  const name = obj1.useName(guildId, channelId, user);
  const intl = user(1114).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp2(1114).t.AHoLf4);
  } else {
    obj = { username: name };
    stringResult = intl.formatToPlainString(tmp2(1114).t["pP5Aa+"], obj);
  }
  obj = { title: stringResult, children: null };
  obj1 = { style: tmp.statusPreviewContainer, children: null };
  const obj2 = { style: tmp.avatarContainer, children: null };
  const tmp6 = useCustomStatusActivityForUserDefault(user.id);
  obj2.children = closure_5(HeaderAvatarDefault, { user, statusStyle: tmp.avatarStatus });
  const items2 = [closure_5(View, obj2), closure_5(UserProfileCustomStatusBubbleDefault, { customStatusActivity: tmp6, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText })];
  obj1.children = items2;
  obj.children = closure_6(View, obj1);
  return closure_5(UserProfileStackedActionSheetDefault, obj);
};