// discord_app/modules/hexagon_campaign/HexagonCampaignUtils.tsx
import PerksStateUtils from "../premium/perks_state/PerksStateUtils.tsx";
import DisplayNameFont from "../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import DisplayNameEffect from "../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import AppIconTypes from "../app_icons/AppIconTypes.tsx";
import QuestHomeHeroFeatures from "../../../discord_common/js/shared/shared-constants/QuestHomeHeroFeatures.tsx";
import HexagonCampaignConstants from "HexagonCampaignConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({
  HEXAGON_CAMPAIGN_CLIENT_THEME_PRESET_IDS: c2,
  HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c3,
  HEXAGON_CAMPAIGN_END_AT_MS: closure_4,
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty,
  HEXAGON_CAMPAIGN_PERK_MINIMUM_PREMIUM_TYPE: closure_6,
  HEXAGON_CAMPAIGN_PERK_TO_PERK: metroImportDefault,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: closure_8,
  HEXAGON_CAMPAIGN_QUEST_HOME_HERO_ID: closure_9,
  HexagonCampaignPerkAvailability: closure_10,
} = HexagonCampaignConstants);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignUtils.tsx");

export function getHexagonCampaignPerkCutoffMs(item, stateFromStores) {
  if (null != stateFromStores) {
    if (obj.isPremiumAtLeast(stateFromStores, dependencyMap[item])) {
      let tmp5 = React5;
    }
    return tmp5;
  }
  tmp5 = hasOwnProperty;
}
export function isHexagonCampaignTakeoverOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= React4;
}
export function isHexagonCampaignOver() {
  let timestamp = arg0;
  if (arg0 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  return timestamp >= React5;
}
export function isHexagonCampaignPerkExpired(CLIENT_THEME, premiumType, arg2) {
  let timestamp = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (null != premiumType) {
    if (obj.isPremiumAtLeast(premiumType, dependencyMap[CLIENT_THEME])) {
      let tmp7 = React5;
    }
    return timestamp >= tmp7;
  }
  tmp7 = hasOwnProperty;
}
export function isHexagonCampaignClientThemePreset(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = set.has(id);
  }
  return hasItem;
}
export function isHexagonCampaignPerkPremiumOnly(APP_ICON) {
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
}
export function isHexagonCampaignAppIcon(id) {
  return id === AppIconTypes.LimitedTimeAppIconIds.HEXAGON;
}
export function hasHexagonCampaignDisplayNameFont(displayNameStyles) {
  let fontId;
  if (displayNameStyles != null) {
    fontId = displayNameStyles.fontId;
  }
  return fontId === React3;
}
export function isHexagonCampaignDisplayNameStyle(displayNameStyles) {
  let tmp2 = displayNameStyles.fontId === React3;
  if (tmp2) {
    tmp2 = tmp === DisplayNameEffect.DisplayNameEffect.SOLID;
  }
  if (tmp2) {
    tmp2 = 0 === displayNameStyles.colors.length;
  }
  return tmp2;
}
export function getHexagonCampaignRestoredDisplayNameStyles(canUsePremiumProfileCustomization) {
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
}
export function getHexagonCampaignPerkAvailability(arg0) {
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
    let tmp5 = React5;
    if (timestamp < React5) {
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
}
export function isEnrolledInHexagonCampaign(currentUser, CLIENT_THEME) {
  let perks;
  if (currentUser != null) {
    perks = currentUser.perks;
  }
  const perkSource = PerksStateUtils.getPerkSource(perks, metroImportDefault[CLIENT_THEME]);
  let hasItem = null != perkSource;
  if (hasItem) {
    hasItem = perkSource.includes(user.PerkSource.SOURCE_HEXAGON_CAMPAIGN);
  }
  return hasItem;
}
export function isHexagonCampaignHero(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = id.id === React6;
  }
  if (hasItem) {
    const features = id.features;
    hasItem = features.includes(QuestHomeHeroFeatures.QuestHomeHeroFeatures.CUSTOM_INTRO_CARD);
  }
  return hasItem;
}
