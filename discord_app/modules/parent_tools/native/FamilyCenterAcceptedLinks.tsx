// discord_app/modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef2396 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterEmptyDefault from "FamilyCenterEmpty.tsx";
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow.tsx";
import _modDef14923 from "../../../../_runtime/metro/14923__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    let obj = { otherUser: str, actions: null };
    const intl = str(1114).intl;
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    obj = { name: str };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2396.T7DUoU, obj);
    obj.onPress = function onPress() {
      const obj = { otherUser: str };
      obj.pushLazy(asyncRequireImpl(14921, dependencyMap.paths), obj);
    };
    obj.style = tmp.actionButton;
    const obj1 = { size: str(1178).Icon.Sizes.SMALL, disableColor: true, source: _modDef14923 };
    obj.children = closure_6(str(1178).Icon, obj1);
    obj.actions = closure_6(str(5123).PressableOpacity, obj);
    tmp4Result = closure_6(FamilyCenterLinkRowDefault, obj);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7538);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } =
  FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { marginTop: 24 }, content: null, empty: null, header: null };
createStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.md,
};
createStyles.content = createStyles;
createStyles.empty = { padding: 20, alignSelf: "center" };
createStyles.header = { marginBottom: 10 };
let closure_8 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj1 = { actionButton: null };
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
let closure_9 = createStyles.createStyles(obj1);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = closure_8();
  let obj = useUserLinks;
  const activeLinkUsers = obj.useActiveLinkUsers();
  obj = { count: activeLinkUsers.length, max: useIsInAdultAgeGroupDefault() ? React4 : hasOwnProperty };
  const tmp4 = useIsInAdultAgeGroupDefault();
  const intl = util.intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = util.intl;
  obj = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(
    intl.formatToPlainString(_modDef2396["+tnO34"], obj),
    intl2.formatToPlainString(_modDef2396["pu6/U0"], obj),
  );
  const items = [
    timestampProducer(Text_Text.Text, {
      style: tmp.header,
      variant: "eyebrow",
      color: "text-default",
      children: ageSpecificText,
    }),
  ];
  const obj2 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj3 = { style: tmp.empty, children: null };
    const obj4 = { text: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef2396.C4ScLD);
    obj3.children = timestampProducer(FamilyCenterEmptyDefault, obj4);
    let mapped = timestampProducer(View, obj3);
    const tmp2Result = FamilyCenterEmptyDefault;
  } else {
    mapped = activeLinkUsers.map((otherUser) =>
      closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id),
    );
  }
  obj2.children = mapped;
  items[1] = timestampProducer(View, obj2);
  obj.children = items;
  return React5(View, obj);
}
