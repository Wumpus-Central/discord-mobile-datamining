// discord_app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
import ToastUtils from "../../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../../utils/ClipboardUtils.native.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
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
                const fn = function v(ref) {
                  const obj = {
                    ref: ref.ref,
                    size: "sm",
                    variant: "secondary-overlay",
                    icon: application(onAddAppMenuClick[14]),
                  };
                  const merged = Object.assign(_objectWithoutProperties(ref, closure_1_3));
                  const intl = installAppProps(onAddAppMenuClick[7]).intl;
                  obj.accessibilityLabel = intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg);
                  obj.maxFontSizeMultiplier = 1.5;
                  return jsx(installAppProps(onAddAppMenuClick[13]).IconButton, {
                    ref: ref.ref,
                    size: "sm",
                    variant: "secondary-overlay",
                    icon: application(onAddAppMenuClick[14]),
                  });
                };
                cResult[15] = fn;
                let tmp17 = fn;
              } else {
                tmp17 = cResult[15];
              }
              if (cResult[16] !== arr) {
                ContextMenu = ContextMenu(tmp[15]).ContextMenu;
                const obj2 = { items: arr, children: tmp17 };
                tmp = <ContextMenu items={arr}>{tmp17}</ContextMenu>;
                cResult[16] = arr;
                cResult[17] = tmp;
              }
            }
          }
        }
      }
      const items = [];
      if (tmp4) {
        if (null != onAddAppMenuClick) {
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = ContextMenu(tmp[7]).intl;
            const stringResult = intl.string(ContextMenu(tmp[7]).t.NgXl3C);
            cResult[8] = stringResult;
            let CirclePlusIcon = stringResult;
          } else {
            CirclePlusIcon = cResult[8];
          }
          if (cResult[9] === tmp3) {
            if (cResult[10] === onAddAppMenuClick) {
              let tmp9 = cResult[11];
            }
            items.push(tmp9);
          }
          const obj3 = {
            label: CirclePlusIcon,
            action() {
              return onAddAppMenuClick({ installAppProps });
            },
            IconComponent: null,
          };
          CirclePlusIcon = ContextMenu(tmp[8]).CirclePlusIcon;
          obj3.IconComponent = CirclePlusIcon;
          cResult[9] = tmp3;
          cResult[10] = onAddAppMenuClick;
          cResult[11] = obj3;
          tmp9 = obj3;
        }
      }
      const DeveloperMode = ContextMenu(tmp[9]).DeveloperMode;
      if (!DeveloperMode.getSetting()) {
        cResult[3] = application;
        cResult[4] = tmp4;
        cResult[5] = tmp3;
        cResult[6] = onAddAppMenuClick;
        cResult[7] = items;
        arr = items;
      } else {
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = ContextMenu(tmp[7]).intl;
          const stringResult1 = intl2.string(ContextMenu(tmp[7]).t["+NP/b2"]);
          cResult[12] = stringResult1;
          let tmp12 = stringResult1;
        } else {
          tmp12 = cResult[12];
        }
        if (cResult[13] !== application) {
          const obj4 = {
            label: tmp12,
            action() {
              ClipboardUtils.copy(application.id);
              ToastUtils.presentIdCopied();
            },
            IconComponent: ContextMenu(tmp[12]).IdIcon,
          };
          cResult[13] = application;
          cResult[14] = obj4;
          let tmp14 = obj4;
        } else {
          tmp14 = cResult[14];
        }
        items.push(tmp14);
      }
      let obj = require("c");
    }
  : (application) => {
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
            const obj = {
              ref: ref.ref,
              size: "sm",
              variant: "secondary-overlay",
              icon: onAddAppMenuClick(installAppProps[14]),
            };
            const merged1 = Object.assign(merged);
            const intl = application(installAppProps[7]).intl;
            obj.accessibilityLabel = intl.string(application(installAppProps[7]).t.PdRCRg);
            obj.maxFontSizeMultiplier = 1.5;
            return jsx(application(installAppProps[13]).IconButton, {
              ref: ref.ref,
              size: "sm",
              variant: "secondary-overlay",
              icon: onAddAppMenuClick(installAppProps[14]),
            });
          },
        };
        tmp8 = jsx(tmp(tmp2[15]).ContextMenu, {
          items,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = {
              ref: ref.ref,
              size: "sm",
              variant: "secondary-overlay",
              icon: onAddAppMenuClick(installAppProps[14]),
            };
            const merged1 = Object.assign(merged);
            const intl = application(installAppProps[7]).intl;
            obj.accessibilityLabel = intl.string(application(installAppProps[7]).t.PdRCRg);
            obj.maxFontSizeMultiplier = 1.5;
            return jsx(application(installAppProps[13]).IconButton, {
              ref: ref.ref,
              size: "sm",
              variant: "secondary-overlay",
              icon: onAddAppMenuClick(installAppProps[14]),
            });
          },
        });
      }
      return tmp8;
    };
