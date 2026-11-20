// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import user2 from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes.tsx";
import _modDef4093 from "intl/CustomTypingIndicator.messages.js";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import UserProfileSettingsStore from "../user_profile/UserProfileSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1071).Permissions;
const EmojiIntention = fn(1389).EmojiIntention;
let obj = {};
obj[fn(1399).TypingSuggestion.UNSPECIFIED] = _modDef4093["6Cdy4a"];
obj[fn(1399).TypingSuggestion.YAPPING] = _modDef4093.E5VRaj;
obj[fn(1399).TypingSuggestion.VENTING] = _modDef4093.xmxdPC;
obj[fn(1399).TypingSuggestion.OVERSHARING] = _modDef4093["qGaH/9"];
obj[fn(1399).TypingSuggestion.BARKING] = _modDef4093.M282uk;
obj[fn(1399).TypingSuggestion.BABBLING] = _modDef4093.myNZDT;
obj[fn(1399).TypingSuggestion.DAYDREAMING] = _modDef4093.F7RLTP;
obj[fn(1399).TypingSuggestion.MEOWING] = _modDef4093.EfxyQI;
obj[fn(1399).TypingSuggestion.PURRING] = _modDef4093.PXYYXj;
obj[fn(1399).TypingSuggestion.CHIRPING] = _modDef4093.mnCAqf;
obj[fn(1399).TypingSuggestion.KEYSMASHING] = _modDef4093["123+VB"];
obj[fn(1399).TypingSuggestion.THINKING] = _modDef4093["/wXIQV"];
obj[fn(1399).TypingSuggestion.SQUEAKING] = _modDef4093.khnYc8;
let obj2 = {};
obj2[fn(1399).TypingSuggestion.UNSPECIFIED] = _modDef4093.kh4K4F;
obj2[fn(1399).TypingSuggestion.YAPPING] = _modDef4093.m9AeqG;
obj2[fn(1399).TypingSuggestion.VENTING] = _modDef4093["SZ0/Qu"];
obj2[fn(1399).TypingSuggestion.OVERSHARING] = _modDef4093.N8cWE8;
obj2[fn(1399).TypingSuggestion.BARKING] = _modDef4093.L5aWEN;
obj2[fn(1399).TypingSuggestion.BABBLING] = _modDef4093.AoBaEw;
obj2[fn(1399).TypingSuggestion.DAYDREAMING] = _modDef4093["3hOLod"];
obj2[fn(1399).TypingSuggestion.MEOWING] = _modDef4093["0Z9/o9"];
obj2[fn(1399).TypingSuggestion.PURRING] = _modDef4093.oK1MLW;
obj2[fn(1399).TypingSuggestion.CHIRPING] = _modDef4093.JPVvqj;
obj2[fn(1399).TypingSuggestion.KEYSMASHING] = _modDef4093.JfieQ4;
obj2[fn(1399).TypingSuggestion.THINKING] = _modDef4093.kz3mf0;
obj2[fn(1399).TypingSuggestion.SQUEAKING] = _modDef4093.HyvucT;
let items = [
  fn(1399).TypingSuggestion.UNSPECIFIED,
  fn(1399).TypingSuggestion.YAPPING,
  fn(1399).TypingSuggestion.VENTING,
  fn(1399).TypingSuggestion.OVERSHARING,
  fn(1399).TypingSuggestion.BARKING,
  fn(1399).TypingSuggestion.BABBLING,
  fn(1399).TypingSuggestion.DAYDREAMING,
  fn(1399).TypingSuggestion.MEOWING,
];
let items1 = [
  fn(1399).TypingSuggestion.PURRING,
  fn(1399).TypingSuggestion.CHIRPING,
  fn(1399).TypingSuggestion.KEYSMASHING,
  fn(1399).TypingSuggestion.THINKING,
  fn(1399).TypingSuggestion.SQUEAKING,
];
const items2 = [...items1];
const items3 = [
  fn(1399).TypingIndicatorAnimation.PULSE,
  fn(1399).TypingIndicatorAnimation.RING,
  fn(1399).TypingIndicatorAnimation.WAVE,
];
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export const NEW_TYPING_SUGGESTION_PRESETS = items1;
export function getSurpriseMeEmojiPool() {
  const categories = UnicodeEmojisDefault.getCategories();
  items = [
    ...categories.flatMap((item) => {
      const byCategory = UnicodeEmojisDefault.getByCategory(item);
      let mapped;
      if (byCategory != null) {
        mapped = byCategory.map((name) => ({ name: name.surrogates }));
      }
      if (mapped == null) {
        mapped = [];
      }
      return mapped;
    }),
  ];
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(
    flattenedGuildIds.flatMap((item) => {
      usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(item);
      const found = usableGuildEmoji.filter((emoji) => {
        obj2 = {
          emoji,
          channel: null,
          guildId: "Array",
          intention: constants.TYPING_INDICATOR,
          bypassPremiumEmojiEntitlement: null,
        };
        return null == closure_1_1(closure_1_3[11]).getEmojiUnavailableReason(obj2);
      });
      return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
    }),
    tmp,
  );
  return items;
}
export function pickRandomCustomTypingIndicatorEmojis(current) {
  let size;
  closure_0 = current;
  const bound = Math.min(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
  const set = new Set();
  if (set.size < bound) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      let addResult = set.add(Math.floor(Math.random() * current.length));
      size = set.size;
    } while (size < bound);
  }
  items = [...set];
  return items.map((item) => closure_0[item]);
}
export function getRandomCustomTypingIndicatorAnimation() {
  return items3[Math.floor(Math, Math.random(Math) * items3.length)];
}
export function getCustomTypingIndicatorSuggestionPresets(enabled) {
  return enabled ? items2 : items;
}
export function getCustomTypingIndicatorSuggestionMessage(typingSuggestion) {
  let tmp2 = obj[typingSuggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  let tmp2 = obj2[suggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getRandomCustomTypingIndicatorSuggestion(enabled) {
  const arr = enabled ? items2 : items;
  return arr[Math.floor(Math, Math.random(Math) * arr.length)];
}
export function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, c0, user, guildEmojis) {
  closure_0 = guildEmojis;
  if (null != _require.getGuildId()) {
    if (0 !== customTypingIndicatorConfig.emojis.length) {
      const emojis = customTypingIndicatorConfig.emojis;
      if (
        emojis.some((id) => {
          let tmp = null != id.id;
          if (tmp) {
            let tmp3;
            if (closure_0 != null) {
              tmp3 = tmp2[id.id];
            }
            tmp = null == tmp3;
          }
          return tmp;
        })
      ) {
        let channel = null;
        if (_require.isThread()) {
          channel = null;
          if (null != _require.parent_id) {
            channel = ChannelStore.getChannel(_require.parent_id);
          }
        }
        obj = BigFlagUtilsAll;
        const obj3 = { user, context: null };
        if (channel == null) {
          channel = _require;
        }
        obj3.context = channel;
        let tmp7 = customTypingIndicatorConfig;
        if (!obj.has(obj2.computePermissions(obj3), Permissions.USE_EXTERNAL_EMOJIS)) {
          const obj4 = {};
          const merged = Object.assign(customTypingIndicatorConfig);
          obj4.emojis = [];
          tmp7 = obj4;
        }
        return tmp7;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
}
export function useCurrentCustomTypingIndicatorConfig(isTryItOut) {
  _require = isTryItOut;
  items = [UserProfileSettingsStore, UserStore];
  const items1 = [isTryItOut];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (closure_0) {
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 =
          UserProfileSettingsStore.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
      } else {
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG =
          UserProfileSettingsStore.getPendingChanges().pendingCustomTypingIndicatorStyle;
        if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
          if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
            EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
          let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        } else {
          const currentUser = UserStore.getCurrentUser();
          typingIndicatorStyle = undefined;
          if (currentUser != null) {
            typingIndicatorStyle = currentUser.typingIndicatorStyle;
          }
          if (typingIndicatorStyle == null) {
            typingIndicatorStyle = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
        }
        return typingIndicatorStyle;
      }
    },
    items1,
  );
}
export function useIsPreviewingOwnTypingIndicator() {
  items = [DevSettingsStore];
  return initialize.useStateFromStores(items, () => DevSettingsStore.get("preview_own_typing_indicator"));
}
