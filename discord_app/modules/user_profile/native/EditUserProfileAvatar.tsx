// === Module 14435: EditUserProfileAvatar ===

// Module 14435 (EditUserProfileAvatar)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import timing from "timing" /* 4891 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let set;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 }, editButton: { position: "absolute", top: -8, right: -8 } });
let __initData = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let editIconStyle;
  let handleUploadAvatarSelect;
  let intl;
  let intl2;
  let isUserProfileEditingRefresh;
  let items4;
  let items5;
  let items6;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let str;
  let style;
  let tmp21Result;
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
  setPendingAvatar = undefined;
  let avatarDecoration;
  __initData = undefined;
  let onPress;
  let ref;
  let sharedValue;
  let tmp = avatarDecoration();
  let tmp2 = flag;
  let tmp3 = flag2;
  let tmp4 = flag(flag2[5]);
  const analyticsLocations = tmp4(flag(flag2[6]).EDIT_AVATAR).analyticsLocations;
  let obj = flag(flag2[7]);
  const tmp6 = !obj.canUseAnimatedAvatar(user) && !flag;
  const showAnimatedAvatarUpsell = tmp6;
  const tmp7 = tmp2(tmp3[8])({ isTryItOut: flag, analyticsLocations });
  const pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj2 = user(tmp3[9]);
  const obj3 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  avatarDecoration = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = tmp2(tmp3[10])({ isTryItOut: flag, analyticsLocations });
  __initData = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag, isUserProfileEditingRefresh];
  onPress = isUserProfileEditingRefresh.useCallback(() => {
    let currentAvatarDecoration;
    let fn;
    let tmp3Result;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect() {
        const obj = flag(flag2[11]);
        obj.hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect() {
        let GIFSelectionContext;
        const obj = flag(flag2[11]);
        obj.hideActionSheet();
        const openLazy = flag(flag2[11]).openLazy;
        const obj2 = { profileAssetType: user(flag2[15]).ProfileAssetType.AVATAR, selectionContext: closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT };
        flag(flag2[11]);
        const tmp3 = user(flag2[13])(flag2[14], flag2.paths);
        GIFSelectionContext = user(flag2[15]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Avatar", obj2);
      },
      handleEditAvatarDecorationSelect: fn,
      showRemoveAvatar: tmp3Result.showRemoveAvatar(pendingAvatar, user.avatar)
    };
    const tmp4 = asyncRequire(14437, dependencyMap.paths);
    if (!flag) {
      fn = () => {
        const obj = user(flag2[16]);
        const obj2 = { user, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj2);
      };
    }
    tmp3Result = ProfileCustomizationUtils;
    openLazy(tmp4, "Change Avatar", obj);
  }, items);
  ref = isUserProfileEditingRefresh.useRef(false);
  const items1 = [user, flag2, onPress];
  const effect = isUserProfileEditingRefresh.useEffect(() => {
    const tmp = flag2 && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  const items2 = [showAnimatedAvatarUpsell];
  const tmp8Result = user(tmp3[18]);
  const stateFromStores = tmp8Result.useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  const tmp8Result3 = user(tmp3[19]);
  sharedValue = tmp8Result3.useSharedValue(0);
  const tmp8Result4 = user(tmp3[19]);
  class V {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
      ({ rotateZ: "" + sharedValue.get() + "deg" });
      return obj;
    }
  }
  V.__closure = { rotation: sharedValue };
  V.__workletHash = 13368223692459;
  V.__initData = __initData;
  const items3 = [sharedValue];
  const animatedStyle = tmp8Result4.useAnimatedStyle(V);
  const effect1 = isUserProfileEditingRefresh.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = { duration: 3000, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withRepeat(withTiming(360, obj), -1));
    return () => {
      const obj = user(flag2[19]);
      return obj.cancelAnimation(sharedValue);
    };
  }, items3);
  const tmp18 = pendingAvatar(tmp2(tmp3[21]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, size });
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
    const obj5 = { style, children: items4 };
    items4 = [tmp17Result, ];
    const obj6 = { style: tmp.editButton, onPress, accessibilityLabel: intl2.string(user(tmp3[23]).t["70lEQe"]), disabled };
    const tmp2Result = tmp2(tmp3[22]);
    intl2 = tmp8(tmp3[23]).intl;
    items4[1] = pendingAvatar(tmp2Result, obj6);
    tmp21Result = tmp21(analyticsLocations, obj5);
  } else {
    const obj7 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: intl.string(user(tmp3[23]).t.MUgHIN), children: items5 };
    const PressableOpacity = tmp8(tmp3[24]).PressableOpacity;
    intl = tmp8(tmp3[23]).intl;
    items5 = [tmp17Result, ];
    const obj8 = { style: items6, size: str };
    items6 = [tmp.editIcon, editIconStyle];
    str = "xs";
    const tmp2Result2 = tmp2(tmp3[25]);
    if (size === user(tmp3[26]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    items5[1] = pendingAvatar(tmp2Result2, obj8);
    tmp21Result = tmp21(PressableOpacity, obj7);
  }
  return tmp21Result;
};