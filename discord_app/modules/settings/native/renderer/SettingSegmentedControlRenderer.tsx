// discord_app/modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import SettingTreeManagerDefault from "SettingTreeManager.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../user_settings/UserSettingSearchStore.tsx";

const require = fn;
const View = fn(17).View;
const NodeType = fn(11469).NodeType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { controlContainer: null, pageContainer: null };
createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
createStyles.controlContainer = createStyles;
createStyles.pageContainer = { flex: 1 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default function SettingSegmentedControl(node) {
  _require = undefined;
  settings = undefined;
  dependencyMap = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  [tmp3, c2] = _slicedToArray(noop.useState(0), 2);
  let tmp2 = _slicedToArray(noop.useState(0), 2);
  [tmp5, r10021] = _slicedToArray(
    noop.useState(() => {
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
    }),
    2,
  );
  let items = [settings];
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = noop.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      const tmp = items(14584).SETTING_RENDERER_CONFIG[id];
      settings(38)(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: null, id: null, page: null };
      const component = screen.getComponent();
      const tmp2 = settings(38);
      obj.label = items(14693).getSettingTitle(id);
      obj.id = id;
      obj.page = closure_2_8(component, {});
      items.push(obj);
    });
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  obj = { children: null };
  obj = {
    style: tmp.controlContainer,
    onLayout: callback,
    children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }),
  };
  const items1 = [closure_8(View, obj)];
  const tmp4 = _slicedToArray(
    noop.useState(() => {
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
    }),
    2,
  );
  items1[1] = closure_8(View, {
    style: tmp.pageContainer,
    children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
  });
  obj.children = items1;
  return closure_10(closure_9, obj);
}
