// === Module 12863: HubEmailConnectionStudentPrompt ===

// Module 12863 (HubEmailConnectionStudentPrompt)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5609 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12854).HubEmailConnectionSteps;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: null, row: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginBottom = 24;
obj2.header = obj3;
obj2.row = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_9();
  dependencyMap = onClose(1484).useNavigation();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.header, children: null };
  const intl = onClose(1115).intl;
  obj4.children = intl.string(onClose(1115).t["+/Pv0h"]);
  const items = [closure_7(onClose(1177).LegacyText, obj4), , ];
  const obj5 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, subLabel: null, onPress: null };
  const obj6 = { source: null };
  const obj = onClose(1484);
  obj6.source = invite(12864);
  obj5.leading = closure_7(closure_4, obj6);
  obj5.trailing = invite(7244).Arrow;
  const intl2 = onClose(1115).intl;
  obj5.label = intl2.string(onClose(1115).t["a7a/D+"]);
  const intl3 = onClose(1115).intl;
  obj5.subLabel = intl3.string(onClose(1115).t.Gsegk8);
  obj5.onPress = function onPress() {
    AnalyticsUtilsDefault.track(constants.HUB_STUDENT_PROMPT_CLICKED);
    closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, { onClose, invite });
  };
  items[1] = closure_7(invite(7244), obj5);
  const obj7 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, onPress: null };
  const obj8 = { source: null };
  const tmp2 = invite(7244);
  obj8.source = invite(12865);
  obj7.leading = closure_7(closure_4, obj8);
  obj7.trailing = invite(7244).Arrow;
  const intl4 = onClose(1115).intl;
  obj7.label = intl4.string(onClose(1115).t.GLG9n4);
  obj7.onPress = onClose;
  items[2] = closure_7(invite(7244), obj7);
  obj3.children = items;
  obj2.children = closure_8(closure_3, obj3);
  return closure_7(onClose(12862).HubEmailConnectionScreen, obj2);
};