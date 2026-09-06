// discord_app/modules/user_profile/UserProfileSettingsActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import isEqualDefault from "../../../_runtime/04679_isEqual.js";
import guildHasTag from "../guild_tag/GuildTagUtils.tsx";
import closure_3 from "../../stores/GuildMemberStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import closure_5 from "UserProfileStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileSettingsActionCreators.tsx");

export const setPendingChanges = function setPendingChanges(closure_1) {
  let guildId = closure_1.guildId;
  const merged = Object.assign(closure_1, Object.create(null));
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    userProfile = userProfile.getUserProfile(currentUser.id);
    if (null != guildId) {
      userProfile = obj5.getGuildMemberProfile(currentUser.id, guildId);
    }
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, currentUser.id);
    }
    let obj = {};
    if ("globalName" in merged) {
      if (merged.globalName === currentUser.globalName) {
        obj.pendingGlobalName = undefined;
      } else {
        obj.pendingGlobalName = merged.globalName;
      }
    }
    if ("nickname" in merged) {
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      if (merged.nickname === nick) {
        obj.pendingNickname = undefined;
      } else {
        if ("" === merged.nickname) {
          let nick1;
          if (member != null) {
            nick1 = member.nick;
          }
        }
        obj.pendingNickname = merged.nickname;
      }
    }
    if ("displayNameStyles" in merged) {
      let displayNameStyles = merged.displayNameStyles;
      if (null != guildId) {
        displayNameStyles = undefined;
        if (member != null) {
          displayNameStyles = member.displayNameStyles;
        }
        let displayNameStyles1 = displayNameStyles;
      } else {
        displayNameStyles1 = currentUser.displayNameStyles;
      }
      let tmp13 = displayNameStyles;
      if (displayNameStyles == null) {
        tmp13 = null;
      }
      if (displayNameStyles1 == null) {
        displayNameStyles1 = null;
      }
      obj.pendingDisplayNameStyles = isEqualDefault(tmp13, displayNameStyles1) ? undefined : displayNameStyles;
      const tmp12 = isEqualDefault;
    }
    if ("customTypingIndicatorStyle" in merged) {
      const customTypingIndicatorStyle = merged.customTypingIndicatorStyle;
      let tmp17 = customTypingIndicatorStyle;
      if (customTypingIndicatorStyle == null) {
        tmp17 = null;
      }
      let typingIndicatorStyle = currentUser.typingIndicatorStyle;
      if (typingIndicatorStyle == null) {
        typingIndicatorStyle = null;
      }
      obj.pendingCustomTypingIndicatorStyle = isEqualDefault(tmp17, typingIndicatorStyle)
        ? undefined
        : customTypingIndicatorStyle;
      const tmp16 = isEqualDefault;
    }
    if ("pronouns" in merged) {
      let pronouns;
      if (userProfile != null) {
        pronouns = userProfile.pronouns;
      }
      if (merged.pronouns === pronouns) {
        obj.pendingPronouns = undefined;
      } else {
        obj.pendingPronouns = merged.pronouns;
      }
    }
    if ("avatar" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const avatar2 = merged.avatar;
          let imageUri;
          if (avatar2 != null) {
            imageUri = avatar2.imageUri;
          }
        }
        obj.pendingAvatar = merged.avatar;
      } else {
        let avatar = merged.avatar;
        let imageUri1;
        if (avatar != null) {
          imageUri1 = avatar.imageUri;
        }
        avatar = undefined;
        if (member != null) {
          avatar = member.avatar;
        }
      }
      obj.pendingAvatar = undefined;
    }
    if ("avatarDecoration" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const avatarDecoration3 = merged.avatarDecoration;
          let skuId;
          if (avatarDecoration3 != null) {
            skuId = avatarDecoration3.skuId;
          }
          const avatarDecoration4 = currentUser.avatarDecoration;
          let skuId1;
          if (avatarDecoration4 != null) {
            skuId1 = avatarDecoration4.skuId;
          }
        }
        obj.pendingAvatarDecoration = merged.avatarDecoration;
      } else {
        const avatarDecoration = merged.avatarDecoration;
        let skuId2;
        if (avatarDecoration != null) {
          skuId2 = avatarDecoration.skuId;
        }
        let skuId3;
        if (member != null) {
          const avatarDecoration2 = member.avatarDecoration;
          if (avatarDecoration2 != null) {
            skuId3 = avatarDecoration2.skuId;
          }
        }
      }
      obj.pendingAvatarDecoration = undefined;
    }
    if ("nameplate" in merged) {
      if (null == guildId) {
        if (null == guildId) {
          const nameplate3 = merged.nameplate;
          let skuId4;
          if (nameplate3 != null) {
            skuId4 = nameplate3.skuId;
          }
          const collectibles2 = currentUser.collectibles;
          let skuId5;
          if (collectibles2 != null) {
            const nameplate4 = collectibles2.nameplate;
            if (nameplate4 != null) {
              skuId5 = nameplate4.skuId;
            }
          }
        }
        obj.pendingNameplate = merged.nameplate;
      } else {
        const nameplate = merged.nameplate;
        let skuId6;
        if (nameplate != null) {
          skuId6 = nameplate.skuId;
        }
        let skuId7;
        if (member != null) {
          const collectibles = member.collectibles;
          if (collectibles != null) {
            const nameplate2 = collectibles.nameplate;
            if (nameplate2 != null) {
              skuId7 = nameplate2.skuId;
            }
          }
        }
      }
      obj.pendingNameplate = undefined;
    }
    if ("profileEffect" in merged) {
      const profileEffect = merged.profileEffect;
      let skuId8;
      if (profileEffect != null) {
        skuId8 = profileEffect.skuId;
      }
      let skuId9;
      if (userProfile != null) {
        const profileEffect2 = userProfile.profileEffect;
        if (profileEffect2 != null) {
          skuId9 = profileEffect2.skuId;
        }
      }
      if (skuId8 === skuId9) {
        obj.pendingProfileEffect = undefined;
      } else {
        obj.pendingProfileEffect = merged.profileEffect;
      }
    }
    if ("profileFrame" in merged) {
      const profileFrame = merged.profileFrame;
      let skuId10;
      if (profileFrame != null) {
        skuId10 = profileFrame.skuId;
      }
      let skuId11;
      if (userProfile != null) {
        const profileFrame2 = userProfile.profileFrame;
        if (profileFrame2 != null) {
          skuId11 = profileFrame2.skuId;
        }
      }
      if (skuId10 === skuId11) {
        obj.pendingProfileFrame = undefined;
      } else {
        obj.pendingProfileFrame = merged.profileFrame;
      }
    }
    if ("banner" in merged) {
      let banner = merged.banner;
      let imageUri2;
      if (banner != null) {
        imageUri2 = banner.imageUri;
      }
      if (imageUri2 == null) {
        imageUri2 = null;
      }
      if (null != guildId) {
        banner = undefined;
        if (userProfile != null) {
          banner = userProfile.banner;
        }
        if (banner == null) {
          banner = null;
        }
        let banner1 = banner;
      } else {
        banner1 = currentUser.banner;
        if (banner1 == null) {
          banner1 = null;
        }
      }
      let banner2;
      if (imageUri2 !== banner1) {
        banner2 = merged.banner;
      }
      obj.pendingBanner = banner2;
    }
    if ("accentColor" in merged) {
      let accentColor = merged.accentColor;
      if (accentColor == null) {
        accentColor = null;
      }
      let accentColor1;
      if (userProfile != null) {
        accentColor1 = userProfile.accentColor;
      }
      if (accentColor1 == null) {
        accentColor1 = null;
      }
      let tmp41;
      if (accentColor !== accentColor1) {
        tmp41 = accentColor;
      }
      obj.pendingAccentColor = tmp41;
    }
    if ("themeColors" in merged) {
      if (null != guildId) {
        if (null != merged.themeColors) {
          if (null == merged.themeColors[0]) {
            let tmp42 = null;
          }
          let themeColors;
          if (userProfile != null) {
            themeColors = userProfile.themeColors;
          }
          if (themeColors == null) {
            themeColors = null;
          }
          if (isEqualDefault(tmp42, themeColors)) {
            obj.pendingThemeColors = undefined;
          } else {
            obj.pendingThemeColors = merged.themeColors;
          }
        }
      }
      let themeColors1 = merged.themeColors;
      if (themeColors1 == null) {
        themeColors1 = null;
      }
      tmp42 = themeColors1;
    }
    if ("bio" in merged) {
      let bio;
      if (userProfile != null) {
        bio = userProfile.bio;
      }
      if (merged.bio === bio) {
        obj.pendingBio = undefined;
      } else {
        obj.pendingBio = merged.bio;
      }
    }
    if ("primaryGuildId" in merged) {
      guildId = guildHasTag.getUserPrimaryGuild(currentUser.primaryGuild).guildId;
      if (guildId == null) {
        guildId = null;
      }
      if (merged.primaryGuildId === guildId) {
        obj.pendingPrimaryGuildId = undefined;
      } else {
        obj.pendingPrimaryGuildId = merged.primaryGuildId;
      }
      const obj2 = guildHasTag;
    }
    if ("legacyUsernameDisabled" in merged) {
      obj.pendingLegacyUsernameDisabled = merged.legacyUsernameDisabled;
    }
    obj = { type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", guildId: null };
    obj[1] = guildId;
    const merged1 = Object.assign(obj);
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
    obj5 = userProfile;
  }
};
