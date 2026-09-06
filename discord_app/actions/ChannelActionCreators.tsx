// discord_app/actions/ChannelActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import shared from "../design/shared.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../modules/routing/transitionToChannel.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import isChangelogChannelDefault from "../modules/changelog/utils/isChangelogChannel.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ChangelogStore from "../modules/changelog/ChangelogStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import ReadStateStore from "../stores/ReadStateStore.tsx";

require = fn;
let closure_6 = fn(1961).createChannelRecordFromServer;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AbortCodes: c10, Endpoints: closure_11, Routes: closure_12, ME: map1, CURRENT_APP_CONTEXT: closure_14, ChannelTypes: closure_15 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelActionCreators.tsx");

export default {
  openPrivateChannel(joinCallVideo) {
    ({ recipientIds: require, joinCall } = joinCallVideo);
    if (joinCall === undefined) {
      joinCall = false;
    }
    let flag = joinCallVideo.joinCallVideo;
    if (flag === undefined) {
      flag = false;
    }
    ({ location: _slicedToArray, onBeforeTransition: asyncGeneratorStep, navigateToChannel } = joinCallVideo);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              closure_0 = tmp7;
              closure_128_1 = undefined;
              function joinCallIfRequested(_openCachedDMChannelResult) {
                if (closure_1_1) {
                  const tmp4 = closure_1(closure_2[7]);
                  const call = tmp4.call;
                  const id = _openCachedDMChannelResult.id;
                  let recipientId = null;
                  if (_openCachedDMChannelResult.isDM()) {
                    recipientId = _openCachedDMChannelResult.getRecipientId();
                  }
                  if (typeof call === "unknown") {
                    tmp4(closure_1_2, true, recipientId);
                  } else {
                    call(id, closure_1_2, true, recipientId);
                  }
                }
              }
              closure_128_0 = joinCallIfRequested;
              const _getRecipientsResult = self._getRecipients(_require);
              if (1 === _getRecipientsResult.length) {
                const _openCachedDMChannelResult = self._openCachedDMChannel(v0(_getRecipientsResult, 1)[0], asyncGeneratorStep, navigateToChannel);
                if (null != _openCachedDMChannelResult) {
                  joinCallIfRequested(_openCachedDMChannelResult);
                  c5 = 3;
                  const obj1 = { value: Promise.resolve(_openCachedDMChannelResult.id), done: true };
                  return obj1;
                }
              }
              v0 = 1;
              const HTTP = closure_0(tmp43[8]).HTTP;
              const request = { url: constants2.USER_CHANNELS, body: null, context: null, oldFormErrors: true, retries: 3, rejectWithError: null };
              const obj2 = { recipients: _getRecipientsResult };
              request.body = obj2;
              const obj3 = { location: _location };
              request.context = obj3;
              let obj5 = closure_0(tmp43[8]);
              request.rejectWithError = obj5.rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj4 = { value: HTTP.post(request), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            closure_128_2 = tmp43;
            let code;
            if (closure_128_2 != null) {
              const body = closure_128_2.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.QUARANTINED) {
              tmp3(tmp43[9])();
            }
            throw closure_128_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_1 = value;
            if (closure_129_5) {
              if (closure_129_4 != null) {
                closure_129_4();
              }
              closure_128_0(closure_129_6._openPrivateChannel(closure_128_1.body));
            }
            v0 = 0;
            c5 = 3;
            obj = { value: closure_128_1.body.id, done: true };
            return obj;
          }
        } catch (tmp43) {
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp43;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  createGroupDmShell(arg0) {
    ({ recipientId: require, location: importDefault, onBeforeTransition: dependencyMap, navigateToChannel } = arg0);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return self(function*() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              closure_0 = tmp7;
              closure_128_0 = undefined;
              c3 = 1;
              const HTTP = closure_0(tmp31[8]).HTTP;
              const request = { url: constants2.USER_GROUP_DM_SHELL, body: null, context: null, oldFormErrors: true, retries: 3, rejectWithError: null };
              const obj1 = { recipient_id };
              request.body = obj1;
              const obj2 = { location: _location };
              request.context = obj2;
              request.rejectWithError = closure_0(tmp31[8]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj3 = { value: HTTP.post(request), done: false };
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp31;
            let code;
            if (closure_128_1 != null) {
              const body = closure_128_1.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.QUARANTINED) {
              tmp3(tmp31[9])();
            }
            throw closure_128_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = value;
            if (closure_129_3) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
              closure_129_4._openPrivateChannel(closure_128_0.body);
            }
            c3 = 0;
            c5 = 3;
            obj = { value: closure_128_0.body.id, done: true };
            return obj;
          }
        } catch (tmp31) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp31;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  _openCachedDMChannel(id, fn) {
    let flag = navigateToChannel;
    if (navigateToChannel === undefined) {
      flag = true;
    }
    const dMFromUserId = ChannelStore.getDMFromUserId(id);
    let channel = null;
    if (null != dMFromUserId) {
      channel = ChannelStore.getChannel(dMFromUserId);
    }
    let tmp3 = null;
    if (null != channel) {
      tmp3 = channel;
      if (flag) {
        if (fn != null) {
          fn();
        }
        if (null != obj2.getRootNavigationRef()) {
          transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
          tmp3 = channel;
          const tmp6Result = transitionToChannel;
        } else {
          const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(channel.id);
          tmp3 = channel;
        }
        obj2 = RootNavigationRef;
      }
    }
    return tmp3;
  },
  ensurePrivateChannel(id) {
    closure_0 = id;
    const self = this;
    return (async () => {
      const HTTP = tmp2(1272).HTTP;
      const request = { url: constants.USER_CHANNELS, body: { recipients: self._getRecipients(tmp2) }, oldFormErrors: true, rejectWithError: null };
      self._getRecipients(tmp2);
      request.rejectWithError = tmp2(1272).rejectWithMigratedError();
      await HTTP.post(request);
      closure_128_0 = value;
      closure_128_1 = closure_1_6(closure_128_0.body);
      { recipients: self._getRecipients(tmp2) };
      tmp5(573).dispatch({ type: "CHANNEL_CREATE", channel: closure_128_1 });
      return closure_128_1.id;
    })();
  },
  getOrEnsurePrivateChannel(id) {
    closure_0 = id;
    const self = this;
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              dMFromUserId = dMFromUserId.getDMFromUserId(closure_0);
              if (null == dMFromUserId) {
                c1 = 1;
                c0 = 1;
                const obj1 = { value: self.ensurePrivateChannel(closure_0), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else {
            dMFromUserId = value;
            if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c0 = 3;
          const obj2 = { value: dMFromUserId, done: true };
          return obj2;
        } catch (tmp10) {
          c0 = tmp;
          throw tmp10;
        }
      }
    })();
  },
  getDMChannel(arr) {
    closure_0 = arr;
    return (async () => {
      const HTTP = tmp5(1272).HTTP;
      await HTTP.get({ url: closure_1_11.DM_CHANNEL(tmp5), rejectWithError: true });
      closure_128_0 = value;
      closure_128_1 = closure_1_6(closure_128_0.body);
      { url: closure_1_11.DM_CHANNEL(tmp5), rejectWithError: true };
      tmp2(573).dispatch({ type: "CHANNEL_CREATE", channel: closure_128_1 });
      return closure_128_1.id;
    })();
  },
  _getRecipients(_require) {
    if (null != _require) {
      const _Array = Array;
      let tmp2 = _require;
      if (!Array.isArray(_require)) {
        const items = [_require];
        tmp2 = items;
      }
      let items1 = tmp2;
    } else {
      items1 = [];
    }
    return items1;
  },
  _openPrivateChannel(body) {
    const tmp = closure_6(body);
    DispatcherDefault.dispatch({ type: "CHANNEL_CREATE", channel: tmp });
    if (null != obj2.getRootNavigationRef()) {
      transitionToChannel.transitionToChannel(tmp.id, { navigationReplace: true });
      const tmp5Result = transitionToChannel;
    } else {
      const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(tmp.id);
      const tmp2Result = SelectedChannelActionCreatorsDefault;
    }
    return tmp;
  },
  closePrivateChannel(id, arg1, arg2) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    if (isChangelogChannelDefault(id)) {
      let tmpResult = AnalyticsUtilsDefault;
      let obj = { last_changelog_id: ChangelogStore.latestChangelogId(), unread_count: ReadStateStore.getUnreadCount(id) };
      tmpResult.track(constants.CHANGE_LOG_DM_REMOVED, obj);
    }
    tmpResult = DispatcherDefault;
    obj = { type: "CHANNEL_DELETE", channel: { id, guild_id: "Array", parent_id: "isArray" }, silent: flag2 };
    tmpResult.dispatch(obj);
    if (flag) {
      router_utils.transitionTo(constants2.FRIENDS);
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_11.CHANNEL(id), query: { silent: flag2 }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const delResult = HTTP.del(request);
    return HTTP.del(request).then(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.nRbucl));
    }).catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const intl = require("util").intl;
      AccessibilityAnnouncer.announce(intl.string(require("util").t.ndXVI5));
    });
  },
  bulkLeaveGroupDMs(channel_ids) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_11.USER_CHANNELS_BULK_LEAVE, body: { channel_ids }, oldFormErrors: true, rejectWithError: true };
    return HTTP.post(request);
  },
  updatePermissionOverwrite(id, arr) {
    closure_0 = id;
    closure_1 = arr;
    return (async () => {
      const body = tmp2;
      const HTTP = tmp5(1272).HTTP;
      const request = { url: closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(tmp5, body.id), body, oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() };
      await HTTP.put(request);
      closure_128_0 = value;
      body(573).dispatch({ type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: closure_129_0, overwrite: closure_129_1 });
      return closure_128_0;
    })();
  },
  clearPermissionOverwrite(channelId, id) {
    closure_0 = channelId;
    closure_1 = id;
    return (async () => {
      const HTTP = tmp5(1272).HTTP;
      await HTTP.del({ url: closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(tmp5, tmp2), oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() });
      closure_128_0 = value;
      { url: closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(tmp5, tmp2), oldFormErrors: true, rejectWithError: tmp5(1272).rejectWithMigratedError() };
      tmp2(573).dispatch({ type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: closure_129_0, overwriteId: closure_129_1 });
      return closure_128_0;
    })();
  },
  addRecipient(arg0, arg1, location, arg3) {
    const self = this;
    closure_1 = arg0;
    _require = arg3;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_11.CHANNEL_RECIPIENT(arg0, arg1), context: null, oldFormErrors: true, rejectWithError: true };
    obj = { location };
    obj.context = obj;
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((status) => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.cU0t1F));
      if (closure_0 != null) {
        closure_0();
      }
      if (201 === status.status) {
        let id = self._openPrivateChannel(status.body).id;
      } else {
        id = closure_1;
      }
      return id;
    }).catch(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["8GEdej"]));
      return closure_1;
    });
  },
  addRecipients(id, length, arg2, arg3) {
    const self = this;
    closure_0 = arg2;
    return this.addRecipient(id, length[0], arg2, arg3).then((result) => {
      closure_0 = result;
      const substr = length.slice(1);
      return Promise.all(substr.map((item) => self.addRecipient(closure_0, item, closure_0))).then(() => closure_0);
    });
  },
  removeRecipient(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    return HTTP.del({ url: closure_1_11.CHANNEL_RECIPIENT(arg0, arg1), oldFormErrors: true, rejectWithError: true });
  },
  setDMOwner(arg0, owner) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_11.CHANNEL(arg0), body: { owner }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch(request);
  },
  setName(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      const name = tmp3;
      const channel2 = channel.getChannel(tmp2);
      const HTTP = tmp2(1272).HTTP;
      const request = { url: closure_1_11.CHANNEL(tmp2), body: null, oldFormErrors: true, rejectWithError: true };
      let obj1 = { name };
      request.body = obj1;
      await HTTP.patch(request);
      closure_128_1 = value;
      if (channel2 != null) {
        const guildId = channel2.getGuildId();
      }
      closure_128_2 = guildId;
      let tmp10 = null == closure_128_2;
      if (!tmp10) {
        let isThreadResult;
        if (channel2 != null) {
          isThreadResult = obj.isThread();
        }
        tmp10 = isThreadResult;
        obj = channel2;
      }
      if (!tmp10) {
        obj1 = name(7323);
        const result = obj1.checkGuildTemplateDirty(closure_128_2);
      }
      return closure_128_1;
    })();
  },
  setIcon(channelId, arg1, arg2) {
    closure_0 = channelId;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              let icon = tmp3;
              const channel_id = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              channel = channel.getChannel(channel_id);
              closure_128_0 = channel;
              let obj1 = { channel_id, channel_type: null, old_icon_set: null, new_icon_set: null, location: null };
              let type;
              if (channel != null) {
                type = channel.type;
              }
              obj1.channel_type = type;
              icon = undefined;
              if (channel != null) {
                icon = channel.icon;
              }
              obj1.old_icon_set = null != icon;
              obj1.new_icon_set = null != icon;
              obj1.location = _location;
              closure_128_1 = obj1;
              let obj6 = icon(_location[15]);
              const obj2 = {};
              const merged = Object.assign(obj1);
              obj2.status = "initiated";
              obj6.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj2);
              c3 = 1;
              const HTTP = channel_id(_location[8]).HTTP;
              const request = { url: closure_1_11.CHANNEL(channel_id), body: null, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              const obj3 = { icon };
              request.body = obj3;
              c4 = 2;
              c5 = 1;
              let obj4 = { value: HTTP.patch(request), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_4 = _location;
            obj4 = icon(_location[15]);
            const obj5 = {};
            const merged1 = Object.assign(closure_128_1);
            obj5.status = "failed";
            let retry_after;
            if (closure_128_4 != null) {
              const body = closure_128_4.body;
              if (body != null) {
                retry_after = body.retry_after;
              }
            }
            obj5.is_rate_limited = null != retry_after;
            let message;
            if (closure_128_4 != null) {
              const body2 = closure_128_4.body;
              if (body2 != null) {
                message = body2.message;
              }
            }
            obj5.error_message = message;
            obj4.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj5);
            throw closure_128_4;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_2 = value;
            const obj7 = {};
            const merged2 = Object.assign(closure_128_1);
            obj7.status = "success";
            icon(_location[15]).track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj7);
            let guildId;
            if (closure_128_0 != null) {
              guildId = closure_128_0.getGuildId();
            }
            closure_128_3 = guildId;
            let tmp11 = null == closure_128_3;
            if (!tmp11) {
              obj = closure_128_0;
              let isThreadResult;
              if (closure_128_0 != null) {
                isThreadResult = obj.isThread();
              }
              tmp11 = isThreadResult;
            }
            if (!tmp11) {
              obj1 = icon(_location[19]);
              const result = obj1.checkGuildTemplateDirty(closure_128_3);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value: closure_128_2, done: true };
            return obj8;
          }
        } catch (tmp51) {
          _location = tmp51;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp51;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  updateChannel(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
              const channel_id = tmp5;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_0 = tmp72;
              channel = channel.getChannel(channel_id);
              closure_128_1 = channel;
              let obj1 = { channel_id, channel_type: null, old_icon_set: null, new_icon_set: null, location: null };
              let type;
              if (channel != null) {
                type = channel.type;
              }
              obj1.channel_type = type;
              let icon;
              if (channel != null) {
                icon = channel.icon;
              }
              obj1.old_icon_set = null != icon;
              obj1.new_icon_set = null != tmp3.icon;
              obj1.location = _location;
              closure_128_2 = obj1;
              if ("icon" in tmp3) {
                let obj8 = tmp3(_location[15]);
                let obj2 = {};
                const merged = Object.assign(obj1);
                obj2.status = "initiated";
                obj8.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj2);
              }
              c3 = 1;
              const HTTP = channel_id(_location[8]).HTTP;
              const request = { context: null, url: null, body: null, oldFormErrors: true, rejectWithError: true };
              const obj3 = { location: _location };
              request.context = obj3;
              request.url = closure_1_11.CHANNEL(channel_id);
              request.body = tmp3;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: HTTP.patch(request), done: false };
              return obj4;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5 = _location;
            if (closure_128_0) {
              let obj6 = tmp3(_location[15]);
              const obj5 = {};
              const merged1 = Object.assign(closure_128_2);
              obj5.status = "failed";
              let retry_after;
              if (closure_128_5 != null) {
                const body = closure_128_5.body;
                if (body != null) {
                  retry_after = body.retry_after;
                }
              }
              obj5.is_rate_limited = null != retry_after;
              let message;
              if (closure_128_5 != null) {
                const body2 = closure_128_5.body;
                if (body2 != null) {
                  message = body2.message;
                }
              }
              obj5.error_message = message;
              obj6.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj5);
            }
            throw closure_128_5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_3 = value;
            let guildId;
            if (closure_128_1 != null) {
              guildId = closure_128_1.getGuildId();
            }
            closure_128_4 = guildId;
            let tmp12 = null == closure_128_4;
            if (!tmp12) {
              obj = closure_128_1;
              let isThreadResult;
              if (closure_128_1 != null) {
                isThreadResult = obj.isThread();
              }
              tmp12 = isThreadResult;
            }
            if (!tmp12) {
              obj1 = tmp3(_location[19]);
              const result = obj1.checkGuildTemplateDirty(closure_128_4);
            }
            if (closure_128_0) {
              obj2 = tmp3(_location[15]);
              const obj7 = {};
              const merged2 = Object.assign(closure_128_2);
              obj7.status = "success";
              obj2.track(constants.CHANNEL_ICON_EDIT_PROGRESSED, obj7);
            }
            c3 = 0;
            c5 = 3;
            obj8 = { value: closure_128_3, done: true };
            return obj8;
          }
        } catch (tmp62) {
          _location = tmp62;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp62;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  convertToGuild(arg0) {
    const HTTP = HTTPUtils.HTTP;
    return HTTP.post({ url: closure_1_11.CHANNEL_CONVERT(arg0), oldFormErrors: true, rejectWithError: true });
  },
  preload(arg0, channelId) {
    let obj = DispatcherDefault;
    let tmp = null;
    if (arg0 !== map1) {
      tmp = arg0;
    }
    obj = { type: "CHANNEL_PRELOAD", guildId: tmp, channelId, context };
    obj.dispatch(obj);
  },
  fetchChannelStoreListing(channelId, arg1) {
    _require = channelId;
    if (null != arg1) {
      let result = closure_11.CHANNEL_STORE_LISTING_SKU(channelId, arg1);
    } else {
      result = closure_11.CHANNEL_STORE_LISTING(channelId);
    }
    const result1 = require("StoreUtils").httpGetWithCountryCodeQuery(result);
    return result1.then((body) => {
      const obj = { type: "STORE_LISTING_FETCH_SUCCESS", channelId, storeListing: body.body };
      obj.dispatch(obj);
    });
  },
  createTextChannel(guildId, topic, parent_id, formatToPlainStringResult) {
    closure_0 = guildId;
    closure_1 = topic;
    closure_2 = parent_id;
    closure_3 = formatToPlainStringResult;
    return (async () => {
      const name = tmp2;
      const obj1 = { type: constants.GUILD_TEXT, name, permission_overwrites: [] };
      if (null != parent_id) {
        obj1.parent_id = parent_id;
      }
      if (null != topic) {
        obj1.topic = topic;
      }
      const HTTP = tmp5(parent_id[8]).HTTP;
      const request = { url: closure_1_11.GUILD_CHANNELS(tmp5), body: obj1, oldFormErrors: true, rejectWithError: tmp5(parent_id[8]).rejectWithMigratedError() };
      await HTTP.post(request);
      closure_128_0 = value;
      tmp5(parent_id[8]);
      const result = name(parent_id[19]).checkGuildTemplateDirty(closure_129_0);
      return closure_128_0;
    })();
  },
  fetchChannel(arg0) {
    closure_0 = arg0;
    return (async () => {
      const HTTP = v3(dependencyMap[8]).HTTP;
      await HTTP.get({ url: closure_1_11.CHANNEL(closure_0), rejectWithError: true });
      return value.body;
    })();
  },
  openChannel(arg0) {
    closure_0 = arg0;
    const self = this;
    return (async () => {
      await self.fetchChannel(closure_0);
      c2 = 0;
      await "HermesInternal";
      closure_128_0 = value;
      closure_128_1 = closure_1_6(closure_128_0);
      tmp3(c2[13]).dispatch({ type: "CHANNEL_CREATE", channel: closure_128_1 });
      c2 = 0;
      return closure_128_1;
    })();
  }
};