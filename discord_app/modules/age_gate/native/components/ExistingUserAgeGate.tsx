// === Module 17308: ExistingUserAgeGate ===

// Module 17308 (ExistingUserAgeGate)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const View = fn(17).View;
const AgeGateConstants = fn(1098);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: c10 } = AgeGateConstants);
let closure_11 = fn(17306).ExistingUserAgeGateScreens;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(onSuccess) {
  onSuccess = onSuccess.onSuccess;
  let onClose = onSuccess.onClose;
  const source = onSuccess.source;
  noop = undefined;
  let date;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const Pawtect = async function _submitBirthday(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            onClose = tmp7;
            closure_129_0 = undefined;
            onClose(tmp3[16])(null != onSuccess, "Cannot submit null birthday.");
            closure_129_0 = false;
            c4 = 1;
            _undefined(null);
            _undefined2(true);
            c5 = 2;
            c6 = 1;
            const obj1 = { value: onSuccess(tmp3[17]).submitDateOfBirth(onSuccess, source), done: false };
            return obj1;
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
              const intl = onSuccess(tmp3[14]).intl;
              let message = intl.string(onSuccess(tmp3[14]).t["TGg/2k"]);
            } else {
              message = closure_129_1.message;
            }
            closure_130_7(message);
            closure_130_8(false);
            closure_129_0 = true;
            let obj2 = onClose(tmp3[13]);
            obj2 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
            obj2.track(constants2.AGE_GATE_ACTION, obj2);
          }
          const obj3 = { onClose: onClose(tmp3[18]).pop, underageMessage: closure_129_1.body.date_of_birth, existingUser: true };
          closure_130_3.push(Blocked.Blocked, obj3);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            c4 = 0;
            { shouldShowError: null }[0] = closure_129_0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp47) {
        closure_3 = tmp47;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp47;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  closure_12 = async function _submitBirthdayWithAgeConfirmation(arg0, value) {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            v1(38)(null != date, "Cannot submit null birthday.");
            const diffResult = v1(4153)().diff(date, "years");
            if (diffResult < 18) {
              const obj1 = {
                source,
                onConfirm() {
                            return closure_1_10(closure_1_6);
                          },
                age: diffResult
              };
              navigation.push(AgeGateConfirm.AgeGateConfirm, obj1);
            } else {
              v1 = 1;
              c0 = 1;
              const obj2 = { value: submitBirthday(tmp17), done: false };
              return obj2;
            }
            const obj6 = v1(4153)();
            tmp17 = date;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
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
  const tmp = closure_16();
  let obj = onSuccess(source[11]);
  const navigation = obj.useNavigation();
  let obj1 = onSuccess(source[12]);
  const items = [c8];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined2.getCurrentUser());
  let tmp7 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = submitBirthday);
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE_EMBED;
  }
  noop = tmp7;
  const tmp9 = stateFromStores(noop.useState(null), 2);
  date = tmp9[0];
  [tmp12, c7] = stateFromStores(noop.useState(null), 2);
  const tmp11 = stateFromStores(noop.useState(null), 2);
  [tmp14, c8] = stateFromStores(noop.useState(false), 2);
  const tmp13 = stateFromStores(noop.useState(false), 2);
  const ref = noop.useRef(null);
  const items1 = [c7];
  stateFromStores1 = onSuccess(source[12]).useStateFromStores(items1, () => _undefined.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores1) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp7, navigation];
  const effect1 = noop.useEffect(() => {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = tmp.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (closure_5) {
        navigation.push(Pawtect.Pawtect);
      }
    }
    let nsfwAllowed1;
    if (stateFromStores != null) {
      nsfwAllowed1 = tmp.nsfwAllowed;
    }
    if (null != nsfwAllowed1) {
      onSuccess();
    }
  }, items3);
  const items4 = [source];
  const effect2 = noop.useEffect(() => {
    const obj = { source, action: constants.AGE_GATE_OPEN };
    obj.track(constants2.AGE_GATE_ACTION, obj);
  }, items4);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      if (!tmp7) {
        let intl = tmp2(tmp3[14]).intl;
        if (tmp8) {
          let stringResult = intl.string(tmp2(tmp3[14]).t.mhUrKS);
        } else {
          obj = { helpURL: null };
          let obj4 = onClose(tmp3[15]);
          obj.helpURL = obj4.getArticleURL(constants3.AGE_GATE);
          stringResult = intl.format(tmp2(tmp3[14]).t.EcJBEI, obj);
        }
      }
      const intl3 = tmp2(tmp3[14]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[14]).t;
      if (tmp7) {
        let stringResult1 = string(t["H0SG/g"]);
      } else if (tmp8) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      const tmp25 = onClose(tmp3[20])(date);
      let stringResult2 = tmp12;
      if (!tmp25) {
        stringResult2 = tmp12;
        if (null != date) {
          const intl4 = tmp2(tmp3[14]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[14]).t.udnqh6);
        }
      }
      obj = { top: true, style: tmp.container, children: null };
      obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      const items5 = [closure_14(tmp2(tmp3[22]).Text, obj1), , , ];
      let obj2 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items5[1] = closure_14(tmp2(tmp3[22]).Text, obj2);
      let obj3 = { style: tmp.inputGroup, ref, label: null, date: null, onChangeDate: null, error: null };
      const intl5 = tmp2(tmp3[14]).intl;
      obj3.label = intl5.string(tmp2(tmp3[14]).t.xNpFJ6);
      obj3.date = date;
      obj3.onChangeDate = tmp9[1];
      obj3.error = stringResult2;
      items5[2] = closure_14(onClose(tmp3[23]), obj3);
      obj4 = { style: tmp.buttonWrapper, children: null };
      const obj5 = { loading: tmp14, disabled: tmp14, text: null, onPress: null, grow: true };
      const intl6 = tmp2(tmp3[14]).intl;
      obj5.text = intl6.string(tmp2(tmp3[14]).t.PDTjLN);
      obj5.onPress = function submitBirthdayWithAgeConfirmation() {
        const self = this;
        const apply = closure_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj4.children = closure_14(tmp2(tmp3[24]).Button, obj5);
      items5[3] = closure_14(date, obj4);
      obj.children = items5;
      return closure_15(tmp2(tmp3[21]).SafeAreaPaddingView, obj);
    }
  }
  const intl2 = tmp2(tmp3[14]).intl;
  let obj6 = { helpURL: null };
  obj6 = onClose(tmp3[15]);
  obj6.helpURL = obj6.getArticleURL(constants3.AGE_GATE);
  stringResult = intl2.format(tmp2(tmp3[14]).t.n3QjDE, obj6);
};