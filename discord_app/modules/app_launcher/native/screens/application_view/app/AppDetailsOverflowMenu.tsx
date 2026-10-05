// discord_app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import ToastUtils from "../../../../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../../../../utils/ClipboardUtils.native.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, application;

let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
      let onAddAppMenuClick;
      let tmp5;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(18);
      application = application.application;
      onAddAppMenuClick = application.onAddAppMenuClick;
      if (cResult[0] !== application) {
        const tmpResult = tmp(onAddAppMenuClick[5]);
        const installAppProps = tmpResult.getInstallAppProps(application);
        _require = installAppProps;
        const tmpResult2 = tmp(onAddAppMenuClick[6]);
        const result = tmpResult2.canInstallApplication(installAppProps);
        cResult[0] = application;
        cResult[1] = installAppProps;
        cResult[2] = result;
        tmp5 = result;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === application) {
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp4) {
            let arr;
            if (cResult[6] === onAddAppMenuClick) {
              arr = cResult[7];
            }
            let tmp18 = null;
            if (0 !== arr.length) {
              let tmp19;
              let tmp20;
              const _Symbol3 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function v(ref) {
                  const tmp = _objectWithoutProperties(ref.ref, closure_1_3);
                  const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
                  const merged = Object.assign(tmp);
                  const intl = installAppProps(onAddAppMenuClick[7]).intl;
                  return (
                    <IconButton
                      ref={ref.ref}
                      size="sm"
                      variant="secondary-overlay"
                      icon={application(onAddAppMenuClick[14])}
                      accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)}
                      maxFontSizeMultiplier={1.5}
                    />
                  );
                };
                cResult[15] = fn;
                tmp19 = fn;
              } else {
                tmp19 = cResult[15];
              }
              if (cResult[16] !== arr) {
                const tmp22 = jsx(tmp(onAddAppMenuClick[15]).ContextMenu, { items: arr, children: tmp19 });
                cResult[16] = arr;
                cResult[17] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[17];
              }
              tmp18 = tmp20;
            }
            return tmp18;
          }
        }
      }
      const items = [];
      if (tmp5) {
        if (null != onAddAppMenuClick) {
          let tmp9;
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[7]).intl;
            const stringResult = intl.string(tmp(onAddAppMenuClick[7]).t.NgXl3C);
            cResult[8] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[8];
          }
          if (cResult[9] === tmp4) {
            let tmp11;
            if (cResult[10] === onAddAppMenuClick) {
              tmp11 = cResult[11];
            }
            items.push(tmp11);
          }
          const obj3 = {
            label: tmp9,
            action() {
              const obj = { installAppProps };
              return onAddAppMenuClick(obj);
            },
            IconComponent: tmp(onAddAppMenuClick[8]).CirclePlusIcon,
          };
          cResult[9] = tmp4;
          cResult[10] = onAddAppMenuClick;
          cResult[11] = obj3;
          tmp11 = obj3;
        }
      }
      const DeveloperMode = tmp(tmp2[9]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        let tmp14;
        let tmp16;
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[7]).intl;
          const stringResult1 = intl2.string(tmp(onAddAppMenuClick[7]).t["+NP/b2"]);
          cResult[12] = stringResult1;
          tmp14 = stringResult1;
        } else {
          tmp14 = cResult[12];
        }
        if (cResult[13] !== application) {
          const obj4 = {
            label: tmp14,
            action() {
              const obj = ClipboardUtils;
              obj.copy(application.id);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            },
            IconComponent: tmp(onAddAppMenuClick[12]).IdIcon,
          };
          cResult[13] = application;
          cResult[14] = obj4;
          tmp16 = obj4;
        } else {
          tmp16 = cResult[14];
        }
        items.push(tmp16);
      }
      cResult[3] = application;
      cResult[4] = tmp5;
      cResult[5] = tmp4;
      cResult[6] = onAddAppMenuClick;
      cResult[7] = items;
      arr = items;
    }
  : (application) => {
      let intl;
      let intl2;
      application = application.application;
      const onAddAppMenuClick = application.onAddAppMenuClick;
      let installAppProps;
      let obj = application(installAppProps[5]);
      installAppProps = obj.getInstallAppProps(application);
      let obj2 = application(installAppProps[6]);
      const result = obj2.canInstallApplication(installAppProps) && null != onAddAppMenuClick;
      const items = [];
      if (result) {
        const push = items.push;
        const obj3 = {
          label: intl.string(application(installAppProps[7]).t.NgXl3C),
          action() {
            const obj = { installAppProps };
            return onAddAppMenuClick(obj);
          },
          IconComponent: application(installAppProps[8]).CirclePlusIcon,
        };
        intl = tmp(tmp2[7]).intl;
        push(obj3);
      }
      const DeveloperMode = tmp(tmp2[9]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const push2 = items.push;
        const obj4 = {
          label: intl2.string(application(installAppProps[7]).t["+NP/b2"]),
          action() {
            const obj = ClipboardUtils;
            obj.copy(application.id);
            const obj2 = ToastUtils;
            obj2.presentIdCopied();
          },
          IconComponent: application(installAppProps[12]).IdIcon,
        };
        intl2 = tmp(tmp2[7]).intl;
        push2(obj4);
      }
      let tmp8 = null;
      if (0 !== items.length) {
        tmp8 = jsx(tmp(tmp2[15]).ContextMenu, {
          items,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const IconButton = application(installAppProps[13]).IconButton;
            const merged1 = Object.assign(merged);
            const intl = application(installAppProps[7]).intl;
            return (
              <IconButton
                ref={ref.ref}
                size="sm"
                variant="secondary-overlay"
                icon={onAddAppMenuClick(installAppProps[14])}
                accessibilityLabel={intl.string(application(installAppProps[7]).t.PdRCRg)}
                maxFontSizeMultiplier={1.5}
              />
            );
          },
        });
      }
      return tmp8;
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx",
);

export default tmp3;
