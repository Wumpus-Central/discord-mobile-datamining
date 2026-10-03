// === Module 14509: SettingSegmentedControlRenderer ===

// Module 14509 (SettingSegmentedControlRenderer)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import SettingsRendererConfig from "SettingsRendererConfig" /* 14405 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14499 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 14500 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14497 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const NodeType = fn(11130).NodeType;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { controlContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 }, pageContainer: { flex: 1 } };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  const cResult = defaultIndex(576).c(23);
  node = node.node;
  defaultIndex = node.defaultIndex;
  const settings = node.settings;
  closure_11();
  let obj = defaultIndex(576);
  const tmp3 = _slicedToArray;
  [tmp5, dependencyMap] = noop.useState(0);
  if (cResult[0] === defaultIndex) {
    if (cResult[1] === settings) {
      let tmp6 = cResult[2];
    }
    const first = tmp3(noop.useState(tmp6), 1)[0];
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor(arg0) {
          tmp = closure_2(node.nativeEvent.layout.width);
          return;
        }
      }
      cResult[3] = O;
    } else {
      class O {
        constructor(arg0) {
          tmp = closure_2(node.nativeEvent.layout.width);
          return;
        }
      }
    }
    if (cResult[4] !== settings) {
      class O {
        constructor(arg0) {
          tmp = closure_2(node.nativeEvent.layout.width);
          return;
        }
      }
      _slicedToArray = tmp11;
      const item = settings.forEach((id) => {
        const tmp = SettingsRendererConfig.SETTING_RENDERER_CONFIG[id];
        _modDef38(tmp.type === NodeType.ROUTE, "Invalid setting type for segmented control: " + id);
        const screen = tmp.screen;
        const obj = { label: null, id: null, page: null };
        const component = screen.getComponent();
        obj.label = SettingRendererUtils.getSettingTitle(id);
        obj.id = id;
        obj.page = closure_2_8(component, {});
        tmp11.push(obj);
      });
      cResult[4] = settings;
      cResult[5] = tmp11;
    } else {
      class O {
        constructor(arg0) {
          tmp = closure_2(node.nativeEvent.layout.width);
          return;
        }
      }
      _slicedToArray = tmp11;
    }
    if (cResult[6] === first) {
      class O {
        constructor(arg0) {
          tmp = closure_2(node.nativeEvent.layout.width);
          return;
        }
      }
    }
    const obj3 = { items: tmp11, pageWidth: tmp5, defaultIndex: first };
    cResult[6] = first;
    cResult[7] = tmp11;
    cResult[8] = tmp5;
    cResult[9] = obj3;
    class C {
      constructor() {
        field = closure_6.getField("selected");
        if (null != field) {
          tmp2 = settings;
          index = settings.indexOf(field);
          num = -1;
          if (-1 !== index) {
            return index;
          } else {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[10]);
            ancestors = obj.getAncestors(field);
            tmp7 = ancestors;
            tmp8 = ancestors;
            for (const item10020 of ancestors) {
              tmp9 = settings;
              index1 = settings.indexOf(item10020);
              tmp11 = index1;
              if (-1 !== index1) {
                tmp12 = obj2;
                obj2.return();
                return index1;
              }
            }
          }
        }
        return defaultIndex;
      }
    }
  }
  class C {
    constructor() {
      field = closure_6.getField("selected");
      if (null != field) {
        tmp2 = settings;
        index = settings.indexOf(field);
        num = -1;
        if (-1 !== index) {
          return index;
        } else {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj = closure_1(closure_2[10]);
          ancestors = obj.getAncestors(field);
          tmp7 = ancestors;
          tmp8 = ancestors;
          for (const item10020 of ancestors) {
            tmp9 = settings;
            index1 = settings.indexOf(item10020);
            tmp11 = index1;
            if (-1 !== index1) {
              tmp12 = obj2;
              obj2.return();
              return index1;
            }
          }
        }
      }
      return defaultIndex;
    }
  }
  cResult[0] = defaultIndex;
  cResult[1] = settings;
  cResult[2] = C;
  tmp6 = C;
  const tmp4 = _slicedToArray(noop.useState(0), 2);
}) : ((node) => {
  _require = undefined;
  settings = undefined;
  dependencyMap = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  [tmp3, c2] = noop.useState(0);
  let tmp2 = _slicedToArray(noop.useState(0), 2);
  [tmp5, r10021] = noop.useState(() => {
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
  });
  let items = [settings];
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = noop.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      const tmp = items(14405).SETTING_RENDERER_CONFIG[id];
      settings(38)(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: null, id: null, page: null };
      const component = screen.getComponent();
      const tmp2 = settings(38);
      obj.label = items(14499).getSettingTitle(id);
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
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  const obj2 = { children: null };
  let obj = require("SegmentedControlState");
  const items1 = [closure_8(View, { style: tmp.controlContainer, onLayout: callback, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) }), ];
  const obj3 = { style: tmp.controlContainer, onLayout: callback, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) };
  items1[1] = closure_8(View, { style: tmp.pageContainer, children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }) });
  obj2.children = items1;
  return closure_10(closure_9, obj2);
});