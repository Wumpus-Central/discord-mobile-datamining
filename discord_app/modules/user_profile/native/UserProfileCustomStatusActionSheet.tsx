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
const Constants = fn(6898);
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = Constants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
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
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj5 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileCustomStatusActionSheet(user) {
      const cResult = user(576).c(26);
      user = user.user;
      ({ previewEmoji, previewText } = user);
      ({ guildId, channelId } = user);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function u() {
          const currentUser = UserStore.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          return id === user.id;
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== user) {
        const items1 = [user];
        cResult[3] = user;
        cResult[4] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[4];
      }
      const obj = user(576);
      const stateFromStores = user(504).useStateFromStores(first, tmp7, tmp8);
      const tmp11 = useCustomStatusActivityForUserDefault(user.id);
      const tmpResult = user(504);
      const name = NicknameUtilsDefault.useName(guildId, channelId, user);
      if (cResult[5] === name) {
        if (cResult[6] === stateFromStores) {
          if (cResult[8] === tmp4.avatarStatus) {
            if (cResult[9] === user) {
              let tmp15 = cResult[10];
            }
            if (cResult[11] === tmp4.avatarContainer) {
              if (cResult[12] === tmp15) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] === tmp11) {
                if (cResult[15] === previewEmoji) {
                  if (cResult[16] === previewText) {
                    if (cResult[17] === tmp4.customStatusBubble) {
                      let tmp22 = cResult[18];
                    }
                    if (cResult[19] === tmp4.statusPreviewContainer) {
                      if (cResult[20] === tmp18) {
                        if (cResult[21] === tmp22) {
                          let tmp25 = cResult[22];
                        }
                        if (cResult[23] === tmp25) {
                          if (cResult[24] === tmp13) {
                            let tmp29 = cResult[25];
                          }
                          return tmp29;
                        }
                        const obj2 = { title: tmp13, children: tmp25 };
                        const tmp31 = closure_5(UserProfileStackedActionSheetDefault, obj2);
                        cResult[23] = tmp25;
                        cResult[24] = tmp13;
                        cResult[25] = tmp31;
                        tmp29 = tmp31;
                      }
                    }
                    const obj4 = { style: tmp4.statusPreviewContainer, children: null };
                    const items2 = [tmp18, tmp22];
                    obj4.children = items2;
                    const tmp28 = closure_6(View, obj4);
                    cResult[19] = tmp4.statusPreviewContainer;
                    cResult[20] = tmp18;
                    cResult[21] = tmp22;
                    cResult[22] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
              const obj5 = {
                customStatusActivity: tmp11,
                hasCustomProfileTheme: false,
                showFullStatus: true,
                style: tmp4.customStatusBubble,
                previewEmoji,
                previewText,
              };
              const tmp24 = closure_5(UserProfileCustomStatusBubbleDefault, obj5);
              cResult[14] = tmp11;
              cResult[15] = previewEmoji;
              cResult[16] = previewText;
              cResult[17] = tmp4.customStatusBubble;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            const obj6 = { style: tmp4.avatarContainer, children: tmp15 };
            const tmp21 = closure_5(View, obj6);
            cResult[11] = tmp4.avatarContainer;
            cResult[12] = tmp15;
            cResult[13] = tmp21;
            tmp18 = tmp21;
          }
          const obj7 = { user, statusStyle: tmp4.avatarStatus };
          const tmp17 = closure_5(HeaderAvatarDefault, obj7);
          cResult[8] = tmp4.avatarStatus;
          cResult[9] = user;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        }
      }
      const intl = tmp(1126).intl;
      if (stateFromStores) {
        let stringResult = intl.string(tmp(1126).t.AHoLf4);
      } else {
        const obj8 = { username: name };
        stringResult = intl.formatToPlainString(tmp(1126).t["pP5Aa+"], obj8);
      }
      cResult[5] = name;
      cResult[6] = stateFromStores;
      cResult[7] = stringResult;
    }
  : function UserProfileCustomStatusActionSheet(user) {
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
      const intl = user(1126).intl;
      if (stateFromStores) {
        let stringResult = intl.string(tmp2(1126).t.AHoLf4);
      } else {
        const obj3 = { username: name };
        stringResult = intl.formatToPlainString(tmp2(1126).t["pP5Aa+"], obj3);
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
    };
