// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx") /* TrophyIcon */.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx") /* StarIcon */.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx") /* ClockIcon */.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx") /* ReactionIcon */.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/NatureIcon.tsx") /* NatureIcon */.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/FoodIcon.tsx") /* FoodIcon */.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx") /* GameControllerIcon */.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/BicycleIcon.tsx") /* BicycleIcon */.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/ObjectIcon.tsx") /* ObjectIcon */.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx") /* HeartIcon */.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx") /* FlagIcon */.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(require("../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx") /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;