// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_5 = fn(12341).GameOrganizationJoinScenes;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/steps/ViewStep.tsx",
);

export function ViewStep(code) {
  code = code.code;
  _require = undefined;
  let selectedCharacterId;
  let found;
  _require = require("useNavigation").useNavigation();
  const tmp4 = selectedCharacterId(found[5])(code);
  const obj = require("useNavigation");
  const data = require("useGameOrganizationCharacterEligibilityFetch").useGameOrganizationCharacterEligibilityFetch(
    code,
  ).data;
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  selectedCharacterId = tmp5[0];
  found = undefined;
  if (data != null) {
    found = data.find((id) => id.id === first);
  }
  let tmp8 = null;
  if (null != tmp4) {
    const obj3 = { children: null };
    const obj4 = { children: null };
    const obj5 = { spacing: tmp3(tmp2[10]).space.PX_48, children: null };
    const obj6 = { invite: tmp4 };
    items = [closure_6(tmp3(tmp2[11]), obj6)];
    const obj7 = { characters: data, selectedCharacterId, onSelect: tmp5[1], displayNoun: tmp4.displayNoun };
    items[1] = closure_6(tmp3(tmp2[12]), obj7);
    obj5.children = items;
    obj4.children = closure_7(tmp(tmp2[9]).Stack, obj5);
    const items1 = [closure_6(tmp(tmp2[8]).ModalContent, obj4)];
    const obj8 = { children: null };
    const obj9 = { text: null, size: "lg", disabled: null, onPress: null };
    const intl = tmp(tmp2[15]).intl;
    obj9.text = intl.string(tmp(tmp2[15]).t["3PatSz"]);
    obj9.disabled = null == found;
    obj9.onPress = function onPress() {
      return navigation.navigate(constants.ACCEPT, { character: found });
    };
    obj8.children = closure_6(tmp(tmp2[14]).Button, obj9);
    items1[1] = closure_6(tmp(tmp2[13]).ModalFooter, obj8);
    obj3.children = items1;
    tmp8 = closure_7(tmp(tmp2[7]).ModalScreen, obj3);
  }
  return tmp8;
}
