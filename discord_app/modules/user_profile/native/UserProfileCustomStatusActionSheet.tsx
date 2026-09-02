// discord_app/modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getNicknameDefault from "../../../utils/NicknameUtils.tsx";
import _modDef8114 from "../../profile_customization/native/HeaderAvatar.tsx";
import useCustomStatusActivityForUserDefault from "../../custom_status/utils/useCustomStatusActivityForUser.tsx";
import EmojiImageDefault from "UserProfileCustomStatusBubble.tsx";
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/UserStore.tsx";
import ARBITRARY_LARGE_OFFSET from "Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = ARBITRARY_LARGE_OFFSET);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { statusPreviewContainer: null, avatarContainer: null, avatarStatus: null, customStatusBubble: null };
createCacheKey = {
  flexDirection: "row",
  columnGap: AVATAR_CUSTOM_STATUS_GAP,
  marginHorizontal: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  height: AVATAR_CONTAINER_SIZE,
  width: AVATAR_CONTAINER_SIZE,
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj2 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
const result = require("set").fileFinishedImporting(
  "modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx",
);

export default function UserProfileCustomStatusActionSheet(user) {
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = callback3();
  let obj = user(586);
  const items = [closure_4];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const currentUser = closure_1_4.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id === user.id;
    },
    items1,
  );
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
  const items2 = [
    callback(View, obj2),
    callback(EmojiImageDefault, {
      customStatusActivity: tmp6,
      hasCustomProfileTheme: false,
      showFullStatus: true,
      style: tmp.customStatusBubble,
      previewEmoji,
      previewText,
    }),
  ];
  obj1[1] = items2;
  obj[1] = callback2(View, obj1);
  return callback(UserProfileStackedActionSheetDefault, obj);
}
