// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx
import { EmojiCategories } from "EmojiCategoryTypes";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { BicycleIcon } from "../../../../../design/components/Icon/native/redesign/generated/BicycleIcon.tsx";
import { ClockIcon } from "../../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import { FlagIcon } from "../../../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import { FoodIcon } from "../../../../../design/components/Icon/native/redesign/generated/FoodIcon.tsx";
import { GameControllerIcon } from "../../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import { HeartIcon } from "../../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx";
import { NatureIcon } from "../../../../../design/components/Icon/native/redesign/generated/NatureIcon.tsx";
import { NitroWheelIcon } from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import { ObjectIcon } from "../../../../../design/components/Icon/native/redesign/generated/ObjectIcon.tsx";
import { ReactionIcon } from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import { StarIcon } from "../../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import { TrophyIcon } from "../../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";

const require = arg1;
const memoResult = require("noop").memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon /* TrophyIcon */.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(StarIcon /* StarIcon */.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(ClockIcon /* ClockIcon */.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(ReactionIcon /* ReactionIcon */.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(NatureIcon /* NatureIcon */.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(FoodIcon /* FoodIcon */.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(GameControllerIcon /* GameControllerIcon */.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(BicycleIcon /* BicycleIcon */.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(ObjectIcon /* ObjectIcon */.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(HeartIcon /* HeartIcon */.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(FlagIcon /* FlagIcon */.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon /* NitroWheelIcon */.NitroWheelIcon, {});
  }
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;