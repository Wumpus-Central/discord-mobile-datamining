// discord_app/modules/conjure/secrets/native/ConjureSecretRequestCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import ConjureSecretsSheet from "ConjureSecretsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const ConjureSecretsSheetDefault = ConjureSecretsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  cardAwaiting: null,
  status: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.cardAwaiting = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.status = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function ConjureSecretRequestCardTsx1(){let[enter,tokens]=this.__closure;return{opacity:enter.get(),transform:[{translateY:(enter.get()-1)*tokens.space.PX_4}]};})",
};
let closure_10 = {
  code: "(function ConjureSecretRequestCardTsx2(){let[enter]=this.__closure;return{opacity:enter.get(),transform:[{scale:0.5+enter.get()*0.5}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretRequestCard.tsx");

export default function ConjureSecretRequestCard(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  ({ cardId, request } = projectId);
  importDefault = request;
  ({ status, awaiting } = projectId);
  let secretRequestStatusChanged;
  let stateFromStores;
  const tmp = closure_8();
  items = [projectId, request];
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
      icon: projectId(secretRequestStatusChanged[8]).KeyIcon,
    }));
  }, items1);
  secretRequestStatusChanged = require("ConjureSecretRequestState").useSecretRequestStatusChanged(cardId, status);
  let obj = require("ConjureSecretRequestState");
  const items2 = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let obj2 = require("initialize");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const items3 = [sharedValue, secretRequestStatusChanged, status, stateFromStores, cardId];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    if (secretRequestStatusChanged) {
      if (!stateFromStores) {
        const result = sharedValue.set(0);
        const result1 = sharedValue.set(spring_spring.withSpring(1, springPresets.SUBTLE_SPRING));
      }
    }
    const result2 = sharedValue.set(1);
  }, items3);
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  const items4 = [closure_9, sharedValue, require("native")];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class ConjureSecretRequestCardTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { translateY: (closure_0.get() - 1) * closure_1.space.PX_4 };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp12, tmp13];
  ConjureSecretRequestCardTsx1.__closure = items5;
  ConjureSecretRequestCardTsx1.__workletHash = 101085677007;
  ConjureSecretRequestCardTsx1.__initData = tmp11;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ConjureSecretRequestCardTsx1,
  );
  require("../../../../../_runtime/metro/01652__.js");
  const items6 = [closure_10, sharedValue];
  _require = undefined;
  [tmp16, tmp17] = items6;
  class ConjureSecretRequestCardTsx2 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { scale: 0.5 + 0.5 * closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp17];
  ConjureSecretRequestCardTsx2.__closure = items7;
  ConjureSecretRequestCardTsx2.__workletHash = 10584084520150;
  ConjureSecretRequestCardTsx2.__initData = tmp16;
  if ("superseded" === status) {
    const obj5 = { style: animatedStyle, children: null };
    const obj6 = { style: tmp.card, children: null };
    const obj7 = { variant: "body-xs/semibold", color: "text-muted", children: null };
    const intl9 = tmp4(tmp5[16]).intl;
    obj7.children = intl9.string(tmp10(tmp5[17]).CTxtdV);
    obj6.children = closure_6(tmp4(tmp5[15]).Text, obj7);
    obj5.children = closure_6(tmp10(tmp5[14]), obj6);
    let tmp35Result = closure_6(tmp10(tmp5[11]).View, obj5);
    const tmp10Result = tmp10(tmp5[14]);
  } else if ("inactive" === status) {
    const obj8 = { style: animatedStyle, children: null };
    const obj9 = { style: tmp.card, children: null };
    const obj10 = { variant: "body-xs/semibold", color: "text-muted", children: null };
    const intl7 = tmp4(tmp5[16]).intl;
    obj10.children = intl7.string(tmp10(tmp5[17]).HCQvpO);
    const items8 = [closure_6(tmp4(tmp5[15]).Text, obj10)];
    const obj11 = { label: null, size: "xs", items: null };
    const intl8 = tmp4(tmp5[16]).intl;
    obj11.label = intl8.string(tmp10(tmp5[17]).HCQvpO);
    obj11.items = memo;
    items8[1] = closure_6(tmp4(tmp5[18]).TagGroup, obj11);
    obj9.children = items8;
    obj8.children = closure_7(tmp10(tmp5[14]), obj9);
    tmp35Result = closure_6(tmp10(tmp5[11]).View, obj8);
    const tmp10Result5 = tmp10(tmp5[14]);
  } else if ("pending" === status) {
    const obj12 = { style: tmp.card, children: null };
    const obj13 = { label: null, size: "xs", items: null };
    const intl6 = tmp4(tmp5[16]).intl;
    obj13.label = intl6.string(tmp10(tmp5[17]).HCQvpO);
    obj13.items = memo;
    obj12.children = closure_6(tmp4(tmp5[18]).TagGroup, obj13);
    tmp35Result = closure_6(tmp10(tmp5[14]), obj12);
    const tmp10Result6 = tmp10(tmp5[14]);
  } else if ("received" === status) {
    const obj14 = { style: animatedStyle, children: null };
    const obj15 = { style: tmp.card, children: null };
    const obj16 = { style: tmp.status, children: null };
    const obj17 = {
      style: tmp18,
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      children: null,
    };
    const obj18 = { size: "xs", color: tmp10(tmp5[5]).colors.ICON_FEEDBACK_POSITIVE };
    obj17.children = closure_6(tmp4(tmp5[19]).CircleCheckIcon, obj18);
    const items9 = [closure_6(tmp10(tmp5[11]).View, obj17)];
    const obj19 = { variant: "body-xs/semibold", color: "text-feedback-positive", children: null };
    const intl5 = tmp4(tmp5[16]).intl;
    obj19.children = intl5.string(tmp10(tmp5[17]).sfp7Up);
    items9[1] = closure_6(tmp4(tmp5[15]).Text, obj19);
    obj16.children = items9;
    const items10 = [closure_7(sharedValue, obj16)];
    const obj20 = { variant: "body-sm/normal", color: "text-default", children: null };
    const tmp10Result7 = tmp10(tmp5[14]);
    let fields = request.fields;
    obj20.children = tmp4(tmp5[20]).conjureConnectedKeysSummary(fields.map((label) => label.label));
    items10[1] = closure_6(tmp4(tmp5[15]).Text, obj20);
    obj15.children = items10;
    obj14.children = closure_7(tmp10Result7, obj15);
    tmp35Result = closure_6(tmp10(tmp5[11]).View, obj14);
    const tmp4Result2 = tmp4(tmp5[20]);
  } else {
    const items11 = [tmp.card];
    let cardAwaiting = null != awaiting;
    if (cardAwaiting) {
      cardAwaiting = tmp.cardAwaiting;
    }
    const obj21 = { style: null, children: null };
    items11[1] = cardAwaiting;
    obj21.style = items11;
    let tmp19 = null;
    if (null != awaiting) {
      tmp19 = closure_6(tmp4(tmp5[21]).ConjureAwaitingPulseRing, {});
    }
    const items12 = [tmp19, , , ,];
    let str = "text-muted";
    if (null != awaiting) {
      str = "text-brand";
    }
    const obj22 = { variant: "body-xs/semibold", color: str, children: null };
    const intl = tmp4(tmp5[16]).intl;
    if (null != awaiting) {
      let HCQvpO = tmp10(tmp5[17]).O0QIqj;
    } else {
      HCQvpO = tmp10(tmp5[17]).HCQvpO;
    }
    obj22.children = intl.string(HCQvpO);
    items12[1] = closure_6(tmp4(tmp5[15]).Text, obj22);
    if (null != request.note) {
      if ("" !== request.note) {
        let note = request.note;
      }
      const obj23 = { text: note, variant: "body-sm/normal", color: "text-default" };
      items12[2] = closure_6(tmp22, obj23);
      const obj24 = { label: null, size: "xs", items: null };
      const intl3 = tmp4(tmp5[16]).intl;
      obj24.label = intl3.string(tmp10(tmp5[17]).HCQvpO);
      obj24.items = memo;
      items12[3] = closure_6(tmp4(tmp5[18]).TagGroup, obj24);
      const obj25 = { variant: "primary", size: "sm", onPress: callback, text: null };
      const intl4 = tmp4(tmp5[16]).intl;
      obj25.text = intl4.string(tmp10(tmp5[17]).EK8tKY);
      items12[4] = closure_6(tmp4(tmp5[23]).Button, obj25);
      obj21.children = items12;
      tmp35Result = closure_7(tmp10Result8, obj21);
    }
    const intl2 = tmp4(tmp5[16]).intl;
    note = intl2.string(tmp10(tmp5[17]).MPGSHL);
    tmp10Result8 = tmp10(tmp5[14]);
  }
  return tmp35Result;
}
