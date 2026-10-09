// === Module 14857: EditableTileAvatarButton ===

// Module 14857 (EditableTileAvatarButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8277 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14853 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 14856 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;

const SpinAnimationDefault = tmp21(14787);
require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileAvatarButtonBase(arg0) {
  const cResult = c.c(31);
  ({ user, avatarChange, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  let tmp9 = null == avatarChange;
  const setting = GifAutoPlay.useSetting();
  if (tmp9) {
    tmp9 = !stateFromStores;
  }
  if (tmp9) {
    tmp9 = setting;
  }
  if (cResult[2] === avatarChange) {
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === user) {
          if (cResult[18] === cResult[6]) {
            if (cResult[19] === tmp13) {
              let tmp36 = cResult[20];
            }
            if (cResult[21] === tmp11) {
              if (cResult[22] === tmp14) {
                if (cResult[23] === tmp36) {
                  let tmp39 = cResult[24];
                }
                if (cResult[25] === tmp12) {
                  if (cResult[26] === tmp15) {
                    if (cResult[27] === tmp16) {
                      if (cResult[28] === tmp17) {
                        if (cResult[29] === tmp39) {
                          let tmp42 = cResult[30];
                        }
                        return tmp42;
                      }
                    }
                  }
                }
                const obj2 = { accessibilityLabel: tmp15, accessibilityValue: tmp16, onPress: tmp17, children: tmp39 };
                const tmp44 = <tmp12 accessibilityLabel={tmp15} accessibilityValue={tmp16} onPress={tmp17}>{tmp39}</tmp12>;
                cResult[25] = tmp12;
                cResult[26] = tmp15;
                cResult[27] = tmp16;
                cResult[28] = tmp17;
                cResult[29] = tmp39;
                cResult[30] = tmp44;
                tmp42 = tmp44;
              }
            }
            const obj3 = { shouldAnimate: tmp14, children: tmp36 };
            const tmp41 = <tmp11 shouldAnimate={tmp14}>{tmp36}</tmp11>;
            cResult[21] = tmp11;
            cResult[22] = tmp14;
            cResult[23] = tmp36;
            cResult[24] = tmp41;
            tmp39 = tmp41;
          }
          const obj4 = { source: cResult[9], size: native.AvatarSizes.XLARGE_72 };
          const tmp38 = jsx(cResult[6], { source: cResult[9], size: native.AvatarSizes.XLARGE_72 });
          cResult[18] = cResult[6];
          cResult[19] = cResult[9];
          cResult[20] = tmp38;
          tmp36 = tmp38;
        }
      }
    }
  }
  const tmpResult = initialize;
  const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: avatarChange });
  const AVATAR_SIZE_MAP = native.AVATAR_SIZE_MAP;
  if (null === avatarChange) {
    let defaultAvatarURL = AvatarUtils.getDefaultAvatarURL(user.id, user.discriminator);
    const tmpResult6 = AvatarUtils;
  } else {
    defaultAvatarURL = pendingAvatarSrc;
    if (pendingAvatarSrc == null) {
      defaultAvatarURL = tmp19;
    }
  }
  let tmp21 = importDefault;
  const tmp22 = UserProfileEditableTileBaseDefault;
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.lqaIxI);
    cResult[14] = stringResult;
    let tmp23 = stringResult;
  } else {
    tmp23 = cResult[14];
  }
  if (cResult[15] === avatarChange) {
    if (cResult[16] === user.avatar) {
      let tmp25 = cResult[17];
    }
    tmp21 = SpinAnimationDefault;
    const Avatar = native.Avatar;
    const source = AvatarUtils.makeSource(defaultAvatarURL);
    cResult[2] = avatarChange;
    cResult[3] = onPress;
    cResult[4] = tmp9;
    cResult[5] = user;
    cResult[6] = Avatar;
    cResult[7] = tmp21;
    cResult[8] = tmp22;
    cResult[9] = source;
    cResult[10] = tmp9;
    cResult[11] = tmp23;
    cResult[12] = tmp25;
    cResult[13] = onPress;
    const tmpResult7 = AvatarUtils;
  }
  const obj5 = { userId: user.id, image: avatarChange };
  const tmpResult5 = RecentAvatarUtils;
  const avatarAccessibleValue = UserProfileEditingAccessibilityUtils.getAvatarAccessibleValue(avatarChange, user.avatar);
  cResult[15] = avatarChange;
  cResult[16] = user.avatar;
  cResult[17] = avatarAccessibleValue;
  tmp25 = avatarAccessibleValue;
  const tmpResult8 = UserProfileEditingAccessibilityUtils;
}) : (function EditableTileAvatarButtonBase(onPress) {
  ({ user, avatarChange } = onPress);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  let tmp5 = null == avatarChange;
  const setting = GifAutoPlay.useSetting();
  if (tmp5) {
    tmp5 = !stateFromStores;
  }
  if (tmp5) {
    tmp5 = setting;
  }
  const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: avatarChange });
  const AVATAR_SIZE_MAP = native.AVATAR_SIZE_MAP;
  if (null === avatarChange) {
    let defaultAvatarURL = AvatarUtils.getDefaultAvatarURL(user.id, user.discriminator);
    const tmpResult4 = AvatarUtils;
  } else {
    defaultAvatarURL = pendingAvatarSrc;
    if (pendingAvatarSrc == null) {
      defaultAvatarURL = tmp7;
    }
  }
  const obj3 = { accessibilityLabel: null, accessibilityValue: null, onPress: null, children: null };
  const obj2 = { userId: user.id, image: avatarChange };
  const tmpResult = RecentAvatarUtils;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.lqaIxI);
  obj3.accessibilityValue = UserProfileEditingAccessibilityUtils.getAvatarAccessibleValue(avatarChange, user.avatar);
  obj3.onPress = onPress.onPress;
  const obj4 = { shouldAnimate: tmp5, children: null };
  const tmpResult5 = UserProfileEditingAccessibilityUtils;
  const obj5 = { source: null, size: null };
  obj5.source = AvatarUtils.makeSource(defaultAvatarURL);
  obj5.size = native.AvatarSizes.XLARGE_72;
  obj4.children = jsx(native.Avatar, { source: null, size: null });
  obj3.children = <tmp10 shouldAnimate={tmp5}>{null}</tmp10>;
  return <tmp9 accessibilityLabel={null} accessibilityValue={null} onPress={null}>{null}</tmp9>;
});
let closure_6 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default tmp3;
export const TryItOutEditableTileAvatarButton = ReactCompilerGating.isReactCompilerEnabled() ? (function TryItOutEditableTileAvatarButton(arg0) {
  const cResult = c.c(6);
  ({ user, onPress } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function o() {
      return tryItOutChanges.getTryItOutChanges().tryItOutAvatar;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === onPress) {
      if (cResult[4] === user) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const tmp9 = <closure_6 user={user} avatarChange={stateFromStores} onPress={onPress} />;
  cResult[2] = stateFromStores;
  cResult[3] = onPress;
  cResult[4] = user;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  const tmpResult = initialize;
}) : (function TryItOutEditableTileAvatarButton(arg0) {
  ({ user, onPress } = arg0);
  const items = [UserProfileSettingsStore];
  return <closure_6 user={user} avatarChange={initialize.useStateFromStores(items, () => tryItOutChanges.getTryItOutChanges().tryItOutAvatar)} onPress={onPress} />;
});