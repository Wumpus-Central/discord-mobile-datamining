// === Module 11084: openFavoritesGuildMoveToCategoryActionSheet ===

// Module 11084 (openFavoritesGuildMoveToCategoryActionSheet)
import FolderIcon2 from "FolderIcon" /* 5155 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7298 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx");

export default function openFavoritesGuildMoveToCategoryActionSheet(arg0, title) {
  ({ destinations, perform: require } = title);
  let obj = {
    key: "FavoritesGuildMoveToCategory-" + arg0,
    header: { title: title.label },
    hasIcons: true,
    options: destinations.map((label) => {
      const obj = { label: label.label, IconComponent: null, onPress: null };
      let FolderIcon;
      if (null != label.id) {
        FolderIcon = FolderIcon2.FolderIcon;
      }
      obj.IconComponent = FolderIcon;
      obj.onPress = function onPress() {
        return require(label.id);
      };
      return obj;
    })
  };
  const result = obj.showSimpleActionSheet(obj);
};