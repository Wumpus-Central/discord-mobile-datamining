// discord_app/modules/conjure/plan/conjurePlanWidget.tsx
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import ApplicationWidgetConfigSurface from "../../../../discord_common/js/shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import ApplicationAssetType from "../../../../discord_common/js/shared/shared-constants/ApplicationAssetType.tsx";
import ApplicationAssetVisibility from "../../../../discord_common/js/shared/shared-constants/ApplicationAssetVisibility.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

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
function sampleValues(widget_config, sample_data, tmp12Result) {
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
  })(widget_config);
  while (tmp2 !== undefined) {
    [first, tmp8] = tmp3;
    let tmp7 = first;
    if ("image" === obj.get(first)) {
      let _String = String;
      let tmp13 = tmp12Result[String(undefined, tmp8)];
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
  const obj = {
    key,
    asset_id: key,
    asset_type: ApplicationAssetType.ApplicationAssetType.IMAGE,
    visibility: ApplicationAssetVisibility.ApplicationAssetVisibility.PUBLIC,
    metadata: null,
    updated_at: "",
  };
  const size = { width: v256, height: v256, content_type: "image/png", is_animated: false };
  obj.metadata = size;
  return obj;
}
function buildConjurePlanWidgetRendererProps(widget_config, widget_preview, tmp12Result, stateFromStores) {
  const obj = {};
  const entries = Object.entries(widget_config.surfaces);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (null != tmp7) {
      obj[tmp6] = previewSurface(tmp8);
    }
    continue;
  }
  const applicationWidgetSurfaceConfigsSchema =
    resolvedValuesFromUserApplicationIdentityProfile.applicationWidgetSurfaceConfigsSchema;
  const safeParseResult = applicationWidgetSurfaceConfigsSchema.safeParse(obj);
  if (safeParseResult.success) {
    const data = safeParseResult.data;
    let tmp15 = null;
    if (null != data[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP]) {
      tmp15 = null;
      if (null != data[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_BOTTOM]) {
        const obj2 = {
          locale: stateFromStores,
          surfaceConfigs: data,
          isLoading: false,
          hasIdentity: true,
          resolutionContext: null,
        };
        const obj3 = {
          data: sampleValues(widget_config, widget_preview, tmp12Result),
          applicationAssets: null,
          getApplicationAssetUrl: null,
          localizedStrings: null,
        };
        const _Object = Object;
        const keys = Object.keys(tmp12Result);
        obj3.applicationAssets = keys.map(previewAsset);
        obj3.getApplicationAssetUrl = function getApplicationAssetUrl(arg0) {
          let str = tmp12Result[arg0.key];
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
}
const getAttachmentUrl = fn(13213).getAttachmentUrl;
const localizedStrings = [];
let closure_8 = {};
let c9 = 256;
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureWidgetImageSrcs(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(4);
      let obj = require("c");
      _slicedToArray = _slicedToArray(noop.useState(closure_8), 2)[1];
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp4 = cResult[2];
          let tmp5 = cResult[3];
        }
        const effect = noop.useEffect(tmp4, tmp5);
        return tmp3;
      }
      const fn = function o() {
        let obj = closure_1;
        if (closure_1 == null) {
          obj = {};
        }
        const entries = Object.entries(obj);
        if (0 !== entries.length) {
          c0 = false;
          Promise.all(
            entries.map((item) => {
              const tmp = closure_2(item, 2);
              closure_0 = tmp[0];
              return getAttachmentUrl(c0, tmp[1].id).then(
                (result) => {
                  const items = [closure_0, result];
                  return items;
                },
                () => null,
              );
            }),
          ).then(
            (arr) => {
              if (!c0) {
                const _Object = Object;
                closure_2(Object.fromEntries(arr.filter((item) => null != item)));
              }
            },
            () => {},
          );
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
      const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
    }
  : function useConjureWidgetImageSrcs(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      const tmp = _slicedToArray(noop.useState(closure_8), 2);
      _slicedToArray = tmp[1];
      let items = [arg0, arg1];
      const effect = noop.useEffect(() => {
        let obj = closure_1;
        if (closure_1 == null) {
          obj = {};
        }
        const entries = Object.entries(obj);
        if (0 !== entries.length) {
          c0 = false;
          Promise.all(
            entries.map((item) => {
              [, tmp] = item;
              return getAttachmentUrl(c0, tmp.id).then(
                (result) => {
                  const items = [closure_1_0, result];
                  return items;
                },
                () => null,
              );
            }),
          ).then(
            (arr) => {
              if (!c0) {
                const _Object = Object;
                closure_2(Object.fromEntries(arr.filter((item) => null != item)));
              }
            },
            () => {},
          );
          return () => {
            c0 = true;
          };
        }
      }, items);
      return tmp[0];
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanWidget.tsx");

export const useConjurePlanWidget = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePlanWidget(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(13);
      ({ widget_config, widget_preview } = arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function o() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ConjureProjectStore];
        cResult[2] = items1;
        let tmp8 = items1;
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
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
      let images;
      if (widget_preview != null) {
        images = widget_preview.images;
      }
      const tmp12Result = closure_15(arg0, images);
      if (cResult[5] === widget_config) {
        if (cResult[6] === tmp12Result) {
          if (cResult[7] === stateFromStores) {
            if (cResult[8] === widget_preview) {
              let tmp15 = cResult[9];
            }
            if (cResult[10] === stateFromStores1) {
              if (cResult[11] === tmp15) {
                let tmp22 = cResult[12];
              }
              return tmp22;
            }
            let tmp23 = null;
            if (null != stateFromStores1) {
              tmp23 = null;
              if (null != tmp15) {
                const obj2 = { applicationId: stateFromStores1, rendererProps: tmp15 };
                tmp23 = obj2;
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
      const tmpResult2 = require("initialize");
    }
  : function useConjurePlanWidget(arg0, widget_config) {
      _require = arg0;
      widget_config = widget_config.widget_config;
      const widget_preview = widget_config.widget_preview;
      const items = [stateFromStores1];
      const stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores1.locale);
      let obj = require("initialize");
      const items1 = [memo];
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
      let images;
      if (widget_preview != null) {
        images = widget_preview.images;
      }
      const tmp3Result = closure_15(arg0, images);
      closure_5 = tmp3Result;
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
            const obj = { applicationId: tmp, rendererProps: tmp3 };
            tmp2 = obj;
          }
        }
        return tmp2;
      }, items3);
    };
