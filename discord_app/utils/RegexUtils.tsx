// discord_app/utils/RegexUtils.tsx
import set from "../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  },
};
