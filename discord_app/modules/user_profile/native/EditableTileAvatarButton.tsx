// discord_app/modules/user_profile/native/EditableTileAvatarButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import SpinAnimationDefault from "SpinAnimation.tsx";
import UserProfileEditingAccessibilityUtils from "../UserProfileEditingAccessibilityUtils.tsx";
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditableTileAvatarButtonBase(arg0) {
      const cResult = c.c(32);
      ({ user, avatarChange, onPress, enableSpinAnimation } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function o() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      const GifAutoPlay = UserSettings.GifAutoPlay;
      let setting = !stateFromStores;
      if (!stateFromStores) {
        setting = GifAutoPlay.useSetting();
      }
      if (cResult[2] === avatarChange) {
        if (cResult[3] === setting) {
          if (cResult[4] === tmp4) {
            if (cResult[5] === onPress) {
              if (cResult[6] === user) {
                let tmp10 = cResult[7];
                let tmp11 = cResult[8];
                let tmp12 = cResult[9];
                let tmp13 = cResult[10];
                let tmp14 = cResult[11];
                let tmp15 = cResult[12];
                let tmp16 = cResult[13];
                let tmp17 = cResult[14];
              }
              if (cResult[19] === tmp10) {
                if (cResult[20] === tmp13) {
                  let tmp30 = cResult[21];
                }
                if (cResult[22] === tmp11) {
                  if (cResult[23] === tmp14) {
                    if (cResult[24] === tmp30) {
                      let tmp33 = cResult[25];
                    }
                    if (cResult[26] === tmp12) {
                      if (cResult[27] === tmp33) {
                        if (cResult[28] === tmp15) {
                          if (cResult[29] === tmp16) {
                            if (cResult[30] === tmp17) {
                              let tmp36 = cResult[31];
                            }
                            return tmp36;
                          }
                        }
                      }
                    }
                    const obj2 = {
                      accessibilityLabel: tmp15,
                      accessibilityValue: tmp16,
                      onPress: tmp17,
                      children: tmp33,
                    };
                    const tmp38 = (
                      <tmp12 accessibilityLabel={tmp15} accessibilityValue={tmp16} onPress={tmp17}>
                        {tmp33}
                      </tmp12>
                    );
                    cResult[26] = tmp12;
                    cResult[27] = tmp33;
                    cResult[28] = tmp15;
                    cResult[29] = tmp16;
                    cResult[30] = tmp17;
                    cResult[31] = tmp38;
                    tmp36 = tmp38;
                  }
                }
                const obj3 = { shouldAnimate: tmp14, children: tmp30 };
                const tmp35 = <tmp11 shouldAnimate={tmp14}>{tmp30}</tmp11>;
                cResult[22] = tmp11;
                cResult[23] = tmp14;
                cResult[24] = tmp30;
                cResult[25] = tmp35;
                tmp33 = tmp35;
              }
              const obj4 = { source: tmp13, size: native.AvatarSizes.XLARGE_72 };
              const tmp32 = <tmp10 source={tmp13} size={native.AvatarSizes.XLARGE_72} />;
              cResult[19] = tmp10;
              cResult[20] = tmp13;
              cResult[21] = tmp32;
              tmp30 = tmp32;
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
      const tmp22 = UserProfileEditableTileBaseDefault;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.lqaIxI);
        cResult[15] = stringResult;
        let tmp23 = stringResult;
      } else {
        tmp23 = cResult[15];
      }
      if (cResult[16] === avatarChange) {
        if (cResult[17] === user.avatar) {
          let tmp25 = cResult[18];
        }
        const tmp21Result = SpinAnimationDefault;
        let tmp28 = setting;
        if (setting) {
          tmp28 = tmp4;
        }
        const Avatar = native.Avatar;
        const source = AvatarUtils.makeSource(defaultAvatarURL);
        cResult[2] = avatarChange;
        cResult[3] = setting;
        cResult[4] = tmp4;
        cResult[5] = onPress;
        cResult[6] = user;
        cResult[7] = Avatar;
        cResult[8] = tmp21Result;
        cResult[9] = tmp22;
        cResult[10] = source;
        cResult[11] = tmp28;
        cResult[12] = tmp23;
        cResult[13] = tmp25;
        cResult[14] = onPress;
        tmp14 = tmp28;
        tmp17 = onPress;
        tmp16 = tmp25;
        tmp15 = tmp23;
        tmp13 = source;
        tmp12 = tmp22;
        tmp11 = tmp21Result;
        tmp10 = Avatar;
        const tmpResult7 = AvatarUtils;
      }
      const obj5 = { userId: user.id, image: avatarChange };
      const tmpResult5 = RecentAvatarUtils;
      const avatarAccessibleValue = UserProfileEditingAccessibilityUtils.getAvatarAccessibleValue(
        avatarChange,
        user.avatar,
      );
      cResult[16] = avatarChange;
      cResult[17] = user.avatar;
      cResult[18] = avatarAccessibleValue;
      tmp25 = avatarAccessibleValue;
      const tmpResult8 = UserProfileEditingAccessibilityUtils;
    }
  : function EditableTileAvatarButtonBase(onPress) {
      ({ user, avatarChange, enableSpinAnimation } = onPress);
      if (enableSpinAnimation === undefined) {
        enableSpinAnimation = false;
      }
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const GifAutoPlay = UserSettings.GifAutoPlay;
      let setting = !stateFromStores;
      if (!stateFromStores) {
        setting = GifAutoPlay.useSetting();
      }
      const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: avatarChange });
      const AVATAR_SIZE_MAP = native.AVATAR_SIZE_MAP;
      if (null === avatarChange) {
        let defaultAvatarURL = AvatarUtils.getDefaultAvatarURL(user.id, user.discriminator);
        const tmpResult4 = AvatarUtils;
      } else {
        defaultAvatarURL = pendingAvatarSrc;
        if (pendingAvatarSrc == null) {
          defaultAvatarURL = tmp6;
        }
      }
      const obj3 = { accessibilityLabel: null, accessibilityValue: null, onPress: null, children: null };
      const obj2 = { userId: user.id, image: avatarChange };
      const tmpResult = RecentAvatarUtils;
      const intl = util.intl;
      obj3.accessibilityLabel = intl.string(util.t.lqaIxI);
      obj3.accessibilityValue = UserProfileEditingAccessibilityUtils.getAvatarAccessibleValue(
        avatarChange,
        user.avatar,
      );
      obj3.onPress = onPress.onPress;
      const tmpResult5 = UserProfileEditingAccessibilityUtils;
      if (setting) {
        setting = enableSpinAnimation;
      }
      const obj4 = { shouldAnimate: setting, children: null };
      const obj5 = { source: null, size: null };
      obj5.source = AvatarUtils.makeSource(defaultAvatarURL);
      obj5.size = native.AvatarSizes.XLARGE_72;
      obj4.children = jsx(native.Avatar, { source: null, size: null });
      obj3.children = <tmp10 shouldAnimate={setting}>{null}</tmp10>;
      return (
        <tmp9 accessibilityLabel={null} accessibilityValue={null} onPress={null}>
          {null}
        </tmp9>
      );
    };
let closure_6 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileAvatarButton.tsx");

export default tmp3;
export const TryItOutEditableTileAvatarButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function TryItOutEditableTileAvatarButton(arg0) {
      const cResult = c.c(7);
      ({ user, onPress } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        const fn = function u() {
          const tryItOutAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
          let pendingAvatar = tryItOutAvatar;
          if (tryItOutAvatar == null) {
            pendingAvatar = UserProfileSettingsStore.getPendingChanges().pendingAvatar;
          }
          return { avatarChange: pendingAvatar, enableSpinAnimation: null == tryItOutAvatar };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
      ({ avatarChange, enableSpinAnimation } = stateFromStoresObject);
      if (cResult[2] === avatarChange) {
        if (cResult[3] === enableSpinAnimation) {
          if (cResult[4] === onPress) {
            if (cResult[5] === user) {
              let tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
      }
      const tmp9 = (
        <closure_6
          user={user}
          avatarChange={avatarChange}
          onPress={onPress}
          enableSpinAnimation={enableSpinAnimation}
        />
      );
      cResult[2] = avatarChange;
      cResult[3] = enableSpinAnimation;
      cResult[4] = onPress;
      cResult[5] = user;
      cResult[6] = tmp9;
      tmp8 = tmp9;
      const tmpResult = initialize;
    }
  : function TryItOutEditableTileAvatarButton(arg0) {
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
      return (
        <closure_6
          user={user}
          avatarChange={stateFromStoresObject.avatarChange}
          onPress={onPress}
          enableSpinAnimation={stateFromStoresObject.enableSpinAnimation}
        />
      );
    };
