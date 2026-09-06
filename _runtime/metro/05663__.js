// _runtime/metro/05663__.js
import noop from "00019__.js";

const UIManager = fn(17).UIManager;
const jsx = fn(21).jsx;
try {
  let closure_0 = fn(5664).default;
  let closure_2 = null != UIManager.getViewManagerConfig("RNCMaskedView");
  exports.MaskedView = function MaskedView(children) {
    children = children.children;
    const merged = Object.assign(children, Object.assign({ children: 0 }));
    let tmp2 = children;
    if (closure_2) {
      tmp2 = children;
      if (closure_0) {
        const obj = {};
        const merged1 = Object.assign(merged);
        obj.children = children;
        tmp2 = <tmp3 />;
      }
    }
    return tmp2;
  };
} catch (err) {}
