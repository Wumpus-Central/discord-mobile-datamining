// discord_app/modules/discord_md5/native/DiscordMd5Native.tsx
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import DiscordMd5 from "../DiscordMd5.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class DiscordMd5Native extends DiscordMd5 {
  static fromFileUri(uri) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 4096;
    }
    const obj = react_nativeDefault;
    return obj.getFileHash(uri, "md5", num);
  }
}
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default DiscordMd5Native;
