// discord_app/modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import _modDef2723 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterEmptyDefault from "FamilyCenterEmpty.tsx";
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow.tsx";
import _modDef16141 from "../../../../_runtime/metro/16141__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let tmp4Result = null;
  if (undefined !== otherUser.otherUser) {
    const obj2 = { otherUser: str, status: constants.ACTIVE, actions: null };
    const intl = str(1113).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2723.T7DUoU, obj3);
    obj.onPress = function handleDisconnect() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16139, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1187).Icon.Sizes.SMALL, disableColor: true, source: _modDef16141 };
    obj.children = closure_7(str(1187).Icon, obj4);
    obj2.actions = closure_7(str(6911).PressableOpacity, obj);
    tmp4Result = closure_7(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(8217);
({
  MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4,
  MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty,
  UserLinkStatus: closure_6,
} = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4792);
let obj2 = {
  container: { marginTop: 24 },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.md,
  },
  empty: { padding: 20, alignSelf: "center" },
  header: { marginBottom: 10 },
};
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4792);
let obj5 = { actionButton: null };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  height: 32,
  width: 32,
};
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
  const ageSpecificText = tmp5Result.useAgeSpecificText(
    intl.formatToPlainString(_modDef2723["+tnO34"], obj2),
    intl2.formatToPlainString(_modDef2723["pu6/U0"], obj2),
  );
  items = [
    metroImportDefault(Text_Text.Text, {
      style: tmp.header,
      variant: "body-sm/medium",
      color: "text-default",
      children: ageSpecificText,
    }),
  ];
  const obj5 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: null };
    const obj7 = { text: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef2723.C4ScLD);
    obj6.children = metroImportDefault(FamilyCenterEmptyDefault, obj7);
    let mapped = metroImportDefault(View, obj6);
    const tmp2Result = FamilyCenterEmptyDefault;
  } else {
    mapped = activeLinkUsers.map((otherUser) =>
      closure_1_7(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id),
    );
  }
  obj5.children = mapped;
  items[1] = metroImportDefault(View, obj5);
  obj3.children = items;
  return React5(View, obj3);
}
