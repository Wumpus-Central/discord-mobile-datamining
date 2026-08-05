// discord_app/modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { controlContainer: null, pageContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  let c0;
  let c2;
  let settings;
  let tmp3;
  let tmp5;
  let _require;
  settings = undefined;
  let dependencyMap;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = createCacheKey();
  [tmp3, c2] = callback(React.useState(0), 2);
  let tmp2 = callback(React.useState(0), 2);
  [tmp5, r10021] = callback(React.useState(() => {
    const field = outer1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const ancestors = settings(_undefined[8]).getAncestors(field);
        for (const item10020 of ancestors) {
          let tmp9 = settings;
          let index1 = settings.indexOf(item10020);
          let tmp11 = index1;
          if (-1 !== index1) {
            let tmp12 = obj2;
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
    const item = settings.forEach((closure_0) => {
      const tmp = items(outer1_2[9]).SETTING_RENDERER_CONFIG[closure_0];
      outer1_1(outer1_2[10])(tmp.type === outer1_7.ROUTE, "Invalid setting type for segmented control: " + closure_0);
      const screen = tmp.screen;
      const obj = { label: null, id: null, page: null };
      const component = screen.getComponent();
      const tmp2 = outer1_1(outer1_2[10]);
      obj[0] = items(outer1_2[11]).getSettingTitle(closure_0);
      obj[1] = closure_0;
      obj[2] = outer1_8(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  let obj = _require(8878);
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  obj = { children: null };
  obj = { style: tmp.controlContainer, onLayout: callback, children: callback2(_require(9063).SegmentedControl, { state: segmentedControlState }) };
  const items1 = [callback2(View, obj), ];
  const tmp4 = callback(React.useState(() => {
    const field = outer1_6.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const ancestors = settings(_undefined[8]).getAncestors(field);
        for (const item10020 of ancestors) {
          let tmp9 = settings;
          let index1 = settings.indexOf(item10020);
          let tmp11 = index1;
          if (-1 !== index1) {
            let tmp12 = obj2;
            obj2.return();
            return index1;
          }
        }
        const obj = settings(_undefined[8]);
      }
    }
    return c0;
  }), 2);
  items1[1] = callback2(View, { style: tmp.pageContainer, children: callback2(_require(9480).SegmentedControlPages, { state: segmentedControlState }) });
  obj[0] = items1;
  return callback3(closure_9, obj);
};