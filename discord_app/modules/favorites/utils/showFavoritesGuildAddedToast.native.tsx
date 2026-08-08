// discord_app/modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx
import { StarIcon } from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";
const result = require("StarIcon").fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcher;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};