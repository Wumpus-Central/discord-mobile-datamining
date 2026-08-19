// discord_app/modules/guild_boosting/GuildBoostingMarketingConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import GuildFeatures from "../premium/PremiumConstants.tsx";
import getGuildTierFromGuild from "../../utils/GuildBoostingUtils.tsx";
import ME from "../../Constants.tsx";

const BoostedGuildTiers = ME.BoostedGuildTiers;
let closure_3 = ME.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
const BoostedGuildFeatures = GuildFeatures.BoostedGuildFeatures;
let obj = {
  perkIcon: getGuildTierFromGuild.PerkIcons.EMOJI,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji });
  }
};
const items = [obj, , , ];
obj = {
  perkIcon: getGuildTierFromGuild.PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t["v+MIfo"], { numSoundboardSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.soundboardSounds });
  },
  isNew: true
};
items[1] = obj;
items[2] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.ANIMATED,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.PbAyub);
  }
};
items[3] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.AUDIO,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["WH+OeI"]);
  }
};
obj[1] = items;
const items1 = [obj, , ];
const obj3 = { tier: BoostedGuildTiers.TIER_2, perks: null };
const items2 = [
  {
    perkIcon: getGuildTierFromGuild.PerkIcons.STREAM,
    getCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.y4ft4D);
    }
  },
,
,

];
items2[1] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.UPLOAD,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.M6qV8j);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
items2[2] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6PV6Qc"]);
  }
};
items2[3] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1a5rjl"]);
  }
};
obj3[1] = items2;
items1[1] = obj3;
const obj8 = { tier: BoostedGuildTiers.TIER_3, perks: null };
const items3 = [
  {
    perkIcon: getGuildTierFromGuild.PerkIcons.VANITY,
    getCopy() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.adNGjW);
    }
  },
,
,
,

];
items3[1] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.UPLOAD,
  getCopy() {
    const intl = getSystemLocale.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.yMOW8D);
    return intl.formatToPlainString(getSystemLocale.t.aFRl53, obj);
  }
};
items3[2] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.AUDIO,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Tsljqo);
  }
};
items3[3] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.ANIMATED,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nRKlmC);
  }
};
items3[4] = {
  perkIcon: getGuildTierFromGuild.PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.hsZ88d, { numStageSeats: closure_3 });
  }
};
obj8[1] = items3;
items1[2] = obj8;
const result = obj132.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;