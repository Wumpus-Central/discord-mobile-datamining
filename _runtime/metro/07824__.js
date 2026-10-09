// === Module 7824: ? ===

// Module 7824
import _mod7809 from "module_7809" /* 7809 */;

require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";

export default {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod7809.getStringFromDataView(dataView, c2, length.length) === length;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset, length: byteLength.byteLength });
    return { xmpChunks };
  }
};