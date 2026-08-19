// === Module 11606: useChangelogIdFromChannel ===

// Module 11606 (useChangelogIdFromChannel)
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};