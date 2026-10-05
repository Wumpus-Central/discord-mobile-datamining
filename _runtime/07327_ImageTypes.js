// _runtime/07327_ImageTypes.js
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
class ImageTypes {
  constructor() {
    _classCallCheck(this, ImageTypes);
  }
}
const _moduleResult = _createClass(ImageTypes);
const obj = {
  extension: "avif",
  mimeType: "image/avif",
  description: "Alliance for Open Media (AOMedia) Video 1 (AV1) Image File",
  signatures: items,
};
items = [{ sequence: [0, 0, 0] }];
_moduleResult.AVIF = obj;
const obj2 = {
  extension: "bmp",
  mimeType: "image/bmp",
  description: "A bitmap format used mostly in Windows",
  signatures: items1,
};
items1 = [{ sequence: [66, 77], compatibleExtensions: ["dib"] }];
_moduleResult.BMP = obj2;
const obj3 = {
  extension: "bpg",
  mimeType: "image/bpg",
  description: "Better Portable Graphics image format",
  signatures: items2,
};
items2 = [{ sequence: [66, 80, 71, 251] }];
_moduleResult.BPG = obj3;
const obj4 = {
  extension: "cr2",
  mimeType: "image/x-canon-cr2",
  description: "Canon digital camera RAW file",
  signatures: items3,
};
items3 = [{ sequence: [73, 73, 42, 0, 16, 0, 0, 0, 67, 82] }];
_moduleResult.CR2 = obj4;
const obj5 = {
  extension: "exr",
  mimeType: "image/x-exr",
  description: "OpenEXR bitmap image format",
  signatures: items4,
};
items4 = [{ sequence: [118, 47, 49, 1] }];
_moduleResult.EXR = obj5;
const obj6 = {
  extension: "gif",
  mimeType: "image/gif",
  description: "Image file encoded in the Graphics Interchange Format (GIF)",
  signatures: items5,
};
items5 = [{ sequence: [71, 73, 70, 56, 55, 97] }, { sequence: [71, 73, 70, 56, 57, 97] }];
_moduleResult.GIF = obj6;
const obj7 = {
  extension: "heic",
  mimeType: "image/heic",
  description: "A variant of the HEIF (High Efficiency Image Format) that store images on the latest Apple devices.",
  signatures: items6,
};
items6 = [
  { sequence: [102, 116, 121, 112, 104, 101, 105, 99], offset: 4 },
  { sequence: [102, 116, 121, 112, 109], offset: 4 },
];
_moduleResult.HEIC = obj7;
const obj8 = {
  extension: "ico",
  mimeType: "image/x-icon",
  description: "Computer icon encoded in ICO file format",
  signatures: items7,
};
items7 = [{ sequence: [0, 0, 1, 0], compatibleExtensions: ["spl"] }];
_moduleResult.ICO = obj8;
const obj9 = {
  extension: "jpeg",
  mimeType: "image/jpeg",
  description: "JPEG (Joint Photographic Experts Group) is a widely used lossy image compression format.",
  signatures: items8,
};
items8 = [
  {
    sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0],
    skippedBytes: [4, 5],
    description: "Digital camera JPG using Exchangeable Image File Format (EXIF)",
  },
  {
    sequence: [255, 216, 255, 232, 83, 80, 73, 70, 70, 0],
    skippedBytes: [4, 5],
    description: "Still Picture Interchange File Format (SPIFF)",
  },
  {
    sequence: [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 0],
    description: "JPEG raw or in the JFIF or Exif file format",
  },
  { sequence: [255, 216, 255, 238], description: "JPEG raw or in the JFIF or Exif file format" },
  {
    sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0, 0],
    skippedBytes: [4, 5],
    description: "JPEG raw or in the JFIF or Exif file format",
  },
  {
    sequence: [255, 216, 255, 224, 74, 70, 73, 70, 0],
    skippedBytes: [4, 5],
    description: "JPEG/JFIF graphics file",
    compatibleExtensions: ["jfif", "jpe"],
  },
  { sequence: [255, 216, 255, 224], description: "JPEG raw or in the JFIF or Exif file format" },
  { sequence: [255, 216], description: "Generic JPEGimage file", compatibleExtensions: ["jpe"] },
];
_moduleResult.JPEG = obj9;
const obj10 = {
  extension: "pbm",
  mimeType: "image/x-portable-bitmap",
  description:
    "PBM (Portable Bitmap) is a simple monochrome bitmap image format that uses plain text ASCII characters to represent binary image data",
  signatures: items9,
};
items9 = [
  { sequence: [80, 49, 10], description: "Portable bitmap ASCII" },
  { sequence: [80, 52, 10], description: "Portable bitmap binary" },
];
_moduleResult.PBM = obj10;
const obj11 = {
  extension: "pgm",
  mimeType: "image/x-portable-graymap",
  description:
    "PGM (Portable Graymap) is a simple grayscale image format that uses ASCII text characters to represent binary image data.",
  signatures: items10,
};
items10 = [
  { sequence: [80, 50, 10], description: "Portable Gray Map ASCII" },
  { sequence: [80, 53, 10], description: "Portable Gray Map binary" },
];
_moduleResult.PGM = obj11;
const obj12 = {
  extension: "png",
  mimeType: "image/png",
  description:
    "PNG (Portable Network Graphics) is a lossless image compression format that supports a wide range of color depths and transparency and is widely used for high-quality graphics.",
  signatures: items11,
};
items11 = [{ sequence: [137, 80, 78, 71, 13, 10, 26, 10] }];
_moduleResult.PNG = obj12;
const obj13 = {
  extension: "ppm",
  mimeType: "image/x-portable-pixmap",
  description: "PPM (Portable Pixmap) is a simple color image format in the Portable Network Graphics (PNG) suite.",
  signatures: items12,
};
items12 = [
  { sequence: [80, 51, 10], description: "Portable Pixmap ASCII" },
  { sequence: [80, 54, 10], description: "Portable Pixmap binary" },
];
_moduleResult.PPM = obj13;
const obj14 = {
  extension: "psd",
  mimeType: "image/vnd.adobe.photoshop",
  description: "PSD (Photoshop Document) is an Adobe Photoshop image file format",
  signatures: items13,
};
items13 = [{ sequence: [56, 66, 80, 83] }];
_moduleResult.PSD = obj14;
const obj15 = {
  extension: "webp",
  mimeType: "image/webp",
  description: "A modern image format that provides superior lossless and lossy compression for images on the web",
  signatures: items14,
};
items14 = [{ sequence: [82, 73, 70, 70, 87, 69, 66, 80], skippedBytes: [4, 5, 6, 7] }];
_moduleResult.WEBP = obj15;
const ImageTypes_export = _moduleResult;

export { ImageTypes_export as ImageTypes };
