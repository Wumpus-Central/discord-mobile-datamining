// _runtime/metro/08205__.js
import _mod8190 from "08190__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";

export default {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod8190.getStringFromDataView(dataView, c2, length.length) === length;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset, length: byteLength.byteLength });
    return { xmpChunks };
  },
};
