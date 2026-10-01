// discord_app/modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx
import Constants from "../../../Constants.tsx";
import FavoritesActionCreators from "../FavoritesActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const NULL_STRING_CHANNEL_ID = Constants.NULL_STRING_CHANNEL_ID;
let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, title) {
  _require = title;
  const obj2 = {
    key: "FavoritesGuildMoveToCategory-" + arg0,
    header: { title: title.label },
    hasIcons: true,
    options: null,
  };
  const destinations = title.destinations;
  const found = destinations.filter((disabled) => !disabled.disabled);
  obj2.options = found.map((label) => {
    title = label;
    const obj = { label: label.label, IconComponent: null, onPress: null };
    let FolderIcon;
    if (label.id !== NULL_STRING_CHANNEL_ID) {
      FolderIcon = title(dependencyMap[2]).FolderIcon;
    }
    obj.IconComponent = FolderIcon;
    obj.onPress = function onPress() {
      return FavoritesActionCreators.updateFavoriteChannels(label.getDestinationMove(label.id).updates);
    };
    return obj;
  });
  const result = require("Sheet/showSimpleActionSheet").showSimpleActionSheet(obj2);
}
