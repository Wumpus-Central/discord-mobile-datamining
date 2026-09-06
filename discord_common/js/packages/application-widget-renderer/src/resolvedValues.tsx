// discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx
import ApplicationWidgetFieldPresentationType from "../../../shared/shared-constants/ApplicationWidgetFieldPresentationType.tsx";
import ApplicationWidgetFieldValueType from "../../../shared/shared-constants/ApplicationWidgetFieldValueType.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function resolveFieldValue(image, items, applicationAssets) {
  applicationAssets = applicationAssets.applicationAssets;
  if (null == image) {
    return null;
  } else if (image.value_type === ApplicationWidgetFieldValueType.ApplicationWidgetFieldValueType.DATA) {
    let iter = tmp[image.value];
    const presentation_type = image.presentation_type;
    if (null != iter) {
      let hasItem;
      if (closure_3[presentation_type] != null) {
        hasItem = obj4.includes(iter.type);
      }
      if (hasItem) {
        if (items.includes(iter.type)) {
          if ("playtime_hours" === image.value) {
            let obj = { type: iter.type, value: null, presentationType: null };
            const _Math = Math;
            iter = iter.value;
            obj.value = Math.floor(60 * iter * 60 * 1000);
            obj.presentationType = presentation_type;
          }
          obj = {};
          const merged = Object.assign(iter);
          obj.presentationType = presentation_type;
        }
      }
    }
    let tmp10 = null;
    if ("fallback" in image) {
      tmp10 = null;
      if (null != image.fallback) {
        tmp10 = resolveFieldValue(image.fallback, items, applicationAssets);
      }
    }
    return tmp10;
  } else if (image.value_type === tmp19(8931).ApplicationWidgetFieldValueType.CUSTOM_STRING) {
    let tmp6 = null;
    if (image.presentation_type === tmp19(8930).ApplicationWidgetFieldPresentationType.TEXT) {
      tmp6 = null;
      if (items.includes(obj.STRING)) {
        const obj1 = {
          type: tmp7.STRING,
          value: image.value,
          presentationType: tmp19(8930).ApplicationWidgetFieldPresentationType.TEXT,
        };
        tmp6 = obj1;
      }
      tmp7 = obj;
    }
    return tmp6;
  } else if (image.value_type === tmp19(8931).ApplicationWidgetFieldValueType.APPLICATION_ASSET) {
    if (items.includes(obj.MEDIA)) {
      const found = applicationAssets.find((key) => key.key === image.value);
      let tmp5 = null;
      if (null != found) {
        obj = { type: tmp3.MEDIA, media: null, presentationType: null };
        const size = { url: tmp2(found), width: found.metadata.width, height: found.metadata.height };
        obj.media = size;
        obj.presentationType = tmp19(8930).ApplicationWidgetFieldPresentationType.IMAGE;
        tmp5 = obj;
      }
      return tmp5;
    } else {
      return null;
    }
    tmp3 = obj;
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
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx",
);

export { ResolvedValueType };
export function bindResolveFieldValue(resolutionContext) {
  closure_0 = resolutionContext;
  return (image, items) => resolveFieldValue(image, items, closure_0);
}
