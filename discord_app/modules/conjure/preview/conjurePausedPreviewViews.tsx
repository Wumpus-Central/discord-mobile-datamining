// discord_app/modules/conjure/preview/conjurePausedPreviewViews.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePausedPreviewViews.tsx");

export function isConjurePausedPreviewMounted(projectId) {
  let num = map.get(projectId);
  if (num == null) {
    num = 0;
  }
  return num > 0;
}
export function registerConjurePausedPreview(arg0) {
  closure_0 = arg0;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = map.set(arg0, num + 1);
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
export function useConjurePausedPreviewView(arg0) {
  noop = arg0;
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
}
