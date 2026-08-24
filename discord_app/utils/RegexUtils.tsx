// === Module 4362: set ===

// Module 4362 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};