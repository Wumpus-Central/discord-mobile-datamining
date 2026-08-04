// discord_app/modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { DM_WIDTH } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1, position: "relative", overflow: "hidden" }, panelTint: null, listWrapper: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.PANEL_BG;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListPanelBackdrop.tsx");

export default function ChannelListPanelBackdrop(children) {
  const style = children.style;
  const contentInset = children.contentInset;
  let dependencyMap;
  let mobileQuestDockHeight;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = style(14136);
  mobileQuestDockHeight = obj.useMobileQuestDockHeight();
  let items = [tmp, contentInset, mobileQuestDockHeight, style];
  obj = {
    style: mobileQuestDockHeight.useMemo(() => {
      const items = [_undefined.container, , ];
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
  obj = { offsetX: DM_WIDTH, offsetY: contentInset(1581)().top, parentSpringTranslateX: mobileQuestDockHeight.useContext(style(14948).HomeDrawerStateContext).panelSpringTranslateX };
  const items1 = [callback(contentInset(15228), obj), callback(closure_4, { pointerEvents: "none", style: tmp.panelTint }), callback(closure_4, { style: tmp.listWrapper, children: children.children })];
  obj[1] = items1;
  return callback2(closure_4, obj);
};