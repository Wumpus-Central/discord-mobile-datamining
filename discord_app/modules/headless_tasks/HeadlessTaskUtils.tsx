// === Module 17748: ? ===

// Module 17748
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const TOKEN_KEY = ME.TOKEN_KEY;
const result = set.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _require(592).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};