// === Module 12445: useConjureOverlayBackground ===

// Module 12445 (useConjureOverlayBackground)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore" /* 10713 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/useConjureOverlayBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureOverlayBackground(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureOverlayBackgroundStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      let background = null;
      if (null != closure_0) {
        background = ConjureOverlayBackgroundStore.getBackground(tmp);
      }
      return background;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let imageEtag;
  if (stateFromStores != null) {
    imageEtag = stateFromStores.imageEtag;
  }
  if (imageEtag == null) {
    imageEtag = null;
  }
  const tmpResult = require("initialize");
  [tmp10, noop] = imageEtag(noop.useState(null), 2);
  const tmp9 = imageEtag(noop.useState(null), 2);
  ConjureOverlayBackgroundStore = imageEtag(noop.useState(null), 2)[1];
  const tmp11 = imageEtag(noop.useState(null), 2);
  [tmp13, closure_6] = imageEtag(noop.useState(false), 2);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function y() {
      if (null == stateFromStores) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_6(true), 2000);
        return () => clearTimeout(closure_0);
      }
    };
    const items1 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp15 = items1;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  if (cResult[6] === arg1) {
    if (cResult[7] === imageEtag) {
      if (cResult[8] === arg0) {
        let tmp17 = cResult[9];
        let tmp18 = cResult[10];
      }
      const effect1 = noop.useEffect(tmp17, tmp18);
      let tmp20 = null;
      if (null != imageEtag) {
        tmp20 = tmp10;
      }
      closure_7 = tmp20;
      if (null == imageEtag) {
        let tmp21 = arg1;
      } else {
        tmp21 = tmp20;
        if (null != tmp20) {
          tmp21 = tmp20;
        }
      }
      closure_8 = tmp21;
      if (cResult[11] === tmp20) {
        if (cResult[12] === tmp21) {
          let tmp22 = cResult[13];
        }
        if (null != arg0) {
          if (null == stateFromStores) {
            let tmp23 = null;
          }
          let blur;
          if (stateFromStores != null) {
            blur = stateFromStores.blur;
          }
          if (cResult[14] === tmp22) {
            if (cResult[15] === tmp23) {
              if (cResult[16] === tmp25) {
                let tmp26 = cResult[17];
              }
              return tmp26;
            }
          }
          const obj2 = { src: tmp23, blurred: false !== blur, handleError: null };
          class M {
            constructor() {
              if (closure_8 === closure_7) {
                tmp2 = closure_5;
                tmp3 = closure_5(tmp);
              }
              return;
            }
          }
          cResult[14] = tmp22;
          cResult[15] = tmp23;
          cResult[16] = false !== blur;
          cResult[17] = obj2;
          tmp26 = obj2;
        }
        tmp23 = tmp21;
      }
      class M {
        constructor() {
          if (closure_8 === closure_7) {
            tmp2 = closure_5;
            tmp3 = closure_5(tmp);
          }
          return;
        }
      }
      cResult[11] = tmp20;
      cResult[12] = tmp21;
      cResult[13] = M;
      tmp22 = M;
    }
  }
  const fn3 = function p() {
    if (null != c0) {
      if (null != imageEtag) {
        c0 = stateFromStores(function*(arg0, arg1) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "+352" };
            }
          } else {
            try {
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_3 = tmp3;
                  closure_2 = tmp7;
                  closure_130_0 = undefined;
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: _true(closure_1[7]).getOverlayBackgroundUrl(_true, closure_1), done: false };
                  return obj5;
                }
              } else {
                if (1 === tmp7) {
                  c4 = 0;
                  closure_130_0 = closure_2_1;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_130_0 = value;
                  c4 = 0;
                }
                if (!_true) {
                  noop(closure_130_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: "+352" };
              }
            } catch (tmp22) {
              if (tmp4 === c4) {
                c6 = tmp2;
                throw tmp22;
              } else {
                c5 = tmp;
              }
            }
          }
        });
        (function load() {
          const self = this;
          const apply = c0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(tmp, tmp2);
        return () => {
          c0 = true;
        };
      }
    }
  };
  const items2 = [arg0, imageEtag, arg1];
  cResult[6] = arg1;
  cResult[7] = imageEtag;
  cResult[8] = arg0;
  cResult[9] = fn3;
  cResult[10] = items2;
  tmp18 = items2;
  tmp17 = fn3;
  const tmp12 = imageEtag(noop.useState(false), 2);
}) : (function useConjureOverlayBackground(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let background = null;
    if (null != closure_0) {
      background = ConjureOverlayBackgroundStore.getBackground(tmp);
    }
    return background;
  });
  let imageEtag;
  if (stateFromStores != null) {
    imageEtag = stateFromStores.imageEtag;
  }
  if (imageEtag == null) {
    imageEtag = null;
  }
  let obj = require("initialize");
  [tmp4, noop] = imageEtag(noop.useState(null), 2);
  const tmp5 = imageEtag(noop.useState(null), 2);
  closure_5 = tmp5[1];
  const tmp6 = imageEtag(noop.useState(false), 2);
  closure_6 = tmp6[1];
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_6(true), 2000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [arg0, imageEtag, arg1];
  const effect1 = noop.useEffect(() => {
    closure_1 = async function _load2(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              closure_130_0 = undefined;
              let v0 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: closure_2_0(closure_2_1[7]).getOverlayBackgroundUrl(closure_0, closure_1), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              closure_130_0 = closure_1;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_130_0 = value;
              v0 = 0;
            }
            if (!closure_131_0) {
              v0(closure_130_0);
            }
            c6 = 3;
            return { value: "IconComponent", done: "+352" };
          }
        } catch (tmp22) {
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp22;
          } else {
            c5 = tmp;
          }
        }
      }
    };
    if (null != c0) {
      if (null != imageEtag) {
        c0 = false;
        (function load(arg0, arg1) {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(tmp, tmp2);
        return () => {
          c0 = true;
        };
      }
    }
  }, items2);
  let tmp9 = null;
  if (null != imageEtag) {
    tmp9 = tmp4;
  }
  closure_7 = tmp9;
  if (null == imageEtag) {
    let tmp10 = arg1;
  } else {
    tmp10 = tmp9;
    if (null != tmp9) {
      tmp10 = tmp9;
    }
  }
  closure_8 = tmp10;
  const items3 = [tmp10, tmp9];
  if (null != arg0) {
    if (null == stateFromStores) {
      let tmp12 = null;
    }
    const obj2 = { src: tmp12, blurred: null, handleError: null };
    let blur;
    if (stateFromStores != null) {
      blur = stateFromStores.blur;
    }
    obj2.blurred = false !== blur;
    obj2.handleError = tmp11;
    return obj2;
  }
  tmp12 = tmp10;
});