// === Module 9377: View ===

// Module 9377 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 9378 */;
import obj132 from "obj132" /* 500 */;

let View = get_ActivityIndicator.View;
if (obj132.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = obj132.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;