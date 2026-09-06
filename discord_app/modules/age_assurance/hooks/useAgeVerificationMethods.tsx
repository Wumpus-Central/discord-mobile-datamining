// === Module 8584: useAgeVerificationMethods ===

// Module 8584 (useAgeVerificationMethods)
import util from "util" /* 1114 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 8417 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 8446 */;

require = fn;
const AgeVerificationConstants = fn(8412);
({ VERIFICATION_METHOD_TITLE_MAP: closure_7, VerificationMethod: closure_8 } = AgeVerificationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let initiateAgeVerification;
  _slicedToArray = undefined;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = onGoogleWalletSelect(initiateAgeVerification[5]);
  let items = [AgeVerificationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading }));
  const methods = stateFromStoresObject.methods;
  obj = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  initiateAgeVerification = onGoogleWalletSelect(initiateAgeVerification[6]).useInitiateAgeVerification(obj).initiateAgeVerification;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
  const effect = noop.useEffect(() => {
    c0 = false;
    let result = onGoogleWalletSelect(initiateAgeVerification[8]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
        const _HermesInternal = HermesInternal;
        const items = ["available:" + result];
        obj.tags = items;
        obj.increment(obj);
        if (result) {
          result = tmp4(8585).isGoogleWalletEnabled("age_verification_methods");
          const tmp4Result = tmp4(8585);
        }
        closure_4(result);
        tmp4 = require;
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = noop.useEffect(() => {
    if (null == methods) {
      const ageVerificationMethods = AgeVerificationURLActionCreators.getAgeVerificationMethods();
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  obj = {
    ageVerificationMethods: noop.useMemo(() => {
      let found1;
      if (methods != null) {
        const found = methods.filter((item) => item !== constants.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          if (null == closure_1_7[id]) {
            return null;
          } else {
            let obj = { id, title: null, description: null, onClick: null };
            ({ title, description } = tmp);
            const intl = onGoogleWalletSelect(1114).intl;
            obj.title = intl.string(title);
            const intl2 = onGoogleWalletSelect(1114).intl;
            obj.description = intl2.string(description);
            closure_1 = first(function*(arg0, value) {
              if (c1 === 2) {
                c1 = 3;
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
                  c1 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      const obj5 = id(8413);
                      const result = obj5.trackAgeVerificationModalClicked(id, id(8413).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(8413).AgeVerificationModalCta.METHOD_SELECT, id);
                      v1 = 1;
                      c1 = 1;
                      const obj1 = { value: v1(id), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    obj = { value, done: true };
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
            });
            obj.onClick = function() {
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
        found1 = mapped.filter((item) => null != item);
      }
      if (found1 == null) {
        found1 = [];
      }
      if (first) {
        if (null != onGoogleWalletSelect) {
          if (null != React5[constants.GOOGLE_WALLET]) {
            let obj = { id: tmp3.GOOGLE_WALLET, title: null, description: null, onClick: null };
            let intl = util.intl;
            obj.title = intl.string(tmp4.title);
            let intl2 = util.intl;
            obj.description = intl2.string(tmp4.description);
            obj.onClick = function onClick(modalSessionId) {
              methods(initiateAgeVerification[9]);
              const obj = { name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              obj.increment(obj);
              const result = onGoogleWalletSelect(initiateAgeVerification[7]).trackAgeVerificationModalClicked(modalSessionId, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
              closure_1_0();
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