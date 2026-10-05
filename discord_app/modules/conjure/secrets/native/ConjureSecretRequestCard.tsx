// discord_app/modules/conjure/secrets/native/ConjureSecretRequestCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import ConjureSecretsSheet from "ConjureSecretsSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjureSecretsSheetDefault = ConjureSecretsSheet;
let projectId, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardAwaiting: obj3, status: obj4 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let awaiting;
      let cardId;
      let request;
      let secretRequestStatusChanged;
      let status;
      let useReducedMotion;
      let tmp = projectId;
      let obj = projectId(secretRequestStatusChanged[7]);
      const cResult = obj.c(84);
      projectId = projectId.projectId;
      ({ cardId, request } = projectId);
      ({ status, awaiting } = projectId);
      closure_8();
      if (cResult[0] === projectId) {
        let tmp13;
        let tmp12;
        if (cResult[3] !== request.fields) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(id) {
                const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
                return obj;
              }
            }
            cResult[5] = E;
          } else {
            class E {
              constructor(id) {
                const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
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
            constructor(id) {
              const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
              return obj;
            }
          }
        }
        const tmpResult = tmp(secretRequestStatusChanged[11]);
        secretRequestStatusChanged = tmpResult.useSecretRequestStatusChanged(cardId, status);
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(id) {
              const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
              return obj;
            }
          }
          let items = [AccessibilityStore];
          class O {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[6] = items;
          cResult[7] = O;
          tmp13 = O;
          tmp12 = items;
        } else {
          class E {
            constructor(id) {
              const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
              return obj;
            }
          }
          tmp13 = cResult[7];
        }
        const tmpResult3 = tmp(secretRequestStatusChanged[12]);
        const stateFromStores = tmpResult3.useStateFromStores(tmp12, tmp13);
        const tmpResult4 = tmp(secretRequestStatusChanged[13]);
        const sharedValue = tmpResult4.useSharedValue(1);
        if (cResult[8] === secretRequestStatusChanged) {
          class E {
            constructor(id) {
              const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
              return obj;
            }
          }
        }
        class P {
          constructor() {
            if (secretRequestStatusChanged) {
              if (!stateFromStores) {
                const result = sharedValue.set(0);
                set = sharedValue.set;
                const obj = spring;
                const result1 = set(obj.withSpring(1, springPresets.SUBTLE_SPRING));
              }
            }
            const result2 = sharedValue.set(1);
          }
        }
        cResult[8] = secretRequestStatusChanged;
        cResult[9] = sharedValue;
        cResult[10] = stateFromStores;
        cResult[11] = P;
      }
      const fn = function x() {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          content: metroRequire(ConjureSecretsSheetDefault, obj2),
          key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY,
        };
        obj2 = { projectId, request };
        showActionSheet(obj);
      };
      cResult[0] = projectId;
      cResult[1] = request;
      cResult[2] = fn;
    }
  : (projectId) => {
      let CircleCheckIcon;
      let HCQvpO;
      let TagGroup3;
      let Text4;
      let awaiting;
      let cardId;
      let intl10;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj12;
      let obj16;
      let obj7;
      let request;
      let status;
      let string;
      let tmp27Result;
      let useReducedMotion;
      projectId = projectId.projectId;
      ({ cardId, request } = projectId);
      ({ status, awaiting } = projectId);
      let secretRequestStatusChanged;
      let stateFromStores;
      let tmp = closure_8();
      let items = [projectId, request];
      const items1 = [request.fields];
      const callback = stateFromStores.useCallback(() => {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          content: metroRequire(ConjureSecretsSheetDefault, obj2),
          key: ConjureSecretsSheet.CONJURE_SECRETS_SHEET_KEY,
        };
        obj2 = { projectId, request };
        showActionSheet(obj);
      }, items);
      const memo = stateFromStores.useMemo(() => {
        const fields = request.fields;
        return fields.map((id) => {
          const obj = { id: id.name, label: id.label, icon: projectId(secretRequestStatusChanged[10]).KeyIcon };
          return obj;
        });
      }, items1);
      let obj = projectId(secretRequestStatusChanged[11]);
      secretRequestStatusChanged = obj.useSecretRequestStatusChanged(cardId, status);
      let obj2 = projectId(secretRequestStatusChanged[12]);
      const items2 = [AccessibilityStore];
      stateFromStores = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
      const obj3 = projectId(secretRequestStatusChanged[13]);
      const sharedValue = obj3.useSharedValue(1);
      const items3 = [sharedValue, secretRequestStatusChanged, status, stateFromStores, cardId];
      const layoutEffect = stateFromStores.useLayoutEffect(() => {
        if (secretRequestStatusChanged) {
          if (!stateFromStores) {
            const result = sharedValue.set(0);
            set = sharedValue.set;
            const obj = spring;
            const result1 = set(obj.withSpring(1, springPresets.SUBTLE_SPRING));
          }
        }
        const result2 = sharedValue.set(1);
      }, items3);
      const fn = function w() {
        let diff;
        let items;
        const obj = { opacity: sharedValue.get(), transform: items };
        const obj2 = { translateY: diff * nativeDefault.space.PX_4 };
        diff = sharedValue.get() - 1;
        items = [obj2];
        return obj;
      };
      const obj4 = projectId(secretRequestStatusChanged[13]);
      fn.__closure = { enter: sharedValue, tokens: request(secretRequestStatusChanged[5]) };
      fn.__workletHash = 6679182484244;
      fn.__initData = __initData;
      ({ enter: sharedValue, tokens: request(secretRequestStatusChanged[5]) });
      const animatedStyle = obj4.useAnimatedStyle(fn);
      projectId(secretRequestStatusChanged[13]);
      class R {
        constructor() {
          let items;
          const obj = { opacity: sharedValue.get(), transform: items };
          items = [{ scale: 0.5 + 0.5 * sharedValue.get() }];
          ({ scale: 0.5 + 0.5 * sharedValue.get() });
          return obj;
        }
      }
      R.__closure = { enter: sharedValue };
      R.__workletHash = 12712289937001;
      R.__initData = __initData2;
      if ("superseded" === status) {
        const obj6 = { style: items4, children: closure_6(Text4, obj7) };
        items4 = [tmp.card, animatedStyle];
        const View4 = request(tmp5[13]).View;
        obj7 = {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: intl10.string(request(secretRequestStatusChanged[18]).CTxtdV),
        };
        Text4 = tmp4(tmp5[16]).Text;
        intl10 = tmp4(tmp5[17]).intl;
        tmp27Result = closure_6(View4, obj6);
      } else if ("inactive" === status) {
        const obj8 = { style: items5, children: items6 };
        items5 = [tmp.card, animatedStyle];
        const View3 = request(tmp5[13]).View;
        const obj9 = {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: intl8.string(request(secretRequestStatusChanged[18]).HCQvpO),
        };
        const Text3 = tmp4(tmp5[16]).Text;
        intl8 = tmp4(tmp5[17]).intl;
        items6 = [closure_6(Text3, obj9)];
        const obj10 = { label: intl9.string(request(secretRequestStatusChanged[18]).HCQvpO), size: "xs", items: memo };
        const TagGroup4 = tmp4(tmp5[19]).TagGroup;
        intl9 = tmp4(tmp5[17]).intl;
        items6[1] = closure_6(TagGroup4, obj10);
        tmp27Result = closure_7(View3, obj8);
      } else if ("pending" === status) {
        const obj11 = { style: tmp.card, children: closure_6(TagGroup3, obj12) };
        obj12 = { label: intl7.string(request(secretRequestStatusChanged[18]).HCQvpO), size: "xs", items: memo };
        TagGroup3 = tmp4(tmp5[19]).TagGroup;
        intl7 = tmp4(tmp5[17]).intl;
        tmp27Result = closure_6(sharedValue, obj11);
      } else if ("received" === status) {
        const obj13 = { style: items7, children: items9 };
        items7 = [tmp.card, animatedStyle];
        const obj14 = { style: tmp.status, children: items8 };
        View = request(tmp5[13]).View;
        const obj15 = {
          style: tmp13,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children: closure_6(CircleCheckIcon, obj16),
        };
        const View2 = request(tmp5[13]).View;
        obj16 = { size: "xs", color: request(secretRequestStatusChanged[5]).colors.ICON_FEEDBACK_POSITIVE };
        CircleCheckIcon = tmp4(tmp5[20]).CircleCheckIcon;
        items8 = [closure_6(View2, obj15)];
        const obj17 = {
          variant: "text-xs/semibold",
          color: "text-feedback-positive",
          children: intl5.string(request(secretRequestStatusChanged[18]).sfp7Up),
        };
        const Text2 = tmp4(tmp5[16]).Text;
        intl5 = tmp4(tmp5[17]).intl;
        items8[1] = closure_6(Text2, obj17);
        items9 = [closure_7(sharedValue, obj14)];
        const obj18 = { label: intl6.string(request(secretRequestStatusChanged[18]).sfp7Up), size: "xs", items: memo };
        const TagGroup2 = tmp4(tmp5[19]).TagGroup;
        intl6 = tmp4(tmp5[17]).intl;
        items9[1] = closure_6(TagGroup2, obj18);
        tmp27Result = closure_7(View, obj13);
      } else {
        const items10 = [tmp.card];
        let cardAwaiting = null != awaiting;
        const tmp28 = sharedValue;
        if (cardAwaiting) {
          cardAwaiting = tmp.cardAwaiting;
        }
        const obj19 = { style: items10, children: null };
        items10[1] = cardAwaiting;
        let tmp14 = null;
        if (null != awaiting) {
          tmp14 = closure_6(tmp4(tmp5[21]).ConjureAwaitingPulseRing, {});
        }
        const items11 = [tmp14, , , ,];
        let str = "text-muted";
        const Text = tmp4(tmp5[16]).Text;
        if (null != awaiting) {
          str = "text-brand";
        }
        const obj20 = { variant: "text-xs/semibold", color: str, children: string(HCQvpO) };
        const intl = tmp4(tmp5[17]).intl;
        string = intl.string;
        if (null != awaiting) {
          HCQvpO = request(tmp5[18]).O0QIqj;
        } else {
          HCQvpO = request(tmp5[18]).HCQvpO;
        }
        items11[1] = closure_6(Text, obj20);
        if (null != request.note) {
          let note;
          if ("" !== request.note) {
            note = request.note;
          }
          const obj21 = { variant: "text-sm/normal", color: "text-default", children: note };
          items11[2] = closure_6(tmp17, obj21);
          const obj22 = {
            label: intl3.string(request(secretRequestStatusChanged[18]).HCQvpO),
            size: "xs",
            items: memo,
          };
          const TagGroup = tmp4(tmp5[19]).TagGroup;
          intl3 = tmp4(tmp5[17]).intl;
          items11[3] = closure_6(TagGroup, obj22);
          const obj23 = {
            variant: "primary",
            size: "sm",
            onPress: callback,
            text: intl4.string(request(secretRequestStatusChanged[18]).EK8tKY),
          };
          const Button = tmp4(tmp5[22]).Button;
          intl4 = tmp4(tmp5[17]).intl;
          items11[4] = closure_6(Button, obj23);
          obj19.children = items11;
          tmp27Result = closure_7(tmp28, obj19);
        }
        const intl2 = tmp4(tmp5[17]).intl;
        note = intl2.string(request(tmp5[18]).MPGSHL);
      }
      return tmp27Result;
    };
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretRequestCard.tsx");

export default tmp4;
