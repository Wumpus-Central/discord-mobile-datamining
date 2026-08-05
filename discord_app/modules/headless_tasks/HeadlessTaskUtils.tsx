// discord_app/modules/headless_tasks/HeadlessTaskUtils.tsx
import { TOKEN_KEY } from "ME";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

const result = require("set").fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = _Storage.Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};