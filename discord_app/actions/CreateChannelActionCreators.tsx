// === Module 9887: CreateChannelActionCreators ===

// Module 9887 (CreateChannelActionCreators)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TypeUtils from "TypeUtils" /* 1970 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4833 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7228 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7233 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 7437 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4821 */;

require = fn;
const Constants = fn(1074);
({ BITRATE_DEFAULT: closure_4, ChannelTypes: hasOwnProperty, Endpoints: metroRequire } = Constants);
let closure_7 = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default {
  createChannel(guildId) {
    guildId = guildId.guildId;
    ({ type, permissionOverwrites } = guildId);
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    ({ bitrate, userLimit, parentId, skuId, applicationId, flags, availableTags, gameId } = guildId);
    permissionOverwrites(573).dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId, channelType: type });
    let obj2 = { type, name: guildId.name, permission_overwrites: permissionOverwrites };
    let tmp4 = null != bitrate;
    if (tmp4) {
      tmp4 = bitrate !== closure_4;
    }
    if (tmp4) {
      obj2.bitrate = bitrate;
    }
    let tmp6 = null != userLimit;
    if (tmp6) {
      tmp6 = userLimit > 0;
    }
    if (tmp6) {
      obj2.user_limit = userLimit;
    }
    if (null != parentId) {
      obj2.parent_id = parentId;
    }
    if (null != flags) {
      obj2.flags = flags;
    }
    let tmp7 = null != availableTags;
    if (tmp7) {
      tmp7 = availableTags.length > 0;
    }
    if (tmp7) {
      obj2.available_tags = availableTags.map((name) => ({ name: name.name, emoji_id: name.emojiId, emoji_name: name.emojiName, moderated: name.moderated }));
    }
    if (null != gameId) {
      obj2.game_id = gameId;
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error2 = Error;
        const error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj2.sku_id = skuId;
        obj2.branch_id = guildId.branchId;
      }
    }
    if (type === constants.GUILD_APP) {
      if (null == applicationId) {
        const _Error = Error;
        const error1 = new Error("Unexpected missing application");
        throw error1;
      } else {
        obj2.application_id = applicationId;
      }
    }
    let obj = permissionOverwrites(573);
    const request = { url: closure_6.GUILD_CHANNELS(guildId), body: obj2, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const tmpResult = permissionOverwrites(4833);
    request.trackedActionData = {
      event: guildId(1249).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        const obj2 = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj2.channel_id = id;
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj2.channel_type = type;
        return TypeUtils.exact(obj2);
      }
    };
    const obj3 = {
      event: guildId(1249).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        const obj2 = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj2.channel_id = id;
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj2.channel_type = type;
        return TypeUtils.exact(obj2);
      }
    };
    request.rejectWithError = guildId(1271).rejectWithMigratedError();
    const obj6 = guildId(1271);
    return tmpResult.post(request).then((body) => {
      if (UserGuildSettingsStore.isOptInEnabled(guildId)) {
        const obj = NotificationSettingsModalActionCreatorsDefault;
        const obj2 = { flags: constants.OPT_IN_ENABLED };
        const result = obj.updateChannelOverrideSettings(guildId, body.body.id, obj2, NotificationSettingsUtils.NotificationLabels.OptedIn);
      }
      const result1 = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(guildId);
      return body;
    }, (body) => {
      permissionOverwrites(dependencyMap[3]).dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body });
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(guildId, name, type, topic) {
    const request = { url: timestampProducer.GUILD_CHANNELS(guildId), body: { name, type, topic }, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj = TrackedHTTPUtilsDefault;
    let obj2 = { name, type, topic };
    request.trackedActionData = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        const obj2 = { is_private: true, channel_id: id, channel_type: null };
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj2.channel_type = type;
        return TypeUtils.exact(obj2);
      }
    };
    const obj3 = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        const obj2 = { is_private: true, channel_id: id, channel_type: null };
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj2.channel_type = type;
        return TypeUtils.exact(obj2);
      }
    };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.post(request);
  }
};