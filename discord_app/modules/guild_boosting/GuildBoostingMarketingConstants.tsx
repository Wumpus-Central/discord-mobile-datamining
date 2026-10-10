// === Module 12301: GuildBoostingMarketingConstants ===

// Module 12301 (GuildBoostingMarketingConstants)
import util from "util" /* 1126 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import size from "module_2" /* 2 */;

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const numStageSeats = Constants.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
({ BoostedGuildFeatures: closure_4, PerkIcons } = PremiumConstants);
let obj = { tier: BoostedGuildTiers.TIER_1, perks: null };
const items = [
  {
    perkIcon: PerkIcons.EMOJI,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.Tlz0x1, { numEmojiSlots: dependencyMap[BoostedGuildTiers.TIER_1].limits.emoji });
    }
  },
  {
    perkIcon: PerkIcons.SOUNDBOARD,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["v+MIfo"], { numSoundboardSlots: dependencyMap[BoostedGuildTiers.TIER_1].limits.soundboardSounds });
    },
    isNew: true
  },
  {
    perkIcon: PerkIcons.ANIMATED,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.PbAyub);
    }
  },
  {
    perkIcon: PerkIcons.AUDIO,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t["WH+OeI"]);
    }
  }
];
obj.perks = items;
const items1 = [obj, , ];
const obj3 = { tier: BoostedGuildTiers.TIER_2, perks: null };
const items2 = [
  {
    perkIcon: PerkIcons.STREAM,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.y4ft4D);
    }
  },
  {
    perkIcon: PerkIcons.UPLOAD,
    getCopy() {
      const intl = util.intl;
      const obj = { uploadSizeLimit: null };
      const intl2 = util.intl;
      obj.uploadSizeLimit = intl2.string(util.t.M6qV8j);
      return intl.formatToPlainString(util.t.aFRl53, obj);
    }
  },
  {
    perkIcon: PerkIcons.CUSTOM_ROLE_ICON,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t["6PV6Qc"]);
    }
  },
  {
    perkIcon: PerkIcons.CUSTOMIZATION,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t["1a5rjl"]);
    }
  }
];
obj3.perks = items2;
items1[1] = obj3;
const obj5 = { tier: BoostedGuildTiers.TIER_3, perks: null };
const items3 = [
  {
    perkIcon: PerkIcons.VANITY,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.adNGjW);
    }
  },
  {
    perkIcon: PerkIcons.UPLOAD,
    getCopy() {
      const intl = util.intl;
      const obj = { uploadSizeLimit: null };
      const intl2 = util.intl;
      obj.uploadSizeLimit = intl2.string(util.t.yMOW8D);
      return intl.formatToPlainString(util.t.aFRl53, obj);
    }
  },
  {
    perkIcon: PerkIcons.AUDIO,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.Tsljqo);
    }
  },
  {
    perkIcon: PerkIcons.ANIMATED,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.nRKlmC);
    }
  },
  {
    perkIcon: PerkIcons.STAGE_VIDEO,
    getCopy() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.hsZ88d, { numStageSeats });
    }
  }
];
obj5.perks = items3;
items1[2] = obj5;
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;