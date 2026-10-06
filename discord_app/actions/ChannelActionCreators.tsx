// discord_app/actions/ChannelActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import intl2 from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import shared from "../design/shared.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../modules/routing/transitionToChannel.tsx";
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators.tsx";
import isChangelogChannelDefault from "../modules/changelog/utils/isChangelogChannel.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ChangelogStore from "../modules/changelog/ChangelogStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import ReadStateStore from "../stores/ReadStateStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c0, c5, recipient_id;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
let closure_6 = ChannelRecord.createChannelRecordFromServer;
({
  AnalyticEvents: c9,
  AbortCodes: c10,
  Endpoints: unpackModuleId,
  Routes: closure_12,
  ME: map1,
  CURRENT_APP_CONTEXT: closure_14,
  ChannelTypes: closure_15,
} = Constants);
let obj = {
  openPrivateChannel(joinCallVideo) {
    let _location;
    let joinCall;
    let navigateToChannel;
    let require;
    ({ recipientIds: require, joinCall } = joinCallVideo);
    if (joinCall === undefined) {
      joinCall = false;
    }
    let flag = joinCallVideo.joinCallVideo;
    if (flag === undefined) {
      flag = false;
    }
    ({ location: _slicedToArray, onBeforeTransition: _asyncToGenerator, navigateToChannel } = joinCallVideo);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return (async () => {
      let body;
      let closure_0;
      let closure_1;
      let obj5;
      let obj6;
      let obj7;
      let v0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let require;
          let tmp;
          let joinCallIfRequested;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              require = tmp4;
              tmp = undefined;
              joinCallIfRequested = function joinCallIfRequested(_openCachedDMChannelResult) {
                if (closure_1_1) {
                  const id = _openCachedDMChannelResult.id;
                  const call = joinCall(closure_2[7]).call;
                  let recipientId = null;
                  const tmp5 = joinCall(closure_2[7]);
                  if (_openCachedDMChannelResult.isDM()) {
                    recipientId = _openCachedDMChannelResult.getRecipientId();
                  }
                  call(id, closure_1_2, true, recipientId);
                }
              };
              const _getRecipientsResult = self._getRecipients(_require);
              if (1 === _getRecipientsResult.length) {
                const _openCachedDMChannelResult = self._openCachedDMChannel(
                  v0(_getRecipientsResult, 1)[0],
                  _asyncToGenerator,
                  navigateToChannel,
                );
                if (null != _openCachedDMChannelResult) {
                  joinCallIfRequested(_openCachedDMChannelResult);
                  c5 = 3;
                  const obj4 = { value: Promise.resolve(_openCachedDMChannelResult.id), done: true };
                  return obj4;
                }
              }
              v0 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const request = {
                url: constants2.USER_CHANNELS,
                body: obj5,
                context: obj7,
                oldFormErrors: true,
                retries: 3,
                rejectWithError: obj6.rejectWithMigratedError(),
              };
              obj5 = { recipients: _getRecipientsResult };
              obj7 = { location: _slicedToArray };
              const post = HTTP.post;
              obj6 = require("HTTPUtils");
              c4 = 2;
              c5 = 1;
              const obj8 = { value: post(request), done: false };
              return obj8;
            }
          } else if (1 === c4) {
            v0 = 0;
            let code;
            if (body != null) {
              body = body.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.QUARANTINED) {
              tmp(body[9])();
            }
            throw body;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            let tmp5 = require;
            tmp = value;
            if (closure_129_5) {
              if (closure_129_4 != null) {
                const tmp8 = closure_129_4();
              }
              joinCallIfRequested(closure_129_6._openPrivateChannel(tmp.body));
            }
            v0 = 0;
            c5 = 3;
            const obj = { value: tmp.body.id, done: true };
            return obj;
          }
        } catch (tmp40) {
          body = tmp40;
          if (0 === v0) {
            c5 = 3;
            throw tmp40;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  createGroupDmShell(arg0) {
    let _location;
    let navigateToChannel;
    let require;
    ({ recipientId: require, location: importDefault, onBeforeTransition: dependencyMap, navigateToChannel } = arg0);
    if (navigateToChannel === undefined) {
      navigateToChannel = true;
    }
    const self = this;
    return self(function* () {
      let closure_0;
      let closure_1;
      let obj4;
      let obj5;
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              recipient_id = undefined;
              c3 = 1;
              const HTTP = recipient_id(closure_2[8]).HTTP;
              const request = {
                url: constants2.USER_GROUP_DM_SHELL,
                body: obj4,
                context: obj5,
                oldFormErrors: true,
                retries: 3,
                rejectWithError: obj9.rejectWithMigratedError(),
              };
              obj4 = { recipient_id: require };
              obj5 = { location: importDefault };
              const post = HTTP.post;
              obj9 = recipient_id(closure_2[8]);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            let code;
            if (closure_2 != null) {
              const body = tmp.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.QUARANTINED) {
              closure_2(closure_2[9])();
            }
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            recipient_id = value;
            if (closure_129_3) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
              closure_129_4._openPrivateChannel(recipient_id.body);
            }
            c3 = 0;
            c5 = 3;
            const obj = { value: recipient_id.body.id, done: true };
            return obj;
          }
        } catch (tmp28) {
          closure_2 = tmp28;
          if (0 === c3) {
            c5 = 3;
            throw tmp28;
          } else {
            c4 = 1;
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
        const obj2 = RootNavigationRef;
        if (null != obj2.getRootNavigationRef()) {
          const tmp6Result = transitionToChannel;
          tmp6Result.transitionToChannel(channel.id, { navigationReplace: true });
          tmp3 = channel;
        } else {
          const obj3 = SelectedChannelActionCreatorsDefault;
          const privateChannel = obj3.selectPrivateChannel(channel.id);
          tmp3 = channel;
        }
      }
    }
    return tmp3;
  },
  ensurePrivateChannel(id) {
    let closure_0 = id;
    const self = this;
    return (async () => {
      let c3;
      let closure_0;
      let obj10;
      let obj4;
      let tmp;
      const _getRecipientsResult = self._getRecipients(tmp);
      const HTTP = tmp(c2[8]).HTTP;
      const request = {
        url: constants.USER_CHANNELS,
        body: obj4,
        oldFormErrors: true,
        rejectWithError: obj10.rejectWithMigratedError(),
      };
      obj4 = { recipients: _getRecipientsResult };
      const post = HTTP.post;
      obj10 = tmp(c2[8]);
      await post(request);
      tmp = value;
      const channel = closure_1_6(tmp.body);
      const obj7 = { type: "CHANNEL_CREATE", channel };
      const obj = channel(c2[13]);
      obj.dispatch(obj7);
      return channel.id;
    })();
  },
  getOrEnsurePrivateChannel(id) {
    let closure_0 = id;
    const self = this;
    return (async () => {
      let dMFromUserId;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              dMFromUserId = dMFromUserId.getDMFromUserId(id);
              if (null == dMFromUserId) {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: self.ensurePrivateChannel(id), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else {
            dMFromUserId = value;
            if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          c0 = 3;
          const obj5 = { value: dMFromUserId, done: true };
          return obj5;
        } catch (tmp9) {
          c0 = 3;
          throw tmp9;
        }
      }
    })();
  },
  getDMChannel(id) {
    let closure_0 = id;
    return (async () => {
      let c3;
      let closure_0;
      let tmp4;
      const HTTP = tmp4(c2[8]).HTTP;
      const obj4 = { url: closure_1_11.DM_CHANNEL(tmp4), rejectWithError: true };
      const get = HTTP.get;
      await get(obj4);
      tmp4 = value;
      const channel = closure_1_6(tmp4.body);
      const obj7 = { type: "CHANNEL_CREATE", channel };
      const obj = channel(c2[13]);
      obj.dispatch(obj7);
      return channel.id;
    })();
  },
  _getRecipients(_require) {
    let items1;
    if (null != _require) {
      const _Array = Array;
      let tmp2 = _require;
      if (!Array.isArray(_require)) {
        const items = [_require];
        tmp2 = items;
      }
      items1 = tmp2;
    } else {
      items1 = [];
    }
    return items1;
  },
  _openPrivateChannel(body) {
    const tmp = closure_6(body);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CHANNEL_CREATE", channel: tmp });
    const obj2 = RootNavigationRef;
    if (null != obj2.getRootNavigationRef()) {
      const tmp5Result = transitionToChannel;
      tmp5Result.transitionToChannel(tmp.id, { navigationReplace: true });
    } else {
      const tmp2Result = SelectedChannelActionCreatorsDefault;
      const privateChannel = tmp2Result.selectPrivateChannel(tmp.id);
    }
    return tmp;
  },
  closePrivateChannel(id, arg1, arg2) {
    let obj6;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let flag2 = arg2;
    if (arg2 === undefined) {
      flag2 = false;
    }
    if (isChangelogChannelDefault(id)) {
      const obj = {
        last_changelog_id: ChangelogStore.latestChangelogId(),
        unread_count: ReadStateStore.getUnreadCount(id),
      };
      const track = AnalyticsUtilsDefault.track;
      const CHANGE_LOG_DM_REMOVED = constants.CHANGE_LOG_DM_REMOVED;
      AnalyticsUtilsDefault;
      track(CHANGE_LOG_DM_REMOVED, obj);
    }
    const obj2 = { type: "CHANNEL_DELETE", channel: { id, guild_id: "Array", parent_id: "parent" }, silent: flag2 };
    const tmpResult2 = DispatcherDefault;
    tmpResult2.dispatch(obj2);
    if (flag) {
      const obj4 = router_utils;
      obj4.transitionTo(constants2.FRIENDS);
    }
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: unpackModuleId.CHANNEL(id),
      query: { silent: flag2 },
      oldFormErrors: true,
      rejectWithError: obj6.rejectWithMigratedError(),
    };
    const del = HTTP.del;
    obj6 = HTTPUtils;
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.nRbucl));
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = require("shared").AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = require("intl").intl;
      announce(intl.string(require("intl").t.ndXVI5));
    });
  },
  bulkLeaveGroupDMs(channel_ids) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: unpackModuleId.USER_CHANNELS_BULK_LEAVE,
      body: obj,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj = { channel_ids };
    return HTTP.post(request);
  },
  updatePermissionOverwrite(id, arr3) {
    let closure_0 = id;
    let closure_1 = arr3;
    return (async () => {
      let c3;
      let obj9;
      const body = tmp;
      const value = tmp4;
      const HTTP = value(c2[8]).HTTP;
      const request = {
        url: closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(value, body.id),
        body,
        oldFormErrors: true,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const put = HTTP.put;
      obj9 = value(c2[8]);
      await put(request);
      const obj6 = {
        type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS",
        channelId: closure_129_0,
        overwrite: closure_129_1,
      };
      const obj = body(c2[13]);
      obj.dispatch(obj6);
      return value;
    })();
  },
  clearPermissionOverwrite(channelId, id) {
    let closure_0 = channelId;
    let closure_1 = id;
    return (async () => {
      let c3;
      let closure_1;
      let obj9;
      const value = tmp4;
      const HTTP = value(c2[8]).HTTP;
      const obj4 = {
        url: closure_1_11.CHANNEL_PERMISSIONS_OVERWRITE(value, tmp),
        oldFormErrors: true,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const del = HTTP.del;
      obj9 = value(c2[8]);
      await del(obj4);
      const obj7 = {
        type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS",
        channelId: closure_129_0,
        overwriteId: closure_129_1,
      };
      const obj = tmp(c2[13]);
      obj.dispatch(obj7);
      return value;
    })();
  },
  addRecipient(arg0, arg1, location, arg3) {
    let closure_0;
    let obj2;
    const self = this;
    let closure_1 = arg0;
    _require = arg3;
    const HTTP = require("HTTPUtils").HTTP;
    const obj = {
      url: closure_11.CHANNEL_RECIPIENT(arg0, arg1),
      context: obj2,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj2 = { location };
    const putResult = HTTP.put(obj);
    const nextPromise = putResult.then((status) => {
      let id;
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      announce(intl.string(intl2.t.cU0t1F));
      if (closure_0 != null) {
        closure_0();
      }
      if (201 === status.status) {
        id = self._openPrivateChannel(status.body).id;
      } else {
        id = closure_1;
      }
      return id;
    });
    return nextPromise.catch(() => {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      announce(intl.string(intl2.t["8GEdej"]));
      return closure_1;
    });
  },
  addRecipients(id, arr, arg2, onBeforeTransition) {
    const self = this;
    let closure_1 = arr;
    let closure_0 = arg2;
    const addRecipientResult = this.addRecipient(id, arr[0], arg2, onBeforeTransition);
    return addRecipientResult.then((result) => {
      closure_0 = result;
      const substr = closure_1.slice(1);
      const allResult = all(substr.map((item) => self.addRecipient(closure_0, item, closure_0)));
      return allResult.then(() => closure_0);
    });
  },
  removeRecipient(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: unpackModuleId.CHANNEL_RECIPIENT(arg0, arg1), oldFormErrors: true, rejectWithError: true };
    return HTTP.del(obj);
  },
  setDMOwner(arg0, owner) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: unpackModuleId.CHANNEL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { owner };
    return HTTP.patch(request);
  },
  setName(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let c3;
      let guildId;
      let obj5;
      let tmp;
      let tmp2;
      tmp = channel.getChannel(tmp);
      const HTTP = tmp(c2[8]).HTTP;
      const request = { url: closure_1_11.CHANNEL(tmp), body: obj5, oldFormErrors: true, rejectWithError: true };
      const patch = HTTP.patch;
      obj5 = { name: tmp2 };
      await patch(request);
      tmp2 = value;
      const obj8 = tmp;
      if (tmp != null) {
        guildId = obj8.getGuildId();
      }
      let tmp9 = null == guildId;
      if (!tmp9) {
        let isThreadResult;
        const obj = tmp;
        if (tmp != null) {
          isThreadResult = obj.isThread();
        }
        tmp9 = isThreadResult;
      }
      if (!tmp9) {
        const obj2 = tmp2(c2[19]);
        const result = obj2.checkGuildTemplateDirty(guildId);
      }
      return tmp2;
    })();
  },
  setIcon(channelId, arg1, arg2) {
    let closure_0 = channelId;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let message;
      let obj7;
      let retry_after;
      let type;
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let icon;
          let channel;
          let guildId;
          let obj5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              icon = tmp;
              const channel_id = tmp4;
              channel = undefined;
              value = undefined;
              guildId = undefined;
              channel = channel.getChannel(channel_id);
              obj5 = {
                channel_id,
                channel_type: type,
                old_icon_set: null != icon,
                new_icon_set: null != icon,
                location: value,
              };
              type = undefined;
              const tmp68 = channel_id;
              if (channel != null) {
                type = channel.type;
              }
              icon = undefined;
              if (channel != null) {
                icon = channel.icon;
              }
              const obj6 = { status: "initiated" };
              const track2 = icon(value[15]).track;
              const CHANNEL_ICON_EDIT_PROGRESSED2 = constants.CHANNEL_ICON_EDIT_PROGRESSED;
              const tmp41 = icon(value[15]);
              const merged = Object.assign(obj5);
              track2(CHANNEL_ICON_EDIT_PROGRESSED2, obj6);
              c3 = 1;
              const HTTP = channel_id(value[8]).HTTP;
              const request = {
                url: closure_1_11.CHANNEL(tmp68),
                body: obj7,
                oldFormErrors: true,
                rejectWithError: true,
                failImmediatelyWhenRateLimited: true,
              };
              const patch = HTTP.patch;
              obj7 = { icon };
              c4 = 2;
              c5 = 1;
              const obj8 = { value: patch(request), done: false };
              return obj8;
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_4 = value;
            const obj9 = { status: "failed", is_rate_limited: null != retry_after, error_message: message };
            const track = icon(value[15]).track;
            const CHANNEL_ICON_EDIT_PROGRESSED = constants.CHANNEL_ICON_EDIT_PROGRESSED;
            const tmp24 = icon(value[15]);
            const merged1 = Object.assign(obj5);
            retry_after = undefined;
            if (closure_4 != null) {
              const body = closure_4.body;
              if (body != null) {
                retry_after = body.retry_after;
              }
            }
            message = undefined;
            if (closure_4 != null) {
              const body2 = closure_4.body;
              if (body2 != null) {
                message = body2.message;
              }
            }
            track(CHANNEL_ICON_EDIT_PROGRESSED, obj9);
            throw closure_4;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj11 = { status: "success" };
            const track3 = icon(value[15]).track;
            const CHANNEL_ICON_EDIT_PROGRESSED3 = constants.CHANNEL_ICON_EDIT_PROGRESSED;
            const tmp61 = icon(value[15]);
            const merged2 = Object.assign(obj5);
            track3(CHANNEL_ICON_EDIT_PROGRESSED3, obj11);
            guildId = undefined;
            const obj13 = channel;
            if (channel != null) {
              guildId = obj13.getGuildId();
            }
            let tmp8 = null == guildId;
            if (!tmp8) {
              let isThreadResult;
              const obj = channel;
              if (channel != null) {
                isThreadResult = obj.isThread();
              }
              tmp8 = isThreadResult;
            }
            if (!tmp8) {
              const obj2 = icon(value[19]);
              const result = obj2.checkGuildTemplateDirty(guildId);
            }
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          }
        } catch (tmp50) {
          value = tmp50;
          if (0 === c3) {
            c5 = 3;
            throw tmp50;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  updateChannel(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let _location;
      let icon;
      let icon1;
      let message;
      let obj7;
      let retry_after;
      let type;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let channel;
          let closure_3;
          let prop;
          let channel_id;
          let obj5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              channel = undefined;
              closure_3 = undefined;
              prop = undefined;
              channel_id = tmp69;
              channel = channel.getChannel(channel_id);
              obj5 = {
                channel_id,
                channel_type: type,
                old_icon_set: null != icon1,
                new_icon_set: null != icon,
                location: _location,
              };
              type = undefined;
              icon = tmp.icon;
              const tmp71 = channel_id;
              if (channel != null) {
                type = channel.type;
              }
              icon1 = undefined;
              if (channel != null) {
                icon1 = channel.icon;
              }
              const tmp48 = _location;
              if ("icon" in tmp) {
                prop = constants.CHANNEL_ICON_EDIT_PROGRESSED;
                const obj6 = { status: "initiated" };
                const track3 = tmp(_location[15]).track;
                const tmp51 = tmp(_location[15]);
                const merged = Object.assign(obj5);
                track3(prop, obj6);
              }
              c3 = 1;
              const HTTP = prop(_location[8]).HTTP;
              const request = {
                context: obj7,
                url: closure_1_11.CHANNEL(tmp71),
                body: tmp,
                oldFormErrors: true,
                rejectWithError: true,
              };
              obj7 = { location: tmp48 };
              const patch = HTTP.patch;
              prop = patch(request);
              c4 = 2;
              c5 = 1;
              const obj8 = { value: prop, done: false };
              return obj8;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            let closure_5 = _location;
            const tmp31 = channel_id;
            if (tmp31) {
              prop = constants.CHANNEL_ICON_EDIT_PROGRESSED;
              const obj9 = { status: "failed", is_rate_limited: null != retry_after, error_message: message };
              const track2 = tmp(_location[15]).track;
              const tmp35 = tmp(_location[15]);
              const merged1 = Object.assign(obj5);
              retry_after = undefined;
              if (closure_5 != null) {
                const body = closure_5.body;
                if (body != null) {
                  retry_after = body.retry_after;
                }
              }
              message = undefined;
              if (closure_5 != null) {
                const body2 = closure_5.body;
                if (body2 != null) {
                  message = body2.message;
                }
              }
              track2(prop, obj9);
            }
            throw closure_5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_3 = value;
            prop = undefined;
            const obj13 = channel;
            if (channel != null) {
              prop = obj13.getGuildId();
            }
            let tmp8 = null == prop;
            if (!tmp8) {
              prop = undefined;
              const obj = channel;
              if (channel != null) {
                prop = obj.isThread();
              }
              tmp8 = prop;
            }
            if (!tmp8) {
              const obj2 = tmp(_location[19]);
              const result = obj2.checkGuildTemplateDirty(prop);
            }
            const tmp17 = channel_id;
            if (tmp17) {
              prop = constants.CHANNEL_ICON_EDIT_PROGRESSED;
              const obj11 = { status: "success" };
              const track = tmp(_location[15]).track;
              const tmp21 = tmp(_location[15]);
              const merged2 = Object.assign(obj5);
              track(prop, obj11);
            }
            prop = closure_3;
            c3 = 0;
            c5 = 3;
            const obj12 = { value: prop, done: true };
            return obj12;
          }
        } catch (tmp60) {
          _location = tmp60;
          if (0 === c3) {
            c5 = 3;
            throw tmp60;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  convertToGuild(arg0) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: unpackModuleId.CHANNEL_CONVERT(arg0), oldFormErrors: true, rejectWithError: true };
    return HTTP.post(obj);
  },
  preload(arg0, channelId) {
    let tmp2 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (arg0 !== map1) {
      tmp2 = arg0;
    }
    const obj = { type: "CHANNEL_PRELOAD", guildId: tmp2, channelId, context };
    dispatch(obj);
  },
  fetchChannelStoreListing(channelId, arg1) {
    let result;
    _require = channelId;
    if (null != arg1) {
      result = closure_11.CHANNEL_STORE_LISTING_SKU(channelId, arg1);
    } else {
      result = closure_11.CHANNEL_STORE_LISTING(channelId);
    }
    let obj = require("StoreUtils");
    const result1 = obj.httpGetWithCountryCodeQuery(result);
    return result1.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "STORE_LISTING_FETCH_SUCCESS", channelId, storeListing: body.body };
      obj.dispatch(obj2);
    });
  },
  createTextChannel(guildId, topic, parent_id, formatToPlainStringResult) {
    let closure_0 = guildId;
    let closure_1 = topic;
    let closure_2 = parent_id;
    let closure_3 = formatToPlainStringResult;
    return (async () => {
      let obj5;
      const name = tmp;
      const value = tmp4;
      const obj4 = { type: constants.GUILD_TEXT, name, permission_overwrites: [] };
      if (null != parent_id) {
        obj4.parent_id = parent_id;
      }
      if (null != topic) {
        obj4.topic = topic;
      }
      const HTTP = value(parent_id[8]).HTTP;
      const request = {
        url: closure_1_11.GUILD_CHANNELS(value),
        body: obj4,
        oldFormErrors: true,
        rejectWithError: obj5.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj5 = value(parent_id[8]);
      await post(request);
      const obj = name(parent_id[19]);
      const result = obj.checkGuildTemplateDirty(closure_129_0);
      return value;
    })();
  },
  fetchChannel(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      const HTTP = v3(dependencyMap[8]).HTTP;
      const obj4 = { url: closure_1_11.CHANNEL(closure_0), rejectWithError: true };
      const get = HTTP.get;
      await get(obj4);
      return value.body;
    })();
  },
  openChannel(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let c3;
      let c4;
      let closure_1;
      closure_0 = tmp4;
      await self.fetchChannel(closure_0);
      await "IconComponent";
      closure_0 = value;
      const tmp = closure_1_6(closure_0);
      const obj6 = { type: "CHANNEL_CREATE", channel: tmp };
      const obj = tmp(c2[13]);
      obj.dispatch(obj6);
      return tmp;
    })();
  },
};
let result = size.fileFinishedImporting("actions/ChannelActionCreators.tsx");

export default obj;
