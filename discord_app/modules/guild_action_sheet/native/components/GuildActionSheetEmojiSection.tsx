// === Module 13630: GuildActionSheetEmojiSection ===

// Module 13630 (GuildActionSheetEmojiSection)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getEmojiToGroupId" /* 5353 */;
import closure_7 from "handleThemeChange" /* 1302 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
({ UpsellTypes: c9, AnalyticsSections: c10, Fonts } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" }, dotSeparator: null, premiumTitle: null, emojiContainer: null, emoji: null, emojiCount: null };
createCacheKey = { width: 4, height: 4, borderRadius: ThemesDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
createCacheKey[3] = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 };
createCacheKey[4] = { width: 24, height: 24 };
let obj1 = { color: ThemesDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
let result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default function GuildActionSheetEmojiSection(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let first;
  let callback;
  let stateFromStores;
  let num;
  let analyticsLocations;
  let theme;
  const tmp = callback3();
  importDefault = tmp;
  let obj = stateFromStores;
  const tmp2 = callback(stateFromStores.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  obj1 = guildId(first[10]);
  let items = [analyticsLocations];
  const items1 = [guildId];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => analyticsLocations.getGuildEmoji(guildId), items1);
  let obj2 = guildId(first[12]);
  const token = obj2.useToken(importDefault(first[9]).modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guildId(first[10]);
  const items2 = [closure_8];
  stateFromStores = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  let obj4 = importDefault(first[13]);
  let result = obj4.canUseEmojisEverywhere(stateFromStores);
  let tmp10 = !result;
  if (!result) {
    let tmp6Result = tmp6(tmp5[13]);
    tmp10 = !tmp6Result.isPremium(stateFromStores);
  }
  const diff = importDefault(first[11])().width - (26 + 2 * token);
  const rounded = Math.floor(diff / 32);
  let result1 = (diff - 24 * rounded) / (2 * rounded);
  num = 4;
  if (4 <= result1) {
    num = 4;
    if (result1 < 12) {
      num = result1;
    }
  }
  if (first) {
    let length = stateFromStoresArray.length;
    let num3 = 0;
  } else {
    length = 2 * rounded;
    num3 = stateFromStoresArray.length - length;
  }
  let diff1 = length;
  let bound = num3;
  if (0 < num3) {
    diff1 = length - 1;
    const _Math = Math;
    bound = Math.min(num3 + 1, 99);
  }
  const substr = stateFromStoresArray.slice(0, diff1);
  tmp6Result = tmp6(tmp5[14]);
  analyticsLocations = tmp6Result(tmp6(tmp5[15]).EMOJI_PICKER).analyticsLocations;
  const items3 = [analyticsLocations];
  theme = obj.useCallback((arg0, currentUser) => {
    let result = null == currentUser;
    if (!result) {
      let obj = lib(first[13]);
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      lib(first[16]).hideActionSheet("GuildProfile:" + arg0);
      const obj2 = lib(first[16]);
      obj = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
      obj[0] = closure_1_9.GLOBAL_EMOJI;
      obj = { section: null };
      obj[0] = closure_1_10.EMOJI_PICKER_POPOUT;
      obj[1] = obj;
      obj[2] = analyticsLocations;
      const result1 = lib(first[17]).handleShowUpsellAlert(obj);
      const obj3 = lib(first[17]);
    }
  }, items3);
  const tmp4Result = guildId(first[18]);
  const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
  const tmp18 = guildId(first[18]).isThemeDark(theme.theme) ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp20Result1 = null;
  if (substr.length > 0) {
    obj = { title: null, trailing: null, children: null };
    const intl = tmp4(tmp5[20]).intl;
    obj[0] = intl.string(tmp4(tmp5[20]).t.Q60n1E);
    let tmp20Result = null;
    if (tmp10) {
      obj = { accessibilityRole: "button", onPress: null, children: null };
      obj[1] = function onPress() {
        return lib2(guildId, stateFromStores);
      };
      obj1 = { style: null, children: null };
      obj1[0] = tmp.header;
      obj2 = { style: null };
      obj2[0] = tmp.dotSeparator;
      const items4 = [tmp20(num, obj2), , ];
      obj3 = { source: null, color: null, size: null };
      obj3[0] = tmp6(tmp5[23]);
      obj3[1] = tmp18;
      obj3[2] = tmp4(tmp5[22]).Icon.Sizes.SMALL;
      items4[1] = tmp20(tmp4(tmp5[22]).Icon, obj3);
      obj4 = { style: null, children: null };
      const items5 = [tmp.premiumTitle, ];
      const obj5 = { color: null };
      obj5[0] = tmp18;
      items5[1] = obj5;
      obj4[0] = items5;
      const intl2 = tmp4(tmp5[20]).intl;
      obj4[1] = intl2.string(tmp4(tmp5[20]).t.p1j56s);
      items4[2] = tmp20(tmp4(tmp5[22]).LegacyText, obj4);
      obj1[1] = items4;
      obj[2] = callback2(num, obj1);
      tmp20Result = tmp20(tmp4(tmp5[21]).PressableOpacity, obj);
    }
    obj[1] = tmp20Result;
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.emojiContainer;
    const items6 = [
      substr.map((accessibilityLabel) => {
          closure_0 = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const result = guildId(first[24]).triggerHapticFeedback(callback(first[25]).IMPACT_LIGHT);
              const obj = guildId(first[24]);
              guildId(first[26]).presentEmoji(closure_0);
              if (!closure_1_2) {
                closure_1_3(true);
              }
            },
            children: null
          };
          obj = { resizeMode: "contain", style: items, placeholder: null, source: null };
          items = [lib.emoji, ];
          obj = { margin: num };
          items[1] = obj;
          const tmp4 = lib(first[27]);
          if (obj4.isThemeDark(lib2.theme)) {
            let tmp3Result = tmp3(tmp2[28]);
          } else {
            tmp3Result = tmp3(tmp2[29]);
          }
          obj[2] = tmp3Result;
          obj1 = { uri: null };
          tmp3Result = tmp3(tmp2[30]);
          obj1[0] = tmp3Result.getEmojiURL({ id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 });
          obj[3] = obj1;
          obj[3] = closure_1_11(tmp4, obj);
          return closure_1_11(guildId(first[21]).PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    tmp20Result = null;
    if (bound > 0) {
      const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = tmp4(tmp5[20]).intl;
      obj7[1] = intl3.string(tmp4(tmp5[20]).t["UKOtz+"]);
      obj7[2] = function onPress() {
        const result = guildId(first[24]).triggerHapticFeedback(lib(first[25]).IMPACT_LIGHT);
        callback(true);
      };
      const obj8 = { style: null, children: null };
      const items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj9 = { margin: null };
      obj9[0] = num;
      items7[2] = obj9;
      obj8[0] = items7;
      let _HermesInternal = HermesInternal;
      obj8[1] = "+" + bound;
      obj7[3] = tmp20(tmp4(tmp5[22]).LegacyText, obj8);
      tmp20Result = tmp20(tmp4(tmp5[21]).PressableOpacity, obj7, -1);
    }
    items6[1] = tmp20Result;
    obj6[1] = items6;
    obj[2] = callback2(num, obj6);
    tmp20Result1 = tmp20(tmp4(tmp5[19]).RowGroup, obj);
    const tmp24 = callback2;
    const tmp25 = num;
  }
  return tmp20Result1;
};