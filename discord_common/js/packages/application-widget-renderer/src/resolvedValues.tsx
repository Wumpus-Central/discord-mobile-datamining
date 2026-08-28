// === Module 12604: resolveFieldValue ===

// Module 12604 (resolveFieldValue)
import set from "set" /* 2 */;
import ApplicationWidgetFieldPresentationType from "ApplicationWidgetFieldPresentationType" /* 12605 */;

function resolveFieldValue(image, items, applicationAssets) {
  const _require = image;
  applicationAssets = applicationAssets.applicationAssets;
  if (null == image) {
    return null;
  } else if (image.value_type === _require(12606).ApplicationWidgetFieldValueType.DATA) {
    let iter = tmp[image.value];
    const presentation_type = image.presentation_type;
    if (null != iter) {
      let hasItem;
      if (table[presentation_type] != null) {
        hasItem = obj4.includes(iter.type);
      }
      if (hasItem) {
        if (items.includes(iter.type)) {
          if ("playtime_hours" === image.value) {
            obj = { type: null, value: null, presentationType: null };
            obj[0] = iter.type;
            const _Math = Math;
            iter = iter.value;
            obj[1] = Math.floor(60 * iter * 60 * 1000);
            obj[2] = presentation_type;
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
  } else if (image.value_type === tmp19(12606).ApplicationWidgetFieldValueType.CUSTOM_STRING) {
    let tmp6 = null;
    if (image.presentation_type === tmp19(12605).ApplicationWidgetFieldPresentationType.TEXT) {
      tmp6 = null;
      if (items.includes(obj.STRING)) {
        obj1 = { type: null, value: null, presentationType: null };
        obj1[0] = tmp7.STRING;
        obj1[1] = image.value;
        obj1[2] = tmp19(12605).ApplicationWidgetFieldPresentationType.TEXT;
        tmp6 = obj1;
      }
      tmp7 = obj;
    }
    return tmp6;
  } else if (image.value_type === tmp19(12606).ApplicationWidgetFieldValueType.APPLICATION_ASSET) {
    if (items.includes(obj.MEDIA)) {
      const found = applicationAssets.find((key) => key.key === image.value);
      let tmp5 = null;
      if (null != found) {
        obj = { type: null, media: null, presentationType: null };
        obj[0] = tmp3.MEDIA;
        const obj2 = { url: null, width: null, height: null };
        obj2[0] = tmp2(found);
        obj2[1] = found.metadata.width;
        obj2[2] = found.metadata.height;
        obj[1] = obj2;
        obj[2] = tmp19(12605).ApplicationWidgetFieldPresentationType.IMAGE;
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
let obj = { STRING: "string", NUMBER: "number", MEDIA: "media" };
const items = [obj.STRING];
const items1 = [obj.NUMBER];
const items2 = [obj.MEDIA];
const items3 = [obj.NUMBER];
let closure_3 = { [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.TEXT]: items, [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.NUMBER]: items1, [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.IMAGE]: items2, [ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.DURATION]: items3 };
const result = set.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValues.tsx");

export const ResolvedValueType = obj;
export function bindResolveFieldValue(resolutionContext) {
  closure_0 = resolutionContext;
  return (arg0, arg1) => closure_1_4(arg0, arg1, closure_0);
}