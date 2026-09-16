// discord_app/modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import HeaderAvatarDefault from "../../profile_customization/native/HeaderAvatar.tsx";
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble.tsx";
import useCustomStatusActivityForUserDefault from "../../custom_status/utils/useCustomStatusActivityForUser.tsx";
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(7318);
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  statusPreviewContainer: {
    flexDirection: "row",
    columnGap: AVATAR_CUSTOM_STATUS_GAP,
    marginHorizontal: nativeDefault.space.PX_16,
  },
  avatarContainer: {
    height: AVATAR_CONTAINER_SIZE,
    width: AVATAR_CONTAINER_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarStatus: null,
  customStatusBubble: null,
};
let obj3 = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: nativeDefault.space.PX_16 };
obj2.avatarStatus = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.customStatusBubble = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default function UserProfileCustomStatusActionSheet(user) {
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [user];
  const stateFromStores = user(504).useStateFromStores(
    items,
    () => {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id === user.id;
    },
    items1,
  );
  const obj = user(504);
  const tmp6 = useCustomStatusActivityForUserDefault(user.id);
  const name = NicknameUtilsDefault.useName(guildId, channelId, user);
  const intl = user(1115).intl;
  if (stateFromStores) {
    let stringResult = intl.string(tmp2(1115).t.AHoLf4);
  } else {
    const obj3 = { username: name };
    stringResult = intl.formatToPlainString(tmp2(1115).t["pP5Aa+"], obj3);
  }
  const obj4 = { title: stringResult, children: null };
  const obj5 = { style: tmp.statusPreviewContainer, children: null };
  const obj6 = { style: tmp.avatarContainer, children: null };
  obj6.children = closure_5(HeaderAvatarDefault, { user, statusStyle: tmp.avatarStatus });
  const items2 = [
    closure_5(View, obj6),
    closure_5(UserProfileCustomStatusBubbleDefault, {
      customStatusActivity: tmp6,
      hasCustomProfileTheme: false,
      showFullStatus: true,
      style: tmp.customStatusBubble,
      previewEmoji,
      previewText,
    }),
  ];
  obj5.children = items2;
  obj4.children = closure_6(View, obj5);
  return closure_5(UserProfileStackedActionSheetDefault, obj4);
}
