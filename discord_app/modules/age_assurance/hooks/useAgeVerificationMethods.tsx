// === Module 8176: useAgeVerificationMethods ===

// Module 8176 (useAgeVerificationMethods)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "initialize" /* 8044 */;
import set from "set" /* 8010 */;

const require = arg1;
({ VERIFICATION_METHOD_TITLE_MAP: error, VerificationMethod: closure_8 } = set);
let result = set.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let methods;
  let initiateAgeVerification;
  let first;
  let callback;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = onGoogleWalletSelect(initiateAgeVerification[5]);
  let items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: closure_6.methods, loading: closure_6.loading }));
  methods = stateFromStoresObject.methods;
  obj = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  initiateAgeVerification = onGoogleWalletSelect(initiateAgeVerification[6]).useInitiateAgeVerification(obj).initiateAgeVerification;
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const effect = React.useEffect(() => {
    c0 = false;
    let result = onGoogleWalletSelect(initiateAgeVerification[8]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        let result = arg0;
        let obj = methods(initiateAgeVerification[9]);
        obj = { name: null, tags: null };
        obj[0] = onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK;
        const _HermesInternal = HermesInternal;
        const items = ["available:" + arg0];
        obj[1] = items;
        obj.increment(obj);
        if (arg0) {
          result = tmp4(tmp3[11]).isGoogleWalletEnabled("age_verification_methods");
          const tmp4Result = tmp4(tmp3[11]);
        }
        closure_1_4(result);
        tmp3 = initiateAgeVerification;
        tmp4 = onGoogleWalletSelect;
        const tmp7 = closure_1_4;
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = React.useEffect(() => {
    if (null == methods) {
      const ageVerificationMethods = onGoogleWalletSelect(initiateAgeVerification[12]).getAgeVerificationMethods();
      const obj = onGoogleWalletSelect(initiateAgeVerification[12]);
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  obj = {
    ageVerificationMethods: React.useMemo(() => {
      let found1;
      if (methods != null) {
        const found = methods.filter((arg0) => arg0 !== constants.GOOGLE_WALLET);
        const mapped = found.map((arg0) => {
          closure_0 = arg0;
          if (null == closure_1_7[arg0]) {
            return null;
          } else {
            let obj = { id: null, title: null, description: null, onClick: null };
            obj[0] = arg0;
            ({ title, description } = tmp);
            const intl = closure_1_0(closure_1_2[13]).intl;
            obj[1] = intl.string(title);
            const intl2 = closure_1_0(closure_1_2[13]).intl;
            obj[2] = intl2.string(description);
            closure_1 = closure_1_3((arg0) => {
              closure_0 = arg0;
              c2 = 0;
              c1 = 0;
              return (function*(arg0) {
                if (c1 === 2) {
                  c1 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (0 === v0) {
                      if (arg0 === 1) {
                        c1 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        const obj5 = callback(closure_2_2[7]);
                        const result = obj5.trackAgeVerificationModalClicked(callback, callback(closure_2_2[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, callback(closure_2_2[7]).AgeVerificationModalCta.METHOD_SELECT, callback);
                        v0 = 1;
                        c1 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = v0(callback);
                        return obj1;
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c1 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp5) {
                    c1 = tmp;
                    throw tmp5;
                  }
                }
              })();
            });
            obj[3] = function() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            return obj;
          }
        });
        found1 = mapped.filter((arg0) => null != arg0);
      }
      if (found1 == null) {
        found1 = [];
      }
      if (first) {
        if (null != onGoogleWalletSelect) {
          if (null != closure_1_7[closure_1_8.GOOGLE_WALLET]) {
            let obj = { id: null, title: null, description: null, onClick: null };
            obj[0] = tmp3.GOOGLE_WALLET;
            let intl = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj[1] = intl.string(tmp4.title);
            let intl2 = onGoogleWalletSelect(initiateAgeVerification[13]).intl;
            obj[2] = intl2.string(tmp4.description);
            obj[3] = function onClick(modalSessionId) {
              let obj = closure_1_1(closure_1_2[9]);
              obj = { name: closure_1_0(closure_1_2[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              obj.increment(obj);
              const result = closure_1_0(closure_1_2[7]).trackAgeVerificationModalClicked(modalSessionId, closure_1_0(closure_1_2[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, closure_1_0(closure_1_2[7]).AgeVerificationModalCta.METHOD_SELECT, closure_1_8.GOOGLE_WALLET);
              callback();
            };
            const items = [];
            items[HermesBuiltin.arraySpread(found1, 0)] = obj;
            return items;
          }
        }
      }
      return found1;
    }, items2),
    loading: stateFromStoresObject.loading
  };
  return obj;
};