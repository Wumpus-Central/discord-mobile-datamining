// discord_app/modules/discord_md5/native/DiscordMd5Native.tsx
import NativeFileModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import DiscordMd5 from "../DiscordMd5.tsx";

const prototype = function DiscordMd5Native() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends tmp2 {}
prototype["fromFileUri"] = function fromFileUri(uri) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 4096;
  }
  return NativeFileModuleDefault.getFileHash(uri, "md5", num);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;
