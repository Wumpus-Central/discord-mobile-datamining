// === Module 16966: QuestHomeEmptyState ===

// Module 16966 (QuestHomeEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import _modDef16967 from "module_16967" /* 16967 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContainerBelowContent: { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 }, emptyStateContentContainer: null, emptyStateContentContainerScreenCentered: null, emptyStateContentTitle: null, emptyStateContentDescription: null, emptyImage: null, backgroundImage: null, gradient: null, actionWrapper: null };
const obj3 = { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 };
obj2.emptyStateContentContainer = { paddingHorizontal: nativeDefault.space.PX_32 };
obj2.emptyStateContentContainerScreenCentered = { top: -55 };
obj2.emptyStateContentTitle = { textAlign: "center" };
obj2.emptyStateContentDescription = { textAlign: "center", marginTop: 4 };
obj2.emptyImage = { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.width = "100%";
obj5.height = undefined;
obj2.backgroundImage = obj5;
obj2.gradient = { height: 22, width: "100%", position: "absolute", bottom: 0 };
obj2.actionWrapper = { marginTop: 16, alignSelf: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(hasContentAbove) {
  let flag = hasContentAbove.hasContentAbove;
  if (flag === undefined) {
    flag = false;
  }
  ({ action, title } = hasContentAbove);
  if (title === undefined) {
    const intl = util.intl;
    title = intl.string(util.t.SdlRnK);
  }
  let subtitle = hasContentAbove.subtitle;
  if (subtitle === undefined) {
    const intl2 = util.intl;
    subtitle = intl2.string(util.t["R7mv+G"]);
  }
  const tmp5 = closure_8();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const obj2 = { bottom: null, style: null, children: null };
  obj2.bottom = PlatformUtils.isAndroid();
  obj2.style = tmp5.container;
  const obj4 = { style: tmp5.container, children: null };
  const items = [tmp5.emptyStateContainer, ];
  let emptyStateContainerBelowContent = flag;
  if (flag) {
    emptyStateContainerBelowContent = tmp5.emptyStateContainerBelowContent;
  }
  const obj5 = { style: items, children: null };
  items[1] = emptyStateContainerBelowContent;
  const items1 = [tmp5.emptyStateContentContainer, ];
  let emptyStateContentContainerScreenCentered = !flag;
  if (!flag) {
    emptyStateContentContainerScreenCentered = tmp5.emptyStateContentContainerScreenCentered;
  }
  const obj6 = { style: items1, children: null };
  items1[1] = emptyStateContentContainerScreenCentered;
  const items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle }), ];
  let tmp10Result = null != action;
  if (tmp10Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp10Result = hasOwnProperty(React3, obj9);
  }
  items2[2] = tmp10Result;
  obj6.children = items2;
  const items3 = [timestampProducer(React3, obj6), ];
  let tmp12Result = null;
  if (!useChatLayoutDefault().isChatLockedOpen) {
    const obj10 = { children: null };
    const obj11 = { style: tmp5.emptyImage, children: null };
    const obj12 = { style: tmp5.backgroundImage, source: _modDef16967, resizeMode: "cover" };
    obj11.children = hasOwnProperty(FastImageDefault, obj12);
    const items4 = [hasOwnProperty(React3, obj11), ];
    const obj24 = { style: tmp5.gradient, end: null, start: null, colors: null };
    ({ END: obj13.end, START: obj13.start } = VerticalGradient);
    const items5 = ["rgba(0, 0, 0, 0)", token];
    obj24.colors = items5;
    items4[1] = hasOwnProperty(LinearGradientDefault, obj24);
    obj10.children = items4;
    tmp12Result = timestampProducer(React5, obj10);
    const tmp8Result = FastImageDefault;
  }
  items3[1] = tmp12Result;
  obj5.children = items3;
  obj4.children = timestampProducer(React3, obj5);
  obj2.children = hasOwnProperty(React3, obj4);
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
};