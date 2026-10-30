// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const constants = fn(11327).GameOrganizationCharacterMode;
let closure_6 = fn(13151).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
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
  const gameOrganizationCharacterEligibilityFetch =
    require("useGameOrganizationCharacterEligibilityFetch").useGameOrganizationCharacterEligibilityFetch(tmp8);
  const data = gameOrganizationCharacterEligibilityFetch.data;
  const tmp10 = found(noop.useState(null), 2);
  selectedCharacterId = tmp10[0];
  found = undefined;
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  if (null == tmp5) {
    return null;
  } else {
    ({ organization, application } = tmp5);
    ({ memberCount, maxMembers } = organization);
    const obj2 = { displayNoun: tmp5.displayNoun, lowercase: true };
    const tmp15 = tmp4(tmp3[9])(obj2);
    const obj3 = { spacing: tmp4(tmp3[13]).space.PX_48, children: null };
    const obj4 = { spacing: tmp4(tmp3[13]).space.PX_24, children: null };
    const obj5 = { spacing: tmp4(tmp3[13]).space.PX_16, align: "center", children: null };
    const obj6 = { iconUrl: organization.iconUrl, size: 64 };
    const items = [closure_7(tmp4(tmp3[14]), obj6)];
    const obj7 = { variant: "heading-xl/semibold", style: tmp.text, children: null };
    const intl3 = tmp2(tmp3[16]).intl;
    const obj8 = { noun: tmp15, orgName: organization.name };
    obj7.children = intl3.formatToPlainString(tmp4(tmp3[17]).gptW7Y, obj8);
    items[1] = closure_7(tmp2(tmp3[15]).Text, obj7);
    obj5.children = items;
    const items1 = [closure_8(tmp2(tmp3[12]).Stack, obj5)];
    const obj9 = {
      direction: "horizontal",
      align: "center",
      justify: "center",
      spacing: tmp4(tmp3[13]).space.PX_16,
      children: null,
    };
    const obj10 = {
      spacing: tmp4(tmp3[13]).space.PX_4,
      direction: "horizontal",
      align: "center",
      style: tmp.inlineStack,
      children: null,
    };
    const obj11 = { iconUrl: application.iconUrl, size: 16, borderRadius: tmp4(tmp3[13]).radii.xs };
    const items2 = [closure_7(tmp4(tmp3[14]), obj11)];
    const obj12 = { variant: "heading-md/medium", children: application.name };
    items2[1] = closure_7(tmp2(tmp3[15]).Text, obj12);
    obj10.children = items2;
    const items3 = [closure_8(tmp2(tmp3[12]).Stack, obj10)];
    let tmp16Result = null != memberCount && null != maxMembers;
    if (tmp16Result) {
      const obj13 = {
        spacing: tmp4(tmp3[13]).space.PX_4,
        direction: "horizontal",
        align: "center",
        style: tmp.inlineStack,
        children: null,
      };
      const obj14 = { size: "xs", color: tmp4(tmp3[13]).colors.ICON_MUTED };
      const items4 = [closure_7(tmp2(tmp3[18]).GroupIcon, obj14)];
      const obj15 = { variant: "heading-md/medium", children: null };
      const intl = tmp2(tmp3[16]).intl;
      const obj16 = { count: memberCount, max: maxMembers };
      obj15.children = intl.formatToPlainString(tmp4(tmp3[17]).VuENGl, obj16);
      items4[1] = closure_7(tmp2(tmp3[15]).Text, obj15);
      obj13.children = items4;
      tmp16Result = closure_8(tmp2(tmp3[12]).Stack, obj13);
    }
    items3[1] = tmp16Result;
    obj9.children = items3;
    items1[1] = closure_8(tmp2(tmp3[12]).Stack, obj9);
    obj4.children = items1;
    const items5 = [closure_8(tmp2(tmp3[12]).Stack, obj4)];
    let tmp17Result = tmp7;
    if (tmp7) {
      const obj17 = {
        characters: data,
        hasError: null != gameOrganizationCharacterEligibilityFetch.error,
        selectedCharacterId,
        onSelect: tmp10[1],
        noun: tmp15,
      };
      tmp17Result = closure_7(tmp4(tmp3[19]), obj17);
    }
    const obj18 = { children: null };
    items5[1] = tmp17Result;
    obj3.children = items5;
    obj18.children = closure_8(tmp2(tmp3[12]).Stack, obj3);
    const items6 = [closure_7(tmp2(tmp3[11]).ModalContent, obj18)];
    const obj19 = { text: null, size: "lg", disabled: null, onPress: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj19.text = intl2.string(tmp2(tmp3[16]).t["3PatSz"]);
    if (tmp7) {
      tmp7 = null == found;
    }
    const obj20 = { children: null };
    const obj21 = { children: null };
    obj19.disabled = tmp7;
    obj19.onPress = function onPress() {
      let tmp2;
      if (closure_1) {
        if (null != found) {
          const obj = { character: tmp3 };
          tmp2 = obj;
        }
      }
      return navigation.navigate(constants.ACCEPT, tmp2);
    };
    obj21.children = closure_7(tmp2(tmp3[21]).Button, obj19);
    items6[1] = closure_7(tmp2(tmp3[20]).ModalFooter, obj21);
    obj20.children = items6;
    return closure_8(tmp2(tmp3[10]).ModalScreen, obj20);
  }
  const tmp2Result = require("useGameOrganizationCharacterEligibilityFetch");
}
