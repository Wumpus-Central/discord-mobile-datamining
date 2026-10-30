// === Module 11304: PinotChannelLabelAnchor ===

// Module 11304 (PinotChannelLabelAnchor)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const module_560 = fn(560);
let closure_2 = module_560.create(() => ({ labels: {} }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabelAnchor.tsx");

export function usePinotChannelLabelAnchor(channelId) {
  closure_0 = channelId;
  noop = noop.useRef(null);
  const items = [channelId];
  const callback = noop.useCallback(() => {
    state.setState((labels) => {
      labels = labels.labels;
      const current = ref.current;
      let num;
      if (labels[channelId] != null) {
        num = tmp2.layoutVersion;
      }
      if (num == null) {
        num = 0;
      }
      const labels2 = {};
      const sum = num + 1;
      const merged = Object.assign(labels);
      let tmp5;
      if (null != current) {
        const obj = { view: current, layoutVersion: sum };
        tmp5 = obj;
      }
      labels2[channelId] = tmp5;
      return { labels: labels2 };
    });
  }, items);
  let obj = { ref: null, onLayout: callback };
  const items1 = [callback];
  obj.ref = noop.useCallback((current) => {
    closure_1.current = current;
    callback();
  }, items1);
  return obj;
}
export function usePinotChannelLabelCenter(channelId, ref) {
  closure_0 = channelId;
  let tmp = closure_2((arg0) => {
    let tmp = arg0.labels[closure_0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  });
  closure_2 = tmp;
  [tmp3, tmp4] = noop.useReducer((arg0) => arg0 + 1, 0);
  const tmp2 = _slicedToArray(noop.useReducer((arg0) => arg0 + 1, 0), 2);
  [tmp6, closure_3] = noop.useState(null);
  const items = [tmp, ref, tmp3];
  const effect = noop.useEffect(() => {
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          current = arg0;
          closure_1 = arg2;
          let tmp = closure_1;
          if (!closure_1) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              if (!c1) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                closure_3_3(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  }, items);
  let center = null;
  if (null != tmp) {
    let label;
    if (tmp6 != null) {
      label = tmp6.label;
    }
    center = null;
    if (label === tmp) {
      center = tmp6.center;
    }
  }
  return { hasLabel: null != tmp, center, onContainerLayout: tmp4 };
}