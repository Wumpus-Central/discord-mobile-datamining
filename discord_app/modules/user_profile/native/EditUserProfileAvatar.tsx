// discord_app/modules/user_profile/native/EditUserProfileAvatar.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 } });
let __initData = {
  code: 'function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+"deg"}]};}',
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

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
  let showAnimatedAvatarUpsell;
  let pendingAvatar;
  setPendingAvatar = undefined;
  let avatarDecoration;
  __initData = undefined;
  let onPress;
  let sharedValue;
  let tmp = avatarDecoration();
  const analyticsLocations = flag2(flag3[4])(flag2(flag3[5]).EDIT_AVATAR).analyticsLocations;
  const tmp4 = flag2(flag3[4]);
  const canUseAnimatedAvatarResult = flag2(flag3[6]).canUseAnimatedAvatar(user);
  let tmp6 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp6 = !flag2;
  }
  showAnimatedAvatarUpsell = tmp6;
  const tmp7 = flag2(flag3[7])({ isTryItOut: flag2, analyticsLocations });
  pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj = flag2(flag3[6]);
  avatarDecoration = pendingAvatarDecoration;
  const pendingAvatarSrc = user(flag3[8]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = flag2(flag3[9])({ isTryItOut: flag2, analyticsLocations });
  __initData = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag2];
  onPress = analyticsLocations.useCallback(() => {
    let obj2 = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect() {
        flag2(flag3[10]).hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect() {
        flag2(flag3[10]).hideActionSheet();
        const obj = flag2(flag3[10]);
        const obj3 = { profileAssetType: null, selectionContext: null };
        const obj2 = flag2(flag3[10]);
        obj3.profileAssetType = user(flag3[14]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag3[14]).GIFSelectionContext;
        obj3.selectionContext = closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(flag3[12])(flag3[13], flag3.paths), "Select GIF Avatar", obj3);
      },
      handleEditAvatarDecorationSelect() {
        const result = user(flag3[15]).openAvatarDecorationActionSheet({
          user,
          currentAvatarDecoration,
          analyticsLocations,
        });
      },
      showRemoveAvatar: null,
    };
    let obj = ActionSheetActionCreatorsDefault;
    const tmp = asyncRequireImpl(14892, dependencyMap.paths);
    obj2.showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp, "Change Avatar", obj2);
  }, items);
  analyticsLocations.useRef(false);
  const items1 = [user, flag3, onPress];
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
  let obj2 = user(flag3[8]);
  let obj3 = { userId: user.id, image: pendingAvatar };
  const items2 = [showAnimatedAvatarUpsell];
  const stateFromStores = user(flag3[17]).useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  const tmp8Result = user(flag3[17]);
  sharedValue = user(flag3[18]).useSharedValue(0);
  const tmp8Result3 = user(flag3[18]);
  const fn = function z() {
    const obj = { transform: null };
    const items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = __initData;
  const items3 = [sharedValue];
  const animatedStyle = user(flag3[18]).useAnimatedStyle(fn);
  const effect1 = analyticsLocations.useEffect(() => {
    const obj = ReanimatedRexport;
    const obj3 = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(360, obj3), -1));
    return () => user(flag3[18]).cancelAnimation(sharedValue);
  }, items3);
  const tmp18 = pendingAvatar(flag2(flag3[20]), {
    style: avatarStyle,
    user,
    pendingAvatarSrc,
    pendingAvatarDecoration,
    statusStyle,
    disableStatus: flag,
    size,
  });
  const obj4 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp8(tmp3[22]).intl;
  obj4.accessibilityLabel = intl.string(user(flag3[22]).t.MUgHIN);
  let tmp17Result = tmp18;
  if (flag2) {
    tmp17Result = tmp18;
    if (null == pendingAvatarDecoration) {
      tmp17Result = tmp18;
      if (!stateFromStores) {
        const obj5 = { style: animatedStyle, children: tmp18 };
        tmp17Result = tmp17(tmp2(tmp3[18]).View, obj5);
      }
    }
  }
  const items4 = [tmp17Result];
  const obj6 = { style: null, size: null };
  const items5 = [tmp.editIcon, editIconStyle];
  obj6.style = items5;
  const tmp19 = setPendingAvatar;
  const tmp8Result4 = user(flag3[18]);
  let str = "xs";
  if (size === user(flag3[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  obj6.size = str;
  items4[1] = pendingAvatar(flag2(flag3[23]), obj6);
  obj4.children = items4;
  return tmp19(user(flag3[21]).PressableOpacity, obj4);
}
