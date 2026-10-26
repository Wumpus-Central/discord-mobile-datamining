// === Module 12731: AcceptStep ===

// Module 12731 (AcceptStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5234 */;
import FastImageDefault from "FastImage" /* 5669 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12727 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GameOrganizationJoinModalConstants = fn(12725);
({ closeGameOrganizationJoinModal: closure_7, GameOrganizationJoinScenes: closure_8 } = GameOrganizationJoinModalConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4971);
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

export const AcceptStep = function AcceptStep(code) {
  code = code.code;
  dependencyMap = undefined;
  closure_3 = async function _handleAcceptInvite() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            code = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            let guild_join_status;
            dependencyMap(true);
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj6 = { value: tmp4(tmp32[15]).acceptGameOrganizationInvite(code), done: false };
            return obj6;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_2(false);
          throw tmp32;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            const obj7 = { text: null };
            const intl = code(tmp32[17]).intl;
            obj7.text = intl.string(code(tmp32[17]).t.fEptJP);
            tmp4(tmp32[16]).open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj7);
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            const obj2 = tmp4(tmp32[16]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            closure_128_1 = closure_128_0.game_organization_join_status;
            closure_128_2 = closure_128_0.game_organization_join_failure_reason;
            guild_join_status = closure_128_0.guild_join_status;
            const obj8 = { joinStatus: closure_128_1, failureReason: closure_128_2, guildJoinStatus: guild_join_status };
            closure_129_1.push(constants.OUTCOME, obj8);
            c3 = 1;
          }
          c3 = 0;
          closure_129_2(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp32) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp32;
        } else if (tmp2 === tmp34) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  const tmp = closure_11();
  importDefault = code(1505).useNavigation();
  let obj = code(1505);
  [tmp7, c2] = noop.useState(false);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    let obj2 = { spacing: tmp2(587).space.PX_48, children: null };
    let obj3 = { spacing: tmp2(587).space.PX_24, children: null };
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
    const intl6 = tmp5(1128).intl;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: null };
    let obj6 = { children: null };
    let obj7 = { displayNoun: str };
    obj4.children = intl6.formatToPlainString(tmp2(2406).WmxMAI, obj7);
    const items = [closure_9(tmp5(5234).Text, obj4), ];
    let obj8 = { linkedGuild: tmp4.linkedGuild };
    items[1] = closure_9(tmp2(12732), obj8);
    obj3.children = items;
    const items1 = [closure_10(tmp5(5977).Stack, obj3), ];
    const obj9 = { spacing: tmp2(587).space.PX_24, children: null };
    const obj10 = { variant: "heading-lg/semibold", children: null };
    let intl = tmp5(1128).intl;
    obj10.children = intl.string(tmp2(2406).yFqGy8);
    const items2 = [closure_9(tmp5(5234).Text, obj10), ];
    const obj11 = { direction: "horizontal", spacing: tmp2(587).space.PX_16, children: null };
    const obj12 = { text: null };
    const intl2 = tmp5(1128).intl;
    obj12.text = intl2.string(tmp2(2406).WUVzdk);
    const items3 = [closure_9(closure_12, obj12), ];
    const obj13 = { text: null };
    const intl3 = tmp5(1128).intl;
    obj13.text = intl3.string(tmp2(2406).MEQJ1m);
    items3[1] = closure_9(closure_12, obj13);
    obj11.children = items3;
    items2[1] = closure_10(tmp5(5977).Stack, obj11);
    obj9.children = items2;
    items1[1] = closure_10(tmp5(5977).Stack, obj9);
    obj2.children = items1;
    obj6.children = closure_10(tmp5(5977).Stack, obj2);
    const items4 = [closure_9(tmp5(7901).ModalContent, obj6), ];
    const obj14 = { children: null };
    const obj15 = { children: null };
    const obj16 = { text: null, size: "lg", loading: null, disabled: null, onPress: null };
    const intl4 = tmp5(1128).intl;
    obj16.text = intl4.string(tmp2(2406).BaZ6nt);
    obj16.loading = tmp7;
    obj16.disabled = tmp7;
    obj16.onPress = function handleAcceptInvite() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items5 = [closure_9(tmp5(5244).Button, obj16), ];
    const obj17 = { text: null, size: "lg", variant: "secondary", onPress: null, disabled: null };
    const intl5 = tmp5(1128).intl;
    obj17.text = intl5.string(tmp5(1128).t["ETE/oC"]);
    obj17.onPress = onPress;
    obj17.disabled = tmp7;
    items5[1] = closure_9(tmp5(5244).Button, obj17);
    obj15.children = items5;
    obj14.children = closure_10(tmp5(6696).ButtonGroup, obj15);
    items4[1] = closure_9(tmp5(12730).ModalFooter, obj14);
    obj5.children = items4;
    return closure_10(tmp5(7900).ModalScreen, obj5);
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
};