// === Module 7860: DisplayProfile ===

// Module 7860 (DisplayProfile)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/user_profile/DisplayProfile.tsx");
class DisplayProfile {
  constructor(userId, guildId) {
    const obj = Object.create(new.target.prototype);
    obj.userId = userId.userId;
    guildId = undefined;
    if (guildId != null) {
      guildId = guildId.guildId;
    }
    obj.guildId = guildId;
    let banner;
    if (guildId != null) {
      banner = guildId.banner;
    }
    if (banner == null) {
      banner = userId.banner;
    }
    obj.banner = banner;
    let bio1;
    const bio = userId.bio;
    if (guildId != null) {
      bio1 = guildId.bio;
    }
    if (null == bio1) {
      bio1 = bio;
    }
    obj.bio = bio1;
    let pronouns1;
    const pronouns = userId.pronouns;
    if (guildId != null) {
      pronouns1 = guildId.pronouns;
    }
    if (null == pronouns1) {
      pronouns1 = pronouns;
    }
    obj.pronouns = pronouns1;
    obj.accentColor = userId.accentColor;
    let themeColors;
    if (guildId != null) {
      themeColors = guildId.themeColors;
    }
    if (themeColors == null) {
      themeColors = userId.themeColors;
    }
    obj.themeColors = themeColors;
    let profileEffect;
    if (guildId != null) {
      profileEffect = guildId.profileEffect;
    }
    if (profileEffect == null) {
      profileEffect = userId.profileEffect;
    }
    obj.profileEffect = profileEffect;
    let profileFrame;
    if (guildId != null) {
      profileFrame = guildId.profileFrame;
    }
    if (profileFrame == null) {
      profileFrame = userId.profileFrame;
    }
    obj.profileFrame = profileFrame;
    let prop;
    if (guildId != null) {
      prop = guildId.popoutAnimationParticleType;
    }
    if (prop == null) {
      prop = userId.popoutAnimationParticleType;
    }
    obj.popoutAnimationParticleType = prop;
    ({ fetchStartedAt: tmp.fetchStartedAt, fetchEndedAt: tmp.fetchEndedAt } = userId);
    obj._userProfile = userId;
    obj._guildMemberProfile = guildId;
    return obj;
  }
  hasThemeColors() {
    const themeColors = this.themeColors;
    let first;
    if (themeColors != null) {
      first = themeColors[0];
    }
    let tmp2 = null != first;
    if (!tmp2) {
      const themeColors2 = this.themeColors;
      let tmp3;
      if (themeColors2 != null) {
        tmp3 = themeColors2[1];
      }
      tmp2 = null != tmp3;
    }
    return tmp2;
  }
  hasPremiumCustomization() {
    const self = this;
    const hasThemeColorsResult = this.isUsingGuildMemberBanner() || self.isUsingGuildMemberBio() || null != self.banner || self.hasThemeColors() || null != self.popoutAnimationParticleType;
    return hasThemeColorsResult;
  }
  isUsingGuildMemberBanner() {
    const _guildMemberProfile = this._guildMemberProfile;
    let banner;
    if (_guildMemberProfile != null) {
      banner = _guildMemberProfile.banner;
    }
    return null != banner;
  }
  isUsingGuildMemberBio() {
    const _guildMemberProfile = this._guildMemberProfile;
    let bio;
    if (_guildMemberProfile != null) {
      bio = _guildMemberProfile.bio;
    }
    let tmp2 = null != bio;
    if (tmp2) {
      const _guildMemberProfile2 = this._guildMemberProfile;
      let bio1;
      if (_guildMemberProfile2 != null) {
        bio1 = _guildMemberProfile2.bio;
      }
      tmp2 = "" !== bio1;
    }
    return tmp2;
  }
  isUsingGuildMemberPronouns() {
    const _guildMemberProfile = this._guildMemberProfile;
    let pronouns;
    if (_guildMemberProfile != null) {
      pronouns = _guildMemberProfile.pronouns;
    }
    let tmp2 = null != pronouns;
    if (tmp2) {
      const _guildMemberProfile2 = this._guildMemberProfile;
      let pronouns1;
      if (_guildMemberProfile2 != null) {
        pronouns1 = _guildMemberProfile2.pronouns;
      }
      tmp2 = "" !== pronouns1;
    }
    return tmp2;
  }
  getBannerURL(arg0) {
    let canAnimate;
    const self = this;
    ({ canAnimate, size } = arg0);
    if (null != this.guildId) {
      let guildMemberBannerURL;
      if (self.isUsingGuildMemberBanner()) {
        const obj2 = { id: null, guildId: null, banner: null, canAnimate, size };
        ({ userId: obj4.id, guildId: obj4.guildId, banner: obj4.banner } = self);
        const obj3 = AvatarUtils;
        guildMemberBannerURL = obj3.getGuildMemberBannerURL(obj2);
      }
      return guildMemberBannerURL;
    }
    const obj = AvatarUtils;
    const obj6 = { id: self.userId, banner: self.banner, canAnimate, size };
    guildMemberBannerURL = obj.getUserBannerURL(obj6);
  }
  getPreviewBanner(pendingBanner, canAnimate, arg2) {
    let bannerURL;
    let num = arg2;
    if (arg2 === undefined) {
      num = 480;
    }
    if (null != pendingBanner) {
      let imageUri;
      if (canAnimate) {
        imageUri = pendingBanner.imageUri;
      } else {
        imageUri = pendingBanner.staticImageUri;
        if (imageUri == null) {
          imageUri = pendingBanner.imageUri;
        }
      }
      bannerURL = imageUri;
    } else {
      const self = this;
      if (null === pendingBanner) {
        let userBannerURL = null;
        if (self.isUsingGuildMemberBanner()) {
          const obj3 = { id: self.userId, banner: self._userProfile.banner, canAnimate, size: num };
          const obj2 = AvatarUtils;
          userBannerURL = obj2.getUserBannerURL(obj3);
        }
        bannerURL = userBannerURL;
      } else {
        const obj = { canAnimate, size: num };
        bannerURL = self.getBannerURL(obj);
      }
    }
    return bannerURL;
  }
  getPreviewBio(pendingBio) {
    let bio;
    const _guildMemberProfile = this._guildMemberProfile;
    const obj = { pendingValue: pendingBio, userValue: this._userProfile.bio, guildValue: bio, guildId: this.guildId };
    bio = undefined;
    const getProfilePreviewValue = ProfileCustomizationUtils.getProfilePreviewValue;
    ProfileCustomizationUtils;
    if (_guildMemberProfile != null) {
      bio = _guildMemberProfile.bio;
    }
    return getProfilePreviewValue(obj);
  }
  getPreviewPronouns(pendingValue) {
    let pronouns;
    const _guildMemberProfile = this._guildMemberProfile;
    const obj = { pendingValue, userValue: this._userProfile.pronouns, guildValue: pronouns, guildId: this.guildId };
    pronouns = undefined;
    const getProfilePreviewValue = ProfileCustomizationUtils.getProfilePreviewValue;
    ProfileCustomizationUtils;
    if (_guildMemberProfile != null) {
      pronouns = _guildMemberProfile.pronouns;
    }
    return getProfilePreviewValue(obj);
  }
  getPreviewThemeColors(pendingThemeColors) {
    let tmp3;
    let first;
    if (pendingThemeColors != null) {
      first = pendingThemeColors[0];
    }
    if (null == first) {
      let themeColors;
      const self = this;
      if (undefined !== pendingThemeColors) {
        themeColors = self._userProfile.themeColors;
      } else {
        themeColors = self.themeColors;
      }
      tmp3 = themeColors;
    } else {
      tmp3 = pendingThemeColors;
    }
    return tmp3;
  }
  getBadges() {
    let badges = this._userProfile.badges;
    if (badges == null) {
      badges = [];
    }
    const items = [...badges];
    const _guildMemberProfile = this._guildMemberProfile;
    let badges1;
    if (_guildMemberProfile != null) {
      badges1 = _guildMemberProfile.badges;
    }
    if (badges1 == null) {
      badges1 = [];
    }
    HermesBuiltin.arraySpread(items, badges1, tmp2);
    return items;
  }
  getLegacyUsername() {
    return this._userProfile.legacyUsername;
  }
}
const prototype = DisplayProfile.prototype;
Object.defineProperty(prototype, "premiumSince", {
  get: function premiumSince() {
    return this._userProfile.premiumSince;
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumGuildSince", {
  get: function premiumGuildSince() {
    return this._userProfile.premiumGuildSince;
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumType", {
  get: function premiumType() {
    return this._userProfile.premiumType;
  },
  set: undefined
});
Object.defineProperty(prototype, "private", {
  get: function() {
    return this._userProfile.private;
  },
  set: undefined
});
Object.defineProperty(prototype, "widgets", {
  get: function widgets() {
    return this._userProfile.widgets;
  },
  set: undefined
});
Object.defineProperty(prototype, "gameWidgets", {
  get: function gameWidgets() {
    const widgets = this._userProfile.widgets;
    let found;
    if (widgets != null) {
      found = widgets.filter(require("UserProfileGameWidgetTypes").isGameWidget);
    }
    return found;
  },
  set: undefined
});
Object.defineProperty(prototype, "primaryColor", {
  get: function primaryColor() {
    const themeColors = this.themeColors;
    let first;
    if (themeColors != null) {
      first = themeColors[0];
    }
    if (first == null) {
      first = this.accentColor;
    }
    return first;
  },
  set: undefined
});
Object.defineProperty(prototype, "canUsePremiumProfileCustomization", {
  get: function canUsePremiumProfileCustomization() {
    const obj = require("PremiumUtils");
    return obj.isPremiumAtLeast(this.premiumType, PremiumTypes.TIER_2);
  },
  set: undefined
});
Object.defineProperty(prototype, "canEditThemes", {
  get: function canEditThemes() {
    return this.canUsePremiumProfileCustomization;
  },
  set: undefined
});
Object.defineProperty(prototype, "application", {
  get: function application() {
    return this._userProfile.application;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLoaded", {
  get: function isLoaded() {
    const self = this;
    let tmp = undefined !== this._userProfile;
    if (tmp) {
      tmp = null == self.guildId || undefined !== self._guildMemberProfile;
    }
    return tmp;
  },
  set: undefined
});

export default DisplayProfile;