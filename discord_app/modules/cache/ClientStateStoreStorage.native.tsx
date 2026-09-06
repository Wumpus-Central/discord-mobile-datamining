// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import NativeFastConnectModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  if (arg0 != null) {
    str = arg0.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};
