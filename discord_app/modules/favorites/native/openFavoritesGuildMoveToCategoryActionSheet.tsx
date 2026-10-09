// === Module 10277: openFavoritesGuildMoveToCategoryActionSheet ===

// Module 10277 (openFavoritesGuildMoveToCategoryActionSheet)
import Constants from "Constants" /* 1085 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10278 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const NULL_STRING_CHANNEL_ID = Constants.NULL_STRING_CHANNEL_ID;
let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, title) {
  _require = title;
  const obj2 = { key: "FavoritesGuildMoveToCategory-" + arg0, header: { title: title.label }, hasIcons: true, options: null };
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
};