// === Module 4652: ? ===

// Module 4652
import react_native from "react-native" /* 17 */;
import callDispose from "callDispose" /* 4632 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c4, c5;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault } = react);
const Image = react_native.Image;

export const useRiveFile = function useRiveFile(src, arg1) {
  let _undefined;
  let c1;
  let ref;
  let tmp2;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  c1 = undefined;
  _slicedToArray = undefined;
  let str2;
  let uri;
  let riveFile;
  let tmp = _slicedToArray(str2({ riveFile: "IconComponent", isLoading: null, error: "list" }), 2);
  [tmp2, c1] = tmp;
  const items = [obj.referencedAssets];
  let tmp3 = riveFile(() => {
    const referencedAssets = obj.referencedAssets;
    obj = {};
    let tmp;
    if (undefined !== referencedAssets) {
      const tmp2 = globalThis;
      const _Object = Object;
      const entries = Object.entries(referencedAssets);
      const item = entries.forEach(function(item) {
        let fileName;
        let path;
        let tmp;
        let tmp2;
        let tmp8;
        [tmp, tmp2] = item;
        let tmp4 = null !== tmp2;
        const tmp3 = obj;
        if (tmp4) {
          tmp4 = typeof tmp2 === "object";
        }
        if (tmp4) {
          tmp4 = "__type" in tmp2;
        }
        if (tmp4) {
          tmp4 = "HybridObject<RiveImage>" === tmp2.__type;
        }
        if (tmp4) {
          tmp8 = { image: tmp2 };
          const obj2 = { image: tmp2 };
        } else {
          const source = tmp2.source;
          if (typeof source === "number") {
            const assetSource = closure_2_8.resolveAssetSource(source);
            if (assetSource) {
              if (assetSource.uri) {
                tmp8 = { sourceAssetId: assetSource.uri };
                const obj3 = { sourceAssetId: assetSource.uri };
              }
            }
            const _Error2 = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("Invalid asset source provided.");
            throw error;
          } else {
            uri = source.uri;
            if (typeof source === "object") {
              if (uri) {
                tmp8 = { sourceUrl: uri };
                const obj4 = { sourceUrl: uri };
              }
            }
            ({ fileName, path } = source);
            if (typeof source === "object") {
              if (fileName) {
                obj = { sourceAsset: fileName };
                tmp8 = obj;
                if (path) {
                  obj.path = path;
                  tmp8 = obj;
                }
              }
            }
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("Invalid source provided.");
            throw error1;
          }
        }
        tmp3[tmp] = tmp8;
      });
      tmp = obj;
    }
    return tmp;
  }, items);
  let closure_2 = tmp3;
  _slicedToArray = closure_7(tmp3);
  let tmp4 = null != src && typeof src === "object";
  if (tmp4) {
    tmp4 = "uri" in src;
  }
  str2 = "primitive";
  if (tmp4) {
    str2 = "uri";
  }
  let tmp5 = null != src && typeof src === "object";
  if (tmp5) {
    tmp5 = "uri" in src;
  }
  uri = src;
  if (tmp5) {
    uri = src.uri;
  }
  const items1 = [str2, uri];
  uri(() => {
    function loadRiveFile() {
      return closure_0(...arguments);
    }
    let c0 = null;
    let closure_0 = closure_2(function*() {
      let error;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let obj6;
              let closure_1 = tmp;
              riveFile = tmp4;
              c3 = 1;
              if ("uri" === str2) {
                const obj4 = { uri };
                obj6 = obj4;
              } else {
                obj6 = uri;
              }
              if (null == obj6) {
                const obj5 = { riveFile: null, isLoading: false, error };
                const _Error3 = Error;
                const self3 = this;
                const self4 = this;
                error = new Error("No Rive file input provided.");
                closure_2_1(obj5);
                c3 = 0;
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else if (typeof obj6 === "string") {
                if (!obj6.startsWith("http://")) {
                  if (!obj6.startsWith("https://")) {
                    const RiveFileFactory3 = riveFile(_undefined[4]).RiveFileFactory;
                    c4 = 2;
                    c5 = 1;
                    const obj8 = { value: RiveFileFactory3.fromResource(obj6, ref.current), done: false };
                    return obj8;
                  }
                }
                const RiveFileFactory4 = riveFile(_undefined[4]).RiveFileFactory;
                c4 = 3;
                c5 = 1;
                const obj9 = { value: RiveFileFactory4.fromURL(obj6, ref.current), done: false };
                return obj9;
              } else {
                if (typeof obj6 !== "number") {
                  if (!("uri" in obj6)) {
                    const _ArrayBuffer = ArrayBuffer;
                    if (obj6 instanceof ArrayBuffer) {
                      const RiveFileFactory = riveFile(_undefined[4]).RiveFileFactory;
                      c4 = 5;
                      c5 = 1;
                      const obj10 = { value: RiveFileFactory.fromBytes(obj6, ref.current), done: false };
                      return obj10;
                    } else {
                      const obj11 = { riveFile, isLoading: false, error: null };
                      closure_2_1(obj11);
                      c3 = 0;
                    }
                  }
                }
                const RiveFileFactory2 = riveFile(_undefined[4]).RiveFileFactory;
                c4 = 4;
                c5 = 1;
                const obj12 = { value: RiveFileFactory2.fromSource(obj6, ref.current), done: false };
                return obj12;
              }
            }
          } else if (1 === c4) {
            let error1;
            c3 = 0;
            riveFile = closure_2;
            const _console = console;
            console.error(riveFile);
            const _Error = Error;
            if (riveFile instanceof Error) {
              error1 = riveFile;
            } else {
              const _Error2 = Error;
              const self = this;
              const self2 = this;
              error1 = new Error("Failed to load Rive file");
            }
            const obj13 = { riveFile: null, isLoading: false, error: error1 };
            closure_2_1(obj13);
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              }
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj15 = { value, done: true };
                return obj15;
              }
            } else if (4 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                riveFile = value;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              riveFile = value;
            }
            riveFile = value;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp40) {
          closure_2 = tmp40;
          if (0 === c3) {
            c5 = 3;
            throw tmp40;
          } else {
            c4 = 1;
          }
        }
      }
    });
    const tmp = loadRiveFile();
    return () => {
      if (c0) {
        obj = callDispose;
        obj.callDispose(c0);
      }
    };
  }, items1);
  riveFile = tmp2.riveFile;
  const items2 = [tmp3, riveFile];
  uri(() => {
    const tmp3 = ref.current !== current && riveFile && current;
    if (tmp3) {
      obj = { data: current };
      const result = riveFile.updateReferencedAssets(obj);
      ref.current = current;
    }
  }, items2);
  let obj2 = { riveFile: tmp2.riveFile, isLoading: tmp2.isLoading, error: tmp2.error };
  return obj2;
};