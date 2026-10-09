// === Module 14784: EditUserProfileAvatar ===

// Module 14784 (EditUserProfileAvatar)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8274 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 }, editButton: { position: "absolute", top: -8, right: -8 } });
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
  let handleUploadAvatarSelect;
  let onPress;
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
  handleUploadAvatarSelect = tmp10;
  const items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag, isUserProfileEditingRefresh];
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
    const tmp3 = asyncRequireImpl(14786, dependencyMap.paths);
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
  const GifAutoPlay = tmp8(tmp3[19]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp8Result = user(flag2[18]);
  const tmp16 = pendingAvatar(flag(flag2[20]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, size });
  if (flag) {
    flag = null == pendingAvatarSrc;
  }
  if (flag) {
    flag = null == pendingAvatarDecoration;
  }
  if (flag) {
    flag = !stateFromStores;
  }
  if (flag) {
    flag = setting;
  }
  const tmp15Result = pendingAvatar(flag(flag2[21]), { shouldAnimate: flag, children: tmp16 });
  if (isUserProfileEditingRefresh) {
    const obj4 = { style, children: null };
    const items3 = [tmp15Result, ];
    const obj5 = { style: tmp.editButton, onPress, accessibilityLabel: null, disabled: null };
    const intl2 = tmp8(tmp3[23]).intl;
    obj5.accessibilityLabel = intl2.string(tmp8(tmp3[23]).t["70lEQe"]);
    obj5.disabled = disabled;
    items3[1] = tmp15(tmp2(tmp3[22]), obj5);
    obj4.children = items3;
    let tmp21Result = tmp21(analyticsLocations, obj4);
    const tmp2Result3 = tmp2(tmp3[22]);
  } else {
    const obj6 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp8(tmp3[23]).intl;
    obj6.accessibilityLabel = intl.string(tmp8(tmp3[23]).t.MUgHIN);
    const items4 = [tmp15Result, ];
    const obj7 = { style: null, size: null };
    const items5 = [tmp.editIcon, editIconStyle];
    obj7.style = items5;
    let str = "xs";
    if (size === tmp8(tmp3[26]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    obj7.size = str;
    items4[1] = tmp15(tmp2(tmp3[25]), obj7);
    obj6.children = items4;
    tmp21Result = tmp21(tmp8(tmp3[24]).PressableOpacity, obj6);
    const tmp2Result4 = tmp2(tmp3[25]);
  }
  return tmp21Result;
};