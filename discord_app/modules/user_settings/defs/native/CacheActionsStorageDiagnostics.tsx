// discord_app/modules/user_settings/defs/native/CacheActionsStorageDiagnostics.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function showStorageDiagnosticsToast(text) {
  const obj = ToastActionCreatorsDefault;
  obj.openMana("storage-diagnostics-upload", { text, icon: CircleInformationIcon.CircleInformationIcon });
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsStorageDiagnostics.tsx");

export default function CacheActionsStorageDiagnostics(onBusyChange) {
  onBusyChange = onBusyChange.onBusyChange;
  c1 = undefined;
  closure_3 = async function _handleUpload() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            onBusyChange = tmp8;
            closure_128_0 = undefined;
            if (!ref.current) {
              if (null != tmp4(tmp45[6]).uploadStorageDiagnostics) {
                ref.current = true;
                onBusyChange(true);
                importDefault(true);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj4 = { value: tmp4(tmp45[6]).uploadStorageDiagnostics(), done: false };
                return obj4;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const intl = onBusyChange(tmp45[7]).intl;
            showStorageDiagnosticsToast(intl.string(onBusyChange(tmp45[7]).t["L/aQij"]));
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_2.current = false;
            closure_129_1(false);
            closure_129_0(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            const intl2 = onBusyChange(tmp45[7]).intl;
            const t = onBusyChange(tmp45[7]).t;
            if (closure_128_0) {
              let cHxSwT = t.H99tIV;
            } else {
              cHxSwT = t.cHxSwT;
            }
            showStorageDiagnosticsToast(intl2.string(cHxSwT));
            c3 = 1;
          }
          c3 = 0;
          closure_129_2.current = false;
          closure_129_1(false);
          closure_129_0(false);
        }
        c3 = 0;
        closure_129_2.current = false;
        closure_129_1(false);
        closure_129_0(false);
        throw tmp45;
      } catch (tmp45) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp45;
        } else if (tmp2 === tmp47) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  [tmp2, c1] = noop.useState(false);
  dependencyMap = noop.useRef(false);
  let obj = { children: null };
  let obj2 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  let intl = onBusyChange(1126).intl;
  obj2.children = intl.string(onBusyChange(1126).t.Fzi4HX);
  const items = [closure_6(onBusyChange(5087).Text, obj2)];
  let obj3 = { variant: "secondary", text: null, loading: null, disabled: null, onPress: null };
  let intl2 = onBusyChange(1126).intl;
  obj3.text = intl2.string(onBusyChange(1126).t.VSunuT);
  obj3.loading = tmp2;
  obj3.disabled = tmp2;
  obj3.onPress = function handleUpload() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[1] = closure_6(onBusyChange(5376).Button, obj3);
  obj.children = items;
  return closure_7(onBusyChange(5374).Stack, obj);
}
