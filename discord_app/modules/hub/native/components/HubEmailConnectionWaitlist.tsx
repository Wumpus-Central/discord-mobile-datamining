// === Module 12250: HubEmailConnectionWaitlist ===

// Module 12250 (HubEmailConnectionWaitlist)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 16 }, redesignButton: { paddingHorizontal: 16, width: "100%" } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  const tmp = closure_8();
  const navigation = onClose(1485).useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = { text: null, onPress: null };
        const intl = onClose(1115).intl;
        obj.text = intl.string(onClose(1115).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_2_6(onClose(6795).HeaderActionButton, obj);
      }
    });
  }, items);
  const obj2 = { style: tmp.container, children: null };
  let obj = onClose(1485);
  const items1 = [closure_6(closure_5, { source: navigation(12251), style: tmp.header }), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", children: null };
  let intl = onClose(1115).intl;
  obj4.children = intl.string(onClose(1115).t.OaloU5);
  items1[1] = closure_6(onClose(1177).LegacyText, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onClose(1115).intl;
  obj5.children = intl2.format(onClose(1115).t.Rs7MXJ, { school: school.school });
  items1[2] = closure_6(onClose(4832).Text, obj5);
  const obj6 = { style: tmp.redesignButton, children: null };
  const obj7 = { size: "lg", text: null, onPress: null };
  const intl3 = onClose(1115).intl;
  obj7.text = intl3.string(onClose(1115).t.i4jeWR);
  obj7.onPress = onClose;
  obj6.children = closure_6(onClose(5281).Button, obj7);
  items1[3] = closure_6(closure_4, obj6);
  obj2.children = items1;
  return closure_7(closure_4, obj2);
};