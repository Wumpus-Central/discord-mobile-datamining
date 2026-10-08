// discord_app/modules/conjure/secrets/native/ConjureSecretRequestCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import ConjureSecretsSheet from "ConjureSecretsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const ConjureSecretsSheetDefault = ConjureSecretsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  cardAwaiting: null,
  status: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.cardAwaiting = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.status = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "function ConjureSecretRequestCardTsx1(){const{enter,tokens}=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};}",
};
let closure_10 = {
  code: "function ConjureSecretRequestCardTsx2(){const{enter}=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};}",
};
const __initData = {
  code: "function ConjureSecretRequestCardTsx3(){const{enter,tokens}=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};}",
};
const __initData2 = {
  code: "function ConjureSecretRequestCardTsx4(){const{enter}=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};}",
};
const ReactCompilerGating = fn(558);
const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureSecretRequestCard(projectId) {
      const cResult = projectId(secretRequestStatusChanged[7]).c(84);
      projectId = projectId.projectId;
      ({ cardId, request } = projectId);
      ({ status, awaiting } = projectId);
      closure_8();
      if (cResult[0] === projectId) {
        if (cResult[3] !== request.fields) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
                return obj;
              }
            }
            cResult[5] = E;
          } else {
            class E {
              constructor(arg0) {
                obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
                return obj;
              }
            }
          }
          const fields = request.fields;
          const mapped = fields.map(E);
          cResult[3] = request.fields;
          cResult[4] = mapped;
        } else {
          class E {
            constructor(arg0) {
              obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
              return obj;
            }
          }
          secretRequestStatusChanged = tmp(tmp2[11]).useSecretRequestStatusChanged(cardId, status);
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
                return obj;
              }
            }
            let items = [AccessibilityStore];
            class R {
              constructor() {
                return closure_1_5.useReducedMotion;
              }
            }
            cResult[6] = items;
            cResult[7] = R;
            let tmp13 = R;
            const tmp12 = items;
          } else {
            class E {
              constructor(arg0) {
                obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
                return obj;
              }
            }
            tmp13 = cResult[7];
          }
          const tmpResult = tmp(tmp2[11]);
          const stateFromStores = tmp(tmp2[12]).useStateFromStores(tmp12, tmp13);
          const tmpResult3 = tmp(tmp2[12]);
          const sharedValue = tmp(tmp2[13]).useSharedValue(1);
          if (cResult[8] === secretRequestStatusChanged) {
            class E {
              constructor(arg0) {
                obj = { id: projectId.name, label: projectId.label, icon: projectId(closure_2[10]).KeyIcon };
                return obj;
              }
            }
          }
          const fn2 = function j() {
            if (secretRequestStatusChanged) {
              if (!stateFromStores) {
                const result = sharedValue.set(0);
                const result1 = sharedValue.set(spring.withSpring(1, springPresets.SUBTLE_SPRING));
              }
            }
            const result2 = sharedValue.set(1);
          };
          cResult[8] = secretRequestStatusChanged;
          cResult[9] = sharedValue;
          cResult[10] = stateFromStores;
          cResult[11] = fn2;
          const tmpResult4 = tmp(tmp2[13]);
        }
      }
      const fn = function x() {
        const obj2 = {
          content: timestampProducer(ConjureSecretsSheetDefault, { projectId, request }),
          key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY,
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      };
      cResult[0] = projectId;
      cResult[1] = request;
      cResult[2] = fn;
      let obj = projectId(secretRequestStatusChanged[7]);
    }
  : function ConjureSecretRequestCard(projectId) {
      projectId = projectId.projectId;
      ({ cardId, request } = projectId);
      ({ status, awaiting } = projectId);
      let secretRequestStatusChanged;
      let stateFromStores;
      const tmp = closure_8();
      let items = [projectId, request];
      const items1 = [request.fields];
      const callback = stateFromStores.useCallback(() => {
        const obj2 = {
          content: timestampProducer(ConjureSecretsSheetDefault, { projectId, request }),
          key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY,
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items);
      const memo = stateFromStores.useMemo(() => {
        const fields = request.fields;
        return fields.map((id) => ({
          id: id.name,
          label: id.label,
          icon: projectId(secretRequestStatusChanged[10]).KeyIcon,
        }));
      }, items1);
      secretRequestStatusChanged = projectId(secretRequestStatusChanged[11]).useSecretRequestStatusChanged(
        cardId,
        status,
      );
      let obj = projectId(secretRequestStatusChanged[11]);
      const items2 = [AccessibilityStore];
      stateFromStores = projectId(secretRequestStatusChanged[12]).useStateFromStores(
        items2,
        () => useReducedMotion.useReducedMotion,
      );
      let obj2 = projectId(secretRequestStatusChanged[12]);
      const sharedValue = projectId(secretRequestStatusChanged[13]).useSharedValue(1);
      const items3 = [sharedValue, secretRequestStatusChanged, status, stateFromStores, cardId];
      const layoutEffect = stateFromStores.useLayoutEffect(() => {
        if (secretRequestStatusChanged) {
          if (!stateFromStores) {
            const result = sharedValue.set(0);
            const result1 = sharedValue.set(spring.withSpring(1, springPresets.SUBTLE_SPRING));
          }
        }
        const result2 = sharedValue.set(1);
      }, items3);
      const obj3 = projectId(secretRequestStatusChanged[13]);
      const fn = function w() {
        const obj = { opacity: sharedValue.get(), transform: null };
        const obj2 = { translateY: null };
        const diff = sharedValue.get() - 1;
        obj2.translateY = diff * nativeDefault.space.PX_4;
        const items = [obj2];
        obj.transform = items;
        return obj;
      };
      const obj4 = projectId(secretRequestStatusChanged[13]);
      fn.__closure = { enter: sharedValue, tokens: request(secretRequestStatusChanged[5]) };
      fn.__workletHash = 6679182484244;
      fn.__initData = __initData;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      projectId(secretRequestStatusChanged[13]);
      class I {
        constructor() {
          obj = { opacity: closure_4.get(), transform: null };
          obj1 = { scale: 0.5 + 0.5 * closure_4.get() };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      I.__closure = { enter: sharedValue };
      I.__workletHash = 12712289937001;
      I.__initData = __initData2;
      if ("superseded" === status) {
        const obj6 = { style: animatedStyle, children: null };
        const obj7 = { style: tmp.card, children: null };
        const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl10 = tmp4(tmp5[17]).intl;
        obj8.children = intl10.string(request(tmp5[18]).CTxtdV);
        obj7.children = closure_6(tmp4(tmp5[16]).Text, obj8);
        obj6.children = closure_6(request(tmp5[19]), obj7);
        let tmp30Result = closure_6(request(tmp5[13]).View, obj6);
        const tmp10Result = request(tmp5[19]);
      } else if ("inactive" === status) {
        const obj9 = { style: animatedStyle, children: null };
        const obj10 = { style: tmp.card, children: null };
        const obj11 = { variant: "text-xs/semibold", color: "text-muted", children: null };
        const intl8 = tmp4(tmp5[17]).intl;
        obj11.children = intl8.string(request(tmp5[18]).HCQvpO);
        const items4 = [closure_6(tmp4(tmp5[16]).Text, obj11)];
        const obj12 = { label: null, size: "xs", items: null };
        const intl9 = tmp4(tmp5[17]).intl;
        obj12.label = intl9.string(request(tmp5[18]).HCQvpO);
        obj12.items = memo;
        items4[1] = closure_6(tmp4(tmp5[20]).TagGroup, obj12);
        obj10.children = items4;
        obj9.children = closure_7(request(tmp5[19]), obj10);
        tmp30Result = closure_6(request(tmp5[13]).View, obj9);
        const tmp10Result5 = request(tmp5[19]);
      } else if ("pending" === status) {
        const obj13 = { style: tmp.card, children: null };
        const obj14 = { label: null, size: "xs", items: null };
        const intl7 = tmp4(tmp5[17]).intl;
        obj14.label = intl7.string(request(tmp5[18]).HCQvpO);
        obj14.items = memo;
        obj13.children = closure_6(tmp4(tmp5[20]).TagGroup, obj14);
        tmp30Result = closure_6(request(tmp5[19]), obj13);
        const tmp10Result6 = request(tmp5[19]);
      } else if ("received" === status) {
        const obj15 = { style: animatedStyle, children: null };
        const obj16 = { style: tmp.card, children: null };
        const obj17 = { style: tmp.status, children: null };
        const obj18 = {
          style: tmp13,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children: null,
        };
        const obj19 = { size: "xs", color: request(tmp5[5]).colors.ICON_FEEDBACK_POSITIVE };
        obj18.children = closure_6(tmp4(tmp5[21]).CircleCheckIcon, obj19);
        const items5 = [closure_6(request(tmp5[13]).View, obj18)];
        const obj20 = { variant: "text-xs/semibold", color: "text-feedback-positive", children: null };
        const intl5 = tmp4(tmp5[17]).intl;
        obj20.children = intl5.string(request(tmp5[18]).sfp7Up);
        items5[1] = closure_6(tmp4(tmp5[16]).Text, obj20);
        obj17.children = items5;
        const items6 = [closure_7(sharedValue, obj17)];
        const obj21 = { label: null, size: "xs", items: null };
        const intl6 = tmp4(tmp5[17]).intl;
        obj21.label = intl6.string(request(tmp5[18]).sfp7Up);
        obj21.items = memo;
        items6[1] = closure_6(tmp4(tmp5[20]).TagGroup, obj21);
        obj16.children = items6;
        obj15.children = closure_7(request(tmp5[19]), obj16);
        tmp30Result = closure_6(request(tmp5[13]).View, obj15);
        const tmp10Result7 = request(tmp5[19]);
      } else {
        const items7 = [tmp.card];
        let cardAwaiting = null != awaiting;
        if (cardAwaiting) {
          cardAwaiting = tmp.cardAwaiting;
        }
        const obj22 = { style: null, children: null };
        items7[1] = cardAwaiting;
        obj22.style = items7;
        let tmp14 = null;
        if (null != awaiting) {
          tmp14 = closure_6(tmp4(tmp5[22]).ConjureAwaitingPulseRing, {});
        }
        const items8 = [tmp14, , , ,];
        let str = "text-muted";
        if (null != awaiting) {
          str = "text-brand";
        }
        const obj23 = { variant: "text-xs/semibold", color: str, children: null };
        const intl = tmp4(tmp5[17]).intl;
        if (null != awaiting) {
          let HCQvpO = request(tmp5[18]).O0QIqj;
        } else {
          HCQvpO = request(tmp5[18]).HCQvpO;
        }
        obj23.children = intl.string(HCQvpO);
        items8[1] = closure_6(tmp4(tmp5[16]).Text, obj23);
        if (null != request.note) {
          if ("" !== request.note) {
            let note = request.note;
          }
          const obj24 = { variant: "text-sm/normal", color: "text-default", children: note };
          items8[2] = closure_6(tmp17, obj24);
          const obj25 = { label: null, size: "xs", items: null };
          const intl3 = tmp4(tmp5[17]).intl;
          obj25.label = intl3.string(request(tmp5[18]).HCQvpO);
          obj25.items = memo;
          items8[3] = closure_6(tmp4(tmp5[20]).TagGroup, obj25);
          const obj26 = { variant: "primary", size: "sm", onPress: callback, text: null };
          const intl4 = tmp4(tmp5[17]).intl;
          obj26.text = intl4.string(request(tmp5[18]).EK8tKY);
          items8[4] = closure_6(tmp4(tmp5[23]).Button, obj26);
          obj22.children = items8;
          tmp30Result = closure_7(tmp10Result8, obj22);
        }
        const intl2 = tmp4(tmp5[17]).intl;
        note = intl2.string(request(tmp5[18]).MPGSHL);
        tmp10Result8 = request(tmp5[19]);
      }
      return tmp30Result;
    };
