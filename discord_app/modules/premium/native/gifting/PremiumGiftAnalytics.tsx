// discord_app/modules/premium/native/gifting/PremiumGiftAnalytics.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import PremiumAnalyticsUtils from "../PremiumAnalyticsUtils.tsx";
import PaymentFlowStartedTriggerPoint from "../../../experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let currentStep,
  flag,
  obj1,
  obj12,
  obj13,
  obj14,
  obj15,
  obj16,
  ref,
  ref2,
  tmp,
  tmp11,
  tmp12,
  tmp13,
  tmp14,
  tmp15,
  tmp16,
  tmp18,
  tmp19,
  tmp20,
  tmp21,
  tmp22,
  tmp24,
  tmp25,
  tmp26,
  tmp27,
  tmp28,
  tmp29,
  tmp3,
  tmp30,
  tmp31,
  tmp32,
  tmp33,
  tmp34,
  tmp37,
  tmp38,
  tmp4,
  tmp40,
  tmp41,
  tmp42,
  tmp43,
  tmp45,
  tmp46,
  tmp47,
  tmp48,
  tmp49,
  tmp50,
  tmp51,
  tmp8,
  tmp9,
  track2Result,
  track3Result,
  trackResult;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentStep) => {
      let first;
      let productId;
      let obj = currentStep(productId[3]);
      const cResult = obj.c(10);
      currentStep = currentStep.currentStep;
      const children = currentStep.children;
      let obj2 = currentStep(productId[4]);
      const nativeGiftContext = obj2.useNativeGiftContext();
      const customGiftMessage = nativeGiftContext.customGiftMessage;
      productId = nativeGiftContext.productId;
      const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
      let obj3 = basePurchaseAnalytics;
      ref = basePurchaseAnalytics.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let _Date = Date;
        let timestamp = Date.now();
        cResult[0] = timestamp;
        first = timestamp;
      } else {
        first = cResult[0];
      }
      ref = obj3.useRef(first);
      ref2 = obj3.useRef(first);
      if (cResult[1] === basePurchaseAnalytics) {
        if (cResult[2] === currentStep) {
          if (cResult[3] === customGiftMessage) {
            let tmp6;
            let tmp7;
            let tmp10;
            if (cResult[4] === productId) {
              tmp6 = cResult[5];
              tmp7 = cResult[6];
            }
            const effect = obj3.useEffect(tmp6, tmp7);
            if (cResult[7] !== basePurchaseAnalytics) {
              class A {
                constructor() {
                  return () => {
                    /* body not rendered: F140930 */
                  };
                }
              }
              const items = [basePurchaseAnalytics, ref];
              cResult[7] = basePurchaseAnalytics;
              cResult[8] = A;
              cResult[9] = items;
              tmp10 = items;
            } else {
              class A {
                constructor() {
                  return () => {
                    /* body not rendered: F140930 */
                  };
                }
              }
              tmp10 = cResult[9];
            }
            const effect1 = obj3.useEffect(A, tmp10);
            return children;
          }
        }
      }
      class E {
        constructor() {
          tmp = currentStep;
          tmp2 = closure_4;
          if (currentStep !== closure_4.current) {
            tmp38 = globalThis;
            _Date = Date;
            timestamp = Date.now();
            tmp40 = null;
            if (null != tmp2.current) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              isIOSResult = tmp === closure_0(closure_2[5]).PaymentFlowStep.CONFIRM;
              if (isIOSResult) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj = closure_0(closure_2[6]);
                isIOSResult = obj.isIOS();
              }
              if (isIOSResult) {
                tmp8 = closure_1;
                tmp9 = closure_2;
                tmp10 = closure_1(closure_2[7]);
                tmp11 = AnalyticEvents;
                obj1 = {};
                tmp12 = closure_0;
                tmp13 = closure_2;
                track = tmp10.track;
                PAYMENT_FLOW_SUCCEEDED = AnalyticEvents.PAYMENT_FLOW_SUCCEEDED;
                obj3 = closure_0(closure_2[5]);
                tmp14 = basePurchaseAnalytics;
                obj12 = { subscription_plan_gateway_plan_id: null };
                tmp15 = productId;
                obj12.subscription_plan_gateway_plan_id = productId;
                tmp16 = obj1;
                merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj12));
                tmp18 = customGiftMessage;
                tmp19 = closure_0;
                tmp20 = closure_2;
                intl = closure_0(closure_2[8]).intl;
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj1.is_custom_message_edited = customGiftMessage !== intl.string(closure_0(closure_2[8]).t.ZkOo1U);
                flag = false;
                obj1.is_custom_emoji_sound_available = false;
                trackResult = track(PAYMENT_FLOW_SUCCEEDED, obj1);
              }
              tmp24 = closure_1;
              tmp25 = closure_2;
              tmp26 = closure_1(closure_2[7]);
              tmp27 = AnalyticEvents;
              obj13 = {};
              tmp28 = closure_0;
              tmp29 = closure_2;
              track2 = tmp26.track;
              PAYMENT_FLOW_STEP = AnalyticEvents.PAYMENT_FLOW_STEP;
              obj6 = closure_0(closure_2[5]);
              tmp30 = basePurchaseAnalytics;
              obj14 = {
                from_step: null,
                to_step: null,
                step_duration_ms: null,
                flow_duration_ms: null,
                subscription_plan_gateway_plan_id: null,
              };
              obj14.from_step = tmp2.current;
              obj14.to_step = tmp;
              tmp31 = closure_6;
              obj14.step_duration_ms = timestamp - closure_6.current;
              tmp32 = closure_5;
              obj14.flow_duration_ms = timestamp - closure_5.current;
              tmp33 = productId;
              obj14.subscription_plan_gateway_plan_id = productId;
              tmp34 = obj13;
              merged1 = Object.assign(obj6.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj14));
              track2Result = track2(PAYMENT_FLOW_STEP, obj13);
            } else {
              tmp41 = closure_0;
              tmp42 = closure_2;
              obj8 = closure_0(closure_2[9]);
              tmp43 = basePurchaseAnalytics;
              result = obj8.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
              tmp45 = closure_1;
              tmp46 = closure_2;
              tmp47 = closure_1(closure_2[7]);
              tmp48 = AnalyticEvents;
              obj15 = {};
              tmp49 = closure_0;
              tmp50 = closure_2;
              track3 = tmp47.track;
              PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
              obj10 = closure_0(closure_2[5]);
              obj16 = { initial_step: null };
              obj16.initial_step = tmp;
              tmp51 = obj15;
              merged2 = Object.assign(obj10.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj16));
              track3Result = track3(PAYMENT_FLOW_LOADED, obj15);
            }
            tmp2.current = tmp;
            tmp37 = closure_6;
            closure_6.current = timestamp;
          }
          return;
        }
      }
      const items1 = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
      cResult[1] = basePurchaseAnalytics;
      cResult[2] = currentStep;
      cResult[3] = customGiftMessage;
      cResult[4] = productId;
      cResult[5] = E;
      cResult[6] = items1;
      tmp7 = items1;
      tmp6 = E;
    }
  : (currentStep) => {
      currentStep = currentStep.currentStep;
      let productId;
      const children = currentStep.children;
      let obj = currentStep(productId[4]);
      const nativeGiftContext = obj.useNativeGiftContext();
      const customGiftMessage = nativeGiftContext.customGiftMessage;
      productId = nativeGiftContext.productId;
      const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
      basePurchaseAnalytics.useRef(null);
      let timestamp = Date.now();
      ref = basePurchaseAnalytics.useRef(timestamp);
      ref2 = basePurchaseAnalytics.useRef(timestamp);
      const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
      const effect = basePurchaseAnalytics.useEffect(() => {
        let intl;
        if (currentStep !== ref.current) {
          const _Date = Date;
          const timestamp = Date.now();
          if (null != ref.current) {
            let isIOSResult = currentStep === PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM;
            if (isIOSResult) {
              const obj = PlatformUtils;
              isIOSResult = obj.isIOS();
            }
            if (isIOSResult) {
              const obj2 = {
                is_custom_message_edited: customGiftMessage !== intl.string(intl2.t.ZkOo1U),
                is_custom_emoji_sound_available: false,
              };
              const track = AnalyticsUtilsDefault.track;
              const PAYMENT_FLOW_SUCCEEDED = AnalyticEvents.PAYMENT_FLOW_SUCCEEDED;
              AnalyticsUtilsDefault;
              const obj4 = { subscription_plan_gateway_plan_id: productId };
              const obj3 = PremiumAnalyticsUtils;
              const merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
              intl = intl2.intl;
              track(PAYMENT_FLOW_SUCCEEDED, obj2);
            }
            const obj5 = {};
            const track2 = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_STEP = AnalyticEvents.PAYMENT_FLOW_STEP;
            AnalyticsUtilsDefault;
            const obj7 = {
              from_step: ref.current,
              to_step: currentStep,
              step_duration_ms: timestamp - ref2.current,
              flow_duration_ms: timestamp - ref.current,
              subscription_plan_gateway_plan_id: productId,
            };
            const obj6 = PremiumAnalyticsUtils;
            const merged1 = Object.assign(obj6.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj7));
            track2(PAYMENT_FLOW_STEP, obj5);
          } else {
            const obj8 = PaymentFlowStartedTriggerPoint;
            const result = obj8.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
            const obj9 = {};
            const track3 = AnalyticsUtilsDefault.track;
            const PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
            AnalyticsUtilsDefault;
            const obj11 = { initial_step: currentStep };
            const obj10 = PremiumAnalyticsUtils;
            const merged2 = Object.assign(obj10.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj11));
            track3(PAYMENT_FLOW_LOADED, obj9);
          }
          ref.current = currentStep;
          ref2.current = timestamp;
        }
      }, items);
      const items1 = [basePurchaseAnalytics, ref];
      const effect1 = basePurchaseAnalytics.useEffect(
        () => () => {
          if (ref.current !== currentStep(productId[5]).PaymentFlowStep.CONFIRM) {
            const obj = customGiftMessage(productId[7]);
            obj.track(ref.PAYMENT_FLOW_CANCELED, basePurchaseAnalytics);
          }
        },
        items1,
      );
      return children;
    };
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default tmp2;
