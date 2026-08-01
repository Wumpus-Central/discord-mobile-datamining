// === Module 16151: ExistingUserAgeGateConfirm ===

// Module 16151 (ExistingUserAgeGateConfirm)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, buttonWrapper: { width: "100%" } });
const result = require("noop").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(age) {
  let c2;
  let tmp3;
  const onConfirm = age.onConfirm;
  let importDefault;
  let dependencyMap;
  function _handleConfirm() {
    const self = this;
    const tmp = _handleConfirm(function*() {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === arr) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp3;
              outer1_2(true);
              let c3 = 1;
              arr = 2;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              arr = arr.pop();
              callback(false);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (arg1.shouldShowError) {
                arr = arr.pop();
              }
              c3 = 0;
            }
            c3 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp21) {
          callback = tmp21;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp21;
          } else {
            arr = tmp;
          }
        }
      }
    });
    _handleConfirm = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = onConfirm(1480);
  importDefault = obj.useNavigation();
  [tmp3, c2] = callback(React.useState(false), 2);
  obj = { top: true, style: tmp.container, children: null };
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = onConfirm(1236).intl;
  obj[3] = intl.format(onConfirm(1236).t.wumolR, { age: age.age });
  const items = [callback2(onConfirm(4189).Text, obj), , ];
  let obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
  const intl2 = onConfirm(1236).intl;
  const obj2 = { helpURL: null };
  const tmp2 = callback(React.useState(false), 2);
  obj2[0] = importDefault(1945).getArticleURL(HelpdeskArticles.AGE_GATE);
  obj1[3] = intl2.format(onConfirm(1236).t.n3QjDE, obj2);
  items[1] = callback2(onConfirm(4189).Text, obj1);
  const obj3 = { style: tmp.buttonWrapper, children: null };
  const obj4 = { loading: tmp3, disabled: tmp3, text: null, onPress: null, grow: true };
  const intl3 = onConfirm(1236).intl;
  obj4[2] = intl3.string(onConfirm(1236).t["6tahin"]);
  obj4[3] = function handleConfirm() {
    const self = this;
    const apply = _handleConfirm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3[1] = callback2(onConfirm(4604).Button, obj4);
  items[2] = callback2(View, obj3);
  obj[2] = items;
  return callback3(onConfirm(5181).SafeAreaPaddingView, obj);
};