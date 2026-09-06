// === Module 17932: ? ===

// Module 17932
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const TOKEN_KEY = ME.TOKEN_KEY;
const result = set.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _require(510).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};