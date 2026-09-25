// === Module 15099: CacheActionsStorageDiagnostics ===

// Module 15099 (CacheActionsStorageDiagnostics)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            onBusyChange = tmp8;
            closure_128_0 = undefined;
            if (!ref.current) {
              if (null != tmp4(tmp48[4]).uploadStorageDiagnostics) {
                ref.current = true;
                onBusyChange(true);
                importDefault(true);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj6 = { value: tmp4(tmp48[4]).uploadStorageDiagnostics(), done: false };
                return obj6;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            const obj7 = {
              key: "storage-diagnostics-upload",
              icon() {
                        return closure_1_6(closure_1_0(4783).CircleInformationIcon, {});
                      },
              content: null
            };
            const intl = onBusyChange(tmp48[7]).intl;
            obj7.content = intl.string(onBusyChange(tmp48[7]).t["L/aQij"]);
            tmp4(tmp48[5]).open(obj7);
            const obj2 = tmp4(tmp48[5]);
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
            const obj9 = {
              key: "storage-diagnostics-upload",
              icon() {
                        return closure_1_6(closure_1_0(4783).CircleInformationIcon, {});
                      },
              content: null
            };
            const intl2 = onBusyChange(tmp48[7]).intl;
            const t = onBusyChange(tmp48[7]).t;
            if (closure_128_0) {
              let cHxSwT = t.H99tIV;
            } else {
              cHxSwT = t.cHxSwT;
            }
            obj9.content = intl2.string(cHxSwT);
            tmp4(tmp48[5]).open(obj9);
            c3 = 1;
            const obj8 = tmp4(tmp48[5]);
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
        throw tmp48;
      } catch (tmp48) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp48;
        } else if (tmp2 === tmp50) {
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
  let intl = onBusyChange(1115).intl;
  obj2.children = intl.string(onBusyChange(1115).t.Fzi4HX);
  const items = [closure_6(onBusyChange(4825).Text, obj2), ];
  let obj3 = { variant: "secondary", text: null, loading: null, disabled: null, onPress: null };
  let intl2 = onBusyChange(1115).intl;
  obj3.text = intl2.string(onBusyChange(1115).t.VSunuT);
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
  items[1] = closure_6(onBusyChange(5274).Button, obj3);
  obj.children = items;
  return closure_7(onBusyChange(5272).Stack, obj);
};