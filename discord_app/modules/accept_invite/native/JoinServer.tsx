// === Module 7080: JoinServer ===

// Module 7080 (JoinServer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import Text_Text from "Text/Text" /* 4632 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6706 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7082 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7084 */;
import noop from "module_19" /* 19 */;

require = fn;
class OrSeparator {
  constructor() {
    tmp = closure_11();
    obj = closure_0(closure_2[6]);
    obj1 = { style: tmp.separator, children: null };
    obj6 = { style: tmp.innerSeparator };
    typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("JoinServer");
    items = [, , ];
    items[0] = jsx(View, obj6);
    obj7 = { style: null, variant: "text-sm/semibold", color: "text-muted", children: null };
    items1 = [, ];
    items1[0] = tmp.orText;
    items1[1] = typeConsolidationTextTransform;
    obj7.style = items1;
    intl = closure_0(closure_2[8]).intl;
    obj7.children = intl.string(closure_0(closure_2[8]).t.HEuagM);
    items[1] = jsx(closure_0(closure_2[7]).Text, obj7);
    obj8 = { style: tmp.innerSeparator };
    items[2] = jsx(View, obj8);
    obj1.children = items;
    return jsxs(View, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(7081);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: metroRequire, CreateGuildModalStates: closure_7 } = CreateGuildConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { growSpacing: { flexGrow: 2, minHeight: nativeDefault.space.PX_24 }, container: null, textInput: null, innerSeparator: null, separator: null, orText: null, header: null, description: null, exampleText: null };
let obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.container = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.textInput = { borderRadius: nativeDefault.radii.lg };
let obj5 = { borderRadius: nativeDefault.radii.lg };
obj2.innerSeparator = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj6 = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.orText = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
obj2.header = { textAlign: "center" };
obj2.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj2.exampleText = { marginTop: 8 };
let closure_11 = createStyles.createStyles(obj2);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
const placeholder = items[0];
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  ({ onDone, submitting } = arg0);
  let navigation;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = closure_11();
  navigation = navigation(1483).useNavigation();
  items = [navigation];
  const obj2 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  const obj3 = { paddingBottom: null };
  const callback = noop.useCallback(() => {
    navigation.push(constants.JOIN_STUDENT_HUB);
  }, items);
  obj3.paddingBottom = useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16;
  items1[1] = obj3;
  obj2.contentContainerStyle = items1;
  let tmp7Result = null;
  if (useWindowDimensionsDefault().height > closure_6) {
    const obj4 = { children: null };
    const obj5 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp4(1114).intl;
    obj5.children = intl.string(tmp4(1114).t.jlfuFW);
    const items2 = [closure_8(tmp4(4632).Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp4(1114).intl;
    obj6.children = intl2.string(tmp4(1114).t.lVvN3A);
    items2[1] = closure_8(tmp4(4632).Text, obj6);
    obj4.children = items2;
    tmp7Result = closure_9(closure_10, obj4);
  }
  const obj7 = { children: null };
  const items3 = [tmp7Result, , ];
  const obj8 = { label: null, error: null, value: null, onChangeText: null, placeholder: null, accessibilityLabel: null, autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: null, onSubmitEditing: null };
  const obj = navigation(1483);
  const intl3 = tmp4(1114).intl;
  obj8.label = intl3.string(navigation(1114).t.qreV25);
  obj8.error = error;
  obj8.value = inviteString;
  obj8.onChangeText = onInviteChange;
  obj8.placeholder = placeholder;
  const intl4 = tmp4(1114).intl;
  obj8.accessibilityLabel = intl4.string(navigation(1114).t.qreV25);
  obj8.textStyle = tmp.textInput;
  obj8.onSubmitEditing = onDone;
  items3[1] = closure_8(FreeFormInputGroupDefault, obj8);
  const obj9 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1114).intl;
  obj9.children = intl5.format(navigation(1114).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children, arg1) {
      return closure_1_8(navigation(dependencyMap[7]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
    }
  });
  items3[2] = closure_8(navigation(4632).Text, obj9);
  obj7.children = items3;
  const items4 = [closure_9(closure_4, obj7), ];
  const obj11 = { children: null };
  const items5 = [closure_8(closure_4, { style: tmp.growSpacing }), , , ];
  const obj13 = { size: "lg", text: null, accessibilityLabel: null, loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj13.text = intl6.string(navigation(1114).t["+H/coT"]);
  const intl7 = tmp4(1114).intl;
  obj13.accessibilityLabel = intl7.string(navigation(1114).t["+H/coT"]);
  obj13.loading = submitting;
  obj13.disabled = submitting;
  obj13.onPress = onDone;
  items5[1] = closure_8(navigation(5056).Button, obj13);
  items5[2] = closure_8(OrSeparator, {});
  const obj14 = { size: "lg", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl8 = tmp4(1114).intl;
  obj14.text = intl8.string(navigation(1114).t["MOqX/G"]);
  const intl9 = tmp4(1114).intl;
  obj14.accessibilityLabel = intl9.string(navigation(1114).t["MOqX/G"]);
  obj14.onPress = callback;
  items5[3] = closure_8(navigation(5056).Button, obj14);
  obj11.children = items5;
  items4[1] = closure_9(closure_10, obj11);
  obj2.children = items4;
  return closure_9(closure_5, obj2);
};
export { OrSeparator };