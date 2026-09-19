// === Module 14240: GuildActionSheetEmojiSection ===

// Module 14240 (GuildActionSheetEmojiSection)
import nativeDefault from "native" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import HapticUtils from "HapticUtils" /* 4724 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4725 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9426 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5671 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UpsellTypes: closure_9, AnalyticsSections: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { header: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" }, dotSeparator: null, premiumTitle: null, emojiContainer: null, emoji: null, emojiCount: null };
let size = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj2.dotSeparator = size;
obj2.premiumTitle = { color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
obj2.emojiContainer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 };
obj2.emoji = { width: 24, height: 24 };
let obj3 = { color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, marginLeft: 4, fontFamily: Fonts.PRIMARY_BOLD, fontSize: 12 };
obj2.emojiCount = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: "center" };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx");

export default function GuildActionSheetEmojiSection(guildId) {
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
  const stateFromStoresArray = guildId(first[10]).useStateFromStoresArray(items, () => EmojiStore.getGuildEmoji(guildId), items1);
  let obj = stateFromStores;
  let obj2 = guildId(first[10]);
  const token = guildId(first[12]).useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guildId(first[12]);
  const items2 = [UserStore];
  stateFromStores = guildId(first[10]).useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  let obj4 = guildId(first[10]);
  let result = require("PremiumUtils").canUseEmojisEverywhere(stateFromStores);
  let tmp10 = !result;
  if (!result) {
    tmp10 = !tmp6(tmp5[13]).isPremium(stateFromStores);
    const tmp6Result = tmp6(tmp5[13]);
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
  analyticsLocations = require("useAnalyticsLocations")(tmp6(tmp5[15]).EMOJI_PICKER).analyticsLocations;
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
  const tmp4Result = guildId(first[18]);
  const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
  const tmp18 = guildId(first[18]).isThemeDark(ThemeStore.theme) ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp20Result4 = null;
  if (substr.length > 0) {
    const obj6 = { title: null, trailing: null, children: null };
    const intl = tmp4(tmp5[20]).intl;
    obj6.title = intl.string(tmp4(tmp5[20]).t.Q60n1E);
    let tmp20Result = null;
    if (tmp10) {
      const obj7 = {
        accessibilityRole: "button",
        onPress() {
              return closure_7(guildId, stateFromStores);
            },
        children: null
      };
      const obj8 = { style: tmp.header, children: null };
      const obj9 = { style: tmp.dotSeparator };
      const items4 = [closure_11(num, obj9), , ];
      const obj10 = { source: tmp6(tmp5[23]), color: tmp18, size: tmp4(tmp5[22]).Icon.Sizes.SMALL };
      items4[1] = closure_11(tmp4(tmp5[22]).Icon, obj10);
      const obj11 = { style: null, children: null };
      const items5 = [tmp.premiumTitle, ];
      const obj12 = { color: tmp18 };
      items5[1] = obj12;
      obj11.style = items5;
      const intl2 = tmp4(tmp5[20]).intl;
      obj11.children = intl2.string(tmp4(tmp5[20]).t.p1j56s);
      items4[2] = closure_11(tmp4(tmp5[22]).LegacyText, obj11);
      obj8.children = items4;
      obj7.children = closure_12(num, obj8);
      tmp20Result = closure_11(tmp4(tmp5[21]).PressableOpacity, obj7);
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
            children: null
          };
          let obj2 = { resizeMode: "contain", style: null, placeholder: null, source: null };
          const items = [closure_1.emoji, { margin: num }];
          obj2.style = items;
          const obj3 = { margin: num };
          const tmp4 = closure_1(first[27]);
          if (obj4.isThemeDark(closure_7.theme)) {
            let tmp3Result = closure_1(first[28]);
          } else {
            tmp3Result = closure_1(first[29]);
          }
          obj2.placeholder = tmp3Result;
          const obj5 = { uri: null };
          obj4 = guildId(first[18]);
          obj5.uri = closure_1(first[30]).getEmojiURL({ id: accessibilityLabel.id, animated: accessibilityLabel.animated, size: 48 });
          obj2.source = obj5;
          obj.children = closure_1_11(tmp4, obj2);
          return closure_1_11(guildId(first[21]).PressableOpacity, obj, accessibilityLabel.id);
        }),

    ];
    let tmp20Result3 = null;
    if (bound > 0) {
      const obj14 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = tmp4(tmp5[20]).intl;
      obj14.accessibilityLabel = intl3.string(tmp4(tmp5[20]).t["UKOtz+"]);
      obj14.onPress = function onPress() {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        closure_3(true);
      };
      const obj15 = { style: null, children: null };
      const items7 = [, , ];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj16 = { margin: num };
      items7[2] = obj16;
      obj15.style = items7;
      let _HermesInternal = HermesInternal;
      obj15.children = "+" + bound;
      obj14.children = closure_11(tmp4(tmp5[22]).LegacyText, obj15);
      tmp20Result3 = closure_11(tmp4(tmp5[21]).PressableOpacity, obj14, -1);
    }
    items6[1] = tmp20Result3;
    obj13.children = items6;
    obj6.children = closure_12(num, obj13);
    tmp20Result4 = closure_11(tmp4(tmp5[19]).RowGroup, obj6);
  }
  return tmp20Result4;
};