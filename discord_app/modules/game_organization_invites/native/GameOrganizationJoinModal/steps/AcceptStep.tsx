// === Module 13980: AcceptStep ===

// Module 13980 (AcceptStep)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const GameOrganizationJoinModalConstants = fn(13974);
({ closeGameOrganizationJoinModal: closure_6, GameOrganizationJoinScenes: metroImportDefault } = GameOrganizationJoinModalConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" }, buttonGroup: { paddingVertical: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export function AcceptStep(code) {
  code = code.code;
  let character = code.character;
  let navigation;
  disabled = undefined;
  _slicedToArray = undefined;
  noop = async function _handleAcceptInvite() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            character = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let guild_join_status;
            _slicedToArray(true);
            c4 = 2;
            let id;
            if (id != null) {
              id = id.id;
            }
            c5 = 3;
            c6 = 1;
            const obj5 = { value: character(tmp4[9]).acceptGameOrganizationInvite(code, id), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_130_4(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            const obj6 = { text: null };
            const intl = character(tmp4[11]).intl;
            obj6.text = intl.string(character(tmp4[11]).t.fEptJP);
            character(tmp4[10]).open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj6);
            c4 = 0;
            closure_130_4(false);
            c6 = 3;
            const obj2 = character(tmp4[10]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_0 = value;
            closure_129_1 = closure_129_0.game_organization_join_status;
            closure_129_2 = closure_129_0.game_organization_join_failure_reason;
            guild_join_status = closure_129_0.guild_join_status;
            const obj7 = { joinStatus: closure_129_1, failureReason: closure_129_2, guildJoinStatus: guild_join_status, character: null };
            character = closure_130_1;
            if (closure_130_1 == null) {
              character = null;
            }
            obj7.character = character;
            closure_130_2.push(constants.OUTCOME, obj7);
            c4 = 1;
          }
          c4 = 0;
          closure_130_4(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp30) {
        closure_3 = tmp30;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp30;
        } else if (tmp2 === tmp32) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp = closure_10();
  const tmp4 = character(navigation[6])(code);
  navigation = code(navigation[7]).useNavigation();
  [disabled, _slicedToArray] = noop.useState(false);
  items = [navigation, disabled];
  const layoutEffect = noop.useLayoutEffect(() => {
    const headerBackButton = code(navigation[8]).getHeaderBackButton(undefined, first);
    navigation.setOptions({
      headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.disabled = disabled;
        return closure_0(obj);
      },
      gestureEnabled: !first
    });
  }, items);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    let obj2 = { spacing: tmp2(tmp3[15]).space.PX_48, children: null };
    let obj3 = { spacing: tmp2(tmp3[15]).space.PX_24, children: null };
    let obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
    const intl4 = tmp5(tmp3[11]).intl;
    if (str == null) {
      str = "other";
    }
    let obj5 = { children: null };
    let obj6 = { children: null };
    let obj7 = { displayNoun: str };
    obj4.children = intl4.formatToPlainString(tmp2(tmp3[17]).WmxMAI, obj7);
    const items1 = [closure_8(tmp5(tmp3[16]).Text, obj4), ];
    const obj8 = { linkedGuild: tmp4.linkedGuild };
    items1[1] = closure_8(tmp2(tmp3[18]), obj8);
    obj3.children = items1;
    const items2 = [closure_9(tmp5(tmp3[14]).Stack, obj3), ];
    const obj9 = { spacing: tmp2(tmp3[15]).space.PX_24, children: null };
    const obj10 = { variant: "heading-lg/semibold", children: null };
    let intl = tmp5(tmp3[11]).intl;
    obj10.children = intl.string(tmp2(tmp3[17]).yFqGy8);
    const items3 = [closure_8(tmp5(tmp3[16]).Text, obj10), closure_8(tmp2(tmp3[19]), {})];
    obj9.children = items3;
    items2[1] = closure_9(tmp5(tmp3[14]).Stack, obj9);
    obj2.children = items2;
    obj6.children = closure_9(tmp5(tmp3[14]).Stack, obj2);
    const items4 = [closure_8(tmp5(tmp3[13]).ModalContent, obj6), ];
    const obj11 = { children: null };
    const obj12 = { style: tmp.buttonGroup, children: null };
    const obj13 = { text: null, size: "lg", loading: null, disabled: null, onPress: null };
    const intl2 = tmp5(tmp3[11]).intl;
    obj13.text = intl2.string(tmp2(tmp3[17]).BaZ6nt);
    obj13.loading = disabled;
    obj13.disabled = disabled;
    obj13.onPress = function handleAcceptInvite() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items5 = [closure_8(tmp5(tmp3[22]).Button, obj13), ];
    const obj14 = { text: null, size: "lg", variant: "secondary", onPress: null, disabled: null };
    const intl3 = tmp5(tmp3[11]).intl;
    obj14.text = intl3.string(tmp5(tmp3[11]).t["ETE/oC"]);
    obj14.onPress = onPress;
    obj14.disabled = disabled;
    items5[1] = closure_8(tmp5(tmp3[22]).Button, obj14);
    obj12.children = items5;
    obj11.children = closure_9(tmp5(tmp3[21]).ButtonGroup, obj12);
    items4[1] = closure_8(tmp5(tmp3[20]).ModalFooter, obj11);
    obj5.children = items4;
    return closure_9(tmp5(tmp3[12]).ModalScreen, obj5);
  }
  let obj = code(navigation[7]);
}