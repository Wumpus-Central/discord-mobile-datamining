// === Module 13974: react-native ===

// Module 13974 (react-native)
import react_nativeDefault from "react-native" /* 13975 */;
import size from "module_2" /* 2 */;

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