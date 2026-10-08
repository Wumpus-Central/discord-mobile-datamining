// === Module 14679: EditUserProfileAvatar ===

// Module 14679 (EditUserProfileAvatar)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import timing from "timing" /* 5091 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8266 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 }, editButton: { position: "absolute", top: -8, right: -8 } });
let __initData = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  user = user.user;
  ({ disabled, style, disableStatus } = user);
  ({ statusStyle, avatarStyle, editIconStyle } = user);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.autoStartEditFlow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ size, isUserProfileEditingRefresh } = user);
  let showAnimatedAvatarUpsell;
  let pendingAvatar;
  setPendingAvatar = undefined;
  let avatarDecoration;
  __initData = undefined;
  let onPress;
  let sharedValue;
  let tmp = avatarDecoration();
  const analyticsLocations = flag(flag2[5])(flag(flag2[6]).EDIT_AVATAR).analyticsLocations;
  const tmp4 = flag(flag2[5]);
  const canUseAnimatedAvatarResult = flag(flag2[7]).canUseAnimatedAvatar(user);
  let tmp6 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp6 = !flag;
  }
  showAnimatedAvatarUpsell = tmp6;
  const tmp7 = flag(flag2[8])({ isTryItOut: flag, analyticsLocations });
  pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj = flag(flag2[7]);
  const pendingAvatarSrc = user(flag2[9]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  avatarDecoration = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = flag(flag2[10])({ isTryItOut: flag, analyticsLocations });
  __initData = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag, isUserProfileEditingRefresh];
  onPress = isUserProfileEditingRefresh.useCallback(() => {
    let obj2 = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        flag(flag2[11]).hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        flag(flag2[11]).hideActionSheet();
        const obj = flag(flag2[11]);
        const obj3 = { profileAssetType: null, selectionContext: null };
        const obj2 = flag(flag2[11]);
        obj3.profileAssetType = user(flag2[15]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag2[15]).GIFSelectionContext;
        obj3.selectionContext = closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(flag2[13])(flag2[14], flag2.paths), "Select GIF Avatar", obj3);
      },
      handleEditAvatarDecorationSelect: null,
      showRemoveAvatar: null
    };
    let obj = ActionSheetActionCreatorsDefault;
    if (!flag) {
      function editAvatarDecoration() {
        const result = user(flag2[16]).openAvatarDecorationActionSheet({ user, currentAvatarDecoration, analyticsLocations });
      }
    }
    obj2.handleEditAvatarDecorationSelect = editAvatarDecoration;
    const tmp3 = asyncRequireImpl(14681, dependencyMap.paths);
    obj2.showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp3, "Change Avatar", obj2);
    const tmp2Result = ProfileCustomizationUtils;
  }, items);
  isUserProfileEditingRefresh.useRef(false);
  const items1 = [user, flag2, onPress];
  const effect = isUserProfileEditingRefresh.useEffect(() => {
    let tmp = flag2;
    if (flag2) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  let obj2 = user(flag2[9]);
  let obj3 = { userId: user.id, image: pendingAvatar };
  const items2 = [showAnimatedAvatarUpsell];
  const stateFromStores = user(flag2[18]).useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  const tmp8Result = user(flag2[18]);
  sharedValue = user(flag2[19]).useSharedValue(0);
  const tmp8Result3 = user(flag2[19]);
  class V {
    constructor() {
      obj = { transform: null };
      obj1 = { rotateZ: "" + closure_12.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  V.__closure = { rotation: sharedValue };
  V.__workletHash = 13368223692459;
  V.__initData = __initData;
  const items3 = [sharedValue];
  const animatedStyle = user(flag2[19]).useAnimatedStyle(V);
  const effect1 = isUserProfileEditingRefresh.useEffect(() => {
    const obj = ReanimatedRexport;
    const obj3 = { duration: 3000, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj3.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(360, obj3), -1));
    return () => user(flag2[19]).cancelAnimation(sharedValue);
  }, items3);
  const tmp18 = pendingAvatar(flag(flag2[21]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, size });
  let tmp17Result = tmp18;
  if (flag) {
    tmp17Result = tmp18;
    if (null == pendingAvatarSrc) {
      tmp17Result = tmp18;
      if (null == pendingAvatarDecoration) {
        tmp17Result = tmp18;
        if (!stateFromStores) {
          const obj4 = { style: animatedStyle, children: tmp18 };
          tmp17Result = tmp17(tmp2(tmp3[19]).View, obj4);
        }
      }
    }
  }
  if (isUserProfileEditingRefresh) {
    const obj5 = { style, children: null };
    const items4 = [tmp17Result, ];
    const obj6 = { style: tmp.editButton, onPress, accessibilityLabel: null, disabled: null };
    const intl2 = tmp8(tmp3[23]).intl;
    obj6.accessibilityLabel = intl2.string(tmp8(tmp3[23]).t["70lEQe"]);
    obj6.disabled = disabled;
    items4[1] = tmp17(tmp2(tmp3[22]), obj6);
    obj5.children = items4;
    let tmp21Result = tmp21(analyticsLocations, obj5);
    let tmp2Result = tmp2(tmp3[22]);
  } else {
    const obj7 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp8(tmp3[23]).intl;
    obj7.accessibilityLabel = intl.string(tmp8(tmp3[23]).t.MUgHIN);
    const items5 = [tmp17Result, ];
    const obj8 = { style: null, size: null };
    const items6 = [tmp.editIcon, editIconStyle];
    obj8.style = items6;
    let str = "xs";
    if (size === tmp8(tmp3[26]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    obj8.size = str;
    items5[1] = tmp17(tmp2(tmp3[25]), obj8);
    obj7.children = items5;
    tmp21Result = tmp21(tmp8(tmp3[24]).PressableOpacity, obj7);
    const tmp2Result2 = tmp2(tmp3[25]);
  }
  return tmp21Result;
};