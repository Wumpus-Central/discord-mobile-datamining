// === Module 17453: RedesignDiscoverabilityLanding ===

// Module 17453 (RedesignDiscoverabilityLanding)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FastImageDefault from "FastImage" /* 5587 */;
import NavigatorConstants from "NavigatorConstants" /* 5682 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import _modDef12750 from "module_12750" /* 12750 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, topContainer: null, growContainer: null, image: null, title: null, subtitle: null, info: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.topContainer = { paddingTop: nativeDefault.space.PX_16 };
createStyles.growContainer = { flexGrow: 2 };
let obj1 = { paddingTop: nativeDefault.space.PX_16 };
createStyles.image = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
let obj2 = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
createStyles.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.subtitle = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
createStyles.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  const tmp = closure_7();
  let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  obj = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: useSafeAreaInsetsDefault().bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.topContainer };
  const items = [hasOwnProperty(React3, obj), , , , , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.n8nw6j);
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.KMW0kP);
  items[2] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { resizeMode: "contain", style: tmp.image, source: _modDef12750 };
  items[3] = hasOwnProperty(FastImageDefault, obj3);
  const obj4 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  const items1 = [intl3.string(util.t.ci12MJ), " ", ];
  const intl4 = util.intl;
  items1[2] = intl4.format(util.t.VcSQ4n, {
    learnMoreHook(children, arg1) {
      return closure_1_5(Text_Text.Text, { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  obj4.children = items1;
  items[4] = timestampProducer(Text_Text.Text, obj4);
  items[5] = hasOwnProperty(React3, { style: tmp.growContainer });
  const obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl5 = util.intl;
  obj7.text = intl5.string(util.t.gHPk3I);
  obj7.onPress = onNext.onNext;
  items[6] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj.children = items;
  return timestampProducer(React4, obj);
};