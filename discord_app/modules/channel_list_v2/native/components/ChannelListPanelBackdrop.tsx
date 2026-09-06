// discord_app/modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import QuestHooks from "../../../quests/native/QuestHooks.native.tsx";
import useHomeDrawerGesture from "../../../home_drawer/native/useHomeDrawerGesture.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const DM_WIDTH = fn(1074).DM_WIDTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1, position: "relative", overflow: "hidden" },
  panelTint: null,
  listWrapper: null,
};
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.PANEL_BG;
createStyles.panelTint = createStyles;
createStyles.listWrapper = { flex: 1 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  const tmp = closure_8();
  const container = tmp;
  let obj = useHomeDrawerGesture;
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  let obj1 = QuestHooks;
  const mobileQuestDockHeight = obj1.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  obj = {
    style: noop.useMemo(() => {
      const items = [container.container, ,];
      const rect = contentInset;
      let num;
      if (contentInset != null) {
        num = rect.top;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { marginTop: num, paddingBottom: null, marginLeft: null, marginRight: null };
      let num2;
      if (rect != null) {
        num2 = rect.bottom;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.paddingBottom = num2 + mobileQuestDockHeight;
      let num3;
      if (rect != null) {
        num3 = rect.left;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj.marginLeft = num3;
      let num4;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj.marginRight = num4;
      items[1] = obj;
      items[2] = style;
      return items;
    }, items),
    children: null,
  };
  if (isHomeDrawerEnabled) {
    let ScreenAlignedThemedGradientSliding = require(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = importDefault(tmp9);
  }
  obj = { offsetX: DM_WIDTH, offsetY: useSafeAreaInsetsDefault().top };
  const items1 = [timestampProducer(ScreenAlignedThemedGradientSliding, obj), ,];
  obj1 = { pointerEvents: "none", style: tmp.panelTint };
  items1[1] = timestampProducer(React4, obj1);
  items1[2] = timestampProducer(React4, { style: tmp.listWrapper, children: children.children });
  obj.children = items1;
  return React5(React4, obj);
}
