// _runtime/07341_OtherTypes.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let items;
let items1;
let items10;
let items11;
let items12;
let items13;
let items14;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
class OtherTypes {
  constructor() {
    _classCallCheck(this, OtherTypes);
  }
}
const _moduleResult = _createClass(OtherTypes);
const obj = {
  extension: "blend",
  mimeType: "application/x-blender",
  description: "Blender File Format",
  signatures: items,
};
items = [{ sequence: [66, 76, 69, 78, 68, 69, 82] }];
_moduleResult.BLEND = obj;
const obj2 = {
  extension: "doc",
  mimeType: "application/msword",
  description: "Old Microsoft Word documents",
  signatures: items1,
};
items1 = [
  {
    sequence: [208, 207, 17, 224, 161, 177, 26, 225],
    compatibleExtensions: ["xls", "ppt", "msi", "msg", "dot", "pps", "xla", "wiz"],
    description:
      "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications",
  },
  { sequence: [219, 165, 45, 0], description: "Microsoft Word 2.0 file format" },
];
_moduleResult.DOC = obj2;
const obj3 = {
  extension: "elf",
  mimeType: "application/x-executable",
  description: "Executable and Linking Format executable file (Linux/Unix)",
  signatures: items2,
};
items2 = [{ sequence: [127, 69, 76, 70] }];
_moduleResult.ELF = obj3;
const obj4 = {
  extension: "exe",
  mimeType: "application/x-msdownload",
  description: "Windows/DOS executable file and its descendants",
  signatures: items3,
};
items3 = [
  {
    sequence: [77, 90],
    compatibleExtensions: [
      "acm",
      "ax",
      "cpl",
      "com",
      "dll",
      "drv",
      "efi",
      "fon",
      "iec",
      "ime",
      "mui",
      "ocx",
      "olb",
      "pif",
      "qts",
      "qtx",
      "rs",
      "sys",
      "scr",
      "tsp",
      "vbx",
      "vxd",
    ],
  },
  { sequence: [90, 77], description: "DOS ZM executable (rare)" },
];
_moduleResult.EXE = obj4;
const obj5 = {
  extension: "indd",
  mimeType: "application/x-indesign",
  description: "Adobe InDesign document",
  signatures: items4,
};
items4 = [
  {
    sequence: [6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29],
    compatibleExtensions: ["indt"],
  },
];
_moduleResult.INDD = obj5;
const obj6 = {
  extension: "macho",
  mimeType: "application/x-mach-binary",
  description: "Apple OS X ABI Mach-O binary file",
  signatures: items5,
};
items5 = [
  { sequence: [254, 237, 250, 206], description: "32-bit" },
  {
    sequence: [206, 250, 237, 254],
    description: "32-bit, where target system has reverse byte ordering from host running compiler",
  },
  { sequence: [254, 237, 250, 207], description: "64-bit" },
  {
    sequence: [207, 250, 237, 254],
    description: "64-bit, where target system has reverse byte ordering from host running compiler",
  },
  { sequence: [202, 254, 186, 190], description: "Mach-O Fat Binary" },
];
_moduleResult.MACHO = obj6;
const obj7 = {
  extension: "pdf",
  mimeType: "application/pdf",
  description: "Portable Document Format",
  signatures: items6,
};
items6 = [{ sequence: [37, 80, 68, 70, 45] }];
_moduleResult.PDF = obj7;
const obj8 = {
  extension: "orc",
  mimeType: "application/x-orc",
  description: "Apache ORC (Optimized Row Columnar) file format for columnar storage",
  signatures: items7,
};
items7 = [{ sequence: [79, 82, 67] }];
_moduleResult.ORC = obj8;
const obj9 = {
  extension: "parquet",
  mimeType: "application/vnd.apache.parquet",
  description: "Apache Parquet file format for columnar storage",
  signatures: items8,
};
items8 = [{ sequence: [80, 65, 82, 49] }];
_moduleResult.PARQUET = obj9;
const obj10 = {
  extension: "ps",
  mimeType: "application/postscript",
  description: "PostScript document",
  signatures: items9,
};
items9 = [{ sequence: [37, 33, 80, 83] }];
_moduleResult.PS = obj10;
const obj11 = {
  extension: "rtf",
  mimeType: "application/rtf",
  description: "Rich Text Format word processing file",
  signatures: items10,
};
items10 = [{ sequence: [123, 92, 114, 116, 102, 49] }];
_moduleResult.RTF = obj11;
const obj12 = {
  extension: "sqlite",
  mimeType: "application/x-sqlite3",
  description: "SQLite database file",
  signatures: items11,
};
items11 = [{ sequence: [83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0] }];
_moduleResult.SQLITE = obj12;
const obj13 = {
  extension: "stl",
  mimeType: "application/sla",
  description: "ASCII STL (STereoLithography) file for 3D printing",
  signatures: items12,
};
items12 = [{ sequence: [115, 111, 108, 105, 100] }];
_moduleResult.STL = obj13;
const obj14 = {
  extension: "ttf",
  mimeType: "application/x-font-ttf",
  description: "TrueType font file",
  signatures: items13,
};
items13 = [{ sequence: [116, 114, 117, 101, 0] }, { sequence: [0, 1, 0, 0, 0], compatibleExtensions: ["tte, dfont"] }];
_moduleResult.TTF = obj14;
const obj15 = {
  extension: "pcap",
  mimeType: "application/vnd.tcpdump.pcap",
  description: "Libpcap File Format",
  signatures: items14,
};
items14 = [{ sequence: [212, 195, 178, 161] }, { sequence: [77, 60, 178, 161], description: "Nanosecond resolution" }];
_moduleResult.PCAP = obj15;
const OtherTypes_export = _moduleResult;

export { OtherTypes_export as OtherTypes };
