// discord_app/modules/user_profile/native/EditUserProfileAvatar.tsx
import asyncRequireImpl from "../../../../_runtime/02120_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let closure_9 = createStyles.createStyles({
  editIcon: { position: "absolute", right: -3 },
  editButton: { position: "absolute", top: -8, right: -8 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  user = user.user;
  const guildId = user.guildId;
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
  let stateFromStores;
  let avatarDecoration;
  let handleUploadAvatarSelect;
  let onPress;
  let tmp = stateFromStores();
  const analyticsLocations = guildId(flag[6])(guildId(flag[7]).EDIT_AVATAR).analyticsLocations;
  const tmp4 = guildId(flag[6]);
  const canUseAnimatedAvatarResult = guildId(flag[8]).canUseAnimatedAvatar(user);
  let tmp6 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp6 = !flag;
  }
  showAnimatedAvatarUpsell = tmp6;
  const tmp7 = guildId(flag[9])({ isTryItOut: flag, analyticsLocations, guildId });
  pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj = guildId(flag[8]);
  const pendingAvatarSrc = user(flag[10]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  let obj2 = user(flag[10]);
  let obj3 = { userId: user.id, image: pendingAvatar };
  items = [showAnimatedAvatarUpsell];
  stateFromStores = user(flag[11]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  let result = null == guildId;
  if (!result) {
    result = tmp2(tmp3[8]).canUsePremiumGuildMemberProfile(user);
    let tmp2Result = tmp2(tmp3[8]);
  }
  if (null != guildId) {
    let avatarDecoration1;
    if (stateFromStores != null) {
      avatarDecoration1 = stateFromStores.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  if (undefined !== pendingAvatarDecoration) {
    avatarDecoration = pendingAvatarDecoration;
  }
  const tmp13 = guildId(flag[12])({ isTryItOut: flag, analyticsLocations, guildId });
  handleUploadAvatarSelect = tmp13;
  const items1 = [user, guildId, , , , , , , , ,];
  let avatar;
  if (stateFromStores != null) {
    avatar = stateFromStores.avatar;
  }
  items1[2] = avatar;
  items1[3] = analyticsLocations;
  items1[4] = pendingAvatar;
  items1[5] = setPendingAvatar;
  items1[6] = tmp13;
  items1[7] = tmp6;
  items1[8] = avatarDecoration;
  items1[9] = flag;
  items1[10] = isUserProfileEditingRefresh;
  onPress = flag2.useCallback(() => {
    let obj2 = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        guildId(flag[13]).hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        guildId(flag[13]).hideActionSheet();
        const obj = guildId(flag[13]);
        const obj3 = { profileAssetType: null, selectionContext: null, guildId: null };
        const obj2 = guildId(flag[13]);
        obj3.profileAssetType = user(flag[17]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag[17]).GIFSelectionContext;
        obj3.selectionContext = closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj3.guildId = guildId;
        obj2.openLazy(user(flag[15])(flag[16], flag.paths), "Select GIF Avatar", obj3);
      },
      handleEditAvatarDecorationSelect: null,
      showRemoveAvatar: null,
      guildId: null,
      analyticsLocations: null,
    };
    let obj = ActionSheetActionCreatorsDefault;
    if (!flag) {
      function editAvatarDecoration() {
        const result = user(flag[18]).openAvatarDecorationActionSheet({
          user,
          guildId,
          currentAvatarDecoration,
          analyticsLocations,
        });
      }
    }
    obj2.handleEditAvatarDecorationSelect = editAvatarDecoration;
    const tmp3 = asyncRequireImpl(16052, dependencyMap.paths);
    if (null != guildId) {
      let avatar1;
      if (stateFromStores != null) {
        avatar1 = stateFromStores.avatar;
      }
      let avatar = avatar1;
    } else {
      avatar = user.avatar;
    }
    obj2.showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar(pendingAvatar, avatar);
    obj2.guildId = guildId;
    obj2.analyticsLocations = analyticsLocations;
    obj.openLazy(tmp3, "Change Avatar", obj2);
    const tmp2Result = ProfileCustomizationUtils;
  }, items1);
  flag2.useRef(false);
  const items2 = [user, flag2, onPress];
  const effect = obj6.useEffect(() => {
    let tmp = flag2;
    if (flag2) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items2);
  const obj4 = user(flag[11]);
  const items3 = [analyticsLocations];
  const stateFromStores1 = user(flag[11]).useStateFromStores(items3, () => analyticsLocations.useReducedMotion);
  const GifAutoPlay = tmp8(tmp3[20]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp8Result = user(flag[11]);
  const tmp20 = pendingAvatar(guildId(flag[21]), {
    style: avatarStyle,
    user,
    guildId,
    pendingAvatarSrc,
    pendingAvatarDecoration,
    statusStyle,
    disableStatus,
    size,
  });
  if (flag) {
    flag = null == pendingAvatarSrc;
  }
  if (flag) {
    flag = null == pendingAvatarDecoration;
  }
  if (flag) {
    flag = !stateFromStores1;
  }
  if (flag) {
    flag = setting;
  }
  const tmp19Result = pendingAvatar(guildId(flag[22]), { shouldAnimate: flag, children: tmp20 });
  if (isUserProfileEditingRefresh) {
    const obj5 = { style, children: null };
    const items4 = [tmp19Result];
    if (result) {
      const obj7 = { style: tmp.editButton, onPress, accessibilityLabel: null, disabled: null };
      const intl2 = tmp8(tmp3[24]).intl;
      obj7.accessibilityLabel = intl2.string(tmp8(tmp3[24]).t["70lEQe"]);
      obj7.disabled = disabled;
      result = tmp19(tmp2(tmp3[23]), obj7);
      const tmp2Result5 = tmp2(tmp3[23]);
    }
    items4[1] = result;
    obj5.children = items4;
    let tmp23Result = tmp23(isUserProfileEditingRefresh, obj5);
  } else {
    const obj8 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp8(tmp3[24]).intl;
    obj8.accessibilityLabel = intl.string(tmp8(tmp3[24]).t.MUgHIN);
    const items5 = [tmp19Result];
    const obj9 = { style: null, size: null };
    const items6 = [tmp.editIcon, editIconStyle];
    obj9.style = items6;
    let str = "xs";
    if (size === tmp8(tmp3[27]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    obj9.size = str;
    items5[1] = tmp19(tmp2(tmp3[26]), obj9);
    obj8.children = items5;
    tmp23Result = tmp23(tmp8(tmp3[25]).PressableOpacity, obj8);
    const tmp2Result6 = tmp2(tmp3[26]);
  }
  return tmp23Result;
}
