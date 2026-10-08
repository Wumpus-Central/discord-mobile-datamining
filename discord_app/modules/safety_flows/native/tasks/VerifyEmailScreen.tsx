// === Module 18401: VerifyEmailScreen ===

// Module 18401 (VerifyEmailScreen)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(25);
  let obj = require("c");
  const task = require("SafetyFlowsTaskContext").useSafetyFlowTask().task;
  let obj2 = require("SafetyFlowsTaskContext");
  const onTaskComplete = require("SafetyFlowsUtils").useOnTaskComplete();
  _require = onTaskComplete;
  closure_1 = noop.useRef("");
  let obj3 = require("SafetyFlowsUtils");
  let obj4 = noop;
  current = first1(noop.useState(""), 2)[0];
  const tmp3 = first1(noop.useState(""), 2);
  [r10032, tmp6] = first1(noop.useState(false), 2);
  asyncGeneratorStep = tmp6;
  const tmp7 = first1(noop.useState(false), 2);
  first1 = tmp7[0];
  noop = tmp7[1];
  if (cResult[0] !== onTaskComplete) {
    _require = asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              current = ref.current;
              if (null != current) {
                if ("" !== current) {
                  let v0 = 1;
                  v0(true);
                  closure_1_5(true);
                  const obj5 = { verification_code: current, type: tmp3(first[8]).TaskInputType.VerificationCode };
                  ref = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(obj5), done: false };
                  return obj6;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              v0(false);
              closure_1_5(false);
              const obj7 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null };
              const intl = tmp3(first[10]).intl;
              obj7.content = intl.string(ref(first[11]).PfbG6H);
              ref(first[9]).open(obj7);
              const obj2 = ref(first[9]);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              v0(false);
              v0 = 0;
            }
            v0 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 3;
        } catch (tmp30) {
          closure_2 = tmp30;
          if (tmp4 === v0) {
            c4 = tmp2;
            throw tmp30;
          } else {
            ref = tmp;
          }
        }
      }
    });
    function t0() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = onTaskComplete;
    cResult[1] = t0;
    let tmp9 = t0;
  } else {
    tmp9 = cResult[1];
  }
  closure_6 = tmp9;
  if (cResult[2] !== current) {
    class F {
      constructor() {
        closure_1.current = closure_2;
        return;
      }
    }
    const items = [current];
    cResult[2] = current;
    cResult[3] = F;
    cResult[4] = items;
    let tmp12 = items;
  } else {
    class F {
      constructor() {
        closure_1.current = closure_2;
        return;
      }
    }
    tmp12 = cResult[4];
  }
  const effect = obj4.useEffect(F, tmp12);
  if (cResult[5] === tmp9) {
    class F {
      constructor() {
        closure_1.current = closure_2;
        return;
      }
    }
  }
  class L {
    constructor() {
      tmp = 6 !== closure_2.length || closure_4;
      if (!tmp) {
        tmp2 = closure_6;
        tmp3 = closure_6();
      }
      return;
    }
  }
  const items1 = [current, first1, tmp9];
  cResult[5] = tmp9;
  cResult[6] = first1;
  cResult[7] = current;
  cResult[8] = L;
  cResult[9] = items1;
  const tmp5 = first1(noop.useState(false), 2);
}) : (() => {
  let obj = onTaskComplete(value[6]);
  onTaskComplete = onTaskComplete(value[7]).useOnTaskComplete();
  importDefault = noop.useRef("");
  const tmp2 = first1(noop.useState(""), 2);
  value = tmp2[0];
  const tmp4 = first1(noop.useState(false), 2);
  asyncGeneratorStep = tmp5;
  const tmp6 = first1(noop.useState(false), 2);
  first1 = tmp6[0];
  noop = tmp6[1];
  const items = [onTaskComplete];
  const onAction = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const current = ref.current;
            if (null != current) {
              if ("" !== current) {
                c3 = 1;
                v0(true);
                closure_5(true);
                const obj5 = { verification_code: current, type: tmp3(tmp30[8]).TaskInputType.VerificationCode };
                ref = 2;
                c4 = 1;
                const obj6 = { value: onTaskComplete(obj5), done: false };
                return obj6;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_3(false);
            closure_128_5(false);
            const obj7 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null };
            const intl = tmp3(tmp30[10]).intl;
            obj7.content = intl.string(ref(tmp30[11]).PfbG6H);
            ref(tmp30[9]).open(obj7);
            const obj2 = ref(tmp30[9]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_3(false);
            c3 = 0;
          }
          c3 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 3;
      } catch (tmp30) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp30;
        } else {
          ref = tmp;
        }
      }
    }
  }), items);
  const items1 = [value];
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  }, items1);
  const items2 = [value, first1, onAction];
  const effect1 = noop.useEffect(() => {
    if (!tmp) {
      callback();
    }
    tmp = 6 !== first.length || first1;
  }, items2);
  let obj3 = { title: null, action: null, onAction: null, submitting: null, children: null };
  let obj2 = onTaskComplete(value[7]);
  let intl = onTaskComplete(value[10]).intl;
  obj3.title = intl.string(require("module_2859")["Qm6K/s"]);
  const intl2 = onTaskComplete(value[10]).intl;
  obj3.action = intl2.string(require("module_2859").wq2RDq);
  obj3.onAction = onAction;
  obj3.submitting = tmp4[0];
  let obj4 = { spacing: require("native").space.PX_16, children: null };
  let obj5 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl3 = onTaskComplete(value[10]).intl;
  obj5.children = intl3.string(require("module_2859").aveKoG);
  const items3 = [onAction(onTaskComplete(value[12]).Text, obj5), ];
  let obj6 = { spacing: require("native").space.PX_8, children: null };
  let obj7 = { placeholder: null, maxLength: 6, returnKeyType: "done", value: null, onChange: null };
  const intl4 = onTaskComplete(value[10]).intl;
  obj7.placeholder = intl4.string(require("module_2859").d9Ykjr);
  obj7.value = value;
  obj7.onChange = tmp2[1];
  const items4 = [onAction(onTaskComplete(value[13]).TextInput, obj7), ];
  const obj8 = { setLoading: tmp4[1], flowId: null };
  const flow_context = obj.useSafetyFlowTask().task.flow_context;
  let flow_id;
  const tmp12 = require("SafetyFlowTaskScreen");
  if (flow_context != null) {
    flow_id = flow_context.flow_id;
  }
  obj8.flowId = flow_id;
  items4[1] = onAction(require("ResendVerificationCodeButton"), obj8);
  obj6.children = items4;
  items3[1] = closure_7(onTaskComplete(value[15]).Stack, obj6);
  obj4.children = items3;
  obj3.children = closure_7(onTaskComplete(value[15]).Stack, obj4);
  return onAction(tmp12, obj3);
});