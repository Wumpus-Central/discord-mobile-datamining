// === Module 11336: conjurePublishAction ===

// Module 11336 (conjurePublishAction)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11311 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 11329 */;
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
      formatResult = intl.format(_modDef4192.N4NkyR, obj5);
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
  const result = conjurePreviewModes.requiresPermissionReview(obj7);
  let str4 = "publish";
  if (result) {
    str4 = "consent_then_publish";
  }
  const obj8 = { intent: str4, isUpdate: "live_outdated" === tmp.publishState && !tmp9, upToDate: null, disabledReason: null, confirmReason: null, missingSurface: null };
  let tmp23 = "live_current" === tmp.publishState;
  if (!tmp23) {
    tmp23 = "live_auto_synced" === tmp.publishState;
  }
  if (tmp23) {
    tmp23 = !tmp9;
  }
  obj8.upToDate = tmp23;
  obj8.disabledReason = formatResult;
  let tmp24 = null;
  if (null == formatResult) {
    let str6 = input.guildName;
    let formatResult1 = null;
    if ("guild" === input.installScope) {
      formatResult1 = null;
      if (tmp26) {
        formatResult1 = null;
        if (false === tmp25) {
          const intl2 = util.intl;
          if (str6 == null) {
            str6 = "";
          }
          const obj9 = { server: str6 };
          formatResult1 = intl2.format(_modDef4192.eHYXFg, obj9);
        }
      }
    }
    tmp24 = formatResult1;
  }
  obj8.confirmReason = tmp24;
  let tmp29 = null;
  if (tmp9) {
    let str9 = "bot";
    if ("activity" === tmp.surface) {
      str9 = "bot";
      if (false !== input.botInGuild) {
        str9 = "channel";
      }
    }
    tmp29 = str9;
  }
  obj8.missingSurface = tmp29;
  if (result) {
    let prop2;
    if (integrationStatus != null) {
      prop2 = integrationStatus.bot_permissions_changed;
    }
    if (true === prop2) {
      const obj10 = {};
      const merged2 = Object.assign(obj8);
      const intl4 = util.intl;
      obj10.label = intl4.string(_modDef4192["tUeY/h"]);
      obj10.action = "review_permissions";
      let obj11 = obj10;
    }
    return obj11;
  }
  obj11 = {};
  const merged3 = Object.assign(obj8);
  const intl3 = util.intl;
  obj11.label = intl3.string(_modDef4192["120EFN"]);
  obj11.action = "publish";
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
              if ("publish" === tmp3) {
                str2 = "action_needed";
                if (!canPublish.awaitingApproval) {
                  str2 = "action_needed";
                  if (!canPublish.ownerInstallMissing) {
                    let str4 = "up_to_date";
                    if ("live_auto_synced" === publishState) {
                      str4 = "auto_synced";
                    }
                    str2 = str4;
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