// === Module 9648: ChannelSettingsActionCreators ===

// Module 9648 (ChannelSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 9649 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
function init(channelId, location, subsection) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection });
}
function open(channelId, location, subsection) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const obj2 = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
      DispatcherDefault.dispatch(obj2);
      let OVERVIEW = ChannelSettingsStore.getSection();
      if (OVERVIEW == null) {
        OVERVIEW = constants.OVERVIEW;
      }
      const obj4 = { channelId, initialRouteName: OVERVIEW, source: "channel-settings-action-creators-open" };
      rootNavigationRef.navigate("sidebar", obj4);
    }
  }
}
function close() {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_SET_SECTION", section });
}
function selectPermissionOverwrite(overwriteId) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId });
}
function updateChannel(arg0) {
  ({ name, type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor, applicationId } = arg0);
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_UPDATE", name, channelType: type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor, applicationId });
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
let closure_9 = async function _saveChannel(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_7 = tmp5;
          closure_6 = tmp2;
          closure_134_1 = undefined;
          closure_134_2 = undefined;
          closure_134_3 = undefined;
          closure_134_4 = undefined;
          closure_134_5 = undefined;
          closure_134_6 = undefined;
          closure_134_7 = undefined;
          closure_134_8 = undefined;
          closure_134_9 = undefined;
          closure_134_10 = undefined;
          closure_134_11 = undefined;
          closure_134_12 = undefined;
          closure_134_13 = undefined;
          closure_134_14 = undefined;
          closure_134_15 = undefined;
          closure_134_16 = undefined;
          closure_134_17 = undefined;
          closure_134_18 = undefined;
          closure_134_19 = undefined;
          closure_134_20 = undefined;
          closure_134_21 = undefined;
          closure_134_22 = undefined;
          closure_134_23 = undefined;
          closure_134_24 = undefined;
          closure_134_25 = undefined;
          closure_134_26 = undefined;
          closure_134_0 = channelId;
          ({ name: closure_134_1, type: closure_134_2, position: closure_134_3, topic: closure_134_4, bitrate: closure_134_5, userLimit: closure_134_6, nsfw: closure_134_7, flags: closure_134_8, permissionOverwrites: closure_134_9, rateLimitPerUser: closure_134_10, defaultThreadRateLimitPerUser: closure_134_11, defaultAutoArchiveDuration: closure_134_12, template: closure_134_13, defaultReactionEmoji: closure_134_14, rtcRegion: closure_134_15, videoQualityMode: closure_134_16, autoArchiveDuration: closure_134_17, locked: closure_134_18, invitable: closure_134_19, availableTags: closure_134_20, defaultSortOrder: closure_134_21, defaultForumLayout: closure_134_22, defaultTagSetting: closure_134_23, iconEmoji: closure_134_24, themeColor: closure_134_25, applicationId: closure_134_26 } = closure_1);
          let channel;
          c8 = 1;
          c9 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          channel = closure_135_5.getChannel(closure_134_0);
          if (null != channel) {
            if (closure_134_2 === channel.type) {
              closure_134_2 = undefined;
            }
            c2 = closure_134_4;
            if (closure_134_4 == null) {
              c2 = "";
            }
            const topic = channel.topic;
            c4 = topic;
            if (topic == null) {
              c4 = "";
            }
            if (tmp36 === c4) {
              closure_134_4 = undefined;
            }
            c3 = closure_134_26;
            if (closure_134_26 == null) {
              c3 = null;
            }
            const application_id = channel.application_id;
            c5 = application_id;
            if (application_id == null) {
              c5 = null;
            }
            if (tmp43 === c5) {
              closure_134_26 = undefined;
            }
            tmp36 = c2;
            tmp43 = c3;
          }
          let isGameInvitesChannelResult;
          if (channel != null) {
            isGameInvitesChannelResult = obj6.isGameInvitesChannel();
          }
          if (isGameInvitesChannelResult) {
            closure_134_12 = undefined;
          }
          closure_135_1(closure_135_2[4]).dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
          obj6 = channel;
          const obj7 = closure_135_1(closure_135_2[4]);
          c8 = 2;
          c9 = 1;
          const obj5 = { value: closure_135_1(closure_135_2[6]).unarchiveThreadIfNecessary(closure_134_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        let HTTP = closure_135_0(closure_135_2[7]).HTTP;
        let then = HTTP.patch;
        let request = { url: closure_135_6.CHANNEL(closure_134_0), body: null, oldFormErrors: true, rejectWithError: null };
        let obj10 = { name: closure_134_1, type: closure_134_2, position: closure_134_3, topic: closure_134_4, bitrate: closure_134_5, user_limit: closure_134_6, nsfw: closure_134_7, flags: closure_134_8, permission_overwrites: closure_134_9, rate_limit_per_user: closure_134_10, default_thread_rate_limit_per_user: closure_134_11, default_auto_archive_duration: closure_134_12, template: closure_134_13, rtc_region: closure_134_15, video_quality_mode: closure_134_16, auto_archive_duration: closure_134_17, locked: closure_134_18, invitable: closure_134_19, default_reaction_emoji: null, available_tags: null, default_sort_order: null, default_forum_layout: null, default_tag_setting: null, icon_emoji: null, theme_color: null, application_id: null };
        if (null != closure_134_14) {
          let emojiId;
          if (closure_134_14 != null) {
            emojiId = closure_134_14.emojiId;
          }
          const obj = { emoji_id: emojiId, emoji_name: null };
          let emojiName;
          if (closure_134_14 != null) {
            emojiName = closure_134_14.emojiName;
          }
          obj.emoji_name = emojiName;
          let tmp8 = obj;
        } else if (null === closure_134_14) {
          tmp8 = null;
        }
        obj10.default_reaction_emoji = tmp8;
        let mapped;
        if (closure_134_20 != null) {
          mapped = arr.map((id) => ({ id: id.id, name: id.name, emoji_id: id.emojiId, emoji_name: id.emojiName, moderated: id.moderated }));
        }
        obj10.available_tags = mapped;
        obj10.default_sort_order = closure_134_21;
        obj10.default_forum_layout = closure_134_22;
        obj10.default_tag_setting = closure_134_23;
        if (null != closure_134_24) {
          const obj11 = { id: closure_134_24.id, name: closure_134_24.name };
          let tmp22 = obj11;
        } else if (null === closure_134_24) {
          tmp22 = null;
        }
        obj10.icon_emoji = tmp22;
        obj10.theme_color = closure_134_25;
        obj10.application_id = closure_134_26;
        request.body = obj10;
        obj10 = closure_135_0(closure_135_2[7]);
        request.rejectWithError = obj10.rejectWithMigratedError();
        HTTP = then(request);
        then = HTTP.then;
        request = then((arg0) => {
          closure_1(584).dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId });
          let guildId;
          if (closure_1_27 != null) {
            guildId = closure_1_27.getGuildId();
          }
          let tmp5 = null == guildId;
          if (!tmp5) {
            let isThreadResult;
            if (closure_1_27 != null) {
              isThreadResult = closure_1_27.isThread();
            }
            tmp5 = isThreadResult;
          }
          if (!tmp5) {
            const result = closure_1(7018).checkGuildTemplateDirty(guildId);
            const tmpResult = closure_1(7018);
          }
          return arg0;
        }, (body) => {
          closure_1_1(584).dispatch({ type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body });
          return body;
        });
        c9 = 3;
        arr = closure_134_20;
      }
    } catch (tmp57) {
      c9 = tmp;
      throw tmp57;
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
let closure_10 = async function _deleteChannel(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp2;
          let channel2;
          closure_129_1 = undefined;
          channel2 = channel.getChannel(closure_0);
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: timestampProducer.CHANNEL(closure_0), oldFormErrors: true, rejectWithError: true };
          c3 = 1;
          c4 = 1;
          const obj6 = { value: HTTP.del(obj5), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        let guildId;
        if (channel2 != null) {
          guildId = channel2.getGuildId();
        }
        closure_129_1 = guildId;
        let tmp10 = null == closure_129_1;
        if (!tmp10) {
          let isThreadResult;
          if (channel2 != null) {
            isThreadResult = obj.isThread();
          }
          tmp10 = isThreadResult;
          obj = channel2;
        }
        if (!tmp10) {
          const result = closure_130_1(closure_130_2[8]).checkGuildTemplateDirty(closure_129_1);
          const obj2 = closure_130_1(closure_130_2[8]);
        }
        closure_130_8();
        c4 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
};
function updateVoiceChannelStatus(arg0, status) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: timestampProducer.UPDATE_VOICE_CHANNEL_STATUS(arg0), body: { status }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.put(request);
}
function removeLinkedLobby(arg0) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.del({ url: timestampProducer.CHANNEL_LINKED_LOBBY(arg0), rejectWithError: true });
}
const Constants = fn(1085);
({ Endpoints: metroRequire, Layers, ChannelSettingsSections: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

export default { init, open, close, setSection, selectPermissionOverwrite, updateChannel, saveChannel, deleteChannel, updateVoiceChannelStatus, removeLinkedLobby };
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