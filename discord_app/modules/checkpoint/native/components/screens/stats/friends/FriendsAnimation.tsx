// === Module 12656: FriendsAnimation ===

// Module 12656 (FriendsAnimation)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import UserUtils from "UserUtils" /* 4850 */;
import CheckpointFriendsRive from "CheckpointFriendsRive" /* 4931 */;
import CheckpointConstants from "CheckpointConstants" /* 5850 */;
import UserStore from "UserStore" /* 1386 */;
import PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = jsxProd.jsx;
let closure_6 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
let tmp2;
if (PlatformUtils.isIOS()) {
  let referencedAssets = { "unifont-17.0.03": null };
  let obj2 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  referencedAssets["unifont-17.0.03"] = obj2;
  tmp2 = referencedAssets;
}
referencedAssets = tmp2;
let closure_8 = createStyles.createStyles({ overflow: { position: "absolute", left: "50%", top: "50%" } });
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/FriendsAnimation.tsx");

export default function FriendsAnimation(animationState) {
  ({ sidekickUser, firstUser, secondUser, twoFriends, isReducedMotion, artboardFrame } = animationState);
  referencedAssets = initialize;
  items = [UserStore];
  const stateFromStores = referencedAssets.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp = closure_8();
  ({ width, height } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  const tmp6 = useWindowDimensionsDefault({ ignoreKeyboard: true });
  let str = UserUtils.useName(sidekickUser);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  let str2 = UserUtils.useName(firstUser);
  if (str2 == null) {
    str2 = "";
  }
  const tmp2Result = UserUtils;
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  let str3 = UserUtils.useName(secondUser);
  if (str3 == null) {
    str3 = "";
  }
  const tmp2Result2 = UserUtils;
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
  let str6;
  if (null != artboardFrame) {
    str6 = "layout";
  }
  const obj3 = { fit: str6, referencedAssets, defaultViewModelInstance: str4, dataBinding: null };
  const obj4 = {};
  const merged = Object.assign(closure_6);
  obj4.AnimationState = animationState.animationState;
  let userAvatarURL;
  if (null != sidekickUser) {
    const tmp5Result = AvatarUtilsDefault;
    userAvatarURL = tmp5Result.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  obj4["Avatar01/img"] = userAvatarURL;
  let userAvatarURL1;
  if (null != secondUser) {
    const tmp5Result5 = AvatarUtilsDefault;
    userAvatarURL1 = tmp5Result5.getUserAvatarURL(secondUser, false, 64, "png");
  }
  obj4["Avatar02/img"] = userAvatarURL1;
  let userAvatarURL2;
  if (null != firstUser) {
    const tmp5Result6 = AvatarUtilsDefault;
    userAvatarURL2 = tmp5Result6.getUserAvatarURL(firstUser, false, 64, "png");
  }
  obj4["Avatar03/img"] = userAvatarURL2;
  let userAvatarURL3;
  if (null != sidekickUser) {
    const tmp5Result7 = AvatarUtilsDefault;
    userAvatarURL3 = tmp5Result7.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  obj4["Avatar04/img"] = userAvatarURL3;
  let userAvatarURL4;
  if (null != stateFromStores) {
    const tmp5Result8 = AvatarUtilsDefault;
    userAvatarURL4 = tmp5Result8.getUserAvatarURL(stateFromStores, false, 64, "png");
  }
  obj4["Avatar05/img"] = userAvatarURL4;
  obj4["Avatar01/Username"] = toLocaleUpperCaseResult;
  obj4["Avatar02/Username"] = str3.toLocaleUpperCase();
  obj4["Avatar03/Username"] = toLocaleUpperCaseResult1;
  obj4["Avatar04/Username"] = toLocaleUpperCaseResult;
  obj4.twoFriends = twoFriends;
  obj3.dataBinding = obj4;
  const tmp10Result = jsx(CheckpointFriendsRive.CheckpointFriendsRive, { fit: str6, referencedAssets, defaultViewModelInstance: str4, dataBinding: null });
  if (null == artboardFrame) {
    return tmp10Result;
  } else {
    ({ centerX, centerY } = artboardFrame);
    const result = artboardFrame.size / 375;
    const _Math = Math;
    const result1 = Math.max(centerX, width - centerX) / result;
    const _Math2 = Math;
    const result2 = Math.max(centerY, height - centerY) / result;
    const obj5 = { style: null, children: null };
    const items1 = [tmp.overflow, ];
    const size = { width: 2 * result1, height: 2 * result2, marginLeft: -result1, marginTop: -result2, transform: null };
    const obj6 = { scale: result };
    const items2 = [obj6];
    size.transform = items2;
    items1[1] = size;
    obj5.style = items1;
    obj5.children = tmp10Result;
    return <View style={null}>{null}</View>;
  }
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
};