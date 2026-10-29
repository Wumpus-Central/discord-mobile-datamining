// === Module 13008: AcceptStep ===

// Module 13008 (AcceptStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5271 */;
import FastImageDefault from "FastImage" /* 5707 */;
import Stack_Stack from "Stack/Stack" /* 6015 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GameOrganizationJoinModalConstants = fn(13000);
({ closeGameOrganizationJoinModal: closure_7, GameOrganizationJoinScenes: closure_8 } = GameOrganizationJoinModalConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { text: { textAlign: "center" }, benefitCard: { flex: 1 }, benefitImage: { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitCard(arg0) {
  const cResult = c.c(9);
  ({ text, img } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === img) {
    if (cResult[1] === tmp4.benefitImage) {
      if (cResult[3] !== text) {
        const obj2 = { variant: "text-md/normal", color: "text-muted", children: text };
        const tmp13 = React6(Text_Text.Text, obj2);
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
      const tmp17 = v65535(Stack_Stack.Stack, obj3);
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
    let tmp8 = React6(FastImageDefault, obj4);
  } else {
    const obj6 = { style: tmp4.benefitImage };
    tmp8 = React6(View, obj6);
  }
  cResult[0] = img;
  img = tmp4.benefitImage;
  cResult[1] = img;
  cResult[2] = tmp8;
}) : (function BenefitCard(children) {
  const img = children.img;
  const tmp = closure_11();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.benefitCard, children: null };
  if (null != img) {
    const obj2 = { source: null, style: null, resizeMode: "cover", accessible: false };
    const obj3 = { uri: img };
    obj2.source = obj3;
    obj2.style = tmp.benefitImage;
    let tmp8 = React6(FastImageDefault, obj2);
    let tmp6 = React6;
  } else {
    tmp6 = React6;
    const obj4 = { style: tmp.benefitImage };
    tmp8 = React6(View, obj4);
  }
  const items = [tmp8, tmp6(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: children.text })];
  obj.children = items;
  return v65535(Stack_Stack.Stack, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export function AcceptStep(code) {
  code = code.code;
  let character = code.character;
  c3 = undefined;
  _slicedToArray = async function _handleAcceptInvite(noop) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (noop === 1) {
            c6 = 3;
            throw value;
          } else if (noop === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            character = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let guild_join_status;
            asyncGeneratorStep(true);
            c4 = 2;
            let id;
            if (id != null) {
              id = id.id;
            }
            c5 = 3;
            c6 = 1;
            const obj5 = { value: character(tmp4[15]).acceptGameOrganizationInvite(code, id), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_130_3(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            const obj6 = { text: null };
            const intl = characterName(tmp4[17]).intl;
            obj6.text = intl.string(characterName(tmp4[17]).t.fEptJP);
            character(tmp4[16]).open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj6);
            c4 = 0;
            closure_130_3(false);
            c6 = 3;
            const obj2 = character(tmp4[16]);
          } else if (noop === 1) {
            c6 = 3;
            throw value;
          } else if (noop !== 2) {
            closure_129_0 = value;
            closure_129_1 = closure_129_0.game_organization_join_status;
            closure_129_2 = closure_129_0.game_organization_join_failure_reason;
            guild_join_status = closure_129_0.guild_join_status;
            const obj7 = { joinStatus: closure_129_1, failureReason: closure_129_2, guildJoinStatus: guild_join_status, characterName: null };
            let name;
            if (closure_130_1 != null) {
              name = closure_130_1.name;
            }
            characterName = name;
            if (name == null) {
              characterName = null;
            }
            obj7.characterName = characterName;
            closure_130_2.push(constants.OUTCOME, obj7);
            c4 = 1;
          }
          c4 = 0;
          closure_130_3(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp31;
        } else if (tmp2 === tmp33) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp4 = character(13002)(code);
  const tmp = closure_11();
  dependencyMap = code(1503).useNavigation();
  let obj = code(1503);
  [tmp7, c3] = noop.useState(false);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    let obj2 = { spacing: tmp2(587).space.PX_48, children: null };
    let obj3 = { spacing: tmp2(587).space.PX_24, children: null };
    let obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
    const intl6 = tmp5(1125).intl;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: null };
    let obj6 = { children: null };
    let obj7 = { displayNoun: str };
    obj4.children = intl6.formatToPlainString(tmp2(2404).WmxMAI, obj7);
    const items = [closure_9(tmp5(5271).Text, obj4), ];
    const obj8 = { linkedGuild: tmp4.linkedGuild };
    items[1] = closure_9(tmp2(13009), obj8);
    obj3.children = items;
    const items1 = [closure_10(tmp5(6015).Stack, obj3), ];
    const obj9 = { spacing: tmp2(587).space.PX_24, children: null };
    const obj10 = { variant: "heading-lg/semibold", children: null };
    let intl = tmp5(1125).intl;
    obj10.children = intl.string(tmp2(2404).yFqGy8);
    const items2 = [closure_9(tmp5(5271).Text, obj10), ];
    const obj11 = { direction: "horizontal", spacing: tmp2(587).space.PX_16, children: null };
    const obj12 = { text: null };
    const intl2 = tmp5(1125).intl;
    obj12.text = intl2.string(tmp2(2404).WUVzdk);
    const items3 = [closure_9(closure_12, obj12), ];
    const obj13 = { text: null };
    const intl3 = tmp5(1125).intl;
    obj13.text = intl3.string(tmp2(2404).MEQJ1m);
    items3[1] = closure_9(closure_12, obj13);
    obj11.children = items3;
    items2[1] = closure_10(tmp5(6015).Stack, obj11);
    obj9.children = items2;
    items1[1] = closure_10(tmp5(6015).Stack, obj9);
    obj2.children = items1;
    obj6.children = closure_10(tmp5(6015).Stack, obj2);
    const items4 = [closure_9(tmp5(7959).ModalContent, obj6), ];
    const obj14 = { children: null };
    const obj15 = { children: null };
    const obj16 = { text: null, size: "lg", loading: null, disabled: null, onPress: null };
    const intl4 = tmp5(1125).intl;
    obj16.text = intl4.string(tmp2(2404).BaZ6nt);
    obj16.loading = tmp7;
    obj16.disabled = tmp7;
    obj16.onPress = function handleAcceptInvite() {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items5 = [closure_9(tmp5(5281).Button, obj16), ];
    const obj17 = { text: null, size: "lg", variant: "secondary", onPress: null, disabled: null };
    const intl5 = tmp5(1125).intl;
    obj17.text = intl5.string(tmp5(1125).t["ETE/oC"]);
    obj17.onPress = onPress;
    obj17.disabled = tmp7;
    items5[1] = closure_9(tmp5(5281).Button, obj17);
    obj15.children = items5;
    obj14.children = closure_10(tmp5(6754).ButtonGroup, obj15);
    items4[1] = closure_9(tmp5(13007).ModalFooter, obj14);
    obj5.children = items4;
    return closure_10(tmp5(7958).ModalScreen, obj5);
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
}