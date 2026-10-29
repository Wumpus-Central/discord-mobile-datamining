// discord_app/modules/conjure/publish/conjurePublishAction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3864 from "../intl/ConjureUntranslated.messages.js";
import ConjurePublishTypes from "ConjurePublishTypes.tsx";
import conjurePreviewModes from "../preview/conjurePreviewModes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export function resolveConjurePublishAction(input) {
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
  ({ appChannelName, appChannelPending, botInGuild } = obj3);
  if (!tmp6) {
    tmp6 = null == status2;
  }
  if (!tmp6) {
    tmp6 = !ConjurePublishTypes.isConjureLive(status2.publishState);
  }
  if (tmp6) {
    let str4 = input.guildName;
    let formatResult = null;
    if ("guild" === input.installScope) {
      formatResult = null;
      if (false === tmp13) {
        const intl = util.intl;
        if (str4 == null) {
          str4 = "";
        }
        const obj5 = { server: str4 };
        formatResult = intl.format(_modDef3864.N4NkyR, obj5);
      }
    }
    const obj7 = {
      installScope: input.installScope,
      previewReady: null,
      integrationInstalled: null,
      botPermissionsChanged: null,
    };
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
    let str6 = "publish";
    if (result) {
      str6 = "consent_then_publish";
    }
    const obj8 = {
      intent: str6,
      isUpdate: "live_outdated" === tmp.publishState && !tmp9,
      upToDate: "live_current" === tmp.publishState && !tmp9,
      disabledReason: formatResult,
      confirmReason: null,
      missingSurface: null,
    };
    let tmp24 = null;
    if (null == formatResult) {
      let str8 = input.guildName;
      let formatResult1 = null;
      if ("guild" === input.installScope) {
        formatResult1 = null;
        if (tmp26) {
          formatResult1 = null;
          if (false === tmp25) {
            const intl2 = util.intl;
            if (str8 == null) {
              str8 = "";
            }
            const obj9 = { server: str8 };
            formatResult1 = intl2.format(_modDef3864.eHYXFg, obj9);
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
        str9 = "channel";
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
        obj10.label = intl4.string(_modDef3864["tUeY/h"]);
        obj10.action = "review_permissions";
        let obj11 = obj10;
      }
      return obj11;
    }
    obj11 = {};
    const merged3 = Object.assign(obj8);
    const intl3 = util.intl;
    obj11.label = intl3.string(_modDef3864["120EFN"]);
    obj11.action = "publish";
  } else if ("activity" === status2.surface) {
    let tmp11 = null == appChannelName;
    if (tmp11) {
      tmp11 = true !== appChannelPending;
    }
    let tmp10 = tmp11;
  } else {
    tmp10 = "bot" === status2.surface;
    if (tmp10) {
      tmp10 = false === botInGuild;
    }
  }
}
