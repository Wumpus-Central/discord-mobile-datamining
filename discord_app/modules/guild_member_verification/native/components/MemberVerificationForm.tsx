// discord_app/modules/guild_member_verification/native/components/MemberVerificationForm.tsx
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import MemberVerificationFormStore from "../../MemberVerificationFormStore.tsx";

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
let closure_8 = fn(5963).NO_MEMBER_VERIFICATION_FORM;
const VerificationLevels = fn(1085).VerificationLevels;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles({
  container: { flex: 1, flexDirection: "column", alignItems: "stretch", paddingHorizontal: 16, paddingVertical: 0 },
  submitButton: { marginTop: 12, marginBottom: 12 },
  error: { alignSelf: "center", paddingVertical: 16, fontSize: 16 },
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      _require = id;
      const cResult = require("c").c(3);
      let obj = require("c");
      const initialVerification = require("MemberVerificationModalHooks").useInitialVerification(id.id);
      if (cResult[0] === id.verificationLevel) {
        let phone;
        if (initialVerification != null) {
          phone = initialVerification.phone;
        }
        if (cResult[1] === phone) {
          let tmp6 = cResult[2];
        }
        return initialVerification(5984)(tmp6);
      }
      cResult[0] = id.verificationLevel;
      let phone1;
      if (initialVerification != null) {
        phone1 = initialVerification.phone;
      }
      const fn = function t() {
        if (verificationLevel.verificationLevel === VerificationLevels.VERY_HIGH) {
          let phone;
          if (initialVerification != null) {
            phone = initialVerification.phone;
          }
          let tmp5 = null;
          if (!phone) {
            const obj2 = {
              field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION,
              platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE,
            };
            tmp5 = obj2;
          }
          let obj = tmp5;
        } else {
          obj = {
            field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION,
            platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL,
          };
        }
        return obj;
      };
      cResult[1] = phone1;
      cResult[2] = fn;
      tmp6 = fn;
      let obj2 = require("MemberVerificationModalHooks");
    }
  : (id) => {
      _require = id;
      importDefault = require("MemberVerificationModalHooks").useInitialVerification(id.id);
      return useInitialValueDefault(() => {
        if (verificationLevel.verificationLevel === VerificationLevels.VERY_HIGH) {
          phone = undefined;
          if (phone != null) {
            phone = phone.phone;
          }
          let tmp5 = null;
          if (!phone) {
            const obj2 = {
              field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION,
              platform: MemberVerificationTypes.UserVerificationFieldPlatforms.PHONE,
            };
            tmp5 = obj2;
          }
          let obj = tmp5;
        } else {
          obj = {
            field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION,
            platform: MemberVerificationTypes.UserVerificationFieldPlatforms.EMAIL,
          };
        }
        return obj;
      });
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      const cResult = id(stateFromStores[12]).c(21);
      id = id.id;
      const tmp4 = closure_13(id);
      closure_1 = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [MemberVerificationFormStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = id(stateFromStores[12]);
      stateFromStores = id(stateFromStores[16]).useStateFromStores(first, tmp7, tmp8);
      let formFields1;
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      if (cResult[4] !== formFields1) {
        let someResult;
        if (stateFromStores != null) {
          let formFields = stateFromStores.formFields;
          if (formFields != null) {
            someResult = formFields.some(
              (field_type) => field_type.field_type !== id(stateFromStores[14]).VerificationFormFieldTypes.TERMS,
            );
          }
        }
        let formFields2;
        if (stateFromStores != null) {
          formFields2 = stateFromStores.formFields;
        }
        cResult[4] = formFields2;
        cResult[5] = someResult;
        let tmp11 = someResult;
      } else {
        tmp11 = cResult[5];
      }
      closure_3 = tmp11;
      if (cResult[6] === tmp11) {
        if (cResult[7] === tmp4) {
          let formFields3;
          if (stateFromStores != null) {
            formFields3 = stateFromStores.formFields;
          }
          if (cResult[8] === formFields3) {
            let tmp15 = cResult[9];
          }
          _slicedToArray = tmp15;
          noop = noop.useRef(tmp15);
          if (cResult[10] !== tmp15) {
            const fn2 = function _() {
              closure_5.current = current;
            };
            cResult[10] = tmp15;
            cResult[11] = fn2;
            let tmp17 = fn2;
          } else {
            tmp17 = cResult[11];
          }
          const effect = obj3.useEffect(tmp17);
          if (cResult[12] !== tmp15) {
            const tmp15Result = tmp15();
            cResult[12] = tmp15;
            cResult[13] = tmp15Result;
            let tmp19 = tmp15Result;
          } else {
            tmp19 = cResult[13];
          }
          [tmp23, tmp24] = noop.useState(tmp19);
          View = tmp24;
          if (cResult[14] !== stateFromStores) {
            class R {
              constructor() {
                if (null != closure_2) {
                  tmp = closure_6;
                  tmp2 = closure_5;
                  tmp3 = closure_6(closure_5.current());
                }
                return;
              }
            }
            const items2 = [stateFromStores];
            cResult[14] = stateFromStores;
            cResult[15] = R;
            cResult[16] = items2;
            let tmp26 = items2;
          } else {
            class R {
              constructor() {
                if (null != closure_2) {
                  tmp = closure_6;
                  tmp2 = closure_5;
                  tmp3 = closure_6(closure_5.current());
                }
                return;
              }
            }
            tmp26 = cResult[16];
          }
          const effect1 = obj3.useEffect(R, tmp26);
          if (cResult[17] === tmp11) {
            class R {
              constructor() {
                if (null != closure_2) {
                  tmp = closure_6;
                  tmp2 = closure_5;
                  tmp3 = closure_6(closure_5.current());
                }
                return;
              }
            }
          }
          const items3 = [tmp23, tmp24, stateFromStores, tmp11];
          cResult[17] = tmp11;
          cResult[18] = tmp23;
          cResult[19] = stateFromStores;
          cResult[20] = items3;
          const tmp22 = _slicedToArray(noop.useState(tmp19), 2);
        }
      }
      cResult[6] = tmp11;
      cResult[7] = tmp4;
      if (stateFromStores != null) {
        class R {
          constructor() {
            if (null != closure_2) {
              tmp = closure_6;
              tmp2 = closure_5;
              tmp3 = closure_6(closure_5.current());
            }
            return;
          }
        }
      }
      class E {
        constructor() {
          if (!closure_3) {
            tmp2 = null;
            if (null != closure_1) {
              items = [];
              items[0] = tmp;
              formFields = undefined;
              if (closure_2 != null) {
                formFields = closure_2.formFields;
              }
              if (formFields == null) {
                formFields = [];
              }
              num = 1;
              tmp3 = items;
              tmp4 = formFields;
              arraySpreadResult = HermesBuiltin.arraySpread(formFields, 1);
            }
            return items;
          }
          formFields1 = undefined;
          if (closure_2 != null) {
            formFields1 = closure_2.formFields;
          }
          if (formFields1 == null) {
            formFields1 = [];
          }
          return;
        }
      }
      cResult[8] = undefined;
      cResult[9] = E;
      tmp15 = E;
      const tmpResult = id(stateFromStores[16]);
    }
  : (id) => {
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
      id = id.id;
      const tmp = closure_13(id);
      closure_1 = tmp;
      let items = [MemberVerificationFormStore];
      const items1 = [id];
      stateFromStores = id(stateFromStores[16]).useStateFromStores(
        items,
        () => MemberVerificationFormStore.get(id),
        items1,
      );
      let formFields;
      if (stateFromStores != null) {
        formFields = stateFromStores.formFields;
      }
      const items2 = [formFields];
      const memo = noop.useMemo(() => {
        let someResult;
        if (stateFromStores != null) {
          const formFields = stateFromStores.formFields;
          if (formFields != null) {
            someResult = formFields.some(
              (field_type) => field_type.field_type !== id(stateFromStores[14]).VerificationFormFieldTypes.TERMS,
            );
          }
        }
        return someResult;
      }, items2);
      noop = obj2.useRef(getFormFields);
      const effect = obj2.useEffect(() => {
        closure_5.current = getFormFields;
      });
      if (!memo) {
        if (null != tmp) {
          const items3 = [tmp];
          let formFields1;
          if (stateFromStores != null) {
            formFields1 = stateFromStores.formFields;
          }
          if (formFields1 == null) {
            formFields1 = [];
          }
          HermesBuiltin.arraySpread(formFields1, 1);
        }
        const tmp11 = getFormFields(tmp6(items3), 2);
        closure_6 = tmp12;
        const items4 = [stateFromStores];
        const effect1 = obj2.useEffect(() => {
          if (null != stateFromStores) {
            closure_6(ref.current());
          }
        }, items4);
        const items5 = [tmp11[0], tmp11[1], stateFromStores, memo];
        return items5;
      }
      let formFields2;
      if (stateFromStores != null) {
        formFields2 = stateFromStores.formFields;
      }
      if (formFields2 == null) {
        formFields2 = [];
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/MemberVerificationForm.tsx",
);

export default function MemberVerificationForm(guild) {
  guild = guild.guild;
  ({ onSuccess: importDefault, onClose } = guild);
  let formFields;
  c8 = undefined;
  c9 = undefined;
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
        return { value: "IconComponent", done: null };
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
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            if (null != formFields) {
              if (memo) {
                (function showIncompleteToast() {
                  const obj2 = { key: "MEMBER_VERIFICATION_FORM_INCOMPLETE", content: null, icon: null };
                  const intl = closure_1_0(1126).intl;
                  obj2.content = intl.string(closure_1_0(1126).t.StC497);
                  obj2.icon = closure_1_1(4807);
                  closure_1_1(4568).open(obj2);
                })();
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else {
                VerificationLevels(null);
                closure_2_8(true);
                guild = View;
                if (View == null) {
                  guild = closure_1_8;
                }
                const obj6 = {};
                const merged = Object.assign(guild);
                obj6.formFields = guild(tmp3[17]).removeInternalFields(tmp60);
                c4 = 1;
                const obj3 = guild(tmp3[17]);
                c5 = 2;
                c6 = 1;
                const obj7 = { value: closure_1(tmp3[18]).submitVerificationForm(id.id, obj6), done: false };
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
  const userVerificationState = guild(onClose[13]).useUserVerificationState();
  const tmp5 = formFields(closure_14(guild), 4);
  formFields = tmp5[0];
  noop = tmp5[1];
  closure_6 = tmp7;
  closure_7 = tmp8;
  let obj = guild(onClose[13]);
  [tmp10, c8] = formFields(noop.useState(false), 2);
  let tmp9 = formFields(noop.useState(false), 2);
  [tmp12, c9] = formFields(noop.useState(null), 2);
  let items = [onClose, tmp5[2]];
  const effect = noop.useEffect(() => {
    if (closure_6 === closure_8) {
      if (onClose != null) {
        tmp(false);
      }
    }
  }, items);
  const items1 = [guild.verificationLevel, tmp5[3], userVerificationState, formFields];
  const memo = noop.useMemo(() => {
    let someResult;
    if (first != null) {
      someResult = first.some((item) => !guild(onClose[17]).isValidFormResponse(item));
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
  }, items1);
  if (null == formFields) {
    return null;
  } else {
    let obj2 = { style: tmp.container, children: null };
    let obj3 = {
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
          closure_5(items);
        }
      },
      verification: userVerificationState,
    };
    const items2 = [memo(require("MemberVerificationFormRenderer"), obj3), ,];
    let tmp18Result = null;
    if (null != tmp12) {
      const obj4 = { style: tmp.error, children: tmp12 };
      tmp18Result = tmp18(require("FreeFormErrorLabel"), obj4);
    }
    items2[1] = tmp18Result;
    let obj5 = { style: tmp.submitButton, children: null };
    let obj6 = { variant: "primary", size: "md", grow: true, text: null, loading: null, disabled: null, onPress: null };
    let intl = tmp2(onClose[9]).intl;
    obj6.text = intl.string(tmp2(onClose[9]).t["r8/DT+"]);
    obj6.loading = tmp10;
    obj6.disabled = tmp10;
    obj6.onPress = function handleSubmit() {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj5.children = memo(tmp2(onClose[21]).Button, obj6);
    items2[2] = memo(closure_6, obj5);
    obj2.children = items2;
    return closure_11(closure_6, obj2);
  }
  const tmp11 = formFields(noop.useState(null), 2);
}
