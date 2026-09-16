// === Module 13268: UserProfileIncomingFriendRequest ===

// Module 13268 (UserProfileIncomingFriendRequest)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG } };
let closure_7 = createStyles.createStyles(obj2);
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
  const tmp3 = items4(trackUserProfileAction[5])();
  trackUserProfileAction = isGameRelationship(trackUserProfileAction[6]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = isGameRelationship(trackUserProfileAction[6]);
  let obj2 = isGameRelationship(trackUserProfileAction[8]);
  const friendRequestActions = obj2.useFriendRequestActions({ userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile });
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  const obj3 = { userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  let name = items4(trackUserProfileAction[9]).useName(guildId, channelId, user);
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
  let obj4 = items4(trackUserProfileAction[9]);
  const getOrFetchApplication = isGameRelationship(trackUserProfileAction[10]).useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (tmp8 == getOrFetchApplication) {
      return null;
    }
  }
  const obj6 = { style: null, children: null };
  const items2 = [items4.container, tmp3.card, style.style];
  obj6.style = items2;
  let Text = tmp4(userResult[11]).Text;
  let obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp4(userResult[12]).intl;
  const format = intl.format;
  let intl2 = tmp4(userResult[12]).t;
  if (null != applicationId) {
    isGameRelationship = isGameRelationship ? intl2.syHjLL : intl2.V15uUI;
    const obj8 = { username: name, applicationName: null, applicationIcon: null };
    tmp8 = getOrFetchApplication == tmp8;
    name = undefined;
    if (!tmp8) {
      name = getOrFetchApplication.name;
    }
    obj8.applicationName = name;
    obj8.applicationIcon = function applicationIcon() {
      let tmp2 = null;
      if (null != getOrFetchApplication) {
        const obj = { source: null, size: null, style: null };
        ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
        obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
        obj.size = native.AvatarSizes.XXSMALL;
        obj.style = items4.gameIcon;
        tmp2 = hasOwnProperty(native.Avatar, obj, getOrFetchApplication.id);
        const obj4 = { id: null, icon: null };
      }
      return tmp2;
    };
    obj7.children = format(isGameRelationship, obj8);
    let tmp15 = obj7;
  } else {
    const obj9 = { username: name };
    obj7.children = format(intl2.uIomXw, obj9);
    tmp15 = obj7;
  }
  const items3 = [getOrFetchApplication(Text, tmp15), getOrFetchApplication(tmp(userResult[15]), { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" }), ];
  const obj11 = { style: items4.buttons, children: null };
  const obj12 = { size: "sm", variant: "primary", text: null, onPress: null };
  intl2 = tmp4(userResult[12]).intl;
  obj12.text = intl2.string(isGameRelationship(userResult[12]).t.Zcibdf);
  obj12.onPress = Button;
  items4 = [getOrFetchApplication(isGameRelationship(userResult[16]).Button, obj12), ];
  Button = tmp4(userResult[16]).Button;
  const obj13 = { size: "sm", variant: "secondary", text: null, onPress: null };
  obj7 = tmp4(userResult[12]).intl;
  user = obj7.string;
  userResult = user(tmp4(userResult[12]).t.xuio0C);
  obj13.text = userResult;
  obj13.onPress = callback;
  tmp = tmp14(Button, obj13);
  items4[1] = tmp;
  obj11.children = items4;
  Text = closure_6(tmp13, obj11);
  items3[2] = Text;
  obj6.children = items3;
  closure_6(cancelFriendRequest, obj6);
  const obj10 = { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" };
  const obj5 = isGameRelationship(trackUserProfileAction[10]);
};