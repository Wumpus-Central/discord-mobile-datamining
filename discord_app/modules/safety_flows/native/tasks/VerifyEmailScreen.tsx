// === Module 17877: VerifyEmailScreen ===

// Module 17877 (VerifyEmailScreen)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default function _default() {
  onTaskComplete(value[4]);
  let obj1 = onTaskComplete(value[5]);
  onTaskComplete = obj1.useOnTaskComplete();
  importDefault = noop.useRef("");
  const tmp2 = first1(noop.useState(""), 2);
  value = tmp2[0];
  const tmp4 = first1(noop.useState(false), 2);
  asyncGeneratorStep = tmp5;
  const tmp6 = first1(noop.useState(false), 2);
  first1 = tmp6[0];
  noop = tmp6[1];
  const items = [onTaskComplete];
  const onAction = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            const current = ref.current;
            if (null != current) {
              if ("" !== current) {
                c3 = 1;
                v0(true);
                closure_5(true);
                let obj1 = { verification_code: current, type: tmp3(tmp30[6]).TaskInputType.VerificationCode };
                ref = 2;
                c4 = 1;
                const obj2 = { value: onTaskComplete(obj1), done: false };
                return obj2;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_3(false);
            closure_128_5(false);
            obj1 = ref(tmp30[7]);
            const obj3 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null };
            const intl = tmp3(tmp30[8]).intl;
            obj3.content = intl.string(ref(tmp30[9]).PfbG6H);
            obj1.open(obj3);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_3(false);
            c3 = 0;
          }
          c3 = 0;
          c4 = 3;
          obj = { value, done: true };
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
  }, items2);
  let obj = { title: null, action: null, onAction: null, submitting: null, children: null };
  let intl = onTaskComplete(value[8]).intl;
  obj.title = intl.string(require("module_2690")["Qm6K/s"]);
  const intl2 = onTaskComplete(value[8]).intl;
  obj.action = intl2.string(require("module_2690").wq2RDq);
  obj.onAction = onAction;
  obj.submitting = tmp4[0];
  obj = { spacing: require("native").space.PX_16, children: null };
  obj1 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl3 = onTaskComplete(value[8]).intl;
  obj1.children = intl3.string(require("module_2690").aveKoG);
  const items3 = [onAction(onTaskComplete(value[13]).Text, obj1), ];
  let obj2 = { spacing: require("native").space.PX_8, children: null };
  let obj3 = { placeholder: null, maxLength: 6, returnKeyType: "done", value: null, onChange: null };
  const intl4 = onTaskComplete(value[8]).intl;
  obj3.placeholder = intl4.string(require("module_2690").d9Ykjr);
  obj3.value = value;
  obj3.onChange = tmp2[1];
  const items4 = [onAction(onTaskComplete(value[14]).TextInput, obj3), ];
  const obj4 = { setLoading: tmp4[1], flowId: null };
  const flow_context = obj.useSafetyFlowTask().task.flow_context;
  let flow_id;
  const tmp12 = require("SafetyFlowTaskScreen");
  if (flow_context != null) {
    flow_id = flow_context.flow_id;
  }
  obj4.flowId = flow_id;
  items4[1] = onAction(require("ResendVerificationCodeButton"), obj4);
  obj2.children = items4;
  items3[1] = closure_7(onTaskComplete(value[11]).Stack, obj2);
  obj.children = items3;
  obj.children = closure_7(onTaskComplete(value[11]).Stack, obj);
  return onAction(tmp12, obj);
};