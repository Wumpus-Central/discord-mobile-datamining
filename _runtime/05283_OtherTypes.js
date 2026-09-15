// _runtime/05283_OtherTypes.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class OtherTypes {
  constructor() {
    tmp = closure_0(this, OtherTypes);
    return;
  }
}
const _moduleResult = _createClass(OtherTypes);
const obj = {
  extension: "blend",
  mimeType: "application/x-blender",
  description: "Blender File Format",
  signatures: null,
};
const items = [{ sequence: [66, 76, 69, 78, 68, 69, 82] }];
obj.signatures = items;
_moduleResult.BLEND = obj;
const obj2 = {
  extension: "doc",
  mimeType: "application/msword",
  description: "Old Microsoft Word documents",
  signatures: null,
};
const items1 = [
  {
    sequence: [208, 207, 17, 224, 161, 177, 26, 225],
    compatibleExtensions: ["xls", "ppt", "msi", "msg", "dot", "pps", "xla", "wiz"],
    description:
      "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications",
  },
  { sequence: [219, 165, 45, 0], description: "Microsoft Word 2.0 file format" },
];
obj2.signatures = items1;
_moduleResult.DOC = obj2;
const obj3 = {
  extension: "elf",
  mimeType: "application/x-executable",
  description: "Executable and Linking Format executable file (Linux/Unix)",
  signatures: null,
};
const items2 = [{ sequence: [127, 69, 76, 70] }];
obj3.signatures = items2;
_moduleResult.ELF = obj3;
const obj4 = {
  extension: "exe",
  mimeType: "application/x-msdownload",
  description: "Windows/DOS executable file and its descendants",
  signatures: null,
};
const items3 = [
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
obj4.signatures = items3;
_moduleResult.EXE = obj4;
const obj5 = {
  extension: "indd",
  mimeType: "application/x-indesign",
  description: "Adobe InDesign document",
  signatures: null,
};
const items4 = [
  {
    sequence: [6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29],
    compatibleExtensions: ["indt"],
  },
];
obj5.signatures = items4;
_moduleResult.INDD = obj5;
const obj6 = {
  extension: "macho",
  mimeType: "application/x-mach-binary",
  description: "Apple OS X ABI Mach-O binary file",
  signatures: null,
};
const items5 = [
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
obj6.signatures = items5;
_moduleResult.MACHO = obj6;
const obj7 = {
  extension: "pdf",
  mimeType: "application/pdf",
  description: "Portable Document Format",
  signatures: null,
};
const items6 = [{ sequence: [37, 80, 68, 70, 45] }];
obj7.signatures = items6;
_moduleResult.PDF = obj7;
const obj8 = {
  extension: "orc",
  mimeType: "application/x-orc",
  description: "Apache ORC (Optimized Row Columnar) file format for columnar storage",
  signatures: null,
};
const items7 = [{ sequence: [79, 82, 67] }];
obj8.signatures = items7;
_moduleResult.ORC = obj8;
const obj9 = {
  extension: "parquet",
  mimeType: "application/vnd.apache.parquet",
  description: "Apache Parquet file format for columnar storage",
  signatures: null,
};
const items8 = [{ sequence: [80, 65, 82, 49] }];
obj9.signatures = items8;
_moduleResult.PARQUET = obj9;
const obj10 = {
  extension: "ps",
  mimeType: "application/postscript",
  description: "PostScript document",
  signatures: null,
};
const items9 = [{ sequence: [37, 33, 80, 83] }];
obj10.signatures = items9;
_moduleResult.PS = obj10;
const obj11 = {
  extension: "rtf",
  mimeType: "application/rtf",
  description: "Rich Text Format word processing file",
  signatures: null,
};
const items10 = [{ sequence: [123, 92, 114, 116, 102, 49] }];
obj11.signatures = items10;
_moduleResult.RTF = obj11;
const obj12 = {
  extension: "sqlite",
  mimeType: "application/x-sqlite3",
  description: "SQLite database file",
  signatures: null,
};
const items11 = [{ sequence: [83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0] }];
obj12.signatures = items11;
_moduleResult.SQLITE = obj12;
const obj13 = {
  extension: "stl",
  mimeType: "application/sla",
  description: "ASCII STL (STereoLithography) file for 3D printing",
  signatures: null,
};
const items12 = [{ sequence: [115, 111, 108, 105, 100] }];
obj13.signatures = items12;
_moduleResult.STL = obj13;
const obj14 = {
  extension: "ttf",
  mimeType: "application/x-font-ttf",
  description: "TrueType font file",
  signatures: null,
};
const items13 = [
  { sequence: [116, 114, 117, 101, 0] },
  { sequence: [0, 1, 0, 0, 0], compatibleExtensions: ["tte, dfont"] },
];
obj14.signatures = items13;
_moduleResult.TTF = obj14;
const obj15 = {
  extension: "pcap",
  mimeType: "application/vnd.tcpdump.pcap",
  description: "Libpcap File Format",
  signatures: null,
};
const items14 = [
  { sequence: [212, 195, 178, 161] },
  { sequence: [77, 60, 178, 161], description: "Nanosecond resolution" },
];
obj15.signatures = items14;
_moduleResult.PCAP = obj15;

export const OtherTypes = _moduleResult;
