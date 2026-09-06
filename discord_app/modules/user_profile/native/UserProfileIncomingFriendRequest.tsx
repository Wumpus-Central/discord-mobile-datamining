// === Module 13118: UserProfileIncomingFriendRequest ===

// Module 13118 (UserProfileIncomingFriendRequest)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: null };
createStyles = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles.friendRequestNote = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default function UserProfileIncomingFriendRequest(style) {
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let trackUserProfileAction;
  let items4 = closure_7();
  let tmp = items4;
  let userResult = trackUserProfileAction;
  let obj = isGameRelationship(trackUserProfileAction[6]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = isGameRelationship(trackUserProfileAction[8]);
  obj = { userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj1.useFriendRequestActions(obj);
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
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
  const callback = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items1);
  let obj4 = isGameRelationship(trackUserProfileAction[10]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (tmp8 == getOrFetchApplication) {
      return null;
    }
  }
  obj = { style: null, children: null };
  const items2 = [items4.container, items4(trackUserProfileAction[5])().card, style.style];
  obj.style = items2;
  let Text = tmp4(userResult[11]).Text;
  obj1 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp4(userResult[12]).intl;
  const format = intl.format;
  let intl2 = tmp4(userResult[12]).t;
  if (null != applicationId) {
    isGameRelationship = isGameRelationship ? intl2.syHjLL : intl2.V15uUI;
    let obj2 = { username: name, applicationName: null, applicationIcon: null };
    tmp8 = getOrFetchApplication == tmp8;
    name = undefined;
    if (!tmp8) {
      name = getOrFetchApplication.name;
    }
    obj2.applicationName = name;
    obj2.applicationIcon = function applicationIcon() {
      let tmp2 = null;
      if (null != getOrFetchApplication) {
        let obj = { source: null, size: null, style: null };
        obj = { id: null, icon: null };
        ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
        obj.source = AvatarUtilsDefault.getApplicationIconSource(obj);
        obj.size = native.AvatarSizes.XXSMALL;
        obj.style = items4.gameIcon;
        tmp2 = hasOwnProperty(native.Avatar, obj, getOrFetchApplication.id);
      }
      return tmp2;
    };
    obj1.children = format(isGameRelationship, obj2);
    let tmp15 = obj1;
  } else {
    obj3 = { username: name };
    obj1.children = format(intl2.uIomXw, obj3);
    tmp15 = obj1;
  }
  const items3 = [getOrFetchApplication(Text, tmp15), , ];
  obj4 = { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" };
  items3[1] = getOrFetchApplication(tmp(userResult[15]), obj4);
  const obj5 = { style: items4.buttons, children: null };
  const obj6 = { size: "sm", variant: "primary", text: null, onPress: null };
  intl2 = tmp4(userResult[12]).intl;
  obj6.text = intl2.string(isGameRelationship(userResult[12]).t.Zcibdf);
  obj6.onPress = Button;
  items4 = [getOrFetchApplication(isGameRelationship(userResult[16]).Button, obj6), ];
  Button = tmp4(userResult[16]).Button;
  const obj7 = { size: "sm", variant: "secondary", text: null, onPress: null };
  obj1 = tmp4(userResult[12]).intl;
  user = obj1.string;
  userResult = user(tmp4(userResult[12]).t.xuio0C);
  obj7.text = userResult;
  obj7.onPress = callback;
  tmp = tmp14(Button, obj7);
  items4[1] = tmp;
  obj5.children = items4;
  Text = closure_6(tmp13, obj5);
  items3[2] = Text;
  obj.children = items3;
  closure_6(cancelFriendRequest, obj);
  const tmp3 = items4(trackUserProfileAction[5])();
};