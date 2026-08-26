// _runtime/05126_decodeXPValue.js
function decodeXPValue(arg0) {
  const textDecoder = new TextDecoder("utf-16");
  const uint8Array = new Uint8Array(arg0);
  return textDecoder.decode(uint8Array).replace(/\u0000+$/, "");
}
let obj = { 11: "ProcessingSoftware", 254: null, 255: null, 256: "ImageWidth", 257: "ImageLength", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 263: null, 264: "CellWidth", 265: "CellLength", 266: null, 269: "DocumentName", 270: "ImageDescription", 271: "Make", 272: "Model", 273: "StripOffsets", 274: null, 277: "SamplesPerPixel", 278: "RowsPerStrip", 279: "StripByteCounts", 280: "MinSampleValue", 281: "MaxSampleValue", 282: null, 283: null, 284: "PlanarConfiguration", 285: "PageName", 286: null, 287: null, 290: null, 296: null, 297: "PageNumber", 301: "TransferFunction", 305: "Software", 306: "DateTime", 315: "Artist", 316: "HostComputer", 317: "Predictor", 318: null, 319: null, 321: "HalftoneHints", 322: "TileWidth", 323: "TileLength", 330: "A100DataOffset", 332: null, 337: "TargetPrinter", 338: null, 339: null, 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength", 529: null, 530: "YCbCrSubSampling", 531: null, 532: null, 700: "ApplicationNotes", 18246: "Rating", 18249: "RatingPercent", 33432: null, 33550: "PixelScale", 33723: "IPTC-NAA", 33920: "IntergraphMatrix", 33922: "ModelTiePoint", 34118: "SEMInfo", 34264: "ModelTransform", 34377: "PhotoshopSettings", 34665: "Exif IFD Pointer", 34675: "ICC_Profile", 34735: "GeoTiffDirectory", 34736: "GeoTiffDoubleParams", 34737: "GeoTiffAsciiParams", 34853: "GPS Info IFD Pointer", 40091: null, 40092: null, 40093: null, 40094: null, 40095: null, 42112: "GDALMetadata", 42113: "GDALNoData", 50341: "PrintIM", 50707: "DNGBackwardVersion", 50708: "UniqueCameraModel", 50709: "LocalizedCameraModel", 50721: "ColorMatrix1", 50722: "ColorMatrix2", 50723: "CameraCalibration1", 50724: "CameraCalibration2", 50725: "ReductionMatrix1", 50726: "ReductionMatrix2", 50727: "AnalogBalance", 50728: "AsShotNeutral", 50729: "AsShotWhiteXY", 50730: "BaselineExposure", 50731: "BaselineNoise", 50732: "BaselineSharpness", 50734: "LinearResponseLimit", 50735: "CameraSerialNumber", 50736: "DNGLensInfo", 50739: "ShadowScale", 50741: null, 50778: null, 50779: null, 50781: "RawDataUniqueID", 50827: "OriginalRawFileName", 50828: "OriginalRawFileData", 50831: "AsShotICCProfile", 50832: "AsShotPreProfileMatrix", 50833: "CurrentICCProfile", 50834: "CurrentPreProfileMatrix", 50879: "ColorimetricReference", 50885: "SRawType", 50898: "PanasonicTitle", 50899: "PanasonicTitle2", 50931: "CameraCalibrationSig", 50932: "ProfileCalibrationSig", 50933: "ProfileIFD", 50934: "AsShotProfileName", 50936: "ProfileName", 50937: "ProfileHueSatMapDims", 50938: "ProfileHueSatMapData1", 50939: "ProfileHueSatMapData2", 50940: "ProfileToneCurve", 50941: null, 50942: "ProfileCopyright", 50964: "ForwardMatrix1", 50965: "ForwardMatrix2", 50966: "PreviewApplicationName", 50967: "PreviewApplicationVersion", 50968: "PreviewSettingsName", 50969: "PreviewSettingsDigest", 50970: null, 50971: "PreviewDateTime", 50972: "RawImageDigest", 50973: "OriginalRawFileDigest", 50981: "ProfileLookTableDims", 50982: "ProfileLookTableData", 51043: "TimeCodes", 51044: "FrameRate", 51058: "TStop", 51081: "ReelName", 51089: "OriginalDefaultFinalSize", 51090: "OriginalBestQualitySize", 51091: "OriginalDefaultCropSize", 51105: "CameraLabel", 51107: null, 51108: null, 51109: "BaselineExposureOffset", 51110: null, 51111: "NewRawImageDigest", 51112: "RawToPreviewGain" };
obj[254] = {
  name: "SubfileType",
  description(arg0) {
    return { 0: "Full-resolution image", 1: "Reduced-resolution image", 2: "Single page of multi-page image", 3: "Single page of multi-page reduced-resolution image", 4: "Transparency mask", 5: "Transparency mask of reduced-resolution image", 6: "Transparency mask of multi-page image", 7: "Transparency mask of reduced-resolution multi-page image", 65537: "Alternate reduced-resolution image", "4294967295": "Invalid" }[arg0] || "Unknown";
  }
};
obj[255] = {
  name: "OldSubfileType",
  description(arg0) {
    return { 0: "Full-resolution image", 1: "Reduced-resolution image", 2: "Single page of multi-page image" }[arg0] || "Unknown";
  }
};
obj[263] = {
  name: "Thresholding",
  description(arg0) {
    return { 1: "No dithering or halftoning", 2: "Ordered dither or halfton", 3: "Randomized dither" }[arg0] || "Unknown";
  }
};
obj[266] = {
  name: "FillOrder",
  description(arg0) {
    return { 1: "Normal", 2: "Reversed" }[arg0] || "Unknown";
  }
};
obj[274] = {
  name: "Orientation",
  description(arg0) {
    let str = "top-left";
    if (1 !== arg0) {
      let str2 = "top-right";
      if (2 !== arg0) {
        let str3 = "bottom-right";
        if (3 !== arg0) {
          let str4 = "bottom-left";
          if (4 !== arg0) {
            let str5 = "left-top";
            if (5 !== arg0) {
              let str6 = "right-top";
              if (6 !== arg0) {
                let str7 = "right-bottom";
                if (7 !== arg0) {
                  let str8 = "Undefined";
                  if (8 === arg0) {
                    str8 = "left-bottom";
                  }
                  str7 = str8;
                }
                str6 = str7;
              }
              str5 = str6;
            }
            str4 = str5;
          }
          str3 = str4;
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
};
obj = { name: "XResolution", description: require("metro/05127__.js").XResolution };
obj[282] = obj;
obj = { name: "YResolution", description: require("metro/05127__.js").YResolution };
obj[283] = obj;
obj[286] = {
  name: "XPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
obj[287] = {
  name: "YPosition",
  description(arg0) {
    return "" + Math.round(arg0[0] / arg0[1]);
  }
};
obj[290] = {
  name: "GrayResponseUnit",
  description(arg0) {
    return { 1: "0.1", 2: "0.001", 3: "0.0001", 4: "1e-05", 5: "1e-06" }[arg0] || "Unknown";
  }
};
obj[296] = { name: "ResolutionUnit", description: require("metro/05127__.js").ResolutionUnit };
obj[318] = {
  name: "WhitePoint",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
obj[319] = {
  name: "PrimaryChromaticities",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] + "/" + arg0[1]);
    return mapped.join(", ");
  }
};
obj[332] = {
  name: "InkSet",
  description(arg0) {
    return { 1: "CMYK", 2: "Not CMYK" }[arg0] || "Unknown";
  }
};
obj[338] = {
  name: "ExtraSamples",
  description(arg0) {
    return { 0: "Unspecified", 1: "Associated Alpha", 2: "Unassociated Alpha" }[arg0] || "Unknown";
  }
};
obj[339] = {
  name: "SampleFormat",
  description(arr) {
    closure_0 = { 1: "Unsigned", 2: "Signed", 3: "Float", 4: "Undefined", 5: "Complex int", 6: "Complex float" };
    let str = "Unknown";
    if (Array.isArray(arr)) {
      const mapped = arr.map((arg0) => table[arg0] || "Unknown");
      str = mapped.join(", ");
    }
    return str;
  }
};
obj[529] = {
  name: "YCbCrCoefficients",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join("/");
  }
};
obj[531] = {
  name: "YCbCrPositioning",
  description(arg0) {
    let str = "centered";
    if (1 !== arg0) {
      let str2 = "co-sited";
      if (2 !== arg0) {
        str2 = `undefined ${arg0}`;
      }
      str = str2;
    }
    return str;
  }
};
obj[532] = {
  name: "ReferenceBlackWhite",
  description(arr) {
    const mapped = arr.map((arg0) => "" + arg0[0] / arg0[1]);
    return mapped.join(", ");
  }
};
obj[33432] = {
  name: "Copyright",
  description(join) {
    return join.join("; ");
  }
};
obj[40091] = { name: "XPTitle", description: decodeXPValue };
obj[40092] = { name: "XPComment", description: decodeXPValue };
obj[40093] = { name: "XPAuthor", description: decodeXPValue };
obj[40094] = { name: "XPKeywords", description: decodeXPValue };
obj[40095] = { name: "XPSubject", description: decodeXPValue };
obj[50741] = {
  name: "MakerNoteSafety",
  description(arg0) {
    return { 0: "Unsafe", 1: "Safe" }[arg0] || "Unknown";
  }
};
const obj1 = { name: "ResolutionUnit", description: require("metro/05127__.js").ResolutionUnit };
obj[50778] = { name: "CalibrationIlluminant1", description: require("metro/05127__.js").LightSource };
const obj2 = { name: "CalibrationIlluminant1", description: require("metro/05127__.js").LightSource };
obj[50779] = { name: "CalibrationIlluminant2", description: require("metro/05127__.js").LightSource };
obj[50941] = {
  name: "ProfileEmbedPolicy",
  description(arg0) {
    return { 0: "Allow Copying", 1: "Embed if Used", 2: "Never Embed", 3: "No Restrictions" }[arg0] || "Unknown";
  }
};
obj[50970] = {
  name: "PreviewColorSpace",
  description(arg0) {
    return { 1: "Gray Gamma 2.2", 2: "sRGB", 3: "Adobe RGB", 4: "ProPhoto RGB" }[arg0] || "Unknown";
  }
};
obj[51107] = {
  name: "ProfileHueSatMapEncoding",
  description(arg0) {
    return { 0: "Linear", 1: "sRGB" }[arg0] || "Unknown";
  }
};
obj[51108] = {
  name: "ProfileLookTableEncoding",
  description(arg0) {
    return { 0: "Linear", 1: "sRGB" }[arg0] || "Unknown";
  }
};
obj[51110] = {
  name: "DefaultBlackRender",
  description(arg0) {
    return { 0: "Auto", 1: "None" }[arg0] || "Unknown";
  }
};
arg5.default = obj;