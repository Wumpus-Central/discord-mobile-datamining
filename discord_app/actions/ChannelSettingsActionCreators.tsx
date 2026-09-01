// === Module 8752: init ===

// Module 8752 (init)
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "normalizeChannelPropertyForCompare" /* 8753 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import ME from "ME" /* 676 */;

require = arg1;
function init(channelId, location, subsection) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SETTINGS_INIT", channelId, location, subsection };
  obj.dispatch(obj);
}
function open(arg0, arg1, arg2) {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      obj = { type: "CHANNEL_SETTINGS_INIT", channelId: null, location: null, subsection: null };
      obj[1] = arg0;
      obj[2] = arg1;
      obj[3] = arg2;
      dispatcherDefault.dispatch(obj);
      let OVERVIEW = section.getSection();
      if (OVERVIEW == null) {
        OVERVIEW = constants.OVERVIEW;
      }
      obj = { channelId: null, initialRouteName: null, source: "channel-settings-action-creators-open" };
      obj[0] = arg0;
      obj[1] = OVERVIEW;
      rootNavigationRef.navigate("sidebar", obj);
      const obj3 = dispatcherDefault;
    }
  }
}
function close() {
  dispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function setSection(section) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SETTINGS_SET_SECTION", section };
  obj.dispatch(obj);
}
function selectPermissionOverwrite(overwriteId) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SETTINGS_OVERWRITE_SELECT", overwriteId };
  obj.dispatch(obj);
}
function updateChannel(arg0) {
  ({ name, type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor } = arg0);
  dispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_UPDATE", name, channelType: type, topic, bitrate, userLimit, nsfw, flags, rateLimitPerUser, defaultThreadRateLimitPerUser, defaultAutoArchiveDuration, template, defaultReactionEmoji, rtcRegion, videoQualityMode, autoArchiveDuration, locked, invitable, availableTags, defaultSortOrder, defaultForumLayout, defaultTagSetting, iconEmoji, themeColor });
}
function saveChannel(id, arg1) {
  const self = this;
  const apply = _saveChannel.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveChannel() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0, arg1) {
      if (channel === 2) {
        channel = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          channel = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp5;
              dependencyMap = tmp2;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              channel = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              c12 = undefined;
              c13 = undefined;
              c14 = undefined;
              c15 = undefined;
              c16 = undefined;
              c17 = undefined;
              c18 = undefined;
              c19 = undefined;
              c20 = undefined;
              c21 = undefined;
              c22 = undefined;
              c23 = undefined;
              let user;
              c25 = undefined;
              ({ name: c1, type: c2, position: c3, topic: c4, bitrate: c5, userLimit: c6, nsfw: c7, flags: c8, permissionOverwrites: c9, rateLimitPerUser: c10, defaultThreadRateLimitPerUser: c11, defaultAutoArchiveDuration: c12, template: c13, defaultReactionEmoji: c14, rtcRegion: c15, videoQualityMode: c16, autoArchiveDuration: c17, locked: c18, invitable: c19, availableTags: c20, defaultSortOrder: c21, defaultForumLayout: c22, defaultTagSetting: c23, iconEmoji: c24, themeColor: c25 } = c1);
              let channel2;
              c4 = 1;
              channel = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              channel2 = channel.getChannel(callback);
              callback2(closure_1_2[4]).dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" });
              const obj10 = callback2(closure_1_2[4]);
              c4 = 2;
              channel = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback2(closure_1_2[6]).unarchiveThreadIfNecessary(callback);
              return obj2;
            }
          } else if (arg0 === 1) {
            channel = 3;
            throw arg1;
          } else if (arg0 === 2) {
            channel = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let HTTP = callback(530).HTTP;
            let then = HTTP.patch;
            let obj4 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
            obj4[0] = c6.CHANNEL(callback);
            let obj5 = { name: null, type: null, position: null, topic: null, bitrate: null, user_limit: null, nsfw: null, flags: null, permission_overwrites: null, rate_limit_per_user: null, default_thread_rate_limit_per_user: null, default_auto_archive_duration: null, template: null, rtc_region: null, video_quality_mode: null, auto_archive_duration: null, locked: null, invitable: null, default_reaction_emoji: null, available_tags: null, default_sort_order: null, default_forum_layout: null, default_tag_setting: null, icon_emoji: null, theme_color: null };
            obj5[0] = c1;
            obj5[1] = dependencyMap;
            obj5[2] = c3;
            obj5[3] = c4;
            obj5[4] = channel;
            obj5[5] = c6;
            obj5[6] = c7;
            obj5[7] = c8;
            obj5[8] = c9;
            obj5[9] = c10;
            obj5[10] = c11;
            obj5[11] = c12;
            obj5[12] = c13;
            obj5[13] = c15;
            obj5[14] = c16;
            obj5[15] = c17;
            obj5[16] = c18;
            obj5[17] = c19;
            if (null != c14) {
              let emojiId;
              if (c14 != null) {
                emojiId = c14.emojiId;
              }
              obj = { emoji_id: null, emoji_name: null };
              obj[0] = emojiId;
              let emojiName;
              if (c14 != null) {
                emojiName = c14.emojiName;
              }
              obj[1] = emojiName;
              let tmp8 = obj;
            } else if (null === c14) {
              tmp8 = null;
            }
            obj5[18] = tmp8;
            let mapped;
            if (c20 != null) {
              mapped = arr.map((id) => ({ id: id.id, name: id.name, emoji_id: id.emojiId, emoji_name: id.emojiName, moderated: id.moderated }));
            }
            obj5[19] = mapped;
            obj5[20] = c21;
            obj5[21] = c22;
            obj5[22] = c23;
            if (null != user) {
              const obj6 = { id: null, name: null };
              obj6[0] = user.id;
              obj6[1] = user.name;
              let tmp22 = obj6;
            } else if (null === user) {
              tmp22 = null;
            }
            obj5[23] = tmp22;
            obj5[24] = c25;
            obj4[1] = obj5;
            obj5 = callback(530);
            obj4[3] = obj5.rejectWithMigratedError();
            HTTP = then(obj4);
            then = HTTP.then;
            obj4 = then((arg0) => {
              let obj = _undefined(_undefined2[4]);
              obj = { type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS", channelId: closure_0 };
              obj.dispatch(obj);
              let guildId;
              if (closure_26 != null) {
                guildId = closure_26.getGuildId();
              }
              let tmp5 = null == guildId;
              if (!tmp5) {
                let isThreadResult;
                if (closure_26 != null) {
                  isThreadResult = obj4.isThread();
                }
                tmp5 = isThreadResult;
                obj4 = closure_26;
              }
              if (!tmp5) {
                const result = _undefined(_undefined2[8]).checkGuildTemplateDirty(guildId);
                const tmpResult = _undefined(_undefined2[8]);
              }
              return arg0;
            }, (body) => {
              let obj = _undefined(_undefined2[4]);
              obj = { type: "CHANNEL_SETTINGS_SUBMIT_FAILURE", errors: body.body };
              obj.dispatch(obj);
              return body;
            });
            channel = 3;
            arr = c20;
          }
        } catch (tmp31) {
          channel = tmp;
          throw tmp31;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function deleteChannel() {
  const self = this;
  const apply = _deleteChannel.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteChannel() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let guildId = tmp2;
              let callback;
              guildId = undefined;
              callback = closure_1_5.getChannel(callback);
              const HTTP = callback(closure_1_2[7]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = closure_1_6.CHANNEL(callback);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            guildId = undefined;
            if (callback != null) {
              guildId = callback.getGuildId();
            }
            let tmp10 = null == guildId;
            if (!tmp10) {
              obj = callback;
              let isThreadResult;
              if (callback != null) {
                isThreadResult = obj.isThread();
              }
              tmp10 = isThreadResult;
            }
            if (!tmp10) {
              obj1 = guildId(table[8]);
              const result = obj1.checkGuildTemplateDirty(guildId);
            }
            callback2();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateVoiceChannelStatus(arg0, status) {
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_6.UPDATE_VOICE_CHANNEL_STATUS(arg0), body: obj, rejectWithError: null };
  obj = { status };
  obj[2] = sendRequest.rejectWithMigratedError();
  return HTTP.put(obj);
}
function removeLinkedLobby(closure_1_0) {
  const HTTP = sendRequest.HTTP;
  return HTTP.del({ url: closure_6.CHANNEL_LINKED_LOBBY(closure_1_0), rejectWithError: true });
}
({ Endpoints: closure_6, Layers, ChannelSettingsSections: error } = ME);
let result = require("set").fileFinishedImporting("actions/ChannelSettingsActionCreators.tsx");

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