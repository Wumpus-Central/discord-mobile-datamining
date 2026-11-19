// === Module 12686: FriendsAnimation ===

// Module 12686 (FriendsAnimation)
import initialize from "initialize" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserUtils from "UserUtils" /* 4848 */;
import CheckpointFriendsRive from "CheckpointFriendsRive" /* 4929 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const CHECKPOINT_PRIMARY = fn(5848).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
let closure_5 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
const PlatformUtils = fn(1360);
let tmp2;
if (PlatformUtils.isIOS()) {
  let obj2 = { "unifont-17.0.03": null };
  let obj3 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  obj2["unifont-17.0.03"] = obj3;
  tmp2 = obj2;
}
obj2 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/FriendsAnimation.tsx");

export default function FriendsAnimation(animationState) {
  ({ sidekickUser, firstUser, secondUser, twoFriends, isReducedMotion } = animationState);
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj2 = UserUtils;
  let str = obj2.useName(sidekickUser);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = UserUtils.useName(firstUser);
  if (str2 == null) {
    str2 = "";
  }
  const tmpResult = UserUtils;
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let str3 = UserUtils.useName(secondUser);
  if (str3 == null) {
    str3 = "";
  }
  const tmpResult2 = UserUtils;
  if (twoFriends) {
    let str5 = "twoFriends";
    if (isReducedMotion) {
      str5 = "twoFriends-reducedMotion";
    }
    let str4 = str5;
  } else {
    str4 = "threeFriends";
    if (isReducedMotion) {
      str4 = "threeFriends-reducedMotion";
    }
  }
  const obj3 = { referencedAssets: obj2, defaultViewModelInstance: str4, dataBinding: null };
  const obj4 = {};
  const merged = Object.assign(closure_5);
  obj4.AnimationState = animationState.animationState;
  let userAvatarURL;
  if (null != sidekickUser) {
    const obj7 = AvatarUtilsDefault;
    userAvatarURL = obj7.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  obj4["Avatar01/img"] = userAvatarURL;
  let userAvatarURL1;
  if (null != secondUser) {
    const obj8 = AvatarUtilsDefault;
    userAvatarURL1 = obj8.getUserAvatarURL(secondUser, false, 64, "png");
  }
  obj4["Avatar02/img"] = userAvatarURL1;
  let userAvatarURL2;
  if (null != firstUser) {
    const obj9 = AvatarUtilsDefault;
    userAvatarURL2 = obj9.getUserAvatarURL(firstUser, false, 64, "png");
  }
  obj4["Avatar03/img"] = userAvatarURL2;
  let userAvatarURL3;
  if (null != sidekickUser) {
    const obj10 = AvatarUtilsDefault;
    userAvatarURL3 = obj10.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  obj4["Avatar04/img"] = userAvatarURL3;
  let userAvatarURL4;
  if (null != stateFromStores) {
    const obj11 = AvatarUtilsDefault;
    userAvatarURL4 = obj11.getUserAvatarURL(stateFromStores, false, 64, "png");
  }
  obj4["Avatar05/img"] = userAvatarURL4;
  obj4["Avatar01/Username"] = toLocaleUpperCaseResult;
  obj4["Avatar02/Username"] = str3.toLocaleUpperCase();
  obj4["Avatar03/Username"] = toLocaleUpperCaseResult1;
  obj4["Avatar04/Username"] = toLocaleUpperCaseResult;
  obj4.twoFriends = twoFriends;
  obj3.dataBinding = obj4;
  return jsx(CheckpointFriendsRive.CheckpointFriendsRive, { referencedAssets: obj2, defaultViewModelInstance: str4, dataBinding: null });
};