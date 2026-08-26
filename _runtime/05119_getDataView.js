// === Module 5119: getDataView ===

// Module 5119 (getDataView)
import getDataView from "getDataView" /* 5104 */;

require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";
arg5.default = {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = getDataView.getStringFromDataView(dataView, c2, length.length) === length;
      const obj = getDataView;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset: c2, length: byteLength.byteLength });
    return { xmpChunks };
  }
};