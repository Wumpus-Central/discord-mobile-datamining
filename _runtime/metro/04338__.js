// _runtime/metro/04338__.js
import callDispose from "../04318_callDispose.js";
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
  _slicedToArray = undefined;
  let str2;
  let uri;
  let riveFile;
  [tmp2, c1] = _slicedToArray(str2({ riveFile: "HermesInternal", isLoading: null, error: "header" }), 2);
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
          obj = { image: tmp2 };
          let tmp10 = obj;
        } else {
          const source = tmp2.source;
          if (typeof source === "number") {
            const assetSource = Image.resolveAssetSource(source);
            if (assetSource) {
              if (assetSource.uri) {
                obj = { sourceAssetId: assetSource.uri };
                tmp10 = obj;
              }
            }
            const _Error2 = Error;
            const error = new Error("Invalid asset source provided.");
            throw error;
          } else {
            uri = source.uri;
            if (typeof source === "object") {
              if (uri) {
                const obj1 = { sourceUrl: uri };
                tmp10 = obj1;
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
    closure_0 = closure_2(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          let tmp17Result = c4;
          if (0 !== c4) {
            if (1 === tmp17Result) {
              c3 = 0;
              closure_128_0 = closure_2;
              const _console = console;
              console.error(closure_128_0);
              const _Error = Error;
              if (closure_128_0 instanceof Error) {
                let error = closure_128_0;
              } else {
                const _Error2 = Error;
                error = new Error("Failed to load Rive file");
              }
              obj = { riveFile: null, isLoading: false, error };
              tmp17Result = _undefined(obj);
              c5 = 3;
            } else {
              if (2 === tmp17Result) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj1 = { value, done: true };
                  return obj1;
                }
              } else {
                if (3 === tmp17Result) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  }
                } else if (4 === tmp17Result) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    riveFile = value;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  riveFile = value;
                }
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              riveFile = value;
            }
            const obj4 = { riveFile, isLoading: false, error: null };
            _undefined(obj4);
            c3 = 0;
          }
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp3;
            riveFile = tmp17Result;
            c3 = 1;
            if ("uri" === str2) {
              const obj6 = { uri };
              obj5 = obj6;
            } else {
              obj5 = uri;
            }
            if (null == obj5) {
              const obj7 = { riveFile: null, isLoading: false, error: null };
              const _Error3 = Error;
              const error1 = new Error("No Rive file input provided.");
              obj7.error = error1;
              _undefined(obj7);
              c3 = 0;
              c5 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else if (typeof obj5 === "string") {
              if (!obj5.startsWith("http://")) {
                if (!obj5.startsWith("https://")) {
                  const RiveFileFactory3 = obj(tmp3[4]).RiveFileFactory;
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: RiveFileFactory3.fromResource(obj5, ref.current), done: false };
                  return obj9;
                }
              }
              const RiveFileFactory4 = obj(tmp3[4]).RiveFileFactory;
              c4 = 3;
              c5 = 1;
              const obj10 = { value: RiveFileFactory4.fromURL(obj5, ref.current), done: false };
              return obj10;
            } else {
              if (typeof obj5 !== "number") {
                if (!("uri" in obj5)) {
                  const _ArrayBuffer = ArrayBuffer;
                  if (obj5 instanceof ArrayBuffer) {
                    const RiveFileFactory = obj(tmp3[4]).RiveFileFactory;
                    c4 = 5;
                    c5 = 1;
                    const obj11 = { value: RiveFileFactory.fromBytes(obj5, ref.current), done: false };
                    return obj11;
                  }
                }
              }
              const RiveFileFactory2 = obj(tmp3[4]).RiveFileFactory;
              c4 = 4;
              c5 = 1;
              const obj12 = { value: RiveFileFactory2.fromSource(obj5, ref.current), done: false };
              return obj12;
            }
          }
        } catch (tmp46) {
          closure_2 = tmp46;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp46;
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
  obj = { riveFile: tmp2.riveFile, isLoading: tmp2.isLoading, error: tmp2.error };
  return obj;
};
