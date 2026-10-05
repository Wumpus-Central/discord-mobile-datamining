// === Module 13793: GuildActionSheetEmojiSection ===

// Module 13793 (GuildActionSheetEmojiSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import ThemeStore_mod from "ThemeStore" /* 1193 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let guildId, importDefault;

let Fonts;
let c10;
let c9;
let closure_12;
let obj2;
let obj3;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let ThemeStore = ThemeStore_mod;
({ UpsellTypes: c9, AnalyticsSections: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" }, dotSeparator: size, premiumTitle: obj2, emojiContainer: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 }, emoji: { width: 24, height: 24 }, emojiCount: obj3 };
size = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
let closure_13 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let analyticsLocations;
  let closure_1;
  let closure_3;
  let currentUser;
  let first;
  let first1;
  let intl;
  let items4;
  let items5;
  let items6;
  let items7;
  let num8;
  let obj10;
  let obj6;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp26;
  let tmp30Result;
  let tmp35;
  let obj = guildId(first[11]);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  let tmp4 = closure_13();
  importDefault = tmp4;
  [first, _slicedToArray] = stateFromStores.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [analyticsLocations];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = E;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    tmp10 = cResult[3];
  }
  const tmpResult = guildId(first[12]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first1, E, tmp10);
  const width = require("useWindowDimensions")().width;
  const tmpResult4 = guildId(first[14]);
  const token = tmpResult4.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    const items2 = [UserStore];
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const items3 = [];
    cResult[4] = items2;
    cResult[5] = O;
    cResult[6] = items3;
    tmp15 = items3;
    tmp14 = O;
    tmp13 = items2;
  } else {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  const tmpResult5 = guildId(first[12]);
  stateFromStores = tmpResult5.useStateFromStores(tmp13, tmp14, tmp15);
  const tmp11Result = require("PremiumUtils");
  let result = tmp11Result.canUseEmojisEverywhere(stateFromStores);
  let tmp18 = !result;
  if (tmp18) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    tmp18 = !obj6.isPremium(stateFromStores);
  }
  const diff = width - (26 + 2 * token);
  const rounded = Math.floor(diff / 32);
  let result1 = (diff - 24 * rounded) / (2 * rounded);
  let num7 = 4;
  if (4 <= result1) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    num7 = 4;
    if (result1 < 12) {
      class E {
        constructor() {
          return EmojiStore.getGuildEmoji(guildId);
        }
      }
    }
  }
  if (first) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    num8 = 0;
  } else {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    num8 = stateFromStoresArray.length - tmp22;
  }
  let diff1 = tmp22;
  let bound = num8;
  if (0 < num8) {
    class E {
      constructor() {
        return EmojiStore.getGuildEmoji(guildId);
      }
    }
    diff1 = tmp22 - 1;
    const _Math = Math;
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    bound = Math.min(num8 + 1, 99);
  }
  const substr = stateFromStoresArray.slice(0, diff1);
  const tmp11Result2 = require("useAnalyticsLocations");
  analyticsLocations = tmp11Result2(tmp11(tmp2[17]).EMOJI_PICKER).analyticsLocations;
  if (cResult[7] !== analyticsLocations) {
    class K {
      constructor(arg0, currentUser) {
        let obj5;
        let result = null == currentUser;
        if (!result) {
          const obj = PremiumUtilsDefault;
          result = obj.canUseEmojisEverywhere(currentUser);
        }
        if (!result) {
          const _HermesInternal = HermesInternal;
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet("GuildProfile:" + arg0);
          const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
          obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
          const obj3 = PremiumUpsellUtilsDefault;
          const result1 = obj3.handleShowUpsellAlert(obj4);
        }
      }
    }
    cResult[7] = analyticsLocations;
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = K;
    tmp26 = K;
  } else {
    class K {
      constructor(arg0, currentUser) {
        let obj5;
        let result = null == currentUser;
        if (!result) {
          const obj = PremiumUtilsDefault;
          result = obj.canUseEmojisEverywhere(currentUser);
        }
        if (!result) {
          const _HermesInternal = HermesInternal;
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet("GuildProfile:" + arg0);
          const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
          obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
          const obj3 = PremiumUpsellUtilsDefault;
          const result1 = obj3.handleShowUpsellAlert(obj4);
        }
      }
    }
  }
  K = tmp26;
  const tmpResult6 = guildId(first[20]);
  const isThemeDarkResult = tmpResult6.isThemeDark(K.theme);
  const unsafe_rawColors = tmp11(tmp2[9]).unsafe_rawColors;
  const tmp28 = isThemeDarkResult ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp30Result4 = null;
  if (substr.length > 0) {
    class K {
      constructor(arg0, currentUser) {
        let obj5;
        let result = null == currentUser;
        if (!result) {
          const obj = PremiumUtilsDefault;
          result = obj.canUseEmojisEverywhere(currentUser);
        }
        if (!result) {
          const _HermesInternal = HermesInternal;
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet("GuildProfile:" + arg0);
          const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
          obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
          const obj3 = PremiumUpsellUtilsDefault;
          const result1 = obj3.handleShowUpsellAlert(obj4);
        }
      }
    }
    let obj2 = { title: obj9.string(guildId(tmp2[22]).t.Q60n1E), trailing: tmp30Result, children: closure_12(tmp35, obj10) };
    const RowGroup = tmp(tmp2[21]).RowGroup;
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    tmp30Result = null;
    if (tmp18) {
      class K {
        constructor(arg0, currentUser) {
          let obj5;
          let result = null == currentUser;
          if (!result) {
            const obj = PremiumUtilsDefault;
            result = obj.canUseEmojisEverywhere(currentUser);
          }
          if (!result) {
            const _HermesInternal = HermesInternal;
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet("GuildProfile:" + arg0);
            const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
            obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
            const obj3 = PremiumUpsellUtilsDefault;
            const result1 = obj3.handleShowUpsellAlert(obj4);
          }
        }
      }
      tmp32[1] = function onPress() {
        return K(guildId, stateFromStores);
      };
      class O {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      let obj3 = { style: tmp4.header, children: items4 };
      let obj4 = { style: tmp4.dotSeparator };
      let PressableOpacity = tmp(tmp2[23]).PressableOpacity;
      items4 = [tmp30(num7, obj4), , ];
      let obj5 = { source: require("AssetRegistry"), color: tmp28, size: guildId(tmp2[24]).Icon.Sizes.SMALL };
      const Icon = tmp(tmp2[24]).Icon;
      items4[1] = tmp30(Icon, obj5);
      const obj7 = { style: items5, children: intl.string(guildId(first[22]).t.p1j56s) };
      items5 = [tmp4.premiumTitle, ];
      const obj8 = { color: tmp28 };
      items5[1] = obj8;
      const LegacyText = tmp(tmp2[24]).LegacyText;
      intl = tmp(tmp2[22]).intl;
      items4[2] = tmp30(LegacyText, obj7);
      tmp32[2] = closure_12(num7, obj3);
      tmp30Result = tmp30(PressableOpacity, tmp32);
    }
    obj10 = { style: tmp4.emojiContainer, children: items6 };
    items6 = [
      substr.map((accessibilityLabel) => {
          let items;
          let obj2;
          let obj5;
          let obj6;
          let tmp3Result;
          let tmp3Result2;
          let tmp4;
          let closure_0 = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const obj2 = ToastUtils;
              obj2.presentEmoji(accessibilityLabel);
              if (!first) {
                closure_3(true);
              }
            },
            children: closure_1_11(tmp4, obj2)
          };
          const PressableOpacity = guildId(first[23]).PressableOpacity;
          obj2 = { resizeMode: "contain", style: items, placeholder: tmp3Result, source: obj5 };
          items = [closure_1.emoji, ];
          const obj3 = { margin: num7 };
          items[1] = obj3;
          tmp4 = closure_1(first[29]);
          const obj4 = guildId(first[20]);
          if (obj4.isThemeDark(K.theme)) {
            tmp3Result = closure_1(first[30]);
          } else {
            tmp3Result = closure_1(first[31]);
          }
          obj5 = { uri: tmp3Result2.getEmojiURL(obj6) };
          obj6 = { id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 };
          tmp3Result2 = closure_1(first[32]);
          return closure_1_11(PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp30Result3 = null;
    tmp35 = num7;
    if (bound > 0) {
      class K {
        constructor(arg0, currentUser) {
          let obj5;
          let result = null == currentUser;
          if (!result) {
            const obj = PremiumUtilsDefault;
            result = obj.canUseEmojisEverywhere(currentUser);
          }
          if (!result) {
            const _HermesInternal = HermesInternal;
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet("GuildProfile:" + arg0);
            const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
            obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
            const obj3 = PremiumUpsellUtilsDefault;
            const result1 = obj3.handleShowUpsellAlert(obj4);
          }
        }
      }
      const PressableOpacity2 = tmp(tmp2[23]).PressableOpacity;
      const intl2 = tmp(tmp2[22]).intl;
      class O {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      tmp37[1] = tmp38(guildId(first[22]).t["UKOtz+"]);
      tmp37[2] = function onPress() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        closure_3(true);
      };
      const obj11 = { style: items7, children: "+" + bound };
      items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp4);
      const obj12 = { margin: num7 };
      items7[2] = obj12;
      let _HermesInternal = HermesInternal;
      const LegacyText2 = tmp(tmp2[24]).LegacyText;
      tmp37[3] = tmp30(LegacyText2, obj11);
      tmp30Result3 = tmp30(PressableOpacity2, tmp37, -1);
    }
    items6[1] = tmp30Result3;
    tmp30Result4 = tmp30(RowGroup, obj2);
  }
  return tmp30Result4;
}) : ((guildId) => {
  let LegacyText2;
  let closure_1;
  let closure_3;
  let closure_7;
  let currentUser;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let items7;
  let length;
  let num3;
  let obj13;
  let obj15;
  let obj8;
  let tmp20Result;
  let tmp25;
  guildId = guildId.guildId;
  first = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let num;
  let analyticsLocations;
  ThemeStore = undefined;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = stateFromStores;
  [first, _slicedToArray] = stateFromStores.useState(false);
  let tmp4 = guildId;
  let obj2 = guildId(first[12]);
  let items = [analyticsLocations];
  const items1 = [guildId];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => EmojiStore.getGuildEmoji(guildId), items1);
  const width = require("useWindowDimensions")().width;
  let obj3 = guildId(first[14]);
  const token = obj3.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  let obj4 = guildId(first[12]);
  const items2 = [UserStore];
  stateFromStores = obj4.useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  let obj5 = require("PremiumUtils");
  let result = obj5.canUseEmojisEverywhere(stateFromStores);
  let tmp10 = !result;
  if (tmp10) {
    const tmp6Result = require("PremiumUtils");
    tmp10 = !tmp6Result.isPremium(stateFromStores);
  }
  const diff = width - (26 + 2 * token);
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
    length = stateFromStoresArray.length;
    num3 = 0;
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
  const tmp6Result2 = require("useAnalyticsLocations");
  analyticsLocations = tmp6Result2(tmp6(tmp5[17]).EMOJI_PICKER).analyticsLocations;
  const items3 = [analyticsLocations];
  ThemeStore = obj.useCallback((arg0, currentUser) => {
    let obj5;
    let result = null == currentUser;
    if (!result) {
      const obj = PremiumUtilsDefault;
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet("GuildProfile:" + arg0);
      const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: obj5, analyticsLocations };
      obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
      const obj3 = PremiumUpsellUtilsDefault;
      const result1 = obj3.handleShowUpsellAlert(obj4);
    }
  }, items3);
  const tmp4Result = tmp4(first[20]);
  const isThemeDarkResult = tmp4Result.isThemeDark(ThemeStore.theme);
  const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
  const tmp18 = isThemeDarkResult ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp20Result4 = null;
  if (substr.length > 0) {
    let obj6 = { title: intl.string(tmp4(tmp5[22]).t.Q60n1E), trailing: tmp20Result, children: closure_12(tmp25, obj13) };
    const RowGroup = tmp4(tmp5[21]).RowGroup;
    intl = tmp4(tmp5[22]).intl;
    tmp20Result = null;
    if (tmp10) {
      const obj7 = {
        accessibilityRole: "button",
        onPress() {
              return closure_7(guildId, stateFromStores);
            },
        children: closure_12(num, obj8)
      };
      obj8 = { style: tmp.header, children: items4 };
      const obj9 = { style: tmp.dotSeparator };
      let PressableOpacity = tmp4(tmp5[23]).PressableOpacity;
      items4 = [closure_11(num, obj9), , ];
      const obj10 = { source: require("AssetRegistry"), color: tmp18, size: tmp4(first[24]).Icon.Sizes.SMALL };
      const Icon = tmp4(tmp5[24]).Icon;
      items4[1] = closure_11(Icon, obj10);
      const obj11 = { style: items5, children: intl2.string(tmp4(first[22]).t.p1j56s) };
      items5 = [tmp.premiumTitle, ];
      const obj12 = { color: tmp18 };
      items5[1] = obj12;
      const LegacyText = tmp4(tmp5[24]).LegacyText;
      intl2 = tmp4(tmp5[22]).intl;
      items4[2] = closure_11(LegacyText, obj11);
      tmp20Result = closure_11(PressableOpacity, obj7);
    }
    obj13 = { style: tmp.emojiContainer, children: items6 };
    items6 = [
      substr.map((accessibilityLabel) => {
          let items;
          let obj2;
          let obj5;
          let obj6;
          let tmp3Result;
          let tmp3Result2;
          let tmp4;
          let closure_0 = accessibilityLabel;
          let obj = {
            accessibilityRole: "image",
            accessibilityLabel: accessibilityLabel.name,
            onPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const obj2 = ToastUtils;
              obj2.presentEmoji(accessibilityLabel);
              if (!first) {
                closure_3(true);
              }
            },
            children: closure_1_11(tmp4, obj2)
          };
          const PressableOpacity = guildId(first[23]).PressableOpacity;
          obj2 = { resizeMode: "contain", style: items, placeholder: tmp3Result, source: obj5 };
          items = [closure_1.emoji, ];
          const obj3 = { margin: num };
          items[1] = obj3;
          tmp4 = closure_1(first[29]);
          const obj4 = guildId(first[20]);
          if (obj4.isThemeDark(closure_7.theme)) {
            tmp3Result = closure_1(first[30]);
          } else {
            tmp3Result = closure_1(first[31]);
          }
          obj5 = { uri: tmp3Result2.getEmojiURL(obj6) };
          obj6 = { id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 };
          tmp3Result2 = closure_1(first[32]);
          return closure_1_11(PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp20Result3 = null;
    tmp25 = num;
    if (bound > 0) {
      const obj14 = {
        accessibilityRole: "button",
        accessibilityLabel: intl3.string(tmp4(first[22]).t["UKOtz+"]),
        onPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              closure_3(true);
            },
        children: closure_11(LegacyText2, obj15)
      };
      const PressableOpacity2 = tmp4(tmp5[23]).PressableOpacity;
      intl3 = tmp4(tmp5[22]).intl;
      obj15 = { style: items7, children: "+" + bound };
      items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj16 = { margin: num };
      items7[2] = obj16;
      let _HermesInternal = HermesInternal;
      LegacyText2 = tmp4(tmp5[24]).LegacyText;
      tmp20Result3 = closure_11(PressableOpacity2, obj14, -1);
    }
    items6[1] = tmp20Result3;
    tmp20Result4 = closure_11(RowGroup, obj6);
  }
  return tmp20Result4;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default tmp5;