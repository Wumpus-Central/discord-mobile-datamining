// === Module 6979: OrSeparator ===

// Module 6979 (OrSeparator)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import Text from "Text" /* 4556 */;
import _modDef6605 from "module_6605" /* 6605 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 6980 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
class OrSeparator {
  constructor() {
    tmp = closure_11();
    obj = { style: tmp.separator, children: null };
    obj = { style: tmp.innerSeparator };
    items = [, , ];
    items[0] = jsx(View, obj);
    obj1 = { style: tmp.orText, variant: "text-sm/semibold", color: "text-muted", children: null };
    intl = require("getSystemLocale").intl;
    obj1[3] = intl.string(require("getSystemLocale").t.HEuagM);
    items[1] = jsx(require("Text").Text, obj1);
    obj2 = { style: tmp.innerSeparator };
    items[2] = jsx(View, obj2);
    obj[1] = items;
    return jsxs(View, obj);
  }
}
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: closure_6, CreateGuildModalStates: error } = NUXGuildTemplatesAnalytics);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { growSpacing: null, container: null, textInput: null, innerSeparator: null, separator: null, orText: null, header: null, description: null, exampleText: null };
createCacheKey = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 2, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let obj1 = { flexGrow: 2, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.lg };
let obj2 = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[3] = { height: 1, flexGrow: 2, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj3 = { height: 1, flexGrow: 2, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[5] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_8, textTransform: "uppercase" };
createCacheKey[6] = { textAlign: "center" };
createCacheKey[7] = { textAlign: "center", marginTop: 8, marginBottom: 32 };
createCacheKey[8] = { marginTop: 8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
let closure_13 = items[0];
let obj4 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_8, textTransform: "uppercase" };
const result = require("set").fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  ({ onDone, submitting } = arg0);
  let navigation;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = callback3();
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  items = [navigation];
  obj = { keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: null };
  const callback = React.useCallback(() => {
    navigation.push(closure_1_7.JOIN_STUDENT_HUB);
  }, items);
  obj[0] = useSafeAreaInsetsKeyboardAwareDefault().insets.bottom + ThemesDefault.space.PX_16;
  items1[1] = obj;
  obj[1] = items1;
  let tmp7Result = null;
  if (useWindowDimensionsDefault().height > closure_6) {
    obj1 = { children: null };
    const obj2 = { style: null, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.header;
    const intl = tmp4(1114).intl;
    obj2[4] = intl.string(tmp4(1114).t.jlfuFW);
    const items2 = [callback(tmp4(4556).Text, obj2), ];
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.description;
    const intl2 = tmp4(1114).intl;
    obj3[3] = intl2.string(tmp4(1114).t.lVvN3A);
    items2[1] = callback(tmp4(4556).Text, obj3);
    obj1[0] = items2;
    tmp7Result = tmp7(closure_10, obj1);
  }
  const obj4 = { children: null };
  const items3 = [tmp7Result, , ];
  const obj5 = { label: null, error: null, value: null, onChangeText: null, placeholder: null, accessibilityLabel: null, autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: null, onSubmitEditing: null };
  const intl3 = tmp4(1114).intl;
  obj5[0] = intl3.string(navigation(1114).t.qreV25);
  obj5[1] = error;
  obj5[2] = inviteString;
  obj5[3] = onInviteChange;
  obj5[4] = closure_13;
  const intl4 = tmp4(1114).intl;
  obj5[5] = intl4.string(navigation(1114).t.qreV25);
  obj5[10] = tmp.textInput;
  obj5[11] = onDone;
  items3[1] = callback(_modDef6605, obj5);
  const obj6 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1114).intl;
  obj6[3] = intl5.format(navigation(1114).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children) {
      return callback(navigation(table[6]).Text, { variant: "text-sm/medium", color: "text-default", children }, arg1);
    }
  });
  items3[2] = callback(navigation(4556).Text, obj6);
  obj4[0] = items3;
  const items4 = [closure_9(closure_4, obj4), ];
  const obj8 = { children: null };
  const items5 = [callback(closure_4, { style: tmp.growSpacing }), , , ];
  const obj10 = { size: "lg", text: null, accessibilityLabel: null, loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj10[1] = intl6.string(navigation(1114).t["+H/coT"]);
  const intl7 = tmp4(1114).intl;
  obj10[2] = intl7.string(navigation(1114).t["+H/coT"]);
  obj10[3] = submitting;
  obj10[4] = submitting;
  obj10[5] = onDone;
  items5[1] = callback(navigation(4975).Button, obj10);
  items5[2] = callback(OrSeparator, {});
  const obj11 = { size: "lg", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl8 = tmp4(1114).intl;
  obj11[2] = intl8.string(navigation(1114).t["MOqX/G"]);
  const intl9 = tmp4(1114).intl;
  obj11[3] = intl9.string(navigation(1114).t["MOqX/G"]);
  obj11[4] = callback;
  items5[3] = callback(navigation(4975).Button, obj11);
  obj8[0] = items5;
  items4[1] = closure_9(closure_10, obj8);
  obj[2] = items4;
  return closure_9(closure_5, obj);
};
export { OrSeparator };