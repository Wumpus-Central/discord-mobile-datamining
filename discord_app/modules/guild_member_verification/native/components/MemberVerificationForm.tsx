// === Module 5901: MemberVerificationForm ===

// Module 5901 (MemberVerificationForm)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4653 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5877 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_8 = fn(5877).NO_MEMBER_VERIFICATION_FORM;
const VerificationLevels = fn(1074).VerificationLevels;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let closure_12 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 }, submitButton: { marginTop: 12, marginBottom: 12 }, error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  noop = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let memo1;
  closure_11 = async function _handleSubmit() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            phone = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            if (null != first) {
              if (memo1) {
                (function showIncompleteToast() {
                  const obj2 = { key: "MEMBER_VERIFICATION_FORM_INCOMPLETE", content: null, icon: null };
                  const intl = closure_1_0(1115).intl;
                  obj2.content = intl.string(closure_1_0(1115).t.StC497);
                  obj2.icon = closure_1_1(5902);
                  closure_1_1(4523).open(obj2);
                })();
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                VerificationLevels(null);
                closure_2_8(true);
                guild = View;
                if (View == null) {
                  guild = closure_1_8;
                }
                const obj6 = {};
                const merged = Object.assign(guild);
                obj6.formFields = guild(tmp3[15]).removeInternalFields(tmp60);
                c4 = 1;
                const obj3 = guild(tmp3[15]);
                c5 = 2;
                c6 = 1;
                const obj7 = { value: phone(tmp3[16]).submitVerificationForm(id.id, obj6), done: false };
                return obj7;
              }
            } else {
              c6 = 3;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          let body;
          if (tmp52 != null) {
            body = tmp52.body;
          }
          closure_129_1 = body;
          let version;
          if (closure_129_1 != null) {
            const errors = closure_129_1.errors;
            if (errors != null) {
              version = errors.version;
            }
          }
          if (null == version) {
            let form_fields;
            if (closure_129_1 != null) {
              const errors2 = closure_129_1.errors;
              if (errors2 != null) {
                form_fields = errors2.form_fields;
              }
            }
            if (null == form_fields) {
              if (closure_129_1 != null) {
                let message = closure_129_1.message;
              }
            }
            closure_130_9(message);
            closure_130_8(false);
          }
          let intl = guild(tmp3[9]).intl;
          message = intl.string(guild(tmp3[9]).t.PD09Sl);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0 = value;
          closure_130_8(false);
          if (closure_130_1 != null) {
            tmp12(closure_129_0);
          }
          if (closure_130_2 != null) {
            closure_130_2(true);
          }
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp52) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp52;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp = closure_12();
  const userVerificationState = guild(onClose[11]).useUserVerificationState();
  closure_129_3 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  function getFormFields() {
    if (!userVerificationState) {
      if (null != phone) {
        const items = [tmp];
        let formFields;
        if (onClose != null) {
          formFields = onClose.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        HermesBuiltin.arraySpread(formFields, 1);
      }
      return items;
    }
    let formFields1;
    if (onClose != null) {
      formFields1 = onClose.formFields;
    }
    if (formFields1 == null) {
      formFields1 = [];
    }
  }
  closure_129_4 = getFormFields;
  const id = guild.id;
  closure_129_0 = id;
  closure_130_0 = guild;
  let obj = guild(onClose[11]);
  closure_130_1 = guild(onClose[11]).useInitialVerification(guild.id);
  const tmp6 = require("useInitialValue")(() => {
    if (guild.verificationLevel === VerificationLevels.VERY_HIGH) {
      phone = undefined;
      if (phone != null) {
        phone = phone.phone;
      }
      let tmp5 = null;
      if (!phone) {
        const obj2 = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
        tmp5 = obj2;
      }
      let obj = tmp5;
    } else {
      obj = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    }
    return obj;
  });
  closure_129_1 = tmp6;
  let obj2 = guild(onClose[11]);
  let items = [closure_7];
  const items1 = [id];
  const stateFromStores = guild(onClose[14]).useStateFromStores(items, () => MemberVerificationFormStore.get(guild), items1);
  closure_129_2 = stateFromStores;
  let formFields;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  const memo = noop.useMemo(() => {
    let someResult;
    if (onClose != null) {
      const formFields = onClose.formFields;
      if (formFields != null) {
        someResult = formFields.some((field_type) => field_type.field_type !== guild(onClose[13]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  closure_129_3 = memo;
  closure_129_5 = obj4.useRef(getFormFields);
  const effect = obj4.useEffect(() => {
    closure_5.current = current;
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
    const tmp16 = formFields(tmp11(items3), 2);
    closure_129_6 = tmp17;
    const items4 = [stateFromStores];
    const effect1 = obj4.useEffect(() => {
      if (null != onClose) {
        closure_6(ref.current());
      }
    }, items4);
    const items5 = [tmp16[0], tmp16[1], stateFromStores, memo];
    const tmp19 = formFields(items5, 4);
    formFields = tmp19[0];
    noop = tmp19[1];
    closure_6 = tmp21;
    closure_7 = tmp22;
    [tmp24, c8] = formFields(obj4.useState(false), 2);
    const tmp23 = formFields(obj4.useState(false), 2);
    [tmp26, c9] = formFields(obj4.useState(null), 2);
    const items6 = [onClose, tmp19[2]];
    const effect2 = obj4.useEffect(() => {
      if (closure_6 === closure_8) {
        if (onClose != null) {
          tmp(false);
        }
      }
    }, items6);
    const items7 = [guild.verificationLevel, tmp19[3], userVerificationState, formFields];
    memo1 = obj4.useMemo(() => {
      let someResult;
      if (first != null) {
        someResult = first.some((item) => !guild(onClose[15]).isValidFormResponse(item));
      }
      if (someResult) {
        return true;
      } else if (closure_7) {
        return false;
      } else {
        const verificationLevel = guild.verificationLevel;
        if (VerificationLevels.VERY_HIGH === verificationLevel) {
          return !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE];
        } else {
          if (VerificationLevels.HIGH !== verificationLevel) {
            if (VerificationLevels.MEDIUM !== verificationLevel) {
              if (VerificationLevels.LOW !== verificationLevel) {
                const NONE = VerificationLevels.NONE;
                return false;
              }
            }
          }
          const tmp8 = userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL];
          let tmp9 = !tmp8;
          if (!tmp8) {
            tmp9 = !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE];
          }
          return tmp9;
        }
      }
    }, items7);
    if (null == formFields) {
      return null;
    } else {
      let obj5 = { style: tmp.container, children: null };
      let obj6 = {
        rulesChannelId: guild.rulesChannelId,
        formFields,
        onChange: function handleFormChange(arg0, response) {
              if (null != first) {
                const items = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(first.slice(0, arg0), 0);
                const obj = {};
                const merged = Object.assign(tmp3);
                obj.response = response;
                items[arraySpreadResult] = obj;
                HermesBuiltin.arraySpread(first.slice(arg0 + 1), arraySpreadResult + 1);
                ref(items);
              }
            },
        verification: userVerificationState
      };
      const items8 = [memo1(require("MemberVerificationFormRenderer"), obj6), , ];
      let tmp32Result = null;
      if (null != tmp26) {
        let obj7 = { style: tmp.error, children: tmp26 };
        tmp32Result = tmp32(require("FreeFormErrorLabel"), obj7);
      }
      items8[1] = tmp32Result;
      const obj8 = { style: tmp.submitButton, children: null };
      const obj9 = { variant: "primary", size: "md", grow: true, text: null, loading: null, disabled: null, onPress: null };
      let intl = tmp2(onClose[9]).intl;
      obj9.text = intl.string(tmp2(onClose[9]).t["r8/DT+"]);
      obj9.loading = tmp24;
      obj9.disabled = tmp24;
      obj9.onPress = function handleSubmit() {
        const self = this;
        const apply = closure_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj8.children = memo1(tmp2(onClose[19]).Button, obj9);
      items8[2] = memo1(closure_6, obj8);
      obj5.children = items8;
      return closure_11(closure_6, obj5);
    }
    const tmp25 = formFields(obj4.useState(null), 2);
  }
  let formFields2;
  if (stateFromStores != null) {
    formFields2 = stateFromStores.formFields;
  }
  if (formFields2 == null) {
    formFields2 = [];
  }
  let obj3 = guild(onClose[14]);
};