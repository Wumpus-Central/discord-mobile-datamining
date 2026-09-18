// discord_app/modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx
import util from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import _modDef2512 from "../GuildPowerups.messages.js";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const GUILD_FEATURE_TO_PERK = fn(4611).GUILD_FEATURE_TO_PERK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default function useGuildPowerupLevelPerks(arg0) {
  closure_0 = arg0;
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
    closure_0 = GUILD_FEATURE_TO_PERK();
    if (includeEmojis) {
      const obj = { perkIcon: GuildBoostingUtils.PerkIcons.EMOJI, description: null };
      const intl = util.intl;
      const obj2 = {
        totalEmojis: closure_0.features.total_emoji_slots,
        additionalEmojis: closure_0.features.additional_emoji_slots,
      };
      obj.description = intl.formatToPlainString(_modDef2512["NXvV0+"], obj2);
      items.push(obj);
    }
    if (includeStickers) {
      const obj3 = { perkIcon: GuildBoostingUtils.PerkIcons.STICKER, description: null };
      const intl2 = util.intl;
      const obj4 = {
        totalStickers: closure_0.features.total_sticker_slots,
        additionalStickers: closure_0.features.additional_sticker_slots,
      };
      obj3.description = intl2.formatToPlainString(_modDef2512.ZEvvPz, obj4);
      items.push(obj3);
    }
    if (includeSoundboards) {
      const obj5 = { perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD, description: null };
      const intl3 = util.intl;
      const obj6 = {
        totalSoundboards: closure_0.features.total_sound_slots,
        additionalSoundboards: closure_0.features.additional_sound_slots,
      };
      obj5.description = intl3.formatToPlainString(_modDef2512["s9u/E7"], obj6);
      items.push(obj5);
    }
    const features = closure_0.features.features;
    const mapped = features.map((item) => closure_0[item]);
    return items.concat(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
}
