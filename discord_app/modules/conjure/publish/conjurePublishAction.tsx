// discord_app/modules/conjure/publish/conjurePublishAction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import conjurePreviewModes from "../preview/conjurePreviewModes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishAction.tsx");

export const resolveConjurePublishAction = function resolveConjurePublishAction(input) {
  ({ installScope, integrationStatus, guildName, appChannelName } = input);
  if (null == input.status) {
    return null;
  } else {
    if ("up_to_date" === input.status.state) {
      if (input.liveNameOutdated) {
        const obj = {};
        const merged = Object.assign(input.status);
        obj.state = "changes";
        let status = obj;
      }
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
      if (null == surface) {
        const status2 = input.status;
        let tmp23 = "guild" === input.installScope;
        ({ appChannelName: appChannelName2, appChannelPending, botInGuild } = input);
        if (tmp23) {
          tmp23 = null != status2;
        }
        if (tmp23) {
          tmp23 = "unpublished" !== status2.state;
        }
        if (!tmp23) {
          if (null != null) {
            if ("up_to_date" === status.state) {
              if (!tmp23) {
                ({ open: obj10.label, destination: obj10.destination } = null);
                return {
                  label: null,
                  intent: "open",
                  action: "open",
                  destination: null,
                  navigatesOnPublish: false,
                  upToDate: true,
                  isUpdate: false,
                  disabledReason: null,
                  confirmReason: null,
                };
              }
            }
          }
          let str11 = input.guildName;
          let formatResult = null;
          if ("guild" === input.installScope) {
            formatResult = null;
            if (false === tmp27) {
              const intl13 = util.intl;
              if (str11 == null) {
                str11 = "";
              }
              const obj3 = { server: str11 };
              formatResult = intl13.format(_modDef3827.N4NkyR, obj3);
            }
          }
          const obj4 = { installScope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
          let preview_ready1;
          if (integrationStatus != null) {
            preview_ready1 = integrationStatus.preview_ready;
          }
          obj4.previewReady = true === preview_ready1;
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.integration_installed;
          }
          if (prop == null) {
            prop = null;
          }
          obj4.integrationInstalled = prop;
          let prop1;
          if (integrationStatus != null) {
            prop1 = integrationStatus.bot_permissions_changed;
          }
          obj4.botPermissionsChanged = true === prop1;
          const result = conjurePreviewModes.requiresPermissionReview(obj4);
          let str14 = "publish";
          if (result) {
            str14 = "consent_then_publish";
          }
          const obj5 = {
            intent: str14,
            destination: null,
            upToDate: false,
            isUpdate: null,
            disabledReason: null,
            confirmReason: null,
          };
          let destination;
          if (null != null) {
            destination = null.destination;
          }
          if (destination == null) {
            destination = null;
          }
          obj5.destination = destination;
          obj5.isUpdate = "changes" === status.state && !tmp23;
          obj5.disabledReason = formatResult;
          let tmp40 = null;
          if (null == formatResult) {
            let str15 = input.guildName;
            let formatResult1 = null;
            if ("guild" === input.installScope) {
              formatResult1 = null;
              if (tmp42) {
                formatResult1 = null;
                if (false === tmp41) {
                  const intl14 = util.intl;
                  if (str15 == null) {
                    str15 = "";
                  }
                  const obj6 = { server: str15 };
                  formatResult1 = intl14.format(_modDef3827.eHYXFg, obj6);
                }
              }
            }
            tmp40 = formatResult1;
          }
          obj5.confirmReason = tmp40;
          if (null == null) {
            if (result) {
              let prop2;
              if (integrationStatus != null) {
                prop2 = integrationStatus.bot_permissions_changed;
              }
              if (true === prop2) {
                const obj7 = {};
                const merged1 = Object.assign(obj5);
                const intl17 = util.intl;
                obj7.label = intl17.string(_modDef3827["tUeY/h"]);
                obj7.action = "review_permissions";
                obj7.navigatesOnPublish = tmp45;
                return obj7;
              }
            }
            let update;
            if (null != null) {
              update = null.update;
            }
            if (update == null) {
              const intl15 = util.intl;
              update = intl15.string(_modDef3827.QesMDC);
            }
            const obj8 = {};
            const merged2 = Object.assign(obj5);
            if (!tmp38) {
              const intl16 = util.intl;
              update = intl16.string(_modDef3827["120EFN"]);
            }
            obj8.label = update;
            obj8.action = "publish";
            obj8.navigatesOnPublish = tmp45;
            return obj8;
          }
        } else if ("activity" === status2.surface) {
          let tmp25 = null == appChannelName2;
          if (tmp25) {
            tmp25 = true !== appChannelPending;
          }
          let tmp24 = tmp25;
        } else {
          tmp24 = "bot" === status2.surface;
          if (tmp24) {
            tmp24 = false === botInGuild;
          }
        }
      } else {
        if ("user" !== installScope) {
          if (null != guildName) {
            const intl = util.intl;
            const obj9 = { server: guildName };
            const formatToPlainStringResult = intl.formatToPlainString(_modDef3827.fTgw6C, obj9);
            if ("bot" === surface) {
              const obj11 = {
                update: null,
                open: null,
                destination: "guild",
                navigatesOnFirstPublish: true,
                navigatesOnUpdate: false,
              };
              const intl6 = util.intl;
              obj11.update = intl6.string(_modDef3827.JpDnbE);
              obj11.open = formatToPlainStringResult;
            } else if ("activity" === surface) {
              const obj13 = {
                update: null,
                open: null,
                destination: "channel",
                navigatesOnFirstPublish: true,
                navigatesOnUpdate: false,
              };
              const intl4 = util.intl;
              obj13.update = intl4.string(_modDef3827.QesMDC);
              let formatToPlainStringResult1 = formatToPlainStringResult;
              if (null != appChannelName) {
                const intl5 = util.intl;
                const obj14 = { channel: appChannelName };
                formatToPlainStringResult1 = intl5.formatToPlainString(_modDef3827.l9xGQD, obj14);
              }
              obj13.open = formatToPlainStringResult1;
            } else if ("automod" === surface) {
              const obj15 = {
                update: null,
                open: null,
                destination: "automod",
                navigatesOnFirstPublish: false,
                navigatesOnUpdate: false,
              };
              const intl2 = util.intl;
              obj15.update = intl2.string(_modDef3827.bwBMMn);
              const intl3 = util.intl;
              obj15.open = intl3.string(_modDef3827.KjbLum);
            }
          }
        }
        if ("bot" === surface) {
          const obj16 = {
            update: null,
            open: null,
            destination: "dm",
            navigatesOnFirstPublish: true,
            navigatesOnUpdate: false,
          };
          const intl11 = util.intl;
          obj16.update = intl11.string(_modDef3827.JpDnbE);
          const intl12 = util.intl;
          obj16.open = intl12.string(_modDef3827.NNIwRu);
        } else {
          if ("activity" === surface) {
            const obj17 = {
              update: null,
              open: null,
              destination: "launch",
              navigatesOnFirstPublish: false,
              navigatesOnUpdate: false,
            };
            const intl9 = util.intl;
            obj17.update = intl9.string(_modDef3827.QesMDC);
            const intl10 = util.intl;
            obj17.open = intl10.string(_modDef3827.iyQTsb);
          }
          const obj32 = {
            update: null,
            open: null,
            destination: "profile",
            navigatesOnFirstPublish: true,
            navigatesOnUpdate: true,
          };
          const intl7 = util.intl;
          obj32.update = intl7.string(_modDef3827["LUi/55"]);
          const intl8 = util.intl;
          obj32.open = intl8.string(_modDef3827.TXUK1g);
        }
      }
    }
    status = input.status;
  }
};
