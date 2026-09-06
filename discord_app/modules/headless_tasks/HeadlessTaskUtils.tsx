// discord_app/modules/headless_tasks/HeadlessTaskUtils.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const TOKEN_KEY = Constants.TOKEN_KEY;
const result = size.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    closure_0 = arg0;
    const Storage = Storage2.Storage;
    Storage.asyncGet(TOKEN_KEY, async () => {
      closure_0();
    });
  },
};
