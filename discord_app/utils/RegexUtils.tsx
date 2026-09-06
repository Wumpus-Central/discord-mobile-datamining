// === Module 4547: RegexUtils ===

// Module 4547 (RegexUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};