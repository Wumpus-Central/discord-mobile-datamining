// discord_app/modules/favorites/native/openFavoritesGuildMoveToCategoryActionSheet.tsx
import FolderIcon2 from "../../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import Sheet_showSimpleActionSheet from "../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    }),
  };
  const result = obj.showSimpleActionSheet(obj);
}
