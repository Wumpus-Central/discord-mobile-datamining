// === Module 16211: ChannelListPanelBackdrop ===

// Module 16211 (ChannelListPanelBackdrop)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import QuestHooks from "QuestHooks" /* 15203 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16182 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const DM_WIDTH = fn(1074).DM_WIDTH;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: null, listWrapper: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.PANEL_BG;
obj2.panelTint = obj3;
obj2.listWrapper = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  const tmp = closure_8();
  const container = tmp;
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const mobileQuestDockHeight = QuestHooks.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  const obj3 = {
    style: noop.useMemo(() => {
      const items = [container.container, , ];
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
    children: null
  };
  if (isHomeDrawerEnabled) {
    let ScreenAlignedThemedGradientSliding = require(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = importDefault(tmp9);
  }
  const items1 = [timestampProducer(ScreenAlignedThemedGradientSliding, { offsetX: DM_WIDTH, offsetY: useSafeAreaInsetsDefault().top }), timestampProducer(React4, { pointerEvents: "none", style: tmp.panelTint }), timestampProducer(React4, { style: tmp.listWrapper, children: children.children })];
  obj3.children = items1;
  return React5(React4, obj3);
};