// === Module 9132: ? ===

// Module 9132
import ClockIcon from "ClockIcon" /* 4409 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8042 */;
import ReactionIcon from "ReactionIcon" /* 8174 */;
import FlagIcon from "FlagIcon" /* 8731 */;
import TrophyIcon from "TrophyIcon" /* 8784 */;
import StarIcon from "StarIcon" /* 9119 */;
import NatureIcon from "NatureIcon" /* 9133 */;
import FoodIcon from "FoodIcon" /* 9135 */;
import GameControllerIcon from "GameControllerIcon" /* 9137 */;
import BicycleIcon from "BicycleIcon" /* 9138 */;
import ObjectIcon from "ObjectIcon" /* 9140 */;
import HeartIcon from "HeartIcon" /* 9142 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 5370 */;
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