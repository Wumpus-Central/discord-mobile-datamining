// === Module 10053: EmojiPickerCategoryIcon ===

// Module 10053 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 5735 */;
import TrophyIcon from "TrophyIcon" /* 9358 */;
import ReactionIcon from "ReactionIcon" /* 9430 */;
import HeartIcon from "HeartIcon" /* 9446 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9506 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import StarIcon from "StarIcon" /* 10042 */;
import LightbulbIcon from "LightbulbIcon" /* 10054 */;
import NatureIcon from "NatureIcon" /* 10056 */;
import FoodIcon from "FoodIcon" /* 10058 */;
import BicycleIcon from "BicycleIcon" /* 10060 */;
import ObjectIcon from "ObjectIcon" /* 10062 */;
import FlagIcon from "FlagIcon" /* 10064 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(6793).EmojiCategories;
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