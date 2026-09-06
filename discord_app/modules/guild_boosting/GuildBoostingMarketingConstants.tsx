// discord_app/modules/guild_boosting/GuildBoostingMarketingConstants.tsx
import util from "../../intl/index.native.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import GuildBoostingUtils from "../../utils/GuildBoostingUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const numStageSeats = Constants.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
let obj = { tier: BoostedGuildTiers.TIER_1, perks: null };
obj = {
  perkIcon: GuildBoostingUtils.PerkIcons.EMOJI,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.Tlz0x1, {
      numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji,
    });
  },
};
const items = [obj, , ,];
obj = {
  perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t["v+MIfo"], {
      numSoundboardSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.soundboardSounds,
    });
  },
  isNew: true,
};
items[1] = obj;
items[2] = {
  perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
const obj1 = {
  perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.PbAyub);
  },
};
items[3] = {
  perkIcon: GuildBoostingUtils.PerkIcons.AUDIO,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["WH+OeI"]);
  },
};
obj.perks = items;
const items1 = [obj, ,];
const obj3 = { tier: BoostedGuildTiers.TIER_2, perks: null };
const obj2 = {
  perkIcon: GuildBoostingUtils.PerkIcons.AUDIO,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["WH+OeI"]);
  },
};
const items2 = [
  {
    perkIcon: GuildBoostingUtils.PerkIcons.STREAM,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.y4ft4D);
    },
  },
  ,
  ,
];
const obj4 = {
  perkIcon: GuildBoostingUtils.PerkIcons.STREAM,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.y4ft4D);
  },
};
items2[1] = {
  perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.string(util.t.M6qV8j);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
const obj5 = {
  perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.string(util.t.M6qV8j);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items2[2] = {
  perkIcon: GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
const obj6 = {
  perkIcon: GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["6PV6Qc"]);
  },
};
items2[3] = {
  perkIcon: GuildBoostingUtils.PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
obj3.perks = items2;
items1[1] = obj3;
const obj8 = { tier: BoostedGuildTiers.TIER_3, perks: null };
const obj7 = {
  perkIcon: GuildBoostingUtils.PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t["1a5rjl"]);
  },
};
const items3 = [
  {
    perkIcon: GuildBoostingUtils.PerkIcons.VANITY,
    getCopy() {
      const intl = util.intl;
      return intl.string(util.t.adNGjW);
    },
  },
  ,
  ,
  ,
];
const obj9 = {
  perkIcon: GuildBoostingUtils.PerkIcons.VANITY,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.adNGjW);
  },
};
items3[1] = {
  perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.string(util.t.yMOW8D);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
const obj10 = {
  perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD,
  getCopy() {
    const intl = util.intl;
    const obj = { uploadSizeLimit: null };
    const intl2 = util.intl;
    obj.uploadSizeLimit = intl2.string(util.t.yMOW8D);
    return intl.formatToPlainString(util.t.aFRl53, obj);
  },
};
items3[2] = {
  perkIcon: GuildBoostingUtils.PerkIcons.AUDIO,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.Tsljqo);
  },
};
const obj11 = {
  perkIcon: GuildBoostingUtils.PerkIcons.AUDIO,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.Tsljqo);
  },
};
items3[3] = {
  perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.nRKlmC);
  },
};
const obj12 = {
  perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED,
  getCopy() {
    const intl = util.intl;
    return intl.string(util.t.nRKlmC);
  },
};
items3[4] = {
  perkIcon: GuildBoostingUtils.PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.hsZ88d, { numStageSeats });
  },
};
obj8.perks = items3;
items1[2] = obj8;
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;
