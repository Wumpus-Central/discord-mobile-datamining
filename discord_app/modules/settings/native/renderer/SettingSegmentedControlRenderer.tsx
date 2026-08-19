// === Module 15068: SettingSegmentedControl ===

// Module 15068 (SettingSegmentedControl)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import zustandStore from "zustandStore" /* 13993 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 10670 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  let _require;
  settings = undefined;
  dependencyMap = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = callback4();
  [tmp3, c2] = callback(React.useState(0), 2);
  let tmp2 = callback(React.useState(0), 2);
  [tmp5, r10021] = callback(React.useState(() => {
    const field = closure_1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const ancestors = settings(_undefined[8]).getAncestors(field);
        for (const item10020 of ancestors) {
          let index1 = settings.indexOf(item10020);
          if (-1 !== index1) {
            obj2.return();
            return index1;
          }
        }
        const obj = settings(_undefined[8]);
      }
    }
    return c0;
  }), 2);
  let items = [settings];
  callback = React.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => {
    const items = [];
    const item = settings.forEach((item, index) => {
      const tmp = items(closure_1_2[9]).SETTING_RENDERER_CONFIG[item];
      settings(closure_1_2[10])(tmp.type === closure_1_7.ROUTE, "Invalid setting type for segmented control: " + item);
      const screen = tmp.screen;
      const obj = { label: null, id: null, page: null };
      const component = screen.getComponent();
      const tmp2 = settings(closure_1_2[10]);
      obj[0] = items(closure_1_2[11]).getSettingTitle(item);
      obj[1] = item;
      obj[2] = closure_1_8(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  let obj = _require(8799);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  obj = { style: tmp.controlContainer, onLayout: callback, children: callback2(_require(10096).SegmentedControl, { state: segmentedControlState }) };
  const items1 = [callback2(View, obj), ];
  const tmp4 = callback(React.useState(() => {
    const field = closure_1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const ancestors = settings(_undefined[8]).getAncestors(field);
        for (const item10020 of ancestors) {
          let index1 = settings.indexOf(item10020);
          if (-1 !== index1) {
            obj2.return();
            return index1;
          }
        }
        const obj = settings(_undefined[8]);
      }
    }
    return c0;
  }), 2);
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(_require(11785).SegmentedControlPages, { state: segmentedControlState }) });
  obj[0] = items1;
  return callback3(closure_9, obj);
};