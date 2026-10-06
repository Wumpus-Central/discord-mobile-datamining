// discord_app/modules/conjure/history/ConjureHistoryFormat.tsx
import intl8 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import getTimestampString from "../../notification_center/getTimestampString.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    const intl2 = intl8.intl;
    return intl2.string(_modDef3753.CADyoV);
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date2 = new Date(time1);
    date2.setDate(date2.getDate() - 1);
    if (time === date2.getTime()) {
      const intl = intl8.intl;
      return intl.string(_modDef3753.mghe4b);
    } else {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      const date3 = new Date(arg0);
      const fullYear = date3.getFullYear();
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      const date4 = new Date(nowMs);
      const fullYear1 = date4.getFullYear();
      const toLocaleDateString = new Date(arg0).toLocaleDateString;
      const date5 = new Date(arg0);
      const date6 = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
      return toLocaleDateString(undefined, date6);
    }
  }
}
function backupTitle(origin) {
  origin = origin.origin;
  if ("auto_deploy" === origin) {
    let stringResult;
    if ("stable" === origin.deployEnvironment) {
      const intl6 = intl8.intl;
      stringResult = intl6.string(_modDef3753["4TpI2y"]);
    } else if ("preview" === origin.deployEnvironment) {
      const intl5 = intl8.intl;
      stringResult = intl5.string(_modDef3753.NdyxPu);
    } else {
      const intl4 = intl8.intl;
      stringResult = intl4.string(_modDef3753["4JCH6A"]);
    }
    return stringResult;
  } else if ("undo" === origin) {
    const intl3 = intl8.intl;
    return intl3.string(_modDef3753.VjJT5R);
  } else {
    const str4 = origin.label;
    const trimmed = str4.trim();
    if ("" !== trimmed) {
      let formatToPlainStringResult;
      if ("Manual restore point" !== trimmed) {
        const intl = intl8.intl;
        const obj = { label: trimmed };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753["UKyQ+E"], obj);
      }
      return formatToPlainStringResult;
    }
    const intl2 = intl8.intl;
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
  let date;
  let getDurationString;
  let obj;
  let obj2;
  const parsed = Date.parse(authored_at);
  let tmp2 = null;
  if (!Number.isNaN(parsed)) {
    tmp2 = parsed;
  }
  if (null == tmp2) {
    obj = { relative: null, absolute: null };
  } else {
    obj = { relative: getDurationString(obj2), absolute: date.toLocaleString() };
    const _Math = Math;
    const _Math2 = Math;
    const _Date = Date;
    obj2 = {
      seconds: Math.max(0, Math.round((Date.now() - tmp2) / 1000)),
      getFormatter: getTimestampString.getFullFormatter,
    };
    getDurationString = getTimestampString.getDurationString;
    getTimestampString;
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    date = new Date(tmp2);
  }
  return obj;
};
export const formatHistoryTime = function formatHistoryTime(parseTimestampMsResult) {
  const date = new Date(parseTimestampMsResult);
  return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
};
export const formatHistoryDateTime = function formatHistoryDateTime(arg0) {
  const date = new Date(arg0);
  return date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};
export { formatHistoryDay };
export const groupHistoryByDay = function groupHistoryByDay(items, getMs, nowMs) {
  let items2;
  let tmp14;
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
    let obj = { key: tmp7, label: tmp14, items: items2 };
    tmp14 = null;
    let push = items.push;
    if (null != tmp4) {
      tmp14 = formatHistoryDay(tmp4, nowMs);
    }
    items2 = [tmp2];
    let arr2 = push(obj);
  }
  return items;
};
export const versionTitle = function versionTitle(subject, arg1) {
  let intl3;
  let intl4;
  let obj4;
  let obj5;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const str = subject.replace(/^(Build|Turn):\s*/, "");
  const str2 = str.replace(/\s+/g, " ");
  const trimmed = str2.trim();
  if ("" !== trimmed) {
    let obj;
    if ("Deploy" !== trimmed) {
      const obj7 = /^Restore version [0-9a-f]{7,40}$/;
      if (!obj7.test(trimmed)) {
        if ("Already at this version" !== trimmed) {
          let combined = trimmed;
          if (trimmed.length > 90) {
            const substr = trimmed.slice(0, 89);
            const _HermesInternal = HermesInternal;
            combined = "" + substr.trimEnd() + "\u2026";
          }
          obj = { short: combined, full: trimmed };
        }
      }
      const intl = intl8.intl;
      const stringResult = intl.string(_modDef3753.Vk8vB1);
      obj = { short: stringResult, full: stringResult };
      const obj2 = { short: stringResult, full: stringResult };
    }
    let tmp8 = obj;
    if (flag) {
      const obj3 = {
        short: intl3.formatToPlainString(_modDef3753.Z4n6LX, obj4),
        full: intl4.formatToPlainString(_modDef3753.Z4n6LX, obj5),
      };
      intl3 = intl8.intl;
      obj4 = { title: obj.short };
      intl4 = intl8.intl;
      tmp8 = obj3;
      obj5 = { title: obj.full };
    }
    return tmp8;
  }
  const intl2 = intl8.intl;
  const stringResult1 = intl2.string(_modDef3753.sFC5fT);
  obj = { short: stringResult1, full: stringResult1 };
};
export const historyEnvironmentLabel = function historyEnvironmentLabel(environment) {
  let S65Rv3;
  const intl = intl8.intl;
  const string = intl.string;
  if ("preview" === environment) {
    S65Rv3 = _modDef3753.Ebk40C;
  } else {
    S65Rv3 = _modDef3753.S65Rv3;
  }
  return string(S65Rv3);
};
export const historyDatabaseTitle = function historyDatabaseTitle(environment, sharedDatabase) {
  let stringResult;
  const intl = intl8.intl;
  const string = intl.string;
  const tmp2 = sharedDatabase;
  if (tmp2) {
    stringResult = string(_modDef3753.h3WBgO);
  } else {
    let yLsAhA;
    if ("preview" === environment) {
      yLsAhA = _modDef3753.cjJdqL;
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
  let found;
  let tmp5;
  const parsed = Date.parse(createdAt.createdAt);
  let tmp2 = null;
  if (!Number.isNaN(parsed)) {
    tmp2 = parsed;
  }
  let value;
  if (null != createdAt.sourceSha) {
    value = restoreToMs.get(createdAt.sourceSha);
  }
  const obj = { title: backupTitle(createdAt), restoreToMs: tmp5, detail: found.join(" \u00B7 ") };
  tmp5 = null;
  if (!createdAt.expired) {
    tmp5 = tmp2;
  }
  let toLocaleStringResult = null;
  if (null != tmp2) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(tmp2);
    toLocaleStringResult = date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  }
  const items = [toLocaleStringResult];
  let formatToPlainStringResult = null;
  if (null != value) {
    const intl = intl8.intl;
    const obj2 = { title: value };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3753.V7YNvf, obj2);
  }
  items[1] = formatToPlainStringResult;
  found = items.filter((item) => null != item);
  return obj;
};
export const historyRewindCopy = function historyRewindCopy(arg0, arg1) {
  let KfgzUO;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj2;
  let obj3;
  let obj4;
  const date = new Date(arg1);
  const toLocaleStringResult = date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
  if ("stable" === arg0) {
    const obj = {
      title: intl2.string(_modDef3753.G9wD92),
      body: intl3.formatToPlainString(_modDef3753.vyxJO8, obj2),
      confirmText: intl4.string(_modDef3753.kap49k),
      critical: true,
    };
    intl2 = intl8.intl;
    intl3 = intl8.intl;
    obj2 = { time: toLocaleStringResult };
    intl4 = intl8.intl;
    obj3 = obj;
  } else {
    let S65Rv3;
    obj3 = {
      title: intl5.string(_modDef3753.rR8rgj),
      body: formatToPlainString(KfgzUO, obj4),
      confirmText: intl.string(_modDef3753.XfeFw5),
      critical: false,
    };
    intl5 = intl8.intl;
    const intl6 = intl8.intl;
    formatToPlainString = intl6.formatToPlainString;
    KfgzUO = _modDef3753.KfgzUO;
    const intl7 = intl8.intl;
    const string = intl7.string;
    if ("preview" === arg0) {
      S65Rv3 = _modDef3753.Ebk40C;
    } else {
      S65Rv3 = _modDef3753.S65Rv3;
    }
    obj4 = { environment: string(S65Rv3), time: toLocaleStringResult };
    intl = intl8.intl;
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
