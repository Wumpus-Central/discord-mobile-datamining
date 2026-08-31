// _runtime/05107_ImageTypes.js
import _createClass from "metro/00042__createClass.js";
import closure_0 from "metro/00041__classCallCheck.js";

class ImageTypes {
  constructor() {
    tmp = closure_0(this, ImageTypes);
    return;
  }
}
const _moduleResult = _createClass(ImageTypes);
const items = [{ sequence: [0, 0, 0] }];
_moduleResult.AVIF = { extension: "avif", mimeType: "image/avif", description: "Alliance for Open Media (AOMedia) Video 1 (AV1) Image File", signatures: items };
const items1 = [{ sequence: [66, 77], compatibleExtensions: ["dib"] }];
_moduleResult.BMP = { extension: "bmp", mimeType: "image/bmp", description: "A bitmap format used mostly in Windows", signatures: items1 };
const items2 = [{ sequence: [66, 80, 71, 251] }];
_moduleResult.BPG = { extension: "bpg", mimeType: "image/bpg", description: "Better Portable Graphics image format", signatures: items2 };
const items3 = [{ sequence: [73, 73, 42, 0, 16, 0, 0, 0, 67, 82] }];
_moduleResult.CR2 = { extension: "cr2", mimeType: "image/x-canon-cr2", description: "Canon digital camera RAW file", signatures: items3 };
const items4 = [{ sequence: [118, 47, 49, 1] }];
_moduleResult.EXR = { extension: "exr", mimeType: "image/x-exr", description: "OpenEXR bitmap image format", signatures: items4 };
const items5 = [{ sequence: [71, 73, 70, 56, 55, 97] }, { sequence: [71, 73, 70, 56, 57, 97] }];
_moduleResult.GIF = { extension: "gif", mimeType: "image/gif", description: "Image file encoded in the Graphics Interchange Format (GIF)", signatures: items5 };
const items6 = [{ sequence: [102, 116, 121, 112, 104, 101, 105, 99], offset: 4 }, { sequence: [102, 116, 121, 112, 109], offset: 4 }];
_moduleResult.HEIC = { extension: "heic", mimeType: "image/heic", description: "A variant of the HEIF (High Efficiency Image Format) that store images on the latest Apple devices.", signatures: items6 };
const items7 = [{ sequence: [0, 0, 1, 0], compatibleExtensions: ["spl"] }];
_moduleResult.ICO = { extension: "ico", mimeType: "image/x-icon", description: "Computer icon encoded in ICO file format", signatures: items7 };
const items8 = [{ sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0], skippedBytes: [4, 5], description: "Digital camera JPG using Exchangeable Image File Format (EXIF)" }, { sequence: [255, 216, 255, 232, 83, 80, 73, 70, 70, 0], skippedBytes: [4, 5], description: "Still Picture Interchange File Format (SPIFF)" }, { sequence: [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 0], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 238], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 225, 69, 120, 105, 102, 0, 0], skippedBytes: [4, 5], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216, 255, 224, 74, 70, 73, 70, 0], skippedBytes: [4, 5], description: "JPEG/JFIF graphics file", compatibleExtensions: ["jfif", "jpe"] }, { sequence: [255, 216, 255, 224], description: "JPEG raw or in the JFIF or Exif file format" }, { sequence: [255, 216], description: "Generic JPEGimage file", compatibleExtensions: ["jpe"] }];
_moduleResult.JPEG = { extension: "jpeg", mimeType: "image/jpeg", description: "JPEG (Joint Photographic Experts Group) is a widely used lossy image compression format.", signatures: items8 };
const items9 = [{ sequence: [80, 49, 10], description: "Portable bitmap ASCII" }, { sequence: [80, 52, 10], description: "Portable bitmap binary" }];
_moduleResult.PBM = { extension: "pbm", mimeType: "image/x-portable-bitmap", description: "PBM (Portable Bitmap) is a simple monochrome bitmap image format that uses plain text ASCII characters to represent binary image data", signatures: items9 };
const items10 = [{ sequence: [80, 50, 10], description: "Portable Gray Map ASCII" }, { sequence: [80, 53, 10], description: "Portable Gray Map binary" }];
_moduleResult.PGM = { extension: "pgm", mimeType: "image/x-portable-graymap", description: "PGM (Portable Graymap) is a simple grayscale image format that uses ASCII text characters to represent binary image data.", signatures: items10 };
const items11 = [{ sequence: [137, 80, 78, 71, 13, 10, 26, 10] }];
_moduleResult.PNG = { extension: "png", mimeType: "image/png", description: "PNG (Portable Network Graphics) is a lossless image compression format that supports a wide range of color depths and transparency and is widely used for high-quality graphics.", signatures: items11 };
const items12 = [{ sequence: [80, 51, 10], description: "Portable Pixmap ASCII" }, { sequence: [80, 54, 10], description: "Portable Pixmap binary" }];
_moduleResult.PPM = { extension: "ppm", mimeType: "image/x-portable-pixmap", description: "PPM (Portable Pixmap) is a simple color image format in the Portable Network Graphics (PNG) suite.", signatures: items12 };
const items13 = [{ sequence: [56, 66, 80, 83] }];
_moduleResult.PSD = { extension: "psd", mimeType: "image/vnd.adobe.photoshop", description: "PSD (Photoshop Document) is an Adobe Photoshop image file format", signatures: items13 };
const items14 = [{ sequence: [82, 73, 70, 70, 87, 69, 66, 80], skippedBytes: [4, 5, 6, 7] }];
_moduleResult.WEBP = { extension: "webp", mimeType: "image/webp", description: "A modern image format that provides superior lossless and lossy compression for images on the web", signatures: items14 };

export const ImageTypes = _moduleResult;