import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: null, description: null, redesignButton: null };
createCacheKey = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { textAlign: "center", marginBottom: 16 };
createCacheKey[4] = { paddingHorizontal: 16, width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  let navigation;
  const tmp = createCacheKey();
  let obj = onClose(1480);
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = { text: null, onPress: null };
        const intl = outer1_0(outer1_2[8]).intl;
        obj[0] = intl.string(outer1_0(outer1_2[8]).t.cpT0Cq);
        obj[1] = closure_0;
        return outer1_6(outer1_0(outer1_2[7]).HeaderActionButton, obj);
      }
    });
  }, items);
  obj = { style: tmp.container, children: null };
  obj = { source: navigation(12002), style: tmp.header };
  const items1 = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", children: null };
  let intl = onClose(1236).intl;
  obj1[2] = intl.string(onClose(1236).t.OaloU5);
  items1[1] = callback(onClose(1297).LegacyText, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onClose(1236).intl;
  obj2[3] = intl2.format(onClose(1236).t.Rs7MXJ, { school: school.school });
  items1[2] = callback(onClose(4281).Text, obj2);
  const obj3 = { style: tmp.redesignButton, children: null };
  const obj4 = { size: "lg", text: null, onPress: null };
  const intl3 = onClose(1236).intl;
  obj4[1] = intl3.string(onClose(1236).t.i4jeWR);
  obj4[2] = onClose;
  obj3[1] = callback(onClose(4695).Button, obj4);
  items1[3] = callback(closure_4, obj3);
  obj[1] = items1;
  return callback2(closure_4, obj);
};