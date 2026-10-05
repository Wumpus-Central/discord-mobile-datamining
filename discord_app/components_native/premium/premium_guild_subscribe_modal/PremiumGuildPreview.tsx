// === Module 13416: PremiumGuildPreview ===

// Module 13416 (PremiumGuildPreview)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import shared from "shared" /* 4729 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7666 */;
import AssetRegistryDefault from "AssetRegistry" /* 13417 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13418 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13419 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13420 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13421 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13422 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13423 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13424 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function getTierIcon(theme, tier) {
  if (BoostedGuildTiers.NONE === tier) {
    const tmp19 = AssetRegistryDefault;
    let tmp20 = AssetRegistryDefault2;
    const obj4 = shared;
    if (obj4.isThemeDark(theme)) {
      tmp20 = tmp19;
    }
    return tmp20;
  } else if (BoostedGuildTiers.TIER_1 === tier) {
    const tmp14 = AssetRegistryDefault3;
    let tmp15 = AssetRegistryDefault4;
    const obj3 = shared;
    if (obj3.isThemeDark(theme)) {
      tmp15 = tmp14;
    }
    return tmp15;
  } else if (BoostedGuildTiers.TIER_2 === tier) {
    const tmp9 = AssetRegistryDefault5;
    let tmp10 = AssetRegistryDefault6;
    const obj2 = shared;
    if (obj2.isThemeDark(theme)) {
      tmp10 = tmp9;
    }
    return tmp10;
  } else if (BoostedGuildTiers.TIER_3 === tier) {
    const tmp4 = AssetRegistryDefault7;
    let tmp5 = AssetRegistryDefault8;
    const obj = shared;
    if (obj.isThemeDark(theme)) {
      tmp5 = tmp4;
    }
    return tmp5;
  }
}
({ View: c3, Image: closure_4 } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { guild: obj2, guildInfo: { marginLeft: 16 }, guildName: obj3, tierPill: obj4, tierPillImage: { width: 16, height: 16 }, tierPillText: obj5 };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.xs, flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
obj4 = { marginTop: 8, padding: 4, paddingRight: 8, alignSelf: "flex-start", flexDirection: "row", borderRadius: 11, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { fontSize: 12, lineHeight: 16, marginLeft: 4, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let theme;
  let tier;
  const obj = react2;
  const cResult = obj.c(15);
  ({ tier, theme } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === theme) {
    let tmp7;
    if (cResult[1] === tier) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === tmp4.tierPillImage) {
      let tmp9;
      let tmp13;
      if (cResult[4] === tmp7) {
        tmp9 = cResult[5];
      }
      const tierPillText = tmp4.tierPillText;
      if (cResult[6] !== tier) {
        const tmpResult = GuildBoostingUtils;
        const tierName = tmpResult.getTierName(tier);
        cResult[6] = tier;
        cResult[7] = tierName;
        tmp13 = tierName;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.tierPillText) {
        let tmp15;
        if (cResult[9] === tmp13) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.tierPill) {
          if (cResult[12] === tmp9) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
        }
        const obj2 = { style: tmp5, children: items };
        items = [tmp9, tmp15];
        const tmp21 = metroImportAll(_false, obj2);
        cResult[11] = tmp4.tierPill;
        cResult[12] = tmp9;
        cResult[13] = tmp15;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
      const obj3 = { style: tierPillText, children: tmp13 };
      const tmp17 = metroImportDefault(native.LegacyText, obj3);
      cResult[8] = tmp4.tierPillText;
      cResult[9] = tmp13;
      cResult[10] = tmp17;
      tmp15 = tmp17;
    }
    const obj4 = { style: tmp6, source: tmp7 };
    const tmp12 = metroImportDefault(React3, obj4);
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
}) : ((tier) => {
  let items;
  let obj4;
  tier = tier.tier;
  const theme = tier.theme;
  const tmp = closure_9();
  const obj = { style: tmp.tierPill, children: items };
  items = [, ];
  const obj2 = { style: tmp.tierPillImage, source: getTierIcon(theme, tier) };
  items[0] = metroImportDefault(React3, obj2);
  const obj3 = { style: tmp.tierPillText, children: obj4.getTierName(tier) };
  const LegacyText = native.LegacyText;
  obj4 = GuildBoostingUtils;
  items[1] = metroImportDefault(LegacyText, obj3);
  return metroImportAll(_false, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let items1;
  let items2;
  let style;
  let theme;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(21);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === style) {
    let tmp9;
    let tmp10;
    if (cResult[3] === tmp4.guild) {
      tmp9 = cResult[4];
    }
    if (cResult[5] !== guild) {
      const obj2 = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
      const tmp13 = GuildIconDefault;
      const tmp14 = metroImportDefault(tmp13, obj2);
      cResult[5] = guild;
      cResult[6] = tmp14;
      tmp10 = tmp14;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === guild.name) {
      let tmp15;
      if (cResult[8] === tmp4.guildName) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === guild.premiumTier) {
        let tmp18;
        if (cResult[11] === stateFromStores) {
          tmp18 = cResult[12];
        }
        if (cResult[13] === tmp4.guildInfo) {
          if (cResult[14] === tmp15) {
            let tmp22;
            if (cResult[15] === tmp18) {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp9) {
              if (cResult[18] === tmp10) {
                let tmp26;
                if (cResult[19] === tmp22) {
                  tmp26 = cResult[20];
                }
                return tmp26;
              }
            }
            const obj3 = { style: tmp9, children: items1 };
            items1 = [tmp10, tmp22];
            const tmp29 = metroImportAll(_false, obj3);
            cResult[17] = tmp9;
            cResult[18] = tmp10;
            cResult[19] = tmp22;
            cResult[20] = tmp29;
            tmp26 = tmp29;
          }
        }
        const obj4 = { style: tmp4.guildInfo, children: items2 };
        items2 = [tmp15, tmp18];
        const tmp25 = metroImportAll(_false, obj4);
        cResult[13] = tmp4.guildInfo;
        cResult[14] = tmp15;
        cResult[15] = tmp18;
        cResult[16] = tmp25;
        tmp22 = tmp25;
      }
      const obj5 = { tier: guild.premiumTier, theme: stateFromStores };
      const tmp21 = metroImportDefault(closure_11, obj5);
      cResult[10] = guild.premiumTier;
      cResult[11] = stateFromStores;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
    const obj6 = { style: tmp4.guildName, children: guild.name };
    const tmp17 = metroImportDefault(native.LegacyText, obj6);
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
}) : ((guild) => {
  let items1;
  let items2;
  let items3;
  let theme;
  guild = guild.guild;
  const style = guild.style;
  const tmp = closure_9();
  const items = [ThemeStore];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp.guild, style];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj3 = { guild, size: GuildIcon.GuildIconSizes.LARGE, selected: false };
  const tmp3 = GuildIconDefault;
  items2 = [metroImportDefault(tmp3, obj3), ];
  const obj4 = { style: tmp.guildInfo, children: items3 };
  items3 = [, ];
  const obj5 = { style: tmp.guildName, children: guild.name };
  items3[0] = metroImportDefault(native.LegacyText, obj5);
  const obj6 = { tier: guild.premiumTier, theme: stateFromStores };
  items3[1] = metroImportDefault(closure_11, obj6);
  items2[1] = metroImportAll(_false, obj4);
  return metroImportAll(_false, obj2);
});
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx");

export default tmp6;