// discord_app/modules/user_profile/native/EditUserProfileAvatar.tsx
import noop from "../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ editIcon: { position: "absolute", right: -3 } });
let closure_8 = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
let result = require("obj132").fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  user = user.user;
  let flag = user.disableStatus;
  ({ disabled, statusStyle, style, avatarStyle, editIconStyle } = user);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = user.isTryItOut;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = user.autoStartEditFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const size = user.size;
  closure_4 = undefined;
  let pendingAvatar;
  setPendingAvatar = undefined;
  let avatarDecoration;
  closure_8 = undefined;
  let callback;
  closure_10 = undefined;
  let sharedValue;
  let tmp = avatarDecoration();
  const analyticsLocations = flag2(flag3[4])(flag2(flag3[5]).EDIT_AVATAR).analyticsLocations;
  let obj = flag2(flag3[6]);
  const canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(user);
  let tmp6 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp6 = !flag2;
  }
  closure_4 = tmp6;
  const tmp7 = flag2(flag3[7])({ isTryItOut: flag2, analyticsLocations });
  pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  obj1 = user(tmp3[8]);
  obj = { userId: user.id, image: pendingAvatar };
  avatarDecoration = pendingAvatarDecoration;
  const pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = flag2(flag3[9])({ isTryItOut: flag2, analyticsLocations });
  closure_8 = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag2];
  callback = analyticsLocations.useCallback(() => {
    flag2(flag3[10]);
    let obj = {
      showAnimatedAvatarUpsell: closure_4,
      handleRemoveAvatarSelect() {
        flag2(flag3[10]).hideActionSheet();
        callback(null);
      },
      handleUploadAvatarSelect: closure_8,
      handleUploadGIFAvatarSelect() {
        let obj = flag2(flag3[10]);
        obj.hideActionSheet();
        obj = { profileAssetType: null, selectionContext: null };
        const obj2 = flag2(flag3[10]);
        obj[0] = user(flag3[14]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag3[14]).GIFSelectionContext;
        obj[1] = closure_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(flag3[12])(flag3[13], flag3.paths), "Select GIF Avatar", obj);
      },
      handleEditAvatarDecorationSelect() {
        user(flag3[15]);
        const obj = { user: closure_0, currentAvatarDecoration: closure_7, analyticsLocations: closure_3 };
        const result = obj.openAvatarDecorationActionSheet(obj);
      },
      showRemoveAvatar: null
    };
    const tmp = user(flag3[12])(flag3[11], flag3.paths);
    obj[5] = user(flag3[16]).showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp, "Change Avatar", obj);
  }, items);
  closure_10 = analyticsLocations.useRef(false);
  const items1 = [user, flag3, callback];
  const effect = analyticsLocations.useEffect(() => {
    let tmp = flag3;
    if (flag3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  let tmp8Result = tmp8(tmp3[17]);
  const items2 = [closure_4];
  const stateFromStores = tmp8Result.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  tmp8Result = tmp8(tmp3[18]);
  sharedValue = tmp8Result.useSharedValue(0);
  const tmp4 = flag2(flag3[4]);
  const fn = function z() {
    const obj = { rotateZ: "" + sharedValue.get() + "deg" };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = closure_8;
  const items3 = [sharedValue];
  const animatedStyle = user(flag3[18]).useAnimatedStyle(fn);
  const effect1 = analyticsLocations.useEffect(() => {
    user(flag3[18]);
    const obj = { duration: 3000, easing: null };
    const Easing = user(flag3[18]).Easing;
    obj[1] = Easing.inOut(user(flag3[18]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(user(flag3[19]).withTiming(360, obj), -1));
    return () => user(flag3[18]).cancelAnimation(closure_11);
  }, items3);
  const tmp18 = pendingAvatar(flag2(flag3[20]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus: flag, size });
  obj = { style, disabled, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp8(tmp3[22]).intl;
  obj[4] = intl.string(user(flag3[22]).t.MUgHIN);
  let tmp17Result = tmp18;
  if (flag2) {
    tmp17Result = tmp18;
    if (null == pendingAvatarDecoration) {
      tmp17Result = tmp18;
      if (!stateFromStores) {
        obj1 = { style: null, children: null };
        obj1[0] = animatedStyle;
        obj1[1] = tmp18;
        tmp17Result = tmp17(tmp2(tmp3[18]).View, obj1);
      }
    }
  }
  const items4 = [tmp17Result, ];
  let obj2 = { style: items5, size: null };
  items5 = [tmp.editIcon, editIconStyle];
  const tmp19 = setPendingAvatar;
  const tmp8Result1 = user(flag3[18]);
  let str = "xs";
  if (size === user(flag3[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  obj2[1] = str;
  items4[1] = pendingAvatar(flag2(flag3[23]), obj2);
  obj[5] = items4;
  return tmp19(user(flag3[21]).PressableOpacity, obj);
};