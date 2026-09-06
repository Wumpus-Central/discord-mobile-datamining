// === Module 16051: ChannelListPanelBackdrop ===

// Module 16051 (ChannelListPanelBackdrop)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { DM_WIDTH } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: null, listWrapper: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = ThemesDefault.colors.PANEL_BG;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  dependencyMap = undefined;
  let mobileQuestDockHeight;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = style(16022);
  const isHomeDrawerEnabled = obj.useIsHomeDrawerEnabled();
  obj1 = style(15091);
  mobileQuestDockHeight = obj1.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  obj = {
    style: mobileQuestDockHeight.useMemo(() => {
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
      obj[1] = num2 + mobileQuestDockHeight;
      let num3;
      if (rect != null) {
        num3 = rect.left;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj[2] = num3;
      let num4;
      if (rect != null) {
        num4 = rect.right;
      }
      if (num4 == null) {
        num4 = 0;
      }
      obj[3] = num4;
      items[1] = obj;
      items[2] = style;
      return items;
    }, items),
    children: null
  };
  if (isHomeDrawerEnabled) {
    let ScreenAlignedThemedGradientSliding = style(tmp9).ScreenAlignedThemedGradientSliding;
  } else {
    ScreenAlignedThemedGradientSliding = contentInset(tmp9);
  }
  obj = { offsetX: DM_WIDTH, offsetY: contentInset(1611)().top };
  const items1 = [closure_6(ScreenAlignedThemedGradientSliding, obj), , ];
  obj1 = { pointerEvents: "none", style: tmp.panelTint };
  items1[1] = closure_6(closure_4, obj1);
  items1[2] = closure_6(closure_4, { style: tmp.listWrapper, children: children.children });
  obj[1] = items1;
  return closure_7(closure_4, obj);
};