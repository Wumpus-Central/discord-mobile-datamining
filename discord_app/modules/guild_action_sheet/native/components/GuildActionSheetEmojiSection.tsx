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

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UpsellTypes: closure_9, AnalyticsSections: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles.dotSeparator = size;
createStyles = {
  color: nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE,
  marginLeft: 4,
  fontFamily: Fonts.PRIMARY_BOLD,
  fontSize: 12,
};
createStyles.premiumTitle = createStyles;
createStyles.emojiContainer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 4 };
createStyles.emoji = { width: 24, height: 24 };
createStyles.emojiCount = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 12,
  fontFamily: Fonts.PRIMARY_BOLD,
  textAlign: "center",
  textAlignVertical: "center",
};
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_action_sheet/native/components/GuildActionSheetEmojiSection.tsx",
);

export default function GuildActionSheetEmojiSection(guildId) {
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  let stateFromStores;
  let num;
  let analyticsLocations;
  ThemeStore = undefined;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = stateFromStores;
  const tmp2 = _slicedToArray(stateFromStores.useState(false), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  let obj1 = guildId(first[10]);
  let items = [analyticsLocations];
  const items1 = [guildId];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => EmojiStore.getGuildEmoji(guildId), items1);
  let obj2 = guildId(first[12]);
  const token = obj2.useToken(require("native").modules.mobile.TABLE_ROW_PADDING);
  let obj3 = guildId(first[10]);
  const items2 = [UserStore];
  stateFromStores = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser(), []);
  let obj4 = require("PremiumUtils");
  let result = obj4.canUseEmojisEverywhere(stateFromStores);
  let tmp10 = !result;
  if (!result) {
    let tmp6Result = tmp6(tmp5[13]);
    tmp10 = !tmp6Result.isPremium(stateFromStores);
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
  tmp6Result = tmp6(tmp5[14]);
  analyticsLocations = tmp6Result(tmp6(tmp5[15]).EMOJI_PICKER).analyticsLocations;
  const items3 = [analyticsLocations];
  ThemeStore = obj.useCallback((arg0, currentUser) => {
    let result = null == currentUser;
    if (!result) {
      let obj = PremiumUtilsDefault;
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfile:" + arg0);
      obj = { initialUpsellKey: constants.GLOBAL_EMOJI, analyticsLocation: null, analyticsLocations: null };
      obj = { section: constants2.EMOJI_PICKER_POPOUT };
      obj.analyticsLocation = obj;
      obj.analyticsLocations = analyticsLocations;
      const result1 = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj);
    }
  }, items3);
  const tmp4Result = guildId(first[18]);
  const unsafe_rawColors = tmp6(tmp5[9]).unsafe_rawColors;
  const tmp18 = guildId(first[18]).isThemeDark(ThemeStore.theme)
    ? unsafe_rawColors.PREMIUM_TIER_2_PURPLE
    : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
  let tmp20Result1 = null;
  if (substr.length > 0) {
    obj = { title: null, trailing: null, children: null };
    const intl = tmp4(tmp5[20]).intl;
    obj.title = intl.string(tmp4(tmp5[20]).t.Q60n1E);
    let tmp20Result = null;
    if (tmp10) {
      obj = {
        accessibilityRole: "button",
        onPress() {
          return closure_7(guildId, stateFromStores);
        },
        children: null,
      };
      obj1 = { style: tmp.header, children: null };
      obj2 = { style: tmp.dotSeparator };
      const items4 = [closure_11(num, obj2), ,];
      obj3 = { source: tmp6(tmp5[23]), color: tmp18, size: tmp4(tmp5[22]).Icon.Sizes.SMALL };
      items4[1] = closure_11(tmp4(tmp5[22]).Icon, obj3);
      obj4 = { style: null, children: null };
      const items5 = [tmp.premiumTitle];
      const obj5 = { color: tmp18 };
      items5[1] = obj5;
      obj4.style = items5;
      const intl2 = tmp4(tmp5[20]).intl;
      obj4.children = intl2.string(tmp4(tmp5[20]).t.p1j56s);
      items4[2] = closure_11(tmp4(tmp5[22]).LegacyText, obj4);
      obj1.children = items4;
      obj.children = closure_12(num, obj1);
      tmp20Result = closure_11(tmp4(tmp5[21]).PressableOpacity, obj);
    }
    obj.trailing = tmp20Result;
    const obj6 = { style: tmp.emojiContainer, children: null };
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
        obj = { resizeMode: "contain", style: null, placeholder: null, source: null };
        const items = [closure_1.emoji];
        obj = { margin: num };
        items[1] = obj;
        obj.style = items;
        const tmp4 = closure_1(first[27]);
        if (obj4.isThemeDark(closure_7.theme)) {
          let tmp3Result = closure_1(first[28]);
        } else {
          tmp3Result = closure_1(first[29]);
        }
        obj.placeholder = tmp3Result;
        const obj1 = { uri: null };
        tmp3Result = closure_1(first[30]);
        obj1.uri = tmp3Result.getEmojiURL({
          id: accessibilityLabel.id,
          animated: accessibilityLabel.animated,
          size: 48,
        });
        obj.source = obj1;
        obj.children = closure_1_11(tmp4, obj);
        return closure_1_11(guildId(first[21]).PressableOpacity, obj, accessibilityLabel.id);
      }),
    ];
    tmp20Result = null;
    if (bound > 0) {
      const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl3 = tmp4(tmp5[20]).intl;
      obj7.accessibilityLabel = intl3.string(tmp4(tmp5[20]).t["UKOtz+"]);
      obj7.onPress = function onPress() {
        const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        closure_3(true);
      };
      const obj8 = { style: null, children: null };
      const items7 = [, ,];
      ({ emoji: arr10[0], emojiCount: arr10[1] } = tmp);
      const obj9 = { margin: num };
      items7[2] = obj9;
      obj8.style = items7;
      let _HermesInternal = HermesInternal;
      obj8.children = "+" + bound;
      obj7.children = closure_11(tmp4(tmp5[22]).LegacyText, obj8);
      tmp20Result = closure_11(tmp4(tmp5[21]).PressableOpacity, obj7, -1);
    }
    items6[1] = tmp20Result;
    obj6.children = items6;
    obj.children = closure_12(num, obj6);
    tmp20Result1 = closure_11(tmp4(tmp5[19]).RowGroup, obj);
  }
  return tmp20Result1;
}
