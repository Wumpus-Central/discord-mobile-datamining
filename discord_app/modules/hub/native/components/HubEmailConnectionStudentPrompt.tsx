// === Module 12728: HubEmailConnectionStudentPrompt ===

// Module 12728 (HubEmailConnectionStudentPrompt)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const HubEmailConnectionSteps = fn(12719).HubEmailConnectionSteps;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: null, row: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createStyles.textAlign = "center";
createStyles.marginBottom = 24;
createStyles.header = createStyles;
createStyles.row = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_9();
  let obj = onClose(1483);
  dependencyMap = obj.useNavigation();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.header, children: null };
  const intl = onClose(1114).intl;
  obj1.children = intl.string(onClose(1114).t["+/Pv0h"]);
  const items = [closure_7(onClose(1178).LegacyText, obj1), , ];
  const obj2 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, subLabel: null, onPress: null };
  const obj3 = { source: invite(12729) };
  obj2.leading = closure_7(closure_4, obj3);
  obj2.trailing = invite(7137).Arrow;
  const intl2 = onClose(1114).intl;
  obj2.label = intl2.string(onClose(1114).t["a7a/D+"]);
  const intl3 = onClose(1114).intl;
  obj2.subLabel = intl3.string(onClose(1114).t.Gsegk8);
  obj2.onPress = function onPress() {
    let obj = AnalyticsUtilsDefault;
    obj.track(constants.HUB_STUDENT_PROMPT_CLICKED);
    obj = { onClose, invite };
    closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, obj);
  };
  items[1] = closure_7(invite(7137), obj2);
  const obj4 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, onPress: null };
  const obj5 = { source: null };
  const tmp2 = invite(7137);
  obj5.source = invite(12730);
  obj4.leading = closure_7(closure_4, obj5);
  obj4.trailing = invite(7137).Arrow;
  const intl4 = onClose(1114).intl;
  obj4.label = intl4.string(onClose(1114).t.GLG9n4);
  obj4.onPress = onClose;
  items[2] = closure_7(invite(7137), obj4);
  obj.children = items;
  obj.children = closure_8(closure_3, obj);
  return closure_7(onClose(12727).HubEmailConnectionScreen, obj);
};