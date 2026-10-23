// === Module 10782: conjurePausedPreviewViews ===

// Module 10782 (conjurePausedPreviewViews)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const map = new Map();
const ReactCompilerGating = fn(558);
function registerConjurePausedPreview(arg0) {
  closure_0 = arg0;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = map.set(arg0, num + 1);
  c1 = true;
  return () => {
    if (c1) {
      c1 = false;
      let num = map.get(closure_0);
      if (num == null) {
        num = 1;
      }
      const diff = num - 1;
      if (0 < diff) {
        const result = map.set(closure_0, diff);
      } else {
        map.delete(closure_0);
      }
    }
  };
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePausedPreviewViews.tsx");

export const isConjurePausedPreviewMounted = function isConjurePausedPreviewMounted(projectId) {
  let num = map.get(projectId);
  if (num == null) {
    num = 0;
  }
  return num > 0;
};
export { registerConjurePausedPreview };
export const useConjurePausedPreviewView = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePausedPreviewView(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        closure_0 = tmp;
        let num = map.get(tmp);
        if (num == null) {
          num = 0;
        }
        const result = map.set(tmp, num + 1);
        c1 = true;
        return () => {
          if (c1) {
            c1 = false;
            let num = map.get(closure_0);
            if (num == null) {
              num = 1;
            }
            const diff = num - 1;
            if (0 < diff) {
              const result = map.set(closure_0, diff);
            } else {
              map.delete(closure_0);
            }
          }
        };
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
}) : (function useConjurePausedPreviewView(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != closure_0) {
      closure_0 = tmp;
      let num = map.get(tmp);
      if (num == null) {
        num = 0;
      }
      let result = map.set(tmp, num + 1);
      c1 = true;
      return () => {
        if (c1) {
          c1 = false;
          let num = map.get(closure_0);
          if (num == null) {
            num = 1;
          }
          const diff = num - 1;
          if (0 < diff) {
            const result = map.set(closure_0, diff);
          } else {
            map.delete(closure_0);
          }
        }
      };
    }
  }, items);
});