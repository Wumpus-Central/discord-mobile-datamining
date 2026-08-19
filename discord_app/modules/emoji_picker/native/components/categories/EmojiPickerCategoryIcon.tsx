// === Module 9425: ? ===

// Module 9425
import ClockIcon from "ClockIcon" /* 4338 */;
import ReactionIcon from "ReactionIcon" /* 7939 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7988 */;
import TrophyIcon from "TrophyIcon" /* 8010 */;
import HeartIcon from "HeartIcon" /* 9183 */;
import StarIcon from "StarIcon" /* 9410 */;
import NatureIcon from "NatureIcon" /* 9426 */;
import FoodIcon from "FoodIcon" /* 9428 */;
import GameControllerIcon from "GameControllerIcon" /* 9430 */;
import BicycleIcon from "BicycleIcon" /* 9431 */;
import ObjectIcon from "ObjectIcon" /* 9433 */;
import FlagIcon from "FlagIcon" /* 9435 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 6731 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const memoResult = importAllResult.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (EmojiCategories.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (EmojiCategories.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
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
});
const result = require("obj132").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;