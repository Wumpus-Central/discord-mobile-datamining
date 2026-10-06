// discord_app/actions/CreateChannelActionCreators.tsx
import UserSettingsConstants from "../modules/user_settings/UserSettingsConstants.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import NotificationSettingsUtils from "../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators.tsx";
import GuildTemplateTooltipActionCreatorsDefault from "../modules/guild_templates/GuildTemplateTooltipActionCreators.tsx";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
({ BITRATE_DEFAULT: closure_4, ChannelTypes: hasOwnProperty, Endpoints: metroRequire } = Constants);
let closure_7 = UserSettingsConstants.ChannelNotificationSettingsFlags;
let obj = {
  createChannel(guildId) {
    let applicationId;
    let availableTags;
    let bitrate;
    let flags;
    let gameId;
    let obj3;
    let obj5;
    let parentId;
    let permissionOverwrites;
    let skuId;
    let type;
    let userLimit;
    guildId = guildId.guildId;
    ({ type, permissionOverwrites } = guildId);
    const name = guildId.name;
    if (permissionOverwrites === undefined) {
      permissionOverwrites = [];
    }
    ({ bitrate, userLimit, parentId, skuId, applicationId, flags, availableTags, gameId } = guildId);
    const branchId = guildId.branchId;
    const tmp = permissionOverwrites;
    let obj = permissionOverwrites(584);
    obj.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId, channelType: type });
    let obj2 = { type, name, permission_overwrites: permissionOverwrites };
    const tmp4 = null != bitrate && bitrate !== closure_4;
    if (tmp4) {
      obj2.bitrate = bitrate;
    }
    const tmp6 = null != userLimit && userLimit > 0;
    if (tmp6) {
      obj2.user_limit = userLimit;
    }
    if (null != parentId) {
      obj2.parent_id = parentId;
    }
    if (null != flags) {
      obj2.flags = flags;
    }
    const tmp7 = null != availableTags && availableTags.length > 0;
    if (tmp7) {
      obj2.available_tags = availableTags.map((name) => ({
        name: name.name,
        emoji_id: name.emojiId,
        emoji_name: name.emojiName,
        moderated: name.moderated,
      }));
    }
    if (null != gameId) {
      obj2.game_id = gameId;
    }
    if (type === constants.GUILD_STORE) {
      if (null == skuId) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Unexpected missing SKU");
        throw error;
      } else {
        obj2.sku_id = skuId;
        obj2.branch_id = branchId;
      }
    }
    if (type === constants.GUILD_APP) {
      if (null == applicationId) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error1 = new Error("Unexpected missing application");
        throw error1;
      } else {
        obj2.application_id = applicationId;
      }
    }
    const tmpResult = tmp(5089);
    const request = {
      url: closure_6.GUILD_CHANNELS(guildId),
      body: obj2,
      oldFormErrors: true,
      trackedActionData: obj3,
      rejectWithError: obj5.rejectWithMigratedError(),
    };
    const post = tmpResult.post;
    obj3 = {
      event: guildId(1260).NetworkActionNames.CHANNEL_CREATE,
      properties(body) {
        let id;
        let type;
        const obj = { is_private: permissionOverwrites.length > 0, channel_id: id, channel_type: type };
        id = undefined;
        const exact = TypeUtils.exact;
        TypeUtils;
        if (body != null) {
          body = body.body;
          if (body != null) {
            id = body.id;
          }
        }
        type = undefined;
        if (body != null) {
          const body2 = body.body;
          if (body2 != null) {
            type = body2.type;
          }
        }
        return exact(obj);
      },
    };
    obj5 = guildId(1282);
    const postResult = post(request);
    return postResult.then(
      (body) => {
        let obj2;
        if (UserGuildSettingsStore.isOptInEnabled(guildId)) {
          const obj = {
            guildId,
            channelId: body.body.id,
            settings: obj2,
            label: NotificationSettingsUtils.NotificationLabels.OptedIn,
          };
          obj2 = { flags: constants.OPT_IN_ENABLED };
          const updateChannelOverrideSettings =
            NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
          NotificationSettingsModalActionCreatorsDefault;
          const result = updateChannelOverrideSettings(obj);
        }
        const obj3 = GuildTemplateTooltipActionCreatorsDefault;
        const result1 = obj3.checkGuildTemplateDirty(guildId);
        return body;
      },
      (body) => {
        const obj = permissionOverwrites(dependencyMap[3]);
        const obj2 = { type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: body.body };
        obj.dispatch(obj2);
        throw body;
      },
    );
  },
  createRoleSubscriptionTemplateChannel(guildId, name, type, topic) {
    let obj;
    let obj4;
    function properties(body) {
      let type;
      let id;
      const exact = TypeUtils.exact;
      TypeUtils;
      if (body != null) {
        body = body.body;
        if (body != null) {
          id = body.id;
        }
      }
      const obj = { is_private: true, channel_id: id, channel_type: type };
      type = undefined;
      if (body != null) {
        const body2 = body.body;
        if (body2 != null) {
          type = body2.type;
        }
      }
      return exact(obj);
    }
    const tmp = TrackedHTTPUtilsDefault;
    const request = {
      url: metroRequire.GUILD_CHANNELS(guildId),
      body: obj,
      oldFormErrors: true,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.CHANNEL_CREATE, properties },
      rejectWithError: obj4.rejectWithMigratedError(),
    };
    const post = tmp.post;
    obj = { name, type, topic };
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.CHANNEL_CREATE, properties });
    obj4 = HTTPUtils;
    return post(request);
  },
};
let result = size.fileFinishedImporting("actions/CreateChannelActionCreators.tsx");

export default obj;
