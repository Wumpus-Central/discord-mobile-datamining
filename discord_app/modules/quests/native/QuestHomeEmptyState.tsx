// === Module 15063: QuestHomeEmptyState ===

// Module 15063 (QuestHomeEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useToken from "useToken" /* 4262 */;
import useChatLayoutDefault from "useChatLayout" /* 4420 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import _modDef15064 from "module_15064" /* 15064 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ImageBackground: closure_4 } = get_ActivityIndicator);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: null, emptyStateContentTitle: null, emptyStateContentDescription: null, emptyImage: null, gradient: null, actionWrapper: null };
createStyles = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
createStyles.emptyStateContentContainer = createStyles;
createStyles.emptyStateContentTitle = { textAlign: "center" };
createStyles.emptyStateContentDescription = { textAlign: "center", marginTop: 4 };
createStyles.emptyImage = { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 };
createStyles.gradient = { height: 22, width: "100%", position: "absolute", bottom: 0 };
createStyles.actionWrapper = { marginTop: 16, alignSelf: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = util.intl;
    title = intl.string(util.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = util.intl;
    subtitle = intl2.string(util.t["R7mv+G"]);
  }
  const tmp5 = closure_9();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  obj = { bottom: null, style: null, children: null };
  let obj2 = PlatformUtils;
  obj.bottom = obj2.isAndroid();
  obj.style = tmp5.container;
  obj = { style: tmp5.container, children: null };
  const obj1 = { style: tmp5.emptyStateContainer, children: null };
  obj2 = { style: tmp5.emptyStateContentContainer, children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title }), timestampProducer(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle }), ];
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj5 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = timestampProducer(React3, obj5);
  }
  items[2] = tmp9Result;
  obj2.children = items;
  const items1 = [React5(React3, obj2), ];
  let tmp11Result = null;
  if (!useChatLayoutDefault().isChatLockedOpen) {
    const obj6 = { children: null };
    const obj7 = { style: tmp5.emptyImage, source: _modDef15064, resizeMode: "cover" };
    const items2 = [timestampProducer(React4, obj7), ];
    const obj8 = { style: tmp5.gradient, end: null, start: null, colors: null };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj8.colors = items3;
    items2[1] = timestampProducer(LinearGradientDefault, obj8);
    obj6.children = items2;
    tmp11Result = React5(React6, obj6);
  }
  items1[1] = tmp11Result;
  obj1.children = items1;
  obj.children = React5(React3, obj1);
  obj.children = timestampProducer(React3, obj);
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
};