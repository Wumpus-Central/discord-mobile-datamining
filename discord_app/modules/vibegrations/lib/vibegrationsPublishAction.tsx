// discord_app/modules/vibegrations/lib/vibegrationsPublishAction.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import vibegrationsPreviewModes from "vibegrationsPreviewModes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishAction.tsx");

export const resolveVibegrationsPublishAction = function resolveVibegrationsPublishAction(input) {
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
    if (null == surface) {
      const status2 = input.status;
      let tmp21 = "guild" === input.installScope;
      ({ appChannelName: appChannelName2, appChannelPending, botInGuild } = input);
      if (tmp21) {
        tmp21 = null != status2;
      }
      if (tmp21) {
        tmp21 = "unpublished" !== status2.state;
      }
      if (!tmp21) {
        if (null != null) {
          if ("up_to_date" === status.state) {
            if (!tmp21) {
              ({ open: obj9.label, destination: obj9.destination } = null);
              return {
                label: null,
                intent: "open",
                action: "open",
                destination: null,
                navigatesOnPublish: false,
                upToDate: true,
                isUpdate: false,
                disabledReason: null,
              };
            }
          }
        }
        ({ guildName: guildName2, usesNativeAppChannels } = input);
        if ("guild" !== input.installScope) {
          const obj3 = { installScope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
          let preview_ready1;
          if (integrationStatus != null) {
            preview_ready1 = integrationStatus.preview_ready;
          }
          obj3.previewReady = true === preview_ready1;
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.integration_installed;
          }
          if (prop == null) {
            prop = null;
          }
          obj3.integrationInstalled = prop;
          let prop1;
          if (integrationStatus != null) {
            prop1 = integrationStatus.bot_permissions_changed;
          }
          obj3.botPermissionsChanged = true === prop1;
          const result = vibegrationsPreviewModes.requiresPermissionReview(obj3);
          let str12 = "publish";
          if (result) {
            str12 = "consent_then_publish";
          }
          const obj4 = { intent: str12, destination: null, upToDate: false, isUpdate: null, disabledReason: null };
          let destination;
          if (null != null) {
            destination = null.destination;
          }
          if (destination == null) {
            destination = null;
          }
          obj4.destination = destination;
          obj4.isUpdate = "changes" === status.state && !tmp21;
          obj4.disabledReason = null;
          if (null == null) {
            if (result) {
              let prop2;
              if (integrationStatus != null) {
                prop2 = integrationStatus.bot_permissions_changed;
              }
              if (true === prop2) {
                const obj5 = {};
                const merged = Object.assign(obj4);
                const intl18 = util.intl;
                obj5.label = intl18.string(_modDef3723.zFcLHP);
                obj5.action = "review_permissions";
                obj5.navigatesOnPublish = tmp48;
                return obj5;
              }
            }
            let update;
            if (null != null) {
              update = null.update;
            }
            if (update == null) {
              const intl16 = util.intl;
              update = intl16.string(_modDef3723["91710b"]);
            }
            const obj6 = {};
            const merged1 = Object.assign(obj4);
            if (!tmp46) {
              const intl17 = util.intl;
              update = intl17.string(_modDef3723["5gU57O"]);
            }
            obj6.label = update;
            obj6.action = "publish";
            obj6.navigatesOnPublish = tmp48;
            return obj6;
          }
        } else {
          if (usesNativeAppChannels) {
            usesNativeAppChannels = false === tmp26;
          }
          if (guildName2 == null) {
            guildName2 = "";
          }
          const obj7 = { server: guildName2 };
          if (false !== tmp25) {
            if (tmp28) {
              const intl14 = util.intl;
              let formatToPlainStringResult = intl14.formatToPlainString(_modDef3723.x71ku3, obj7);
            } else {
              formatToPlainStringResult = null;
              if (usesNativeAppChannels) {
                const intl13 = util.intl;
                formatToPlainStringResult = intl13.formatToPlainString(_modDef3723["53xiNu"], obj7);
              }
            }
          }
          const intl15 = util.intl;
          formatToPlainStringResult = intl15.formatToPlainString(_modDef3723.qG1SMK, obj7);
        }
      } else if ("activity" === status2.surface) {
        let tmp23 = null == appChannelName2;
        if (tmp23) {
          tmp23 = true !== appChannelPending;
        }
        let tmp22 = tmp23;
      } else {
        tmp22 = "bot" === status2.surface;
        if (tmp22) {
          tmp22 = false === botInGuild;
        }
      }
    } else {
      if ("user" !== installScope) {
        if (null != guildName) {
          const intl = util.intl;
          const obj = { server: guildName };
          const formatToPlainStringResult1 = intl.formatToPlainString(_modDef3723.jnwfvk, obj);
          if ("bot" === surface) {
            const obj8 = {
              update: null,
              open: null,
              destination: "guild",
              navigatesOnFirstPublish: true,
              navigatesOnUpdate: false,
            };
            const intl6 = util.intl;
            obj8.update = intl6.string(_modDef3723.o046LG);
            obj8.open = formatToPlainStringResult1;
          } else if ("activity" === surface) {
            const obj10 = {
              update: null,
              open: null,
              destination: "channel",
              navigatesOnFirstPublish: true,
              navigatesOnUpdate: false,
            };
            const intl4 = util.intl;
            obj10.update = intl4.string(_modDef3723["91710b"]);
            let formatToPlainStringResult2 = formatToPlainStringResult1;
            if (null != appChannelName) {
              const intl5 = util.intl;
              const obj12 = { channel: appChannelName };
              formatToPlainStringResult2 = intl5.formatToPlainString(_modDef3723.Nfs5wk, obj12);
            }
            obj10.open = formatToPlainStringResult2;
          } else if ("automod" === surface) {
            const obj13 = {
              update: null,
              open: null,
              destination: "automod",
              navigatesOnFirstPublish: false,
              navigatesOnUpdate: false,
            };
            const intl2 = util.intl;
            obj13.update = intl2.string(_modDef3723.Qn0VCU);
            const intl3 = util.intl;
            obj13.open = intl3.string(_modDef3723.j8541Y);
          }
        }
      }
      if ("bot" === surface) {
        const obj14 = {
          update: null,
          open: null,
          destination: "dm",
          navigatesOnFirstPublish: true,
          navigatesOnUpdate: false,
        };
        const intl11 = util.intl;
        obj14.update = intl11.string(_modDef3723.o046LG);
        const intl12 = util.intl;
        obj14.open = intl12.string(_modDef3723.BceUWe);
      } else {
        if ("activity" === surface) {
          const obj15 = {
            update: null,
            open: null,
            destination: "launch",
            navigatesOnFirstPublish: false,
            navigatesOnUpdate: false,
          };
          const intl9 = util.intl;
          obj15.update = intl9.string(_modDef3723["91710b"]);
          const intl10 = util.intl;
          obj15.open = intl10.string(_modDef3723.c4LI5t);
        }
        const obj28 = {
          update: null,
          open: null,
          destination: "profile",
          navigatesOnFirstPublish: true,
          navigatesOnUpdate: true,
        };
        const intl7 = util.intl;
        obj28.update = intl7.string(_modDef3723["S+XFJ2"]);
        const intl8 = util.intl;
        obj28.open = intl8.string(_modDef3723.wK3FYl);
      }
    }
  }
};
