// === Module 18114: VerifyEmailScreen ===

// Module 18114 (VerifyEmailScreen)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, first, importDefault;

let metroImportDefault;
let metroRequire;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_3;
  let closure_5;
  let current;
  let first1;
  let onTaskComplete;
  let tmp12;
  let tmp6;
  let tmp9;
  let obj = onTaskComplete(current[5]);
  const cResult = obj.c(25);
  let obj2 = onTaskComplete(current[6]);
  const task = obj2.useSafetyFlowTask().task;
  let obj3 = onTaskComplete(current[7]);
  onTaskComplete = obj3.useOnTaskComplete();
  let obj4 = react;
  let closure_1 = react.useRef("");
  const tmp3 = first1(react.useState(""), 2);
  current = tmp3[0];
  [r10032, tmp6] = first1(react.useState(false), 2);
  _asyncToGenerator = tmp6;
  first1(react.useState(false), 2);
  const tmp7 = first1(react.useState(false), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  if (cResult[0] !== onTaskComplete) {
    let closure_0 = _asyncToGenerator(async () => {
      let intl;
      let ref;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        try {
          c4 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              current = ref.current;
              if (null != current) {
                if ("" !== current) {
                  v0 = 1;
                  v0(true);
                  closure_1_5(true);
                  const obj4 = { verification_code: current, type: tmp(current[8]).TaskInputType.VerificationCode };
                  ref = 2;
                  c4 = 1;
                  const obj5 = { value: tmp(obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === tmp4) {
            v0 = 0;
            v0(false);
            closure_1_5(false);
            const obj6 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: intl.string(closure_2_1(current[11]).PfbG6H) };
            const open = closure_2_1(current[9]).open;
            const tmp16 = closure_2_1(current[9]);
            intl = tmp(current[10]).intl;
            open(obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0(false);
            v0 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp28) {
          let closure_2 = tmp28;
          if (0 === v0) {
            c4 = 3;
            throw tmp28;
          } else {
            ref = 1;
          }
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = onTaskComplete;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let closure_6 = tmp9;
  if (cResult[2] !== current) {
    class F {
      constructor() {
        closure_1.current = current;
      }
    }
    const items = [current];
    cResult[2] = current;
    cResult[3] = F;
    cResult[4] = items;
    tmp12 = items;
  } else {
    class F {
      constructor() {
        closure_1.current = current;
      }
    }
    tmp12 = cResult[4];
  }
  const effect = obj4.useEffect(F, tmp12);
  if (cResult[5] === tmp9) {
    class F {
      constructor() {
        closure_1.current = current;
      }
    }
  }
  class L {
    constructor() {
      const tmp = 6 !== first.length || first1;
      if (!tmp) {
        closure_6();
      }
    }
  }
  const items1 = [current, first1, tmp9];
  cResult[5] = tmp9;
  cResult[6] = first1;
  cResult[7] = current;
  cResult[8] = L;
  cResult[9] = items1;
}) : (() => {
  let Stack;
  let closure_1;
  let closure_3;
  let closure_5;
  let first2;
  let flow_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let obj4;
  let onTaskComplete;
  let value;
  let obj = onTaskComplete(value[6]);
  const task = obj.useSafetyFlowTask().task;
  let obj2 = onTaskComplete(value[7]);
  onTaskComplete = obj2.useOnTaskComplete();
  importDefault = react.useRef("");
  const tmp2 = first2(react.useState(""), 2);
  value = tmp2[0];
  const tmp4 = tmp2[1];
  const tmp5 = first2(react.useState(false), 2);
  _asyncToGenerator = tmp7;
  const first1 = tmp5[0];
  const tmp8 = first2(react.useState(false), 2);
  first2 = tmp8[0];
  react = tmp8[1];
  const items = [onTaskComplete];
  const onAction = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let closure_2;
    let intl;
    let ref;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const current = ref.current;
            if (null != current) {
              if ("" !== current) {
                c3 = 1;
                v0(true);
                closure_5(true);
                const obj4 = { verification_code: current, type: tmp(first[8]).TaskInputType.VerificationCode };
                ref = 2;
                c4 = 1;
                const obj5 = { value: onTaskComplete(obj4), done: false };
                return obj5;
              }
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_3(false);
          closure_128_5(false);
          const obj6 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: intl.string(ref(first[11]).PfbG6H) };
          const open = ref(first[9]).open;
          const tmp16 = ref(first[9]);
          intl = tmp(first[10]).intl;
          open(obj6);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_3(false);
          c3 = 0;
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp28) {
        first = tmp28;
        if (0 === c3) {
          c4 = 3;
          throw tmp28;
        } else {
          ref = 1;
        }
      }
    }
  }), items);
  const items1 = [value];
  const effect = react.useEffect(() => {
    closure_1.current = current;
  }, items1);
  const items2 = [value, first2, onAction];
  const effect1 = react.useEffect(() => {
    const tmp = 6 !== first.length || first2;
    if (!tmp) {
      callback();
    }
  }, items2);
  let obj3 = { title: intl.string(require("module_2815")["Qm6K/s"]), action: intl2.string(require("module_2815").wq2RDq), onAction, submitting: first1, children: closure_7(Stack, obj4) };
  const tmp14 = require("SafetyFlowTaskScreen");
  intl = onTaskComplete(value[10]).intl;
  intl2 = onTaskComplete(value[10]).intl;
  obj4 = { spacing: require("native").space.PX_16, children: items3 };
  Stack = onTaskComplete(value[15]).Stack;
  let obj5 = { variant: "text-sm/medium", color: "text-subtle", children: intl3.string(require("module_2815").aveKoG) };
  const Text = onTaskComplete(value[12]).Text;
  intl3 = onTaskComplete(value[10]).intl;
  items3 = [onAction(Text, obj5), ];
  let obj6 = { spacing: require("native").space.PX_8, children: items4 };
  const Stack2 = onTaskComplete(value[15]).Stack;
  const obj7 = { placeholder: intl4.string(require("module_2815").d9Ykjr), maxLength: 6, returnKeyType: "done", value, onChange: tmp4 };
  const TextInput = onTaskComplete(value[13]).TextInput;
  intl4 = onTaskComplete(value[10]).intl;
  items4 = [onAction(TextInput, obj7), ];
  const flow_context = task.flow_context;
  const obj8 = { setLoading: tmp5[1], flowId: flow_id };
  flow_id = undefined;
  let tmp16 = require("ResendVerificationCodeButton");
  if (flow_context != null) {
    flow_id = flow_context.flow_id;
  }
  items4[1] = onAction(tmp16, obj8);
  items3[1] = closure_7(Stack2, obj6);
  return onAction(tmp14, obj3);
});
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default tmp3;