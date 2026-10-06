// === Module 14529: SettingSegmentedControlRenderer ===

// Module 14529 (SettingSegmentedControlRenderer)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11143 */;
import SettingsRendererConfig from "SettingsRendererConfig" /* 14425 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14519 */;
import SettingTreeManagerDefault from "SettingTreeManager" /* 14520 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14517 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, node;

let c10;
let c9;
let metroImportAll;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const NodeType = SettingRendererConstants.NodeType;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { controlContainer: obj2, pageContainer: { flex: 1 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((node) => {
  let defaultIndex;
  let tmp11;
  let tmp5;
  let obj = defaultIndex(576);
  const cResult = obj.c(23);
  node = node.node;
  defaultIndex = node.defaultIndex;
  const settings = node.settings;
  let tmp2 = closure_11();
  [tmp5, dependencyMap] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const tmp3 = _slicedToArray;
  if (cResult[0] === defaultIndex) {
    let tmp6;
    if (cResult[1] === settings) {
      tmp6 = cResult[2];
    }
    const first = tmp3(react.useState(tmp6), 1)[0];
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
      cResult[3] = O;
    } else {
      class O {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    if (cResult[4] !== settings) {
      class O {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
      _slicedToArray = tmp11;
      const item = settings.forEach((id) => {
        let component;
        let obj2;
        const tmp = SettingsRendererConfig.SETTING_RENDERER_CONFIG[id];
        const tmp2 = _modDef38;
        tmp2(tmp.type === NodeType.ROUTE, "Invalid setting type for segmented control: " + id);
        const screen = tmp.screen;
        const obj = { label: obj2.getSettingTitle(id), id, page: metroImportAll(component, {}) };
        component = screen.getComponent();
        const push = _slicedToArray.push;
        obj2 = SettingRendererUtils;
        push(obj);
      });
      cResult[4] = settings;
      cResult[5] = tmp11;
    } else {
      class O {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
      _slicedToArray = tmp11;
    }
    if (cResult[6] === first) {
      class O {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
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
        const field = UserSettingSearchStore.getField("selected");
        if (null != field) {
          const index = settings.indexOf(field);
          if (-1 !== index) {
            return index;
          } else {
            const obj = SettingTreeManagerDefault;
            const ancestors = obj.getAncestors(field);
            for (const item10020 of ancestors) {
              let index1 = settings.indexOf(item10020);
              if (-1 !== index1) {
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
      const field = UserSettingSearchStore.getField("selected");
      if (null != field) {
        const index = settings.indexOf(field);
        if (-1 !== index) {
          return index;
        } else {
          const obj = SettingTreeManagerDefault;
          const ancestors = obj.getAncestors(field);
          for (const item10020 of ancestors) {
            let index1 = settings.indexOf(item10020);
            if (-1 !== index1) {
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
}) : ((node) => {
  let _undefined;
  let c0;
  let c2;
  let items1;
  let settings;
  let tmp3;
  let tmp5;
  const f117333 = () => {
    const field = UserSettingSearchStore.getField("selected");
    if (null != field) {
      const index = settings.indexOf(field);
      if (-1 !== index) {
        return index;
      } else {
        const obj = SettingTreeManagerDefault;
        const ancestors = obj.getAncestors(field);
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
  };
  _require = undefined;
  settings = undefined;
  dependencyMap = undefined;
  ({ defaultIndex: c0, settings } = node.node);
  let tmp = closure_11();
  let tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c2] = tmp2;
  [tmp5, r10021] = react.useState(f117333);
  let items = [settings];
  _slicedToArray(react.useState(f117333), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = react.useMemo(() => {
    const items = [];
    const item = settings.forEach((id) => {
      let component;
      let obj2;
      const tmp = closure_2_0(_undefined[11]).SETTING_RENDERER_CONFIG[id];
      const tmp2 = settings(_undefined[12]);
      tmp2(tmp.type === constants.ROUTE, "Invalid setting type for segmented control: " + id);
      const screen = tmp.screen;
      const obj = { label: obj2.getSettingTitle(id), id, page: closure_2_8(component, {}) };
      component = screen.getComponent();
      const push = items.push;
      obj2 = closure_2_0(_undefined[13]);
      push(obj);
    });
    return items;
  }, items);
  let obj = require("SegmentedControlState");
  const segmentedControlState = obj.useSegmentedControlState({ items: memo, pageWidth: tmp3, defaultIndex: tmp5 });
  let obj2 = { children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.controlContainer, onLayout: callback, children: closure_8(require("SegmentedControl").SegmentedControl, { state: segmentedControlState }) };
  items1[0] = closure_8(View, obj3);
  const obj4 = { style: tmp.pageContainer, children: closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }) };
  items1[1] = closure_8(View, obj4);
  return closure_10(closure_9, obj2);
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx");

export default tmp3;