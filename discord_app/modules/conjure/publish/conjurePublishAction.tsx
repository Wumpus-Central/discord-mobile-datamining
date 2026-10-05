// discord_app/modules/conjure/publish/conjurePublishAction.tsx
import intl19 from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import conjurePreviewModes from "../preview/conjurePreviewModes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export const resolveConjurePublishAction = function resolveConjurePublishAction(input) {
  let appChannelName;
  let appChannelName2;
  let appChannelPending;
  let botInGuild;
  let destination;
  let formatToPlainStringResult1;
  let guildName;
  let guildName2;
  let installScope;
  let integrationStatus;
  let intl10;
  let intl11;
  let intl12;
  let intl18;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let preview_ready1;
  let prop;
  let prop1;
  let status;
  let usesNativeAppChannels;
  ({ installScope, status, integrationStatus, guildName, appChannelName } = input);
  if (null == status) {
    return null;
  } else {
    const surface = status.surface;
    if ("unpublished" === status.state) {
      if (null == surface) {
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true !== preview_ready) {
          return null;
        }
      }
    }
    let tmp2 = null;
    if (null != surface) {
      let tmp7;
      if ("user" === installScope) {
        let tmp9;
        if ("bot" === surface) {
          const obj2 = {
            update: intl11.string(_modDef3723.JpDnbE),
            open: intl12.string(_modDef3723.NNIwRu),
            destination: "dm",
            navigatesOnFirstPublish: true,
            navigatesOnUpdate: false,
          };
          intl11 = intl19.intl;
          intl12 = intl19.intl;
          tmp9 = obj2;
        } else if ("activity" === surface) {
          const obj3 = {
            update: intl9.string(_modDef3723.QesMDC),
            open: intl10.string(_modDef3723.iyQTsb),
            destination: "launch",
            navigatesOnFirstPublish: false,
            navigatesOnUpdate: false,
          };
          intl9 = intl19.intl;
          intl10 = intl19.intl;
          tmp9 = obj3;
        } else if ("widget" === surface) {
          const obj4 = {
            update: intl7.string(_modDef3723["LUi/55"]),
            open: intl8.string(_modDef3723.TXUK1g),
            destination: "profile",
            navigatesOnFirstPublish: true,
            navigatesOnUpdate: true,
          };
          intl7 = intl19.intl;
          intl8 = intl19.intl;
          tmp9 = obj4;
        } else {
          tmp9 = null;
        }
        tmp7 = tmp9;
      } else {
        tmp7 = null;
        if (null != guildName) {
          const intl = intl19.intl;
          const obj = { server: guildName };
          const formatToPlainStringResult = intl.formatToPlainString(_modDef3723.fTgw6C, obj);
          if ("bot" === surface) {
            const obj5 = {
              update: intl6.string(_modDef3723.JpDnbE),
              open: formatToPlainStringResult,
              destination: "guild",
              navigatesOnFirstPublish: true,
              navigatesOnUpdate: false,
            };
            intl6 = intl19.intl;
            tmp7 = obj5;
          } else if ("activity" === surface) {
            const obj6 = {
              update: intl4.string(_modDef3723.QesMDC),
              open: formatToPlainStringResult1,
              destination: "channel",
              navigatesOnFirstPublish: true,
              navigatesOnUpdate: false,
            };
            intl4 = intl19.intl;
            formatToPlainStringResult1 = formatToPlainStringResult;
            if (null != appChannelName) {
              const intl5 = intl19.intl;
              const obj7 = { channel: appChannelName };
              formatToPlainStringResult1 = intl5.formatToPlainString(_modDef3723.l9xGQD, obj7);
            }
            tmp7 = obj6;
          } else if ("automod" === surface) {
            const obj8 = {
              update: intl2.string(_modDef3723.bwBMMn),
              open: intl3.string(_modDef3723.KjbLum),
              destination: "automod",
              navigatesOnFirstPublish: false,
              navigatesOnUpdate: false,
            };
            intl2 = intl19.intl;
            intl3 = intl19.intl;
            tmp7 = obj8;
          } else {
            tmp7 = null;
          }
        }
      }
      tmp2 = tmp7;
    }
    const status2 = input.status;
    let tmp19 = "guild" === input.installScope;
    ({ appChannelName: appChannelName2, appChannelPending, botInGuild } = input);
    if (tmp19) {
      tmp19 = null != status2;
    }
    if (tmp19) {
      tmp19 = "unpublished" !== status2.state;
    }
    if (tmp19) {
      let tmp20;
      if ("activity" === status2.surface) {
        tmp20 = null == appChannelName2 && true !== appChannelPending;
        const tmp21 = null == appChannelName2 && true !== appChannelPending;
      } else {
        tmp20 = "bot" === status2.surface && false === botInGuild;
      }
      tmp19 = tmp20;
    }
    if (null != tmp2) {
      if ("up_to_date" === status.state) {
        if (!tmp19) {
          const obj10 = {
            label: null,
            intent: "open",
            action: "open",
            destination: null,
            navigatesOnPublish: false,
            upToDate: true,
            isUpdate: false,
            disabledReason: null,
          };
          ({ open: obj9.label, destination: obj9.destination } = tmp2);
          return obj10;
        }
      }
    }
    ({ guildName: guildName2, usesNativeAppChannels } = input);
    let tmp24 = null;
    if ("guild" === input.installScope) {
      let formatToPlainStringResult2;
      if (usesNativeAppChannels) {
        usesNativeAppChannels = false === tmp23;
      }
      if (guildName2 == null) {
        guildName2 = "";
      }
      const obj11 = { server: guildName2 };
      if (false === tmp22) {
        if (usesNativeAppChannels) {
          const intl15 = intl19.intl;
          formatToPlainStringResult2 = intl15.formatToPlainString(_modDef3723["4sqXfg"], obj11);
        }
        tmp24 = formatToPlainStringResult2;
      }
      if (false === tmp22) {
        const intl14 = intl19.intl;
        formatToPlainStringResult2 = intl14.formatToPlainString(_modDef3723.N4NkyR, obj11);
      } else {
        formatToPlainStringResult2 = null;
        if (usesNativeAppChannels) {
          const intl13 = intl19.intl;
          formatToPlainStringResult2 = intl13.formatToPlainString(_modDef3723.PxtHIV, obj11);
        }
      }
    }
    const obj12 = {
      installScope,
      previewReady: true === preview_ready1,
      integrationInstalled: prop,
      botPermissionsChanged: true === prop1,
    };
    preview_ready1 = undefined;
    const requiresPermissionReview = conjurePreviewModes.requiresPermissionReview;
    conjurePreviewModes;
    if (integrationStatus != null) {
      preview_ready1 = integrationStatus.preview_ready;
    }
    prop = undefined;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (prop == null) {
      prop = null;
    }
    prop1 = undefined;
    if (integrationStatus != null) {
      prop1 = integrationStatus.bot_permissions_changed;
    }
    const result = requiresPermissionReview(obj12);
    let str12 = "publish";
    if (result) {
      str12 = "consent_then_publish";
    }
    const obj13 = {
      intent: str12,
      destination,
      upToDate: false,
      isUpdate: "changes" === status.state && !tmp19,
      disabledReason: tmp24,
    };
    destination = undefined;
    if (tmp2 != null) {
      destination = tmp2.destination;
    }
    if (destination == null) {
      destination = null;
    }
    const tmp45 =
      null != tmp2 && ("changes" === status.state && !tmp19 ? tmp2.navigatesOnUpdate : tmp2.navigatesOnFirstPublish);
    if (result) {
      let prop2;
      if (integrationStatus != null) {
        prop2 = integrationStatus.bot_permissions_changed;
      }
      if (true === prop2) {
        const obj14 = {
          label: intl18.string(_modDef3723["tUeY/h"]),
          action: "review_permissions",
          navigatesOnPublish: tmp45,
        };
        const merged = Object.assign(obj13);
        intl18 = intl19.intl;
        return obj14;
      }
    }
    let update;
    if (tmp2 != null) {
      update = tmp2.update;
    }
    if (update == null) {
      const intl16 = intl19.intl;
      update = intl16.string(_modDef3723.QesMDC);
    }
    const obj27 = { label: update, action: "publish", navigatesOnPublish: tmp45 };
    const merged1 = Object.assign(obj13);
    if (!("changes" === status.state && !tmp19)) {
      const intl17 = intl19.intl;
      update = intl17.string(_modDef3723["120EFN"]);
    }
    return obj27;
  }
};
