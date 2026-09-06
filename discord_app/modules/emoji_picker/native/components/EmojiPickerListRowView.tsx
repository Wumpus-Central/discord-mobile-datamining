// discord_app/modules/emoji_picker/native/components/EmojiPickerListRowView.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import EmojiPickerRowViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/EmojiPickerRowViewNativeComponent.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
