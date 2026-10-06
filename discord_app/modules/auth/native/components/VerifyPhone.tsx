// discord_app/modules/auth/native/components/VerifyPhone.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import RegistrationUIStore from "../RegistrationUIStore.tsx";
import RegistrationBailoutButtonDefault from "RegistrationBailoutButton.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import RegistrationConstants from "../../RegistrationConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2, c3;

let c9;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_6 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({
  authStateToRegisterTransitionStep: metroImportDefault,
  RegisterTransitionSteps: metroImportAll,
  RegistrationTransitionActionTypes: c9,
} = RegistrationConstants);
const Links = Constants.Links;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPhoneTokenReceived) => {
      let description;
      let onBail;
      let onClose;
      let phone;
      let sourceState;
      let title;
      let tmp12;
      let tmp13;
      let tmp7;
      const tmp = onClose;
      let obj = phone(onClose[8]);
      const cResult = obj.c(23);
      ({ title, description, phone } = onPhoneTokenReceived);
      onPhoneTokenReceived = onPhoneTokenReceived.onPhoneTokenReceived;
      onClose = onPhoneTokenReceived.onClose;
      ({ onBail, sourceState } = onPhoneTokenReceived);
      const tmp3 = _slicedToArray(react.useState(false), 2);
      [r10023, _asyncToGenerator] = tmp3;
      const tmp4 = _slicedToArray(react.useState(null), 2);
      [r10029, _slicedToArray] = tmp4;
      const tmp5 = _slicedToArray(react.useState(false), 2);
      [r10034, react] = tmp5;
      closure_6 = react.useRef(false);
      const context = react.useContext(phone(onClose[9]).TrackRegistrationContext);
      if (cResult[0] !== sourceState) {
        const tmp9 = context(sourceState);
        cResult[0] = sourceState;
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      onPhoneTokenReceived(tmp[10])(tmp7);
      const tmp10 = onPhoneTokenReceived;
      if (cResult[2] !== context) {
        const fn = function y() {
          if (closure_6()) {
            const obj = { step: metroImportAll.PHONE_VERIFICATION, actionType: constants.VIEWED };
            context(obj);
          }
        };
        const items = [context];
        cResult[2] = context;
        cResult[3] = fn;
        cResult[4] = items;
        tmp13 = items;
        tmp12 = fn;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const effect = react.useEffect(tmp12, tmp13);
      if (cResult[5] !== onClose) {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
        cResult[5] = onClose;
        cResult[6] = R;
      } else {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
      }
      tmp10(tmp[11])(R);
      if (cResult[7] === onPhoneTokenReceived) {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
      }
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let closure_3;
        let obj5;
        closure_0 = arg0;
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
          try {
            let token;
            let closure_1;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                token = undefined;
                closure_1 = undefined;
                tmp41(true);
                c4 = 1;
                if (closure_2_6()) {
                  const obj4 = { step: constants.PHONE_VERIFICATION, actionType: constants2.SUBMITTED };
                  context(obj4);
                }
                c5 = 2;
                c6 = 1;
                const obj6 = { value: obj5.verifyPhone(closure_0, closure_0, false), done: false };
                obj5 = onPhoneTokenReceived(onClose[12]);
                return obj6;
              }
            } else {
              if (1 === c5) {
                c4 = 0;
                closure_1 = tmp41;
                tmp41(false);
                if (closure_2_6()) {
                  const obj7 = {
                    step: constants.PHONE_VERIFICATION,
                    actionType: constants2.RESPONSE_ERROR,
                    details: ["code"],
                  };
                  context(obj7);
                }
                const body = closure_1.body;
                let message;
                const tmp25 = c4;
                if (body != null) {
                  message = body.message;
                }
                if (!message) {
                  const intl = closure_0(onClose[13]).intl;
                  const obj8 = { statusPageURL: constants3.STATUS };
                  message = intl.format(closure_0(onClose[13]).t.aTVNes, obj8);
                }
                tmp25(message);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                token = value.token;
                c6.current = true;
                closure_1(token);
                c4 = 0;
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp41) {
            if (0 === c4) {
              c6 = 3;
              throw tmp41;
            } else {
              c5 = 1;
            }
          }
        }
      });
      const fn2 = function () {
        return closure_0(...arguments);
      };
      cResult[7] = onPhoneTokenReceived;
      cResult[8] = phone;
      cResult[9] = context;
      cResult[10] = fn2;
    }
  : (phone) => {
      let _undefined;
      let c5;
      let c6;
      let closure_4;
      let description;
      let first;
      let onBail;
      let sourceState;
      let title;
      let tmp4;
      let tmp6;
      phone = phone.phone;
      const onPhoneTokenReceived = phone.onPhoneTokenReceived;
      ({ onClose: dependencyMap, onBail } = phone);
      _slicedToArray = undefined;
      react = undefined;
      c6 = undefined;
      ({ title, description, sourceState } = phone);
      [first, _slicedToArray] = react.useState(false);
      const tmp3 = _slicedToArray(react.useState(null), 2);
      [tmp4, c5] = tmp3;
      [tmp6, c6] = _slicedToArray(react.useState(false), 2);
      const tmp5 = _slicedToArray(react.useState(false), 2);
      let closure_7 = react.useRef(false);
      const context = react.useContext(phone(15903).TrackRegistrationContext);
      const tmp8 = onPhoneTokenReceived(15922);
      tmp8(closure_7(sourceState));
      const items = [context];
      const effect = react.useEffect(() => {
        if (_undefined()) {
          const obj = { step: metroImportAll.PHONE_VERIFICATION, actionType: onCodeEntered.VIEWED };
          context(obj);
        }
      }, items);
      const tmp11 = onPhoneTokenReceived(5597)(() => {
        let ref;
        return () => {
          let tmpResult;
          if (closure_1_2 != null) {
            tmpResult = tmp(ref.current);
          }
          return tmpResult;
        };
      });
      const useCallback = react.useCallback;
      onBail(function* (arg0) {
        let obj5;
        let v0;
        closure_0 = arg0;
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
          try {
            let closure_1;
            let token;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                closure_1 = tmp4;
                token = undefined;
                v0(true);
                v0 = 1;
                if (_undefined()) {
                  const obj4 = { step: constants.PHONE_VERIFICATION, actionType: constants2.SUBMITTED };
                  constants(obj4);
                }
                c5 = 2;
                c6 = 1;
                const obj6 = { value: obj5.verifyPhone(closure_0, closure_0, false), done: false };
                obj5 = onPhoneTokenReceived(dependencyMap[12]);
                return obj6;
              }
            } else {
              if (1 === c5) {
                v0 = 0;
                closure_1 = closure_3;
                v0(false);
                if (_undefined()) {
                  const obj7 = {
                    step: constants.PHONE_VERIFICATION,
                    actionType: constants2.RESPONSE_ERROR,
                    details: ["code"],
                  };
                  constants(obj7);
                }
                const body = closure_1.body;
                let message;
                const tmp25 = c5;
                if (body != null) {
                  message = body.message;
                }
                if (!message) {
                  const intl = closure_0(dependencyMap[13]).intl;
                  const obj8 = { statusPageURL: constants3.STATUS };
                  message = intl.format(closure_0(dependencyMap[13]).t.aTVNes, obj8);
                }
                tmp25(message);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                token = value.token;
                closure_1_7.current = true;
                closure_1(token);
                v0 = 0;
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp41) {
            closure_3 = tmp41;
            if (0 === v0) {
              c6 = 3;
              throw tmp41;
            } else {
              c5 = 1;
            }
          }
        }
      });
      const items1 = [phone, onPhoneTokenReceived, context];
      const onCodeEntered = useCallback(function () {
        return closure_0(...arguments);
      }, items1);
      const useCallback2 = react.useCallback;
      let closure_0 = onBail(function* (arg0) {
        closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp3;
                _undefined(true);
                c2 = 1;
                c3 = 1;
                const obj4 = { value: onCodeEntered(closure_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              _undefined(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp11) {
            c3 = 3;
            throw tmp11;
          }
        }
      });
      const items2 = [onCodeEntered];
      const callback2 = useCallback2(function () {
        return closure_0(...arguments);
      }, items2);
      onPhoneTokenReceived(6583)(callback2);
      const items3 = [onBail];
      const memo = react.useMemo(() => {
        let tmp2 = null;
        if (null != onBail) {
          tmp2 = jsx(RegistrationBailoutButtonDefault, { onBail: tmp });
        }
        return tmp2;
      }, items3);
      onPhoneTokenReceived(6584);
      return (
        <tmp16
          title={title}
          description={description}
          error={tmp4}
          onCodeEntered={onCodeEntered}
          codeType={phone(6584).CodeType.NUMERIC}
          footer={memo}
          disabled={tmp6}
          loading={first}
          disableKeyboardAvoidingView
        />
      );
    };
const result = size.fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default tmp3;
