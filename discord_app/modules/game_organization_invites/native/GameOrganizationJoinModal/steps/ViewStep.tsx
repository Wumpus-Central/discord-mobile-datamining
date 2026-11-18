// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const constants = fn(11856).GameOrganizationCharacterMode;
let closure_6 = fn(12194).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4823);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx",
);

export function ViewStep(code) {
  code = code.code;
  _require = undefined;
  importDefault = undefined;
  let selectedCharacterId;
  let found;
  const tmp = closure_9();
  _require = require("useNavigation").useNavigation();
  const tmp5 = require("useResolvedGameOrganizationInvite")(code);
  let characterMode;
  if (tmp5 != null) {
    characterMode = tmp5.characterMode;
  }
  let tmp7 = characterMode === constants.MULTI;
  importDefault = tmp7;
  let obj = require("useNavigation");
  let tmp8 = null;
  if (tmp7) {
    tmp8 = code;
  }
  const data = require("useGameOrganizationCharacterEligibilityFetch").useGameOrganizationCharacterEligibilityFetch(
    tmp8,
  ).data;
  const tmp9 = found(noop.useState(null), 2);
  selectedCharacterId = tmp9[0];
  found = undefined;
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  if (null == tmp5) {
    return null;
  } else {
    ({ displayNoun, organization } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun, lowercase: true };
    const tmp14 = tmp4(tmp3[9])(obj2);
    const obj3 = { spacing: tmp4(tmp3[13]).space.PX_48, children: null };
    const obj4 = { spacing: tmp4(tmp3[13]).space.PX_16, align: "center", children: null };
    const obj5 = { iconUrl: organization.iconUrl, size: 64, fallback: "guild" };
    items = [closure_7(tmp4(tmp3[14]), obj5)];
    const obj6 = { spacing: tmp4(tmp3[13]).space.PX_8, align: "center", children: null };
    const obj7 = { variant: "body-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[16]).intl;
    const obj8 = { noun: null };
    const obj9 = { displayNoun };
    obj8.noun = tmp4(tmp3[9])(obj9);
    obj7.children = intl3.formatToPlainString(tmp4(tmp3[17])["jKi+kc"], obj8);
    const items1 = [closure_7(tmp2(tmp3[15]).Text, obj7), ,];
    const obj10 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: null };
    const intl4 = tmp2(tmp3[16]).intl;
    const obj11 = {
      noun: tmp14,
      orgName: organization.name,
      gameName: tmp5.application.name,
      orgNameHook(children, arg1) {
        return closure_1_7(
          navigation(first[15]).Text,
          { variant: "heading-xl/semibold", color: "text-strong", children },
          arg1,
        );
      },
    };
    obj10.children = intl4.format(tmp4(tmp3[17]).gptW7Y, obj11);
    items1[1] = closure_7(tmp2(tmp3[15]).Heading, obj10);
    let tmp15Result = null != memberCount && null != maxMembers;
    if (tmp15Result) {
      const obj12 = {
        spacing: tmp4(tmp3[13]).space.PX_4,
        direction: "horizontal",
        align: "center",
        justify: "center",
        children: null,
      };
      const obj13 = { size: "xs", color: tmp4(tmp3[13]).colors.ICON_MUTED };
      const items2 = [closure_7(tmp2(tmp3[18]).GroupIcon, obj13)];
      const obj14 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
      const intl = tmp2(tmp3[16]).intl;
      const obj15 = { count: memberCount, max: maxMembers };
      obj14.children = intl.formatToPlainString(tmp4(tmp3[17]).VuENGl, obj15);
      items2[1] = closure_7(tmp2(tmp3[15]).Text, obj14);
      obj12.children = items2;
      tmp15Result = closure_8(tmp2(tmp3[12]).Stack, obj12);
    }
    items1[2] = tmp15Result;
    obj6.children = items1;
    items[1] = closure_8(tmp2(tmp3[12]).Stack, obj6);
    obj4.children = items;
    const items3 = [closure_8(tmp2(tmp3[12]).Stack, obj4)];
    let tmp16Result = tmp7;
    if (tmp7) {
      const obj16 = { characters: data, selectedCharacterId, onSelect: tmp9[1], noun: tmp14 };
      tmp16Result = closure_7(tmp4(tmp3[19]), obj16);
    }
    const obj17 = { children: null };
    items3[1] = tmp16Result;
    obj3.children = items3;
    obj17.children = closure_8(tmp2(tmp3[12]).Stack, obj3);
    const items4 = [closure_7(tmp2(tmp3[11]).ModalContent, obj17)];
    const obj18 = { text: null, size: "lg", disabled: null, onPress: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj18.text = intl2.string(tmp2(tmp3[16]).t["3PatSz"]);
    if (tmp7) {
      tmp7 = null == found;
    }
    const obj19 = { children: null };
    const obj20 = { children: null };
    obj18.disabled = tmp7;
    obj18.onPress = function onPress() {
      let tmp2;
      if (closure_1) {
        if (null != found) {
          const obj = { character: tmp3 };
          tmp2 = obj;
        }
      }
      return navigation.navigate(constants.ACCEPT, tmp2);
    };
    obj20.children = closure_7(tmp2(tmp3[21]).Button, obj18);
    items4[1] = closure_7(tmp2(tmp3[20]).ModalFooter, obj20);
    obj19.children = items4;
    return closure_8(tmp2(tmp3[10]).ModalScreen, obj19);
  }
  const tmp2Result = require("useGameOrganizationCharacterEligibilityFetch");
}
