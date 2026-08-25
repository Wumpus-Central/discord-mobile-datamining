// === Module 17219: onTaskComplete ===

// Module 17219 (onTaskComplete)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/VerifyEmailScreen.tsx");

export default function _default() {
  let obj = onTaskComplete(first[4]);
  obj1 = onTaskComplete(first[5]);
  onTaskComplete = obj1.useOnTaskComplete();
  importDefault = React.useRef("");
  const tmp2 = first1(React.useState(""), 2);
  first = tmp2[0];
  const tmp4 = first1(React.useState(false), 2);
  let callback = tmp5;
  const tmp6 = first1(React.useState(false), 2);
  first1 = tmp6[0];
  React = tmp6[1];
  const items = [onTaskComplete];
  callback = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            const current = ref.current;
            if (null != current) {
              if ("" !== current) {
                let v0 = 1;
                v0(true);
                closure_1_5(true);
                obj1 = { verification_code: null, type: null };
                obj1[0] = current;
                obj1[1] = closure_1_0(closure_1_2[6]).TaskInputType.VerificationCode;
                ref = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_0(obj1);
                return obj2;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            v0 = 0;
            v0(false);
            callback(false);
            obj1 = ref(closure_1_2[7]);
            const obj3 = { key: "SAFETY_FLOWS_VERIFY_EMAIL_ERROR", content: null };
            const intl = closure_1_0(closure_1_2[8]).intl;
            obj3[1] = intl.string(ref(closure_1_2[9]).PfbG6H);
            obj1.open(obj3);
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0(false);
            v0 = 0;
          }
          v0 = 0;
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
  }), items);
  const items1 = [first];
  const effect = React.useEffect(() => {
    closure_1.current = first;
  }, items1);
  const items2 = [first, first1, callback];
  const effect1 = React.useEffect(() => {
    if (!tmp) {
      callback();
    }
  }, items2);
  obj = { title: null, action: null, onAction: null, submitting: null, children: null };
  let intl = onTaskComplete(first[8]).intl;
  obj[0] = intl.string(importDefault(first[9])["Qm6K/s"]);
  const intl2 = onTaskComplete(first[8]).intl;
  obj[1] = intl2.string(importDefault(first[9]).wq2RDq);
  obj[2] = callback;
  obj[3] = tmp4[0];
  obj = { spacing: importDefault(first[12]).space.PX_16, children: null };
  obj1 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl3 = onTaskComplete(first[8]).intl;
  obj1[2] = intl3.string(importDefault(first[9]).aveKoG);
  const items3 = [callback(onTaskComplete(first[13]).Text, obj1), ];
  let obj2 = { spacing: importDefault(first[12]).space.PX_8, children: null };
  let obj3 = { placeholder: null, maxLength: 6, returnKeyType: "done", value: null, onChange: null };
  const intl4 = onTaskComplete(first[8]).intl;
  obj3[0] = intl4.string(importDefault(first[9]).d9Ykjr);
  obj3[3] = first;
  obj3[4] = tmp2[1];
  const items4 = [callback(onTaskComplete(first[14]).TextInput, obj3), ];
  const obj4 = { setLoading: tmp4[1], flowId: null };
  const flow_context = obj.useSafetyFlowTask().task.flow_context;
  let flow_id;
  const tmp12 = importDefault(first[10]);
  if (flow_context != null) {
    flow_id = flow_context.flow_id;
  }
  obj4[1] = flow_id;
  items4[1] = callback(importDefault(first[15]), obj4);
  obj2[1] = items4;
  items3[1] = closure_7(onTaskComplete(first[11]).Stack, obj2);
  obj[1] = items3;
  obj[4] = closure_7(onTaskComplete(first[11]).Stack, obj);
  return callback(tmp12, obj);
};