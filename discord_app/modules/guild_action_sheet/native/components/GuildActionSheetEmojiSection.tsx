// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../emojis/EmojiStore.tsx";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ UpsellTypes: closure_9, AnalyticsSections: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  dotSeparator: null,
  premiumTitle: null,
  emojiContainer: null,
  emoji: null,
  emojiCount: null,
};
let size = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 8,
  marginLeft: 8,
  backgroundColor: nativeDefault.colors.TEXT_SUBTLE,
};
obj2.dotSeparator = size;
obj2.premiumTitle = {
  color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
  marginLeft: 4,
  fontFamily: Fonts.PRIMARY_BOLD,
  fontSize: 12,
};
obj2.emojiContainer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 };
obj2.emoji = { width: 24, height: 24 };
let obj3 = {
  color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
  marginLeft: 4,
  fontFamily: Fonts.PRIMARY_BOLD,
  fontSize: 12,
};
obj2.emojiCount = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_BOLD,
  textAlign: "center",
  textAlignVertical: "center",
};
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_BOLD,
  textAlign: "center",
  textAlignVertical: "center",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildActionSheetEmojiSection(guildId) {
      const cResult = guildId(first[11]).c(9);
      guildId = guildId.guildId;
      let tmp4 = closure_13();
      importDefault = tmp4;
      [first, _slicedToArray] = stateFromStores.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [analyticsLocations];
        cResult[0] = items;
        let first1 = items;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = E;
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        tmp10 = cResult[3];
      }
      let obj = guildId(first[11]);
      const stateFromStoresArray = guildId(first[12]).useStateFromStoresArray(first1, E, tmp10);
      const tmpResult = guildId(first[12]);
      const token = guildId(first[14]).useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        const items2 = [UserStore];
        const fn = function f() {
          return currentUser.getCurrentUser();
        };
        const items3 = [];
        cResult[4] = items2;
        cResult[5] = fn;
        cResult[6] = items3;
        let tmp15 = items3;
        let tmp14 = fn;
        const tmp13 = items2;
      } else {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        tmp14 = cResult[5];
        tmp15 = cResult[6];
      }
      const tmpResult4 = guildId(first[14]);
      stateFromStores = guildId(first[12]).useStateFromStores(tmp13, tmp14, tmp15);
      const tmpResult5 = guildId(first[12]);
      let result = require("PremiumUtils").canUseEmojisEverywhere(stateFromStores);
      let tmp18 = !result;
      if (!result) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        tmp18 = !obj6.isPremium(stateFromStores);
      }
      const diff = require("useWindowDimensions")().width - (26 + 2 * token);
      const rounded = Math.floor(diff / 32);
      let result1 = (diff - 24 * rounded) / (2 * rounded);
      let num7 = 4;
      if (4 <= result1) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        num7 = 4;
        if (result1 < 12) {
          class E {
            constructor() {
              return closure_6.getGuildEmoji(guildId);
            }
          }
        }
      }
      if (first) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        let num8 = 0;
      } else {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        num8 = stateFromStoresArray.length - tmp22;
      }
      let diff1 = tmp22;
      let bound = num8;
      if (0 < num8) {
        class E {
          constructor() {
            return closure_6.getGuildEmoji(guildId);
          }
        }
        diff1 = tmp22 - 1;
        const _Math = Math;
        bound = Math.min(num8 + 1, 99);
      }
      const substr = stateFromStoresArray.slice(0, diff1);
      const tmp11Result = require("PremiumUtils");
      analyticsLocations = require("useAnalyticsLocations")(tmp11(tmp2[17]).EMOJI_PICKER).analyticsLocations;
      if (cResult[7] !== analyticsLocations) {
        class K {
          constructor(arg0, arg1) {
            result = null == arg1;
            if (!result) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              result = obj.canUseEmojisEverywhere(arg1);
            }
            if (!result) {
              tmp4 = guildId;
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj2 = closure_1(closure_2[18]);
              tmp7 = globalThis;
              _HermesInternal = HermesInternal;
              str = "GuildProfile:";
              hideActionSheetResult = obj2.hideActionSheet("GuildProfile:" + guildId);
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj3 = closure_1(closure_2[19]);
              obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
              tmp11 = UpsellTypes;
              obj1.initialUpsellKey = UpsellTypes.GLOBAL_EMOJI;
              obj6 = { section: null };
              tmp12 = AnalyticsSections;
              obj6.section = AnalyticsSections.EMOJI_PICKER_POPOUT;
              obj1.analyticsLocation = obj6;
              tmp13 = analyticsLocations;
              obj1.analyticsLocations = analyticsLocations;
              result1 = obj3.handleShowUpsellAlert(obj1);
            }
            return;
          }
        }
        cResult[7] = analyticsLocations;
        cResult[8] = K;
      } else {
        class K {
          constructor(arg0, arg1) {
            result = null == arg1;
            if (!result) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              result = obj.canUseEmojisEverywhere(arg1);
            }
            if (!result) {
              tmp4 = guildId;
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj2 = closure_1(closure_2[18]);
              tmp7 = globalThis;
              _HermesInternal = HermesInternal;
              str = "GuildProfile:";
              hideActionSheetResult = obj2.hideActionSheet("GuildProfile:" + guildId);
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj3 = closure_1(closure_2[19]);
              obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
              tmp11 = UpsellTypes;
              obj1.initialUpsellKey = UpsellTypes.GLOBAL_EMOJI;
              obj6 = { section: null };
              tmp12 = AnalyticsSections;
              obj6.section = AnalyticsSections.EMOJI_PICKER_POPOUT;
              obj1.analyticsLocation = obj6;
              tmp13 = analyticsLocations;
              obj1.analyticsLocations = analyticsLocations;
              result1 = obj3.handleShowUpsellAlert(obj1);
            }
            return;
          }
        }
      }
      ThemeStore = K;
      const tmp11Result2 = require("useAnalyticsLocations");
      const tmpResult6 = guildId(first[20]);
      const unsafe_rawColors = tmp11(tmp2[9]).unsafe_rawColors;
      const tmp28 = guildId(first[20]).isThemeDark(ThemeStore.theme)
        ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE
        : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
      let tmp30Result4 = null;
      if (substr.length > 0) {
        class K {
          constructor(arg0, arg1) {
            result = null == arg1;
            if (!result) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              result = obj.canUseEmojisEverywhere(arg1);
            }
            if (!result) {
              tmp4 = guildId;
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj2 = closure_1(closure_2[18]);
              tmp7 = globalThis;
              _HermesInternal = HermesInternal;
              str = "GuildProfile:";
              hideActionSheetResult = obj2.hideActionSheet("GuildProfile:" + guildId);
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj3 = closure_1(closure_2[19]);
              obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
              tmp11 = UpsellTypes;
              obj1.initialUpsellKey = UpsellTypes.GLOBAL_EMOJI;
              obj6 = { section: null };
              tmp12 = AnalyticsSections;
              obj6.section = AnalyticsSections.EMOJI_PICKER_POPOUT;
              obj1.analyticsLocation = obj6;
              tmp13 = analyticsLocations;
              obj1.analyticsLocations = analyticsLocations;
              result1 = obj3.handleShowUpsellAlert(obj1);
            }
            return;
          }
        }
        let obj2 = { title: null, trailing: null, children: null };
        const intl = tmp(tmp2[22]).intl;
        obj2.title = intl.string(tmp(tmp2[22]).t.Q60n1E);
        let tmp30Result = null;
        if (tmp18) {
          class K {
            constructor(arg0, arg1) {
              result = null == arg1;
              if (!result) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                result = obj.canUseEmojisEverywhere(arg1);
              }
              if (!result) {
                tmp4 = guildId;
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj2 = closure_1(closure_2[18]);
                tmp7 = globalThis;
                _HermesInternal = HermesInternal;
                str = "GuildProfile:";
                hideActionSheetResult = obj2.hideActionSheet("GuildProfile:" + guildId);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[19]);
                obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
                tmp11 = UpsellTypes;
                obj1.initialUpsellKey = UpsellTypes.GLOBAL_EMOJI;
                obj6 = { section: null };
                tmp12 = AnalyticsSections;
                obj6.section = AnalyticsSections.EMOJI_PICKER_POPOUT;
                obj1.analyticsLocation = obj6;
                tmp13 = analyticsLocations;
                obj1.analyticsLocations = analyticsLocations;
                result1 = obj3.handleShowUpsellAlert(obj1);
              }
              return;
            }
          }
          tmp32[1] = function onPress() {
            return K(guildId, stateFromStores);
          };
          let obj3 = { style: tmp4.header, children: null };
          let obj4 = { style: tmp4.dotSeparator };
          const items4 = [tmp30(num7, obj4), ,];
          let obj5 = { source: tmp11(tmp2[25]), color: tmp28, size: tmp(tmp2[24]).Icon.Sizes.SMALL };
          items4[1] = tmp30(tmp(tmp2[24]).Icon, obj5);
          const obj7 = { style: null, children: null };
          const items5 = [tmp4.premiumTitle];
          const obj8 = { color: tmp28 };
          items5[1] = obj8;
          obj7.style = items5;
          const intl2 = tmp(tmp2[22]).intl;
          obj7.children = intl2.string(tmp(tmp2[22]).t.p1j56s);
          items4[2] = tmp30(tmp(tmp2[24]).LegacyText, obj7);
          obj3.children = items4;
          tmp32[2] = closure_12(num7, obj3);
          tmp30Result = tmp30(tmp(tmp2[23]).PressableOpacity, tmp32);
        }
        obj2.trailing = tmp30Result;
        const obj9 = { style: tmp4.emojiContainer, children: null };
        const items6 = [
          substr.map((accessibilityLabel) => {
            closure_0 = accessibilityLabel;
            let obj = {
              accessibilityRole: "image",
              accessibilityLabel: accessibilityLabel.name,
              onPress() {
                const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                ToastUtils.presentEmoji(closure_0);
                if (!first) {
                  closure_3(true);
                }
              },
              children: null,
            };
            let obj2 = { resizeMode: "contain", style: null, placeholder: null, source: null };
            const items = [closure_1.emoji, { margin: num7 }];
            obj2.style = items;
            const obj3 = { margin: num7 };
            const tmp4 = closure_1(first[29]);
            if (obj4.isThemeDark(K.theme)) {
              let tmp3Result = closure_1(first[30]);
            } else {
              tmp3Result = closure_1(first[31]);
            }
            obj2.placeholder = tmp3Result;
            const obj5 = { uri: null };
            obj4 = guildId(first[20]);
            obj5.uri = closure_1(first[32]).getEmojiURL({
              id: accessibilityLabel.id,
              animated: accessibilityLabel.animated,
              size: 48,
            });
            obj2.source = obj5;
            obj.children = closure_1_11(tmp4, obj2);
            return closure_1_11(guildId(first[23]).PressableOpacity, obj, accessibilityLabel.id);
          }),
        ];
        let tmp30Result3 = null;
        if (bound > 0) {
          class K {
            constructor(arg0, arg1) {
              result = null == arg1;
              if (!result) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                result = obj.canUseEmojisEverywhere(arg1);
              }
              if (!result) {
                tmp4 = guildId;
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj2 = closure_1(closure_2[18]);
                tmp7 = globalThis;
                _HermesInternal = HermesInternal;
                str = "GuildProfile:";
                hideActionSheetResult = obj2.hideActionSheet("GuildProfile:" + guildId);
                tmp9 = closure_1;
                tmp10 = closure_2;
                obj3 = closure_1(closure_2[19]);
                obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
                tmp11 = UpsellTypes;
                obj1.initialUpsellKey = UpsellTypes.GLOBAL_EMOJI;
                obj6 = { section: null };
                tmp12 = AnalyticsSections;
                obj6.section = AnalyticsSections.EMOJI_PICKER_POPOUT;
                obj1.analyticsLocation = obj6;
                tmp13 = analyticsLocations;
                obj1.analyticsLocations = analyticsLocations;
                result1 = obj3.handleShowUpsellAlert(obj1);
              }
              return;
            }
          }
          const intl3 = tmp(tmp2[22]).intl;
          tmp38[1] = intl3.string(tmp(tmp2[22]).t["UKOtz+"]);
          tmp38[2] = function onPress() {
            const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            closure_3(true);
          };
          const obj10 = { style: null, children: null };
          const items7 = [, ,];
          ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp4);
          const obj11 = { margin: num7 };
          items7[2] = obj11;
          obj10.style = items7;
          let _HermesInternal = HermesInternal;
          obj10.children = "+" + bound;
          tmp38[3] = tmp30(tmp(tmp2[24]).LegacyText, obj10);
          tmp30Result3 = tmp30(tmp(tmp2[23]).PressableOpacity, tmp38, -1);
        }
        items6[1] = tmp30Result3;
        obj9.children = items6;
        obj2.children = closure_12(num7, obj9);
        tmp30Result4 = tmp30(tmp(tmp2[21]).RowGroup, obj2);
      }
      return tmp30Result4;
    }
  : function GuildActionSheetEmojiSection(guildId) {
      guildId = guildId.guildId;
      first = undefined;
      _slicedToArray = undefined;
      let stateFromStores;
      let num;
      let analyticsLocations;
      ThemeStore = undefined;
      const tmp = closure_13();
      importDefault = tmp;
      [first, _slicedToArray] = stateFromStores.useState(false);
      let items = [analyticsLocations];
      const items1 = [guildId];
      const stateFromStoresArray = guildId(first[12]).useStateFromStoresArray(
        items,
        () => EmojiStore.getGuildEmoji(guildId),
        items1,
      );
      let obj = stateFromStores;
      let obj2 = guildId(first[12]);
      const token = guildId(first[14]).useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
      let obj3 = guildId(first[14]);
      const items2 = [UserStore];
      stateFromStores = guildId(first[12]).useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
      let obj4 = guildId(first[12]);
      let result = require("PremiumUtils").canUseEmojisEverywhere(stateFromStores);
      let tmp10 = !result;
      if (!result) {
        tmp10 = !tmp6(tmp5[15]).isPremium(stateFromStores);
        const tmp6Result = tmp6(tmp5[15]);
      }
      const diff = require("useWindowDimensions")().width - (26 + 2 * token);
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
      let obj5 = require("PremiumUtils");
      analyticsLocations = require("useAnalyticsLocations")(tmp6(tmp5[17]).EMOJI_PICKER).analyticsLocations;
      const items3 = [analyticsLocations];
      ThemeStore = obj.useCallback((arg0, currentUser) => {
        let result = null == currentUser;
        if (!result) {
          result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
        }
        if (!result) {
          const _HermesInternal = HermesInternal;
          ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfile:" + arg0);
          const obj4 = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null };
          const obj5 = { section: constants2.EMOJI_PICKER_POPOUT };
          obj4.analyticsLocation = obj5;
          obj4.analyticsLocations = analyticsLocations;
          const result1 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj4);
        }
      }, items3);
      const tmp6Result2 = require("useAnalyticsLocations");
      const tmp4Result = guildId(first[20]);
      const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
      const tmp18 = guildId(first[20]).isThemeDark(ThemeStore.theme)
        ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE
        : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
      let tmp20Result4 = null;
      if (substr.length > 0) {
        const obj6 = { title: null, trailing: null, children: null };
        const intl = tmp4(tmp5[22]).intl;
        obj6.title = intl.string(tmp4(tmp5[22]).t.Q60n1E);
        let tmp20Result = null;
        if (tmp10) {
          const obj7 = {
            accessibilityRole: "button",
            onPress() {
              return closure_7(guildId, stateFromStores);
            },
            children: null,
          };
          const obj8 = { style: tmp.header, children: null };
          const obj9 = { style: tmp.dotSeparator };
          const items4 = [closure_11(num, obj9), ,];
          const obj10 = { source: tmp6(tmp5[25]), color: tmp18, size: tmp4(tmp5[24]).Icon.Sizes.SMALL };
          items4[1] = closure_11(tmp4(tmp5[24]).Icon, obj10);
          const obj11 = { style: null, children: null };
          const items5 = [tmp.premiumTitle];
          const obj12 = { color: tmp18 };
          items5[1] = obj12;
          obj11.style = items5;
          const intl2 = tmp4(tmp5[22]).intl;
          obj11.children = intl2.string(tmp4(tmp5[22]).t.p1j56s);
          items4[2] = closure_11(tmp4(tmp5[24]).LegacyText, obj11);
          obj8.children = items4;
          obj7.children = closure_12(num, obj8);
          tmp20Result = closure_11(tmp4(tmp5[23]).PressableOpacity, obj7);
        }
        obj6.trailing = tmp20Result;
        const obj13 = { style: tmp.emojiContainer, children: null };
        const items6 = [
          substr.map((accessibilityLabel) => {
            closure_0 = accessibilityLabel;
            let obj = {
              accessibilityRole: "image",
              accessibilityLabel: accessibilityLabel.name,
              onPress() {
                const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                ToastUtils.presentEmoji(closure_0);
                if (!first) {
                  closure_3(true);
                }
              },
              children: null,
            };
            let obj2 = { resizeMode: "contain", style: null, placeholder: null, source: null };
            const items = [closure_1.emoji, { margin: num }];
            obj2.style = items;
            const obj3 = { margin: num };
            const tmp4 = closure_1(first[29]);
            if (obj4.isThemeDark(closure_7.theme)) {
              let tmp3Result = closure_1(first[30]);
            } else {
              tmp3Result = closure_1(first[31]);
            }
            obj2.placeholder = tmp3Result;
            const obj5 = { uri: null };
            obj4 = guildId(first[20]);
            obj5.uri = closure_1(first[32]).getEmojiURL({
              id: accessibilityLabel.id,
              animated: accessibilityLabel.animated,
              size: 48,
            });
            obj2.source = obj5;
            obj.children = closure_1_11(tmp4, obj2);
            return closure_1_11(guildId(first[23]).PressableOpacity, obj, accessibilityLabel.id);
          }),
        ];
        let tmp20Result3 = null;
        if (bound > 0) {
          const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl3 = tmp4(tmp5[22]).intl;
          obj14.accessibilityLabel = intl3.string(tmp4(tmp5[22]).t["UKOtz+"]);
          obj14.onPress = function onPress() {
            const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            closure_3(true);
          };
          const obj15 = { style: null, children: null };
          const items7 = [, ,];
          ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
          const obj16 = { margin: num };
          items7[2] = obj16;
          obj15.style = items7;
          let _HermesInternal = HermesInternal;
          obj15.children = "+" + bound;
          obj14.children = closure_11(tmp4(tmp5[24]).LegacyText, obj15);
          tmp20Result3 = closure_11(tmp4(tmp5[23]).PressableOpacity, obj14, -1);
        }
        items6[1] = tmp20Result3;
        obj13.children = items6;
        obj6.children = closure_12(num, obj13);
        tmp20Result4 = closure_11(tmp4(tmp5[21]).RowGroup, obj6);
      }
      return tmp20Result4;
    };
