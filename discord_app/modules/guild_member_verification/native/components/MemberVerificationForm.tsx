// discord_app/modules/guild_member_verification/native/components/MemberVerificationForm.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { View } from "MemberVerificationFormRenderer";
import get from "get";
import { NO_MEMBER_VERIFICATION_FORM as closure_8 } from "get";
import { VerificationLevels } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 }, submitButton: { marginTop: 12, marginBottom: 12 }, error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 } });
const result = require("noop").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  let c8;
  let c9;
  let importDefault;
  let onClose;
  let tmp24;
  let tmp26;
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  let stateFromStores = onClose;
  let memo;
  let first;
  let React;
  let c6;
  let c7;
  c8 = undefined;
  c9 = undefined;
  let memo1;
  function _handleSubmit() {
    const self = this;
    const tmp = memo(function*() {
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
              const callback = tmp3;
              let body = tmp7;
              let closure_0;
              body = undefined;
              if (null != c4) {
                if (outer1_10) {
                  (function showIncompleteToast() {
                    let obj = body(tmp3[8]);
                    obj = { key: "MEMBER_VERIFICATION_FORM_INCOMPLETE", content: null, icon: null };
                    const intl = callback(tmp3[9]).intl;
                    obj[1] = intl.string(callback(tmp3[9]).t.StC497);
                    obj[2] = body(tmp3[10]);
                    obj.open(obj);
                  })();
                  c6 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  outer1_9(null);
                  outer1_8(true);
                  closure_0 = c6;
                  if (c6 == null) {
                    closure_0 = outer1_8;
                  }
                  const obj1 = {};
                  const merged = Object.assign(closure_0);
                  let obj2 = outer1_0(outer1_2[15]);
                  obj1.formFields = obj2.removeInternalFields(tmp61);
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = outer1_1(outer1_2[16]).submitVerificationForm(outer1_0.id, obj1);
                  return obj2;
                }
              } else {
                c6 = 3;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            body = undefined;
            if (body != null) {
              body = body.body;
            }
            let version;
            if (body != null) {
              const errors = body.errors;
              if (errors != null) {
                version = errors.version;
              }
            }
            if (null == version) {
              let form_fields;
              if (body != null) {
                const errors2 = body.errors;
                if (errors2 != null) {
                  form_fields = errors2.form_fields;
                }
              }
              if (null == form_fields) {
                if (body != null) {
                  let message = body.message;
                }
              }
              tmp22(message);
              outer1_8(false);
            }
            let intl = outer1_0(outer1_2[9]).intl;
            message = intl.string(outer1_0(outer1_2[9]).t.PD09Sl);
            tmp22 = closure_9;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_0 = arg1;
            callback2(false);
            if (body != null) {
              tmp12(closure_0);
            }
            if (callback != null) {
              callback(true);
            }
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp52) {
          body = tmp52;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp52;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    const _handleSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback();
  let obj = guild(stateFromStores[11]);
  const userVerificationState = obj.useUserVerificationState();
  memo = userVerificationState;
  guild = undefined;
  importDefault = undefined;
  stateFromStores = undefined;
  memo = undefined;
  React = undefined;
  c6 = undefined;
  function getFormFields() {
    if (!memo) {
      if (null != closure_1) {
        const items = [tmp];
        let formFields;
        if (stateFromStores != null) {
          formFields = stateFromStores.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        HermesBuiltin.arraySpread(formFields, 1);
      }
      return items;
    }
    let formFields1;
    if (stateFromStores != null) {
      formFields1 = stateFromStores.formFields;
    }
    if (formFields1 == null) {
      formFields1 = [];
    }
  }
  first = getFormFields;
  importDefault = undefined;
  let obj1 = guild(stateFromStores[11]);
  importDefault = obj1.useInitialVerification(guild.id);
  const tmp6 = importDefault(stateFromStores[12])(() => {
    if (guild.verificationLevel === _undefined3.VERY_HIGH) {
      let phone;
      if (tmp6 != null) {
        phone = tmp6.phone;
      }
      let tmp5 = null;
      if (!phone) {
        let obj = { field_type: null, platform: null };
        obj[0] = guild(stateFromStores[13]).VerificationFormFieldTypes.VERIFICATION;
        obj[1] = guild(stateFromStores[13]).UserVerificationFieldPlatforms.PHONE;
        tmp5 = obj;
      }
      obj = tmp5;
    } else {
      obj = { field_type: null, platform: null };
      obj[0] = guild(stateFromStores[13]).VerificationFormFieldTypes.VERIFICATION;
      obj[1] = guild(stateFromStores[13]).UserVerificationFieldPlatforms.EMAIL;
    }
    return obj;
  });
  importDefault = tmp6;
  let obj2 = guild(stateFromStores[14]);
  let items = [c7];
  const items1 = [guild.id];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.get(guild), items1);
  let obj3 = React;
  let formFields;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  memo = React.useMemo(() => {
    let someResult;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        someResult = formFields.some((field_type) => field_type.field_type !== callback(table[13]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  React = obj3.useRef(getFormFields);
  const effect = obj3.useEffect(() => {
    Button.current = first;
  });
  if (!memo) {
    if (null != tmp6) {
      const items3 = [tmp6];
      let formFields1;
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      if (formFields1 == null) {
        formFields1 = [];
      }
      HermesBuiltin.arraySpread(formFields1, 1);
    }
    const tmp16 = first(tmp11(items3), 2);
    c6 = tmp17;
    const items4 = [stateFromStores];
    const effect1 = obj3.useEffect(() => {
      if (null != stateFromStores) {
        _undefined(ref.current());
      }
    }, items4);
    const items5 = [tmp16[0], tmp16[1], stateFromStores, memo];
    const tmp19 = first(items5, 4);
    first = tmp19[0];
    React = tmp19[1];
    c6 = tmp21;
    c7 = tmp22;
    [tmp24, c8] = first(obj3.useState(false), 2);
    const tmp23 = first(obj3.useState(false), 2);
    [tmp26, c9] = first(obj3.useState(null), 2);
    const items6 = [onClose, tmp19[2]];
    const effect2 = obj3.useEffect(() => {
      if (c6 === c8) {
        if (stateFromStores != null) {
          tmp(false);
        }
      }
    }, items6);
    const items7 = [guild.verificationLevel, tmp19[3], userVerificationState, first];
    memo1 = obj3.useMemo(() => {
      let someResult;
      if (first != null) {
        someResult = obj.some((required) => !callback(table[15]).isValidFormResponse(required));
      }
      if (someResult) {
        return true;
      } else if (c7) {
        return false;
      } else {
        const verificationLevel = guild.verificationLevel;
        if (_undefined3.VERY_HIGH === verificationLevel) {
          return !memo[guild(undefined, stateFromStores[13]).UserVerificationFieldPlatforms.PHONE];
        } else {
          if (tmp4.HIGH !== verificationLevel) {
            if (tmp4.MEDIUM !== verificationLevel) {
              if (tmp4.LOW !== verificationLevel) {
                const NONE = tmp4.NONE;
                return false;
              }
            }
          }
          const tmp8 = memo[guild(undefined, stateFromStores[13]).UserVerificationFieldPlatforms.EMAIL];
          let tmp9 = !tmp8;
          if (!tmp8) {
            tmp9 = !memo[tmp6(undefined, tmp7[13]).UserVerificationFieldPlatforms.PHONE];
          }
          return tmp9;
        }
      }
      obj = first;
    }, items7);
    if (null == first) {
      return null;
    } else {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { rulesChannelId: null, formFields: null, onChange: null, verification: null };
      obj[0] = guild.rulesChannelId;
      obj[1] = first;
      obj[2] = function handleFormChange(arg0, response) {
        if (null != first) {
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(0, arg0), 0);
          const obj = {};
          const merged = Object.assign(tmp3);
          obj.response = response;
          items[arraySpreadResult] = obj;
          arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(arg0 + 1), arraySpreadResult + 1);
          ref(items);
        }
      };
      obj[3] = userVerificationState;
      const items8 = [memo1(tmp5(tmp3[17]), obj), , ];
      let tmp32Result = null;
      if (null != tmp26) {
        obj1 = { style: null, children: null };
        obj1[0] = tmp.error;
        obj1[1] = tmp26;
        tmp32Result = tmp32(tmp5(tmp3[18]), obj1);
      }
      items8[1] = tmp32Result;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.submitButton;
      obj3 = { variant: "primary", size: "md", grow: true, text: null, loading: null, disabled: null, onPress: null };
      let intl = tmp2(tmp3[9]).intl;
      obj3[3] = intl.string(tmp2(tmp3[9]).t["r8/DT+"]);
      obj3[4] = tmp24;
      obj3[5] = tmp24;
      obj3[6] = function handleSubmit() {
        const self = this;
        const apply = _handleSubmit.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj2[1] = memo1(tmp2(tmp3[19]).Button, obj3);
      items8[2] = memo1(c6, obj2);
      obj[1] = items8;
      return _handleSubmit(c6, obj);
    }
    const tmp25 = first(obj3.useState(null), 2);
  }
  let formFields2;
  if (stateFromStores != null) {
    formFields2 = stateFromStores.formFields;
  }
  if (formFields2 == null) {
    formFields2 = [];
  }
};