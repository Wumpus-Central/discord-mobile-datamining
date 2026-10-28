// === Module 5031: HexagonCampaignUtils ===

// Module 5031 (HexagonCampaignUtils)
import PerksStateUtils from "PerksStateUtils" /* 1395 */;
import user from "user" /* 1397 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import DisplayNameFont from "DisplayNameFont" /* 1409 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import size from "module_2" /* 2 */;

({ HEXAGON_CAMPAIGN_CLIENT_THEME_PRESET_IDS: c2, HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c3, HEXAGON_CAMPAIGN_END_AT_MS: closure_4, HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty, HEXAGON_CAMPAIGN_PERK_MINIMUM_PREMIUM_TYPE: metroRequire, HEXAGON_CAMPAIGN_PERK_TO_PERK: closure_7, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: closure_8, HexagonCampaignPerkAvailability: closure_9 } = HexagonCampaignConstants);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignUtils.tsx");

export const getHexagonCampaignPerkCutoffMs = function getHexagonCampaignPerkCutoffMs(item, stateFromStores) {
  if (null != stateFromStores) {
    if (obj.isPremiumAtLeast(stateFromStores, dependencyMap[item])) {
      let tmp5 = closure_1_8;
    }
    return tmp5;
  }
  tmp5 = hasOwnProperty;
};
export const isHexagonCampaignTakeoverOver = function isHexagonCampaignTakeoverOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= React4;
};
export const isHexagonCampaignOver = function isHexagonCampaignOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= closure_1_8;
};
export const isHexagonCampaignPerkExpired = function isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg2) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null != premiumType) {
    if (obj.isPremiumAtLeast(premiumType, dependencyMap[CLIENT_THEME])) {
      let tmp7 = closure_1_8;
    }
    return timestamp >= tmp7;
  }
  tmp7 = hasOwnProperty;
};
export const isHexagonCampaignClientThemePreset = function isHexagonCampaignClientThemePreset(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
};
export const isHexagonCampaignPerkPremiumOnly = function isHexagonCampaignPerkPremiumOnly(APP_ICON) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (timestamp === undefined) {
    const _Date2 = Date;
    timestamp = Date.now();
  }
  return timestamp >= hasOwnProperty;
};
export const hasHexagonCampaignDisplayNameFont = function hasHexagonCampaignDisplayNameFont(displayNameStyles) {
  let fontId;
  if (displayNameStyles != null) {
    fontId = displayNameStyles.fontId;
  }
  return fontId === React3;
};
export const isHexagonCampaignDisplayNameStyle = function isHexagonCampaignDisplayNameStyle(displayNameStyles) {
  let tmp2 = displayNameStyles.fontId === React3;
  if (tmp2) {
    tmp2 = tmp === DisplayNameEffect.DisplayNameEffect.SOLID;
  }
  if (tmp2) {
    tmp2 = 0 === displayNameStyles.colors.length;
  }
  return tmp2;
};
export const getHexagonCampaignRestoredDisplayNameStyles = function getHexagonCampaignRestoredDisplayNameStyles(canUsePremiumProfileCustomization) {
  ({ currentDisplayNameStyles, previousDisplayNameStyles } = canUsePremiumProfileCustomization);
  if (canUsePremiumProfileCustomization.canUsePremiumProfileCustomization) {
    if (null != currentDisplayNameStyles) {
      const obj = {};
      const merged = Object.assign(currentDisplayNameStyles);
      let fontId;
      if (previousDisplayNameStyles != null) {
        fontId = previousDisplayNameStyles.fontId;
      }
      if (fontId == null) {
        fontId = DisplayNameFont.DisplayNameFont.DEFAULT;
      }
      obj.fontId = fontId;
      if (obj.fontId === DisplayNameFont.DisplayNameFont.DEFAULT) {
        if (obj.effectId === DisplayNameEffect.DisplayNameEffect.SOLID) {
          let tmp7 = null;
        }
        return tmp7;
      }
      tmp7 = obj;
    }
  }
  return null;
};
export const getHexagonCampaignPerkAvailability = function getHexagonCampaignPerkAvailability(arg0) {
  ({ premiumType, now } = arg0);
  ({ perk, isCampaignEnabled } = arg0);
  if (now === undefined) {
    const _Date = Date;
    now = Date.now();
  }
  if (isCampaignEnabled) {
    let timestamp = now;
    if (now === undefined) {
      const _Date2 = Date;
      timestamp = Date.now();
    }
    let tmp5 = closure_1_8;
    if (timestamp < closure_1_8) {
      if (!tmp2) {
        const _Date3 = Date;
        now = Date.now();
      }
      if (null == premiumType) {
        tmp5 = hasOwnProperty;
      } else {
        PremiumTypeUtils;
      }
      if (now >= tmp5) {
        let HIDDEN = constants.LOCKED;
      } else {
        HIDDEN = constants.SELECTABLE;
      }
    }
    return HIDDEN;
  }
  HIDDEN = constants.HIDDEN;
};
export const isEnrolledInHexagonCampaign = function isEnrolledInHexagonCampaign(currentUser, CLIENT_THEME) {
  let perks;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  const perkSource = PerksStateUtils.getPerkSource(perks, dependencyMap2[CLIENT_THEME]);
  let hasItem = null != perkSource;
  if (hasItem) {
    hasItem = perkSource.includes(user.PerkSource.SOURCE_HEXAGON_CAMPAIGN);
  }
  return hasItem;
};
export const hasPerkOnlyFromHexagonCampaign = function hasPerkOnlyFromHexagonCampaign(currentUser, APP_ICON) {
  let perks;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  const perkSource = PerksStateUtils.getPerkSource(perks, dependencyMap2[APP_ICON]);
  let everyResult = null != perkSource;
  if (everyResult) {
    everyResult = perkSource.length > 0;
  }
  if (everyResult) {
    everyResult = perkSource.every((item) => item === user.PerkSource.SOURCE_HEXAGON_CAMPAIGN);
  }
  return everyResult;
};