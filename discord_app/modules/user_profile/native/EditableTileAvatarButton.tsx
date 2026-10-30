// === Module 16505: EditableTileAvatarButton ===

// Module 16505 (EditableTileAvatarButton)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8732 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 16494 */;
import SpinAnimationDefault from "SpinAnimation" /* 16500 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 16504 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;

require = fn;
class EditableTileAvatarButtonBase {
  constructor(arg0) {
    ({ user, avatarChange, enableSpinAnimation } = global);
    if (enableSpinAnimation === undefined) {
      enableSpinAnimation = false;
    }
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[4]);
    items = [];
    items[0] = closure_3;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    GifAutoPlay = closure_0(closure_2[5]).GifAutoPlay;
    setting = !stateFromStores;
    if (!stateFromStores) {
      setting = GifAutoPlay.useSetting();
    }
    tmpResult = tmp(tmp2[6]);
    obj1 = { userId: user.id, image: avatarChange };
    pendingAvatarSrc = tmpResult.getPendingAvatarSrc(obj1);
    AVATAR_SIZE_MAP = tmp(tmp2[7]).AVATAR_SIZE_MAP;
    if (null === avatarChange) {
      tmpResult1 = tmp(tmp2[8]);
      defaultAvatarURL = tmpResult1.getDefaultAvatarURL(user.id, user.discriminator);
    } else {
      defaultAvatarURL = pendingAvatarSrc;
      if (pendingAvatarSrc == null) {
        defaultAvatarURL = tmp6;
      }
    }
    tmp8 = jsx;
    obj10 = { accessibilityLabel: null, accessibilityValue: null, onPress: null, children: null };
    tmp9 = closure_1(tmp2[9]);
    intl = tmp(tmp2[10]).intl;
    obj10.accessibilityLabel = intl.string(tmp(tmp2[10]).t.lqaIxI);
    tmpResult2 = tmp(tmp2[11]);
    obj10.accessibilityValue = tmpResult2.getAvatarAccessibleValue(avatarChange, user.avatar);
    obj10.onPress = global.onPress;
    tmp10 = closure_1(tmp2[12]);
    if (setting) {
      setting = enableSpinAnimation;
    }
    obj11 = { shouldAnimate: setting, children: null };
    obj12 = { source: null, size: null };
    tmpResult3 = tmp(tmp2[8]);
    obj12.source = tmpResult3.makeSource(defaultAvatarURL);
    obj12.size = tmp(tmp2[7]).AvatarSizes.XLARGE_72;
    obj11.children = tmp8(tmp(tmp2[7]).Avatar, obj12);
    obj10.children = tmp8(tmp10, obj11);
    return tmp8(tmp9, obj10);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default EditableTileAvatarButtonBase;
export function TryItOutEditableTileAvatarButton(arg0) {
  ({ user, onPress } = arg0);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const tryItOutAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
    let pendingAvatar = tryItOutAvatar;
    if (tryItOutAvatar == null) {
      pendingAvatar = UserProfileSettingsStore.getPendingChanges().pendingAvatar;
    }
    return { avatarChange: pendingAvatar, enableSpinAnimation: null == tryItOutAvatar };
  });
  return <EditableTileAvatarButtonBase user={user} avatarChange={stateFromStoresObject.avatarChange} onPress={onPress} enableSpinAnimation={stateFromStoresObject.enableSpinAnimation} />;
}