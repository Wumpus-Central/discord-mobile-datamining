// discord_app/modules/hub/native/components/HubEmailConnectionWaitlist.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: { marginBottom: 16 },
  title: {
    fontFamily: fn(1072).Fonts.PRIMARY_BOLD,
    color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  description: { textAlign: "center", marginBottom: 16 },
  redesignButton: { paddingHorizontal: 16, width: "100%" },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  const tmp = closure_7();
  const navigation = onClose(1498).useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = { text: null, onPress: null };
        const intl = onClose(1114).intl;
        obj.text = intl.string(onClose(1114).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_2_5(onClose(7552).HeaderActionButton, obj);
      },
    });
  }, items);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { source: null, style: null };
  let obj = onClose(1498);
  obj3.source = navigation(14296);
  obj3.style = tmp.header;
  const items1 = [closure_5(navigation(5712), obj3), , ,];
  const obj4 = { style: tmp.title, accessibilityRole: "header", children: null };
  let intl = onClose(1114).intl;
  obj4.children = intl.string(onClose(1114).t.OaloU5);
  items1[1] = closure_5(onClose(1188).LegacyText, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onClose(1114).intl;
  obj5.children = intl2.format(onClose(1114).t.Rs7MXJ, { school: school.school });
  items1[2] = closure_5(onClose(5619).Text, obj5);
  const obj6 = { style: tmp.redesignButton, children: null };
  const obj7 = { size: "lg", text: null, onPress: null };
  const intl3 = onClose(1114).intl;
  obj7.text = intl3.string(onClose(1114).t.i4jeWR);
  obj7.onPress = onClose;
  obj6.children = closure_5(onClose(5629).Button, obj7);
  items1[3] = closure_5(View, obj6);
  obj2.children = items1;
  return closure_6(View, obj2);
}
