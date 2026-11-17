// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const constants = fn(12573).GameOrganizationCharacterMode;
let closure_6 = fn(12898).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5310);
let closure_9 = createStyles.createStyles({ text: { textAlign: "center" }, inlineStack: { width: "auto" } });
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
    ({ displayNoun, organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun, lowercase: true };
    const tmp14 = tmp4(tmp3[9])(obj2);
    const obj3 = { spacing: tmp4(tmp3[13]).space.PX_48, children: null };
    const obj4 = { spacing: tmp4(tmp3[13]).space.PX_16, align: "center", children: null };
    const obj5 = { iconUrl: organization.iconUrl, size: 64 };
    items = [closure_7(tmp4(tmp3[14]), obj5)];
    const obj6 = { spacing: tmp4(tmp3[13]).space.PX_8, align: "center", children: null };
    const obj7 = {
      spacing: tmp4(tmp3[13]).space.PX_4,
      direction: "horizontal",
      align: "center",
      style: tmp.inlineStack,
      children: null,
    };
    const obj8 = { iconUrl: application.iconUrl, size: 16, borderRadius: tmp4(tmp3[13]).radii.xs };
    const items1 = [closure_7(tmp4(tmp3[14]), obj8)];
    const obj9 = { variant: "body-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[16]).intl;
    const obj10 = { noun: null };
    const obj11 = { displayNoun };
    obj10.noun = tmp4(tmp3[9])(obj11);
    obj9.children = intl3.formatToPlainString(tmp4(tmp3[17])["jKi+kc"], obj10);
    items1[1] = closure_7(tmp2(tmp3[15]).Text, obj9);
    obj7.children = items1;
    const items2 = [closure_8(tmp2(tmp3[12]).Stack, obj7), ,];
    const obj12 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: null };
    const intl4 = tmp2(tmp3[16]).intl;
    const obj13 = {
      noun: tmp14,
      orgName: organization.name,
      gameName: application.name,
      orgNameHook(children, arg1) {
        return closure_1_7(
          navigation(first[15]).Text,
          { variant: "heading-xl/semibold", color: "text-strong", children },
          arg1,
        );
      },
    };
    obj12.children = intl4.format(tmp4(tmp3[17]).gptW7Y, obj13);
    items2[1] = closure_7(tmp2(tmp3[15]).Heading, obj12);
    let tmp15Result = null != memberCount && null != maxMembers;
    if (tmp15Result) {
      const obj14 = {
        spacing: tmp4(tmp3[13]).space.PX_4,
        direction: "horizontal",
        align: "center",
        style: tmp.inlineStack,
        children: null,
      };
      const obj15 = { size: "xs", color: tmp4(tmp3[13]).colors.ICON_MUTED };
      const items3 = [closure_7(tmp2(tmp3[18]).GroupIcon, obj15)];
      const obj16 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
      const intl = tmp2(tmp3[16]).intl;
      const obj17 = { count: memberCount, max: maxMembers };
      obj16.children = intl.formatToPlainString(tmp4(tmp3[17]).VuENGl, obj17);
      items3[1] = closure_7(tmp2(tmp3[15]).Text, obj16);
      obj14.children = items3;
      tmp15Result = closure_8(tmp2(tmp3[12]).Stack, obj14);
    }
    items2[2] = tmp15Result;
    obj6.children = items2;
    items[1] = closure_8(tmp2(tmp3[12]).Stack, obj6);
    obj4.children = items;
    const items4 = [closure_8(tmp2(tmp3[12]).Stack, obj4)];
    let tmp16Result = tmp7;
    if (tmp7) {
      const obj18 = { characters: data, selectedCharacterId, onSelect: tmp9[1], noun: tmp14 };
      tmp16Result = closure_7(tmp4(tmp3[19]), obj18);
    }
    const obj19 = { children: null };
    items4[1] = tmp16Result;
    obj3.children = items4;
    obj19.children = closure_8(tmp2(tmp3[12]).Stack, obj3);
    const items5 = [closure_7(tmp2(tmp3[11]).ModalContent, obj19)];
    const obj20 = { text: null, size: "lg", disabled: null, onPress: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj20.text = intl2.string(tmp2(tmp3[16]).t["3PatSz"]);
    if (tmp7) {
      tmp7 = null == found;
    }
    const obj21 = { children: null };
    const obj22 = { children: null };
    obj20.disabled = tmp7;
    obj20.onPress = function onPress() {
      let tmp2;
      if (closure_1) {
        if (null != found) {
          const obj = { character: tmp3 };
          tmp2 = obj;
        }
      }
      return navigation.navigate(constants.ACCEPT, tmp2);
    };
    obj22.children = closure_7(tmp2(tmp3[21]).Button, obj20);
    items5[1] = closure_7(tmp2(tmp3[20]).ModalFooter, obj22);
    obj21.children = items5;
    return closure_8(tmp2(tmp3[10]).ModalScreen, obj21);
  }
  const tmp2Result = require("useGameOrganizationCharacterEligibilityFetch");
}
