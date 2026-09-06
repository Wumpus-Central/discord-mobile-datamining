// === Module 14608: EditUserProfileAvatar ===

// Module 14608 (EditUserProfileAvatar)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import timing from "timing" /* 4561 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8166 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 } });
let __initData = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
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
  let obj = flag2(flag3[6]);
  const canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(user);
  let tmp6 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp6 = !flag2;
  }
  showAnimatedAvatarUpsell = tmp6;
  const tmp7 = flag2(flag3[7])({ isTryItOut: flag2, analyticsLocations });
  pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj1 = user(tmp3[8]);
  obj = { userId: user.id, image: pendingAvatar };
  avatarDecoration = pendingAvatarDecoration;
  const pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = flag2(flag3[9])({ isTryItOut: flag2, analyticsLocations });
  __initData = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag2];
  onPress = analyticsLocations.useCallback(() => {
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect() {
        flag2(flag3[10]).hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect() {
        let obj = flag2(flag3[10]);
        obj.hideActionSheet();
        obj = { profileAssetType: null, selectionContext: null };
        const obj2 = flag2(flag3[10]);
        obj.profileAssetType = user(flag3[14]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag3[14]).GIFSelectionContext;
        obj.selectionContext = closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(flag3[12])(flag3[13], flag3.paths), "Select GIF Avatar", obj);
      },
      handleEditAvatarDecorationSelect() {
        user(flag3[15]);
        const obj = { user, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj);
      },
      showRemoveAvatar: null
    };
    const tmp = asyncRequireImpl(14610, dependencyMap.paths);
    obj.showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp, "Change Avatar", obj);
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
  let tmp8Result = tmp8(tmp3[17]);
  const items2 = [showAnimatedAvatarUpsell];
  const stateFromStores = tmp8Result.useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  tmp8Result = tmp8(tmp3[18]);
  sharedValue = tmp8Result.useSharedValue(0);
  const tmp4 = flag2(flag3[4]);
  const fn = function z() {
    let obj = { transform: null };
    obj = { rotateZ: "" + sharedValue.get() + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = __initData;
  const items3 = [sharedValue];
  const animatedStyle = user(flag3[18]).useAnimatedStyle(fn);
  const effect1 = analyticsLocations.useEffect(() => {
    const obj = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(360, obj), -1));
    return () => user(flag3[18]).cancelAnimation(sharedValue);
  }, items3);
  const tmp18 = pendingAvatar(flag2(flag3[20]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus: flag, size });
  obj = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = tmp8(tmp3[22]).intl;
  obj.accessibilityLabel = intl.string(user(flag3[22]).t.MUgHIN);
  let tmp17Result = tmp18;
  if (flag2) {
    tmp17Result = tmp18;
    if (null == pendingAvatarDecoration) {
      tmp17Result = tmp18;
      if (!stateFromStores) {
        obj1 = { style: animatedStyle, children: tmp18 };
        tmp17Result = tmp17(tmp2(tmp3[18]).View, obj1);
      }
    }
  }
  const items4 = [tmp17Result, ];
  let obj2 = { style: null, size: null };
  const items5 = [tmp.editIcon, editIconStyle];
  obj2.style = items5;
  const tmp19 = setPendingAvatar;
  const tmp8Result1 = user(flag3[18]);
  let str = "xs";
  if (size === user(flag3[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  obj2.size = str;
  items4[1] = pendingAvatar(flag2(flag3[23]), obj2);
  obj.children = items4;
  return tmp19(user(flag3[21]).PressableOpacity, obj);
};