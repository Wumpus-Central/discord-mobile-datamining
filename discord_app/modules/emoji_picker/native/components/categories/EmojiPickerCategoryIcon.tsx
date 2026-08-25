// === Module 8904: ? ===

// Module 8904
import ClockIcon from "ClockIcon" /* 4343 */;
import ReactionIcon from "ReactionIcon" /* 7800 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7849 */;
import TrophyIcon from "TrophyIcon" /* 7871 */;
import StarIcon from "StarIcon" /* 8891 */;
import NatureIcon from "NatureIcon" /* 8905 */;
import FoodIcon from "FoodIcon" /* 8907 */;
import GameControllerIcon from "GameControllerIcon" /* 8909 */;
import BicycleIcon from "BicycleIcon" /* 8910 */;
import ObjectIcon from "ObjectIcon" /* 8912 */;
import HeartIcon from "HeartIcon" /* 8914 */;
import FlagIcon from "FlagIcon" /* 8916 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 5286 */;
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