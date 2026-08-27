// === Module 9114: ? ===

// Module 9114
import ClockIcon from "ClockIcon" /* 4408 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8028 */;
import ReactionIcon from "ReactionIcon" /* 8160 */;
import FlagIcon from "FlagIcon" /* 8715 */;
import TrophyIcon from "TrophyIcon" /* 8768 */;
import StarIcon from "StarIcon" /* 9101 */;
import NatureIcon from "NatureIcon" /* 9115 */;
import FoodIcon from "FoodIcon" /* 9117 */;
import GameControllerIcon from "GameControllerIcon" /* 9119 */;
import BicycleIcon from "BicycleIcon" /* 9120 */;
import ObjectIcon from "ObjectIcon" /* 9122 */;
import HeartIcon from "HeartIcon" /* 9124 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 5357 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(ReactionIcon.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(NatureIcon.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(FoodIcon.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(GameControllerIcon.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(BicycleIcon.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(ObjectIcon.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(HeartIcon.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(FlagIcon.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon.NitroWheelIcon, {});
  }
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;