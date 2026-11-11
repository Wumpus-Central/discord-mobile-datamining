// === Module 14051: ConjureRemoveFromServerForm ===

// Module 14051 (ConjureRemoveFromServerForm)
import _modDef4079 from "module_4079" /* 4079 */;
import useConjureRemoveFromServerDefault from "useConjureRemoveFromServer" /* 13211 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureRemoveFromServerForm.tsx");

export default function ConjureRemoveFromServerForm(onRemoved) {
  onRemoved = onRemoved.onRemoved;
  importDefault = undefined;
  dependencyMap = async function _remove() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: importDefault(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            const obj6 = { text: closure_128_0, variant: "success" };
            tmp5(dependencyMap[4]).open("CONJURE_APP_REMOVED", obj6);
            closure_129_0();
            const obj = tmp5(dependencyMap[4]);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  };
  const tmp3 = useConjureRemoveFromServerDefault(onRemoved.target);
  ({ optionalItems, notes, pending, error, submit: c1 } = tmp3);
  const children = [closure_4(onRemoved(5866).Text, { variant: "heading-sm/medium", color: "text-feedback-warning", children: tmp3.body }), , , , ];
  let tmp6Result = null;
  if (optionalItems.length > 0) {
    let obj = { items: [], optionalItems };
    tmp6Result = closure_4(tmp(13212), obj);
  }
  children[1] = tmp6Result;
  children[2] = notes.map((children) => closure_1_4(onRemoved(dependencyMap[6]).Text, { variant: "body-sm/normal", color: "text-muted", children }, children));
  let obj2 = { variant: "destructive", text: null, onPress: null, loading: null, disabled: null };
  const intl = tmp5(1113).intl;
  obj2.text = intl.string(_modDef4079.BGF8VT);
  obj2.onPress = function remove() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj2.loading = pending;
  obj2.disabled = pending;
  children[3] = closure_4(onRemoved(5873).Button, obj2);
  let tmp6Result2 = null;
  if (null != error) {
    let obj3 = { variant: "body-md/semibold", color: "input-text-error-default", children: error };
    tmp6Result2 = closure_4(tmp5(5866).Text, obj3);
  }
  children[4] = tmp6Result2;
  return closure_5(onRemoved(6274).Stack, { spacing: 16, children });
};