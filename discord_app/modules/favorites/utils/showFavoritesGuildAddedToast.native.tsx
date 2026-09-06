// discord_app/modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["4tSWQg"]);
  obj.IconComponent = StarIcon.StarIcon;
  obj.open(obj);
}
