// _runtime/07340_CompressedTypes.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let items;
let items1;
let items2;
let items3;
class CompressedTypes {
  constructor() {
    _classCallCheck(this, CompressedTypes);
  }
}
const _moduleResult = _createClass(CompressedTypes);
const obj = {
  extension: "7z",
  mimeType: "application/x-7z-compressed",
  description: "7-Zip compressed file",
  signatures: items,
};
items = [{ sequence: [55, 122, 188, 175, 39, 28] }];
_moduleResult._7Z = obj;
const obj2 = {
  extension: "lzh",
  mimeType: "application/x-lzh-compressed",
  description: "Compressed file using Lempel-Ziv and Haruyasu (LZH) compression algorithm",
  signatures: items1,
};
items1 = [
  {
    sequence: [45, 104, 108, 48, 45],
    description: "Lempel Ziv Huffman archive file Method 0 (No compression)",
    compatibleExtensions: ["lha"],
  },
  {
    sequence: [45, 104, 108, 53, 45],
    description: "Lempel Ziv Huffman archive file Method 5 (8KiB sliding window)",
    compatibleExtensions: ["lha"],
  },
];
_moduleResult.LZH = obj2;
const obj3 = {
  extension: "rar",
  mimeType: "application/x-rar-compressed",
  description: "Roshal ARchive compressed archive file",
  signatures: items2,
};
items2 = [
  { sequence: [82, 97, 114, 33, 26, 7, 0], description: "Compressed archive v5.00 onwards" },
  { sequence: [82, 97, 114, 33, 26, 7, 1, 0], description: "Compressed archive v1.50 onwards" },
];
_moduleResult.RAR = obj3;
const obj4 = {
  extension: "zip",
  mimeType: "application/zip",
  description: "Compressed archive file",
  signatures: items3,
};
items3 = [
  { sequence: [87, 105, 110, 90, 105, 112], offset: 29152, description: "WinZip compressed archive" },
  { sequence: [80, 75, 3, 4, 20, 0, 1, 0, 99, 0, 0, 0, 0, 0], description: "ZLock Pro encrypted ZIP" },
  { sequence: [80, 75, 76, 73, 84, 69], offset: 30, description: "PKLITE compressed ZIP archive (see also PKZIP)" },
  {
    sequence: [80, 75, 83, 112, 88],
    offset: 526,
    description: "PKSFX self-extracting executable compressed file (see also PKZIP)",
  },
  {
    sequence: [80, 75, 3, 4],
    description: "PKZIP archive file - zip file format and multiple formats based on it",
    compatibleExtensions: [
      "aar",
      "apk",
      "docx",
      "epub",
      "ipa",
      "jar",
      "kmz",
      "maff",
      "msix",
      "odp",
      "ods",
      "odt",
      "pk3",
      "pk4",
      "pptx",
      "usdz",
      "vsdx",
      "xlsx",
      "xpi",
    ],
  },
  {
    sequence: [80, 75, 5, 6],
    description: "PKZIP empty archive file - zip file format and multiple formats based on it",
    compatibleExtensions: [
      "aar",
      "apk",
      "docx",
      "epub",
      "ipa",
      "jar",
      "kmz",
      "maff",
      "msix",
      "odp",
      "ods",
      "odt",
      "pk3",
      "pk4",
      "pptx",
      "usdz",
      "vsdx",
      "xlsx",
      "xpi",
    ],
  },
  {
    sequence: [80, 75, 7, 8],
    description: "PKZIP multivolume archive file - zip file format and multiple formats based on it",
    compatibleExtensions: [
      "aar",
      "apk",
      "docx",
      "epub",
      "ipa",
      "jar",
      "kmz",
      "maff",
      "msix",
      "odp",
      "ods",
      "odt",
      "pk3",
      "pk4",
      "pptx",
      "usdz",
      "vsdx",
      "xlsx",
      "xpi",
    ],
  },
];
_moduleResult.ZIP = obj4;
const CompressedTypes_export = _moduleResult;

export { CompressedTypes_export as CompressedTypes };
