// discord_app/modules/conjure/preview/useConjureOverlayBackground.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureOverlayBackgroundStore from "ConjureOverlayBackgroundStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/useConjureOverlayBackground.tsx");

export default function useConjureOverlayBackground(projectId, arg1) {
  _require = projectId;
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
  const items2 = [projectId, imageEtag, arg1];
  const effect1 = noop.useEffect(() => {
    closure_1 = async function _load(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj5 = {
                value: projectId(closure_2_1[5]).getOverlayBackgroundUrl(closure_0, closure_1),
                done: false,
              };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  if (null != projectId) {
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
}
