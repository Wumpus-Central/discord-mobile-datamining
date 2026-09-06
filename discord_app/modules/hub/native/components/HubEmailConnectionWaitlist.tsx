// === Module 12734: HubEmailConnectionWaitlist ===

// Module 12734 (HubEmailConnectionWaitlist)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: null, description: null, redesignButton: null };
createStyles = { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
createStyles.title = createStyles;
createStyles.description = { textAlign: "center", marginBottom: 16 };
createStyles.redesignButton = { paddingHorizontal: 16, width: "100%" };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  const tmp = closure_8();
  let obj = onClose(1483);
  const navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = { text: null, onPress: null };
        const intl = onClose(1114).intl;
        obj.text = intl.string(onClose(1114).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_2_6(onClose(7377).HeaderActionButton, obj);
      }
    });
  }, items);
  obj = { style: tmp.container, children: null };
  obj = { source: navigation(12735), style: tmp.header };
  const items1 = [closure_6(closure_5, obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", children: null };
  let intl = onClose(1114).intl;
  obj1.children = intl.string(onClose(1114).t.OaloU5);
  items1[1] = closure_6(onClose(1178).LegacyText, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onClose(1114).intl;
  obj2.children = intl2.format(onClose(1114).t.Rs7MXJ, { school: school.school });
  items1[2] = closure_6(onClose(4556).Text, obj2);
  const obj3 = { style: tmp.redesignButton, children: null };
  const obj4 = { size: "lg", text: null, onPress: null };
  const intl3 = onClose(1114).intl;
  obj4.text = intl3.string(onClose(1114).t.i4jeWR);
  obj4.onPress = onClose;
  obj3.children = closure_6(onClose(4975).Button, obj4);
  items1[3] = closure_6(closure_4, obj3);
  obj.children = items1;
  return closure_7(closure_4, obj);
};