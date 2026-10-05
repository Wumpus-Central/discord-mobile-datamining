// discord_app/modules/emoji_picker/native/components/EmojiPickerListRowView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmojiPickerRowViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
