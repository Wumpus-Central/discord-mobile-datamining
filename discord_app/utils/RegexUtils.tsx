// discord_app/utils/RegexUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};