// discord_app/modules/age_assurance/hooks/useAgeVerificationMethods.tsx
import util from "../../../intl/index.native.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AgeVerificationURLActionCreators from "../AgeVerificationURLActionCreators.tsx";
import GoogleWalletExperiment from "../GoogleWalletExperiment.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AgeVerificationStore from "../AgeVerificationStore.tsx";

require = fn;
const AgeVerificationConstants = fn(8533);
({ VERIFICATION_METHOD_TITLE_MAP: closure_7, VerificationMethod: closure_8 } = AgeVerificationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default function useAgeVerificationMethods(onGoogleWalletSelect) {
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let initiateAgeVerification;
  first = undefined;
  _slicedToArray = undefined;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let items = [AgeVerificationStore];
  const stateFromStoresObject = onGoogleWalletSelect(initiateAgeVerification[5]).useStateFromStoresObject(
    items,
    () => ({ methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading }),
  );
  const methods = stateFromStoresObject.methods;
  let obj = onGoogleWalletSelect(initiateAgeVerification[5]);
  let obj2 = onGoogleWalletSelect(initiateAgeVerification[6]);
  initiateAgeVerification = obj2.useInitiateAgeVerification({
    onComplete: onClose,
    entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED,
    shouldShowExpressiveModal: true,
    classificationId,
  }).initiateAgeVerification;
  [first, _slicedToArray] = noop.useState(false);
  const effect = noop.useEffect(() => {
    c0 = false;
    let result = onGoogleWalletSelect(initiateAgeVerification[8]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
        const _HermesInternal = HermesInternal;
        const items = ["available:" + result];
        obj2.tags = items;
        MonitoringAgentDefault.increment(obj2);
        if (result) {
          result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
          const tmp4Result = GoogleWalletExperiment;
        }
        closure_4(result);
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
  let obj3 = {
    onComplete: onClose,
    entryPoint: onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED,
    shouldShowExpressiveModal: true,
    classificationId,
  };
  return {
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
            const intl = onGoogleWalletSelect(1115).intl;
            obj.title = intl.string(title);
            const intl2 = onGoogleWalletSelect(1115).intl;
            obj.description = intl2.string(description);
            closure_1 = first(function* (arg0) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
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
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const obj5 = id(8534);
                      const result = obj5.trackAgeVerificationModalClicked(
                        id,
                        id(8534).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                        id(8534).AgeVerificationModalCta.METHOD_SELECT,
                        id,
                      );
                      v1 = 1;
                      c1 = 1;
                      const obj4 = { value: v1(id), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
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
            obj.onClick = function () {
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
              const obj = methods(initiateAgeVerification[9]);
              obj.increment({
                name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED,
              });
              const obj2 = {
                name: onGoogleWalletSelect(initiateAgeVerification[10]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED,
              };
              const result = onGoogleWalletSelect(initiateAgeVerification[7]).trackAgeVerificationModalClicked(
                modalSessionId,
                onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                onGoogleWalletSelect(initiateAgeVerification[7]).AgeVerificationModalCta.METHOD_SELECT,
                constants.GOOGLE_WALLET,
              );
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
    loading: stateFromStoresObject.loading,
  };
}
