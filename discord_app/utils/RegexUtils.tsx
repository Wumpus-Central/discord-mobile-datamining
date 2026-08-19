// === Module 4362: obj132 ===

// Module 4362 (obj132)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};