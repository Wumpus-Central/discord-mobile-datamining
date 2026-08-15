// discord_app/modules/age_gate/native/components/ExistingUserAgeGate.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import _slicedToArray from "_slicedToArray";
import closure_5 from "t";
import { View } from "submitDateOfBirth";
import handleRequiredAction from "handleRequiredAction";
import closure_8 from "mergeGuildAvatar";
import result from "result";
import { ExistingUserAgeGateScreens as closure_11 } from "ExistingUserAgeGateScreens";
import ME from "ME";
import jsxProd from "SafeAreaPaddingView";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
const require = arg1;
({ AgeGateAnalyticAction: c9, AgeGateSource: c10 } = result);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
result = require("noop").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(onSuccess) {
  let FAMILY_CENTER;
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let c7;
  let c8;
  let tmp12;
  let tmp14;
  onSuccess = onSuccess.onSuccess;
  const onClose = onSuccess.onClose;
  const source = onSuccess.source;
  let navigation;
  let stateFromStores;
  let React;
  let first;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    const self = this;
    const apply = _submitBirthday.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _submitBirthday() {
    const self = this;
    const tmp = navigation((arg0) => {
      let closure_0 = arg0;
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp3;
                let closure_1 = tmp7;
                let c0;
                outer1_1(outer1_2[16])(null != c0, "Cannot submit null birthday.");
                c0 = false;
                let c4 = 1;
                outer1_7(null);
                outer1_8(true);
                c5 = 2;
                c6 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = callback(outer1_2[17]).submitDateOfBirth(c0, outer1_2);
                return obj1;
              }
            } else if (1 === tmp7) {
              c4 = 0;
              closure_1 = mergeGuildAvatar;
              if (null == closure_1.body) {
                let username;
                if (closure_1 != null) {
                  const body = closure_1.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const intl = callback(outer1_2[14]).intl;
                  let message = intl.string(callback(outer1_2[14]).t["TGg/2k"]);
                } else {
                  message = closure_1.message;
                }
                handleRequiredAction(message);
                callback2(false);
                callback = true;
                let obj2 = outer1_1(outer1_2[13]);
                obj2 = { source: null, action: null };
                obj2[0] = outer1_2;
                obj2[1] = outer1_9.AGE_GATE_FAILURE;
                obj2.track(outer1_12.AGE_GATE_ACTION, obj2);
                const tmp16 = handleRequiredAction;
              }
              const obj3 = { onClose: null, underageMessage: null, existingUser: true };
              obj3[0] = outer1_1(outer1_2[18]).pop;
              obj3[1] = closure_1.body.date_of_birth;
              outer1_3.push(outer1_11.Blocked, obj3);
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else {
              if (arg0 !== 2) {
                c4 = 0;
                { shouldShowError: null }[0] = callback;
                c6 = 3;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp47) {
            mergeGuildAvatar = tmp47;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp47;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    });
    const _submitBirthday = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _submitBirthdayWithAgeConfirmation() {
    const self = this;
    const tmp = navigation(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c0 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              v0(outer1_2[16])(null != outer1_6, "Cannot submit null birthday.");
              const diffResult = v0(outer1_2[19])().diff(outer1_6, "years");
              if (diffResult < 18) {
                const obj1 = { source: null, onConfirm: null, age: null };
                obj1[0] = outer1_2;
                obj1[1] = function onConfirm() {
                  return callback(closure_6);
                };
                obj1[2] = diffResult;
                outer1_3.push(outer1_11.AgeGateConfirm, obj1);
              } else {
                v0 = 1;
                c0 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_10(tmp18);
                return obj2;
              }
              const obj6 = v0(outer1_2[19])();
              tmp18 = outer1_6;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp10) {
          c0 = tmp;
          throw tmp10;
        }
      }
    });
    const _submitBirthdayWithAgeConfirmation = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  let obj = onSuccess(source[11]);
  navigation = obj.useNavigation();
  let obj1 = onSuccess(source[12]);
  const items = [c8];
  stateFromStores = obj1.useStateFromStores(items, () => _undefined2.getCurrentUser());
  let tmp7 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = submitBirthday);
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE_EMBED;
  }
  React = tmp7;
  const tmp9 = stateFromStores(React.useState(null), 2);
  first = tmp9[0];
  [tmp12, c7] = stateFromStores(React.useState(null), 2);
  const tmp11 = stateFromStores(React.useState(null), 2);
  [tmp14, c8] = stateFromStores(React.useState(false), 2);
  const tmp13 = stateFromStores(React.useState(false), 2);
  const ref = React.useRef(null);
  const items1 = [c7];
  stateFromStores1 = onSuccess(source[12]).useStateFromStores(items1, () => _undefined.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = React.useEffect(() => {
    if (null != stateFromStores1) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp7, navigation];
  const effect1 = React.useEffect(() => {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = tmp.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (c5) {
        navigation.push(_submitBirthday.Pawtect);
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
  const effect2 = React.useEffect(() => {
    let obj = onClose(source[13]);
    obj = { source, action: stateFromStores1.AGE_GATE_OPEN };
    obj.track(_submitBirthdayWithAgeConfirmation.AGE_GATE_ACTION, obj);
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
          obj[0] = obj4.getArticleURL(constants.AGE_GATE);
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
      const tmp25 = onClose(tmp3[20])(first);
      let stringResult2 = tmp12;
      if (!tmp25) {
        stringResult2 = tmp12;
        if (null != first) {
          const intl4 = tmp2(tmp3[14]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[14]).t.udnqh6);
        }
      }
      obj = { top: true, style: null, children: null };
      obj[1] = tmp.container;
      obj1 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj1[0] = tmp.header;
      obj1[3] = stringResult1;
      const items5 = [callback(tmp2(tmp3[22]).Text, obj1), , , ];
      let obj2 = { style: null, variant: "text-md/medium", color: "interactive-text-default", children: null };
      obj2[0] = tmp.body;
      obj2[3] = stringResult;
      items5[1] = callback(tmp2(tmp3[22]).Text, obj2);
      let obj3 = { style: null, ref: null, label: null, date: null, onChangeDate: null, error: null };
      obj3[0] = tmp.inputGroup;
      obj3[1] = ref;
      const intl5 = tmp2(tmp3[14]).intl;
      obj3[2] = intl5.string(tmp2(tmp3[14]).t.xNpFJ6);
      obj3[3] = first;
      obj3[4] = tmp9[1];
      obj3[5] = stringResult2;
      items5[2] = callback(onClose(tmp3[23]), obj3);
      obj4 = { style: null, children: null };
      obj4[0] = tmp.buttonWrapper;
      const obj5 = { loading: null, disabled: null, text: null, onPress: null, grow: true };
      obj5[0] = tmp14;
      obj5[1] = tmp14;
      const intl6 = tmp2(tmp3[14]).intl;
      obj5[2] = intl6.string(tmp2(tmp3[14]).t.PDTjLN);
      obj5[3] = function submitBirthdayWithAgeConfirmation() {
        const self = this;
        const apply = _submitBirthdayWithAgeConfirmation.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj4[1] = callback(tmp2(tmp3[24]).Button, obj5);
      items5[3] = callback(first, obj4);
      obj[2] = items5;
      return closure_15(tmp2(tmp3[21]).SafeAreaPaddingView, obj);
    }
  }
  const intl2 = tmp2(tmp3[14]).intl;
  let obj6 = { helpURL: null };
  obj6 = onClose(tmp3[15]);
  obj6[0] = obj6.getArticleURL(constants.AGE_GATE);
  stringResult = intl2.format(tmp2(tmp3[14]).t.n3QjDE, obj6);
};