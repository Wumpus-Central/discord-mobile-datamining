// === Module 16679: conjurePlanWidget ===

// Module 16679 (conjurePlanWidget)
import _mod8629 from "module_8629" /* 8629 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 8712 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import ApplicationAssetType from "ApplicationAssetType" /* 16680 */;
import ApplicationAssetVisibility from "ApplicationAssetVisibility" /* 16681 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

function withImageAssets(value_type) {
  let tmp = value_type;
  if ("custom_string" === value_type.value_type) {
    tmp = value_type;
    if ("image" === value_type.presentation_type) {
      const obj = { value_type: "application_asset" };
      const merged = Object.assign(value_type);
      tmp = obj;
    }
  }
  return tmp;
}
function previewSurface(components) {
  let first1;
  let tmp13;
  const obj = {};
  const entries = Object.entries(components.components);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let obj2 = {};
    let _Object = Object;
    let entries1 = Object.entries(tmp5[1].fields);
    for (const item10031 of entries1) {
      let obj5;
      [first1, tmp13] = item10031;
      let obj3 = {};
      let tmp14 = tmp13;
      let merged = Object.assign(withImageAssets(tmp13));
      if (null != tmp13.fallback) {
        let obj4 = { fallback: withImageAssets(tmp14.fallback) };
        obj5 = obj4;
      } else {
        obj5 = {};
      }
      let merged1 = Object.assign(obj5);
      obj2[first1] = obj3;
      continue;
    }
    let obj6 = { fields: obj2 };
    obj[first] = obj6;
    continue;
  }
  return { layout: components.layout, components: obj };
}
function sampleValues(widget_config, sample_data, tmp12Result) {
  let first;
  let tmp8;
  function dataBindings(surfaces) {
    map = new Map();
    const values4 = Object.values(surfaces.surfaces);
    const iter = values4[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let components;
      let _Object = Object;
      if (nextResult != null) {
        components = nextResult.components;
      }
      if (components == null) {
        components = {};
      }
      let values5 = values(components);
      for (const item10028 of values5) {
        let _Object2 = Object;
        let values6 = Object.values(item10028.fields);
        for (const item10037 of values6) {
          let hasItem = "data" !== item10037.value_type || map.has(item10037.value);
          if (!hasItem) {
            let result = map.set(item10037.value, item10037.presentation_type);
          }
          continue;
        }
        continue;
      }
      continue;
    }
    return map;
  }
  const obj2 = {};
  sample_data = sample_data.sample_data;
  let _Object = Object;
  const obj = dataBindings(widget_config);
  if (sample_data == null) {
    sample_data = {};
  }
  const entries1 = entries(sample_data);
  const tmp2 = entries1[Symbol.iterator]();
  while (tmp2 !== undefined) {
    [first, tmp8] = tmp3;
    let tmp7 = first;
    if ("image" === obj.get(first)) {
      let _String = String;
      let tmp13 = tmp12Result[String(undefined, tmp8)];
      if (null != tmp13) {
        let obj3 = { type: _mod8629.ResolvedValueType.MEDIA, media: size };
        size = { url: tmp14, width: v256, height: v256 };
        obj2[tmp7] = obj3;
      }
    } else {
      let obj5;
      if (typeof tmp8 === "number") {
        let obj4 = { type: _mod8629.ResolvedValueType.NUMBER, value: tmp8 };
        obj5 = obj4;
      } else {
        obj5 = { type: _mod8629.ResolvedValueType.STRING, value: tmp8 };
      }
      obj2[tmp7] = obj5;
    }
    continue;
  }
  return obj2;
}
function previewAsset(key) {
  const obj = { key, asset_id: key, asset_type: ApplicationAssetType.ApplicationAssetType.IMAGE, visibility: ApplicationAssetVisibility.ApplicationAssetVisibility.PUBLIC, metadata: size, updated_at: "" };
  size = { width: v256, height: v256, content_type: "image/png", is_animated: false };
  return obj;
}
function buildConjurePlanWidgetRendererProps(widget_config, widget_preview, tmp12Result, stateFromStores) {
  let keys;
  let obj3;
  let tmp6;
  let tmp7;
  let closure_0 = tmp12Result;
  const obj = {};
  const entries = Object.entries(widget_config.surfaces);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (null != tmp7) {
      obj[tmp6] = previewSurface(tmp8);
    }
    continue;
  }
  const applicationWidgetSurfaceConfigsSchema = _mod8629.applicationWidgetSurfaceConfigsSchema;
  const safeParseResult = applicationWidgetSurfaceConfigsSchema.safeParse(obj);
  if (safeParseResult.success) {
    const data = safeParseResult.data;
    let tmp15 = null;
    if (null != data[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP]) {
      tmp15 = null;
      if (null != data[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
        const obj2 = { locale: stateFromStores, surfaceConfigs: data, isLoading: false, hasIdentity: true, resolutionContext: obj3 };
        const _Object = Object;
        obj3 = {
          data: sampleValues(widget_config, widget_preview, tmp12Result),
          applicationAssets: keys.map(previewAsset),
          getApplicationAssetUrl(arg0) {
                  let str = closure_0[arg0.key];
                  if (str == null) {
                    str = "";
                  }
                  return str;
                },
          localizedStrings
        };
        keys = Object.keys(tmp12Result);
        tmp15 = obj2;
      }
    }
    return tmp15;
  } else {
    return null;
  }
}
const getAttachmentUrl = ConjureConnectionStore.getAttachmentUrl;
const localizedStrings = [];
let closure_8 = {};
let c9 = 256;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  [, _slicedToArray] = react.useState(closure_8);
  if (cResult[0] === arg1) {
    let tmp4;
    let tmp5;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    const effect = react.useEffect(tmp4, tmp5);
    return tmp3;
  }
  const fn = function u() {
    let obj = closure_1;
    let _Object = Object;
    if (closure_1 == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    if (0 !== entries1.length) {
      let c0 = false;
      const allPromises = Promise.all(entries1.map((item) => {
        const tmp = closure_2(item, 2);
        closure_0 = tmp[0];
        const promise = getAttachmentUrl(c0, tmp[1].id);
        return promise.then((result) => {
          const items = [closure_0, result];
          return items;
        }, () => null);
      }));
      allPromises.then((arr) => {
        if (!c0) {
          const _Object = Object;
          closure_2(Object.fromEntries(arr.filter((item) => null != item)));
        }
      }, () => {

      });
      return () => {
        c0 = true;
      };
    }
  };
  let items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_2;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [first, _slicedToArray] = react.useState(closure_8);
  let items = [arg0, arg1];
  const effect = react.useEffect(() => {
    let obj = closure_1;
    let _Object = Object;
    if (closure_1 == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    if (0 !== entries1.length) {
      let c0 = false;
      const allPromises = Promise.all(entries1.map((item) => {
        let tmp;
        [, tmp] = item;
        const promise = getAttachmentUrl(c0, tmp.id);
        return promise.then((result) => {
          const items = [closure_1_0, result];
          return items;
        }, () => null);
      }));
      allPromises.then((arr) => {
        if (!c0) {
          const _Object = Object;
          closure_2(Object.fromEntries(arr.filter((item) => null != item)));
        }
      }, () => {

      });
      return () => {
        c0 = true;
      };
    }
  }, items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let locale;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  let widget_config;
  let widget_preview;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(13);
  ({ widget_config, widget_preview } = arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function u() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function b() {
      const project = ConjureProjectStore.getProject(closure_0);
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      if (prop == null) {
        let application_id;
        if (project != null) {
          application_id = project.application_id;
        }
        prop = application_id;
      }
      if (prop == null) {
        prop = null;
      }
      return prop;
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
  let images;
  if (widget_preview != null) {
    images = widget_preview.images;
  }
  const tmp12Result = closure_15(arg0, images);
  if (cResult[5] === widget_config) {
    if (cResult[6] === tmp12Result) {
      if (cResult[7] === stateFromStores) {
        let tmp15;
        if (cResult[8] === widget_preview) {
          tmp15 = cResult[9];
        }
        if (cResult[10] === stateFromStores1) {
          let tmp22;
          if (cResult[11] === tmp15) {
            tmp22 = cResult[12];
          }
          return tmp22;
        }
        let tmp23 = null;
        if (null != stateFromStores1) {
          tmp23 = null;
          if (null != tmp15) {
            tmp23 = { applicationId: stateFromStores1, rendererProps: tmp15 };
            const obj2 = { applicationId: stateFromStores1, rendererProps: tmp15 };
          }
        }
        cResult[10] = stateFromStores1;
        cResult[11] = tmp15;
        cResult[12] = tmp23;
        tmp22 = tmp23;
      }
    }
  }
  let tmp16 = null;
  if (null != widget_config) {
    tmp16 = null;
    if (null != widget_preview) {
      tmp16 = buildConjurePlanWidgetRendererProps(widget_config, widget_preview, tmp12Result, stateFromStores);
    }
  }
  cResult[5] = widget_config;
  cResult[6] = tmp12Result;
  cResult[7] = stateFromStores;
  cResult[8] = widget_preview;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((arg0, widget_config) => {
  let closure_0;
  let memo;
  let stateFromStores1;
  _require = arg0;
  widget_config = widget_config.widget_config;
  const widget_preview = widget_config.widget_preview;
  let obj = require("get initialized");
  const items = [stateFromStores1];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores1.locale);
  const items1 = [memo];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      let application_id;
      if (project != null) {
        application_id = project.application_id;
      }
      prop = application_id;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  let images;
  if (widget_preview != null) {
    images = widget_preview.images;
  }
  const tmp3Result = closure_15(arg0, images);
  let closure_5 = tmp3Result;
  const items2 = [widget_config, widget_preview, tmp3Result, stateFromStores];
  memo = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != widget_config) {
      tmp2 = null;
      if (null != widget_preview) {
        tmp2 = buildConjurePlanWidgetRendererProps(widget_config, widget_preview, closure_5, stateFromStores);
      }
    }
    return tmp2;
  }, items2);
  const items3 = [stateFromStores1, memo];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      tmp2 = null;
      if (null != memo) {
        tmp2 = { applicationId: tmp, rendererProps: tmp3 };
        const obj = { applicationId: tmp, rendererProps: tmp3 };
      }
    }
    return tmp2;
  }, items3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanWidget.tsx");

export const useConjurePlanWidget = tmp2;