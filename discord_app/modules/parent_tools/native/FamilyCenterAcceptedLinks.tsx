// === Module 16098: FamilyCenterAcceptedLinks ===

// Module 16098 (FamilyCenterAcceptedLinks)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import _modDef2725 from "module_2725" /* 2725 */;
import Text_Text from "Text/Text" /* 5385 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import useUserLinks from "useUserLinks" /* 9016 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 9017 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12341 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 16099 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 16100 */;
import _modDef16105 from "module_16105" /* 16105 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let tmp4Result = null;
  if (undefined !== otherUser.otherUser) {
    const obj2 = { otherUser: str, status: constants.ACTIVE, actions: null };
    const intl = str(1112).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2725.T7DUoU, obj3);
    obj.onPress = function handleDisconnect() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16103, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1186).Icon.Sizes.SMALL, disableColor: true, source: _modDef16105 };
    obj.children = closure_7(str(1186).Icon, obj4);
    obj2.actions = closure_7(str(6910).PressableOpacity, obj);
    tmp4Result = closure_7(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(8216);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty, UserLinkStatus: closure_6 } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4794);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4794);
let obj5 = { actionButton: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj5.actionButton = size;
let closure_10 = createStyles.createStyles(obj5);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = closure_9();
  const tmp4 = useIsInAdultAgeGroupDefault();
  const activeLinkUsers = useUserLinks.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React4 : hasOwnProperty };
  const intl = util.intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = util.intl;
  const obj3 = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(_modDef2725["+tnO34"], obj2), intl2.formatToPlainString(_modDef2725["pu6/U0"], obj2));
  items = [metroImportDefault(Text_Text.Text, { style: tmp.header, variant: "body-sm/medium", color: "text-default", children: ageSpecificText }), ];
  const obj5 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: null };
    const obj7 = { text: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef2725.C4ScLD);
    obj6.children = metroImportDefault(FamilyCenterEmptyDefault, obj7);
    let mapped = metroImportDefault(View, obj6);
    const tmp2Result = FamilyCenterEmptyDefault;
  } else {
    mapped = activeLinkUsers.map((otherUser) => closure_1_7(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id));
  }
  obj5.children = mapped;
  items[1] = metroImportDefault(View, obj5);
  obj3.children = items;
  return React5(View, obj3);
};