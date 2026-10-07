// === Module 16658: ConjureHistoryFormat ===

// Module 16658 (ConjureHistoryFormat)
import util from "util" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import getTimestampString from "getTimestampString" /* 5132 */;
import size from "module_2" /* 2 */;

function startOfDayMs(arg0) {
  const date = new Date(arg0);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}
function formatHistoryDay(arg0, nowMs) {
  const date = new Date(arg0);
  date.setHours(0, 0, 0, 0);
  const time = date.getTime();
  const date1 = new Date(nowMs);
  date1.setHours(0, 0, 0, 0);
  const time1 = date1.getTime();
  if (time === time1) {
    const intl2 = util.intl;
    return intl2.string(_modDef3753.CADyoV);
  } else {
    const _Date = Date;
    const date2 = new Date(time1);
    date2.setDate(date2.getDate() - 1);
    if (time === date2.getTime()) {
      const intl = util.intl;
      return intl.string(_modDef3753.mghe4b);
    } else {
      const _Date2 = Date;
      const date3 = new Date(arg0);
      const _Date3 = Date;
      const fullYear = date3.getFullYear();
      const date4 = new Date(nowMs);
      const _Date4 = Date;
      const fullYear1 = date4.getFullYear();
      const date5 = new Date(arg0);
      const date6 = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
      return date5.toLocaleDateString(undefined, date6);
    }
  }
}
function backupTitle(origin) {
  origin = origin.origin;
  if ("auto_deploy" === origin) {
    if ("stable" === origin.deployEnvironment) {
      const intl6 = util.intl;
      let stringResult = intl6.string(_modDef3753["4TpI2y"]);
    } else if ("preview" === origin.deployEnvironment) {
      const intl5 = util.intl;
      stringResult = intl5.string(_modDef3753.NdyxPu);
    } else {
      const intl4 = util.intl;
      stringResult = intl4.string(_modDef3753["4JCH6A"]);
    }
    return stringResult;
  } else if ("undo" === origin) {
    const intl3 = util.intl;
    return intl3.string(_modDef3753.VjJT5R);
  } else {
    const trimmed = origin.label.trim();
    if ("" !== trimmed) {
      if ("Manual restore point" !== trimmed) {
        const intl = util.intl;
        const obj = { label: trimmed };
        let formatToPlainStringResult = intl.formatToPlainString(_modDef3753["UKyQ+E"], obj);
      }
      return formatToPlainStringResult;
    }
    const intl2 = util.intl;
    formatToPlainStringResult = intl2.string(_modDef3753.ObcM6b);
  }
}
const result = size.fileFinishedImporting("modules/conjure/history/ConjureHistoryFormat.tsx");

export const parseTimestampMs = function parseTimestampMs(authoredAt) {
  const parsed = Date.parse(authoredAt);
  let tmp2 = null;
  if (!Number.isNaN(parsed)) {
    tmp2 = parsed;
  }
  return tmp2;
};
export const formatAuthoredAt = function formatAuthoredAt(authored_at) {
  const parsed = Date.parse(authored_at);
  let tmp2 = null;
  if (!Number.isNaN(parsed)) {
    tmp2 = parsed;
  }
  if (null == tmp2) {
    let obj = { relative: null, absolute: null };
  } else {
    obj = { relative: null, absolute: null };
    const obj3 = { seconds: null, getFormatter: null };
    const _Math = Math;
    const _Math2 = Math;
    const _Date = Date;
    obj3.seconds = Math.max(0, Math.round((Date.now() - tmp2) / 1000));
    obj3.getFormatter = getTimestampString.getFullFormatter;
    obj.relative = getTimestampString.getDurationString(obj3);
    const _Date2 = Date;
    const date = new Date(tmp2);
    obj.absolute = date.toLocaleString();
  }
  return obj;
};
export const formatHistoryTime = function formatHistoryTime(parseTimestampMsResult) {
  return new Date(parseTimestampMsResult).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const formatHistoryDateTime = function formatHistoryDateTime(arg0) {
  return new Date(arg0).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};
export { formatHistoryDay };
export const groupHistoryByDay = function groupHistoryByDay(items, getMs, nowMs) {
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = getMs(nextResult);
    let tmp4 = tmp3;
    let str = "unknown";
    if (null != tmp3) {
      let _String = String;
      str = String(startOfDayMs(tmp4));
    }
    let tmp7 = str;
    let tmp8 = items[items.length - 1];
    let tmp9 = tmp8;
    if (null != tmp8) {
      if (tmp9.key === tmp7) {
        let items1 = tmp9.items;
        let arr = items1.push(tmp2);
        continue;
      }
    }
    let obj = { key: null, label: null, items: null };
    obj.key = tmp7;
    let tmp14 = null;
    if (null != tmp4) {
      tmp14 = formatHistoryDay(tmp4, nowMs);
    }
    obj.label = tmp14;
    let items2 = [tmp2];
    obj.items = items2;
    let arr2 = items.push(obj);
  }
  return items;
};
export const versionTitle = function versionTitle(subject, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const str = subject.replace(/^(Build|Turn):\s*/, "");
  const trimmed = subject.replace(/^(Build|Turn):\s*/, "").replace(/\s+/g, " ").trim();
  if ("" !== trimmed) {
    if ("Deploy" !== trimmed) {
      if (!obj7.test(trimmed)) {
        if ("Already at this version" !== trimmed) {
          let combined = trimmed;
          if (trimmed.length > 90) {
            const substr = trimmed.slice(0, 89);
            const _HermesInternal = HermesInternal;
            combined = "" + substr.trimEnd() + "\u2026";
          }
          let obj = { short: combined, full: trimmed };
        }
      }
      const intl = util.intl;
      const stringResult = intl.string(_modDef3753.Vk8vB1);
      const obj2 = { short: stringResult, full: stringResult };
      obj = obj2;
      obj7 = /^Restore version [0-9a-f]{7,40}$/;
    }
    let tmp8 = obj;
    if (flag) {
      const obj3 = { short: null, full: null };
      const intl3 = util.intl;
      const obj4 = { title: obj.short };
      obj3.short = intl3.formatToPlainString(_modDef3753.Z4n6LX, obj4);
      const intl4 = util.intl;
      const obj5 = { title: obj.full };
      obj3.full = intl4.formatToPlainString(_modDef3753.Z4n6LX, obj5);
      tmp8 = obj3;
    }
    return tmp8;
  }
  const intl2 = util.intl;
  const stringResult1 = intl2.string(_modDef3753.sFC5fT);
  obj = { short: stringResult1, full: stringResult1 };
  const str2 = subject.replace(/^(Build|Turn):\s*/, "").replace(/\s+/g, " ");
};
export const historyEnvironmentLabel = function historyEnvironmentLabel(environment) {
  const intl = util.intl;
  if ("preview" === environment) {
    let S65Rv3 = _modDef3753.Ebk40C;
  } else {
    S65Rv3 = _modDef3753.S65Rv3;
  }
  return intl.string(S65Rv3);
};
export const historyDatabaseTitle = function historyDatabaseTitle(environment, sharedDatabase) {
  const intl = util.intl;
  const string = intl.string;
  if (sharedDatabase) {
    let stringResult = string(_modDef3753.h3WBgO);
  } else {
    if ("preview" === environment) {
      let yLsAhA = _modDef3753.cjJdqL;
    } else {
      yLsAhA = _modDef3753.yLsAhA;
    }
    stringResult = string(yLsAhA);
  }
  return stringResult;
};
export const historyPreviewSha = function historyPreviewSha(data) {
  let previewSha = data.previewSha;
  if (previewSha == null) {
    const first = data.entries[0];
    let sha;
    if (first != null) {
      sha = first.sha;
    }
    previewSha = sha;
  }
  if (previewSha == null) {
    previewSha = null;
  }
  return previewSha;
};
export const visibleBackups = function visibleBackups(points, arg1) {
  let substr = points;
  if (!arg1) {
    substr = points.slice(0, 3);
  }
  return { shown: substr, collapsible: points.length > 3 };
};
export const backupRow = function backupRow(createdAt, restoreToMs) {
  const parsed = Date.parse(createdAt.createdAt);
  let tmp2 = null;
  if (!Number.isNaN(parsed)) {
    tmp2 = parsed;
  }
  value = undefined;
  if (null != createdAt.sourceSha) {
    value = restoreToMs.get(createdAt.sourceSha);
  }
  const obj = { title: backupTitle(createdAt), restoreToMs: null, detail: null };
  let tmp5 = null;
  if (!createdAt.expired) {
    tmp5 = tmp2;
  }
  obj.restoreToMs = tmp5;
  let toLocaleStringResult = null;
  if (null != tmp2) {
    const _Date = Date;
    const date = new Date(tmp2);
    toLocaleStringResult = date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  }
  const items = [toLocaleStringResult, ];
  let formatToPlainStringResult = null;
  if (null != value) {
    const intl = util.intl;
    const obj2 = { title: value };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3753.V7YNvf, obj2);
  }
  items[1] = formatToPlainStringResult;
  const found = items.filter((item) => null != item);
  obj.detail = found.join(" \u00B7 ");
  return obj;
};
export const historyRewindCopy = function historyRewindCopy(arg0, arg1) {
  const toLocaleStringResult = new Date(arg1).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  if ("stable" === arg0) {
    const obj = { title: null, body: null, confirmText: null, critical: true };
    const intl2 = util.intl;
    obj.title = intl2.string(_modDef3753.G9wD92);
    const intl3 = util.intl;
    const obj2 = { time: toLocaleStringResult };
    obj.body = intl3.formatToPlainString(_modDef3753.vyxJO8, obj2);
    const intl4 = util.intl;
    obj.confirmText = intl4.string(_modDef3753.kap49k);
    let obj3 = obj;
  } else {
    obj3 = { title: null, body: null, confirmText: null, critical: false };
    const intl5 = util.intl;
    obj3.title = intl5.string(_modDef3753.rR8rgj);
    const intl6 = util.intl;
    const intl7 = util.intl;
    if ("preview" === arg0) {
      let S65Rv3 = _modDef3753.Ebk40C;
    } else {
      S65Rv3 = _modDef3753.S65Rv3;
    }
    const obj4 = { environment: intl7.string(S65Rv3), time: toLocaleStringResult };
    obj3.body = intl6.formatToPlainString(_modDef3753.KfgzUO, obj4);
    const intl = util.intl;
    obj3.confirmText = intl.string(_modDef3753.XfeFw5);
  }
  return obj3;
};
export { backupTitle };
export const matchingPreviewBackup = function matchingPreviewBackup(sha, previewBackups) {
  let tmp = null;
  const iter = previewBackups[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let expired = "auto_deploy" !== nextResult.origin;
    if (!expired) {
      expired = "preview" !== tmp3.environment;
    }
    if (!expired) {
      expired = "preview" !== tmp3.deployEnvironment;
    }
    if (!expired) {
      expired = tmp3.sourceSha !== sha.sha;
    }
    if (!expired) {
      expired = tmp3.expired;
    }
    if (!expired) {
      let tmp9 = null == tmp;
      if (!tmp9) {
        tmp9 = tmp3.createdAt < tmp.createdAt;
      }
      if (tmp9) {
        tmp = nextResult;
      }
    }
    continue;
  }
  return tmp;
};