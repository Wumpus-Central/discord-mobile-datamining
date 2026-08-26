// === Module 12790: UserProfileIncomingFriendRequest ===

// Module 12790 (UserProfileIncomingFriendRequest)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: null };
createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[3] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default function UserProfileIncomingFriendRequest(style) {
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let items4;
  let trackUserProfileAction;
  let acceptFriendRequest;
  let cancelFriendRequest;
  let getOrFetchApplication;
  items4 = callback();
  let tmp = items4;
  let userResult = trackUserProfileAction;
  let obj = isGameRelationship(trackUserProfileAction[6]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = isGameRelationship(trackUserProfileAction[8]);
  obj = { userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj1.useFriendRequestActions(obj);
  acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  let obj3 = items4(trackUserProfileAction[9]);
  let name = obj3.useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  let Button = acceptFriendRequest.useCallback(() => {
    acceptFriendRequest();
    let str = "ACCEPT_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "ACCEPT_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items);
  const items1 = [cancelFriendRequest, isGameRelationship, trackUserProfileAction];
  let tmp8 = null;
  callback = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items1);
  let obj4 = isGameRelationship(trackUserProfileAction[10]);
  getOrFetchApplication = obj4.useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (tmp8 == getOrFetchApplication) {
      return null;
    }
  }
  obj = { style: items2, children: null };
  items2 = [items4.container, items4(trackUserProfileAction[5])().card, style.style];
  let Text = tmp4(userResult[11]).Text;
  obj1 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp4(userResult[12]).intl;
  const format = intl.format;
  let intl2 = tmp4(userResult[12]).t;
  if (null != applicationId) {
    isGameRelationship = isGameRelationship ? intl2.syHjLL : intl2.V15uUI;
    let obj2 = { username: null, applicationName: null, applicationIcon: null };
    obj2[0] = name;
    tmp8 = getOrFetchApplication == tmp8;
    name = undefined;
    if (!tmp8) {
      name = getOrFetchApplication.name;
    }
    obj2[1] = name;
    obj2[2] = function applicationIcon() {
      let tmp2 = null;
      if (null != getOrFetchApplication) {
        let obj = { source: null, size: null, style: null };
        obj = { id: null, icon: null };
        ({ id: obj3[0], icon: obj3[1] } = tmp);
        obj[0] = items4(trackUserProfileAction[14]).getApplicationIconSource(obj);
        obj[1] = isGameRelationship(trackUserProfileAction[13]).AvatarSizes.XXSMALL;
        obj[2] = items4.gameIcon;
        tmp2 = getOrFetchApplication(isGameRelationship(trackUserProfileAction[13]).Avatar, obj, tmp.id);
        const obj2 = items4(trackUserProfileAction[14]);
      }
      return tmp2;
    };
    obj1[2] = format(isGameRelationship, obj2);
    let tmp15 = obj1;
  } else {
    obj3 = { username: null };
    obj3[0] = name;
    obj1[2] = format(intl2.uIomXw, obj3);
    tmp15 = obj1;
  }
  const items3 = [getOrFetchApplication(Text, tmp15), , ];
  obj4 = { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" };
  items3[1] = getOrFetchApplication(tmp(userResult[15]), obj4);
  const obj5 = { style: items4.buttons, children: null };
  const obj6 = { size: "sm", variant: "primary", text: null, onPress: null };
  intl2 = tmp4(userResult[12]).intl;
  obj6[2] = intl2.string(isGameRelationship(userResult[12]).t.Zcibdf);
  obj6[3] = Button;
  items4 = [getOrFetchApplication(isGameRelationship(userResult[16]).Button, obj6), ];
  Button = tmp4(userResult[16]).Button;
  const obj7 = { size: "sm", variant: "secondary", text: null, onPress: null };
  obj1 = tmp4(userResult[12]).intl;
  user = obj1.string;
  userResult = user(tmp4(userResult[12]).t.xuio0C);
  obj7[2] = userResult;
  obj7[3] = callback;
  tmp = tmp14(Button, obj7);
  items4[1] = tmp;
  obj5[1] = items4;
  Text = tmp12(tmp13, obj5);
  items3[2] = Text;
  obj[1] = items3;
  closure_6(cancelFriendRequest, obj);
};