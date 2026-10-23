// === Module 12687: AcceptStep ===

// Module 12687 (AcceptStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import Text_Text from "Text/Text" /* 5232 */;
import components_Button_Button from "components/Button/Button" /* 5242 */;
import FastImageDefault from "FastImage" /* 5667 */;
import Stack_Stack from "Stack/Stack" /* 5975 */;
import ButtonGroup from "ButtonGroup" /* 6694 */;
import ModalScreen from "ModalScreen" /* 7898 */;
import ModalContent from "ModalContent" /* 7899 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12683 */;
import ModalFooter from "ModalFooter" /* 12686 */;
import GameOrganizationLinkedServerCardDefault from "GameOrganizationLinkedServerCard" /* 12688 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const onPress = fn(12681).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { text: { textAlign: "center" }, benefitCard: { flex: 1 }, benefitImage: { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitCard(arg0) {
  const cResult = c.c(9);
  ({ text, img } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === img) {
    if (cResult[1] === tmp4.benefitImage) {
      if (cResult[3] !== text) {
        const obj2 = { variant: "text-md/normal", color: "text-muted", children: text };
        const tmp13 = timestampProducer(Text_Text.Text, obj2);
        cResult[3] = text;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp4.benefitCard) {
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp11) {
            let tmp14 = cResult[8];
          }
          return tmp14;
        }
      }
      const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp4.benefitCard, children: null };
      const items = [cResult[2], tmp11];
      obj3.children = items;
      const tmp17 = React5(Stack_Stack.Stack, obj3);
      cResult[5] = tmp4.benefitCard;
      cResult[6] = cResult[2];
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  if (null != img) {
    const obj4 = { source: null, style: null, resizeMode: "cover", accessible: false };
    const obj5 = { uri: img };
    obj4.source = obj5;
    obj4.style = tmp4.benefitImage;
    let tmp8 = timestampProducer(FastImageDefault, obj4);
  } else {
    const obj6 = { style: tmp4.benefitImage };
    tmp8 = timestampProducer(View, obj6);
  }
  cResult[0] = img;
  img = tmp4.benefitImage;
  cResult[1] = img;
  cResult[2] = tmp8;
}) : (function BenefitCard(children) {
  const img = children.img;
  const tmp = closure_8();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.benefitCard, children: null };
  if (null != img) {
    const obj2 = { source: null, style: null, resizeMode: "cover", accessible: false };
    const obj3 = { uri: img };
    obj2.source = obj3;
    obj2.style = tmp.benefitImage;
    let tmp8 = timestampProducer(FastImageDefault, obj2);
    let tmp6 = timestampProducer;
  } else {
    tmp6 = timestampProducer;
    const obj4 = { style: tmp.benefitImage };
    tmp8 = timestampProducer(View, obj4);
  }
  const items = [tmp8, tmp6(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: children.text })];
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export const AcceptStep = ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptStep(code) {
  const cResult = c.c(20);
  const tmp4 = closure_8();
  const tmp6 = useResolvedGameOrganizationInviteDefault(code.code);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      onPress();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (null == tmp6) {
    return null;
  } else {
    ({ displayNoun, linkedGuild } = tmp6);
    if (cResult[1] !== displayNoun) {
      const intl = util.intl;
      let str = displayNoun;
      if (displayNoun == null) {
        str = "other";
      }
      const obj2 = { displayNoun: str };
      const formatToPlainStringResult = intl.formatToPlainString(_modDef2406.WmxMAI, obj2);
      cResult[1] = displayNoun;
      cResult[2] = formatToPlainStringResult;
      let tmp8 = formatToPlainStringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4.text) {
      if (cResult[4] === tmp8) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] !== linkedGuild) {
        const obj3 = { linkedGuild };
        const tmp15 = timestampProducer(GameOrganizationLinkedServerCardDefault, obj3);
        cResult[6] = linkedGuild;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp13) {
          let tmp16 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "heading-lg/semibold", children: null };
          const intl2 = util.intl;
          obj4.children = intl2.string(_modDef2406.yFqGy8);
          const tmp21 = timestampProducer(Text_Text.Text, obj4);
          cResult[11] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { text: null };
          const intl3 = util.intl;
          obj5.text = intl3.string(_modDef2406.WUVzdk);
          const tmp25 = timestampProducer(closure_9, obj5);
          cResult[12] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[12];
        }
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { spacing: nativeDefault.space.PX_24, children: null };
          const items = [tmp19, ];
          const obj7 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, children: null };
          const items1 = [tmp22, ];
          const obj8 = { text: null };
          const intl4 = util.intl;
          obj8.text = intl4.string(_modDef2406.MEQJ1m);
          items1[1] = timestampProducer(closure_9, obj8);
          obj7.children = items1;
          items[1] = React5(Stack_Stack.Stack, obj7);
          obj6.children = items;
          const tmp30 = React5(Stack_Stack.Stack, obj6);
          cResult[13] = tmp30;
          let tmp26 = tmp30;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] !== tmp16) {
          const obj9 = { children: null };
          const obj10 = { spacing: nativeDefault.space.PX_48, children: null };
          const items2 = [tmp16, tmp26];
          obj10.children = items2;
          obj9.children = React5(Stack_Stack.Stack, obj10);
          const tmp34 = timestampProducer(ModalContent.ModalContent, obj9);
          cResult[14] = tmp16;
          cResult[15] = tmp34;
          let tmp31 = tmp34;
        } else {
          tmp31 = cResult[15];
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj11 = { text: null, size: "lg", onPress: null };
          const intl5 = util.intl;
          obj11.text = intl5.string(_modDef2406.BaZ6nt);
          obj11.onPress = first;
          const tmp37 = timestampProducer(components_Button_Button.Button, obj11);
          cResult[16] = tmp37;
          let tmp35 = tmp37;
        } else {
          tmp35 = cResult[16];
        }
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj12 = { children: null };
          const obj13 = { children: null };
          const items3 = [tmp35, ];
          const obj14 = { text: null, size: "lg", variant: "secondary", onPress: null };
          const intl6 = util.intl;
          obj14.text = intl6.string(util.t["ETE/oC"]);
          obj14.onPress = onPress;
          items3[1] = timestampProducer(components_Button_Button.Button, obj14);
          obj13.children = items3;
          obj12.children = React5(ButtonGroup.ButtonGroup, obj13);
          const tmp42 = timestampProducer(ModalFooter.ModalFooter, obj12);
          cResult[17] = tmp42;
          let tmp38 = tmp42;
        } else {
          tmp38 = cResult[17];
        }
        if (cResult[18] !== tmp31) {
          const obj15 = { children: null };
          const items4 = [tmp31, tmp38];
          obj15.children = items4;
          const tmp45 = React5(ModalScreen.ModalScreen, obj15);
          cResult[18] = tmp31;
          cResult[19] = tmp45;
          let tmp43 = tmp45;
        } else {
          tmp43 = cResult[19];
        }
        return tmp43;
      }
      const obj16 = { spacing: nativeDefault.space.PX_24, children: null };
      const items5 = [tmp10, tmp13];
      obj16.children = items5;
      const tmp18 = React5(Stack_Stack.Stack, obj16);
      cResult[8] = tmp10;
      cResult[9] = tmp13;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
    const obj17 = { variant: "heading-xl/semibold", style: tmp4.text, children: tmp8 };
    const tmp12 = timestampProducer(Text_Text.Text, obj17);
    cResult[3] = tmp4.text;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  }
}) : (function AcceptStep(code) {
  const tmp4 = useResolvedGameOrganizationInviteDefault(code.code);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    const obj2 = { spacing: nativeDefault.space.PX_48, children: null };
    const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
    const intl6 = util.intl;
    if (str == null) {
      str = "other";
    }
    const obj = { children: null };
    const obj5 = { children: null };
    const obj6 = { displayNoun: str };
    obj4.children = intl6.formatToPlainString(_modDef2406.WmxMAI, obj6);
    const items = [timestampProducer(Text_Text.Text, obj4), ];
    const obj7 = { linkedGuild: tmp4.linkedGuild };
    items[1] = timestampProducer(GameOrganizationLinkedServerCardDefault, obj7);
    obj3.children = items;
    const items1 = [React5(Stack_Stack.Stack, obj3), ];
    const obj8 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj9 = { variant: "heading-lg/semibold", children: null };
    const intl = util.intl;
    obj9.children = intl.string(_modDef2406.yFqGy8);
    const items2 = [timestampProducer(Text_Text.Text, obj9), ];
    const obj10 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, children: null };
    const obj11 = { text: null };
    const intl2 = util.intl;
    obj11.text = intl2.string(_modDef2406.WUVzdk);
    const items3 = [timestampProducer(closure_9, obj11), ];
    const obj12 = { text: null };
    const intl3 = util.intl;
    obj12.text = intl3.string(_modDef2406.MEQJ1m);
    items3[1] = timestampProducer(closure_9, obj12);
    obj10.children = items3;
    items2[1] = React5(Stack_Stack.Stack, obj10);
    obj8.children = items2;
    items1[1] = React5(Stack_Stack.Stack, obj8);
    obj2.children = items1;
    obj5.children = React5(Stack_Stack.Stack, obj2);
    const items4 = [timestampProducer(ModalContent.ModalContent, obj5), ];
    const obj13 = { children: null };
    const obj14 = { children: null };
    const obj15 = { text: null, size: "lg", onPress: null };
    const intl4 = util.intl;
    obj15.text = intl4.string(_modDef2406.BaZ6nt);
    obj15.onPress = tmp5;
    const items5 = [timestampProducer(components_Button_Button.Button, obj15), ];
    const obj16 = { text: null, size: "lg", variant: "secondary", onPress: null };
    const intl5 = util.intl;
    obj16.text = intl5.string(util.t["ETE/oC"]);
    obj16.onPress = onPress;
    items5[1] = timestampProducer(components_Button_Button.Button, obj16);
    obj14.children = items5;
    obj13.children = React5(ButtonGroup.ButtonGroup, obj14);
    items4[1] = timestampProducer(ModalFooter.ModalFooter, obj13);
    obj.children = items4;
    return React5(ModalScreen.ModalScreen, obj);
  }
  tmp = closure_8();
});