// === Module 12695: conjurePlanWidget ===

// Module 12695 (conjurePlanWidget)
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12079 */;
import ApplicationAssetType from "ApplicationAssetType" /* 12696 */;
import ApplicationAssetVisibility from "ApplicationAssetVisibility" /* 12697 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
function withImageAssets(value_type) {
  let tmp = value_type;
  if ("custom_string" === value_type.value_type) {
    tmp = value_type;
    if ("image" === value_type.presentation_type) {
      const obj = {};
      const merged = Object.assign(value_type);
      obj.value_type = "application_asset";
      tmp = obj;
    }
  }
  return tmp;
}
function previewSurface(components) {
  const obj = {};
  const entries = Object.entries(components.components);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let obj2 = {};
    let _Object = Object;
    let entries1 = Object.entries(tmp5[1].fields);
    for (const item10031 of entries1) {
      let tmp11 = _slicedToArray(item10031, 2);
      let tmp12 = tmp11[1];
      let obj3 = {};
      let tmp13 = tmp12;
      let merged = Object.assign(withImageAssets(tmp12));
      if (null != tmp12.fallback) {
        let obj4 = { fallback: null };
        obj4.fallback = withImageAssets(tmp13.fallback);
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      let merged1 = Object.assign(obj5);
      obj2[tmp11[0]] = obj3;
      continue;
    }
    let obj6 = { fields: null };
    obj6.fields = obj2;
    obj[first] = obj6;
    continue;
  }
  return { layout: components.layout, components: obj };
}
function sampleValues(surfaces, sample_data, arg2) {
  const obj2 = {};
  sample_data = sample_data.sample_data;
  if (sample_data == null) {
    sample_data = {};
  }
  const entries = Object.entries(sample_data);
  const obj = (function dataBindings(surfaces) {
    const map = new Map();
    const values = Object.values(surfaces.surfaces);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let components;
      if (nextResult != null) {
        components = nextResult.components;
      }
      if (components == null) {
        components = {};
      }
      let values3 = Object.values(components);
      for (const item10028 of values3) {
        let _Object = Object;
        let values4 = Object.values(item10028.fields);
        for (const item10037 of values4) {
          let hasItem = "data" !== item10037.value_type;
          if (!hasItem) {
            hasItem = map.has(item10037.value);
          }
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
  })(surfaces);
  while (tmp2 !== undefined) {
    [first, tmp8] = tmp3;
    let tmp7 = first;
    if ("image" === obj.get(first)) {
      let _String = String;
      let tmp13 = arg2[String(undefined, tmp8)];
      if (null != tmp13) {
        let obj3 = { type: resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA, media: null };
        let size = { url: null, width: null, height: null };
        size.url = tmp14;
        size.width = v256;
        size.height = v256;
        obj3.media = size;
        obj2[tmp7] = obj3;
      }
    } else {
      if (typeof tmp8 === "number") {
        let obj4 = { type: resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER, value: null };
        obj4.value = tmp8;
        let obj5 = obj4;
      } else {
        obj5 = { type: resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.STRING, value: null };
        obj5.value = tmp8;
      }
      obj2[tmp7] = obj5;
    }
    continue;
  }
  return obj2;
}
function previewAsset(key) {
  const obj = { key, asset_id: key, asset_type: ApplicationAssetType.ApplicationAssetType.IMAGE, visibility: ApplicationAssetVisibility.ApplicationAssetVisibility.PUBLIC, metadata: null, updated_at: "" };
  const size = { width: v256, height: v256, content_type: "image/png", is_animated: false };
  obj.metadata = size;
  return obj;
}
let closure_6 = [];
let closure_7 = {};
let closure_8 = {};
let c9 = 256;
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanWidget.tsx");

export function useConjurePlanWidget(projectId, proposal) {
  _require = projectId;
  const widget_config = proposal.widget_config;
  let widget_preview = proposal.widget_preview;
  if (undefined === widget_preview) {
    widget_preview = closure_8;
  }
  let items = [stateFromStores1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores1.locale);
  let obj = require("initialize");
  const items1 = [ConjureProjectStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
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
  const images = widget_preview.images;
  closure_129_0 = projectId;
  closure_129_1 = images;
  closure_129_2 = undefined;
  let obj2 = require("initialize");
  [tmp4, closure_129_2] = widget_preview(stateFromStores.useState(closure_7), 2);
  const items2 = [projectId, images];
  const effect = stateFromStores.useEffect(() => {
    let obj = widget_config;
    if (widget_config == null) {
      obj = {};
    }
    const entries = Object.entries(obj);
    if (0 !== entries.length) {
      c0 = false;
      Promise.all(entries.map((item) => {
        [, tmp] = item;
        const attachmentUrl = _true(widget_config[8]).getAttachmentUrl(c0, tmp.id);
        return attachmentUrl.then((result) => {
          const items = [_true, result];
          return items;
        }, () => null);
      })).then((arr) => {
        if (!c0) {
          const _Object = Object;
          widget_preview(Object.fromEntries(arr.filter((item) => null != item)));
        }
      }, () => {

      });
      return () => {
        c0 = true;
      };
    }
  }, items2);
  ConjureProjectStore = tmp4;
  const items3 = [widget_config, widget_preview, tmp4, stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != widget_config) {
      tmp2 = (function buildConjurePlanWidgetRendererProps(widget_config, widget_preview, arg2, stateFromStores) {
        closure_0 = arg2;
        const obj = {};
        const entries = Object.entries(widget_config.surfaces);
        while (tmp2 !== undefined) {
          let tmp5 = widget_preview(tmp3, 2);
          [tmp6, tmp7] = tmp5;
          if (null != tmp7) {
            obj[tmp6] = closure_1_11(tmp8);
          }
          continue;
        }
        const applicationWidgetSurfaceConfigsSchema = projectId(widget_config[4]).applicationWidgetSurfaceConfigsSchema;
        const safeParseResult = applicationWidgetSurfaceConfigsSchema.safeParse(obj);
        if (safeParseResult.success) {
          const data = safeParseResult.data;
          let tmp15 = null;
          if (null != data[projectId(undefined, widget_config[7]).ApplicationWidgetConfigSurface.WIDGET_TOP]) {
            tmp15 = null;
            if (null != data[projectId(undefined, widget_config[7]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
              const obj2 = { locale: stateFromStores, surfaceConfigs: data, isLoading: false, hasIdentity: true, resolutionContext: null };
              const obj3 = { data: closure_1_12(widget_config, widget_preview, arg2), applicationAssets: null, getApplicationAssetUrl: null, localizedStrings: null };
              const _Object = Object;
              const keys = Object.keys(arg2);
              obj3.applicationAssets = keys.map(closure_1_13);
              obj3.getApplicationAssetUrl = function getApplicationAssetUrl(arg0) {
                let str = closure_0[arg0.key];
                if (str == null) {
                  str = "";
                }
                return str;
              };
              obj3.localizedStrings = localizedStrings;
              obj2.resolutionContext = obj3;
              tmp15 = obj2;
            }
          }
          return tmp15;
        } else {
          return null;
        }
        tmp2 = entries[Symbol.iterator]();
      })(widget_config, widget_preview, closure_5, stateFromStores);
    }
    return tmp2;
  }, items3);
  const items4 = [stateFromStores1, memo];
  return stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      tmp2 = null;
      if (null != memo) {
        const obj = { applicationId: tmp, rendererProps: tmp3 };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items4);
}