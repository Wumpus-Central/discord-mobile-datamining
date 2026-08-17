// discord_app/modules/headless_tasks/HeadlessTaskUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

const TOKEN_KEY = ME.TOKEN_KEY;
const result = set.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _Storage.Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};