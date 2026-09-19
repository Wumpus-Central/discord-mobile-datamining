// discord_app/modules/quests/native/QuestHomeEmptyState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05198_LinearGradient.js";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef15329 from "../../../../_runtime/metro/15329__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ImageBackground: closure_4 } = get_ActivityIndicator);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  container: { flex: 1 },
  emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
  emptyStateContentContainer: { top: -55, paddingHorizontal: nativeDefault.space.PX_32 },
  emptyStateContentTitle: { textAlign: "center" },
  emptyStateContentDescription: { textAlign: "center", marginTop: 4 },
  emptyImage: {
    flex: 1,
    width: "100%",
    aspectRatio: 1.6375545851528384,
    minWidth: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 },
  actionWrapper: { marginTop: 16, alignSelf: "center" },
};
let closure_9 = createStyles.createStyles(obj2);
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
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const obj2 = { bottom: null, style: null, children: null };
  obj2.bottom = PlatformUtils.isAndroid();
  obj2.style = tmp5.container;
  const obj4 = { style: tmp5.container, children: null };
  const obj5 = { style: tmp5.emptyStateContainer, children: null };
  const obj6 = { style: tmp5.emptyStateContentContainer, children: null };
  const items = [
    timestampProducer(Text_Text.Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp5.emptyStateContentTitle,
      children: title,
    }),
    timestampProducer(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-default",
      style: tmp5.emptyStateContentDescription,
      children: subtitle,
    }),
  ];
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = timestampProducer(React3, obj9);
  }
  items[2] = tmp9Result;
  obj6.children = items;
  const items1 = [React5(React3, obj6)];
  let tmp11Result = null;
  if (!useChatLayoutDefault().isChatLockedOpen) {
    const obj10 = { children: null };
    const obj11 = { style: tmp5.emptyImage, source: _modDef15329, resizeMode: "cover" };
    const items2 = [timestampProducer(React4, obj11)];
    const obj22 = { style: tmp5.gradient, end: null, start: null, colors: null };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj22.colors = items3;
    items2[1] = timestampProducer(LinearGradientDefault, obj22);
    obj10.children = items2;
    tmp11Result = React5(React6, obj10);
  }
  items1[1] = tmp11Result;
  obj5.children = items1;
  obj4.children = React5(React3, obj5);
  obj2.children = timestampProducer(React3, obj4);
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
}
