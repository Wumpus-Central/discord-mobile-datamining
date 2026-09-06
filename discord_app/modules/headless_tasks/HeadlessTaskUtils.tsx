// === Module 17932: HeadlessTaskUtils ===

// Module 17932 (HeadlessTaskUtils)
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const TOKEN_KEY = Constants.TOKEN_KEY;
const result = size.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    closure_0 = arg0;
    const Storage = Storage2.Storage;
    Storage.asyncGet(TOKEN_KEY, async () => {
      closure_0();
    });
  }
};