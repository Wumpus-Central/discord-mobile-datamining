// discord_app/modules/verification/native/components/ConfirmEmailChangeCode.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import ChangeEmailStore from "../../ChangeEmailStore.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let isChangeEmail, navigation;

const setEmailToken = ChangeEmailStore.setEmailToken;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isChangeEmail) => {
      let tmp = isChangeEmail;
      let obj = isChangeEmail(576);
      const cResult = obj.c(9);
      isChangeEmail = isChangeEmail.isChangeEmail;
      let obj2 = isChangeEmail(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === isChangeEmail) {
        let tmp5;
        let tmp7;
        let tmp11;
        let tmp10;
        let tmp9;
        let tmp15;
        if (cResult[1] === navigation) {
          tmp5 = cResult[2];
        }
        const tmp6 = globalThis;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let closure_0 = _asyncToGenerator(async (arg0) => {
            let c1;
            closure_0 = arg0;
            const obj3 = closure_0(c2[8]);
            await obj3.confirmEmailChange(closure_0);
            return value;
          });
          const fn2 = function () {
            return closure_0(...arguments);
          };
          cResult[3] = fn2;
          tmp7 = fn2;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          closure_0 = _asyncToGenerator(async () => {
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 1;
                    const obj2 = v3(closure_1_2[8]);
                    v3 = 1;
                    const obj5 = { value: obj2.sendConfirmationCode(), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp6) {
                v3 = 3;
                throw tmp6;
              }
            }
          });
          const fn3 = function () {
            return closure_0(...arguments);
          };
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["2x/2Uo"]);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.PDTjLN);
          cResult[4] = fn3;
          cResult[5] = stringResult;
          cResult[6] = stringResult1;
          tmp11 = stringResult1;
          tmp10 = stringResult;
          tmp9 = fn3;
        } else {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
          tmp11 = cResult[6];
        }
        if (cResult[7] !== tmp5) {
          const tmp18 = jsx(navigation(6096), {
            onFormSubmit: tmp7,
            onSuccess: tmp5,
            onResend: tmp9,
            headerText: tmp10,
            confirmButtonText: tmp11,
          });
          cResult[7] = tmp5;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        } else {
          tmp15 = cResult[8];
        }
        return tmp15;
      }
      const fn = function c(arg0) {
        let tmp = arg0;
        if (arg0 == null) {
          tmp = null;
        }
        setEmailToken(tmp);
        const push = navigation.push;
        const VerificationModalScenes = ConstantsIOS.VerificationModalScenes;
        if (isChangeEmail) {
          push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
        } else {
          push(VerificationModalScenes.ENTER_EMAIL);
        }
      };
      cResult[0] = isChangeEmail;
      cResult[1] = navigation;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (isChangeEmail) => {
      isChangeEmail = isChangeEmail.isChangeEmail;
      let obj = isChangeEmail(1490);
      navigation = obj.useNavigation();
      const items = [isChangeEmail, navigation];
      const callback = react.useCallback((arg0) => {
        let tmp = arg0;
        if (arg0 == null) {
          tmp = null;
        }
        setEmailToken(tmp);
        const push = navigation.push;
        const VerificationModalScenes = ConstantsIOS.VerificationModalScenes;
        if (isChangeEmail) {
          push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
        } else {
          push(VerificationModalScenes.ENTER_EMAIL);
        }
      }, items);
      navigation(6096);
      let closure_0 = _asyncToGenerator(async (arg0) => {
        let c1;
        closure_0 = arg0;
        const obj3 = closure_0(c2[8]);
        await obj3.confirmEmailChange(closure_0);
        return value;
      });
      const intl = isChangeEmail(1126).intl;
      const intl2 = isChangeEmail(1126).intl;
      return (
        <tmp3
          onFormSubmit={function () {
            return closure_0(...arguments);
          }}
          onSuccess={callback}
          onResend={_asyncToGenerator(async () => {
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    c1 = 1;
                    const obj2 = v3(dependencyMap[8]);
                    v3 = 1;
                    const obj5 = { value: obj2.sendConfirmationCode(), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp6) {
                v3 = 3;
                throw tmp6;
              }
            }
          })}
          headerText={intl.string(isChangeEmail(1126).t["2x/2Uo"])}
          confirmButtonText={intl2.string(isChangeEmail(1126).t.PDTjLN)}
        />
      );
    };
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default tmp2;
