// discord_app/modules/cache/ClientStateStoreStorage.native.tsx
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(id) {
  let str;
  const setClientState = react_nativeDefault.setClientState;
  react_nativeDefault;
  if (id != null) {
    str = id.toString();
  }
  setClientState(str, undefined);
};
