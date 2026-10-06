// discord_app/modules/threads/ThreadActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import intl11 from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import ArchivedThreadsStore2 from "ArchivedThreadsStore.tsx";
import DraftActionCreatorsDefault from "../../actions/DraftActionCreators.tsx";
import ApplicationCommandActionCreators from "../application_commands/ApplicationCommandActionCreators.tsx";
import _asyncToGenerator_mod from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import JoinedThreadsStore from "JoinedThreadsStore.tsx";
import ThreadSummaryStore from "ThreadSummaryStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ArchivedThreadsStore = ArchivedThreadsStore2;
let _require, c0, c1, c2, dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let map1;
const f94713 = (body) => {
  const obj = DispatcherDefault;
  const obj2 = { type: "THREAD_UPDATE", channel: closure_4(body.body) };
  obj.dispatch(obj2);
  const isForumPostResult = forumPost.isForumPost() && null != forumPost.parent_id;
  if (isForumPostResult) {
    const obj3 = { type: "RESORT_THREADS", channelId: forumPost.parent_id };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  }
  return body;
};
function patchThread(id, body) {
  let obj2;
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_12.CHANNEL(id.id), body, rejectWithError: obj2.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj2 = require("HTTPUtils");
  const patchResult = patch(request);
  return patchResult.then(f94713);
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  const obj = DispatcherDefault;
  const obj2 = {
    type: "THREAD_MEMBER_LOCAL_UPDATE",
    id: id.id,
    guildId: id.getGuildId(),
    userId: AuthenticationStore.getId(),
    isJoining,
  };
  obj.dispatch(obj2);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let closure_4 = ChannelRecord.createChannelRecordFromServer;
const PAGE_SIZE = ArchivedThreadsStore2.PAGE_SIZE;
({ Endpoints: closure_12, AbortCodes: map1, AnalyticEvents: closure_14, Permissions: closure_15 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let obj = {
  archiveThread(channel, arg1) {
    let obj3;
    const obj = { archived: true };
    const tmp = arg1;
    if (tmp) {
      obj.locked = true;
    }
    _require = channel;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_12.CHANNEL(channel.id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then(f94713);
  },
  lockThread(channel) {
    let closure_0 = channel;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          let archived;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              archived = undefined;
              const isArchivedThreadResult = archived.isArchivedThread();
              archived = isArchivedThreadResult;
              if (archived) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: self.unarchiveThread(archived, false), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const obj5 = { locked: true, archived };
          c3 = 3;
          const obj6 = { value: patchThread(closure_129_0, obj5), done: true };
          return obj6;
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  },
  unlockThread(channel) {
    let closure_0 = channel;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          let archived;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              archived = undefined;
              const isArchivedThreadResult = archived.isArchivedThread();
              archived = isArchivedThreadResult;
              if (archived) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: self.unarchiveThread(archived, true), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const obj5 = { locked: false, archived };
          c3 = 3;
          const obj6 = { value: patchThread(closure_129_0, obj5), done: true };
          return obj6;
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  },
  unarchiveThread(channel, arg1) {
    let closure_0 = channel;
    let closure_1 = arg1;
    return (async () => {
      let intl5;
      let intl9;
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
          let string;
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
              string = undefined;
              const obj4 = { archived: false };
              const tmp86 = string;
              string = string.isForumPost();
              const tmp87 = tmp;
              if (tmp87) {
                obj4.locked = false;
              }
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: patchThread(tmp86, obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const body = tmp.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.TOO_MANY_THREADS) {
              let stringResult;
              const show4 = closure_2(closure_2[12]).show;
              const tmp69 = closure_2(closure_2[12]);
              const intl7 = string(closure_2[13]).intl;
              string = intl7.string;
              const t4 = string(closure_2[13]).t;
              if (string) {
                stringResult = string(t4.kwyWNX);
              } else {
                stringResult = string(t4["PeIE/r"]);
              }
              const obj6 = { title: stringResult, body: string };
              const intl8 = string(closure_2[13]).intl;
              const string3 = intl8.string;
              const t5 = string(closure_2[13]).t;
              if (string) {
                string = string3(t5.KGaiEK);
              } else {
                string = string3(t5.P0wT5S);
              }
              show4(obj6);
            } else {
              const body2 = tmp.body;
              let code1;
              if (body2 != null) {
                code1 = body2.code;
              }
              if (code1 === constants.TOO_MANY_ANNOUNCEMENT_THREADS) {
                const obj7 = { title: intl5.string(string(closure_2[13]).t["PeIE/r"]), body: string };
                const show3 = closure_2(closure_2[12]).show;
                const tmp55 = closure_2(closure_2[12]);
                intl5 = string(closure_2[13]).intl;
                const intl6 = string(closure_2[13]).intl;
                string = intl6.string(string(closure_2[13]).t.jDMxz2);
                show3(obj7);
              } else if (429 === closure_2.status) {
                let stringResult1;
                const show2 = closure_2(closure_2[12]).show;
                const tmp38 = closure_2(closure_2[12]);
                const intl3 = string(closure_2[13]).intl;
                string = intl3.string;
                const t3 = string(closure_2[13]).t;
                if (string) {
                  stringResult1 = string(t3.kwyWNX);
                } else {
                  stringResult1 = string(t3["PeIE/r"]);
                }
                const obj8 = { title: stringResult1, body: string };
                const intl4 = string(closure_2[13]).intl;
                string = intl4.string(string(closure_2[13]).t.Whhv4w);
                show2(obj8);
              } else if (403 === closure_2.status) {
                let stringResult2;
                const show = closure_2(closure_2[12]).show;
                const tmp19 = closure_2(closure_2[12]);
                const intl = string(closure_2[13]).intl;
                string = intl.string;
                const t = string(closure_2[13]).t;
                if (string) {
                  stringResult2 = string(t.kwyWNX);
                } else {
                  stringResult2 = string(t["PeIE/r"]);
                }
                const obj9 = { title: stringResult2, body: string };
                const intl2 = string(closure_2[13]).intl;
                const string2 = intl2.string;
                const t2 = string(closure_2[13]).t;
                if (string) {
                  string = string2(t2.hIXtcT);
                } else {
                  string = string2(t2["96UEzi"]);
                }
                show(obj9);
              } else {
                const obj10 = { title: intl9.string(string(closure_2[13]).t.j2d6Km), body: string };
                const show5 = closure_2(closure_2[12]).show;
                const tmp105 = closure_2(closure_2[12]);
                intl9 = string(closure_2[13]).intl;
                const intl10 = string(closure_2[13]).intl;
                string = intl10.string(string(closure_2[13]).t.fEptJP);
                show5(obj10);
              }
            }
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp89) {
          closure_2 = tmp89;
          if (0 === c3) {
            c5 = 3;
            throw tmp89;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  unarchiveThreadIfNecessary(id) {
    let closure_0 = id;
    const self = this;
    return (async () => {
      let channel;
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
              channel = channel.getChannel(id);
              let canResult = PermissionStore.can(constants.MANAGE_THREADS, channel);
              let isArchivedThreadResult = null != channel && channel.isArchivedThread();
              if (isArchivedThreadResult) {
                if (!canResult) {
                  const threadMetadata = channel.threadMetadata;
                  let locked;
                  if (threadMetadata != null) {
                    locked = threadMetadata.locked;
                  }
                  canResult = true !== locked;
                }
                isArchivedThreadResult = canResult;
              }
              if (isArchivedThreadResult) {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: self.unarchiveThread(channel, false), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp8) {
          c0 = 3;
          throw tmp8;
        }
      }
    })();
  },
  setInvitable(id, invitable) {
    let forumPost;
    let obj3;
    let obj = { invitable };
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_12.CHANNEL(id.id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then(f94713);
  },
  joinThread(channel, arg1) {
    let closure_0 = channel;
    let closure_1 = arg1;
    return (async () => {
      let body;
      let c3;
      let c4;
      let c5;
      let code;
      let intl3;
      let intl4;
      let obj4;
      let obj6;
      let string2Result;
      const _location = tmp;
      let forumPost = tmp4;
      if (forumPost.isForumPost()) {
        dispatchThreadMemberLocalUpdate(forumPost, true);
      }
      const HTTP = forumPost(body[10]).HTTP;
      const request = {
        url: closure_1_12.THREAD_MEMBER(forumPost.id),
        query: obj4,
        rejectWithError: obj6.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = { location: _location };
      obj6 = forumPost(body[10]);
      await post(request);
      body = body.body;
      if (body != null) {
        code = body.code;
      }
      if (code === constants.TOO_MANY_THREAD_MEMBERS) {
        let stringResult;
        forumPost = closure_129_0.isForumPost();
        const show = _location(body[12]).show;
        const tmp15 = _location(body[12]);
        const intl = forumPost(body[13]).intl;
        const string = intl.string;
        const t = forumPost(body[13]).t;
        if (forumPost) {
          stringResult = string(t.EMYJFi);
        } else {
          stringResult = string(t.gtdVcs);
        }
        const obj7 = { title: stringResult, body: string2Result };
        const intl2 = forumPost(body[13]).intl;
        const string2 = intl2.string;
        const t2 = forumPost(body[13]).t;
        if (forumPost) {
          string2Result = string2(t2.QYyad3);
        } else {
          string2Result = string2(t2.abMwgm);
        }
        show(obj7);
      } else {
        const obj8 = {
          title: intl3.string(forumPost(body[13]).t.j2d6Km),
          body: intl4.string(forumPost(body[13]).t.fEptJP),
        };
        const show2 = _location(body[12]).show;
        const tmp58 = _location(body[12]);
        intl3 = forumPost(body[13]).intl;
        intl4 = forumPost(body[13]).intl;
        show2(obj8);
      }
      if (closure_129_0.isForumPost()) {
        dispatchThreadMemberLocalUpdate(closure_129_0, false);
      }
      await "IconComponent";
      return value;
    })();
  },
  addMember(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let c3;
      let c4;
      let c5;
      let code;
      let intl3;
      let intl4;
      let obj10;
      let obj4;
      let string2Result;
      closure_0 = tmp4;
      const HTTP = closure_0(_location[10]).HTTP;
      const request = {
        url: closure_1_12.THREAD_MEMBER(closure_0.id, tmp),
        query: obj4,
        rejectWithError: obj10.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = { location: _location };
      obj10 = closure_0(_location[10]);
      await post(request);
      const body = _location.body;
      if (body != null) {
        code = body.code;
      }
      if (code === constants.TOO_MANY_THREAD_MEMBERS) {
        let stringResult;
        closure_0 = closure_129_0.isForumPost();
        const show = tmp(_location[12]).show;
        const tmp15 = tmp(_location[12]);
        const intl = closure_0(_location[13]).intl;
        const string = intl.string;
        const t = closure_0(_location[13]).t;
        if (closure_0) {
          stringResult = string(t["0yAqqN"]);
        } else {
          stringResult = string(t.YErysD);
        }
        const obj6 = { title: stringResult, body: string2Result };
        const intl2 = closure_0(_location[13]).intl;
        const string2 = intl2.string;
        const t2 = closure_0(_location[13]).t;
        if (closure_0) {
          string2Result = string2(t2.QYyad3);
        } else {
          string2Result = string2(t2.abMwgm);
        }
        show(obj6);
      } else {
        const obj7 = {
          title: intl3.string(closure_0(_location[13]).t.j2d6Km),
          body: intl4.string(closure_0(_location[13]).t.fEptJP),
        };
        const show2 = tmp(_location[12]).show;
        const tmp42 = tmp(_location[12]);
        intl3 = closure_0(_location[13]).intl;
        intl4 = closure_0(_location[13]).intl;
        show2(obj7);
      }
      await "IconComponent";
      return value;
    })();
  },
  leaveThread(channel, location) {
    let obj3;
    if (channel.isForumPost()) {
      const obj = {
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: channel.id,
        guildId: channel.getGuildId(),
        userId: AuthenticationStore.getId(),
        isJoining: false,
      };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      dispatch(obj);
    }
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: closure_12.THREAD_MEMBER(channel.id),
      query: { location },
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const del = HTTP.del;
    obj3 = HTTPUtils;
    return del(request);
  },
  removeMember(id, arg1, location) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: closure_12.THREAD_MEMBER(id, arg1),
      query: obj,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const del = HTTP.del;
    obj = { location };
    obj3 = HTTPUtils;
    return del(request);
  },
  setAutoArchiveDuration(id, auto_archive_duration) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_12.CHANNEL(id.id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { auto_archive_duration };
    obj3 = HTTPUtils;
    return patch(request);
  },
  pin(thread) {
    const tmp = thread.flags | ChannelFlags.PINNED;
    this.updateFlags(thread, tmp, thread.isArchivedThread());
  },
  unpin(thread) {
    this.updateFlags(thread, thread.flags & ~ChannelFlags.PINNED);
  },
  updateFlags(thread, arg1) {
    let closure_0 = thread;
    let closure_1 = arg1;
    let flag = thread2;
    if (thread2 === undefined) {
      flag = false;
    }
    return (async () => {
      let closure_0;
      let flags;
      let obj6;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          c3 = 2;
          if (0 === flags) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { type: "THREAD_UPDATE", channel: tmp.merge(obj6) };
              obj6 = { flags };
              const dispatch = flags(c2[11]).dispatch;
              const tmp21 = flags(c2[11]);
              dispatch(obj5);
              const obj7 = { flags };
              if (false) {
                obj7.archived = false;
              }
              c2 = 1;
              const HTTP = tmp(c2[10]).HTTP;
              const request = { url: closure_1_12.CHANNEL(tmp.id), body: obj7, rejectWithError: true };
              const patch = HTTP.patch;
              flags = 2;
              c3 = 1;
              const obj8 = { value: patch(request), done: false };
              return obj8;
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
              const obj9 = { type: "THREAD_UPDATE", channel: closure_128_0 };
              const obj2 = flags(c2[11]);
              obj2.dispatch(obj9);
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          if (0 === c2) {
            c3 = 3;
            throw tmp14;
          } else {
            flags = 1;
          }
        }
      }
    })();
  },
  replacePin(arg0, thread) {
    let closure_0 = arg0;
    let closure_1 = thread;
    const self = this;
    return (async () => {
      let obj15;
      let obj22;
      let v4;
      const obj5 = { flags: tmp.flags & ~constants.PINNED };
      const obj7 = { flags: v4.flags | constants.PINNED };
      const mergeResult = tmp.merge(obj5);
      const mergeResult1 = v4.merge(obj7);
      const obj9 = { type: "THREAD_UPDATE", channel: mergeResult };
      const obj24 = v4(c2[11]);
      obj24.dispatch(obj9);
      const obj10 = { type: "THREAD_UPDATE", channel: mergeResult1 };
      const obj26 = v4(c2[11]);
      obj26.dispatch(obj10);
      await self.unarchiveThreadIfNecessary(tmp.id);
      await closure_128_2.unarchiveThreadIfNecessary(closure_128_1.id);
      const HTTP2 = tmp(c2[10]).HTTP;
      const request = { url: closure_1_12.CHANNEL(closure_128_0.id), body: obj15, rejectWithError: true };
      const patch2 = HTTP2.patch;
      obj15 = { flags: closure_128_0.flags & ~constants.PINNED };
      await patch2(request);
      if (4 === v4) {
        c2 = 0;
        const obj20 = { type: "THREAD_UPDATE", channel: closure_128_1 };
        const obj4 = v4(c2[11]);
        obj4.dispatch(obj20);
      } else if (5 === v4) {
        if (arg0 === 1) {
          let c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } else {
          c2 = 2;
          const HTTP = tmp(c2[10]).HTTP;
          const request1 = { url: closure_1_12.CHANNEL(closure_128_1.id), body: obj22, rejectWithError: true };
          const patch = HTTP.patch;
          obj22 = { flags: closure_128_1.flags | constants.PINNED };
          v4 = 6;
          c3 = 1;
          const obj23 = { value: patch(request1), done: false };
          return obj23;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c2 = 0;
      }
      await "IconComponent";
      const obj17 = { type: "THREAD_UPDATE", channel: closure_128_0 };
      const obj6 = v4(c2[11]);
      obj6.dispatch(obj17);
      const obj18 = { type: "THREAD_UPDATE", channel: closure_128_1 };
      const obj8 = v4(c2[11]);
      obj8.dispatch(obj18);
    })();
  },
  openThreadCreationForMobile(channel, id, Message) {
    const obj = AppAnalyticsUtils;
    const obj2 = { location: Message, channel_id: channel.id, guild_id: channel.guild_id };
    obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj2);
    const obj3 = DraftActionCreatorsDefault;
    const obj4 = { parentMessageId: id, isPrivate: false, location: Message };
    obj3.changeThreadSettings(channel.id, obj4);
    if (null == id) {
      const obj5 = { channelId: channel.id, command: null, section: null };
      const tmpResult = ApplicationCommandActionCreators;
      tmpResult.setActiveCommand(obj5);
    }
  },
  setNotificationSettings(channel, muteSettings) {
    let closure_0 = channel;
    let closure_1 = muteSettings;
    const self = this;
    return (async () => {
      let closure_0;
      let obj4;
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj8 = tmp3(c2[17]);
              const result = obj8.trackThreadNotificationSettingsUpdated(tmp3, muteSettings);
              if (!JoinedThreadsStore.hasJoined(tmp3.id)) {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: self.joinThread(tmp3, "Change Notification Settings"), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          }
          const HTTP = tmp3(c2[10]).HTTP;
          const request = {
            url: closure_1_12.THREAD_MEMBER_SETTINGS(closure_128_0.id),
            body: closure_128_1,
            rejectWithError: obj4.rejectWithMigratedError(),
          };
          const patch = HTTP.patch;
          obj4 = tmp3(c2[10]);
          c2 = 3;
          const obj6 = { value: patch(request), done: true };
          return obj6;
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })();
  },
  loadArchivedThreads(sortOrder) {
    let channelId;
    let guildId;
    let joined;
    let obj3;
    let require;
    ({ guildId: require, channelId } = sortOrder);
    sortOrder = sortOrder.sortOrder;
    const tagFilter = sortOrder.tagFilter;
    const tagSetting = sortOrder.tagSetting;
    const offset = sortOrder.offset;
    if (!ArchivedThreadsStore.isLoading(channelId, sortOrder, tagFilter, tagSetting)) {
      const tmp2 = sortOrder;
      let obj = channelId(sortOrder[11]);
      let obj2 = { type: "LOAD_ARCHIVED_THREADS", channelId, sortOrder, tagFilter, tagSetting };
      obj.dispatch(obj2);
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_12.THREAD_SEARCH(channelId), query: obj3, retries: 2, rejectWithError: true };
      const get = HTTP.get;
      obj3 = {
        archived: true,
        sort_by: "last_message_time",
        sort_order: "desc",
        limit: PAGE_SIZE,
        tag: joined,
        tag_setting: tagSetting,
        offset,
      };
      joined = undefined;
      if (tagFilter.size > 0) {
        const _Array = Array;
        const arr = Array.from(tagFilter);
        joined = arr.join(",");
      }
      const value = get(request);
      value.then(
        (body) => {
          let mapped;
          let members;
          let threads;
          ({ threads, members } = body.body);
          if (null == threads) {
            const obj2 = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
            const obj = DispatcherDefault;
            obj.dispatch(obj2);
          } else {
            const obj3 = {
              type: "LOAD_ARCHIVED_THREADS_SUCCESS",
              guildId: require,
              channelId,
              offset,
              sortOrder,
              tagFilter,
              tagSetting,
              threads,
              firstMessages: tmp2,
              mostRecentMessages: tmp3,
              members: members.map((item) => channelId(sortOrder[18])(item)),
              owners: mapped.filter(GlobalUtils.isNotNullish),
              hasMore: tmp,
            };
            const dispatch = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (members == null) {
              members = [];
            }
            mapped = threads.map((owner) => owner.owner);
            dispatch(obj3);
          }
        },
        () => {
          const obj = DispatcherDefault;
          const obj2 = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
          obj.dispatch(obj2);
        },
      );
    }
  },
  searchThreads(threadIds, channelId, current2, arg3, arg4) {
    let closure_3;
    _require = threadIds;
    let closure_1 = channelId;
    dependencyMap = current2;
    _asyncToGenerator = arg3;
    let MATCH_SOME = arg4;
    if (arg4 === undefined) {
      const tmp = _require;
      const tmp2 = dependencyMap;
      MATCH_SOME = require("ThreadSearchTagSetting").ThreadSearchTagSetting.MATCH_SOME;
    }
    return (async () => {
      let closure_0;
      let closure_1;
      let joined;
      let obj4;
      let obj6;
      if (null != size) {
        if (size.size > 0) {
          const _Array = Array;
          const arr = Array.from(size);
          joined = arr.join(",");
        }
      }
      const HTTP = tmp(name[10]).HTTP;
      const request = {
        url: closure_1_12.THREAD_SEARCH(tmp2),
        query: obj4,
        rejectWithError: obj6.rejectWithMigratedError(),
      };
      const get = HTTP.get;
      obj4 = { name, tag: joined, tag_setting: MATCH_SOME };
      obj6 = tmp(name[10]);
      await get(request);
      const body = value.body;
      const threads = body.threads;
      const members = body.members;
      const first_messages = body.first_messages;
      const most_recent_messages = body.most_recent_messages;
      const obj8 = {
        type: "LOAD_THREADS_SUCCESS",
        threads,
        members,
        guildId: closure_129_0,
        firstMessages: first_messages,
        mostRecentMessages: most_recent_messages,
      };
      const obj10 = tmp2(name[11]);
      obj10.dispatch(obj8);
      return threads.map((id) => id.id);
    })();
  },
  summarizeThread(isThread, arg1) {
    let obj2;
    let tmp5Result;
    _require = isThread;
    if (isThread.isThread()) {
      if (!ThreadSummaryStore.isInProgress()) {
        let flag = arg1;
        let obj = DispatcherDefault;
        obj.dispatch({ type: "SUMMARIZE_THREAD_START" });
        const HTTP = require("HTTPUtils").HTTP;
        const request = {
          url: closure_12.AI_SUMMARIZE_THREAD(isThread.id),
          body: obj2,
          rejectWithError: tmp5Result.rejectWithMigratedError(),
        };
        const post = HTTP.post;
        const tmp5 = _require;
        if (arg1 == null) {
          flag = true;
        }
        obj2 = { ephemeral: flag };
        tmp5Result = tmp5(1282);
        const postResult = post(request);
        const nextPromise = postResult.then(() => {
          const obj = DispatcherDefault;
          const obj2 = { type: "SUMMARIZE_THREAD_SUCCESS", channelId: isThread.id };
          obj.dispatch(obj2);
        });
        return nextPromise.catch(() => {
          let intl;
          let intl2;
          const obj = DispatcherDefault;
          const obj2 = { type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id };
          obj.dispatch(obj2);
          const obj3 = { title: intl.string(intl11.t.j2d6Km), body: intl2.string(intl11.t.fEptJP) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl11.intl;
          intl2 = intl11.intl;
          show(obj3);
        });
      }
    }
  },
};
let result = size.fileFinishedImporting("modules/threads/ThreadActionCreators.tsx");

export default obj;
