// _runtime/04259_useRiveFile.js
import closure_2 from "00005_asyncGeneratorStep.js";
import closure_3 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { Image } from "00017_get_ActivityIndicator.js";

const require = arg1;
({ useState: c4, useEffect: c5, useMemo: closure_6, useRef: error } = noop);

export const useRiveFile = function useRiveFile(src, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  c1 = undefined;
  closure_2 = undefined;
  let callback;
  let str2;
  let uri;
  let riveFile;
  [tmp2, c1] = callback(str2({ riveFile: "HermesInternal", isLoading: null, error: "button" }), 2);
  const items = [obj.referencedAssets];
  let tmp3 = riveFile(() => {
    const referencedAssets = obj.referencedAssets;
    obj = {};
    let tmp;
    if (undefined !== referencedAssets) {
      const _Object = Object;
      const entries = Object.entries(referencedAssets);
      const item = entries.forEach((arg0) => {
        [tmp, tmp2] = arg0;
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
          obj = { image: null };
          obj[0] = tmp2;
          let tmp10 = obj;
        } else {
          const source = tmp2.source;
          if (typeof source === "number") {
            const assetSource = closure_1_8.resolveAssetSource(source);
            if (assetSource) {
              if (assetSource.uri) {
                obj = { sourceAssetId: null };
                obj[0] = assetSource.uri;
                tmp10 = obj;
              }
            }
            const _Error2 = Error;
            error = new Error("Invalid asset source provided.");
            throw error;
          } else {
            uri = source.uri;
            if (typeof source === "object") {
              if (uri) {
                obj1 = { sourceUrl: null };
                obj1[0] = uri;
                tmp10 = obj1;
              }
            }
            ({ fileName, path } = source);
            if (typeof source === "object") {
              if (fileName) {
                obj = { sourceAsset: null };
                obj[0] = fileName;
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
  callback = callback2(tmp3);
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
    closure_0 = null;
    closure_0 = callback(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
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
              closure_0 = closure_2;
              const _console = console;
              console.error(closure_0);
              const _Error = Error;
              if (closure_0 instanceof Error) {
                error = closure_0;
              } else {
                const _Error2 = Error;
                error = new Error("Failed to load Rive file");
              }
              obj = { riveFile: null, isLoading: false, error: null };
              obj[2] = error;
              tmp17Result = closure_2_1(obj);
              c5 = 3;
              const tmp17 = closure_2_1;
            } else {
              if (2 === tmp17Result) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                }
              } else {
                if (3 === tmp17Result) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = arg1;
                    return obj2;
                  }
                } else if (4 === tmp17Result) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj3 = { value: null, done: true };
                    obj3[0] = arg1;
                    return obj3;
                  } else {
                    closure_0 = arg1;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  closure_0 = arg1;
                }
                c3 = 0;
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              closure_0 = arg1;
            }
            const obj4 = { riveFile: null, isLoading: false, error: null };
            obj4[0] = closure_0;
            closure_2_1(obj4);
            c3 = 0;
          }
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp17Result;
            c3 = 1;
            if ("uri" === closure_2_4) {
              const obj6 = { uri: null };
              obj6[0] = closure_2_5;
              obj5 = obj6;
            } else {
              obj5 = closure_2_5;
            }
            if (null == obj5) {
              const obj7 = { riveFile: null, isLoading: false, error: null };
              const _Error3 = Error;
              const error1 = new Error("No Rive file input provided.");
              obj7[2] = error1;
              closure_2_1(obj7);
              c3 = 0;
              c5 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = undefined;
              return obj8;
            } else if (typeof obj5 === "string") {
              if (!obj5.startsWith("http://")) {
                if (!obj5.startsWith("https://")) {
                  const RiveFileFactory3 = obj(4242).RiveFileFactory;
                  c4 = 2;
                  c5 = 1;
                  const obj9 = { value: null, done: false };
                  obj9[0] = RiveFileFactory3.fromResource(obj5, closure_2_3.current);
                  return obj9;
                }
              }
              const RiveFileFactory4 = obj(4242).RiveFileFactory;
              c4 = 3;
              c5 = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = RiveFileFactory4.fromURL(obj5, closure_2_3.current);
              return obj10;
            } else {
              if (typeof obj5 !== "number") {
                if (!("uri" in obj5)) {
                  const _ArrayBuffer = ArrayBuffer;
                  if (obj5 instanceof ArrayBuffer) {
                    const RiveFileFactory = obj(4242).RiveFileFactory;
                    c4 = 5;
                    c5 = 1;
                    const obj11 = { value: null, done: false };
                    obj11[0] = RiveFileFactory.fromBytes(obj5, closure_2_3.current);
                    return obj11;
                  }
                }
              }
              const RiveFileFactory2 = obj(4242).RiveFileFactory;
              c4 = 4;
              c5 = 1;
              const obj12 = { value: null, done: false };
              obj12[0] = RiveFileFactory2.fromSource(obj5, closure_2_3.current);
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
        obj = obj(table[5]);
        obj.callDispose(closure_0);
      }
    };
  }, items1);
  riveFile = tmp2.riveFile;
  const items2 = [tmp3, riveFile];
  uri(() => {
    let tmp3 = ref.current !== closure_2;
    if (tmp3) {
      tmp3 = riveFile;
    }
    if (tmp3) {
      tmp3 = tmp2;
    }
    if (tmp3) {
      obj = { data: null };
      obj[0] = tmp2;
      const result = riveFile.updateReferencedAssets(obj);
      ref.current = tmp2;
    }
  }, items2);
  obj = { riveFile: tmp2.riveFile, isLoading: tmp2.isLoading, error: tmp2.error };
  return obj;
};
