// _runtime/07343_errors.js
import _modDef7344 from "metro/07344__.js";
import _mod7345 from "metro/07345__.js";

function load(result) {
  let nextPromise1;
  function isNodeBuffer(result) {
    try {
      const _Buffer = Buffer;
      return Buffer.isBuffer(result);
    } catch (err) {
      return false;
    }
  }
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (typeof result === "string") {
    let resolveResult;
    obj.async = true;
    let obj2 = /^\w+:\/\//;
    if (obj2.test(result)) {
      let nextPromise;
      const _fetch = fetch;
      if (typeof fetch !== "undefined") {
        if (obj === undefined) {
          obj = {};
        }
        const _Number = Number;
        let isIntegerResult = Number.isInteger(length);
        if (isIntegerResult) {
          isIntegerResult = length >= 0;
        }
        const obj4 = { method: "GET" };
        if (isIntegerResult) {
          const str = "bytes=0-";
          const obj6 = { range: `bytes=0-${obj.length - 1}` };
          obj4.headers = obj6;
        }
        const _fetch2 = fetch;
        const response = fetch(result, obj4);
        nextPromise = response.then((arrayBuffer) => arrayBuffer.arrayBuffer());
      } else {
        let closure_0 = result;
        let obj7 = obj;
        if (obj === undefined) {
          obj7 = {};
        }
        let length2 = obj7.length;
        const self7 = this;
        const self8 = this;
        nextPromise = new Promise((arg0, arg1) => {
          let get;
          closure_0 = arg0;
          let closure_1 = arg1;
          let isIntegerResult = Number.isInteger(length2);
          if (isIntegerResult) {
            isIntegerResult = length2 >= 0;
          }
          obj = {};
          if (isIntegerResult) {
            const obj2 = { range: `bytes=0-${tmp - 1}` };
            obj.headers = obj2;
          }
          const obj3 = /^https:\/\//;
          const tmp3 = closure_0;
          if (obj3.test(closure_0)) {
            get = __non_webpack_require__("https").get;
          } else {
            get = __non_webpack_require__("http").get;
          }
          const value = get(tmp3, obj, (statusCode) => {
            if (statusCode.statusCode >= 200) {
              if (statusCode.statusCode <= 299) {
                closure_0 = [];
                statusCode.on("data", (arg0) => closure_0.push(Buffer.from(arg0)));
                statusCode.on("error", (arg0) => closure_1_1(arg0));
                statusCode.on("end", () => closure_0(Buffer.concat(closure_0)));
              }
            }
            closure_1("Could not fetch file: " + statusCode.statusCode + " " + statusCode.statusMessage);
            statusCode.resume();
          });
          value.on("error", (arg0) => closure_1(arg0));
        });
      }
      resolveResult = nextPromise;
    } else {
      let obj3 = /^data:[^;,]*(;base64)?,/;
      if (obj3.test(result)) {
        let tmp8 = globalThis;
        const obj5 = obj(7345);
        resolveResult = resolve(obj5.dataUriToBuffer(result));
      } else {
        closure_0 = result;
        let obj8 = obj;
        if (obj === undefined) {
          obj8 = {};
        }
        length2 = obj8.length;
        const self5 = this;
        const self6 = this;
        resolveResult = new Promise((arg0, arg1) => {
          function requireNodeFs() {
            try {
              return globalThis.__non_webpack_require__("fs");
            } catch (err) {}
          }
          closure_0 = arg0;
          let closure_1 = arg1;
          obj = requireNodeFs();
          obj.open(closure_0, (arg0, arg1) => {
            closure_0 = arg1;
            if (arg0) {
              closure_1(arg0);
            } else {
              obj.stat(closure_0, (arg0, size) => {
                let tmp = arg0;
                if (tmp) {
                  closure_1_1(arg0);
                } else {
                  const bound = Math.min(size.size, undefined !== closure_1 ? closure_1 : size.size);
                  const _Buffer = Buffer;
                  const allocResult = Buffer.alloc(bound);
                  closure_0 = allocResult;
                  obj = { buffer: allocResult, length: bound };
                  closure_1_2.read(closure_0, obj, (arg0) => {
                    let tmp = arg0;
                    if (tmp) {
                      closure_1(arg0);
                    } else {
                      obj.close(closure_0, (arg0) => {
                        const tmp = arg0;
                        if (tmp) {
                          const _console = console;
                          const _HermesInternal = HermesInternal;
                          console.warn("Could not close file " + closure_0 + ":", arg0);
                        }
                        closure_0(closure_1_0);
                      });
                    }
                  });
                }
              });
            }
          });
        });
      }
    }
    nextPromise1 = resolveResult.then(function (result) {
      let buffer = result;
      if (isNodeBuffer(result)) {
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        const uint8Array = new Uint8Array(result);
        buffer = uint8Array.buffer;
      }
      return loadView(
        (function getDataView(buffer) {
          try {
            const _DataView = DataView;
            const self = this;
            const self2 = this;
            const dataView = new DataView(buffer);
            return dataView;
          } catch (err) {
            const self3 = this;
            const self4 = this;
            const tmp8 = new closure_1_1(closure_1_2[2])(buffer);
            return tmp8;
          }
        })(buffer),
        obj,
      );
    });
  } else {
    const _File = File;
    let tmp15 = typeof File !== "undefined";
    if (typeof File !== "undefined") {
      const _File2 = File;
      tmp15 = result instanceof File;
    }
    if (tmp15) {
      obj.async = true;
      closure_0 = result;
      let self3 = this;
      let self4 = this;
      const promise = new Promise((data, arg1) => {
        closure_0 = data;
        let closure_1 = arg1;
        const fileReader = new FileReader();
        fileReader.onload = (target) => closure_0(target.target.result);
        fileReader.onerror = () => closure_1(fileReader.error);
        const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
      });
      nextPromise1 = promise.then(function (result) {
        let buffer = result;
        if (isNodeBuffer(result)) {
          const _Uint8Array = Uint8Array;
          let self = this;
          let self2 = this;
          const uint8Array = new Uint8Array(result);
          buffer = uint8Array.buffer;
        }
        return loadView(
          (function getDataView(buffer) {
            try {
              const _DataView = DataView;
              const self = this;
              const self2 = this;
              const dataView = new DataView(buffer);
              return dataView;
            } catch (err) {
              const self3 = this;
              const self4 = this;
              const tmp8 = new closure_1_1(closure_1_2[2])(buffer);
              return tmp8;
            }
          })(buffer),
          obj,
        );
      });
    } else {
      let buffer = result;
      if (isNodeBuffer(result)) {
        let _Uint8Array = Uint8Array;
        let self = this;
        let self2 = this;
        let tmp = result;
        let uint8Array = new Uint8Array(result);
        let tmp3 = uint8Array;
        buffer = uint8Array.buffer;
      }
      nextPromise1 = loadView(
        (function getDataView(buffer) {
          try {
            const _DataView = DataView;
            const self = this;
            const self2 = this;
            const dataView = new DataView(buffer);
            return dataView;
          } catch (err) {
            const self3 = this;
            const self4 = this;
            const tmp8 = new closure_1_1(closure_1_2[2])(buffer);
            return tmp8;
          }
        })(buffer),
        obj,
      );
    }
  }
  return nextPromise1;
}
function loadView(byteLength, arg1) {
  let byteOrder;
  let fileDataOffset;
  let fileType;
  let flag9;
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
  function addGpsGroup(objectAssignResult6) {
    if (objectAssignResult6.exif) {
      if (objectAssignResult6.exif.GPSLatitude) {
        if (objectAssignResult6.exif.GPSLatitudeRef) {
          try {
            const gps1 = objectAssignResult6.gps || {};
            objectAssignResult6.gps = gps1;
            const gps = objectAssignResult6.gps;
            const obj2 = flag(addPngTextTags[22]);
            gps.Latitude = obj2.getCalculatedGpsValue(objectAssignResult6.exif.GPSLatitude.value);
            const value = objectAssignResult6.exif.GPSLatitudeRef.value;
            if ("S" === value.join("")) {
              objectAssignResult6.gps.Latitude = -objectAssignResult6.gps.Latitude;
            }
          } catch (err) {}
        }
      }
      if (objectAssignResult6.exif.GPSLongitude) {
        if (objectAssignResult6.exif.GPSLongitudeRef) {
          try {
            const gps3 = objectAssignResult6.gps || {};
            objectAssignResult6.gps = gps3;
            const gps2 = objectAssignResult6.gps;
            const obj4 = flag(addPngTextTags[22]);
            gps2.Longitude = obj4.getCalculatedGpsValue(objectAssignResult6.exif.GPSLongitude.value);
            const value2 = objectAssignResult6.exif.GPSLongitudeRef.value;
            if ("W" === value2.join("")) {
              objectAssignResult6.gps.Longitude = -objectAssignResult6.gps.Longitude;
            }
          } catch (err) {}
        }
      }
      if (objectAssignResult6.exif.GPSAltitude) {
        if (objectAssignResult6.exif.GPSAltitudeRef) {
          try {
            const gps4 = objectAssignResult6.gps || {};
            objectAssignResult6.gps = gps4;
            objectAssignResult6.gps.Altitude =
              objectAssignResult6.exif.GPSAltitude.value[0] / objectAssignResult6.exif.GPSAltitude.value[1];
            if (1 === objectAssignResult6.exif.GPSAltitudeRef.value) {
              objectAssignResult6.gps.Altitude = -objectAssignResult6.gps.Altitude;
            }
          } catch (err) {}
        }
      }
    }
  }
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { expanded: false, async: false, includeUnknown: false, domParser: "code" };
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
        let tmp18 = nextResult;
        let _HermesInternal = HermesInternal;
        let combined = "__" + nextResult;
        let tmp20 = combined;
        if (readTags[combined]) {
          let objectAssignResult;
          let tmp21 = objectAssignResult6;
          if (objectAssignResult6[tmp18]) {
            let obj2 = _mod7345;
            objectAssignResult = obj2.objectAssign({}, objectAssignResult6.exif, readTags[tmp20]);
          } else {
            objectAssignResult = readTags[tmp20];
          }
          tmp21[tmp18] = objectAssignResult;
          delete tmp[tmp19];
        }
        continue;
      }
      let objectAssignResult4 = readTags;
      const tmp29 = objectAssignResult6;
      if (objectAssignResult6.png) {
        const obj3 = _mod7345;
        objectAssignResult4 = obj3.objectAssign({}, objectAssignResult6.png, readTags);
      }
      tmp29.png = objectAssignResult4;
      let objectAssignResult5 = readTags;
      const tmp34 = objectAssignResult6;
      if (objectAssignResult6.pngText) {
        const obj4 = _mod7345;
        objectAssignResult5 = obj4.objectAssign({}, objectAssignResult6.png, readTags);
      }
      tmp34.pngText = objectAssignResult5;
    } else {
      const obj = _mod7345;
      const tmp6 = readTags.__exif || {};
      const tmp7 = readTags.__iptc || {};
      objectAssignResult6 = obj.objectAssign({}, objectAssignResult6, tmp6, tmp7, readTags);
      delete tmp13["__exif"];
      delete objectAssignResult6["__iptc"];
    }
  }
  let objectAssignResult6 = {};
  const tmp = objectAssignResult6;
  const tmp2 = addPngTextTags;
  let obj2 = objectAssignResult6(addPngTextTags[3]);
  ({
    fileType,
    fileDataOffset,
    jfifDataOffset,
    tiffHeaderOffset,
    iptcDataOffset,
    xmpChunks,
    iccChunks,
    mpfDataOffset,
    pngHeaderOffset,
    pngTextChunks,
    pngChunkOffsets,
    vp8xChunkOffset,
    gifHeaderOffset,
  } = obj2.parseAppMarkers(byteLength, flag2));
  let flag4 = false;
  obj2.parseAppMarkers(byteLength, flag2);
  if (objectAssignResult6(addPngTextTags[4]).USE_JPEG) {
    flag4 = false;
    if (tmp(tmp2[4]).USE_FILE) {
      flag4 = false;
      if (undefined !== fileDataOffset) {
        const tmpResult = tmp(tmp2[5]);
        const readResult = tmpResult.read(byteLength, fileDataOffset);
        if (flag) {
          let tmp7 = objectAssignResult6;
          objectAssignResult6.file = readResult;
          flag4 = true;
        } else {
          let obj4 = flag(tmp2[1]);
          let tmp6 = objectAssignResult6;
          objectAssignResult6 = obj4.objectAssign({}, objectAssignResult6, readResult);
          flag4 = true;
        }
      }
    }
  }
  let flag5 = flag4;
  if (tmp(tmp2[4]).USE_JPEG) {
    flag5 = flag4;
    if (tmp(tmp2[4]).USE_JFIF) {
      flag5 = flag4;
      if (undefined !== jfifDataOffset) {
        const tmpResult20 = tmp(tmp2[6]);
        const readResult1 = tmpResult20.read(byteLength, jfifDataOffset);
        if (flag) {
          objectAssignResult6.jfif = readResult1;
          flag5 = true;
        } else {
          const obj6 = flag(tmp2[1]);
          objectAssignResult6 = obj6.objectAssign({}, objectAssignResult6, readResult1);
          flag5 = true;
        }
      }
    }
  }
  let flag6 = flag5;
  if (tmp(tmp2[4]).USE_EXIF) {
    flag6 = flag5;
    if (undefined !== tiffHeaderOffset) {
      const tmpResult21 = tmp(tmp2[7]);
      ({ tags, byteOrder } = tmpResult21.read(byteLength, tiffHeaderOffset, flag3));
      tmpResult21.read(byteLength, tiffHeaderOffset, flag3);
      if (tags.Thumbnail) {
        objectAssignResult6.Thumbnail = tags.Thumbnail;
        delete tags["Thumbnail"];
      }
      if (flag) {
        objectAssignResult6.exif = tags;
        addGpsGroup(objectAssignResult6);
      } else {
        const tmp13 = flag;
        const obj7 = flag(tmp2[1]);
        objectAssignResult6 = obj7.objectAssign({}, objectAssignResult6, tags);
      }
      if (tmp(tmp2[4]).USE_TIFF) {
        if (tmp(tmp2[4]).USE_IPTC) {
          if (tags["IPTC-NAA"]) {
            if (undefined === iptcDataOffset) {
              const tmpResult22 = tmp(tmp2[8]);
              const readResult3 = tmpResult22.read(tags["IPTC-NAA"].value, 0, flag3);
              if (flag) {
                let tmp21 = objectAssignResult6;
                objectAssignResult6.iptc = readResult3;
              } else {
                const tmp19 = flag;
                let tmp20 = objectAssignResult6;
                const obj9 = flag(tmp2[1]);
                objectAssignResult6 = obj9.objectAssign({}, objectAssignResult6, readResult3);
              }
            }
          }
        }
      }
      if (tmp(tmp2[4]).USE_TIFF) {
        if (tmp(tmp2[4]).USE_XMP) {
          if (tags.ApplicationNotes) {
            let tmp22 = globalThis;
            const _Array = Array;
            const isArray = Array.isArray(xmpChunks) && xmpChunks.length > 0;
            if (!isArray) {
              const read = tmp(tmp2[9]).read;
              tmp(tmp2[9]);
              const obj10 = flag(tmp2[1]);
              const readResult4 = read(
                obj10.getStringValueFromArray(tags.ApplicationNotes.value),
                undefined,
                domParser,
              );
              if (flag) {
                let tmp28 = objectAssignResult6;
                objectAssignResult6.xmp = readResult4;
              } else {
                delete tmp26["_raw"];
                let tmp27 = objectAssignResult6;
                const tmp25Result = flag(tmp2[1]);
                objectAssignResult6 = tmp25Result.objectAssign({}, objectAssignResult6, readResult4);
              }
            }
          }
        }
      }
      if (tmp(tmp2[4]).USE_PHOTOSHOP) {
        if (tags.ImageSourceData) {
          if (tags.PhotoshopSettings) {
            const tmpResult24 = tmp(tmp2[10]);
            const readResult5 = tmpResult24.read(tags.PhotoshopSettings.value, flag3);
            if (flag) {
              objectAssignResult6.photoshop = readResult5;
            } else {
              const obj13 = flag(tmp2[1]);
              objectAssignResult6 = obj13.objectAssign({}, objectAssignResult6, readResult5);
            }
          }
        }
      }
      if (tmp(tmp2[4]).USE_TIFF) {
        if (tmp(tmp2[4]).USE_ICC) {
          if (tags.ICC_Profile) {
            const _Array2 = Array;
            const isArray1 = Array.isArray(iccChunks) && iccChunks.length > 0;
            if (!isArray1) {
              let obj3 = { offset: 0, length: tags.ICC_Profile.value.length, chunkNumber: 1, chunksTotal: 1 };
              let items = [obj3];
              const tmpResult25 = tmp(tmp2[11]);
              const readResult6 = tmpResult25.read(tags.ICC_Profile.value, items);
              if (flag) {
                objectAssignResult6.icc = readResult6;
              } else {
                const obj16 = flag(tmp2[1]);
                objectAssignResult6 = obj16.objectAssign({}, objectAssignResult6, readResult6);
              }
            }
          }
        }
      }
      if (tmp(tmp2[4]).USE_MAKER_NOTES) {
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
            const tmpResult26 = tmp(tmp2[12]);
            const readResult7 = tmpResult26.read(
              byteLength,
              tiffHeaderOffset,
              tags.MakerNote.__offset,
              byteOrder,
              flag3,
            );
            if (flag) {
              objectAssignResult6.makerNotes = readResult7;
            } else {
              const obj21 = flag(tmp2[1]);
              objectAssignResult6 = obj21.objectAssign({}, objectAssignResult6, readResult7);
            }
          } else {
            let __offset2 = tags.MakerNote.value.length > "PENTAX ".length;
            if (__offset2) {
              let value = tags.MakerNote.value;
              const obj17 = flag(tmp2[1]);
              __offset2 = obj17.getStringValueFromArray(value.slice(0, "PENTAX ".length)) === "PENTAX ";
            }
            if (__offset2) {
              __offset2 = tags.MakerNote.__offset;
            }
            if (__offset2) {
              const tmpResult27 = tmp(tmp2[13]);
              const readResult8 = tmpResult27.read(byteLength, tiffHeaderOffset, tags.MakerNote.__offset, flag3);
              if (flag) {
                objectAssignResult6.makerNotes = readResult8;
              } else {
                const obj19 = flag(tmp2[1]);
                objectAssignResult6 = obj19.objectAssign({}, objectAssignResult6, readResult8);
              }
            }
          }
        }
      }
      flag6 = true;
      if (tags.MakerNote) {
        delete tags.MakerNote["__offset"];
        flag6 = true;
      }
    }
  }
  let flag7 = flag6;
  if (tmp(tmp2[4]).USE_JPEG) {
    flag7 = flag6;
    if (tmp(tmp2[4]).USE_IPTC) {
      flag7 = flag6;
      if (undefined !== iptcDataOffset) {
        const tmpResult28 = tmp(tmp2[8]);
        const readResult9 = tmpResult28.read(byteLength, iptcDataOffset, flag3);
        if (flag) {
          objectAssignResult6.iptc = readResult9;
          flag7 = true;
        } else {
          const obj23 = flag(tmp2[1]);
          objectAssignResult6 = obj23.objectAssign({}, objectAssignResult6, readResult9);
          flag7 = true;
        }
      }
    }
  }
  let flag8 = flag7;
  if (tmp(tmp2[4]).USE_XMP) {
    const _Array4 = Array;
    const isArray2 = Array.isArray(xmpChunks) && xmpChunks.length > 0;
    flag8 = flag7;
    if (isArray2) {
      const tmpResult29 = tmp(tmp2[9]);
      const readResult10 = tmpResult29.read(byteLength, xmpChunks, domParser);
      if (flag) {
        objectAssignResult6.xmp = readResult10;
        flag8 = true;
      } else {
        delete tmp64["_raw"];
        const obj25 = flag(tmp2[1]);
        objectAssignResult6 = obj25.objectAssign({}, objectAssignResult6, readResult10);
        flag8 = true;
      }
    }
  }
  const items1 = [];
  if (tmp(tmp2[4]).USE_JPEG) {
    flag9 = flag8;
    if (tmp(tmp2[4]).USE_ICC) {
      const _Array5 = Array;
      const isArray3 = Array.isArray(iccChunks) && iccChunks.length > 0;
      flag9 = flag8;
      if (isArray3) {
        const tmpResult30 = tmp(tmp2[11]);
        const readResult11 = tmpResult30.read(byteLength, iccChunks, flag2);
        if (readResult11 instanceof Promise) {
          const arr = items1.push(
            readResult11.then(function addIccTags(icc) {
              if (flag) {
                objectAssignResult6.icc = icc;
              } else {
                const obj = _mod7345;
                objectAssignResult6 = obj.objectAssign({}, objectAssignResult6, icc);
              }
            }),
          );
          flag9 = true;
        } else if (flag) {
          objectAssignResult6.icc = readResult11;
          flag9 = true;
        } else {
          const obj27 = flag(tmp2[1]);
          objectAssignResult6 = obj27.objectAssign({}, objectAssignResult6, readResult11);
          flag9 = true;
        }
      }
    }
  } else {
    flag9 = flag8;
  }
  let flag10 = flag9;
  if (tmp(tmp2[4]).USE_MPF) {
    flag10 = flag9;
    if (undefined !== mpfDataOffset) {
      const tmpResult31 = tmp(tmp2[14]);
      const readResult12 = tmpResult31.read(byteLength, mpfDataOffset, flag3);
      if (flag) {
        objectAssignResult6.mpf = readResult12;
        flag10 = true;
      } else {
        const obj29 = flag(tmp2[1]);
        objectAssignResult6 = obj29.objectAssign({}, objectAssignResult6, readResult12);
        flag10 = true;
      }
    }
  }
  let flag11 = flag10;
  if (tmp(tmp2[4]).USE_PNG) {
    flag11 = flag10;
    if (tmp(tmp2[4]).USE_PNG_FILE) {
      flag11 = flag10;
      if (undefined !== pngHeaderOffset) {
        const tmpResult32 = tmp(tmp2[15]);
        const readResult13 = tmpResult32.read(byteLength, pngHeaderOffset);
        if (flag) {
          let objectAssignResult = readResult13;
          const tmp80 = objectAssignResult6;
          if (objectAssignResult6.png) {
            const obj31 = flag(tmp2[1]);
            objectAssignResult = obj31.objectAssign({}, objectAssignResult6.png, readResult13);
          }
          tmp80.png = objectAssignResult;
          objectAssignResult6.pngFile = readResult13;
          flag11 = true;
        } else {
          const obj30 = flag(tmp2[1]);
          objectAssignResult6 = obj30.objectAssign({}, objectAssignResult6, readResult13);
          flag11 = true;
        }
      }
    }
  }
  let flag12 = flag11;
  if (tmp(tmp2[4]).USE_PNG) {
    flag12 = flag11;
    if (undefined !== pngTextChunks) {
      const tmpResult33 = tmp(tmp2[16]);
      const readResult14 = tmpResult33.read(byteLength, pngTextChunks, flag2, flag3);
      addPngTextTags(readResult14.readTags);
      flag12 = true;
      if (readResult14.readTagsPromise) {
        items1.push(readResult14.readTagsPromise.then((arr) => arr.forEach(addPngTextTags)));
        flag12 = true;
      }
    }
  }
  let flag13 = flag12;
  if (tmp(tmp2[4]).USE_PNG) {
    flag13 = flag12;
    if (undefined !== pngChunkOffsets) {
      const tmpResult34 = tmp(tmp2[17]);
      const readResult15 = tmpResult34.read(byteLength, pngChunkOffsets);
      if (flag) {
        let objectAssignResult4 = readResult15;
        const tmp95 = objectAssignResult6;
        if (objectAssignResult6.png) {
          const obj34 = flag(tmp2[1]);
          objectAssignResult4 = obj34.objectAssign({}, objectAssignResult6.png, readResult15);
        }
        tmp95.png = objectAssignResult4;
        flag13 = true;
      } else {
        const obj33 = flag(tmp2[1]);
        objectAssignResult6 = obj33.objectAssign({}, objectAssignResult6, readResult15);
        flag13 = true;
      }
    }
  }
  let flag14 = flag13;
  if (tmp(tmp2[4]).USE_WEBP) {
    flag14 = flag13;
    if (undefined !== vp8xChunkOffset) {
      const tmpResult35 = tmp(tmp2[18]);
      const readResult16 = tmpResult35.read(byteLength, vp8xChunkOffset);
      if (flag) {
        let objectAssignResult5 = readResult16;
        const tmp101 = objectAssignResult6;
        if (objectAssignResult6.riff) {
          const obj36 = flag(tmp2[1]);
          objectAssignResult5 = obj36.objectAssign({}, objectAssignResult6.riff, readResult16);
        }
        tmp101.riff = objectAssignResult5;
        flag14 = true;
      } else {
        const obj35 = flag(tmp2[1]);
        objectAssignResult6 = obj35.objectAssign({}, objectAssignResult6, readResult16);
        flag14 = true;
      }
    }
  }
  let flag15 = flag14;
  if (tmp(tmp2[4]).USE_GIF) {
    flag15 = flag14;
    if (undefined !== gifHeaderOffset) {
      const tmpResult36 = tmp(tmp2[19]);
      const readResult17 = tmpResult36.read(byteLength, gifHeaderOffset);
      if (flag) {
        objectAssignResult6 = readResult17;
        const tmp107 = objectAssignResult6;
        if (objectAssignResult6.gif) {
          const obj38 = flag(tmp2[1]);
          objectAssignResult6 = obj38.objectAssign({}, objectAssignResult6.gif, readResult17);
        }
        tmp107.gif = objectAssignResult6;
        flag15 = true;
      } else {
        const obj37 = flag(tmp2[1]);
        objectAssignResult6 = obj37.objectAssign({}, objectAssignResult6, readResult17);
        flag15 = true;
      }
    }
  }
  const tmpResult37 = tmp(tmp2[20]);
  const value3 = tmpResult37.get(objectAssignResult6, flag);
  if (value3) {
    if (flag) {
      objectAssignResult6.composite = value3;
    } else {
      const obj40 = flag(tmp2[1]);
      objectAssignResult6 = obj40.objectAssign({}, objectAssignResult6, value3);
    }
  }
  let value4 = (tmp(tmp2[4]).USE_JPEG || tmp(tmp2[4]).USE_WEBP) && tmp(tmp2[4]).USE_EXIF && tmp(tmp2[4]).USE_THUMBNAIL;
  if (value4) {
    const tmpResult38 = tmp(tmp2[21]);
    value4 = tmpResult38.get(byteLength, objectAssignResult6.Thumbnail, tiffHeaderOffset);
  }
  if (value4) {
    objectAssignResult6.Thumbnail = value4;
    flag15 = true;
  } else {
    delete objectAssignResult6["Thumbnail"];
  }
  if (fileType) {
    if (flag) {
      if (!objectAssignResult6.file) {
        objectAssignResult6.file = {};
      }
      objectAssignResult6.file.FileType = fileType;
      flag15 = true;
    } else {
      objectAssignResult6.FileType = fileType;
      flag15 = true;
    }
  }
  if (flag15) {
    let nextPromise;
    if (flag2) {
      const allPromises = Promise.all(items1);
      nextPromise = allPromises.then(() => objectAssignResult6);
    } else {
      nextPromise = objectAssignResult6;
    }
    return nextPromise;
  } else {
    const self = this;
    const self2 = this;
    const metadataMissingError = new tmp(tmp2[0]).MetadataMissingError();
    throw metadataMissingError;
  }
}
let obj = { load, loadView, errors: _modDef7344 };

export default obj;
export const errors = _modDef7344;
export { load };
export { loadView };
