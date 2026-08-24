// discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx
import set from "../../../../../_runtime/00002_set.js";
import resolveFieldValue2 from "resolvedValues.tsx";

let result = set.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx");

export const resolveTextComponentValues = function resolveTextComponentValues(subtitle_1, resolveFieldValue, numberFormat, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (null == subtitle_1) {
    return flag ? { status: "skeleton" } : { status: "hidden" };
  } else {
    const items = [resolveFieldValue2.ResolvedValueType.STRING, resolveFieldValue2.ResolvedValueType.NUMBER];
    let iter = resolveFieldValue(subtitle_1.fields.text, items);
    let str = null;
    if (!flag2) {
      const items1 = [tmp9(12245).ResolvedValueType.STRING, tmp9(12245).ResolvedValueType.NUMBER];
      str = resolveFieldValue(subtitle_1.fields.label, items1);
    }
    if (null == iter) {
      if (null == str) {
        return { status: "skeleton" };
      }
    }
    const items2 = [resolveFieldValue2.ResolvedValueType.MEDIA];
    const tmp2 = resolveFieldValue(subtitle_1.fields.icon, items2);
    let str3 = "";
    if (null != str) {
      str3 = "";
      if ("" !== str.value) {
        if (typeof str.value === "number") {
          let formatResult = numberFormat.format(str.value);
        } else {
          formatResult = str.value;
        }
        const _HermesInternal = HermesInternal;
        str = ": ";
        const combined = "" + formatResult + ": ";
      }
    }
    let str5 = "\u2013";
    if (null != iter) {
      str5 = "\u2013";
      if ("" !== iter.value) {
        if (typeof iter.value === "number") {
          iter = iter.value;
          let formatResult1 = numberFormat.format(iter);
        } else {
          formatResult1 = iter.value;
        }
      }
    }
    const obj = { status: "value", text: null, icon: null };
    const _HermesInternal2 = HermesInternal;
    obj[1] = "" + str3 + str5;
    let media;
    if (tmp2 != null) {
      media = tmp2.media;
    }
    if (media == null) {
      media = null;
    }
    obj[2] = media;
    return obj;
  }
};
export const resolveStatComponentValues = function resolveStatComponentValues(fields, closure_1, closure_2, formatDurationNarrow, arg4) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (null == fields) {
    let tmp4 = null;
    if (flag) {
      let obj = { value: null, label: null };
      obj[0] = { status: "skeleton" };
      obj[1] = { status: "skeleton" };
      tmp4 = obj;
    }
    return tmp4;
  } else {
    const items = [resolveFieldValue2.ResolvedValueType.STRING, resolveFieldValue2.ResolvedValueType.NUMBER];
    const iter = closure_1(fields.fields.value, items);
    const items1 = [resolveFieldValue2.ResolvedValueType.STRING];
    const iter2 = closure_1(fields.fields.label, items1);
    const items2 = [resolveFieldValue2.ResolvedValueType.MEDIA];
    const tmp8 = closure_1(fields.fields.icon, items2);
    if (null == iter) {
      obj = { status: "skeleton" };
    } else {
      if (iter.type === tmp6(12245).ResolvedValueType.STRING) {
        let formatResult = iter.value;
      } else if (iter.presentationType === tmp6(12246).ApplicationWidgetFieldPresentationType.DURATION) {
        formatResult = formatDurationNarrow(iter.value);
      } else {
        formatResult = closure_2.format(iter.value);
      }
      obj = { status: "value", text: null, icon: null };
      obj[1] = formatResult;
      let media;
      if (tmp8 != null) {
        media = tmp8.media;
      }
      if (media == null) {
        media = null;
      }
      obj[2] = media;
    }
    obj = { value: null, label: null };
    obj[0] = obj;
    if (null == fields.fields.label) {
      obj1 = { status: "hidden" };
    } else if (null == iter2) {
      obj1 = { status: "skeleton" };
    } else {
      obj1 = { status: "value", text: null };
      obj1[1] = iter2.value;
    }
    obj[1] = obj1;
    return obj;
  }
};
export const resolveSingleStringOrSkeleton = function resolveSingleStringOrSkeleton(componentConfig, description, resolveFieldValue) {
  let tmp;
  if (componentConfig != null) {
    tmp = componentConfig.fields[description];
  }
  const items = [resolveFieldValue2.ResolvedValueType.STRING];
  const iter = resolveFieldValue(tmp, items);
  if (null == iter) {
    let obj = { status: "skeleton" };
  } else {
    obj = { status: "value", text: null };
    obj[1] = iter.value;
  }
  return obj;
};
export const decimalToClampedPercentage = function decimalToClampedPercentage(value) {
  let num = 0;
  if (!isNaN(value)) {
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    num = Math.min(Math.max(Math.round(100 * value), 0), 100);
  }
  return num;
};
export const resolveProgressPercentage = function resolveProgressPercentage(iter, iter2) {
  let num = iter;
  if (null == iter) {
    return 0;
  } else if (null == iter2) {
    const value = num.value;
    const _isNaN2 = isNaN;
    num = 0;
    if (!isNaN(value)) {
      const _Math4 = Math;
      const _Math5 = Math;
      const _Math6 = Math;
      num = Math.min(Math.max(Math.round(100 * value), 0), 100);
    }
    let num2 = num;
  } else {
    num2 = 0;
    if (0 !== iter2.value) {
      const result = num.value / iter2.value;
      const _isNaN = isNaN;
      let num3 = 0;
      if (!isNaN(result)) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        num3 = Math.min(Math.max(Math.round(100 * result), 0), 100);
      }
      num2 = num3;
    }
  }
};