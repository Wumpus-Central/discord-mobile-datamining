// discord_app/modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";

const result = set.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  let obj = dispatcherDefault;
  obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};