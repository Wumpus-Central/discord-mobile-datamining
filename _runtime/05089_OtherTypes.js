// === Module 5089: OtherTypes ===

// Module 5089 (OtherTypes)
import _createClass from "_createClass" /* 42 */;
import closure_0 from "_classCallCheck" /* 41 */;

class OtherTypes {
  constructor() {
    tmp = closure_0(this, OtherTypes);
    return;
  }
}
const _moduleResult = _createClass(OtherTypes);
const items = [{ sequence: [66, 76, 69, 78, 68, 69, 82] }];
_moduleResult.BLEND = { extension: "blend", mimeType: "application/x-blender", description: "Blender File Format", signatures: items };
const items1 = [{ sequence: [208, 207, 17, 224, 161, 177, 26, 225], compatibleExtensions: ["xls", "ppt", "msi", "msg", "dot", "pps", "xla", "wiz"], description: "An Object Linking and Embedding (OLE) Compound File (CF) (i.e., OLECF) file format, known as Compound Binary File format by Microsoft, used by Microsoft Office 97-2003 applications" }, { sequence: [219, 165, 45, 0], description: "Microsoft Word 2.0 file format" }];
_moduleResult.DOC = { extension: "doc", mimeType: "application/msword", description: "Old Microsoft Word documents", signatures: items1 };
const items2 = [{ sequence: [127, 69, 76, 70] }];
_moduleResult.ELF = { extension: "elf", mimeType: "application/x-executable", description: "Executable and Linking Format executable file (Linux/Unix)", signatures: items2 };
const items3 = [{ sequence: [77, 90], compatibleExtensions: ["acm", "ax", "cpl", "com", "dll", "drv", "efi", "fon", "iec", "ime", "mui", "ocx", "olb", "pif", "qts", "qtx", "rs", "sys", "scr", "tsp", "vbx", "vxd"] }, { sequence: [90, 77], description: "DOS ZM executable (rare)" }];
_moduleResult.EXE = { extension: "exe", mimeType: "application/x-msdownload", description: "Windows/DOS executable file and its descendants", signatures: items3 };
const items4 = [{ sequence: [6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29], compatibleExtensions: ["indt"] }];
_moduleResult.INDD = { extension: "indd", mimeType: "application/x-indesign", description: "Adobe InDesign document", signatures: items4 };
const items5 = [{ sequence: [254, 237, 250, 206], description: "32-bit" }, { sequence: [206, 250, 237, 254], description: "32-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [254, 237, 250, 207], description: "64-bit" }, { sequence: [207, 250, 237, 254], description: "64-bit, where target system has reverse byte ordering from host running compiler" }, { sequence: [202, 254, 186, 190], description: "Mach-O Fat Binary" }];
_moduleResult.MACHO = { extension: "macho", mimeType: "application/x-mach-binary", description: "Apple OS X ABI Mach-O binary file", signatures: items5 };
const items6 = [{ sequence: [37, 80, 68, 70, 45] }];
_moduleResult.PDF = { extension: "pdf", mimeType: "application/pdf", description: "Portable Document Format", signatures: items6 };
const items7 = [{ sequence: [79, 82, 67] }];
_moduleResult.ORC = { extension: "orc", mimeType: "application/x-orc", description: "Apache ORC (Optimized Row Columnar) file format for columnar storage", signatures: items7 };
const items8 = [{ sequence: [80, 65, 82, 49] }];
_moduleResult.PARQUET = { extension: "parquet", mimeType: "application/vnd.apache.parquet", description: "Apache Parquet file format for columnar storage", signatures: items8 };
const items9 = [{ sequence: [37, 33, 80, 83] }];
_moduleResult.PS = { extension: "ps", mimeType: "application/postscript", description: "PostScript document", signatures: items9 };
const items10 = [{ sequence: [123, 92, 114, 116, 102, 49] }];
_moduleResult.RTF = { extension: "rtf", mimeType: "application/rtf", description: "Rich Text Format word processing file", signatures: items10 };
const items11 = [{ sequence: [83, 81, 76, 105, 116, 101, 32, 102, 111, 114, 109, 97, 116, 32, 51, 0] }];
_moduleResult.SQLITE = { extension: "sqlite", mimeType: "application/x-sqlite3", description: "SQLite database file", signatures: items11 };
const items12 = [{ sequence: [115, 111, 108, 105, 100] }];
_moduleResult.STL = { extension: "stl", mimeType: "application/sla", description: "ASCII STL (STereoLithography) file for 3D printing", signatures: items12 };
const items13 = [{ sequence: [116, 114, 117, 101, 0] }, { sequence: [0, 1, 0, 0, 0], compatibleExtensions: ["tte, dfont"] }];
_moduleResult.TTF = { extension: "ttf", mimeType: "application/x-font-ttf", description: "TrueType font file", signatures: items13 };
const items14 = [{ sequence: [212, 195, 178, 161] }, { sequence: [77, 60, 178, 161], description: "Nanosecond resolution" }];
_moduleResult.PCAP = { extension: "pcap", mimeType: "application/vnd.tcpdump.pcap", description: "Libpcap File Format", signatures: items14 };

export const OtherTypes = _moduleResult;