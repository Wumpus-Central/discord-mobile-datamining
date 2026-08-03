// === Module 11776: BoostedGuildTiers ===

// Module 11776 (BoostedGuildTiers)
import ME from "ME";
import { BoostedGuildFeatures } from "GuildFeatures";

const BoostedGuildTiers = ME.BoostedGuildTiers;
let closure_3 = ME.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
let obj = { tier: BoostedGuildTiers.TIER_1, perks: null };
obj = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.EMOJI,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji });
  }
};
const items = [obj, , , ];
obj = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t["v+MIfo"], { numSoundboardSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.soundboardSounds });
  },
  isNew: true
};
items[1] = obj;
items[2] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PbAyub);
  }
};
const obj1 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PbAyub);
  }
};
items[3] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["WH+OeI"]);
  }
};
obj[1] = items;
const items1 = [obj, , ];
const obj3 = { tier: BoostedGuildTiers.TIER_2, perks: null };
const obj2 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["WH+OeI"]);
  }
};
const items2 = [
  {
    perkIcon: require("getGuildTierFromGuild").PerkIcons.STREAM,
    getCopy() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.y4ft4D);
    }
  },
,
,

];
const obj4 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.STREAM,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.y4ft4D);
  }
};
items2[1] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.M6qV8j);
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.aFRl53, obj);
  }
};
const obj5 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.M6qV8j);
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items2[2] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
const obj6 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
items2[3] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1a5rjl"]);
  }
};
obj3[1] = items2;
items1[1] = obj3;
const obj8 = { tier: BoostedGuildTiers.TIER_3, perks: null };
const obj7 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1a5rjl"]);
  }
};
const items3 = [
  {
    perkIcon: require("getGuildTierFromGuild").PerkIcons.VANITY,
    getCopy() {
      const intl = require(1236) /* getSystemLocale */.intl;
      return intl.string(require(1236) /* getSystemLocale */.t.adNGjW);
    }
  },
,
,
,

];
const obj9 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.VANITY,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.adNGjW);
  }
};
items3[1] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.yMOW8D);
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.aFRl53, obj);
  }
};
const obj10 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.yMOW8D);
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items3[2] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Tsljqo);
  }
};
const obj11 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Tsljqo);
  }
};
items3[3] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nRKlmC);
  }
};
const obj12 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nRKlmC);
  }
};
items3[4] = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.hsZ88d, { numStageSeats: closure_3 });
  }
};
obj8[1] = items3;
items1[2] = obj8;
const obj13 = {
  perkIcon: require("getGuildTierFromGuild").PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.hsZ88d, { numStageSeats: closure_3 });
  }
};
const result = require("getGuildTierFromGuild").fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;