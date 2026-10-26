// _runtime/metro/05093__.js
import callDispose from "../05073_callDispose.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: closure_7 } = noop);
const Image = fn(17).Image;

export const useRiveFile = function useRiveFile(src, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  c1 = undefined;
  let str2;
  let uri;
  let riveFile;
  [tmp2, c1] = str2({ riveFile: "IconComponent", isLoading: null, error: "primary" });
  const items = [obj.referencedAssets];
  let tmp3 = riveFile(() => {
    const referencedAssets = obj.referencedAssets;
    obj = {};
    let tmp;
    if (undefined !== referencedAssets) {
      const _Object = Object;
      const entries = Object.entries(referencedAssets);
      const item = entries.forEach((item) => {
        [tmp, tmp2] = item;
        let tmp4 = null !== tmp2;
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
          const obj2 = { image: tmp2 };
          let tmp10 = obj2;
        } else {
          const source = tmp2.source;
          if (typeof source === "number") {
            const assetSource = Image.resolveAssetSource(source);
            if (assetSource) {
              if (assetSource.uri) {
                const obj3 = { sourceAssetId: assetSource.uri };
                tmp10 = obj3;
              }
            }
            const _Error2 = Error;
            const error = new Error("Invalid asset source provided.");
            throw error;
          } else {
            uri = source.uri;
            if (typeof source === "object") {
              if (uri) {
                const obj4 = { sourceUrl: uri };
                tmp10 = obj4;
              }
            }
            ({ fileName, path } = source);
            if (typeof source === "object") {
              if (fileName) {
                obj = { sourceAsset: fileName };
                tmp10 = obj;
                if (path) {
                  obj.path = path;
                  tmp10 = obj;
                }
              }
            }
            const _Error = Error;
            const error1 = new Error("Invalid source provided.");
            throw error1;
          }
        }
        obj[tmp] = tmp10;
      });
      tmp = obj;
    }
    return tmp;
  }, items);
  closure_2 = tmp3;
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
    c1 = false;
    closure_0 = closure_2(function* (arg0) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          c5 = 2;
          let tmp17Result = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              riveFile = tmp17Result;
              c3 = 1;
              if ("uri" === str2) {
                const obj4 = { uri };
                let obj6 = obj4;
              } else {
                obj6 = uri;
              }
              if (null == obj6) {
                const obj5 = { riveFile: null, isLoading: false, error: null };
                const _Error3 = Error;
                const error = new Error("No Rive file input provided.");
                obj5.error = error;
                tmp3(obj5);
                c3 = 0;
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else if (typeof obj6 === "string") {
                if (!obj6.startsWith("http://")) {
                  if (!obj6.startsWith("https://")) {
                    const RiveFileFactory3 = obj(tmp3[4]).RiveFileFactory;
                    c4 = 2;
                    c5 = 1;
                    const obj8 = { value: RiveFileFactory3.fromResource(obj6, ref.current), done: false };
                    return obj8;
                  }
                }
                const RiveFileFactory4 = obj(tmp3[4]).RiveFileFactory;
                c4 = 3;
                c5 = 1;
                const obj10 = { value: RiveFileFactory4.fromURL(obj6, ref.current), done: false };
                return obj10;
              } else {
                if (typeof obj6 !== "number") {
                  if (!("uri" in obj6)) {
                    const _ArrayBuffer = ArrayBuffer;
                    if (obj6 instanceof ArrayBuffer) {
                      const RiveFileFactory = obj(tmp3[4]).RiveFileFactory;
                      c4 = 5;
                      c5 = 1;
                      const obj11 = { value: RiveFileFactory.fromBytes(obj6, ref.current), done: false };
                      return obj11;
                    } else if (closure_1) {
                      if (riveFile) {
                        obj(tmp3[5]).callDispose(riveFile);
                        const obj9 = obj(tmp3[5]);
                      }
                      c3 = 0;
                      c5 = 3;
                      const obj12 = { value: undefined, done: true };
                      return obj12;
                    } else {
                      const obj13 = { riveFile, isLoading: false, error: null };
                      tmp17Result = tmp3(obj13);
                      c3 = 0;
                    }
                  }
                }
                const RiveFileFactory2 = obj(tmp3[4]).RiveFileFactory;
                c4 = 4;
                c5 = 1;
                const obj14 = { value: RiveFileFactory2.fromSource(obj6, ref.current), done: false };
                return obj14;
              }
            }
          } else if (1 === tmp17Result) {
            c3 = 0;
            closure_128_0 = closure_2;
            const _console = console;
            console.error(closure_128_0);
            const _Error = Error;
            if (closure_128_0 instanceof Error) {
              let error1 = closure_128_0;
            } else {
              const _Error2 = Error;
              error1 = new Error("Failed to load Rive file");
            }
            const obj15 = { riveFile: null, isLoading: false, error: error1 };
            tmp17Result = tmp3(obj15);
          } else {
            if (2 === tmp17Result) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj16 = { value, done: true };
                return obj16;
              }
            } else if (3 === tmp17Result) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj17 = { value, done: true };
                return obj17;
              }
            } else if (4 === tmp17Result) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj18 = { value, done: true };
                return obj18;
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
        } catch (tmp51) {
          closure_2 = tmp51;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp51;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    (function loadRiveFile() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c1 = true;
      if (closure_0) {
        callDispose.callDispose(closure_0);
      }
    };
  }, items1);
  riveFile = tmp2.riveFile;
  const items2 = [tmp3, riveFile];
  uri(() => {
    let tmp3 = ref.current !== current;
    if (tmp3) {
      tmp3 = riveFile;
    }
    if (tmp3) {
      tmp3 = current;
    }
    if (tmp3) {
      obj = { data: current };
      const result = riveFile.updateReferencedAssets(obj);
      ref.current = current;
    }
  }, items2);
  return { riveFile: tmp2.riveFile, isLoading: tmp2.isLoading, error: tmp2.error };
};
