// === Module 11738: useGuildPowerupLevelPerks ===

// Module 11738 (useGuildPowerupLevelPerks)
import noop from "noop";
import { GUILD_FEATURE_TO_PERK } from "BoostedGuildTiers";

const require = arg1;
const result = require("getGuildTierFromGuild").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default function useGuildPowerupLevelPerks(arg0) {
  let closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { includeEmojis: true, includeStickers: true, includeSoundboards: true };
  }
  const includeEmojis = obj.includeEmojis;
  const includeStickers = obj.includeStickers;
  const includeSoundboards = obj.includeSoundboards;
  let items = [arg0, includeEmojis, includeStickers, includeSoundboards];
  return includeSoundboards.useMemo(() => {
    const items = [];
    const lib = outer1_4();
    if (includeEmojis) {
      let obj = { perkIcon: null, description: null };
      obj[0] = lib(includeStickers[2]).PerkIcons.EMOJI;
      const intl = lib(includeStickers[3]).intl;
      obj = { totalEmojis: null, additionalEmojis: null };
      obj[0] = lib.features.total_emoji_slots;
      obj[1] = lib.features.additional_emoji_slots;
      obj[1] = intl.formatToPlainString(includeEmojis(includeStickers[4])["NXvV0+"], obj);
      items.push(obj);
    }
    if (includeStickers) {
      obj = { perkIcon: null, description: null };
      obj[0] = lib(includeStickers[2]).PerkIcons.STICKER;
      const intl2 = lib(includeStickers[3]).intl;
      const obj1 = { totalStickers: null, additionalStickers: null };
      obj1[0] = lib.features.total_sticker_slots;
      obj1[1] = lib.features.additional_sticker_slots;
      obj[1] = intl2.formatToPlainString(includeEmojis(includeStickers[4]).ZEvvPz, obj1);
      items.push(obj);
    }
    if (includeSoundboards) {
      const obj2 = { perkIcon: null, description: null };
      obj2[0] = lib(includeStickers[2]).PerkIcons.SOUNDBOARD;
      const intl3 = lib(includeStickers[3]).intl;
      const obj3 = { totalSoundboards: null, additionalSoundboards: null };
      obj3[0] = lib.features.total_sound_slots;
      obj3[1] = lib.features.additional_sound_slots;
      obj2[1] = intl3.formatToPlainString(includeEmojis(includeStickers[4])["s9u/E7"], obj3);
      items.push(obj2);
    }
    const features = lib.features.features;
    const mapped = features.map((arg0) => table[arg0]);
    return items.concat(mapped.filter(lib(includeStickers[5]).isNotNullish));
  }, items);
};