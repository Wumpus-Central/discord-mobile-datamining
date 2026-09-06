// discord_app/modules/application_commands/native/ApplicationCommandsConstants.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
