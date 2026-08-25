// discord_app/modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx
import ClockIcon from "../../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ReactionIcon from "../../../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import TrophyIcon from "../../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import StarIcon from "../../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import NatureIcon from "../../../../../design/components/Icon/native/redesign/generated/NatureIcon.tsx";
import FoodIcon from "../../../../../design/components/Icon/native/redesign/generated/FoodIcon.tsx";
import GameControllerIcon from "../../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import BicycleIcon from "../../../../../design/components/Icon/native/redesign/generated/BicycleIcon.tsx";
import ObjectIcon from "../../../../../design/components/Icon/native/redesign/generated/ObjectIcon.tsx";
import HeartIcon from "../../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx";
import FlagIcon from "../../../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import { EmojiCategories } from "../../../EmojiPickerConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

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