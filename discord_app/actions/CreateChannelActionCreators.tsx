// === Module 9736: CreateChannelActionCreators ===

// Module 9736 (CreateChannelActionCreators)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TypeUtils from "TypeUtils" /* 1969 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import GuildTemplateTooltipActionCreatorsDefault from "GuildTemplateTooltipActionCreators" /* 7323 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

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
    let obj = permissionOverwrites(573);
    obj.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId, channelType: type });
    obj = { type, name: guildId.name, permission_overwrites: permissionOverwrites };
    let tmp4 = null != bitrate;
    if (tmp4) {
      tmp4 = bitrate !== closure_4;
    }
    if (tmp4) {
      obj.bitrate = bitrate;
    }
    let tmp6 = null != userLimit;
    if (tmp6) {
      tmp6 = userLimit > 0;
    }
    if (tmp6) {
      obj.user_limit = userLimit;
    }
    if (null != parentId) {
      obj.parent_id = parentId;
    }
    if (null != flags) {
      obj.flags = flags;
    }
    let tmp7 = null != availableTags;
    if (tmp7) {
      tmp7 = availableTags.length > 0;
    }
    if (tmp7) {
      obj.available_tags = availableTags.map((name) => ({ name: name.name, emoji_id: name.emojiId, emoji_name: name.emojiName, moderated: name.moderated }));
    }
    if (null != gameId) {
      obj.game_id = gameId;
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error2 = Error;
        const error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj.sku_id = skuId;
        obj.branch_id = guildId.branchId;
      }
    }
    if (type === constants.GUILD_APP) {
      if (null == applicationId) {
        const _Error = Error;
        const error1 = new Error("Unexpected missing application");
        throw error1;
      } else {
        obj.application_id = applicationId;
      }
    }
    const request = { url: closure_6.GUILD_CHANNELS(guildId), body: obj, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = {
      event: guildId(1250).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        const obj = { is_private: permissionOverwrites.length > 0, channel_id: null, channel_type: null };
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj.channel_id = id;
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj.channel_type = type;
        return obj.exact(obj);
      }
    };
    request.trackedActionData = obj;
    const tmpResult = permissionOverwrites(4753);
    request.rejectWithError = guildId(1272).rejectWithMigratedError();
    const obj6 = guildId(1272);
    return tmpResult.post(request).then((body) => {
      if (UserGuildSettingsStore.isOptInEnabled(guildId)) {
        const obj = { flags: constants.OPT_IN_ENABLED };
        const result = obj.updateChannelOverrideSettings(guildId, body.body.id, obj, NotificationSettingsUtils.NotificationLabels.OptedIn);
      }
      const result1 = GuildTemplateTooltipActionCreatorsDefault.checkGuildTemplateDirty(guildId);
      return body;
    }, (body) => {
      permissionOverwrites(dependencyMap[3]);
      const obj = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
      obj.dispatch(obj);
      throw body;
    });
  },
  createRoleSubscriptionTemplateChannel(guildId, name, type, topic) {
    const request = { url: timestampProducer.GUILD_CHANNELS(guildId), body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    let obj = { name, type, topic };
    request.body = obj;
    obj = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let obj = TypeUtils;
        let id;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        obj = { is_private: true, channel_id: id, channel_type: null };
        let type;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        obj.channel_type = type;
        return obj.exact(obj);
      }
    };
    request.trackedActionData = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.post(request);
  }
};