// discord_app/modules/hub/native/components/HubEmailConnectionWaitlist.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, Image: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = {
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: { marginBottom: 16 },
  title: null,
  description: null,
  redesignButton: null,
};
createCacheKey = {
  fontFamily: require("ME").Fonts.PRIMARY_BOLD,
  color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
};
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { textAlign: "center", marginBottom: 16 };
createCacheKey[4] = { paddingHorizontal: 16, width: "100%" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(school) {
  const onClose = school.onClose;
  let navigation;
  const tmp = callback3();
  let obj = onClose(1498);
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(closure_1_2[8]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_2[8]).t.cpT0Cq);
        obj[1] = closure_0;
        return closure_1_6(closure_1_0(closure_1_2[7]).HeaderActionButton, obj);
      },
    });
  }, items);
  obj = { style: tmp.container, children: null };
  obj = { source: navigation(12497), style: tmp.header };
  const items1 = [callback(closure_5, obj), , ,];
  obj1 = { style: tmp.title, accessibilityRole: "header", children: null };
  let intl = onClose(1233).intl;
  obj1[2] = intl.string(onClose(1233).t.OaloU5);
  items1[1] = callback(onClose(1296).LegacyText, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onClose(1233).intl;
  obj2[3] = intl2.format(onClose(1233).t.Rs7MXJ, { school: school.school });
  items1[2] = callback(onClose(4474).Text, obj2);
  const obj3 = { style: tmp.redesignButton, children: null };
  const obj4 = { size: "lg", text: null, onPress: null };
  const intl3 = onClose(1233).intl;
  obj4[1] = intl3.string(onClose(1233).t.i4jeWR);
  obj4[2] = onClose;
  obj3[1] = callback(onClose(4928).Button, obj4);
  items1[3] = callback(closure_4, obj3);
  obj[1] = items1;
  return callback2(closure_4, obj);
}
