// === Module 11295: EmojiPickerCategoryIcon ===

// Module 11295 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 5532 */;
import GameControllerIcon from "GameControllerIcon" /* 6951 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8859 */;
import HeartIcon from "HeartIcon" /* 8882 */;
import ReactionIcon from "ReactionIcon" /* 9391 */;
import TrophyIcon from "TrophyIcon" /* 9715 */;
import StarIcon from "StarIcon" /* 9909 */;
import FlagIcon from "FlagIcon" /* 10168 */;
import LightbulbIcon from "LightbulbIcon" /* 11296 */;
import NatureIcon from "NatureIcon" /* 11298 */;
import FoodIcon from "FoodIcon" /* 11300 */;
import BicycleIcon from "BicycleIcon" /* 11302 */;
import ObjectIcon from "ObjectIcon" /* 11304 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(6484).EmojiCategories;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default noop.memo(function EmojiPickerCategoryIcon(id) {
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
});