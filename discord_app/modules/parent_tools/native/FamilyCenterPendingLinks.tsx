// === Module 16775: FamilyCenterPendingLinks ===

// Module 16775 (FamilyCenterPendingLinks)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13312 */;
import _modDef15077 from "module_15077" /* 15077 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 16769 */;
import _modDef16774 from "module_16774" /* 16774 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterPendingLinkRow(otherUser) {
  const tmp = closure_9();
  otherUser.otherUser(8361);
  if (undefined === otherUser.otherUser) {
    return null;
  } else {
    if (tmp4) {
      const intl3 = tmp5(1114).intl;
      let str1;
      if (str != null) {
        str1 = str.toString();
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj3 = { name: str1 };
      obj2.accessibilityLabel = intl3.formatToPlainString(_modDef2537.oUpA6X, obj3);
      obj2.onPress = function handleCancel() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16778, dependencyMap.paths), { otherUser: str });
      };
      obj2.style = tmp.actionButton;
      const obj4 = { size: tmp5(1188).Icon.Sizes.SMALL, disableColor: true, source: _modDef16774 };
      obj2.children = closure_5(tmp5(1188).Icon, obj4);
      let tmp8Result = closure_5(tmp5(6974).PressableOpacity, obj2);
      let tmp14 = closure_5;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const intl = tmp5(1114).intl;
        let str2;
        if (str != null) {
          str2 = str.toString();
        }
        const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj5 = { name: str2 };
        obj.accessibilityLabel = intl.formatToPlainString(_modDef2537.jc1Ip7, obj5);
        obj.onPress = function handleAccept() {
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16776, dependencyMap.paths), { otherUser: str });
        };
        const items = [, ];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj.style = items;
        const obj6 = { size: tmp5(1188).Icon.Sizes.SMALL, disableColor: true, source: _modDef15077 };
        obj.children = closure_5(tmp5(1188).Icon, obj6);
        tmp12Result = closure_5(tmp5(6974).PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const intl2 = tmp5(1114).intl;
      let str3;
      if (str != null) {
        str3 = str.toString();
      }
      const obj7 = { children: null };
      const obj8 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      const obj9 = { name: str3 };
      obj8.accessibilityLabel = intl2.formatToPlainString(_modDef2537["4GtllP"], obj9);
      obj8.onPress = function handleDecline() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16777, dependencyMap.paths), { otherUser: str });
      };
      obj8.style = tmp.actionButton;
      const obj10 = { size: tmp5(1188).Icon.Sizes.SMALL, disableColor: true, source: _modDef16774 };
      obj8.children = tmp14(tmp5(1188).Icon, obj10);
      items1[1] = tmp14(tmp5(6974).PressableOpacity, obj8);
      obj7.children = items1;
      tmp8Result = closure_6(closure_7, obj7);
    }
    const obj11 = { otherUser: str, actions: tmp8Result };
    return tmp14(FamilyCenterLinkRowDefault, obj11);
  }
  tmp4 = useIsInAdultAgeGroupDefault();
}
const View = fn(17).View;
const UserLinkStatus = fn(7709).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
let createStyles = fn(5009);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5009);
let obj5 = { actionButton: null, actionButtonFirst: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj5.actionButton = size;
let obj3 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
obj5.actionButtonFirst = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj5);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = closure_8();
  const usersForLinkStatus = useUserLinks.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = util.intl;
  intl.formatToPlainString(_modDef2537.IkAgkG, { count: usersForLinkStatus.length });
  const intl2 = util.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    const items = [hasOwnProperty(Text_Text.Text, obj4), ];
    const obj5 = { style: tmp.content, children: usersForLinkStatus.map((otherUser) => closure_1_5(FamilyCenterPendingLinkRow, { otherUser }, "pending-" + otherUser.id)) };
    items[1] = hasOwnProperty(View, obj5);
    obj3.children = items;
    tmp7 = timestampProducer(View, obj3);
  }
  return tmp7;
};