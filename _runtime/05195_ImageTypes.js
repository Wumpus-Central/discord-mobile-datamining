// === Module 5195: ImageTypes ===

// Module 5195 (ImageTypes)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class ImageTypes {
  constructor() {
    tmp = closure_0(this, ImageTypes);
    return;
  }
}
const _moduleResult = _createClass(ImageTypes);
let obj = { extension: "avif", mimeType: "image/avif", description: "Alliance for Open Media (AOMedia) Video 1 (AV1) Image File", signatures: null };
const items = [{ sequence: [0, 0, 0] }];
obj.signatures = items;
_moduleResult.AVIF = obj;
obj = { extension: "bmp", mimeType: "image/bmp", description: "A bitmap format used mostly in Windows", signatures: null };
const items1 = [{ sequence: [66, 77], compatibleExtensions: ["dib"] }];
obj.signatures = items1;
_moduleResult.BMP = obj;
obj = { extension: "bpg", mimeType: "image/bpg", description: "Better Portable Graphics image format", signatures: null };
const items2 = [{ sequence: [66, 80, 71, 251] }];
obj.signatures = items2;
_moduleResult.BPG = obj;
const obj1 = { extension: "cr2", mimeType: "image/x-canon-cr2", description: "Canon digital camera RAW file", signatures: null };
const items3 = [{ sequence: [73, 73, 42, 0, 16, 0, 0, 0, 67, 82] }];
obj1.signatures = items3;
_moduleResult.CR2 = obj1;
const obj2 = { extension: "exr", mimeType: "image/x-exr", description: "OpenEXR bitmap image format", signatures: null };
const items4 = [{ sequence: [118, 47, 49, 1] }];
obj2.signatures = items4;
_moduleResult.EXR = obj2;
const obj3 = { extension: "gif", mimeType: "image/gif", description: "Image file encoded in the Graphics Interchange Format (GIF)", signatures: null };
const items5 = [{ sequence: [71, 73, 70, 56, 55, 97] }, { sequence: [71, 73, 70, 56, 57, 97] }];
obj3.signatures = items5;
_moduleResult.GIF = obj3;
const obj4 = { extension: "heic", mimeType: "image/heic", description: "A variant of the HEIF (High Efficiency Image Format) that store images on the latest Apple devices.", signatures: null };
const items6 = [{ sequence: [102, 116, 121, 112, 104, 101, 105, 99], offset: 4 }, { sequence: [102, 116, 121, 112, 109], offset: 4 }];
obj4.signatures = items6;
_moduleResult.HEIC = obj4;
const obj5 = { extension: "ico", mimeType: "image/x-icon", description: "Computer icon encoded in ICO file format", signatures: null };
const items7 = [{ sequence: [0, 0, 1, 0], compatibleExtensions: ["spl"] }];
obj5.signatures = items7;
_moduleResult.ICO = obj5;
const obj6 = { extension: "jpeg", mimeType: "image/jpeg", description: "JPEG (Joint Photographic Experts Group) is a widely used lossy image compression format.", signatures: null };
const items8 = [{ sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0], skippedBytes: [4, 5], description: "Digital camera JPG using Exchangeable Image File Format (EXIF)" }, { sequence: [255, 216, 255, 232, 83, 80, 73, 70, 70, 0], skippedBytes: [4, 5], description: "Still Picture Interchange File Format (SPIFF)" }, { sequence: [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 0], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 238], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0, 0], skippedBytes: [4, 5], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 224, 74, 70, 73, 70, 0], skippedBytes: [4, 5], description: "JPEG/JFIF graphics file", compatibleExtensions: ["jfif", "jpe"] }, { sequence: [255, 216, 255, 224], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216], description: "Generic JPEGimage file", compatibleExtensions: ["jpe"] }];
obj6.signatures = items8;
_moduleResult.JPEG = obj6;
const obj7 = { extension: "pbm", mimeType: "image/x-portable-bitmap", description: "PBM (Portable Bitmap) is a simple monochrome bitmap image format that uses plain text ASCII characters to represent binary image data", signatures: null };
const items9 = [{ sequence: [80, 49, 10], description: "Portable bitmap ASCII" }, { sequence: [80, 52, 10], description: "Portable bitmap binary" }];
obj7.signatures = items9;
_moduleResult.PBM = obj7;
const obj8 = { extension: "pgm", mimeType: "image/x-portable-graymap", description: "PGM (Portable Graymap) is a simple grayscale image format that uses ASCII text characters to represent binary image data.", signatures: null };
const items10 = [{ sequence: [80, 50, 10], description: "Portable Gray Map ASCII" }, { sequence: [80, 53, 10], description: "Portable Gray Map binary" }];
obj8.signatures = items10;
_moduleResult.PGM = obj8;
const obj9 = { extension: "png", mimeType: "image/png", description: "PNG (Portable Network Graphics) is a lossless image compression format that supports a wide range of color depths and transparency and is widely used for high-quality graphics.", signatures: null };
const items11 = [{ sequence: [137, 80, 78, 71, 13, 10, 26, 10] }];
obj9.signatures = items11;
_moduleResult.PNG = obj9;
const obj10 = { extension: "ppm", mimeType: "image/x-portable-pixmap", description: "PPM (Portable Pixmap) is a simple color image format in the Portable Network Graphics (PNG) suite.", signatures: null };
const items12 = [{ sequence: [80, 51, 10], description: "Portable Pixmap ASCII" }, { sequence: [80, 54, 10], description: "Portable Pixmap binary" }];
obj10.signatures = items12;
_moduleResult.PPM = obj10;
const obj11 = { extension: "psd", mimeType: "image/vnd.adobe.photoshop", description: "PSD (Photoshop Document) is an Adobe Photoshop image file format", signatures: null };
const items13 = [{ sequence: [56, 66, 80, 83] }];
obj11.signatures = items13;
_moduleResult.PSD = obj11;
const obj12 = { extension: "webp", mimeType: "image/webp", description: "A modern image format that provides superior lossless and lossy compression for images on the web", signatures: null };
const items14 = [{ sequence: [82, 73, 70, 70, 87, 69, 66, 80], skippedBytes: [4, 5, 6, 7] }];
obj12.signatures = items14;
_moduleResult.WEBP = obj12;

export const ImageTypes = _moduleResult;