// discord_app/modules/user_profile/DisplayProfile.tsx
import { PremiumTypes } from "GuildFeatures";

const result = require("getPremiumPlanItem").fileFinishedImporting("modules/user_profile/DisplayProfile.tsx");
class DisplayProfile {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.userId = global.userId;
    guildId = undefined;
    if (require != null) {
      guildId = require.guildId;
    }
    obj.guildId = guildId;
    banner = undefined;
    if (require != null) {
      banner = require.banner;
    }
    if (banner == null) {
      banner = global.banner;
    }
    obj.banner = banner;
    bio = undefined;
    if (require != null) {
      bio = require.bio;
    }
    if (null == bio) {
      bio = global.bio;
    } else {
      str = "";
    }
    obj.bio = bio;
    pronouns = undefined;
    if (require != null) {
      pronouns = require.pronouns;
    }
    if (null == pronouns) {
      pronouns = global.pronouns;
    } else {
      str2 = "";
    }
    obj.pronouns = pronouns;
    obj.accentColor = global.accentColor;
    themeColors = undefined;
    if (require != null) {
      themeColors = require.themeColors;
    }
    if (themeColors == null) {
      themeColors = global.themeColors;
    }
    obj.themeColors = themeColors;
    profileEffect = undefined;
    if (require != null) {
      profileEffect = require.profileEffect;
    }
    if (profileEffect == null) {
      profileEffect = global.profileEffect;
    }
    obj.profileEffect = profileEffect;
    profileFrame = undefined;
    if (require != null) {
      profileFrame = require.profileFrame;
    }
    if (profileFrame == null) {
      profileFrame = global.profileFrame;
    }
    obj.profileFrame = profileFrame;
    prop = undefined;
    if (require != null) {
      prop = require.popoutAnimationParticleType;
    }
    if (prop == null) {
      prop = global.popoutAnimationParticleType;
    }
    obj.popoutAnimationParticleType = prop;
    ({ fetchStartedAt: tmp.fetchStartedAt, fetchEndedAt: tmp.fetchEndedAt } = global);
    obj._userProfile = global;
    obj._guildMemberProfile = require;
    return obj;
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
  get: function private() {
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
      found = widgets.filter(require("UserProfileGameWidgetTypes.tsx") /* items */.isGameWidget);
    }
    return found;
  },
  set: undefined
});
Object.defineProperty(prototype, "primaryColor", {
  get: function primaryColor(arg0) {
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
    return require("../../utils/PremiumUtils.tsx").isPremiumAtLeast(this.premiumType, PremiumTypes.TIER_2);
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
  get: function application(channelId, arg1, action) {
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
      const tmp3 = null == self.guildId || undefined !== self._guildMemberProfile;
    }
    return tmp;
  },
  set: undefined
});
prototype["hasThemeColors"] = function hasThemeColors() {
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
};
prototype["hasPremiumCustomization"] = function hasPremiumCustomization() {
  const self = this;
  let hasThemeColorsResult = this.isUsingGuildMemberBanner() || self.isUsingGuildMemberBio();
  if (!hasThemeColorsResult) {
    hasThemeColorsResult = null != self.banner;
  }
  if (!hasThemeColorsResult) {
    hasThemeColorsResult = self.hasThemeColors();
  }
  if (!hasThemeColorsResult) {
    hasThemeColorsResult = null != self.popoutAnimationParticleType;
  }
  return hasThemeColorsResult;
};
prototype["isUsingGuildMemberBanner"] = function isUsingGuildMemberBanner() {
  const _guildMemberProfile = this._guildMemberProfile;
  let banner;
  if (_guildMemberProfile != null) {
    banner = _guildMemberProfile.banner;
  }
  return null != banner;
};
prototype["isUsingGuildMemberBio"] = function isUsingGuildMemberBio() {
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
};
prototype["isUsingGuildMemberPronouns"] = function isUsingGuildMemberPronouns() {
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
};
prototype["getBannerURL"] = function getBannerURL(arg0) {
  let canAnimate;
  let size;
  const self = this;
  ({ canAnimate, size } = arg0);
  if (null != this.guildId) {
    if (self.isUsingGuildMemberBanner()) {
      let obj = { id: null, guildId: null, banner: null, canAnimate: null, size: null };
      ({ userId: obj4[0], guildId: obj4[1], banner: obj4[2] } = self);
      obj[3] = canAnimate;
      obj[4] = size;
      let guildMemberBannerURL = require("../../utils/AvatarUtils.tsx") /* getAvatarURL */.getGuildMemberBannerURL(obj);
      const obj3 = require("../../utils/AvatarUtils.tsx") /* getAvatarURL */;
    }
    return guildMemberBannerURL;
  }
  obj = require("../../utils/AvatarUtils.tsx") /* getAvatarURL */;
  obj = { id: self.userId, banner: self.banner, canAnimate, size };
  guildMemberBannerURL = obj.getUserBannerURL(obj);
};
prototype["getPreviewBanner"] = function getPreviewBanner(pendingBanner, arg1, arg2) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 480;
  }
  if (null != pendingBanner) {
    return pendingBanner;
  } else {
    let self = this;
    if (null === pendingBanner) {
      let userBannerURL = null;
      if (self.isUsingGuildMemberBanner()) {
        let obj = { id: null, banner: null, canAnimate: null, size: null };
        obj[0] = self.userId;
        self = self._userProfile.banner;
        obj[1] = self;
        obj[2] = arg1;
        obj[3] = num;
        userBannerURL = require("../../utils/AvatarUtils.tsx") /* getAvatarURL */.getUserBannerURL(obj);
        const obj2 = require("../../utils/AvatarUtils.tsx") /* getAvatarURL */;
      }
      let bannerURL = userBannerURL;
    } else {
      obj = { canAnimate: null, size: null };
      obj[0] = arg1;
      obj[1] = num;
      bannerURL = self.getBannerURL(obj);
    }
  }
};
prototype["getPreviewBio"] = function getPreviewBio(pendingBio) {
  let obj = require("../profile_customization/ProfileCustomizationUtils.tsx") /* useAvatarsWithGuilds */;
  obj = { pendingValue: pendingBio, userValue: this._userProfile.bio, guildValue: null, guildId: null };
  const _guildMemberProfile = this._guildMemberProfile;
  let bio;
  if (_guildMemberProfile != null) {
    bio = _guildMemberProfile.bio;
  }
  obj[2] = bio;
  obj[3] = this.guildId;
  return obj.getProfilePreviewValue(obj);
};
prototype["getPreviewPronouns"] = function getPreviewPronouns(pendingValue) {
  let obj = require("../profile_customization/ProfileCustomizationUtils.tsx") /* useAvatarsWithGuilds */;
  obj = { pendingValue, userValue: this._userProfile.pronouns, guildValue: null, guildId: null };
  const _guildMemberProfile = this._guildMemberProfile;
  let pronouns;
  if (_guildMemberProfile != null) {
    pronouns = _guildMemberProfile.pronouns;
  }
  obj[2] = pronouns;
  obj[3] = this.guildId;
  return obj.getProfilePreviewValue(obj);
};
prototype["getPreviewThemeColors"] = function getPreviewThemeColors(pendingThemeColors) {
  let _userProfile;
  let themeColors;
  let first;
  if (pendingThemeColors != null) {
    first = pendingThemeColors[0];
  }
  if (null != first) {
    let tmp2;
    if (pendingThemeColors != null) {
      tmp2 = pendingThemeColors[1];
    }
    if (null != tmp2) {
      return pendingThemeColors;
    }
  }
  _userProfile = this;
  if (undefined !== pendingThemeColors) {
    ({ _userProfile, themeColors } = _userProfile);
  } else {
    themeColors = _userProfile.themeColors;
  }
};
prototype["getBadges"] = function getBadges() {
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
  HermesBuiltin.arraySpread(badges1, tmp);
  return items;
};
prototype["getLegacyUsername"] = function getLegacyUsername() {
  return this._userProfile.legacyUsername;
};

export default DisplayProfile;