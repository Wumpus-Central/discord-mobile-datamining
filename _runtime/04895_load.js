const require = arg1;
function load(response, then) {
  if (then === undefined) {
    then = {};
  }
  response = then;
  if (typeof response === "string") {
    then.async = true;
    let obj1 = /^\w+:\/\//;
    if (obj1.test(response)) {
      let fn = globalThis;
      const _fetch = fetch;
      if (typeof fetch !== "undefined") {
        if (then === undefined) {
          then = {};
        }
        let length = then.length;
        const _Number = fn.Number;
        let isIntegerResult = _Number.isInteger(length);
        if (isIntegerResult) {
          isIntegerResult = length >= 0;
        }
        let obj = { method: "GET" };
        if (isIntegerResult) {
          obj = { range: null };
          obj[0] = `bytes=0-${length - 1}`;
          obj.headers = obj;
        }
        response = fn.fetch(response, obj);
        then = response.then;
        fn = (arrayBuffer) => arrayBuffer.arrayBuffer();
        let nextPromise = then(fn);
      } else {
        obj1 = then;
        if (then === undefined) {
          obj1 = {};
        }
        length = obj1.length;
        nextPromise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let isIntegerResult = Number.isInteger(closure_1);
          if (isIntegerResult) {
            isIntegerResult = tmp >= 0;
          }
          let obj = {};
          if (isIntegerResult) {
            obj = { range: null };
            obj[0] = `bytes=0-${tmp - 1}`;
            obj.headers = obj;
          }
          if (obj3.test(closure_0)) {
            let get = __non_webpack_require__("https").get;
          } else {
            get = __non_webpack_require__("http").get;
          }
          const value = get(closure_0, obj, (statusCode) => {
            if (statusCode.statusCode >= 200) {
              if (statusCode.statusCode <= 299) {
                let closure_0 = [];
                statusCode.on("data", (arg0) => arr.push(Buffer.from(arg0)));
                statusCode.on("error", (arg0) => callback(arg0));
                statusCode.on("end", () => arr(Buffer.concat(arr)));
              }
            }
            callback("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
            statusCode.resume();
          });
          value.on("error", (arg0) => callback(arg0));
        });
      }
    } else {
      let obj2 = /^data:[^;,]*(;base64)?,/;
      if (obj2.test(response)) {
        let resolved = Promise.resolve(response(4897).dataUriToBuffer(response));
        const obj5 = response(4897);
      } else {
        obj2 = then;
        if (then === undefined) {
          obj2 = {};
        }
        length = obj2.length;
        resolved = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          let closure_1 = arg1;
          let obj = (function requireNodeFs() {
            try {
              return globalThis.__non_webpack_require__("fs");
            } catch (err) {
            }
          })();
          obj.open(closure_0, (arg0, arg1) => {
            let closure_0 = arg1;
            if (arg0) {
              callback(arg0);
            } else {
              obj.stat(closure_0, (arg0, size) => {
                if (arg0) {
                  outer1_1(arg0);
                } else {
                  const bound = Math.min(size.size, undefined !== closure_1 ? closure_1 : size.size);
                  const _Buffer = Buffer;
                  const allocResult = Buffer.alloc(bound);
                  let closure_0 = allocResult;
                  const obj = { buffer: null, length: null };
                  obj[0] = allocResult;
                  obj[1] = bound;
                  outer1_2.read(closure_0, obj, (arg0) => {
                    if (arg0) {
                      outer2_1(arg0);
                    } else {
                      outer2_2.close(allocResult, () => { ... });
                    }
                  });
                }
              });
            }
          });
        });
      }
      nextPromise = resolved.then((response) => {
        let buffer = response;
        if ((function isNodeBuffer(response) {
          try {
            const _Buffer = Buffer;
            return Buffer.isBuffer(response);
          } catch (err) {
            return false;
          }
        })(response)) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(response);
          buffer = uint8Array.buffer;
        }
        return outer1_3((function getDataView(buffer) {
          try {
            const _DataView = DataView;
            const dataView = new DataView(buffer);
            return dataView;
          } catch (err) {
            const tmp13 = new callback(table[2])(tmp);
            return tmp13;
          }
        })(buffer), response);
      });
    }
  } else {
    const _File = File;
    let tmp24 = typeof File !== "undefined";
    if (typeof File !== "undefined") {
      const _File2 = File;
      tmp24 = response instanceof File;
    }
    if (tmp24) {
      then.async = true;
      const promise = new Promise((closure_0) => {
        let closure_1 = arg1;
        const fileReader = new FileReader();
        fileReader.onload = (target) => callback(target.target.result);
        fileReader.onerror = () => callback2(fileReader.error);
        const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
      });
      let nextPromise1 = promise.then((response) => {
        let buffer = response;
        if ((function isNodeBuffer(response) {
          try {
            const _Buffer = Buffer;
            return Buffer.isBuffer(response);
          } catch (err) {
            return false;
          }
        })(response)) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(response);
          buffer = uint8Array.buffer;
        }
        return outer1_3((function getDataView(buffer) {
          try {
            const _DataView = DataView;
            const dataView = new DataView(buffer);
            return dataView;
          } catch (err) {
            const tmp13 = new callback(table[2])(tmp);
            return tmp13;
          }
        })(buffer), response);
      });
    } else {
      let buffer = response;
      if ((function isNodeBuffer(response) {
        try {
          const _Buffer = Buffer;
          return Buffer.isBuffer(response);
        } catch (err) {
          return false;
        }
      })(response)) {
        let _Uint8Array = Uint8Array;
        let uint8Array = new Uint8Array(response);
        buffer = uint8Array.buffer;
      }
      nextPromise1 = loadView((function getDataView(buffer) {
        try {
          const _DataView = DataView;
          const dataView = new DataView(buffer);
          return dataView;
        } catch (err) {
          const tmp13 = new callback(table[2])(tmp);
          return tmp13;
        }
      })(buffer), then);
    }
    return nextPromise1;
  }
}
function loadView(byteLength, then) {
  let byteOrder;
  let fileDataOffset;
  let fileType;
  let gifHeaderOffset;
  let iccChunks;
  let iptcDataOffset;
  let jfifDataOffset;
  let mpfDataOffset;
  let pngChunkOffsets;
  let pngHeaderOffset;
  let pngTextChunks;
  let tags;
  let tiffHeaderOffset;
  let vp8xChunkOffset;
  let xmpChunks;
  let obj = then;
  if (then === undefined) {
    obj = { expanded: false, async: false, includeUnknown: false, domParser: "channel" };
  }
  let flag = obj.expanded;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.async;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = obj.includeUnknown;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const domParser = obj.domParser;
  function addPngTextTags(readTags) {
    if (flag) {
      const items = ["exif", "iptc"];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp20 = nextResult;
        let _HermesInternal = HermesInternal;
        let combined = "__" + nextResult;
        let tmp22 = combined;
        if (!readTags[combined]) {
          continue;
        } else {
          let tmp24 = nextResult;
          let tmp23 = closure_1;
          if (closure_1[tmp20]) {
            let tmp27 = flag;
            let tmp28 = addPngTextTags;
            let obj2 = flag(addPngTextTags[1]);
            let tmp29 = closure_1;
            let tmp30 = combined;
            let objectAssignResult = obj2.objectAssign({}, closure_1.exif, readTags[tmp22]);
          } else {
            let tmp25 = combined;
            objectAssignResult = readTags[tmp22];
          }
          tmp23[tmp20] = objectAssignResult;
          let tmp31 = combined;
          delete tmp3[tmp4];
        }
      }
      objectAssignResult = readTags;
      if (closure_1.png) {
        objectAssignResult = flag(addPngTextTags[1]).objectAssign({}, closure_1.png, readTags);
        const obj3 = flag(addPngTextTags[1]);
      }
      closure_1.png = objectAssignResult;
      let objectAssignResult1 = readTags;
      if (closure_1.pngText) {
        objectAssignResult1 = flag(addPngTextTags[1]).objectAssign({}, closure_1.png, readTags);
        const obj4 = flag(addPngTextTags[1]);
      }
      closure_1.pngText = objectAssignResult1;
      const tmp32 = closure_1;
      const tmp37 = closure_1;
    } else {
      const obj = flag(addPngTextTags[1]);
      const tmp8 = readTags.__exif || {};
      const tmp9 = readTags.__iptc || {};
      closure_1 = obj.objectAssign({}, tmp7, tmp8, tmp9, readTags);
      delete tmp2[tmp];
      delete tmp2[tmp];
    }
  }
  let importDefault = {};
  const tmp6 = importDefault;
  const tmp7 = addPngTextTags;
  let obj2 = importDefault(addPngTextTags[3]);
  ({ fileType, fileDataOffset, jfifDataOffset, tiffHeaderOffset, iptcDataOffset, xmpChunks, iccChunks, mpfDataOffset, pngHeaderOffset, pngTextChunks, pngChunkOffsets, vp8xChunkOffset, gifHeaderOffset } = importDefault(addPngTextTags[3]).parseAppMarkers(byteLength, flag2));
  let flag4 = false;
  if (importDefault(addPngTextTags[4]).USE_JPEG) {
    flag4 = false;
    if (tmp6(tmp7[4]).USE_FILE) {
      flag4 = false;
      if (undefined !== fileDataOffset) {
        let tmp6Result = tmp6(tmp7[5]);
        const readResult = tmp6Result.read(byteLength, fileDataOffset);
        if (flag) {
          importDefault.file = readResult;
          flag4 = true;
        } else {
          importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult);
          flag4 = true;
          let obj4 = flag(tmp7[1]);
        }
      }
    }
  }
  let flag5 = flag4;
  if (tmp6(tmp7[4]).USE_JPEG) {
    flag5 = flag4;
    if (tmp6(tmp7[4]).USE_JFIF) {
      flag5 = flag4;
      if (undefined !== jfifDataOffset) {
        tmp6Result = tmp6(tmp7[6]);
        const readResult1 = tmp6Result.read(byteLength, jfifDataOffset);
        if (flag) {
          importDefault.jfif = readResult1;
          flag5 = true;
        } else {
          importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult1);
          flag5 = true;
          const obj6 = flag(tmp7[1]);
        }
      }
    }
  }
  let flag6 = flag5;
  if (tmp6(tmp7[4]).USE_EXIF) {
    flag6 = flag5;
    if (undefined !== tiffHeaderOffset) {
      let readResult2 = tmp6(tmp7[7]).read(byteLength, tiffHeaderOffset, flag3);
      ({ tags, byteOrder } = readResult2);
      if (tags.Thumbnail) {
        importDefault.Thumbnail = tags.Thumbnail;
        delete tmp[tmp3];
      }
      if (flag) {
        importDefault.exif = tags;
        (function addGpsGroup(closure_1) {
          if (closure_1.exif) {
            if (closure_1.exif.GPSLatitude) {
              if (closure_1.exif.GPSLatitudeRef) {
                try {
                  let gps = closure_1.gps;
                  if (!gps) {
                    gps = {};
                  }
                  closure_1.gps = gps;
                  closure_1.gps.Latitude = flag(addPngTextTags[22]).getCalculatedGpsValue(closure_1.exif.GPSLatitude.value);
                  let value = closure_1.exif.GPSLatitudeRef.value;
                  if ("S" === value.join("")) {
                    closure_1.gps.Latitude = -closure_1.gps.Latitude;
                  }
                  const obj2 = flag(addPngTextTags[22]);
                } catch (err) {
                }
              }
            }
            if (closure_1.exif.GPSLongitude) {
              if (closure_1.exif.GPSLongitudeRef) {
                try {
                  let gps1 = closure_1.gps;
                  if (!gps1) {
                    gps1 = {};
                  }
                  closure_1.gps = gps1;
                  closure_1.gps.Longitude = flag(addPngTextTags[22]).getCalculatedGpsValue(closure_1.exif.GPSLongitude.value);
                  value = closure_1.exif.GPSLongitudeRef.value;
                  if ("W" === value.join("")) {
                    closure_1.gps.Longitude = -closure_1.gps.Longitude;
                  }
                  const obj4 = flag(addPngTextTags[22]);
                } catch (err) {
                }
              }
            }
            if (closure_1.exif.GPSAltitude) {
              if (closure_1.exif.GPSAltitudeRef) {
                try {
                  let gps2 = closure_1.gps;
                  if (!gps2) {
                    gps2 = {};
                  }
                  closure_1.gps = gps2;
                  closure_1.gps.Altitude = closure_1.exif.GPSAltitude.value[0] / closure_1.exif.GPSAltitude.value[1];
                  if (1 === closure_1.exif.GPSAltitudeRef.value) {
                    closure_1.gps.Altitude = -closure_1.gps.Altitude;
                  }
                } catch (err) {
                }
              }
            }
          }
        })(importDefault);
      } else {
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, tags);
        const obj7 = flag(tmp7[1]);
      }
      if (tmp6(tmp7[4]).USE_TIFF) {
        if (tmp6(tmp7[4]).USE_IPTC) {
          if (tags["IPTC-NAA"]) {
            if (undefined === iptcDataOffset) {
              const readResult3 = tmp6(tmp7[8]).read(tags["IPTC-NAA"].value, 0, flag3);
              if (flag) {
                importDefault.iptc = readResult3;
              } else {
                importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult3);
                const obj9 = flag(tmp7[1]);
              }
              const tmp6Result2 = tmp6(tmp7[8]);
            }
          }
        }
      }
      if (tmp6(tmp7[4]).USE_TIFF) {
        if (tmp6(tmp7[4]).USE_XMP) {
          if (tags.ApplicationNotes) {
            const _Array = Array;
            let isArray = Array.isArray(xmpChunks);
            if (isArray) {
              isArray = xmpChunks.length > 0;
            }
            if (!isArray) {
              let tmp29 = flag;
              const tmp6Result3 = tmp6(tmp7[9]);
              const readResult4 = tmp6Result3.read(flag(tmp7[1]).getStringValueFromArray(tags.ApplicationNotes.value), undefined, domParser);
              if (flag) {
                importDefault.xmp = readResult4;
              } else {
                delete tmp5[tmp3];
                importDefault = tmp29(tmp7[1]).objectAssign({}, importDefault, readResult4);
                const tmp29Result = tmp29(tmp7[1]);
              }
              const obj11 = flag(tmp7[1]);
            }
          }
        }
      }
      if (tmp6(tmp7[4]).USE_PHOTOSHOP) {
        if (tags.ImageSourceData) {
          if (tags.PhotoshopSettings) {
            const readResult5 = tmp6(tmp7[10]).read(tags.PhotoshopSettings.value, flag3);
            if (flag) {
              importDefault.photoshop = readResult5;
            } else {
              importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult5);
              const obj14 = flag(tmp7[1]);
            }
            const tmp6Result4 = tmp6(tmp7[10]);
          }
        }
      }
      if (tmp6(tmp7[4]).USE_TIFF) {
        if (tmp6(tmp7[4]).USE_ICC) {
          if (tags.ICC_Profile) {
            const _Array2 = Array;
            let isArray1 = Array.isArray(iccChunks);
            if (isArray1) {
              isArray1 = iccChunks.length > 0;
            }
            if (!isArray1) {
              obj = { offset: 0, length: null, chunkNumber: 1, chunksTotal: 1 };
              obj[1] = tags.ICC_Profile.value.length;
              let items = [obj];
              const readResult6 = tmp6(tmp7[11]).read(tags.ICC_Profile.value, items);
              if (flag) {
                importDefault.icc = readResult6;
              } else {
                importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult6);
                const obj17 = flag(tmp7[1]);
              }
              const tmp6Result5 = tmp6(tmp7[11]);
            }
          }
        }
      }
      if (tmp6(tmp7[4]).USE_MAKER_NOTES) {
        if (tags.MakerNote) {
          let __offset = tags.Make && tags.Make.value;
          if (__offset) {
            const _Array3 = Array;
            __offset = Array.isArray(tags.Make.value);
          }
          if (__offset) {
            __offset = "Canon" === tags.Make.value[0];
          }
          if (__offset) {
            __offset = tags.MakerNote;
          }
          if (__offset) {
            __offset = tags.MakerNote.__offset;
          }
          if (__offset) {
            const tmp6Result6 = tmp6(tmp7[12]);
            const readResult7 = tmp6Result6.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, byteOrder, flag3);
            if (flag) {
              importDefault.makerNotes = readResult7;
            } else {
              importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult7);
              const obj22 = flag(tmp7[1]);
            }
          } else {
            let __offset2 = tags.MakerNote.value.length > "PENTAX ".length;
            if (__offset2) {
              let value = tags.MakerNote.value;
              __offset2 = flag(tmp7[1]).getStringValueFromArray(value.slice(0, "PENTAX ".length)) === "PENTAX ";
              const obj18 = flag(tmp7[1]);
            }
            if (__offset2) {
              __offset2 = tags.MakerNote.__offset;
            }
            if (__offset2) {
              const tmp6Result7 = tmp6(tmp7[13]);
              const readResult8 = tmp6Result7.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, flag3);
              if (flag) {
                importDefault.makerNotes = readResult8;
              } else {
                importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult8);
                const obj20 = flag(tmp7[1]);
              }
            }
          }
        }
      }
      flag6 = true;
      if (tags.MakerNote) {
        const MakerNote = tags.MakerNote;
        delete tmp3[tmp];
        flag6 = true;
      }
      const tmp6Result1 = tmp6(tmp7[7]);
    }
  }
  let flag7 = flag6;
  if (tmp6(tmp7[4]).USE_JPEG) {
    flag7 = flag6;
    if (tmp6(tmp7[4]).USE_IPTC) {
      flag7 = flag6;
      if (undefined !== iptcDataOffset) {
        const readResult9 = tmp6(tmp7[8]).read(byteLength, iptcDataOffset, flag3);
        if (flag) {
          importDefault.iptc = readResult9;
          flag7 = true;
        } else {
          importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult9);
          flag7 = true;
          const obj24 = flag(tmp7[1]);
        }
        const tmp6Result8 = tmp6(tmp7[8]);
      }
    }
  }
  let flag8 = flag7;
  if (tmp6(tmp7[4]).USE_XMP) {
    const _Array4 = Array;
    let isArray2 = Array.isArray(xmpChunks);
    if (isArray2) {
      isArray2 = xmpChunks.length > 0;
    }
    flag8 = flag7;
    if (isArray2) {
      const readResult10 = tmp6(tmp7[9]).read(byteLength, xmpChunks, domParser);
      if (flag) {
        importDefault.xmp = readResult10;
        flag8 = true;
      } else {
        delete tmp3[tmp];
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult10);
        flag8 = true;
        const obj26 = flag(tmp7[1]);
      }
      const tmp6Result9 = tmp6(tmp7[9]);
    }
  }
  const items1 = [];
  if (tmp6(tmp7[4]).USE_JPEG) {
    let flag9 = flag8;
    if (tmp6(tmp7[4]).USE_ICC) {
      const _Array5 = Array;
      let isArray3 = Array.isArray(iccChunks);
      if (isArray3) {
        isArray3 = iccChunks.length > 0;
      }
      flag9 = flag8;
      if (isArray3) {
        const readResult11 = tmp6(tmp7[11]).read(byteLength, iccChunks, flag2);
        if (readResult11 instanceof Promise) {
          items1.push(readResult11.then(function addIccTags(icc) {
            if (flag) {
              closure_1.icc = icc;
            } else {
              closure_1 = flag(addPngTextTags[1]).objectAssign({}, closure_1, icc);
              const obj = flag(addPngTextTags[1]);
            }
          }));
          flag9 = true;
        } else if (flag) {
          importDefault.icc = readResult11;
          flag9 = true;
        } else {
          importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult11);
          flag9 = true;
          const obj28 = flag(tmp7[1]);
        }
        const tmp6Result10 = tmp6(tmp7[11]);
      }
    }
  } else {
    flag9 = flag8;
  }
  let flag10 = flag9;
  if (tmp6(tmp7[4]).USE_MPF) {
    flag10 = flag9;
    if (undefined !== mpfDataOffset) {
      const readResult12 = tmp6(tmp7[14]).read(byteLength, mpfDataOffset, flag3);
      if (flag) {
        importDefault.mpf = readResult12;
        flag10 = true;
      } else {
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult12);
        flag10 = true;
        const obj30 = flag(tmp7[1]);
      }
      const tmp6Result11 = tmp6(tmp7[14]);
    }
  }
  let flag11 = flag10;
  if (tmp6(tmp7[4]).USE_PNG) {
    flag11 = flag10;
    if (tmp6(tmp7[4]).USE_PNG_FILE) {
      flag11 = flag10;
      if (undefined !== pngHeaderOffset) {
        readResult2 = tmp6(tmp7[15]).read(byteLength, pngHeaderOffset);
        if (flag) {
          let objectAssignResult = readResult2;
          if (importDefault.png) {
            objectAssignResult = flag(tmp7[1]).objectAssign({}, importDefault.png, readResult2);
            const obj32 = flag(tmp7[1]);
          }
          importDefault.png = objectAssignResult;
          importDefault.pngFile = readResult2;
          flag11 = true;
          const tmp84 = importDefault;
        } else {
          importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult2);
          flag11 = true;
          const obj31 = flag(tmp7[1]);
        }
        const tmp6Result12 = tmp6(tmp7[15]);
      }
    }
  }
  let flag12 = flag11;
  if (tmp6(tmp7[4]).USE_PNG) {
    flag12 = flag11;
    if (undefined !== pngTextChunks) {
      const tmp6Result13 = tmp6(tmp7[16]);
      const readResult13 = tmp6Result13.read(byteLength, pngTextChunks, flag2, flag3);
      addPngTextTags(readResult13.readTags);
      flag12 = true;
      if (readResult13.readTagsPromise) {
        items1.push(readTagsPromise.then((arr) => arr.forEach(addPngTextTags)));
        flag12 = true;
      }
    }
  }
  let flag13 = flag12;
  if (tmp6(tmp7[4]).USE_PNG) {
    flag13 = flag12;
    if (undefined !== pngChunkOffsets) {
      readResult2 = tmp6(tmp7[17]).read(byteLength, pngChunkOffsets);
      if (flag) {
        if (importDefault.png) {
          readResult2 = flag;
          readResult2 = importDefault;
          readResult2 = flag(tmp7[1]).objectAssign({}, importDefault.png, readResult2);
          const obj35 = flag(tmp7[1]);
        }
        importDefault.png = readResult2;
        flag13 = true;
        const tmp99 = importDefault;
      } else {
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult2);
        flag13 = true;
        const obj34 = flag(tmp7[1]);
      }
      const tmp6Result14 = tmp6(tmp7[17]);
    }
  }
  let flag14 = flag13;
  if (tmp6(tmp7[4]).USE_WEBP) {
    flag14 = flag13;
    if (undefined !== vp8xChunkOffset) {
      readResult2 = tmp6(tmp7[18]).read(byteLength, vp8xChunkOffset);
      if (flag) {
        readResult2 = importDefault;
        if (importDefault.riff) {
          readResult2 = flag;
          readResult2 = importDefault;
          readResult2 = flag(tmp7[1]).objectAssign({}, importDefault.riff, readResult2);
          const obj37 = flag(tmp7[1]);
        }
        readResult2.riff = readResult2;
        flag14 = true;
      } else {
        readResult2 = flag;
        readResult2 = importDefault;
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult2);
        flag14 = true;
        const obj36 = flag(tmp7[1]);
      }
      const tmp6Result15 = tmp6(tmp7[18]);
    }
  }
  let flag15 = flag14;
  if (tmp6(tmp7[4]).USE_GIF) {
    flag15 = flag14;
    if (undefined !== gifHeaderOffset) {
      readResult2 = tmp6(tmp7[19]).read(byteLength, gifHeaderOffset);
      if (flag) {
        readResult2 = importDefault;
        if (importDefault.gif) {
          readResult2 = flag;
          readResult2 = importDefault;
          readResult2 = flag(tmp7[1]).objectAssign({}, importDefault.gif, readResult2);
          const obj39 = flag(tmp7[1]);
        }
        readResult2.gif = readResult2;
        flag15 = true;
      } else {
        readResult2 = flag;
        readResult2 = importDefault;
        importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult2);
        flag15 = true;
        const obj38 = flag(tmp7[1]);
      }
      const tmp6Result16 = tmp6(tmp7[19]);
    }
  }
  const parseAppMarkersResult = importDefault(addPngTextTags[3]).parseAppMarkers(byteLength, flag2);
  readResult2 = tmp6(tmp7[20]).get(importDefault, flag);
  if (readResult2) {
    if (flag) {
      readResult2 = importDefault;
      importDefault.composite = readResult2;
    } else {
      readResult2 = flag;
      readResult2 = importDefault;
      importDefault = flag(tmp7[1]).objectAssign({}, importDefault, readResult2);
      const obj41 = flag(tmp7[1]);
    }
  }
  readResult2 = (tmp6(tmp7[4]).USE_JPEG || tmp6(tmp7[4]).USE_WEBP) && tmp6(tmp7[4]).USE_EXIF && tmp6(tmp7[4]).USE_THUMBNAIL;
  if (readResult2) {
    readResult2 = importDefault;
    readResult2 = tmp6(tmp7[21]).get(byteLength, importDefault.Thumbnail, tiffHeaderOffset);
    const tmp6Result18 = tmp6(tmp7[21]);
  }
  if (readResult2) {
    importDefault.Thumbnail = readResult2;
    flag15 = true;
  } else {
    delete tmp2[tmp4];
  }
  if (fileType) {
    readResult2 = importDefault;
    if (flag) {
      if (!readResult2.file) {
        readResult2 = importDefault;
        importDefault.file = {};
      }
      readResult2 = importDefault;
      importDefault.file.FileType = fileType;
      flag15 = true;
    } else {
      readResult2.FileType = fileType;
      flag15 = true;
    }
  }
  if (flag15) {
    if (flag2) {
      readResult2 = globalThis;
      readResult2 = Promise.all(items1).then(() => closure_1);
      const allPromises = Promise.all(items1);
    } else {
      readResult2 = importDefault;
    }
    return readResult2;
  } else {
    readResult2 = new.target;
    readResult2 = new.target;
    readResult2 = new tmp6(tmp7[0]).MetadataMissingError();
    throw readResult2;
  }
  const tmp6Result17 = tmp6(tmp7[20]);
}

export default { load, loadView, errors: require("error") };
export const errors = require("error");
export { load };
export { loadView };