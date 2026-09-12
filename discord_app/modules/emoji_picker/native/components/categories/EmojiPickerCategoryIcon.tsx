// === Module 10477: EmojiPickerCategoryIcon ===

// Module 10477 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4599 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8785 */;
import FlagIcon from "FlagIcon" /* 8787 */;
import TrophyIcon from "TrophyIcon" /* 8842 */;
import ReactionIcon from "ReactionIcon" /* 8883 */;
import HeartIcon from "HeartIcon" /* 8900 */;
import GameControllerIcon from "GameControllerIcon" /* 9352 */;
import StarIcon from "StarIcon" /* 10363 */;
import NatureIcon from "NatureIcon" /* 10478 */;
import FoodIcon from "FoodIcon" /* 10480 */;
import BicycleIcon from "BicycleIcon" /* 10482 */;
import ObjectIcon from "ObjectIcon" /* 10484 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5544).EmojiCategories;
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