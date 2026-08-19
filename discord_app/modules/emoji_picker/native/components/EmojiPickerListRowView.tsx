// discord_app/modules/emoji_picker/native/components/EmojiPickerListRowView.tsx
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx";
import obj132 from "../../../../utils/PlatformUtils.tsx";

let View = get_ActivityIndicator.View;
if (obj132.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = obj132.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;