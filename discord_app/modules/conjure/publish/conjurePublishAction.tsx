// === Module 11617: conjurePublishAction ===

// Module 11617 (conjurePublishAction)
import util from "util" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11618 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 11620 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export const resolveConjurePublishAction = function resolveConjurePublishAction(input) {
  ({ integrationStatus, status } = input);
  if (status == null) {
    const obj = { state: "unpublished", surface: null, previewAppChannels: [] };
    status = obj;
  }
  let tmp = status;
  if ("up_to_date" === status.state) {
    tmp = status;
    if (input.liveNameOutdated) {
      const obj2 = {};
      const merged = Object.assign(status);
      obj2.state = "changes";
      tmp = obj2;
    }
  }
  const obj3 = {};
  const merged1 = Object.assign(input);
  obj3.status = tmp;
  const status2 = obj3.status;
  let tmp6 = "guild" === obj3.installScope;
  ({ appChannelName, appChannelPending, botInGuild } = obj3);
  if (tmp6) {
    tmp6 = null != status2;
  }
  if (tmp6) {
    tmp6 = "unpublished" !== status2.state;
  }
  if (!tmp6) {
    let str5 = input.guildName;
    let formatResult = null;
    if ("guild" === input.installScope) {
      formatResult = null;
      if (false === tmp10) {
        const intl = util.intl;
        if (str5 == null) {
          str5 = "";
        }
        const obj4 = { server: str5 };
        formatResult = intl.format(_modDef3865.N4NkyR, obj4);
      }
    }
    const obj6 = { installScope: input.installScope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
    let preview_ready;
    if (integrationStatus != null) {
      preview_ready = integrationStatus.preview_ready;
    }
    obj6.previewReady = true === preview_ready;
    let prop;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (prop == null) {
      prop = null;
    }
    obj6.integrationInstalled = prop;
    let prop1;
    if (integrationStatus != null) {
      prop1 = integrationStatus.bot_permissions_changed;
    }
    obj6.botPermissionsChanged = true === prop1;
    const result = conjurePreviewModes.requiresPermissionReview(obj6);
    let str7 = "publish";
    if (result) {
      str7 = "consent_then_publish";
    }
    const obj7 = { intent: str7, isUpdate: "changes" === tmp.state && !tmp6, disabledReason: formatResult, confirmReason: null, missingSurface: null };
    let tmp21 = null;
    if (null == formatResult) {
      let str9 = input.guildName;
      let formatResult1 = null;
      if ("guild" === input.installScope) {
        formatResult1 = null;
        if (tmp23) {
          formatResult1 = null;
          if (false === tmp22) {
            const intl2 = util.intl;
            if (str9 == null) {
              str9 = "";
            }
            const obj8 = { server: str9 };
            formatResult1 = intl2.format(_modDef3865.eHYXFg, obj8);
          }
        }
      }
      tmp21 = formatResult1;
    }
    obj7.confirmReason = tmp21;
    let tmp26 = null;
    if (tmp6) {
      let str10 = "bot";
      if ("activity" === tmp.surface) {
        str10 = "channel";
      }
      tmp26 = str10;
    }
    obj7.missingSurface = tmp26;
    if (result) {
      let prop2;
      if (integrationStatus != null) {
        prop2 = integrationStatus.bot_permissions_changed;
      }
      if (true === prop2) {
        const obj9 = {};
        const merged2 = Object.assign(obj7);
        const intl4 = util.intl;
        obj9.label = intl4.string(_modDef3865["tUeY/h"]);
        obj9.action = "review_permissions";
        let obj10 = obj9;
      }
      return obj10;
    }
    obj10 = {};
    const merged3 = Object.assign(obj7);
    const intl3 = util.intl;
    obj10.label = intl3.string(_modDef3865["120EFN"]);
    obj10.action = "publish";
  } else if ("activity" === status2.surface) {
    let tmp8 = null == appChannelName;
    if (tmp8) {
      tmp8 = true !== appChannelPending;
    }
    let tmp7 = tmp8;
  } else {
    tmp7 = "bot" === status2.surface;
    if (tmp7) {
      tmp7 = false === botInGuild;
    }
  }
};
export const conjurePublishTooltip = function conjurePublishTooltip(status) {
  let publishedAt;
  if (status != null) {
    publishedAt = status.publishedAt;
  }
  let parseTimestampMsResult = null;
  if (null != publishedAt) {
    parseTimestampMsResult = ConjureHistoryFormat.parseTimestampMs(status.publishedAt);
  }
  if (status != null) {
    const publishedRevision = status.publishedRevision;
  }
  let state;
  if (status != null) {
    state = status.state;
  }
  let formatToPlainStringResult = null;
  if ("unpublished" !== state) {
    formatToPlainStringResult = null;
    if (null != parseTimestampMsResult) {
      formatToPlainStringResult = null;
      if (null != publishedRevision) {
        const intl = util.intl;
        const obj2 = { time: ConjureHistoryFormat.formatHistoryDateTime(parseTimestampMsResult), version: publishedRevision };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3865.D9erxW, obj2);
      }
    }
  }
  return formatToPlainStringResult;
};