// === Module 16061: LayoutStore ===

// Module 16061 (LayoutStore)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import v1 from "v1" /* 1266 */;
import LayoutStoreTypes from "LayoutStoreTypes" /* 16065 */;
import LayoutUtils from "LayoutUtils" /* 16066 */;
import LayoutRecord from "LayoutRecord" /* 16062 */;
import WidgetRecord from "WidgetRecord" /* 16063 */;

require = fn;
const OverlayWidgets = fn(1072).OverlayWidgets;
const OverlayLayoutConstants = fn(16064);
const OVERLAY_LEGACY_LAYOUT_VERSION = OverlayLayoutConstants.OVERLAY_LEGACY_LAYOUT_VERSION;
({ OVERLAY_V3_LAYOUT_VERSION, CONJURE_OVERLAY_WIDGET_CHROME } = OverlayLayoutConstants);
const migrated = "migrated";
let obj = {};
obj[OverlayWidgets.GUILDS] = { resizeX: false, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.175, top: 0.05, bottom: "match", right: "intl" }, size: { width: "auto", height: 0.65 }, pinned: false, minSize: { width: 312, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
let obj2 = { resizeX: false, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.175, top: 0.05, bottom: "match", right: "intl" }, size: { width: "auto", height: 0.65 }, pinned: false, minSize: { width: 312, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.TEXT] = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.26, top: 0.05, bottom: "match", right: "c" }, size: { width: 0.565, height: 0.65 }, pinned: true, minSize: { width: 430, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
let obj3 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: { anchor: { left: 0.26, top: 0.05, bottom: "match", right: "c" }, size: { width: 0.565, height: 0.65 }, pinned: true, minSize: { width: 430, height: 300 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.VOICE] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.011, top: 0.011, bottom: "description", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 100 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
let obj4 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.011, top: 0.011, bottom: "description", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 100 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.GUILDS_TEXT] = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { width: 0.6, height: 0.45 }, pinned: false, minSize: { height: 300, width: 610 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
let obj5 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { width: 0.6, height: 0.45 }, pinned: false, minSize: { height: 300, width: 610 } }, version: OVERLAY_LEGACY_LAYOUT_VERSION };
obj[OverlayWidgets.VOICE_V3] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.35, bottom: "description", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 24 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj6 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.35, bottom: "description", right: "T" }, size: { width: "auto", height: "auto" }, pinned: true, minSize: { width: 272, height: 24 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.VIDEO] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: 0.01, top: "WireType", bottom: -515396076, right: 1631556730 }, size: { fixed: true, width: 408, height: 128 }, pinned: true, minSize: { width: 128, height: 128 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj7 = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: 0.01, top: "WireType", bottom: -515396076, right: 1631556730 }, size: { fixed: true, width: 408, height: 128 }, pinned: true, minSize: { width: 128, height: 128 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.GO_LIVE] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "match", top: "duration", bottom: true, right: true }, size: { fixed: true, width: 256, height: 144 }, pinned: false, minSize: { width: 276, height: 164 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj8 = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL_DEFAULT, defaultSettings: { anchor: { left: "match", top: "duration", bottom: true, right: true }, size: { fixed: true, width: 256, height: 144 }, pinned: false, minSize: { width: 276, height: 164 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.QUICK_ACTIONS] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.34, top: 0.02, bottom: "description", right: "skuId" }, size: { width: "auto", height: "auto" }, pinned: false, minSize: { width: 216, height: 56 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj9 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.34, top: 0.02, bottom: "description", right: "skuId" }, size: { width: "auto", height: "auto" }, pinned: false, minSize: { width: 216, height: 56 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.NOTIFICATIONS] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.02, bottom: "HermesInternal", right: "description" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj10 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: 0.01, top: 0.02, bottom: "HermesInternal", right: "description" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.ACTIVITY] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "count", bottom: "count", right: "count" }, size: { height: "auto", width: "auto" }, pinned: false, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj11 = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "count", bottom: "count", right: "count" }, size: { height: "auto", width: "auto" }, pinned: false, minSize: { width: 320, height: 100 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.TEXT_CHAT_V3] = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "mode", bottom: "Object", right: "ind" }, size: { fixed: true, height: 372, width: 500 }, minSize: { width: 350, height: 100 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj12 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "WireType", top: "mode", bottom: "Object", right: "ind" }, size: { fixed: true, height: 372, width: 500 }, minSize: { width: 350, height: 100 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.FRIENDS] = { resizeX: false, resizeY: true, dragAnywhere: true, constrainAutoSizeToExplicitResizeEvents: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "__closure", top: "mode", bottom: "Object", right: "ind" }, size: { fixed: true, height: "auto", width: 350 }, minSize: { width: 350, height: 350 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj13 = { resizeX: false, resizeY: true, dragAnywhere: true, constrainAutoSizeToExplicitResizeEvents: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.REQUIRED, defaultSettings: { anchor: { left: "__closure", top: "mode", bottom: "Object", right: "ind" }, size: { fixed: true, height: "auto", width: 350 }, minSize: { width: 350, height: 350 }, pinned: false }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.CLICK_ZONE_DEBUG] = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: "count", bottom: "count", right: "count" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 50, height: 50 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj14 = { resizeX: true, resizeY: true, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: "count", bottom: "count", right: "count" }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 50, height: 50 } }, version: OVERLAY_V3_LAYOUT_VERSION };
obj[OverlayWidgets.PERFORMANCE_DEBUG] = { resizeX: false, resizeY: false, dragAnywhere: true, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.DEBUG, defaultSettings: { anchor: { left: "WireType", top: true, bottom: true, right: true }, size: { height: "auto", width: "auto" }, pinned: true, minSize: { width: 120, height: 300 } }, version: OVERLAY_V3_LAYOUT_VERSION };
const obj16 = { resizeX: true, resizeY: true, dragAnywhere: false, layoutPolicy: fn(16065).OverlayWidgetLayoutPolicy.OPTIONAL, defaultSettings: null, version: OVERLAY_V3_LAYOUT_VERSION };
const obj17 = { anchor: { left: 0.35, top: 0.2, bottom: "description", right: "c" }, size: null, pinned: false, minSize: null };
let size = { fixed: true, width: 400 + CONJURE_OVERLAY_WIDGET_CHROME.width, height: 300 + CONJURE_OVERLAY_WIDGET_CHROME.height };
obj17.size = size;
const size1 = { width: 160 + CONJURE_OVERLAY_WIDGET_CHROME.width, height: 120 + CONJURE_OVERLAY_WIDGET_CHROME.height };
obj17.minSize = size1;
obj16.defaultSettings = obj17;
obj[OverlayWidgets.CONJURE] = obj16;
const PersistedStore = initializeDefault.PersistedStore;
class LayoutStore extends PersistedStore {
}
const prototype = LayoutStore.prototype;
prototype["initialize"] = function initialize(layouts) {
  const self = this;
  if (null != layouts) {
    if (null != layouts.layouts) {
      if (null != layouts.widgets) {
        obj = {};
        closure_129_0 = obj;
        const item = require("apply").forEach(layouts.layouts, (version, arg1) => {
          closure_0[arg1] = new LayoutRecord(version);
        });
        obj2 = {};
        closure_130_0 = obj2;
        const arr = require("apply");
        const item1 = require("apply").forEach(layouts.widgets, (id, arg1) => {
          closure_0[arg1] = new WidgetRecord(id);
        });
        closure_4 = obj2;
        const arr2 = require("apply");
      }
      importDefault = false;
      closure_0 = [];
      const item2 = require("apply").forEach(obj, (layoutPolicy, arg1) => {
        if (layoutPolicy.layoutPolicy === LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED) {
          closure_0.push(arg1);
        }
      });
      const arr3 = require("apply");
      const item3 = require("apply").forEach(obj, (set, layoutId) => {
        widgetsForLayout = widgetsForLayout.getWidgetsForLayout(layoutId);
        c3 = false;
        function _loop(iter) {
          if (null == widgetsForLayout.find((type) => type.type === closure_0)) {
            if (obj[iter].version === set.version) {
              c1 = true;
              c3 = true;
              const v4Result = v1.v4();
              let defaultSettings;
              if (null != tmp16[iter]) {
                defaultSettings = tmp21.defaultSettings;
              }
              if (null == defaultSettings) {
                return { v: "r" };
              } else {
                obj = {};
                const merged = Object.assign(defaultSettings);
                obj.type = iter;
                obj.id = v4Result;
                obj.layoutId = layoutId;
                obj.zIndex = widgetsForLayout.length;
                const tmp10 = new WidgetRecord(obj);
                widgetsForLayout.push(tmp10);
                obj2 = {};
                const merged1 = Object.assign(obj2);
                obj2[v4Result] = tmp10;
              }
            }
          }
          return 0;
        }
        const iter = set[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          if (0 !== _loopResult) {
            if (tmp3) {
              iter.return();
              return _loopResult.v;
            }
          }
          continue;
        }
        if (c3) {
          const result = set.set("widgets", widgetsForLayout.map((id) => id.id));
          set = result;
          obj = {};
          let merged = Object.assign(obj);
          obj[layoutId] = result;
        }
      });
      const arr4 = require("apply");
      const item4 = require("apply").forEach(closure_4, (arg0, arg1) => {
        let tmp4 = null == tmp3;
        if (!tmp4) {
          const widgets = tmp3.widgets;
          tmp4 = widgets.indexOf(arg1) < 0;
        }
        if (tmp4) {
          obj = {};
          const merged = Object.assign(obj2);
          delete tmp[tmp2];
          c1 = true;
        }
      });
      if (importDefault) {
        self.persist();
        self.emitChange();
      }
    }
  }
  obj = {};
  closure_4 = {};
};
prototype["getState"] = function getState() {
  return { layouts: obj4, widgets: obj2 };
};
prototype["getLayouts"] = function getLayouts() {
  return obj4;
};
prototype["getLayout"] = function getLayout(arg0) {
  return obj4[arg0];
};
prototype["getAllWidgets"] = function getAllWidgets() {
  return obj2;
};
prototype["getWidget"] = function getWidget(arg0) {
  return obj2[arg0];
};
prototype["getWidgetsForLayout"] = function getWidgetsForLayout(layoutId) {
  const self = this;
  const layout = this.getLayout(layoutId);
  if (null == layout) {
    items = [];
  } else {
    const widgets = layout.widgets;
    items = widgets.reduce((arr, item) => {
      const widget = self.getWidget(item);
      if (null != widget) {
        arr = arr.push(widget);
      }
      return arr;
    }, []);
  }
  return items;
};
prototype["getAllUnpinnedPinnedWidgets"] = function getAllUnpinnedPinnedWidgets(layoutId) {
  const self = this;
  const widgetsForLayout = this.getWidgetsForLayout(layoutId);
  items = [];
  const item = widgetsForLayout.forEach((type) => {
    const widgetConfig = self.getWidgetConfig(type.type);
    if (null != widgetConfig) {
      if (!tmp6) {
        items.push(type.type);
      }
      tmp6 = widgetConfig.layoutPolicy === LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED || type.pinned;
    } else if (!type.pinned) {
      items.push(type.type);
    }
  });
  return items;
};
prototype["getWidgetConfig"] = function getWidgetConfig(type) {
  return obj[type];
};
prototype["getWidgetDefaultSettings"] = function getWidgetDefaultSettings(arg0) {
  let defaultSettings;
  if (null != obj[arg0]) {
    defaultSettings = tmp.defaultSettings;
  }
  return defaultSettings;
};
prototype["getWidgetType"] = function getWidgetType(arg0) {
  let str = "";
  if (null != obj2[arg0]) {
    str = tmp.type;
  }
  return str;
};
prototype["getWidgetsByType"] = function getWidgetsByType(arg0) {
  closure_0 = arg0;
  const values = Object.values(obj2);
  return values.filter((type) => type.type === closure_0);
};
prototype["getWidgetsByTypeAndLayout"] = function getWidgetsByTypeAndLayout(CONJURE, OVERLAY_V3_LAYOUT_ID) {
  closure_0 = CONJURE;
  closure_1 = OVERLAY_V3_LAYOUT_ID;
  const values = Object.values(obj2);
  return values.filter((type) => {
    let tmp = type.type === closure_0;
    if (tmp) {
      tmp = type.layoutId === closure_1;
    }
    return tmp;
  });
};
prototype["getRegisteredWidgets"] = function getRegisteredWidgets() {
  return obj;
};
prototype["getDefaultLayout"] = function getDefaultLayout(layoutId) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  items = [];
  const item = num(items[7]).forEach(this.getRegisteredWidgets(), (layoutPolicy, type) => {
    layoutPolicy = layoutPolicy.layoutPolicy;
    if (LayoutStoreTypes.OverlayWidgetLayoutPolicy.REQUIRED === layoutPolicy) {
      num = layoutPolicy.version;
      if (num == null) {
        num = 0;
      }
      if (num === num) {
        let defaultSettings;
        if (null != obj[type]) {
          defaultSettings = tmp7.defaultSettings;
        }
        if (null != defaultSettings) {
          obj = {};
          const merged = Object.assign(defaultSettings);
          obj.type = type;
          obj.id = v1.v4();
          obj.layoutId = layoutId;
          items.push(obj);
          const tmpResult = v1;
        }
      }
    }
  });
  return items;
};
LayoutStore.displayName = "LayoutStore";
LayoutStore.persistKey = "LayoutStore";
let items = [
  () => {
    obj = {};
    const Storage = Storage2.Storage;
    const merged = Object.assign(Storage.get("OverlayStore"));
    ({ pinnedWidgets, positions: require, sizes: importDefault } = obj);
    if (5 === obj.v) {
      if (pinnedWidgets) {
        const layoutId = migrated;
        items = [];
        obj2 = { layouts: null, widgets: null };
        const items1 = [migrated, ];
        const obj3 = {
          id: migrated,
          widgets: pinnedWidgets.map((id) => {
                let rect = null;
                if (null != require) {
                  rect = require[id];
                }
                let size = null;
                if (null != importDefault) {
                  size = importDefault[id];
                }
                obj = { id, layoutId, type: id, anchor: null, size: null, pinned: true, zIndex: 0 };
                if (!rect) {
                  rect = { top: -1, left: -1, bottom: null, right: null };
                }
                obj.anchor = rect;
                if (!size) {
                  size = { width: -1, height: -1 };
                }
                obj.size = size;
                items = [obj.id, obj];
                items.push(items);
                return obj.id;
              })
        };
        items1[1] = obj3;
        const items2 = [items1];
        obj2.layouts = items2;
        obj2.widgets = items;
        return obj2;
      }
    }
    return { layouts: [], widgets: [] };
  },
  (arg0) => {
    ({ layouts, widgets } = arg0);
    const set = new Set(Object.keys(OverlayWidgets));
    let widgets1 = Array.from(widgets).filter((item) => {
      [tmp] = item;
      return !set.has(tmp);
    });
    const arr = Array.from(widgets);
    const layouts1 = Array.from(layouts).filter((item) => {
      [tmp] = item;
      return tmp !== migrated;
    });
    const item = layouts1.forEach((item) => {
      [tmp, tmp2] = item;
      widgets1 = null;
      c2 = null;
      const widgets = tmp2.widgets;
      let found = widgets.find((item) => {
        closure_0 = item;
        const found = _null.find((item) => {
          [tmp, tmp2] = item;
          let tmp3 = tmp === closure_0;
          if (tmp3) {
            tmp3 = tmp2.layoutId === set;
          }
          return tmp3;
        });
        let tmp2 = null != found;
        if (tmp2) {
          let tmp4 = null == closure_2;
          if (tmp4) {
            tmp4 = found[1].type === constants.VOICE;
          }
          if (tmp4) {
            closure_2 = found[0];
          }
          let tmp7 = null == pinned;
          if (tmp7) {
            tmp7 = found[1].type === constants.TEXT;
          }
          if (tmp7) {
            pinned = found[1].pinned;
          }
          let tmp10 = null != pinned;
          if (tmp10) {
            tmp10 = null != closure_2;
          }
          tmp2 = tmp10;
        }
        return tmp2;
      });
      if (!widgets1) {
        if (null != c2) {
          const v4Result = set(dependencyMap[5]).v4();
          items = [c2, v4Result];
          tmp2.widgets = items;
          let defaultSettings;
          if (null != closure_1_10[constants.GUILDS_TEXT]) {
            defaultSettings = tmp17.defaultSettings;
          }
          if (null != defaultSettings) {
            const items1 = [v4Result, ];
            obj = {};
            const merged = Object.assign(defaultSettings);
            obj.type = constants.GUILDS_TEXT;
            obj.id = v4Result;
            obj.layoutId = tmp;
            obj.zIndex = 2;
            items1[1] = obj;
            widgets1.push(items1);
          }
          obj2 = set(dependencyMap[5]);
        }
      }
    });
    return { widgets: widgets1, layouts: layouts1 };
  },
  (arg0) => {
    ({ layouts, widgets } = arg0);
    return {
      layouts: layouts.reduce((acc, item) => {
        [tmp, tmp2] = item;
        acc[tmp] = tmp2;
        return acc;
      }, {}),
      widgets: widgets.reduce((acc, item) => {
        [tmp, tmp2] = item;
        acc[tmp] = tmp2;
        return acc;
      }, {})
    };
  },
  (layouts) => {
    layouts = layouts.layouts;
    const layouts2 = {};
    for (const key10006 in layouts) {
      obj = {};
      let merged = Object.assign(layouts[key10006]);
      obj.version = OVERLAY_LEGACY_LAYOUT_VERSION;
      layouts2[key10006] = obj;
      continue;
    }
    return { layouts: layouts2, widgets: layouts.widgets };
  }
];
LayoutStore.migrations = items;
const layoutStore = new LayoutStore(DispatcherDefault, {
  LAYOUT_CREATE: function handleCreateDefault(arg0) {
    ({ layoutId, widgets, version, defaultResolution: require } = arg0);
    items = undefined;
    if (null != obj[layoutId]) {
      if (obj[layoutId].version === version) {
        return false;
      }
    }
    items = [];
    const item = widgets.forEach((type, zIndex) => {
      const tmp = (function getMigratedWidget(type) {
        if (null != closure_1_3[closure_1_9]) {
          const widgets = tmp.widgets;
          for (const item10011 of widgets) {
            let tmp5 = closure_1_4[item10011];
            if (null != tmp5) {
              if (tmp6.type === arg0) {
                obj.return();
                return tmp5;
              }
            }
            continue;
          }
        }
        return null;
      })(type.type);
      obj = {};
      const merged = Object.assign(type);
      obj.zIndex = zIndex;
      if ("" === obj.id) {
        obj2 = v1;
        obj.id = obj2.v4();
      }
      if (null != tmp) {
        obj.pinned = tmp.pinned;
        if (-1 !== tmp.anchor.left) {
          obj.anchor = LayoutUtils.getAnchorPercentageFromLayoutSize(tmp.anchor, closure_1_0);
        }
        if (-1 !== tmp.size.width) {
          obj.size = LayoutUtils.getSizePercentageFromSize(tmp.size, closure_1_0);
        }
      }
      const obj5 = {};
      const merged1 = Object.assign(obj2);
      obj5[obj.id] = new WidgetRecord(obj);
      obj2 = obj5;
      items.push(obj.id);
      const tmp12 = new WidgetRecord(obj);
    });
    obj = {};
    let merged = Object.assign(obj);
    obj[layoutId] = new LayoutRecord({ id: layoutId, widgets: items, version });
  },
  LAYOUT_SET_PINNED: function handleTogglePinned(pinned) {
    pinned = pinned.pinned;
    let flag = false;
    if (null != obj2[pinned.widgetId]) {
      if (null != obj4[tmp.layoutId]) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ id, set } = tmp);
        if (pinned == null) {
          pinned = !tmp.pinned;
        }
        obj[id] = set("pinned", pinned);
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_WIDGETS_HIDDEN: function handleSetWidgetsHidden(arg0) {
    ({ widgetIds, hidden } = arg0);
    let flag = false;
    const iter = widgetIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = obj2[nextResult];
      obj = tmp4;
      let tmp5 = null != tmp4;
      let tmp2 = nextResult;
      if (tmp5) {
        tmp5 = obj.hidden !== hidden;
      }
      if (tmp5) {
        obj2 = {};
        let merged = Object.assign(obj2);
        obj2[tmp2] = obj.set("hidden", hidden);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  LAYOUT_UPDATE_WIDGET: function handleSetWidgetLayout(arg0) {
    ({ anchor, size, opacity, minSize, defaultSize } = arg0);
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      if (null != obj4[tmp.layoutId]) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ id, merge } = tmp);
        if (anchor == null) {
          anchor = tmp.anchor;
        }
        obj2 = { anchor, size: null, opacity: null, minSize: null };
        if (size == null) {
          size = tmp.size;
        }
        obj2.size = size;
        if (opacity == null) {
          opacity = tmp.opacity;
        }
        obj2.opacity = opacity;
        if (minSize == null) {
          minSize = tmp.minSize;
        }
        obj2.minSize = minSize;
        obj[id] = merge(obj2);
        obj2 = obj;
        if (null != defaultSize) {
          if (null != obj[tmp.type]) {
            const obj3 = { fixed: tmp8.defaultSettings.size.fixed };
            const merged1 = Object.assign(defaultSize);
            tmp8.defaultSettings.size = obj3;
          }
        }
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_TOP_WIDGET: function handleSetTopWidget(arg0) {
    let tmp13;
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        const id = tmp.id;
        items = [];
        closure_129_0 = items;
        const widgets = tmp3.widgets;
        const item = widgets.forEach((item) => {
          if (null != obj2[item]) {
            id.push(tmp);
          }
        });
        const sorted = items.sort((zIndex, zIndex2) => zIndex.zIndex - zIndex2.zIndex);
        const findIndexResult = items.findIndex((id) => id.id === id);
        let flag2 = false;
        if (findIndexResult !== items.length - 1) {
          items.push(items.splice(findIndexResult, 1)[0]);
          let num2 = 0;
          flag2 = true;
          if (0 < items.length) {
            do {
              obj = items[num2];
              obj2 = {};
              let merged = Object.assign(obj2);
              obj2[obj.id] = obj.set("zIndex", num2);
              let sum = num2 + 1;
              num2 = sum;
              flag2 = true;
              tmp13 = sum < items.length;
            } while (tmp13);
          }
        }
        tmp4 = flag2;
      }
      flag = tmp4;
    }
    return flag;
  },
  LAYOUT_DELETE_WIDGET: function handleDeleteWidget(widgetId) {
    widgetId = widgetId.widgetId;
    obj = {};
    let merged = Object.assign(obj);
    delete tmp[tmp2];
    const item = applyDefault.forEach(obj4, (widgets, arg1) => {
      if (arg1 !== migrated) {
        widgets = widgets.widgets;
        const index = widgets.indexOf(widgetId);
        if (index >= 0) {
          items = [];
          HermesBuiltin.arraySpread(widgets.widgets, 0);
          items.splice(index, 1);
          obj = {};
          const merged = Object.assign(obj4);
          obj[arg1] = widgets.set("widgets", items);
        }
      }
    });
  },
  LAYOUT_DELETE_ALL_WIDGETS: function handleDeleteAllWidget(arg0) {
    if (null == obj4[arg0.layoutId]) {
      return false;
    } else {
      const widgets = obj.widgets;
      const item = widgets.forEach((item) => {
        obj = {};
        const merged = Object.assign(obj);
        delete tmp2[tmp];
      });
      obj2 = {};
      let merged = Object.assign(obj4);
      obj2[obj.id] = obj.set("widgets", []);
    }
  },
  LAYOUT_CREATE_WIDGETS: function handleAddWidgets(widgetConfigs) {
    widgetConfigs = widgetConfigs.widgetConfigs;
    c0 = false;
    const item = widgetConfigs.forEach((item) => {
      obj = new WidgetRecord(item);
      obj2 = obj4[obj.layoutId];
      if (null != obj2) {
        c0 = true;
        const result = obj.set("zIndex", obj2.widgets.length);
        const obj3 = {};
        const merged = Object.assign(obj2);
        obj3[result.id] = result;
        obj2 = obj3;
        items = [];
        items[HermesBuiltin.arraySpread(obj2.widgets, 0)] = result.id;
        obj4 = {};
        const merged1 = Object.assign(obj4);
        obj4[obj2.id] = obj2.set("widgets", items);
      }
    });
    return c0;
  },
  LAYOUT_SET_WIDGET_META: function handleSetWidgetMeta(meta) {
    meta = meta.meta;
    let flag = false;
    if (null != obj2[meta.widgetId]) {
      if (null != obj4[tmp.layoutId]) {
        obj = {};
        const merged = Object.assign(obj2);
        ({ meta: meta2, id, merge } = tmp);
        if (meta2 == null) {
          meta2 = {};
        }
        obj2 = { meta: null };
        const obj3 = {};
        const merged1 = Object.assign(meta2);
        const merged2 = Object.assign(meta);
        obj2.meta = obj3;
        obj[id] = merge(obj2);
        obj2 = obj;
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SHOW_OVERLAY_EXTRAS_HINT: function handleShowOverlayExtrasHint(arg0) {
    let flag = false;
    if (null != obj2[arg0.widgetId]) {
      if (null != obj4[tmp.layoutId]) {
        obj = {};
        const merged = Object.assign(obj2);
        obj2 = { showExtrasHintTimestamp: null };
        const _Date = Date;
        ({ id, merge } = tmp);
        obj2.showExtrasHintTimestamp = Date.now();
        obj[id] = merge(obj2);
        obj2 = obj;
      }
      flag = tmp3;
    }
    return flag;
  },
  LAYOUT_SET_DEFAULT_CONFIG: function handleSetDefaultConfig(arg0) {
    ({ widgetType, defaultConfig } = arg0);
    obj = {};
    const merged = Object.assign(obj[widgetType]);
    const merged1 = Object.assign(defaultConfig);
    obj[widgetType] = obj;
  }
});
size = fn(2);
let result = size.fileFinishedImporting("stores/LayoutStore.tsx");

export default layoutStore;