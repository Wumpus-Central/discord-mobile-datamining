// === Module 11435: conjurePublishAction ===

// Module 11435 (conjurePublishAction)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11410 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11428 */;
import size from "module_2" /* 2 */;

function resolveConjurePublishAction(input) {
  ({ integrationStatus, status } = input);
  if (status == null) {
    const obj = { publishState: "not_live", surface: null, previewAppChannels: [] };
    status = obj;
  }
  let tmp = status;
  if ("live_current" === status.publishState) {
    tmp = status;
    if (input.liveNameOutdated) {
      const obj2 = {};
      const merged = Object.assign(status);
      obj2.publishState = "live_outdated";
      tmp = obj2;
    }
  }
  const obj3 = {};
  const merged1 = Object.assign(input);
  obj3.status = tmp;
  const status2 = obj3.status;
  let tmp6 = "guild" !== obj3.installScope;
  ({ appChannelName, appChannelPending, usesAppChannels, botInGuild } = obj3);
  if (!tmp6) {
    tmp6 = null == status2;
  }
  if (!tmp6) {
    tmp6 = !ConjurePublishTypes.isConjureLive(status2.publishState);
  }
  let tmp9 = !tmp6;
  if (!tmp6) {
    let tmp10 = false === botInGuild;
    if (!tmp10) {
      let tmp11 = "activity" === status2.surface && usesAppChannels && null == appChannelName;
      if (tmp11) {
        tmp11 = true !== appChannelPending;
      }
      tmp10 = tmp11;
    }
    tmp9 = tmp10;
  }
  let str3 = input.guildName;
  let formatResult = null;
  if ("guild" === input.installScope) {
    formatResult = null;
    if (false === tmp12) {
      const intl = util.intl;
      if (str3 == null) {
        str3 = "";
      }
      const obj5 = { server: str3 };
      formatResult = intl.format(_modDef4244.N4NkyR, obj5);
    }
  }
  const obj7 = { installScope: input.installScope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
  let preview_ready;
  if (integrationStatus != null) {
    preview_ready = integrationStatus.preview_ready;
  }
  obj7.previewReady = true === preview_ready;
  let prop;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  if (prop == null) {
    prop = null;
  }
  obj7.integrationInstalled = prop;
  let prop1;
  if (integrationStatus != null) {
    prop1 = integrationStatus.bot_permissions_changed;
  }
  obj7.botPermissionsChanged = true === prop1;
  let result = conjurePreviewModes.requiresPermissionReview(obj7);
  const obj8 = { label: null, intent: null, permissionsChanged: null, isUpdate: null, upToDate: null, disabledReason: null, confirmReason: null, missingSurface: null };
  const intl2 = util.intl;
  obj8.label = intl2.string(_modDef4244["120EFN"]);
  let str4 = "publish";
  if (result) {
    str4 = "consent_then_publish";
  }
  obj8.intent = str4;
  if (result) {
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    result = true === prop2;
  }
  obj8.permissionsChanged = result;
  obj8.isUpdate = "live_outdated" === tmp.publishState && !tmp9;
  let tmp25 = "live_current" === tmp.publishState;
  if (!tmp25) {
    tmp25 = "live_auto_synced" === tmp.publishState;
  }
  if (tmp25) {
    tmp25 = !tmp9;
  }
  obj8.upToDate = tmp25;
  obj8.disabledReason = formatResult;
  let tmp26 = null;
  if (null == formatResult) {
    let str6 = input.guildName;
    let formatResult1 = null;
    if ("guild" === input.installScope) {
      formatResult1 = null;
      if (tmp28) {
        formatResult1 = null;
        if (false === tmp27) {
          const intl3 = util.intl;
          if (str6 == null) {
            str6 = "";
          }
          const obj9 = { server: str6 };
          formatResult1 = intl3.format(_modDef4244.eHYXFg, obj9);
        }
      }
    }
    tmp26 = formatResult1;
  }
  obj8.confirmReason = tmp26;
  let tmp30 = null;
  if (tmp9) {
    let str9 = "bot";
    if ("activity" === tmp.surface) {
      str9 = "bot";
      if (false !== input.botInGuild) {
        str9 = "channel";
      }
    }
    tmp30 = str9;
  }
  obj8.missingSurface = tmp30;
  return obj8;
}
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export { resolveConjurePublishAction };
export function conjurePublishButtonState(memo, canPublish) {
  const status = memo.status;
  if (status != null) {
    const publishState = status.publishState;
  }
  if (canPublish.canPublish) {
    if (null != memo.installScope) {
      if (null != publishState) {
        if ("nothing_built" !== publishState) {
          if (canPublish.publishing) {
            return "publishing";
          } else {
            let str2 = "action_needed";
            if (tmp2.upToDate) {
              str2 = "action_needed";
              if (!tmp3) {
                str2 = "action_needed";
                if (!canPublish.awaitingApproval) {
                  str2 = "action_needed";
                  if (!canPublish.ownerInstallMissing) {
                    let str3 = "up_to_date";
                    if ("live_auto_synced" === publishState) {
                      str3 = "auto_synced";
                    }
                    str2 = str3;
                  }
                }
              }
            }
            return str2;
          }
        }
      }
    }
  }
  return "hidden";
}