// === Module 10852: UserProfileCustomStatusActionSheet ===

// Module 10852 (UserProfileCustomStatusActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7940 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10840 */;
import useCustomStatusActivityForUserDefault from "useCustomStatusActivityForUser" /* 10853 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 10854 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 6714 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

let AVATAR_CONTAINER_SIZE;
let AVATAR_CUSTOM_STATUS_GAP;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AVATAR_CONTAINER_SIZE, AVATAR_CUSTOM_STATUS_GAP } = Constants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { statusPreviewContainer: obj2, avatarContainer: { height: AVATAR_CONTAINER_SIZE, width: AVATAR_CONTAINER_SIZE, alignItems: "center", justifyContent: "center" }, avatarStatus: obj3, customStatusBubble: obj4 };
obj2 = { flexDirection: "row", columnGap: AVATAR_CUSTOM_STATUS_GAP, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { marginTop: AVATAR_CONTAINER_SIZE / 2 + 10, flexShrink: 1, flexGrow: 1 };
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let channelId;
  let first;
  let guildId;
  let items2;
  let previewEmoji;
  let previewText;
  let stringResult;
  let tmp7;
  let tmp8;
  const obj = user(576);
  const cResult = obj.c(26);
  user = user.user;
  ({ previewEmoji, previewText } = user);
  ({ guildId, channelId } = user);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id === user.id;
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== user) {
    const items1 = [user];
    cResult[3] = user;
    cResult[4] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult = user(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  const tmp11 = useCustomStatusActivityForUserDefault(user.id);
  const obj3 = NicknameUtilsDefault;
  const name = obj3.useName(guildId, channelId, user);
  if (cResult[5] === name) {
    let tmp13;
    if (cResult[6] === stateFromStores) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp4.avatarStatus) {
      let tmp15;
      if (cResult[9] === user) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp4.avatarContainer) {
        let tmp18;
        if (cResult[12] === tmp15) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp11) {
          if (cResult[15] === previewEmoji) {
            if (cResult[16] === previewText) {
              let tmp22;
              if (cResult[17] === tmp4.customStatusBubble) {
                tmp22 = cResult[18];
              }
              if (cResult[19] === tmp4.statusPreviewContainer) {
                if (cResult[20] === tmp18) {
                  let tmp25;
                  if (cResult[21] === tmp22) {
                    tmp25 = cResult[22];
                  }
                  if (cResult[23] === tmp25) {
                    let tmp29;
                    if (cResult[24] === tmp13) {
                      tmp29 = cResult[25];
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
              const obj4 = { style: tmp4.statusPreviewContainer, children: items2 };
              items2 = [tmp18, tmp22];
              const tmp28 = closure_6(View, obj4);
              cResult[19] = tmp4.statusPreviewContainer;
              cResult[20] = tmp18;
              cResult[21] = tmp22;
              cResult[22] = tmp28;
              tmp25 = tmp28;
            }
          }
        }
        const obj5 = { customStatusActivity: tmp11, hasCustomProfileTheme: false, showFullStatus: true, style: tmp4.customStatusBubble, previewEmoji, previewText };
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
  const intl = tmp(1126).intl;
  if (stateFromStores) {
    stringResult = intl.string(tmp(1126).t.AHoLf4);
  } else {
    const obj8 = { username: name };
    stringResult = intl.formatToPlainString(tmp(1126).t["pP5Aa+"], obj8);
  }
  cResult[5] = name;
  cResult[6] = stateFromStores;
  cResult[7] = stringResult;
  tmp13 = stringResult;
}) : ((user) => {
  let channelId;
  let guildId;
  let items2;
  let obj5;
  let obj7;
  let previewEmoji;
  let previewText;
  let stringResult;
  user = user.user;
  ({ guildId, channelId, previewEmoji, previewText } = user);
  const tmp = closure_7();
  const items = [UserStore];
  const items1 = [user];
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const tmp6 = useCustomStatusActivityForUserDefault(user.id);
  const obj2 = NicknameUtilsDefault;
  const name = obj2.useName(guildId, channelId, user);
  const intl = user(1126).intl;
  if (stateFromStores) {
    stringResult = intl.string(tmp2(1126).t.AHoLf4);
  } else {
    const obj3 = { username: name };
    stringResult = intl.formatToPlainString(tmp2(1126).t["pP5Aa+"], obj3);
  }
  const obj4 = { title: stringResult, children: closure_6(View, obj5) };
  obj5 = { style: tmp.statusPreviewContainer, children: items2 };
  const obj6 = { style: tmp.avatarContainer, children: closure_5(HeaderAvatarDefault, obj7) };
  obj7 = { user, statusStyle: tmp.avatarStatus };
  const tmp5Result = UserProfileStackedActionSheetDefault;
  items2 = [closure_5(View, obj6), ];
  const obj8 = { customStatusActivity: tmp6, hasCustomProfileTheme: false, showFullStatus: true, style: tmp.customStatusBubble, previewEmoji, previewText };
  items2[1] = closure_5(UserProfileCustomStatusBubbleDefault, obj8);
  return closure_5(tmp5Result, obj4);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusActionSheet.tsx");

export default tmp6;