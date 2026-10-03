// discord_app/modules/verification/native/components/ConfirmEmailChangeCode.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const setEmailToken = fn(6009).setEmailToken;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (isChangeEmail) => {
      const cResult = isChangeEmail(576).c(9);
      isChangeEmail = isChangeEmail.isChangeEmail;
      let obj = isChangeEmail(576);
      const navigation = isChangeEmail(1490).useNavigation();
      if (cResult[0] === isChangeEmail) {
        if (cResult[1] === navigation) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          closure_129_0 = asyncGeneratorStep(async (arg0) => {
            await closure_0(c2[8]).confirmEmailChange(closure_0);
            return value;
          });
          const fn2 = function () {
            const self = this;
            const apply = isChangeEmail.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          cResult[3] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          closure_130_0 = asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
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
                    v3 = 1;
                    const obj5 = { value: v3(dependencyMap[8]).sendConfirmationCode(), done: false };
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
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp7) {
                v3 = tmp;
                throw tmp7;
              }
            }
          });
          const fn3 = function () {
            const self = this;
            const apply = isChangeEmail.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["2x/2Uo"]);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.PDTjLN);
          cResult[4] = fn3;
          cResult[5] = stringResult;
          cResult[6] = stringResult1;
          let tmp11 = stringResult1;
          let tmp10 = stringResult;
          let tmp9 = fn3;
        } else {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
          tmp11 = cResult[6];
        }
        if (cResult[7] !== tmp5) {
          let obj3 = {
            onFormSubmit: tmp7,
            onSuccess: tmp5,
            onResend: tmp9,
            headerText: tmp10,
            confirmButtonText: tmp11,
          };
          const tmp18 = jsx(navigation(6096), {
            onFormSubmit: tmp7,
            onSuccess: tmp5,
            onResend: tmp9,
            headerText: tmp10,
            confirmButtonText: tmp11,
          });
          cResult[7] = tmp5;
          cResult[8] = tmp18;
          let tmp15 = tmp18;
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
      const obj2 = isChangeEmail(1490);
    }
  : (isChangeEmail) => {
      isChangeEmail = isChangeEmail.isChangeEmail;
      const navigation = isChangeEmail(1490).useNavigation();
      const items = [isChangeEmail, navigation];
      const callback = noop.useCallback((arg0) => {
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
      const obj2 = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
      let obj = isChangeEmail(1490);
      closure_129_0 = asyncGeneratorStep(async (arg0) => {
        await closure_0(c2[8]).confirmEmailChange(closure_0);
        return value;
      });
      obj2.onFormSubmit = function () {
        const self = this;
        const apply = isChangeEmail.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj2.onSuccess = callback;
      obj2.onResend = asyncGeneratorStep(async () => {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
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
                v3 = 1;
                const obj5 = { value: v3(dependencyMap[8]).sendConfirmationCode(), done: false };
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
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp7) {
            v3 = tmp;
            throw tmp7;
          }
        }
      });
      const intl = isChangeEmail(1126).intl;
      obj2.headerText = intl.string(isChangeEmail(1126).t["2x/2Uo"]);
      const intl2 = isChangeEmail(1126).intl;
      obj2.confirmButtonText = intl2.string(isChangeEmail(1126).t.PDTjLN);
      return jsx(navigation(6096), {
        onFormSubmit: null,
        onSuccess: null,
        onResend: null,
        headerText: null,
        confirmButtonText: null,
      });
    };
