// === Module 16861: SettingSegmentedControlRenderer ===

// Module 16861 (SettingSegmentedControlRenderer)
import nativeDefault from "native" /* 575 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 16851 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16848 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const NodeType = fn(11704).NodeType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { controlContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 }, pageContainer: { flex: 1 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  _require = undefined;
  settings = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  const tmp3 = settings(9087)();
  const width = tmp3.width;
  let num = 0;
  ({ ref, onLayout } = tmp3);
  if (undefined !== width) {
    num = width;
  }
  items = [settings];
  const memo = noop.useMemo(() => {
    items = [];
    const item = settings.forEach((id) => {
      const tmp = items(16695).SETTING_RENDERER_CONFIG[id];
      settings(38)(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: null, id: null, page: null };
      const component = screen.getComponent();
      const tmp2 = settings(38);
      obj.label = items(16850).getSettingTitle(id);
      obj.id = id;
      obj.page = closure_2_8(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  const tmp4 = _slicedToArray(noop.useState(() => {
    const field = UserSettingSearchStore.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const ancestors = SettingTreeManagerDefault.getAncestors(field);
        for (const item10020 of ancestors) {
          let index1 = settings.indexOf(item10020);
          if (-1 !== index1) {
            obj2.return();
            return index1;
          }
        }
      }
    }
    return c0;
  }), 2);
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: tmp4[0] });
  const obj2 = { children: null };
  let obj = require("SegmentedControlState");
  const items1 = [closure_8(View, { style: tmp.controlContainer, ref, onLayout, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) }), ];
  const obj3 = { style: tmp.controlContainer, ref, onLayout, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) };
  items1[1] = closure_8(View, { style: tmp.pageContainer, children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }) });
  obj2.children = items1;
  return closure_10(closure_9, obj2);
};