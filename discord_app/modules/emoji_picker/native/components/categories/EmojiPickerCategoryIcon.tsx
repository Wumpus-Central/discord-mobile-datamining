// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ClockIcon from "../../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import TrophyIcon from "../../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import HeartIcon from "../../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import GameControllerIcon from "../../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import StarIcon from "../../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import LightbulbIcon from "../../../../../design/components/Icon/native/redesign/generated/LightbulbIcon.tsx";
import NatureIcon from "../../../../../design/components/Icon/native/redesign/generated/NatureIcon.tsx";
import FoodIcon from "../../../../../design/components/Icon/native/redesign/generated/FoodIcon.tsx";
import BicycleIcon from "../../../../../design/components/Icon/native/redesign/generated/BicycleIcon.tsx";
import ObjectIcon from "../../../../../design/components/Icon/native/redesign/generated/ObjectIcon.tsx";
import FlagIcon from "../../../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const EmojiCategories = fn(5996).EmojiCategories;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmojiPickerCategoryIcon(id) {
        const cResult = c.c(13);
        id = id.id;
        if (EmojiCategories.TOP_GUILD_EMOJI === id) {
          const _Symbol13 = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp56 = jsx(TrophyIcon.TrophyIcon, {});
            cResult[0] = tmp56;
            let first = tmp56;
          } else {
            first = cResult[0];
          }
          return first;
        } else if (EmojiCategories.FAVORITES === id) {
          const _Symbol12 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp52 = jsx(StarIcon.StarIcon, {});
            cResult[1] = tmp52;
            let tmp50 = tmp52;
          } else {
            tmp50 = cResult[1];
          }
          return tmp50;
        } else if (EmojiCategories.RECENT === id) {
          const _Symbol11 = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp48 = jsx(ClockIcon.ClockIcon, {});
            cResult[2] = tmp48;
            let tmp46 = tmp48;
          } else {
            tmp46 = cResult[2];
          }
          return tmp46;
        } else if (EmojiCategories.SUGGESTED === id) {
          const _Symbol10 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp44 = jsx(LightbulbIcon.LightbulbIcon, {});
            cResult[3] = tmp44;
            let tmp42 = tmp44;
          } else {
            tmp42 = cResult[3];
          }
          return tmp42;
        } else if (EmojiCategories.PEOPLE === id) {
          const _Symbol9 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp40 = jsx(ReactionIcon.ReactionIcon, {});
            cResult[4] = tmp40;
            let tmp38 = tmp40;
          } else {
            tmp38 = cResult[4];
          }
          return tmp38;
        } else if (EmojiCategories.NATURE === id) {
          const _Symbol8 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp36 = jsx(NatureIcon.NatureIcon, {});
            cResult[5] = tmp36;
            let tmp34 = tmp36;
          } else {
            tmp34 = cResult[5];
          }
          return tmp34;
        } else if (EmojiCategories.FOOD === id) {
          const _Symbol7 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp32 = jsx(FoodIcon.FoodIcon, {});
            cResult[6] = tmp32;
            let tmp30 = tmp32;
          } else {
            tmp30 = cResult[6];
          }
          return tmp30;
        } else if (EmojiCategories.ACTIVITY === id) {
          const _Symbol6 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = jsx(GameControllerIcon.GameControllerIcon, {});
            cResult[7] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[7];
          }
          return tmp26;
        } else if (EmojiCategories.TRAVEL === id) {
          const _Symbol5 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = jsx(BicycleIcon.BicycleIcon, {});
            cResult[8] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[8];
          }
          return tmp22;
        } else if (EmojiCategories.OBJECTS === id) {
          const _Symbol4 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp20 = jsx(ObjectIcon.ObjectIcon, {});
            cResult[9] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[9];
          }
          return tmp18;
        } else if (EmojiCategories.SYMBOLS === id) {
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = jsx(HeartIcon.HeartIcon, {});
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          return tmp14;
        } else if (EmojiCategories.FLAGS === id) {
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp12 = jsx(FlagIcon.FlagIcon, {});
            cResult[11] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[11];
          }
          return tmp10;
        } else {
          if (EmojiCategories.CUSTOM !== id) {
            const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp8 = jsx(NitroWheelIcon.NitroWheelIcon, {});
            cResult[12] = tmp8;
            let tmp6 = tmp8;
          } else {
            tmp6 = cResult[12];
          }
          return tmp6;
        }
      }
    : function EmojiPickerCategoryIcon(id) {
        id = id.id;
        if (EmojiCategories.TOP_GUILD_EMOJI === id) {
          return jsx(TrophyIcon.TrophyIcon, {});
        } else if (EmojiCategories.FAVORITES === id) {
          return jsx(StarIcon.StarIcon, {});
        } else if (EmojiCategories.RECENT === id) {
          return jsx(ClockIcon.ClockIcon, {});
        } else if (EmojiCategories.SUGGESTED === id) {
          return jsx(LightbulbIcon.LightbulbIcon, {});
        } else if (EmojiCategories.PEOPLE === id) {
          return jsx(ReactionIcon.ReactionIcon, {});
        } else if (EmojiCategories.NATURE === id) {
          return jsx(NatureIcon.NatureIcon, {});
        } else if (EmojiCategories.FOOD === id) {
          return jsx(FoodIcon.FoodIcon, {});
        } else if (EmojiCategories.ACTIVITY === id) {
          return jsx(GameControllerIcon.GameControllerIcon, {});
        } else if (EmojiCategories.TRAVEL === id) {
          return jsx(BicycleIcon.BicycleIcon, {});
        } else if (EmojiCategories.OBJECTS === id) {
          return jsx(ObjectIcon.ObjectIcon, {});
        } else if (EmojiCategories.SYMBOLS === id) {
          return jsx(HeartIcon.HeartIcon, {});
        } else if (EmojiCategories.FLAGS === id) {
          return jsx(FlagIcon.FlagIcon, {});
        } else {
          if (EmojiCategories.CUSTOM !== id) {
            const PREMIUM_UPSELL = EmojiCategories.PREMIUM_UPSELL;
          }
          return jsx(NitroWheelIcon.NitroWheelIcon, {});
        }
      },
);
