// === Module 14323: HubEmailConnectionStudentPrompt ===

// Module 14323 (HubEmailConnectionStudentPrompt)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 6723 */;

const require = fn;
const View = fn(17).View;
const HubEmailConnectionSteps = fn(14314).HubEmailConnectionSteps;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: null, row: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginBottom = 24;
obj2.header = obj3;
obj2.row = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_8();
  dependencyMap = onClose(1497).useNavigation();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.header, children: null };
  const intl = onClose(1113).intl;
  obj4.children = intl.string(onClose(1113).t["+/Pv0h"]);
  const items = [closure_6(onClose(1187).LegacyText, obj4), , ];
  const obj5 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, subLabel: null, onPress: null };
  const obj = onClose(1497);
  const obj6 = { source: null };
  const tmp2 = invite(7309);
  obj6.source = invite(14324);
  obj5.leading = closure_6(invite(5717), obj6);
  obj5.trailing = invite(7309).Arrow;
  const intl2 = onClose(1113).intl;
  obj5.label = intl2.string(onClose(1113).t["a7a/D+"]);
  const intl3 = onClose(1113).intl;
  obj5.subLabel = intl3.string(onClose(1113).t.Gsegk8);
  obj5.onPress = function onContinue() {
    AnalyticsUtilsDefault.track(constants.HUB_STUDENT_PROMPT_CLICKED);
    closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, { onClose, invite });
  };
  items[1] = closure_6(tmp2, obj5);
  const obj7 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, onPress: null };
  const tmp3 = invite(5717);
  const obj8 = { source: null };
  const tmp4 = invite(7309);
  obj8.source = invite(14325);
  obj7.leading = closure_6(invite(5717), obj8);
  obj7.trailing = invite(7309).Arrow;
  const intl4 = onClose(1113).intl;
  obj7.label = intl4.string(onClose(1113).t.GLG9n4);
  obj7.onPress = onClose;
  items[2] = closure_6(tmp4, obj7);
  obj3.children = items;
  obj2.children = closure_7(View, obj3);
  return closure_6(onClose(14322).HubEmailConnectionScreen, obj2);
};