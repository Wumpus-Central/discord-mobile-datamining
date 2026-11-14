// === Module 13251: conjureLinkedAppData ===

// Module 13251 (conjureLinkedAppData)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function settingOption(targetLive, data, arg2, arg3) {
  if ("live" === data) {
    if (!targetLive.targetLive) {
      const intl = util.intl;
      obj = { target: targetLive.target };
      let formatToPlainStringResult = intl.formatToPlainString(_modDef4131.GNcOoY, obj);
    }
    obj2 = { data, label: null, description: null, disabled: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(obj[data]);
    obj2.description = formatToPlainStringResult;
    let tmp13 = null != formatToPlainStringResult;
    if (tmp13) {
      tmp13 = data !== arg2;
    }
    obj2.disabled = tmp13;
    return obj2;
  }
  let stringResult;
  if (arg3) {
    if ("preview" === data) {
      if (targetLive.callerLiveOnVibeyard) {
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef4131.bSQXpN);
      }
    }
  }
  formatToPlainStringResult = stringResult;
}
let obj = { live: _modDef4131.MLa86y, preview: _modDef4131["6uafcy"] };
let obj2 = { live: _modDef4131["PeX+1n"], preview: _modDef4131["Gtd/KL"] };
let obj3 = { gets: _modDef4131.aiHmSc, sends: _modDef4131.i1D8eM, both: _modDef4131.QEIP5j };
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedAppData.tsx");

export function linkedAppCallerSides(project_id, has_preview) {
  return { caller: project_id.names[has_preview.project_id], target: project_id.name, targetLive: project_id.live, targetHasPreview: project_id.hasPreview, callerHasPreview: false !== has_preview.has_preview, callerLiveOnVibeyard: true === has_preview.live_on_vibeyard };
}
export function linkedAppTargetSides(project_id, live) {
  return { caller: project_id.name, target: project_id.names[live.project_id], targetLive: live.live, targetHasPreview: live.has_preview, callerHasPreview: project_id.hasPreview, callerLiveOnVibeyard: false };
}
export function linkedAppChatData(targetHasPreview, build) {
  if (targetHasPreview.targetHasPreview) {
    obj2 = { target: targetHasPreview.target };
    let str = "preview";
    if ("preview" === build) {
      obj3 = { sentence: null, options: null };
      const intl5 = util.intl;
      obj3.sentence = intl5.formatToPlainString(_modDef4131.Q0D9Ie, obj2);
      obj3.options = [];
      return obj3;
    } else if (targetHasPreview.callerHasPreview) {
      if ("published" === build) {
        str = "live";
      }
      const intl2 = util.intl;
      if ("live" === str) {
        let FKHnHv = _modDef4131["9iFuxr"];
      } else {
        FKHnHv = _modDef4131.FKHnHv;
      }
      const obj4 = { sentence: intl2.formatToPlainString(FKHnHv, obj2), options: null };
      if (targetHasPreview.targetLive) {
        const obj5 = { build: "published", label: null };
        const intl3 = util.intl;
        obj5.label = intl3.string(obj.live);
        items = [obj5, ];
        const obj6 = { build: "auto", label: null };
        const intl4 = util.intl;
        obj6.label = intl4.string(obj.preview);
        items[1] = obj6;
        obj4.options = items;
        let tmp9 = obj4;
      } else {
        obj4.options = [];
        tmp9 = obj4;
      }
      return tmp9;
    } else {
      const obj7 = { sentence: null, options: null };
      const intl = util.intl;
      obj7.sentence = intl.formatToPlainString(_modDef4131.QhPlAe, obj2);
      obj7.options = [];
      return obj7;
    }
  } else {
    obj = { sentence: null, options: [] };
    return obj;
  }
}
export function linkedAppSettings(targetHasPreview, build) {
  _require = targetHasPreview;
  importDefault = build;
  if (targetHasPreview.targetHasPreview) {
    obj = { caller: null, target: null };
    ({ caller: obj.caller, target: obj.target } = targetHasPreview);
    let str2 = "preview";
    let str3 = "live";
    if ("preview" === build) {
      str3 = str2;
    }
    const intl = require("util").intl;
    const tmp5 = require("module_4131");
    if (targetHasPreview.callerHasPreview) {
      let YbEDjJ = tmp5.zxQdoh;
      let tmp6 = tmp4;
    } else {
      YbEDjJ = tmp5.YbEDjJ;
      tmp6 = tmp4;
    }
    obj2 = { label: intl.formatToPlainString(YbEDjJ, obj), value: str3, options: null, locked: false, buildFor: null };
    items = ["live", "preview"];
    obj2.options = items.map((item) => settingOption(closure_0, item, str3, true));
    obj2.buildFor = function buildFor(arg0) {
      let str = "preview";
      if ("preview" !== arg0) {
        let tmp = closure_1;
        if ("preview" === closure_1) {
          str2 = "published";
          if (targetHasPreview.callerHasPreview) {
            str2 = "auto";
          }
          tmp = str2;
        }
        str = tmp;
      }
      return str;
    };
    let tmp8 = str2;
    if (str2 !== str3) {
      if ("published" === build) {
        str2 = "live";
      }
      tmp8 = str2;
    }
    str2 = tmp8;
    let tmp9 = null;
    if (targetHasPreview.callerHasPreview) {
      obj3 = { label: null, value: null, options: null, locked: null, buildFor: null };
      const intl2 = tmp2(tmp3[1]).intl;
      obj3.label = intl2.formatToPlainString(tmp6(tmp3[0]).dpSkBA, obj);
      obj3.value = tmp8;
      const items1 = ["live", "preview"];
      obj3.options = items1.map((item) => settingOption(closure_0, item, str2, false));
      obj3.locked = tmp7;
      obj3.buildFor = function buildFor(arg0) {
        let str = "auto";
        if ("live" === arg0) {
          str = "published";
        }
        return str;
      };
      tmp9 = obj3;
    }
    const obj4 = { preview: tmp9, live: obj2, note: null };
    let formatToPlainStringResult = null;
    if (str2 === str3) {
      const intl3 = tmp2(tmp3[1]).intl;
      const obj5 = { caller: targetHasPreview.caller };
      formatToPlainStringResult = intl3.formatToPlainString(tmp6(tmp3[0])["U+jxta"], obj5);
    }
    obj4.note = formatToPlainStringResult;
    return obj4;
  } else {
    return null;
  }
}
export function linkedAppDataSummary(linkedAppTargetSidesResult, build) {
  if (linkedAppTargetSidesResult.targetHasPreview) {
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmp6 = _modDef4131;
    if (linkedAppTargetSidesResult.callerHasPreview) {
      obj2 = { caller: linkedAppTargetSidesResult.caller, preview: null, live: null };
      let str5 = "preview";
      if ("published" === build) {
        str5 = "live";
      }
      const intl3 = util.intl;
      obj2.preview = intl3.string(obj2[str5]);
      let str6 = "live";
      if ("preview" === build) {
        str6 = "preview";
      }
      const intl4 = util.intl;
      obj2.live = intl4.string(obj2[str6]);
      let formatToPlainStringResult = formatToPlainString(tmp6.MZuPO3, obj2);
    } else {
      obj = { caller: linkedAppTargetSidesResult.caller, live: null };
      let str = "live";
      if ("preview" === build) {
        str = "preview";
      }
      const intl2 = util.intl;
      obj.live = intl2.string(obj2[str]);
      formatToPlainStringResult = formatToPlainString(tmp6.Tt5ih9, obj);
    }
    return formatToPlainStringResult;
  } else {
    return null;
  }
}
export function linkedAppPurpose(purpose) {
  let str;
  if (purpose != null) {
    str = purpose.trim();
  }
  if (str == null) {
    str = "";
  }
  let sum = null;
  if ("" !== str) {
    const charAtResult = str.charAt(0);
    sum = str.charAt(0).toLocaleUpperCase() + str.slice(1);
    const toLocaleUpperCaseResult = str.charAt(0).toLocaleUpperCase();
  }
  return sum;
}
export function linkedAppHeaderAria(caller, flow) {
  const intl = util.intl;
  if (null == flow) {
    let tkCyiM = _modDef4131.tkCyiM;
  } else {
    tkCyiM = obj3[flow];
  }
  return intl.formatToPlainString(tkCyiM, { caller: caller.caller, target: caller.target });
}
export function linkedAppChatAria(caller) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef4131.rCqv8t, { caller: caller.caller, target: caller.target });
}