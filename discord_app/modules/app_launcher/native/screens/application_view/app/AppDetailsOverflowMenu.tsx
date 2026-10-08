// === Module 11838: AppDetailsOverflowMenu ===

// Module 11838 (AppDetailsOverflowMenu)
import ToastUtils from "ToastUtils" /* 4765 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppDetailsOverflowMenu(application) {
  let ContextMenu = _require;
  let tmp = onAddAppMenuClick;
  const cResult = require("c").c(18);
  application = application.application;
  onAddAppMenuClick = application.onAddAppMenuClick;
  if (cResult[0] !== application) {
    const installAppProps = ContextMenu(tmp[5]).getInstallAppProps(application);
    _require = installAppProps;
    const ContextMenuResult = ContextMenu(tmp[5]);
    const result = ContextMenu(tmp[6]).canInstallApplication(installAppProps);
    cResult[0] = application;
    cResult[1] = installAppProps;
    cResult[2] = result;
    let tmp4 = result;
    const ContextMenuResult1 = ContextMenu(tmp[6]);
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === application) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp3) {
        if (cResult[6] === onAddAppMenuClick) {
          let arr = cResult[7];
        }
        if (0 === arr.length) {
          return null;
        } else {
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                tmp = closure_1_4(application, closure_1_3);
                obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
                merged = Object.assign(tmp);
                intl = closure_0(onAddAppMenuClick[7]).intl;
                obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
                obj.maxFontSizeMultiplier = 1.5;
                return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
              }
            }
            cResult[15] = I;
          } else {
            class I {
              constructor(arg0) {
                tmp = closure_1_4(application, closure_1_3);
                obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
                merged = Object.assign(tmp);
                intl = closure_0(onAddAppMenuClick[7]).intl;
                obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
                obj.maxFontSizeMultiplier = 1.5;
                return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
              }
            }
          }
          if (cResult[16] !== arr) {
            class I {
              constructor(arg0) {
                tmp = closure_1_4(application, closure_1_3);
                obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
                merged = Object.assign(tmp);
                intl = closure_0(onAddAppMenuClick[7]).intl;
                obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
                obj.maxFontSizeMultiplier = 1.5;
                return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
              }
            }
            ContextMenu = ContextMenu(tmp[15]).ContextMenu;
            const obj2 = { items: arr, children: I };
            tmp = <ContextMenu items={arr}>{I}</ContextMenu>;
            cResult[16] = arr;
            cResult[17] = tmp;
          } else {
            class I {
              constructor(arg0) {
                tmp = closure_1_4(application, closure_1_3);
                obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
                merged = Object.assign(tmp);
                intl = closure_0(onAddAppMenuClick[7]).intl;
                obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
                obj.maxFontSizeMultiplier = 1.5;
                return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
              }
            }
          }
        }
      }
    }
  }
  const items = [];
  if (tmp4) {
    class I {
      constructor(arg0) {
        tmp = closure_1_4(application, closure_1_3);
        obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
        merged = Object.assign(tmp);
        intl = closure_0(onAddAppMenuClick[7]).intl;
        obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
        obj.maxFontSizeMultiplier = 1.5;
        return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
      }
    }
    if (null != onAddAppMenuClick) {
      class I {
        constructor(arg0) {
          tmp = closure_1_4(application, closure_1_3);
          obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
          merged = Object.assign(tmp);
          intl = closure_0(onAddAppMenuClick[7]).intl;
          obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_1_4(application, closure_1_3);
            obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
            merged = Object.assign(tmp);
            intl = closure_0(onAddAppMenuClick[7]).intl;
            obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
            obj.maxFontSizeMultiplier = 1.5;
            return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
          }
        }
        const stringResult = obj4.string(ContextMenu(tmp[7]).t.NgXl3C);
        cResult[8] = stringResult;
        let CirclePlusIcon = stringResult;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_1_4(application, closure_1_3);
            obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
            merged = Object.assign(tmp);
            intl = closure_0(onAddAppMenuClick[7]).intl;
            obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
            obj.maxFontSizeMultiplier = 1.5;
            return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
          }
        }
      }
      if (cResult[9] === tmp3) {
        class I {
          constructor(arg0) {
            tmp = closure_1_4(application, closure_1_3);
            obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
            merged = Object.assign(tmp);
            intl = closure_0(onAddAppMenuClick[7]).intl;
            obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
            obj.maxFontSizeMultiplier = 1.5;
            return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
          }
        }
        items.push(tmp8);
      }
      const obj3 = {
        label: CirclePlusIcon,
        action() {
              return onAddAppMenuClick({ installAppProps });
            },
        IconComponent: null
      };
      CirclePlusIcon = ContextMenu(tmp[8]).CirclePlusIcon;
      obj3.IconComponent = CirclePlusIcon;
      cResult[9] = tmp3;
      cResult[10] = onAddAppMenuClick;
      cResult[11] = obj3;
      tmp8 = obj3;
    }
  }
  const DeveloperMode = ContextMenu(tmp[9]).DeveloperMode;
  if (!DeveloperMode.getSetting()) {
    class I {
      constructor(arg0) {
        tmp = closure_1_4(application, closure_1_3);
        obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
        merged = Object.assign(tmp);
        intl = closure_0(onAddAppMenuClick[7]).intl;
        obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
        obj.maxFontSizeMultiplier = 1.5;
        return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
      }
    }
    cResult[3] = application;
    cResult[4] = tmp4;
    cResult[5] = tmp3;
    cResult[6] = onAddAppMenuClick;
    cResult[7] = items;
    arr = items;
  } else {
    class I {
      constructor(arg0) {
        tmp = closure_1_4(application, closure_1_3);
        obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
        merged = Object.assign(tmp);
        intl = closure_0(onAddAppMenuClick[7]).intl;
        obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
        obj.maxFontSizeMultiplier = 1.5;
        return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_1_4(application, closure_1_3);
          obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
          merged = Object.assign(tmp);
          intl = closure_0(onAddAppMenuClick[7]).intl;
          obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
        }
      }
      const stringResult1 = obj6.string(ContextMenu(tmp[7]).t["+NP/b2"]);
      cResult[12] = stringResult1;
      const tmp10 = stringResult1;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_1_4(application, closure_1_3);
          obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
          merged = Object.assign(tmp);
          intl = closure_0(onAddAppMenuClick[7]).intl;
          obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
        }
      }
    }
    if (cResult[13] !== application) {
      class I {
        constructor(arg0) {
          tmp = closure_1_4(application, closure_1_3);
          obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
          merged = Object.assign(tmp);
          intl = closure_0(onAddAppMenuClick[7]).intl;
          obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
        }
      }
      tmp13[0] = tmp10;
      tmp13[1] = function action() {
        ClipboardUtils.copy(application.id);
        ToastUtils.presentIdCopied();
      };
      tmp13[2] = ContextMenu(tmp[12]).IdIcon;
      cResult[13] = application;
      cResult[14] = tmp13;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_1_4(application, closure_1_3);
          obj = { ref: application.ref, size: "sm", variant: "secondary-overlay", icon: application(onAddAppMenuClick[14]) };
          merged = Object.assign(tmp);
          intl = closure_0(onAddAppMenuClick[7]).intl;
          obj.accessibilityLabel = intl.string(closure_0(onAddAppMenuClick[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return closure_1_5(closure_0(onAddAppMenuClick[13]).IconButton, obj);
        }
      }
    }
    items.push(tmp13);
  }
  let obj = require("c");
}) : (function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  installAppProps = application(installAppProps[5]).getInstallAppProps(application);
  let obj = application(installAppProps[5]);
  let result = application(installAppProps[6]).canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  const items = [];
  if (result) {
    const obj3 = { label: null, action: null, IconComponent: null };
    let intl = tmp(tmp2[7]).intl;
    obj3.label = intl.string(tmp(tmp2[7]).t.NgXl3C);
    obj3.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj3.IconComponent = tmp(tmp2[8]).CirclePlusIcon;
    items.push(obj3);
  }
  const DeveloperMode = tmp(tmp2[9]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const obj4 = { label: null, action: null, IconComponent: null };
    const intl2 = tmp(tmp2[7]).intl;
    obj4.label = intl2.string(tmp(tmp2[7]).t["+NP/b2"]);
    obj4.action = function action() {
      ClipboardUtils.copy(application.id);
      ToastUtils.presentIdCopied();
    };
    obj4.IconComponent = tmp(tmp2[12]).IdIcon;
    items.push(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    const obj5 = {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[14]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[7]).intl;
          obj.accessibilityLabel = intl.string(application(installAppProps[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(application(installAppProps[13]).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[14]) });
        }
    };
    tmp8 = jsx(tmp(tmp2[15]).ContextMenu, {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[14]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[7]).intl;
          obj.accessibilityLabel = intl.string(application(installAppProps[7]).t.PdRCRg);
          obj.maxFontSizeMultiplier = 1.5;
          return jsx(application(installAppProps[13]).IconButton, { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[14]) });
        }
    });
  }
  return tmp8;
});