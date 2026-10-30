// === Module 19332: ExistingUserAgeGate ===

// Module 19332 (ExistingUserAgeGate)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4852 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const AgeGateConstants = fn(1098);
({ AgeGateAnalyticAction: closure_8, AgeGateSource: closure_9 } = AgeGateConstants);
let closure_10 = fn(19328).ExistingUserAgeGateScreens;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, HelpdeskArticles: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let closure_15 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(source) {
  ({ onSuccess: require, onClose } = source);
  source = source.source;
  let date;
  noop = undefined;
  c6 = undefined;
  let stateFromStores;
  function submitBirthday(date) {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  constants2 = async function _submitBirthday(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            onClose = tmp7;
            closure_129_0 = undefined;
            onClose(tmp3[15])(null != closure_0, "Cannot submit null birthday.");
            closure_129_0 = false;
            c4 = 1;
            noop(null);
            View(true);
            c5 = 2;
            c6 = 1;
            const obj5 = { value: closure_0(tmp3[16]).submitDateOfBirth(closure_0, source), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          if (null == closure_129_1.body) {
            let username;
            if (closure_129_1 != null) {
              const body = closure_129_1.body;
              if (body != null) {
                username = body.username;
              }
            }
            if (null != username) {
              const intl = closure_0(tmp3[13]).intl;
              let message = intl.string(closure_0(tmp3[13]).t["TGg/2k"]);
            } else {
              message = closure_129_1.message;
            }
            closure_130_5(message);
            closure_130_6(false);
            closure_129_0 = true;
            const obj6 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
            onClose(tmp3[12]).track(constants2.AGE_GATE_ACTION, obj6);
            const obj3 = onClose(tmp3[12]);
          }
          const obj7 = { onClose: onClose(tmp3[17]).pop, underageMessage: closure_129_1.body.date_of_birth, existingUser: true };
          closure_130_3.push(Blocked.Blocked, obj7);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            closure_130_0();
            c4 = 0;
            { shouldShowError: null }[0] = closure_129_0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  closure_10 = async function _submitBirthdayWithAgeConfirmation() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            v1(38)(null != date, "Cannot submit null birthday.");
            const diffResult = v1(2044)().diff(date, "years");
            if (diffResult < 18) {
              const obj4 = {
                source,
                onConfirm() {
                            return closure_1_8(closure_1_4);
                          },
                age: diffResult
              };
              asyncGeneratorStep.push(AgeGateConfirm.AgeGateConfirm, obj4);
            } else {
              v1 = 1;
              c0 = 1;
              const obj5 = { value: submitBirthday(date), done: false };
              return obj5;
            }
            const obj6 = v1(2044)();
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp10) {
        c0 = tmp;
        throw tmp10;
      }
    }
  };
  const tmp = closure_15();
  closure_3 = require("useNavigation").useNavigation();
  let tmp5 = source === constants2.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = constants2);
  if (!tmp5) {
    tmp5 = source === tmp4.NSFW_SERVER_INVITE;
  }
  if (!tmp5) {
    tmp5 = source === tmp4.NSFW_SERVER_INVITE_EMBED;
  }
  const tmp7 = date(noop.useState(null), 2);
  date = tmp7[0];
  let obj = require("useNavigation");
  [tmp10, c5] = date(noop.useState(null), 2);
  const tmp9 = date(noop.useState(null), 2);
  [tmp12, c6] = date(noop.useState(false), 2);
  const tmp11 = date(noop.useState(false), 2);
  const ref = noop.useRef(null);
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores.getAction());
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [source];
  const effect1 = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants3.AGE_GATE_ACTION, { source, action: constants.AGE_GATE_OPEN });
  }, items2);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      if (!tmp5) {
        let intl = require("util").intl;
        if (tmp6) {
          let stringResult = intl.string(require("util").t.mhUrKS);
        } else {
          let obj2 = { helpURL: onClose(tmp3[14]).getArticleURL(constants4.AGE_GATE) };
          stringResult = intl.format(require("util").t.EcJBEI, obj2);
          let obj4 = onClose(tmp3[14]);
        }
      }
      const intl3 = require("util").intl;
      const string = intl3.string;
      const t = require("util").t;
      if (tmp5) {
        let stringResult1 = string(t["H0SG/g"]);
      } else if (tmp6) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      const tmp22 = onClose(tmp3[19])(date);
      let stringResult2 = tmp10;
      if (!tmp22) {
        stringResult2 = tmp10;
        if (null != date) {
          const intl4 = require("util").intl;
          stringResult2 = intl4.string(require("util").t.udnqh6);
        }
      }
      let obj3 = { top: true, style: tmp.container, children: null };
      let obj5 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      const items3 = [closure_13(require("Text/Text").Heading, obj5), , , ];
      let obj7 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items3[1] = closure_13(require("Text/Text").Text, obj7);
      const obj8 = { style: tmp.inputGroup, ref, label: null, date: null, onChangeDate: null, error: null };
      const intl5 = require("util").intl;
      obj8.label = intl5.string(require("util").t.xNpFJ6);
      obj8.date = date;
      obj8.onChangeDate = tmp7[1];
      obj8.error = stringResult2;
      items3[2] = closure_13(onClose(tmp3[22]), obj8);
      const obj9 = { style: tmp.buttonWrapper, children: null };
      const obj10 = { loading: tmp12, disabled: tmp12, text: null, onPress: null, grow: true };
      const intl6 = require("util").intl;
      obj10.text = intl6.string(require("util").t.PDTjLN);
      obj10.onPress = function submitBirthdayWithAgeConfirmation() {
        const self = this;
        const apply = closure_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj9.children = closure_13(require("components/Button/Button").Button, obj10);
      items3[3] = closure_13(c6, obj9);
      obj3.children = items3;
      return closure_14(require("common/SafeAreaView").SafeAreaPaddingView, obj3);
    }
  }
  const intl2 = require("util").intl;
  const obj11 = { helpURL: null };
  const tmp2Result = require("initialize");
  obj11.helpURL = onClose(source[14]).getArticleURL(constants4.AGE_GATE);
  stringResult = intl2.format(require("util").t.n3QjDE, obj11);
  let obj6 = onClose(source[14]);
};