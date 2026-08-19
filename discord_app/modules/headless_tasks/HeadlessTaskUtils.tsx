// discord_app/modules/headless_tasks/HeadlessTaskUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

const TOKEN_KEY = ME.TOKEN_KEY;
const result = obj132.fileFinishedImporting("modules/headless_tasks/HeadlessTaskUtils.tsx");

export default {
  awaitStorage(arg0) {
    const _require = arg0;
    const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx").Storage;
    Storage.asyncGet(TOKEN_KEY, () => {
      callback();
    });
  }
};