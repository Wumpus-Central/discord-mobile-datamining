// discord_app/actions/ChannelSettingsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ChannelSettingsStore from "../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";

require = fn;
function init(channelId, location, subsection) {
  const obj = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
  obj.dispatch(obj);
}
function open(channelId, location, subsection) {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      obj = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
      DispatcherDefault.dispatch(obj);
      let OVERVIEW = ChannelSettingsStore.getSection();
      if (OVERVIEW == null) {
        OVERVIEW = constants.OVERVIEW;
      }
      obj = { channelId, initialRouteName: OVERVIEW, source: "channel-settings-action-creators-open" };
      rootNavigationRef.navigate("sidebar", obj);
    }
  }
}
function close() {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  const obj = { type: "CHANNEL_SETTINGS_SET_SECTION", section };
  obj.dispatch(obj);
}
function selectPermissionOverwrite(overwriteId) {
  const obj = { type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId };
  obj.dispatch(obj);
}
function updateChannel(arg0) {
  ({
    name,
    type,
    topic,
    bitrate,
    userLimit,
    nsfw,
    flags,
    rateLimitPerUser,
    defaultThreadRateLimitPerUser,
    defaultAutoArchiveDuration,
    template,
    defaultReactionEmoji,
    rtcRegion,
    videoQualityMode,
    autoArchiveDuration,
    locked,
    invitable,
    availableTags,
    defaultSortOrder,
    defaultForumLayout,
    defaultTagSetting,
    iconEmoji,
    themeColor,
    applicationId,
  } = arg0);
  DispatcherDefault.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name,
    channelType: type,
    topic,
    bitrate,
    userLimit,
    nsfw,
    flags,
    rateLimitPerUser,
    defaultThreadRateLimitPerUser,
    defaultAutoArchiveDuration,
    template,
    defaultReactionEmoji,
    rtcRegion,
    videoQualityMode,
    autoArchiveDuration,
    locked,
    invitable,
    availableTags,
    defaultSortOrder,
    defaultForumLayout,
    defaultTagSetting,
    iconEmoji,
    themeColor,
    applicationId,
  });
}
function saveChannel() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _saveChannel(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          dependencyMap = tmp2;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          closure_130_10 = undefined;
          closure_130_11 = undefined;
          closure_130_12 = undefined;
          closure_130_13 = undefined;
          closure_130_14 = undefined;
          closure_130_15 = undefined;
          closure_130_16 = undefined;
          closure_130_17 = undefined;
          closure_130_18 = undefined;
          closure_130_19 = undefined;
          closure_130_20 = undefined;
          closure_130_21 = undefined;
          closure_130_22 = undefined;
          closure_130_23 = undefined;
          closure_130_24 = undefined;
          closure_130_25 = undefined;
          closure_130_26 = undefined;
          closure_130_0 = channelId;
          ({
            name: closure_130_1,
            type: closure_130_2,
            position: closure_130_3,
            topic: closure_130_4,
            bitrate: closure_130_5,
            userLimit: closure_130_6,
            nsfw: closure_130_7,
            flags: closure_130_8,
            permissionOverwrites: closure_130_9,
            rateLimitPerUser: closure_130_10,
            defaultThreadRateLimitPerUser: closure_130_11,
            defaultAutoArchiveDuration: closure_130_12,
            template: closure_130_13,
            defaultReactionEmoji: closure_130_14,
            rtcRegion: closure_130_15,
            videoQualityMode: closure_130_16,
            autoArchiveDuration: closure_130_17,
            locked: closure_130_18,
            invitable: closure_130_19,
            availableTags: closure_130_20,
            defaultSortOrder: closure_130_21,
            defaultForumLayout: closure_130_22,
            defaultTagSetting: closure_130_23,
            iconEmoji: closure_130_24,
            themeColor: closure_130_25,
            applicationId: closure_130_26,
          } = closure_1);
          let channel;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          channel = closure_131_5.getChannel(closure_130_0);
          closure_131_1(closure_131_2[4]).dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
          const obj10 = closure_131_1(closure_131_2[4]);
          c4 = 2;
          c5 = 1;
          const obj2 = {
            value: closure_131_1(closure_131_2[6]).unarchiveThreadIfNecessary(closure_130_0),
            done: false,
          };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        let HTTP = closure_131_0(closure_131_2[7]).HTTP;
        let then = HTTP.patch;
        let request = {
          url: closure_131_6.CHANNEL(closure_130_0),
          body: null,
          oldFormErrors: true,
          rejectWithError: null,
        };
        let obj4 = {
          name: closure_130_1,
          type: closure_130_2,
          position: closure_130_3,
          topic: closure_130_4,
          bitrate: closure_130_5,
          user_limit: closure_130_6,
          nsfw: closure_130_7,
          flags: closure_130_8,
          permission_overwrites: closure_130_9,
          rate_limit_per_user: closure_130_10,
          default_thread_rate_limit_per_user: closure_130_11,
          default_auto_archive_duration: closure_130_12,
          template: closure_130_13,
          rtc_region: closure_130_15,
          video_quality_mode: closure_130_16,
          auto_archive_duration: closure_130_17,
          locked: closure_130_18,
          invitable: closure_130_19,
          default_reaction_emoji: null,
          available_tags: null,
          default_sort_order: null,
          default_forum_layout: null,
          default_tag_setting: null,
          icon_emoji: null,
          theme_color: null,
          application_id: null,
        };
        if (null != closure_130_14) {
          let emojiId;
          if (closure_130_14 != null) {
            emojiId = closure_130_14.emojiId;
          }
          obj = { emoji_id: emojiId, emoji_name: null };
          let emojiName;
          if (closure_130_14 != null) {
            emojiName = closure_130_14.emojiName;
          }
          obj.emoji_name = emojiName;
          let tmp8 = obj;
        } else if (null === closure_130_14) {
          tmp8 = null;
        }
        obj4.default_reaction_emoji = tmp8;
        let mapped;
        if (closure_130_20 != null) {
          mapped = arr.map((id) => ({
            id: id.id,
            name: id.name,
            emoji_id: id.emojiId,
            emoji_name: id.emojiName,
            moderated: id.moderated,
          }));
        }
        obj4.available_tags = mapped;
        obj4.default_sort_order = closure_130_21;
        obj4.default_forum_layout = closure_130_22;
        obj4.default_tag_setting = closure_130_23;
        if (null != closure_130_24) {
          const obj5 = { id: closure_130_24.id, name: closure_130_24.name };
          let tmp22 = obj5;
        } else if (null === closure_130_24) {
          tmp22 = null;
        }
        obj4.icon_emoji = tmp22;
        obj4.theme_color = closure_130_25;
        obj4.application_id = closure_130_26;
        request.body = obj4;
        obj4 = closure_131_0(closure_131_2[7]);
        request.rejectWithError = obj4.rejectWithMigratedError();
        HTTP = then(request);
        then = HTTP.then;
        request = then(
          (arg0) => {
            closure_1(573);
            const obj = { type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId };
            obj.dispatch(obj);
            guildId = undefined;
            if (guildId != null) {
              guildId = guildId.getGuildId();
            }
            let tmp5 = null == guildId;
            if (!tmp5) {
              let isThreadResult;
              if (guildId != null) {
                isThreadResult = obj4.isThread();
              }
              tmp5 = isThreadResult;
              obj4 = guildId;
            }
            if (!tmp5) {
              const result = closure_1(7323).checkGuildTemplateDirty(guildId);
              const tmpResult = closure_1(7323);
            }
            return arg0;
          },
          (body) => {
            closure_1_1(573);
            const obj = { type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body };
            obj.dispatch(obj);
            return body;
          },
        );
        c5 = 3;
        arr = closure_130_20;
      }
    } catch (tmp32) {
      c5 = tmp;
      throw tmp32;
    }
  }
};
function deleteChannel() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _deleteChannel(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp2;
          let channel2;
          closure_129_1 = undefined;
          channel2 = channel.getChannel(closure_0);
          const HTTP = HTTPUtils.HTTP;
          let obj1 = { url: timestampProducer.CHANNEL(closure_0), oldFormErrors: true, rejectWithError: true };
          c3 = 1;
          c4 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        let guildId;
        if (channel2 != null) {
          guildId = channel2.getGuildId();
        }
        closure_129_1 = guildId;
        let tmp10 = null == closure_129_1;
        if (!tmp10) {
          obj = channel2;
          let isThreadResult;
          if (channel2 != null) {
            isThreadResult = obj.isThread();
          }
          tmp10 = isThreadResult;
        }
        if (!tmp10) {
          obj1 = closure_130_1(closure_130_2[8]);
          const result = obj1.checkGuildTemplateDirty(closure_129_1);
        }
        closure_130_8();
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
};
function updateVoiceChannelStatus(arg0, status) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: timestampProducer.UPDATE_VOICE_CHANNEL_STATUS(arg0),
    body: { status },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.put(request);
}
function removeLinkedLobby(arg0) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.del({ url: timestampProducer.CHANNEL_LINKED_LOBBY(arg0), rejectWithError: true });
}
const Constants = fn(1074);
({ Endpoints: metroRequire, Layers, ChannelSettingsSections: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

export default {
  init,
  open,
  close,
  setSection,
  selectPermissionOverwrite,
  updateChannel,
  saveChannel,
  deleteChannel,
  updateVoiceChannelStatus,
  removeLinkedLobby,
};
export { init };
export { open };
export { close };
export { setSection };
export { selectPermissionOverwrite };
export { updateChannel };
export { saveChannel };
export { deleteChannel };
export { updateVoiceChannelStatus };
export { removeLinkedLobby };
