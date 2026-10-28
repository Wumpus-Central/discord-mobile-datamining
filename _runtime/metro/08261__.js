// === Module 8261: ? ===

// Module 8261
import _mod8246 from "module_8246" /* 8246 */;

require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";

export default {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod8246.getStringFromDataView(dataView, c2, length.length) === length;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset, length: byteLength.byteLength });
    return { xmpChunks };
  }
};