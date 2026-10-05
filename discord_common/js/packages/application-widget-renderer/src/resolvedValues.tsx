// discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx
import ApplicationWidgetFieldPresentationType from "../../../shared/shared-constants/ApplicationWidgetFieldPresentationType.tsx";
import ApplicationWidgetFieldValueType from "../../../shared/shared-constants/ApplicationWidgetFieldValueType.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

function resolveFieldValue(image, items, applicationAssets) {
  let obj;
  let closure_0 = image;
  applicationAssets = applicationAssets.applicationAssets;
  if (null == image) {
    return null;
  } else if (image.value_type === ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType.DATA) {
    let tmp10;
    const presentation_type = image.presentation_type;
    if (null != tmp[image.value]) {
      let hasItem;
      if (closure_3[presentation_type] != null) {
        hasItem = obj4.includes(iter.type);
      }
      if (hasItem) {
        if (items.includes(tmp[image.value].type)) {
          if ("playtime_hours" === image.value) {
            if (tmp[image.value].type === obj.NUMBER) {
              let obj3;
              if (
                presentation_type ===
                ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.DURATION
              ) {
                const _Math = Math;
                obj3 = {
                  type: tmp[image.value].type,
                  value: Math.floor(60 * tmp[image.value].value * 60 * 1000),
                  presentationType: presentation_type,
                };
                const obj2 = {
                  type: tmp[image.value].type,
                  value: Math.floor(60 * tmp[image.value].value * 60 * 1000),
                  presentationType: presentation_type,
                };
              }
              tmp10 = obj3;
            }
          }
          obj3 = { presentationType: presentation_type };
          const merged = Object.assign(iter);
        }
        return tmp10;
      }
    }
    tmp10 = null;
    if ("fallback" in image) {
      tmp10 = null;
      if (null != image.fallback) {
        tmp10 = resolveFieldValue(image.fallback, items, applicationAssets);
      }
    }
  } else if (image.value_type === ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType.CUSTOM_STRING) {
    let tmp6 = null;
    if (
      image.presentation_type === ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.TEXT
    ) {
      tmp6 = null;
      const tmp7 = obj;
      if (items.includes(obj.STRING)) {
        tmp6 = {
          type: tmp7.STRING,
          value: image.value,
          presentationType: ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.TEXT,
        };
        const obj5 = {
          type: tmp7.STRING,
          value: image.value,
          presentationType: ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.TEXT,
        };
      }
    }
    return tmp6;
  } else if (image.value_type === ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType.APPLICATION_ASSET) {
    const tmp3 = obj;
    if (items.includes(obj.MEDIA)) {
      const found = applicationAssets.find((key) => key.key === value.value);
      let tmp5 = null;
      if (null != found) {
        obj = {
          type: tmp3.MEDIA,
          media: size,
          presentationType: ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.IMAGE,
        };
        size = { url: tmp2(found), width: found.metadata.width, height: found.metadata.height };
        tmp5 = obj;
      }
      return tmp5;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
const ResolvedValueType = { STRING: "string", NUMBER: "number", MEDIA: "media" };
const items = [ResolvedValueType.STRING];
const items1 = [ResolvedValueType.NUMBER];
const items2 = [ResolvedValueType.MEDIA];
const items3 = [ResolvedValueType.NUMBER];
let closure_3 = {
  [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.TEXT]: items,
  [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.NUMBER]: items1,
  [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.IMAGE]: items2,
  [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.DURATION]: items3,
};
let size = size_mod;
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx",
);

export { ResolvedValueType };
export function bindResolveFieldValue(resolutionContext) {
  let closure_0 = resolutionContext;
  return (image, items) => resolveFieldValue(image, items, resolutionContext);
}
