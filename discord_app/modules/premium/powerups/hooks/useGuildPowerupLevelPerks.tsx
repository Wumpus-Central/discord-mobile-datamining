// discord_app/modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import _modDef2525 from "../GuildPowerups.messages.js";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PerkIcons = PremiumConstants.PerkIcons;
const GUILD_FEATURE_TO_PERK = GuildPowerupsConstants.GUILD_FEATURE_TO_PERK;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (features, arg1) => {
      let includeEmojis;
      let includeSoundboards;
      let includeStickers;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(28);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = { includeEmojis: true, includeStickers: true, includeSoundboards: true };
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ includeEmojis, includeStickers, includeSoundboards } = tmp4);
      if (cResult[2] === includeEmojis) {
        if (cResult[3] === includeSoundboards) {
          if (cResult[4] === includeStickers) {
            if (cResult[5] === features.features.additional_emoji_slots) {
              if (cResult[6] === features.features.additional_sound_slots) {
                if (cResult[7] === features.features.additional_sticker_slots) {
                  if (cResult[8] === features.features.features) {
                    if (cResult[9] === features.features.total_emoji_slots) {
                      if (cResult[10] === features.features.total_sound_slots) {
                        let tmp5;
                        if (cResult[11] === features.features.total_sticker_slots) {
                          tmp5 = cResult[12];
                        }
                        return tmp5;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items = [];
      let closure_0 = GUILD_FEATURE_TO_PERK();
      if (includeEmojis) {
        if (cResult[13] === features.features.additional_emoji_slots) {
          let tmp6;
          let tmp9;
          if (cResult[14] === features.features.total_emoji_slots) {
            tmp6 = cResult[15];
          }
          if (cResult[16] !== tmp6) {
            const obj3 = { perkIcon: PerkIcons.EMOJI, description: tmp6 };
            cResult[16] = tmp6;
            cResult[17] = obj3;
            tmp9 = obj3;
          } else {
            tmp9 = cResult[17];
          }
          items.push(tmp9);
        }
        const intl = intl4.intl;
        const obj4 = {
          totalEmojis: features.features.total_emoji_slots,
          additionalEmojis: features.features.additional_emoji_slots,
        };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2525["NXvV0+"], obj4);
        cResult[13] = features.features.additional_emoji_slots;
        cResult[14] = features.features.total_emoji_slots;
        cResult[15] = formatToPlainStringResult;
        tmp6 = formatToPlainStringResult;
      }
      if (includeStickers) {
        if (cResult[18] === features.features.additional_sticker_slots) {
          let tmp12;
          let tmp15;
          if (cResult[19] === features.features.total_sticker_slots) {
            tmp12 = cResult[20];
          }
          if (cResult[21] !== tmp12) {
            const obj5 = { perkIcon: PerkIcons.STICKER, description: tmp12 };
            cResult[21] = tmp12;
            cResult[22] = obj5;
            tmp15 = obj5;
          } else {
            tmp15 = cResult[22];
          }
          items.push(tmp15);
        }
        const intl2 = intl4.intl;
        const obj6 = {
          totalStickers: features.features.total_sticker_slots,
          additionalStickers: features.features.additional_sticker_slots,
        };
        const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2525.ZEvvPz, obj6);
        cResult[18] = features.features.additional_sticker_slots;
        cResult[19] = features.features.total_sticker_slots;
        cResult[20] = formatToPlainStringResult1;
        tmp12 = formatToPlainStringResult1;
      }
      if (includeSoundboards) {
        if (cResult[23] === features.features.additional_sound_slots) {
          let tmp18;
          let tmp21;
          if (cResult[24] === features.features.total_sound_slots) {
            tmp18 = cResult[25];
          }
          if (cResult[26] !== tmp18) {
            const obj7 = { perkIcon: PerkIcons.SOUNDBOARD, description: tmp18 };
            cResult[26] = tmp18;
            cResult[27] = obj7;
            tmp21 = obj7;
          } else {
            tmp21 = cResult[27];
          }
          items.push(tmp21);
        }
        const intl3 = intl4.intl;
        const obj8 = {
          totalSoundboards: features.features.total_sound_slots,
          additionalSoundboards: features.features.additional_sound_slots,
        };
        const formatToPlainStringResult2 = intl3.formatToPlainString(_modDef2525["s9u/E7"], obj8);
        cResult[23] = features.features.additional_sound_slots;
        cResult[24] = features.features.total_sound_slots;
        cResult[25] = formatToPlainStringResult2;
        tmp18 = formatToPlainStringResult2;
      }
      features = features.features.features;
      const concat = items.concat;
      const mapped = features.map((item) => closure_0[item]);
      const combined = concat(mapped.filter(GlobalUtils.isNotNullish));
      cResult[2] = includeEmojis;
      cResult[3] = includeSoundboards;
      cResult[4] = includeStickers;
      cResult[5] = features.features.additional_emoji_slots;
      cResult[6] = features.features.additional_sound_slots;
      cResult[7] = features.features.additional_sticker_slots;
      cResult[8] = features.features.features;
      cResult[9] = features.features.total_emoji_slots;
      cResult[10] = features.features.total_sound_slots;
      cResult[11] = features.features.total_sticker_slots;
      cResult[12] = combined;
      tmp5 = combined;
    }
  : (arg0) => {
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
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let obj4;
        let obj6;
        const items = [];
        closure_0 = GUILD_FEATURE_TO_PERK();
        if (includeEmojis) {
          const push = items.push;
          const obj = { perkIcon: PerkIcons.EMOJI, description: intl.formatToPlainString(_modDef2525["NXvV0+"], obj2) };
          intl = intl4.intl;
          obj2 = {
            totalEmojis: closure_0.features.total_emoji_slots,
            additionalEmojis: closure_0.features.additional_emoji_slots,
          };
          push(obj);
        }
        if (includeStickers) {
          const push2 = items.push;
          const obj3 = {
            perkIcon: PerkIcons.STICKER,
            description: intl2.formatToPlainString(_modDef2525.ZEvvPz, obj4),
          };
          intl2 = intl4.intl;
          obj4 = {
            totalStickers: closure_0.features.total_sticker_slots,
            additionalStickers: closure_0.features.additional_sticker_slots,
          };
          push2(obj3);
        }
        if (includeSoundboards) {
          const push3 = items.push;
          const obj5 = {
            perkIcon: PerkIcons.SOUNDBOARD,
            description: intl3.formatToPlainString(_modDef2525["s9u/E7"], obj6),
          };
          intl3 = intl4.intl;
          obj6 = {
            totalSoundboards: closure_0.features.total_sound_slots,
            additionalSoundboards: closure_0.features.additional_sound_slots,
          };
          push3(obj5);
        }
        const features = closure_0.features.features;
        const concat = items.concat;
        const mapped = features.map((item) => closure_0[item]);
        return concat(mapped.filter(GlobalUtils.isNotNullish));
      }, items);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default tmp2;
