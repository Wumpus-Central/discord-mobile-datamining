// discord_app/modules/parent_tools/native/FamilyCenterPendingLinks.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef2396 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import _modDef9566 from "../../../../_runtime/metro/09566__.js";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow.tsx";
import _modDef14923 from "../../../../_runtime/metro/14923__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterPendingLinkRow(otherUser) {
  let str = otherUser.otherUser;
  const tmp = closure_9();
  str(8645);
  if (undefined === str) {
    return null;
  } else {
    if (tmp4) {
      const intl3 = tmp5(1114).intl;
      str = undefined;
      if (str != null) {
        str = str.toString();
      }
      let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      obj = { name: str };
      obj.accessibilityLabel = intl3.formatToPlainString(_modDef2396.oUpA6X, obj);
      obj.onPress = function onPress() {
        const obj = { otherUser: str };
        obj.pushLazy(asyncRequireImpl(14927, dependencyMap.paths), obj);
      };
      obj.style = tmp.actionButton;
      const obj1 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: _modDef14923 };
      obj.children = closure_5(tmp5(1178).Icon, obj1);
      let tmp8Result = closure_5(tmp5(5123).PressableOpacity, obj);
      let tmp14 = closure_5;
    } else {
      let tmp12Result = null;
      if (!tmp7) {
        const intl = tmp5(1114).intl;
        let str1;
        if (str != null) {
          str1 = str.toString();
        }
        obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
        const obj2 = { name: str1 };
        obj.accessibilityLabel = intl.formatToPlainString(_modDef2396.jc1Ip7, obj2);
        obj.onPress = function onPress() {
          const obj = { otherUser: str };
          obj.pushLazy(asyncRequireImpl(14925, dependencyMap.paths), obj);
        };
        const items = [,];
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj.style = items;
        const obj3 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: _modDef9566 };
        obj.children = closure_5(tmp5(1178).Icon, obj3);
        tmp12Result = closure_5(tmp5(5123).PressableOpacity, obj);
      }
      const items1 = [tmp12Result];
      tmp14 = closure_5;
      const intl2 = tmp5(1114).intl;
      let str2;
      if (str != null) {
        str2 = str.toString();
      }
      const obj4 = { children: null };
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const obj6 = { name: str2 };
      obj5.accessibilityLabel = intl2.formatToPlainString(_modDef2396["4GtllP"], obj6);
      obj5.onPress = function onPress() {
        const obj = { otherUser: str };
        obj.pushLazy(asyncRequireImpl(14926, dependencyMap.paths), obj);
      };
      obj5.style = tmp.actionButton;
      const obj7 = { size: tmp5(1178).Icon.Sizes.SMALL, disableColor: true, source: _modDef14923 };
      obj5.children = tmp14(tmp5(1178).Icon, obj7);
      items1[1] = tmp14(tmp5(5123).PressableOpacity, obj5);
      obj4.children = items1;
      tmp8Result = closure_6(closure_7, obj4);
    }
    const obj8 = { otherUser: str, actions: tmp8Result };
    return tmp14(FamilyCenterLinkRowDefault, obj8);
  }
  tmp4 = useIsInAdultAgeGroupDefault();
}
const View = fn(17).View;
const UserLinkStatus = fn(7538).UserLinkStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { marginTop: 24 }, content: null, header: null };
createStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.md,
};
createStyles.content = createStyles;
createStyles.header = { marginBottom: 10 };
let closure_8 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj1 = { actionButton: null, actionButtonFirst: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
obj1.actionButton = size;
obj1.actionButtonFirst = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj1);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  const tmp = closure_8();
  let obj = useUserLinks;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = util.intl;
  obj = { count: usersForLinkStatus.length };
  intl.formatToPlainString(_modDef2396.IkAgkG, obj);
  const intl2 = util.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    obj = { style: tmp.container, children: null };
    const obj1 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    const items = [hasOwnProperty(Text_Text.Text, obj1)];
    const obj2 = {
      style: tmp.content,
      children: usersForLinkStatus.map((otherUser) =>
        closure_1_5(FamilyCenterPendingLinkRow, { otherUser }, "pending-" + otherUser.id),
      ),
    };
    items[1] = hasOwnProperty(View, obj2);
    obj.children = items;
    tmp7 = timestampProducer(View, obj);
  }
  return tmp7;
}
