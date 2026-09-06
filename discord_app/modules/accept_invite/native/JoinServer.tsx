// === Module 6979: JoinServer ===

// Module 6979 (JoinServer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import Text_Text from "Text/Text" /* 4556 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6605 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import noop from "module_19" /* 19 */;

require = fn;
class OrSeparator {
  constructor() {
    tmp = closure_11();
    obj = { style: tmp.separator, children: null };
    obj = { style: tmp.innerSeparator };
    items = [, , ];
    items[0] = jsx(View, obj);
    obj1 = { style: tmp.orText, variant: "text-sm/semibold", color: "text-muted", children: null };
    intl = closure_0(closure_2[7]).intl;
    obj1.children = intl.string(closure_0(closure_2[7]).t.HEuagM);
    items[1] = jsx(closure_0(closure_2[6]).Text, obj1);
    obj2 = { style: tmp.innerSeparator };
    items[2] = jsx(View, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(6980);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: metroRequire, CreateGuildModalStates: closure_7 } = CreateGuildConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let createStyles = { growSpacing: null, container: null, textInput: null, innerSeparator: null, separator: null, orText: null, header: null, description: null, exampleText: null };
createStyles = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.growSpacing = createStyles;
createStyles.container = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let obj1 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.textInput = { borderRadius: nativeDefault.radii.lg };
let obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles.innerSeparator = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.separator = { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj3 = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.orText = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
createStyles.header = { textAlign: "center" };
createStyles.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
createStyles.exampleText = { marginTop: 8 };
let closure_11 = createStyles.createStyles(createStyles);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
const placeholder = items[0];
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  ({ onDone, submitting } = arg0);
  let navigation;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = closure_11();
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  items = [navigation];
  obj = { keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: null };
  const callback = noop.useCallback(() => {
    navigation.push(constants.JOIN_STUDENT_HUB);
  }, items);
  obj.paddingBottom = useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + nativeDefault.space.PX_16;
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  let tmp7Result = null;
  if (useWindowDimensionsDefault().height > closure_6) {
    const obj1 = { children: null };
    const obj2 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp4(1114).intl;
    obj2.children = intl.string(tmp4(1114).t.jlfuFW);
    const items2 = [closure_8(tmp4(4556).Text, obj2), ];
    const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp4(1114).intl;
    obj3.children = intl2.string(tmp4(1114).t.lVvN3A);
    items2[1] = closure_8(tmp4(4556).Text, obj3);
    obj1.children = items2;
    tmp7Result = closure_9(closure_10, obj1);
  }
  const obj4 = { children: null };
  const items3 = [tmp7Result, , ];
  const obj5 = { label: null, error: null, value: null, onChangeText: null, placeholder: null, accessibilityLabel: null, autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: null, onSubmitEditing: null };
  const intl3 = tmp4(1114).intl;
  obj5.label = intl3.string(navigation(1114).t.qreV25);
  obj5.error = error;
  obj5.value = inviteString;
  obj5.onChangeText = onInviteChange;
  obj5.placeholder = placeholder;
  const intl4 = tmp4(1114).intl;
  obj5.accessibilityLabel = intl4.string(navigation(1114).t.qreV25);
  obj5.textStyle = tmp.textInput;
  obj5.onSubmitEditing = onDone;
  items3[1] = closure_8(FreeFormInputGroupDefault, obj5);
  const obj6 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1114).intl;
  obj6.children = intl5.format(navigation(1114).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children, arg1) {
      return closure_1_8(navigation(dependencyMap[6]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
    }
  });
  items3[2] = closure_8(navigation(4556).Text, obj6);
  obj4.children = items3;
  const items4 = [closure_9(closure_4, obj4), ];
  const obj8 = { children: null };
  const items5 = [closure_8(closure_4, { style: tmp.growSpacing }), , , ];
  const obj10 = { size: "lg", text: null, accessibilityLabel: null, loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj10.text = intl6.string(navigation(1114).t["+H/coT"]);
  const intl7 = tmp4(1114).intl;
  obj10.accessibilityLabel = intl7.string(navigation(1114).t["+H/coT"]);
  obj10.loading = submitting;
  obj10.disabled = submitting;
  obj10.onPress = onDone;
  items5[1] = closure_8(navigation(4975).Button, obj10);
  items5[2] = closure_8(OrSeparator, {});
  const obj11 = { size: "lg", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl8 = tmp4(1114).intl;
  obj11.text = intl8.string(navigation(1114).t["MOqX/G"]);
  const intl9 = tmp4(1114).intl;
  obj11.accessibilityLabel = intl9.string(navigation(1114).t["MOqX/G"]);
  obj11.onPress = callback;
  items5[3] = closure_8(navigation(4975).Button, obj11);
  obj8.children = items5;
  items4[1] = closure_9(closure_10, obj8);
  obj.children = items4;
  return closure_9(closure_5, obj);
};
export { OrSeparator };