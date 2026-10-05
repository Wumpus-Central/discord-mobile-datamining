// === Module 8596: resolvedDisplayField ===

// Module 8596 (resolvedDisplayField)
import resolvedValues from "resolvedValues" /* 8597 */;
import ApplicationWidgetFieldPresentationType from "ApplicationWidgetFieldPresentationType" /* 8598 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedDisplayField.tsx");

export const resolveTextComponentValues = function resolveTextComponentValues(subtitle_1, resolveFieldValue, numberFormat, arg3) {
  let media;
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
    const text = subtitle_1.fields.text;
    const items = [resolvedValues.ResolvedValueType.STRING, resolvedValues.ResolvedValueType.NUMBER];
    const iter = resolveFieldValue(text, items);
    let tmp = null;
    if (!flag2) {
      const label = subtitle_1.fields.label;
      const items1 = [resolvedValues.ResolvedValueType.STRING, resolvedValues.ResolvedValueType.NUMBER];
      tmp = resolveFieldValue(label, items1);
    }
    if (null == iter) {
      if (null == tmp) {
        return { status: "skeleton" };
      }
    }
    const icon = subtitle_1.fields.icon;
    const items2 = [resolvedValues.ResolvedValueType.MEDIA];
    const tmp3 = resolveFieldValue(icon, items2);
    let str2 = "";
    if (null != tmp) {
      str2 = "";
      if ("" !== tmp.value) {
        let formatResult;
        if (typeof tmp.value === "number") {
          formatResult = numberFormat.format(tmp.value);
        } else {
          formatResult = tmp.value;
        }
        const _HermesInternal = HermesInternal;
        str2 = "" + formatResult + ": ";
      }
    }
    let str5 = "\u2013";
    if (null != iter) {
      str5 = "\u2013";
      if ("" !== iter.value) {
        let formatResult1;
        if (typeof iter.value === "number") {
          formatResult1 = numberFormat.format(iter.value);
        } else {
          formatResult1 = iter.value;
        }
        str5 = formatResult1;
      }
    }
    const _HermesInternal2 = HermesInternal;
    const obj = { status: "value", text: "" + str2 + str5, icon: media };
    media = undefined;
    if (tmp3 != null) {
      media = tmp3.media;
    }
    if (media == null) {
      media = null;
    }
    return obj;
  }
};
export const resolveStatComponentValues = function resolveStatComponentValues(fields, resolveFieldValue, numberFormat, formatDurationNarrow, arg4) {
  let media;
  let obj4;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (null == fields) {
    let tmp4 = null;
    if (flag) {
      tmp4 = { value: { status: "skeleton" }, label: { status: "skeleton" } };
      const obj2 = { value: { status: "skeleton" }, label: { status: "skeleton" } };
    }
    return tmp4;
  } else {
    let obj;
    const value = fields.fields.value;
    const items = [resolvedValues.ResolvedValueType.STRING, resolvedValues.ResolvedValueType.NUMBER];
    const iter = resolveFieldValue(value, items);
    const label = fields.fields.label;
    const items1 = [resolvedValues.ResolvedValueType.STRING];
    const iter2 = resolveFieldValue(label, items1);
    const icon = fields.fields.icon;
    const items2 = [resolvedValues.ResolvedValueType.MEDIA];
    const tmp8 = resolveFieldValue(icon, items2);
    if (null == iter) {
      obj = { status: "skeleton" };
    } else {
      let formatResult;
      if (iter.type === resolvedValues.ResolvedValueType.STRING) {
        formatResult = iter.value;
      } else if (iter.presentationType === ApplicationWidgetFieldPresentationType.ApplicationWidgetFieldPresentationType.DURATION) {
        formatResult = formatDurationNarrow(iter.value);
      } else {
        formatResult = numberFormat.format(iter.value);
      }
      obj = { status: "value", text: formatResult, icon: media };
      media = undefined;
      if (tmp8 != null) {
        media = tmp8.media;
      }
      if (media == null) {
        media = null;
      }
    }
    const obj3 = { value: obj, label: obj4 };
    if (null == fields.fields.label) {
      obj4 = { status: "hidden" };
    } else if (null == iter2) {
      obj4 = { status: "skeleton" };
    } else {
      obj4 = { status: "value", text: iter2.value };
    }
    return obj3;
  }
};
export const resolveSingleStringOrSkeleton = function resolveSingleStringOrSkeleton(componentConfig, description, resolveFieldValue) {
  let obj;
  let tmp;
  if (componentConfig != null) {
    tmp = componentConfig.fields[description];
  }
  const items = [resolvedValues.ResolvedValueType.STRING];
  const iter = resolveFieldValue(tmp, items);
  if (null == iter) {
    obj = { status: "skeleton" };
  } else {
    obj = { status: "value", text: iter.value };
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
  let num = 0;
  if (null != iter) {
    let num2;
    if (null == iter2) {
      const value = iter.value;
      const _isNaN2 = isNaN;
      let num5 = 0;
      if (!isNaN(value)) {
        const _Math4 = Math;
        const _Math5 = Math;
        const _Math6 = Math;
        num5 = Math.min(Math.max(Math.round(100 * value), 0), 100);
      }
      num2 = num5;
    } else {
      num2 = 0;
      if (0 !== iter2.value) {
        const result = iter.value / iter2.value;
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
    num = num2;
  }
  return num;
};