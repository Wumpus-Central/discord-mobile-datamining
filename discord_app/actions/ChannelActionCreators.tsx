// discord_app/actions/ChannelActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import transitionTo from "../modules/routing/router_utils.tsx";
import getRootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../modules/routing/transitionToChannel.tsx";
import _modDef5236 from "SelectedChannelActionCreators.tsx";
import isChangelogChannelDefault from "../modules/changelog/utils/isChangelogChannel.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../modules/changelog/ChangelogStore.tsx";
import { createChannelRecordFromServer as closure_6 } from "../records/ChannelRecord.tsx";
import closure_7 from "../stores/ChannelStore.tsx";
import closure_8 from "../stores/ReadStateStore.tsx";
import ME from "../Constants.tsx";

require = arg1;
({ AnalyticEvents: c9, AbortCodes: c10, Endpoints: unpackModuleId, Routes: closure_12, ME: map1, CURRENT_APP_CONTEXT: closure_14, ChannelTypes: closure_15 } = ME);
let result = require("set").fileFinishedImporting("actions/ChannelActionCreators.tsx");

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
    ({ location: closure_3, onBeforeTransition: closure_4, navigateToChannel } = joinCallVideo);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let joinCallIfRequested = tmp7;
              closure_1 = undefined;
              joinCallIfRequested = function joinCallIfRequested(_openCachedDMChannelResult) {
                if (callback) {
                  const tmp4 = callback(tmp43[7]);
                  const call = tmp4.call;
                  const id = _openCachedDMChannelResult.id;
                  let recipientId = null;
                  if (_openCachedDMChannelResult.isDM()) {
                    recipientId = _openCachedDMChannelResult.getRecipientId();
                  }
                  if (typeof call === "unknown") {
                    tmp4(tmp5, true, recipientId);
                  } else {
                    call(id, tmp5, true, recipientId);
                  }
                }
              };
              const _getRecipientsResult = closure_1_6._getRecipients(closure_1_0);
              if (1 === _getRecipientsResult.length) {
                const _openCachedDMChannelResult = closure_1_6._openCachedDMChannel(v0(_getRecipientsResult, 1)[0], v02, c5);
                if (null != _openCachedDMChannelResult) {
                  joinCallIfRequested(_openCachedDMChannelResult);
                  c5 = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = Promise.resolve(_openCachedDMChannelResult.id);
                  return obj1;
                }
              }
              v0 = 1;
              const HTTP = closure_1_0(closure_1_2[8]).HTTP;
              const obj2 = { url: null, body: null, context: null, oldFormErrors: true, retries: 3, rejectWithError: null };
              obj2[0] = closure_1_11.USER_CHANNELS;
              const obj3 = { recipients: null };
              obj3[0] = _getRecipientsResult;
              obj2[1] = obj3;
              const obj4 = { location: null };
              obj4[0] = v0;
              obj2[2] = obj4;
              let obj5 = closure_1_0(closure_1_2[8]);
              obj2[5] = obj5.rejectWithMigratedError();
              v02 = 2;
              c5 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = HTTP.post(obj2);
              return obj5;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === closure_1_10.QUARANTINED) {
              closure_1_1(closure_1_2[9])();
            }
            throw closure_1_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_1 = arg1;
            if (c5) {
              if (v02 != null) {
                v02();
              }
              joinCallIfRequested(closure_6._openPrivateChannel(closure_1.body));
            }
            v0 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_1.body.id;
            return obj;
          }
        } catch (tmp43) {
          body = tmp43;
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp43;
          } else {
            v02 = tmp;
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
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              closure_0 = tmp7;
              closure_0 = undefined;
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[8]).HTTP;
              obj1 = { url: null, body: null, context: null, oldFormErrors: true, retries: 3, rejectWithError: null };
              obj1[0] = closure_1_11.USER_GROUP_DM_SHELL;
              const obj2 = { recipient_id: null };
              obj2[0] = closure_1_0;
              obj1[1] = obj2;
              const obj3 = { location: null };
              obj3[0] = closure_1_1;
              obj1[2] = obj3;
              obj1[5] = closure_1_0(closure_1_2[8]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            body = callback;
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === closure_1_10.QUARANTINED) {
              closure_1_1(closure_1_2[9])();
            }
            throw closure_1_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
            if (c3) {
              if (callback != null) {
                callback();
              }
              c4._openPrivateChannel(closure_0.body);
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_0.body.id;
            return obj;
          }
        } catch (tmp31) {
          callback = tmp31;
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
  _openCachedDMChannel(id, c4, c5) {
    let flag = c5;
    if (c5 === undefined) {
      flag = true;
    }
    dMFromUserId = dMFromUserId.getDMFromUserId(id);
    let channel = null;
    if (null != dMFromUserId) {
      channel = dMFromUserId.getChannel(dMFromUserId);
    }
    let tmp3 = null;
    if (null != channel) {
      tmp3 = channel;
      if (flag) {
        if (c4 != null) {
          c4();
        }
        if (null != obj2.getRootNavigationRef()) {
          tmp6(4391).transitionToChannel(channel.id, { navigationReplace: true });
          tmp3 = channel;
          const tmp6Result = tmp6(4391);
        } else {
          const privateChannel = _modDef5236.selectPrivateChannel(channel.id);
          tmp3 = channel;
          const obj3 = _modDef5236;
        }
        obj2 = getRootNavigationRef;
        tmp6 = require;
      }
    }
    return tmp3;
  },
  ensurePrivateChannel(id) {
    closure_0 = id;
    const self = this;
    return callback(function*() {
      id = tmp5;
      let body = tmp2;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_11.USER_CHANNELS;
      const obj2 = { recipients: null };
      obj2[0] = closure_1_1._getRecipients(closure_1_0);
      obj1[1] = obj2;
      const _getRecipientsResult = closure_1_1._getRecipients(closure_1_0);
      obj1[3] = closure_1_0(530).rejectWithMigratedError();
      body = yield HTTP.post(obj1);
      id = closure_1_6(body.body);
      const obj = closure_1_1(709);
      const obj5 = { type: "CHANNEL_CREATE", channel: null };
      obj5[1] = id;
      obj.dispatch(obj5);
      return id.id;
    })();
  },
  getOrEnsurePrivateChannel(closure_0) {
    const self = this;
    return callback(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dMFromUserId = closure_1_7.getDMFromUserId(c0);
              if (null == dMFromUserId) {
                c1 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = c1.ensurePrivateChannel(tmp7);
                return obj1;
              }
              tmp7 = c0;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else {
            dMFromUserId = arg1;
            if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          c0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = dMFromUserId;
          return obj2;
        } catch (tmp10) {
          c0 = tmp;
          throw tmp10;
        }
      }
    })();
  },
  getDMChannel(closure_0) {
    return callback(function*() {
      let id = tmp2;
      let body = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = closure_1_11.DM_CHANNEL(closure_1_0);
      body = yield HTTP.get(obj1);
      id = closure_1_6(body.body);
      const obj = closure_1_1(709);
      const obj4 = { type: "CHANNEL_CREATE", channel: null };
      obj4[1] = id;
      obj.dispatch(obj4);
      return id.id;
    })();
  },
  _getRecipients(closure_1_0) {
    if (null != closure_1_0) {
      const _Array = Array;
      let tmp2 = closure_1_0;
      if (!Array.isArray(closure_1_0)) {
        const items = [closure_1_0];
        tmp2 = items;
      }
      let items1 = tmp2;
    } else {
      items1 = [];
    }
    return items1;
  },
  _openPrivateChannel(body) {
    const tmp = callback2(body);
    dispatcherDefault.dispatch({ type: "CHANNEL_CREATE", channel: tmp });
    const obj = dispatcherDefault;
    const tmp2 = importDefault;
    const tmp5 = require;
    if (null != obj2.getRootNavigationRef()) {
      transitionToChannel.transitionToChannel(tmp.id, { navigationReplace: true });
      const tmp5Result = transitionToChannel;
    } else {
      const privateChannel = _modDef5236.selectPrivateChannel(tmp.id);
      const tmp2Result = _modDef5236;
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
      let tmpResult = tmp(698);
      let obj = { last_changelog_id: null, unread_count: null };
      obj[0] = closure_5.latestChangelogId();
      obj[1] = unreadCount.getUnreadCount(id);
      tmpResult.track(constants.CHANGE_LOG_DM_REMOVED, obj);
    }
    tmpResult = tmp(709);
    obj = { id, guild_id: "Array", parent_id: "isArray" };
    tmpResult.dispatch({ type: "CHANNEL_DELETE", channel: obj, silent: flag2 });
    if (flag) {
      transitionTo.transitionTo(constants2.FRIENDS);
      const obj5 = transitionTo;
    }
    const HTTP = sendRequest.HTTP;
    obj1 = { url: closure_11.CHANNEL(id), query: { silent: flag2 }, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj7 = sendRequest;
    const delResult = HTTP.del(obj1);
    return HTTP.del(obj1).then(() => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.nRbucl));
    }).catch(() => {
      const AccessibilityAnnouncer = callback(1363).AccessibilityAnnouncer;
      const intl = callback(1236).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(1236).t.ndXVI5));
    });
  },
  bulkLeaveGroupDMs(channel_ids) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_11.USER_CHANNELS_BULK_LEAVE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { channel_ids };
    return HTTP.post(obj);
  },
  updatePermissionOverwrite(id, arr) {
    closure_0 = id;
    closure_1 = arr;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(closure_1_0, closure_1_1.id);
      obj1[1] = closure_1_1;
      obj1[3] = closure_1_0(530).rejectWithMigratedError();
      closure_0 = yield HTTP.put(obj1);
      const obj = closure_1_1(709);
      const obj4 = { type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS", channelId: null, overwrite: null };
      obj4[1] = closure_0;
      obj4[2] = closure_1;
      obj.dispatch(obj4);
      return closure_0;
    })();
  },
  clearPermissionOverwrite(closure_0, id) {
    closure_1 = id;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(closure_1_0, closure_1_1);
      obj1[2] = closure_1_0(530).rejectWithMigratedError();
      closure_0 = yield HTTP.del(obj1);
      const obj = closure_1_1(709);
      const obj4 = { type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS", channelId: null, overwriteId: null };
      obj4[1] = closure_0;
      obj4[2] = closure_1;
      obj.dispatch(obj4);
      return closure_0;
    })();
  },
  addRecipient(arg0, arg1, location) {
    const self = this;
    closure_1 = arg0;
    const _require = arg3;
    const HTTP = _require(self[8]).HTTP;
    obj = { url: closure_11.CHANNEL_RECIPIENT(arg0, arg1), context: obj, oldFormErrors: true, rejectWithError: true };
    obj = { location };
    const putResult = HTTP.put(obj);
    return HTTP.put(obj).then((status) => {
      const AccessibilityAnnouncer = callback(self[17]).AccessibilityAnnouncer;
      const intl = callback(self[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(self[18]).t.cU0t1F));
      if (callback != null) {
        callback();
      }
      if (201 === status.status) {
        let id = self._openPrivateChannel(status.body).id;
      } else {
        id = closure_1;
      }
      return id;
    }).catch(() => {
      const AccessibilityAnnouncer = callback(self[17]).AccessibilityAnnouncer;
      const intl = callback(self[18]).intl;
      AccessibilityAnnouncer.announce(intl.string(callback(self[18]).t["8GEdej"]));
      return closure_1;
    });
  },
  addRecipients(id, arr, arg2, closure_2) {
    const self = this;
    closure_1 = arr;
    closure_0 = arg2;
    return this.addRecipient(id, arr[0], arg2, closure_2).then((arg0) => {
      closure_0 = arg0;
      const substr = arr.slice(1);
      return Promise.all(substr.map((arg0) => closure_1_2.addRecipient(closure_0, arg0, closure_0))).then(() => closure_0);
    });
  },
  removeRecipient(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    return HTTP.del({ url: closure_11.CHANNEL_RECIPIENT(arg0, arg1), oldFormErrors: true, rejectWithError: true });
  },
  setDMOwner(arg0, owner) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_11.CHANNEL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { owner };
    return HTTP.patch(obj);
  },
  setName(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      closure_1 = tmp3;
      let channel = tmp2;
      channel = closure_1_7.getChannel(closure_1_0);
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = closure_1_11.CHANNEL(closure_1_0);
      const obj2 = { name: null };
      obj2[0] = closure_1_1;
      obj1[1] = obj2;
      closure_1 = yield HTTP.patch(obj1);
      if (channel != null) {
        const guildId = channel.getGuildId();
      }
      let tmp10 = null == guildId;
      if (!tmp10) {
        const obj = channel;
        let isThreadResult;
        if (channel != null) {
          isThreadResult = obj.isThread();
        }
        tmp10 = isThreadResult;
      }
      if (!tmp10) {
        obj1 = closure_1_1(6047);
        const result = obj1.checkGuildTemplateDirty(guildId);
      }
      return closure_1;
    })();
  },
  setIcon(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = tmp3;
              let channel = tmp7;
              channel = undefined;
              obj1 = undefined;
              closure_2 = undefined;
              c3 = undefined;
              channel = closure_1_7.getChannel(closure_1_0);
              obj1 = { channel_id: null, channel_type: null, old_icon_set: null, new_icon_set: null, location: null };
              obj1[0] = closure_1_0;
              let type;
              if (channel != null) {
                type = channel.type;
              }
              obj1[1] = type;
              let icon;
              if (channel != null) {
                icon = channel.icon;
              }
              obj1[2] = null != icon;
              obj1[3] = null != closure_1_1;
              obj1[4] = closure_1_2;
              let obj6 = closure_1_1(closure_1_2[15]);
              const obj2 = {};
              const merged = Object.assign(obj1);
              obj2.status = "initiated";
              obj6.track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj2);
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[8]).HTTP;
              const obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj3[0] = closure_1_11.CHANNEL(closure_1_0);
              let obj4 = { icon: null };
              obj4[0] = closure_1_1;
              obj3[1] = obj4;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj3);
              return obj5;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_4 = closure_2;
            obj4 = closure_1_1(closure_1_2[15]);
            obj6 = {};
            const merged1 = Object.assign(closure_1_1);
            obj6.status = "failed";
            let retry_after;
            if (closure_4 != null) {
              const body = closure_4.body;
              if (body != null) {
                retry_after = body.retry_after;
              }
            }
            obj6.is_rate_limited = null != retry_after;
            let message;
            if (closure_4 != null) {
              const body2 = closure_4.body;
              if (body2 != null) {
                message = body2.message;
              }
            }
            obj6.error_message = message;
            obj4.track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj6);
            throw closure_4;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_2 = arg1;
            const obj8 = {};
            const merged2 = Object.assign(obj1);
            obj8.status = "success";
            closure_1_1(closure_1_2[15]).track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj8);
            let guildId;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            c3 = guildId;
            let tmp11 = null == c3;
            if (!tmp11) {
              obj = closure_1_0;
              let isThreadResult;
              if (closure_1_0 != null) {
                isThreadResult = obj.isThread();
              }
              tmp11 = isThreadResult;
            }
            if (!tmp11) {
              obj1 = closure_1_1(closure_1_2[19]);
              const result = obj1.checkGuildTemplateDirty(c3);
            }
            c3 = 0;
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = closure_1_2;
            return obj9;
          }
        } catch (tmp51) {
          closure_2 = tmp51;
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
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === guildId) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channel = tmp3;
              closure_0 = tmp5;
              closure_0 = undefined;
              channel = undefined;
              obj1 = undefined;
              c3 = undefined;
              guildId = undefined;
              closure_0 = tmp73;
              channel = closure_1_7.getChannel(closure_1_0);
              obj1 = { channel_id: null, channel_type: null, old_icon_set: null, new_icon_set: null, location: null };
              obj1[0] = closure_1_0;
              let type;
              if (channel != null) {
                type = channel.type;
              }
              obj1[1] = type;
              let icon;
              if (channel != null) {
                icon = channel.icon;
              }
              obj1[2] = null != icon;
              obj1[3] = null != closure_1_1.icon;
              obj1[4] = closure_1_2;
              if ("icon" in closure_1_1) {
                let obj8 = closure_1_1(closure_1_2[15]);
                let obj2 = {};
                const merged = Object.assign(obj1);
                obj2.status = "initiated";
                obj8.track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj2);
              }
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[8]).HTTP;
              const obj3 = { context: null, url: null, body: null, oldFormErrors: true, rejectWithError: true };
              const obj4 = { location: null };
              obj4[0] = closure_1_2;
              obj3[0] = obj4;
              obj3[1] = closure_1_11.CHANNEL(closure_1_0);
              obj3[2] = closure_1_1;
              guildId = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj3);
              return obj5;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            c5 = obj1;
            if (closure_0) {
              let obj6 = closure_1_1(closure_1_2[15]);
              obj6 = {};
              const merged1 = Object.assign(obj1);
              obj6.status = "failed";
              let retry_after;
              if (c5 != null) {
                const body = c5.body;
                if (body != null) {
                  retry_after = body.retry_after;
                }
              }
              obj6.is_rate_limited = null != retry_after;
              let message;
              if (c5 != null) {
                const body2 = c5.body;
                if (body2 != null) {
                  message = body2.message;
                }
              }
              obj6.error_message = message;
              obj6.track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj6);
            }
            throw c5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            c3 = arg1;
            guildId = undefined;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            let tmp12 = null == guildId;
            if (!tmp12) {
              obj = channel;
              let isThreadResult;
              if (channel != null) {
                isThreadResult = obj.isThread();
              }
              tmp12 = isThreadResult;
            }
            if (!tmp12) {
              obj1 = closure_1_1(closure_1_2[19]);
              const result = obj1.checkGuildTemplateDirty(guildId);
            }
            if (closure_0) {
              obj2 = closure_1_1(closure_1_2[15]);
              obj8 = {};
              const merged2 = Object.assign(obj1);
              obj8.status = "success";
              obj2.track(closure_1_9.CHANNEL_ICON_EDIT_PROGRESSED, obj8);
            }
            c3 = 0;
            c5 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = c3;
            return obj9;
          }
        } catch (tmp62) {
          obj1 = tmp62;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp62;
          } else {
            guildId = tmp;
          }
        }
      }
    })();
  },
  convertToGuild(arg0) {
    const HTTP = sendRequest.HTTP;
    return HTTP.post({ url: closure_11.CHANNEL_CONVERT(arg0), oldFormErrors: true, rejectWithError: true });
  },
  preload(arg0, channelId) {
    let obj = dispatcherDefault;
    let tmp = null;
    if (arg0 !== closure_13) {
      tmp = arg0;
    }
    obj = { type: "CHANNEL_PRELOAD", guildId: tmp, channelId, context: closure_14 };
    obj.dispatch(obj);
  },
  fetchChannelStoreListing(arg0, arg1) {
    const _require = arg0;
    if (null != arg1) {
      let result = closure_11.CHANNEL_STORE_LISTING_SKU(arg0, arg1);
    } else {
      result = closure_11.CHANNEL_STORE_LISTING(arg0);
    }
    const result1 = require("../utils/StoreUtils.tsx").httpGetWithCountryCodeQuery(result);
    return result1.then((body) => {
      let obj = closure_1_1(closure_1_2[13]);
      obj = { type: "STORE_LISTING_FETCH_SUCCESS", channelId: closure_0, storeListing: body.body };
      obj.dispatch(obj);
    });
  },
  createTextChannel(arg0, arg1, parent_id, formatToPlainStringResult) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = parent_id;
    closure_3 = formatToPlainStringResult;
    return callback(function*() {
      closure_1 = tmp2;
      closure_0 = tmp5;
      obj1 = { type: null, name: null, permission_overwrites: null };
      obj1[0] = closure_1_15.GUILD_TEXT;
      obj1[1] = closure_1_1;
      obj1[2] = [];
      if (null != dependencyMap) {
        obj1.parent_id = dependencyMap;
      }
      if (null != c3) {
        obj1.topic = c3;
      }
      const HTTP = closure_1_0(530).HTTP;
      const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj2[0] = closure_1_11.GUILD_CHANNELS(closure_1_0);
      obj2[1] = obj1;
      const obj4 = closure_1_0(530);
      obj2[3] = obj4.rejectWithMigratedError();
      closure_0 = yield HTTP.post(obj2);
      const obj = closure_1_1(6047);
      const result = obj.checkGuildTemplateDirty(closure_0);
      return closure_0;
    })();
  },
  fetchChannel(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      const HTTP = v0(closure_1_2[8]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = closure_1_11.CHANNEL(v0);
      yield HTTP.get(obj1);
      return arg1.body;
    })();
  },
  openChannel(arg0) {
    closure_0 = arg0;
    const self = this;
    return callback(function*() {
      closure_1 = tmp3;
      let table = 1;
      yield closure_1_1.fetchChannel(closure_1_0);
      table = 0;
      closure_0 = yield "HermesInternal";
      closure_1 = closure_1_6(closure_0);
      const obj = closure_1_1(table[13]);
      const obj3 = { type: "CHANNEL_CREATE", channel: null };
      obj3[1] = closure_1;
      obj.dispatch(obj3);
      table = 0;
      return closure_1;
    })();
  }
};