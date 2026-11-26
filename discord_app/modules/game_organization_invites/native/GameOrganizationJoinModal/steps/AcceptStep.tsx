// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const GameOrganizationInviteConstants = fn(11917);
({ GameOrganizationCharacterMode: metroImportDefault, GameOrganizationInviteAcceptStatus: closure_8 } =
  GameOrganizationInviteConstants);
const onPress = fn(12333).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  text: { textAlign: "center" },
  buttonGroup: { paddingVertical: 0 },
  divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx",
);

export function AcceptStep(code) {
  code = code.code;
  let character = code.character;
  let navigation;
  closure_3 = undefined;
  let disabled;
  noop = undefined;
  closure_6 = async function _handleAcceptInvite() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            character = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            noop(true);
            c4 = 2;
            let id;
            if (id != null) {
              id = id.id;
            }
            c5 = 3;
            c6 = 1;
            const obj5 = { value: character(tmp4[12]).acceptGameOrganizationInvite(code, id), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_130_5(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            const obj7 = { text: null };
            const intl = character(tmp4[16]).intl;
            obj7.text = intl.string(character(tmp4[16]).t.fEptJP);
            character(tmp4[15]).open("GAME_ORGANIZATION_INVITE_ACCEPT_ERROR", obj7);
            c4 = 0;
            closure_130_5(false);
            c6 = 3;
            const obj4 = character(tmp4[15]);
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_129_0 = value;
                closure_129_1 = closure_129_0.game_organization_join_status;
                const obj8 = {
                  joinStatus: closure_129_1,
                  failureReason: closure_129_0.game_organization_join_failure_reason,
                  guildJoinStatus: closure_129_0.guild_join_status,
                  character: null,
                };
                character = closure_130_1;
                if (closure_130_1 == null) {
                  character = null;
                }
                obj8.character = character;
                closure_129_2 = obj8;
                if (closure_129_1 === constants.JOINED) {
                  onPress();
                  character(tmp4[13])(closure_130_0, closure_129_2);
                } else {
                  c5 = 4;
                  c6 = 1;
                  const obj9 = { value: character(tmp4[14])(closure_130_0, closure_129_2), done: false };
                  return obj9;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_5(false);
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              onPress();
            }
            c4 = 1;
          }
          c4 = 0;
          closure_130_5(false);
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
      } catch (tmp59) {
        closure_3 = tmp59;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp59;
        } else if (tmp2 === tmp61) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  const tmp4 = character(navigation[9])(code);
  navigation = code(navigation[10]).useNavigation();
  let characterMode;
  if (tmp4 != null) {
    characterMode = tmp4.characterMode;
  }
  closure_3 = tmp8;
  const tmp9 = disabled(noop.useState(false), 2);
  disabled = tmp9[0];
  noop = tmp9[1];
  items = [navigation, disabled, characterMode === constants.SINGLE];
  const layoutEffect = noop.useLayoutEffect(() => {
    let obj = code(navigation[11]);
    if (closure_3) {
      let headerCloseButton = obj.getHeaderCloseButton(() => {
        if (!first) {
          onPress();
        }
      });
    } else {
      headerCloseButton = obj.getHeaderBackButton(undefined, first);
    }
    navigation.setOptions({
      headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.disabled = disabled;
        return headerCloseButton(obj);
      },
      gestureEnabled: !first,
    });
    const obj2 = {
      headerLeft(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.disabled = disabled;
        return headerCloseButton(obj);
      },
      gestureEnabled: !first,
    };
  }, items);
  if (null == tmp4) {
    return null;
  } else {
    const displayNoun = tmp4.displayNoun;
    let obj2 = { spacing: tmp2(tmp3[8]).space.PX_32, children: null };
    let tmp17Result = tmp8;
    if (tmp8) {
      let obj3 = { children: null };
      let obj4 = { invite: tmp4 };
      const items1 = [closure_10(tmp2(tmp3[20]), obj4)];
      let obj5 = { style: tmp.divider };
      items1[1] = closure_10(closure_6, obj5);
      obj3.children = items1;
      tmp17Result = closure_12(closure_11, obj3);
    }
    const items2 = [tmp17Result];
    const obj6 = { spacing: tmp2(tmp3[8]).space.PX_48, children: null };
    let obj7 = { spacing: tmp2(tmp3[8]).space.PX_24, children: null };
    let obj8 = { variant: "heading-lg/semibold", style: tmp.text, children: null };
    let intl = tmp5(tmp3[16]).intl;
    let str = displayNoun;
    if (displayNoun == null) {
      str = "other";
    }
    let obj9 = { displayNoun: str };
    obj8.children = intl.formatToPlainString(tmp2(tmp3[22]).WmxMAI, obj9);
    const items3 = [closure_10(tmp5(tmp3[21]).Text, obj8)];
    let obj10 = { linkedGuild: tmp4.linkedGuild };
    items3[1] = closure_10(tmp2(tmp3[23]), obj10);
    obj7.children = items3;
    const items4 = [closure_12(tmp5(tmp3[19]).Stack, obj7)];
    const obj11 = { spacing: tmp2(tmp3[8]).space.PX_24, children: null };
    let tmp18Result = !tmp8;
    if (!tmp8) {
      const obj12 = { variant: "heading-lg/semibold", children: null };
      const intl2 = tmp5(tmp3[16]).intl;
      obj12.children = intl2.string(tmp2(tmp3[24]).Tt5YbA);
      tmp18Result = closure_10(tmp5(tmp3[21]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    const items5 = [tmp18Result];
    const obj15 = { displayNoun };
    items5[1] = closure_10(tmp2(tmp3[25]), obj15);
    obj11.children = items5;
    items4[1] = closure_12(tmp5(tmp3[19]).Stack, obj11);
    obj6.children = items4;
    items2[1] = closure_12(tmp5(tmp3[19]).Stack, obj6);
    obj2.children = items2;
    obj14.children = closure_12(tmp5(tmp3[19]).Stack, obj2);
    const items6 = [closure_10(tmp5(tmp3[18]).ModalContent, obj14)];
    const obj16 = { children: null };
    const obj17 = { style: tmp.buttonGroup, children: null };
    const obj18 = { text: null, size: "lg", loading: null, disabled: null, onPress: null };
    const intl3 = tmp5(tmp3[16]).intl;
    obj18.text = intl3.string(tmp2(tmp3[22]).BaZ6nt);
    obj18.loading = disabled;
    obj18.disabled = disabled;
    obj18.onPress = function handleAcceptInvite() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items7 = [closure_10(tmp5(tmp3[28]).Button, obj18)];
    const obj19 = { text: null, size: "lg", variant: "secondary", onPress: null, disabled: null };
    const intl4 = tmp5(tmp3[16]).intl;
    obj19.text = intl4.string(tmp5(tmp3[16]).t["ETE/oC"]);
    obj19.onPress = onPress;
    obj19.disabled = disabled;
    items7[1] = closure_10(tmp5(tmp3[28]).Button, obj19);
    obj17.children = items7;
    obj16.children = closure_12(tmp5(tmp3[27]).ButtonGroup, obj17);
    items6[1] = closure_10(tmp5(tmp3[26]).ModalFooter, obj16);
    obj13.children = items6;
    return closure_12(tmp5(tmp3[17]).ModalScreen, obj13);
  }
  let obj = code(navigation[10]);
}
