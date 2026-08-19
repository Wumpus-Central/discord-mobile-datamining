// === Module 17148: ? ===

// Module 17148
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const TOKEN_KEY = ME.TOKEN_KEY;
const result = obj132.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _require(595).Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};