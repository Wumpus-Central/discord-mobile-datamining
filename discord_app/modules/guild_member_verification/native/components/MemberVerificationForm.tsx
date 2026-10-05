// === Module 5983: MemberVerificationForm ===

// Module 5983 (MemberVerificationForm)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4702 */;
import MemberVerificationFormStore2 from "MemberVerificationFormStore" /* 5963 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const MemberVerificationFormStore = MemberVerificationFormStore2;
let _require, c5, c6, id, importDefault;

let c10;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
let closure_8 = MemberVerificationFormStore2.NO_MEMBER_VERIFICATION_FORM;
const VerificationLevels = Constants.VerificationLevels;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 }, submitButton: { marginTop: 12, marginBottom: 12 }, error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let verificationLevel;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(3);
  let obj2 = require("MemberVerificationModalHooks");
  const initialVerification = obj2.useInitialVerification(id.id);
  if (cResult[0] === id.verificationLevel) {
    let tmp7;
    let tmp5 = null;
    let phone;
    const tmp4 = cResult[1];
    if (initialVerification != null) {
      phone = initialVerification.phone;
    }
    if (tmp4 === phone) {
      tmp7 = cResult[2];
    }
    return initialVerification(5984)(tmp7);
  }
  cResult[0] = id.verificationLevel;
  let phone1;
  if (initialVerification != null) {
    phone1 = initialVerification.phone;
  }
  const fn = function t() {
    let obj;
    if (verificationLevel.verificationLevel === VerificationLevels.VERY_HIGH) {
      let phone;
      if (initialVerification != null) {
        phone = initialVerification.phone;
      }
      let tmp5 = null;
      if (!phone) {
        tmp5 = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
        const obj2 = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      }
      obj = tmp5;
    } else {
      obj = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    }
    return obj;
  };
  cResult[1] = phone1;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((id) => {
  let verificationLevel;
  _require = id;
  let obj = require("MemberVerificationModalHooks");
  importDefault = obj.useInitialVerification(id.id);
  return useInitialValueDefault(() => {
    let obj;
    if (verificationLevel.verificationLevel === VerificationLevels.VERY_HIGH) {
      phone = undefined;
      if (phone != null) {
        phone = phone.phone;
      }
      let tmp5 = null;
      if (!phone) {
        tmp5 = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
        const obj2 = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE };
      }
      obj = tmp5;
    } else {
      obj = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION, platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL };
    }
    return obj;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_6;
  let current;
  let first;
  let ref;
  let stateFromStores;
  let tmp12;
  let tmp25;
  let tmp26;
  let tmp7;
  let tmp8;
  const obj = id(stateFromStores[12]);
  const cResult = obj.c(21);
  const tmp = id;
  id = id.id;
  const tmp4 = closure_13(id);
  let closure_1 = tmp4;
  const tmp2 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MemberVerificationFormStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      return MemberVerificationFormStore.get(id);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[16]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let formFields1;
  const tmp10 = cResult[4];
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  if (tmp10 !== formFields1) {
    let someResult;
    if (stateFromStores != null) {
      let formFields = stateFromStores.formFields;
      if (formFields != null) {
        someResult = formFields.some((field_type) => field_type.field_type !== id(stateFromStores[14]).VerificationFormFieldTypes.TERMS);
      }
    }
    let formFields2;
    if (stateFromStores != null) {
      formFields2 = stateFromStores.formFields;
    }
    cResult[4] = formFields2;
    cResult[5] = someResult;
    tmp12 = someResult;
  } else {
    tmp12 = cResult[5];
  }
  let closure_3 = tmp12;
  if (cResult[6] === tmp12) {
    if (cResult[7] === tmp4) {
      let tmp17;
      let tmp19;
      let tmp21;
      let tmp28;
      let formFields3;
      const tmp15 = cResult[8];
      if (stateFromStores != null) {
        formFields3 = stateFromStores.formFields;
      }
      if (tmp15 === formFields3) {
        tmp17 = cResult[9];
      }
      _slicedToArray = tmp17;
      react = react.useRef(tmp17);
      if (cResult[10] !== tmp17) {
        const fn2 = function _() {
          ref.current = current;
        };
        cResult[10] = tmp17;
        cResult[11] = fn2;
        tmp19 = fn2;
      } else {
        tmp19 = cResult[11];
      }
      const effect = obj3.useEffect(tmp19);
      if (cResult[12] !== tmp17) {
        const tmp17Result = tmp17();
        cResult[12] = tmp17;
        cResult[13] = tmp17Result;
        tmp21 = tmp17Result;
      } else {
        tmp21 = cResult[13];
      }
      [tmp25, tmp26] = react.useState(tmp21);
      View = tmp26;
      _slicedToArray(react.useState(tmp21), 2);
      if (cResult[14] !== stateFromStores) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              tmp26(ref.current());
            }
          }
        }
        const items2 = [stateFromStores];
        cResult[14] = stateFromStores;
        cResult[15] = R;
        cResult[16] = items2;
        tmp28 = items2;
      } else {
        class R {
          constructor() {
            if (null != stateFromStores) {
              tmp26(ref.current());
            }
          }
        }
        tmp28 = cResult[16];
      }
      const effect1 = obj3.useEffect(R, tmp28);
      if (cResult[17] === tmp12) {
        class R {
          constructor() {
            if (null != stateFromStores) {
              tmp26(ref.current());
            }
          }
        }
      }
      const items3 = [tmp25, tmp26, stateFromStores, tmp12];
      cResult[17] = tmp12;
      cResult[18] = tmp25;
      cResult[19] = stateFromStores;
      cResult[20] = items3;
    }
  }
  cResult[6] = tmp12;
  cResult[7] = tmp4;
  if (stateFromStores != null) {
    class R {
      constructor() {
        if (null != stateFromStores) {
          tmp26(ref.current());
        }
      }
    }
  }
  class E {
    constructor() {
      if (!closure_3) {
        let items;
        if (null != closure_1) {
          items = [tmp3];
          let formFields;
          if (stateFromStores != null) {
            formFields = stateFromStores.formFields;
          }
          if (formFields == null) {
            formFields = [];
          }
          HermesBuiltin.arraySpread(items, formFields, 1);
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
  }
  cResult[8] = undefined;
  cResult[9] = E;
  tmp17 = E;
}) : ((id) => {
  let ref;
  let stateFromStores;
  function getFormFields() {
    if (!memo) {
      let items;
      if (null != closure_1) {
        items = [tmp3];
        let formFields;
        if (stateFromStores != null) {
          formFields = stateFromStores.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        HermesBuiltin.arraySpread(items, formFields, 1);
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
  id = id.id;
  const tmp2 = closure_13(id);
  let closure_1 = tmp2;
  let items = [MemberVerificationFormStore];
  const items1 = [id];
  const obj = id(stateFromStores[16]);
  stateFromStores = obj.useStateFromStores(items, () => MemberVerificationFormStore.get(id), items1);
  let formFields;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  const memo = useMemo(() => {
    let someResult;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        someResult = formFields.some((field_type) => field_type.field_type !== id(stateFromStores[14]).VerificationFormFieldTypes.TERMS);
      }
    }
    return someResult;
  }, items2);
  react = obj2.useRef(getFormFields);
  const effect = obj2.useEffect(() => {
    ref.current = getFormFields;
  });
  if (!memo) {
    let items3;
    if (null != tmp2) {
      items3 = [tmp2];
      let formFields1;
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      if (formFields1 == null) {
        formFields1 = [];
      }
      HermesBuiltin.arraySpread(items3, formFields1, 1);
    }
    const tmp12 = getFormFields(tmp7(items3), 2);
    let closure_6 = tmp14;
    const items4 = [stateFromStores];
    const first = tmp12[0];
    const effect1 = obj2.useEffect(() => {
      if (null != stateFromStores) {
        closure_6(ref.current());
      }
    }, items4);
    const items5 = [first, tmp12[1], stateFromStores, memo];
    return items5;
  }
  let formFields2;
  if (stateFromStores != null) {
    formFields2 = stateFromStores.formFields;
  }
  if (formFields2 == null) {
    formFields2 = [];
  }
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationForm.tsx");

export default function MemberVerificationForm(guild) {
  let Button;
  let _undefined;
  let _undefined2;
  let c8;
  let c9;
  let closure_5;
  let intl;
  let items2;
  let obj6;
  let onClose;
  let tmp10;
  let tmp12;
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  let formFields;
  c8 = undefined;
  c9 = undefined;
  let obj = function _handleSubmit() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let obj3;
      let obj4;
      function showIncompleteToast() {
        let intl;
        obj = { key: "MEMBER_VERIFICATION_FORM_INCOMPLETE", content: intl.string(closure_1_0(closure_1_2[9]).t.StC497), icon: closure_1_1(closure_1_2[10]) };
        const open = closure_1_1(closure_1_2[8]).open;
        closure_1_1(closure_1_2[8]);
        intl = closure_1_0(closure_1_2[9]).intl;
        open(obj);
      }
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        let body;
        try {
          let closure_2;
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
              closure_2 = tmp;
              let closure_1 = tmp4;
              id = undefined;
              body = undefined;
              if (null != formFields) {
                if (memo) {
                  showIncompleteToast();
                  c6 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  _undefined2(null);
                  _undefined(true);
                  id = closure_2_6;
                  if (closure_2_6 == null) {
                    id = closure_1_8;
                  }
                  const obj6 = { formFields: obj3.removeInternalFields(tmp56) };
                  const merged = Object.assign(id);
                  obj3 = id(closure_2[17]);
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: obj4.submitVerificationForm(id.id, obj6), done: false };
                  obj4 = closure_1(closure_2[18]);
                  return obj7;
                }
              }
            }
          } else if (1 === c5) {
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
              let message;
              let form_fields;
              if (body != null) {
                const errors2 = body.errors;
                if (errors2 != null) {
                  form_fields = errors2.form_fields;
                }
              }
              if (null == form_fields) {
                if (body != null) {
                  message = body.message;
                }
              }
              closure_130_9(message);
              closure_130_8(false);
            }
            let intl = id(closure_2[9]).intl;
            message = intl.string(id(closure_2[9]).t.PD09Sl);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            id = value;
            closure_130_8(false);
            if (closure_130_1 != null) {
              tmp9(id);
            }
            if (closure_130_2 != null) {
              closure_130_2(true);
            }
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp49) {
          body = tmp49;
          if (0 === c4) {
            c6 = 3;
            throw tmp49;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  obj = guild(onClose[13]);
  const userVerificationState = obj.useUserVerificationState();
  const tmp5 = formFields(closure_14(guild), 4);
  formFields = tmp5[0];
  react = tmp5[1];
  let closure_6 = tmp7;
  let tmp8 = tmp5[3];
  let closure_7 = tmp8;
  const tmp9 = formFields(react.useState(false), 2);
  [tmp10, c8] = tmp9;
  [tmp12, c9] = formFields(react.useState(null), 2);
  let items = [onClose, tmp5[2]];
  const tmp11 = formFields(react.useState(null), 2);
  const effect = react.useEffect(() => {
    if (closure_6 === closure_8) {
      if (onClose != null) {
        tmp(false);
      }
    }
  }, items);
  const items1 = [guild.verificationLevel, tmp8, userVerificationState, formFields];
  const memo = react.useMemo(() => {
    let someResult;
    if (first != null) {
      someResult = first.some((item) => {
        obj = guild(onClose[17]);
        return !obj.isValidFormResponse(item);
      });
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
        const tmp8 = !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL] && !userVerificationState[MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE];
        return tmp8;
      }
    }
  }, items1);
  if (null == formFields) {
    return null;
  } else {
    let obj2 = { style: tmp.container, children: items2 };
    let obj3 = {
      rulesChannelId: guild.rulesChannelId,
      formFields,
      onChange: function handleFormChange(arg0, response) {
          if (null != first) {
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(items, first.slice(0, arg0), 0);
            obj = { response };
            const merged = Object.assign(tmp4);
            items[arraySpreadResult] = obj;
            HermesBuiltin.arraySpread(items, first.slice(arg0 + 1), arraySpreadResult + 1);
            closure_5(items);
          }
        },
      verification: userVerificationState
    };
    items2 = [memo(require("MemberVerificationFormRenderer"), obj3), , ];
    let tmp18Result = null;
    const tmp16 = obj;
    if (null != tmp12) {
      let obj4 = { style: tmp.error, children: tmp12 };
      tmp18Result = tmp18(require("FreeFormErrorLabel"), obj4);
    }
    items2[1] = tmp18Result;
    let obj5 = { style: tmp.submitButton, children: tmp18(Button, obj6) };
    obj6 = {
      variant: "primary",
      size: "md",
      grow: true,
      text: intl.string(tmp2(onClose[9]).t["r8/DT+"]),
      loading: tmp10,
      disabled: tmp10,
      onPress: function handleSubmit() {
          return obj(...arguments);
        }
    };
    Button = tmp2(onClose[21]).Button;
    intl = tmp2(onClose[9]).intl;
    items2[2] = memo(closure_6, obj5);
    return tmp16(closure_6, obj2);
  }
};