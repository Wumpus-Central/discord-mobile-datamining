// discord_app/modules/guild_boosting/GuildBoostingMarketingConstants.tsx
import intl3 from "../../intl/index.native.tsx";
import Constants from "../../Constants.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let PerkIcons;
let closure_4;
let items;
let items2;
let items3;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
const MAX_STAGE_VIDEO_USER_LIMIT_TIER3 = Constants.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
({ BoostedGuildFeatures: closure_4, PerkIcons } = PremiumConstants);
let obj = { tier: BoostedGuildTiers.TIER_1, perks: items };
items = [, , ,];
const obj2 = {
  perkIcon: PerkIcons.EMOJI,
  getCopy() {
    const intl = intl3.intl;
    const obj = { numEmojiSlots: React3[BoostedGuildTiers.TIER_1].limits.emoji };
    return intl.formatToPlainString(intl3.t.Tlz0x1, obj);
  },
};
items[0] = obj2;
items[1] = {
  perkIcon: PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = intl3.intl;
    const obj = { numSoundboardSlots: React3[BoostedGuildTiers.TIER_1].limits.soundboardSounds };
    return intl.formatToPlainString(intl3.t["v+MIfo"], obj);
  },
  isNew: true,
};
items[2] = {
  perkIcon: PerkIcons.ANIMATED,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t.PbAyub);
  },
};
items[3] = {
  perkIcon: PerkIcons.AUDIO,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t["WH+OeI"]);
  },
};
const items1 = [obj, ,];
const obj3 = { tier: BoostedGuildTiers.TIER_2, perks: items2 };
items2 = [, , ,];
const obj4 = {
  perkIcon: PerkIcons.STREAM,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t.y4ft4D);
  },
};
items2[0] = obj4;
items2[1] = {
  perkIcon: PerkIcons.UPLOAD,
  getCopy() {
    let intl2;
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.string(intl3.t.M6qV8j) };
    const aFRl53 = intl3.t.aFRl53;
    intl2 = intl3.intl;
    return formatToPlainString(aFRl53, obj);
  },
};
items2[2] = {
  perkIcon: PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t["6PV6Qc"]);
  },
};
items2[3] = {
  perkIcon: PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t["1a5rjl"]);
  },
};
items1[1] = obj3;
const obj5 = { tier: BoostedGuildTiers.TIER_3, perks: items3 };
items3 = [, , , ,];
const obj6 = {
  perkIcon: PerkIcons.VANITY,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t.adNGjW);
  },
};
items3[0] = obj6;
items3[1] = {
  perkIcon: PerkIcons.UPLOAD,
  getCopy() {
    let intl2;
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { uploadSizeLimit: intl2.string(intl3.t.yMOW8D) };
    const aFRl53 = intl3.t.aFRl53;
    intl2 = intl3.intl;
    return formatToPlainString(aFRl53, obj);
  },
};
items3[2] = {
  perkIcon: PerkIcons.AUDIO,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t.Tsljqo);
  },
};
items3[3] = {
  perkIcon: PerkIcons.ANIMATED,
  getCopy() {
    const intl = intl3.intl;
    return intl.string(intl3.t.nRKlmC);
  },
};
items3[4] = {
  perkIcon: PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = intl3.intl;
    const obj = { numStageSeats: MAX_STAGE_VIDEO_USER_LIMIT_TIER3 };
    return intl.formatToPlainString(intl3.t.hsZ88d, obj);
  },
};
items1[2] = obj5;
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;
