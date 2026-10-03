// discord_app/components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import GuildIcon from "../../../modules/guild/native/GuildIcon.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import _modDef13415 from "../../../../_runtime/metro/13415__.js";
import _modDef13416 from "../../../../_runtime/metro/13416__.js";
import _modDef13417 from "../../../../_runtime/metro/13417__.js";
import _modDef13418 from "../../../../_runtime/metro/13418__.js";
import _modDef13419 from "../../../../_runtime/metro/13419__.js";
import _modDef13420 from "../../../../_runtime/metro/13420__.js";
import _modDef13421 from "../../../../_runtime/metro/13421__.js";
import _modDef13422 from "../../../../_runtime/metro/13422__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../modules/user_settings/ThemeStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function getTierIcon(theme, tier) {
  if (BoostedGuildTiers.NONE === tier) {
    let tmp20 = _modDef13416;
    const tmp19 = _modDef13415;
    if (obj4.isThemeDark(theme)) {
      tmp20 = tmp19;
    }
    return tmp20;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    let tmp15 = _modDef13418;
    const tmp14 = _modDef13417;
    if (obj3.isThemeDark(theme)) {
      tmp15 = tmp14;
    }
    return tmp15;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    let tmp10 = _modDef13420;
    const tmp9 = _modDef13419;
    if (obj2.isThemeDark(theme)) {
      tmp10 = tmp9;
    }
    return tmp10;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    let tmp5 = _modDef13422;
    const tmp4 = _modDef13421;
    if (obj.isThemeDark(theme)) {
      tmp5 = tmp4;
    }
    return tmp5;
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const BoostedGuildTiers = fn(1085).BoostedGuildTiers;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  guild: {
    padding: 16,
    borderRadius: nativeDefault.radii.xs,
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  guildInfo: { marginLeft: 16 },
  guildName: null,
  tierPill: null,
  tierPillImage: null,
  tierPillText: null,
};
let obj3 = {
  padding: 16,
  borderRadius: nativeDefault.radii.xs,
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.guildName = { fontSize: 16, lineHeight: 20, color: fn(5620).DARK_WHITE_500_LIGHT_BLACK_500 };
let obj4 = { fontSize: 16, lineHeight: 20, color: fn(5620).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.tierPill = {
  marginTop: 8,
  padding: 4,
  paddingRight: 8,
  alignSelf: "flex-start",
  flexDirection: "row",
  borderRadius: 11,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.tierPillImage = { width: 16, height: 16 };
let obj5 = {
  marginTop: 8,
  padding: 4,
  paddingRight: 8,
  alignSelf: "flex-start",
  flexDirection: "row",
  borderRadius: 11,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.tierPillText = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(5620).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
      ({ tier, theme } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] === theme) {
        if (cResult[1] === tier) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp4.tierPillImage) {
          if (cResult[4] === tmp7) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] !== tier) {
            const tierName = GuildBoostingUtils.getTierName(tier);
            cResult[6] = tier;
            cResult[7] = tierName;
            let tmp13 = tierName;
            const tmpResult = GuildBoostingUtils;
          } else {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp4.tierPillText) {
            if (cResult[9] === tmp13) {
              let tmp15 = cResult[10];
            }
            if (cResult[11] === tmp4.tierPill) {
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp15) {
                  let tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
            const obj2 = { style: tmp5, children: null };
            const items = [tmp9, tmp15];
            obj2.children = items;
            const tmp21 = closure_1_8(React3, obj2);
            cResult[11] = tmp4.tierPill;
            cResult[12] = tmp9;
            cResult[13] = tmp15;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
          const obj3 = { style: tmp4.tierPillText, children: tmp13 };
          const tmp17 = React5(native.LegacyText, obj3);
          cResult[8] = tmp4.tierPillText;
          cResult[9] = tmp13;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        }
        const obj4 = { style: tmp6, source: tmp7 };
        const tmp12 = React5(React4, obj4);
        cResult[3] = tmp4.tierPillImage;
        cResult[4] = tmp7;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = getTierIcon(theme, tier);
      cResult[0] = theme;
      cResult[1] = tier;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (tier) => {
      tier = tier.tier;
      const tmp = closure_9();
      const obj = { style: tmp.tierPill, children: null };
      const items = [React5(React4, { style: tmp.tierPillImage, source: getTierIcon(tier.theme, tier) })];
      const obj3 = { style: tmp.tierPillText, children: null };
      const obj2 = { style: tmp.tierPillImage, source: getTierIcon(tier.theme, tier) };
      obj3.children = GuildBoostingUtils.getTierName(tier);
      items[1] = React5(native.LegacyText, obj3);
      obj.children = items;
      return closure_1_8(React3, obj);
    };
ReactCompilerGating = fn(558);
let obj6 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: fn(5620).DARK_WHITE_500_LIGHT_PRIMARY_660 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(21);
      ({ guild, style } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ThemeStore];
        const fn = function o() {
          return theme.theme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.guild) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] !== guild) {
          const obj2 = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
          const tmp14 = React5(GuildIconDefault, obj2);
          cResult[5] = guild;
          cResult[6] = tmp14;
          let tmp10 = tmp14;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] === guild.name) {
          if (cResult[8] === tmp4.guildName) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === guild.premiumTier) {
            if (cResult[11] === stateFromStores) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp4.guildInfo) {
              if (cResult[14] === tmp15) {
                if (cResult[15] === tmp18) {
                  let tmp22 = cResult[16];
                }
                if (cResult[17] === tmp9) {
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp22) {
                      let tmp26 = cResult[20];
                    }
                    return tmp26;
                  }
                }
                const obj3 = { style: tmp9, children: null };
                const items1 = [tmp10, tmp22];
                obj3.children = items1;
                const tmp29 = closure_1_8(React3, obj3);
                cResult[17] = tmp9;
                cResult[18] = tmp10;
                cResult[19] = tmp22;
                cResult[20] = tmp29;
                tmp26 = tmp29;
              }
            }
            const obj4 = { style: tmp4.guildInfo, children: null };
            const items2 = [tmp15, tmp18];
            obj4.children = items2;
            const tmp25 = closure_1_8(React3, obj4);
            cResult[13] = tmp4.guildInfo;
            cResult[14] = tmp15;
            cResult[15] = tmp18;
            cResult[16] = tmp25;
            tmp22 = tmp25;
          }
          const obj5 = { tier: guild.premiumTier, theme: stateFromStores };
          const tmp21 = React5(closure_11, obj5);
          cResult[10] = guild.premiumTier;
          cResult[11] = stateFromStores;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
        const obj6 = { style: tmp4.guildName, children: guild.name };
        const tmp17 = React5(native.LegacyText, obj6);
        cResult[7] = guild.name;
        cResult[8] = tmp4.guildName;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const items3 = [tmp4.guild, style];
      cResult[2] = style;
      cResult[3] = tmp4.guild;
      cResult[4] = items3;
      tmp9 = items3;
      const tmpResult = initialize;
    }
  : (guild) => {
      guild = guild.guild;
      const tmp = closure_9();
      const items = [ThemeStore];
      const obj2 = { style: null, children: null };
      const items1 = [tmp.guild, guild.style];
      obj2.style = items1;
      const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
      const obj3 = { guild, size: null, selected: false };
      obj3.size = GuildIcon.GuildIconSizes.LARGE;
      const items2 = [React5(GuildIconDefault, obj3)];
      const obj4 = { style: tmp.guildInfo, children: null };
      const items3 = [
        React5(native.LegacyText, { style: tmp.guildName, children: guild.name }),
        React5(closure_11, { tier: guild.premiumTier, theme: stateFromStores }),
      ];
      obj4.children = items3;
      items2[1] = closure_1_8(React3, obj4);
      obj2.children = items2;
      return closure_1_8(React3, obj2);
    };
