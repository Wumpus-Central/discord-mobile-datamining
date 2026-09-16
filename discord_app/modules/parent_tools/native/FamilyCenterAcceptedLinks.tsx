// === Module 15031: FamilyCenterAcceptedLinks ===

// Module 15031 (FamilyCenterAcceptedLinks)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import _modDef2397 from "module_2397" /* 2397 */;
import Text_Text from "Text/Text" /* 4634 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import useUserLinks from "useUserLinks" /* 8780 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8781 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12062 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 15032 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 15034 */;
import _modDef15039 from "module_15039" /* 15039 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let tmp4Result = null;
  if (undefined !== otherUser.otherUser) {
    const obj2 = { otherUser: str, actions: null };
    const intl = str(1115).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2397.T7DUoU, obj3);
    obj.onPress = function onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15037, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1177).Icon.Sizes.SMALL, disableColor: true, source: _modDef15039 };
    obj.children = closure_6(str(1177).Icon, obj4);
    obj2.actions = closure_6(str(5208).PressableOpacity, obj);
    tmp4Result = closure_6(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7648);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4638);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(4638);
let obj5 = { actionButton: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj5.actionButton = size;
let closure_9 = createStyles.createStyles(obj5);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = closure_8();
  const tmp4 = useIsInAdultAgeGroupDefault();
  const activeLinkUsers = useUserLinks.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React4 : hasOwnProperty };
  const intl = util.intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = util.intl;
  const obj3 = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(_modDef2397["+tnO34"], obj2), intl2.formatToPlainString(_modDef2397["pu6/U0"], obj2));
  const items = [timestampProducer(Text_Text.Text, { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText }), ];
  const obj5 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: null };
    const obj7 = { text: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef2397.C4ScLD);
    obj6.children = timestampProducer(FamilyCenterEmptyDefault, obj7);
    let mapped = timestampProducer(View, obj6);
    const tmp2Result = FamilyCenterEmptyDefault;
  } else {
    mapped = activeLinkUsers.map((otherUser) => closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id));
  }
  obj5.children = mapped;
  items[1] = timestampProducer(View, obj5);
  obj3.children = items;
  return React5(View, obj3);
};