// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import set from "../../../_runtime/00002_set.js";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";

const result = set.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  let str;
  if (closure_17 != null) {
    str = closure_17.toString();
  }
  enforcingDefault.setClientState(str, undefined);
};
