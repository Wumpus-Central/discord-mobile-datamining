// _runtime/metro/05278__.js
import _mod5263 from "05263__.js";

require = arg1;
const dependencyMap = arg6;
let c2 = 0;
let c3 = "<?xpacket begin";

export default {
  isXMLFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod5263.getStringFromDataView(dataView, c2, length.length) === length;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    const xmpChunks = [];
    xmpChunks.push({ dataOffset, length: byteLength.byteLength });
    return { xmpChunks };
  },
};
