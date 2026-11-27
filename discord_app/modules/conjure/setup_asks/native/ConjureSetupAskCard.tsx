// discord_app/modules/conjure/setup_asks/native/ConjureSetupAskCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import useConjureAppSettingsFormDefault from "../../settings/native/useConjureAppSettingsForm.tsx";
import openConjureSetupAskFormDefault from "openConjureSetupAskForm.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
function InlineSettingsForm(projectId) {
  importDefault = async function _handleSave(dependencyMap) {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (dependencyMap === 1) {
        throw value;
      } else if (dependencyMap === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (dependencyMap === 1) {
            c0 = 3;
            throw value;
          } else if (dependencyMap === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            canSave = canSave.canSave;
            if (canSave) {
              canSave = !obj2.saving;
            }
            if (canSave) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: obj2.submit(), done: false };
              return obj5;
            }
          }
        } else if (dependencyMap === 1) {
          c0 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp5) {
        c0 = tmp;
        throw tmp5;
      }
    }
  };
  ({ onSaved, onInputFocusChange } = projectId);
  const tmp = useConjureAppSettingsFormDefault({
    projectId: projectId.projectId,
    scopeKeys: projectId.form.request.keys,
    notifyAgent: true,
    onSaved,
    isPreview: true,
    onInputFocusChange,
  });
  _require = tmp;
  const obj2 = { children: null };
  items = [tmp.fields];
  let obj3 = { variant: "primary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
  const intl = require("util").intl;
  obj3.text = intl.string(_modDef4245.A7dQd9);
  obj3.loading = tmp.saving;
  obj3.disabled = !tmp.canSave;
  obj3.onPress = function handleSave() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items[1] = closure_7(require("components/Button/Button").Button, obj3);
  obj2.children = items;
  return closure_8(closure_9, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  cardAwaiting: null,
  status: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.cardAwaiting = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.status = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = {
  code: "(function ConjureSetupAskCardTsx1(){let[enter,tokens]=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};})",
};
let closure_12 = {
  code: "(function ConjureSetupAskCardTsx2(){let[enter]=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/setup_asks/native/ConjureSetupAskCard.tsx");

export default function ConjureSetupAskCard(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  form = undefined;
  entering = undefined;
  let merged = Object.assign(projectId, Object.assign({ projectId: 0, onInputFocusChange: 0 }));
  const tmp2 = closure_10();
  const conjureSetupAskCard = require("conjureSetupAskCard").useConjureSetupAskCard(projectId, merged);
  importDefault = conjureSetupAskCard;
  state = conjureSetupAskCard.state;
  ({ status, form } = state);
  ({ copy, entering } = conjureSetupAskCard);
  let obj = require("conjureSetupAskCard");
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = require("initialize");
  const sharedValue = require("../../../../../_runtime/metro/01654__.js").useSharedValue(1);
  const items1 = [sharedValue, entering, status, stateFromStores, conjureSetupAskCard.transitionId];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    if (entering) {
      if (!stateFromStores) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(spring_spring.withSpring(1, springPresets.SUBTLE_SPRING));
      }
    }
    const result2 = sharedValue.set(1);
  }, items1);
  const obj3 = require("../../../../../_runtime/metro/01654__.js");
  const items2 = [closure_11, sharedValue, require("native")];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items2;
  class ConjureSetupAskCardTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { translateY: (closure_0.get() - 1) * closure_1.space.PX_4 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp11, tmp12];
  ConjureSetupAskCardTsx1.__closure = items3;
  ConjureSetupAskCardTsx1.__workletHash = 11158670898070;
  ConjureSetupAskCardTsx1.__initData = tmp10;
  const animatedStyle = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(ConjureSetupAskCardTsx1);
  const obj4 = require("../../../../../_runtime/metro/01654__.js");
  const items4 = [closure_12, sharedValue];
  _require = undefined;
  [tmp14, tmp15] = items4;
  class ConjureSetupAskCardTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: 0.5 + 0.5 * closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp15];
  ConjureSetupAskCardTsx2.__closure = items5;
  ConjureSetupAskCardTsx2.__workletHash = 4768574487471;
  ConjureSetupAskCardTsx2.__initData = tmp14;
  let tmp17 = null;
  const animatedStyle1 = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(ConjureSetupAskCardTsx2);
  if (conjureSetupAskCard.tags.length > 0) {
    const obj5 = { label: copy.title, size: "xs", items: null };
    const tags = conjureSetupAskCard.tags;
    obj5.items = tags.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.icon = _undefined(form[13]).KeyIcon;
      return obj;
    });
    tmp17 = closure_7(tmp3(tmp4[12]).TagGroup, obj5);
  }
  if ("superseded" === status) {
    const obj6 = { style: animatedStyle, children: null };
    const obj7 = { style: tmp2.card, children: null };
    const obj8 = { variant: "body-xs/semibold", color: "text-muted", children: copy.superseded };
    obj7.children = closure_7(tmp3(tmp4[15]).Text, obj8);
    obj6.children = closure_7(tmp9(tmp4[14]), obj7);
    let tmp28Result2 = closure_7(tmp9(tmp4[9]).View, obj6);
    const tmp9Result = tmp9(tmp4[14]);
  } else if ("inactive" === status) {
    const obj9 = { style: animatedStyle, children: null };
    const obj10 = { style: tmp2.card, children: null };
    const obj11 = { variant: "body-xs/semibold", color: "text-muted", children: copy.title };
    const items6 = [closure_7(tmp3(tmp4[15]).Text, obj11), tmp17];
    obj10.children = items6;
    obj9.children = closure_8(tmp9(tmp4[14]), obj10);
    tmp28Result2 = closure_7(tmp9(tmp4[9]).View, obj9);
    const tmp9Result4 = tmp9(tmp4[14]);
  } else if ("pending" === status) {
    const obj12 = { style: tmp2.card, children: tmp17 };
    tmp28Result2 = closure_7(tmp9(tmp4[14]), obj12);
  } else if ("saved" === status) {
    const obj13 = { style: animatedStyle, children: null };
    const obj14 = { style: tmp2.card, children: null };
    const obj15 = { style: tmp2.status, children: null };
    const obj16 = {
      style: animatedStyle1,
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      children: null,
    };
    const obj17 = { size: "xs", color: tmp9(tmp4[6]).colors.ICON_FEEDBACK_POSITIVE };
    obj16.children = closure_7(tmp3(tmp4[16]).CircleCheckIcon, obj17);
    const items7 = [closure_7(tmp9(tmp4[9]).View, obj16)];
    const obj18 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: copy.saved };
    items7[1] = closure_7(tmp3(tmp4[15]).Text, obj18);
    obj15.children = items7;
    const items8 = [closure_8(sharedValue, obj15), ,];
    let tmp28Result = null;
    if ("" !== conjureSetupAskCard.summary) {
      const obj19 = { variant: "body-sm/normal", color: "text-default", children: conjureSetupAskCard.summary };
      tmp28Result = closure_7(tmp3(tmp4[15]).Text, obj19);
    }
    items8[1] = tmp28Result;
    const obj20 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp3(tmp4[18]).intl;
    obj20.text = intl.string(tmp3(tmp4[18]).t.bt75uw);
    obj20.onPress = function onPress() {
      return openConjureSetupAskFormDefault(c0, _undefined2.editForm);
    };
    items8[2] = closure_7(tmp3(tmp4[17]).Button, obj20);
    obj14.children = items8;
    obj13.children = closure_8(tmp9(tmp4[14]), obj14);
    tmp28Result2 = closure_7(tmp9(tmp4[9]).View, obj13);
    const tmp9Result5 = tmp9(tmp4[14]);
  } else {
    const items9 = [tmp2.card];
    let cardAwaiting = conjureSetupAskCard.awaiting;
    if (cardAwaiting) {
      cardAwaiting = tmp2.cardAwaiting;
    }
    const obj21 = { style: null, holdsKeyboard: null, children: null };
    items9[1] = cardAwaiting;
    obj21.style = items9;
    obj21.holdsKeyboard = "inline" === state.presentation;
    let tmp20 = null;
    if (conjureSetupAskCard.awaiting) {
      tmp20 = closure_7(tmp3(tmp4[20]).ConjureAwaitingPulseRing, {});
    }
    const items10 = [tmp20, , , ,];
    let str2 = "text-muted";
    if (conjureSetupAskCard.awaiting) {
      str2 = "text-brand";
    }
    const obj22 = { variant: "body-xs/semibold", color: str2, children: copy.title };
    items10[1] = closure_7(tmp3(tmp4[15]).Text, obj22);
    let tmp22Result = null;
    if (null != conjureSetupAskCard.note) {
      const obj23 = { text: conjureSetupAskCard.note, variant: "body-sm/normal", color: "text-default" };
      tmp22Result = closure_7(tmp9(tmp4[21]), obj23);
    }
    items10[2] = tmp22Result;
    items10[3] = tmp17;
    if ("inline" === state.presentation) {
      const obj24 = {
        projectId,
        form,
        onSaved: conjureSetupAskCard.markSaved,
        onInputFocusChange: projectId.onInputFocusChange,
      };
      let askId = form.askId;
      if (askId == null) {
        const keys = form.request.keys;
        let joined;
        if (keys != null) {
          joined = keys.join(",");
        }
        askId = joined;
      }
      let tmp22Result2 = closure_7(InlineSettingsForm, obj24, askId);
    } else {
      const obj25 = {
        variant: "primary",
        size: "sm",
        onPress() {
          return openConjureSetupAskFormDefault(c0, form);
        },
        text: copy.open,
      };
      tmp22Result2 = closure_7(tmp3(tmp4[17]).Button, obj25);
    }
    items10[4] = tmp22Result2;
    obj21.children = items10;
    tmp28Result2 = closure_8(tmp9(tmp4[14]), obj21);
    const tmp9Result6 = tmp9(tmp4[14]);
  }
  return tmp28Result2;
}
