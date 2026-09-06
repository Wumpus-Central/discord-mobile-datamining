// === Module 7765: ThreadActionCreators ===

// Module 7765 (ThreadActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7777 */;
import ApplicationCommandActionCreators from "ApplicationCommandActionCreators" /* 7778 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7766 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ThreadSummaryStore from "ThreadSummaryStore" /* 7776 */;

require = fn;
function patchThread(id, body) {
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_12.CHANNEL(id.id), body, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  const obj2 = require("HTTPUtils");
  return HTTP.patch(request).then((body) => {
    let obj = { type: "THREAD_UPDATE", channel: closure_4(body.body) };
    obj.dispatch(obj);
    let isForumPostResult = forumPost.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = null != tmp4.parent_id;
    }
    if (isForumPostResult) {
      obj = { type: "RESORT_THREADS", channelId: tmp4.parent_id };
      DispatcherDefault.dispatch(obj);
      const tmpResult = DispatcherDefault;
    }
    return body;
  });
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  const obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: id.id, guildId: id.getGuildId(), userId: AuthenticationStore.getId(), isJoining };
  obj.dispatch(obj);
}
let closure_4 = fn(1961).createChannelRecordFromServer;
const PAGE_SIZE = fn(7766).PAGE_SIZE;
const Constants = fn(1074);
({ Endpoints: closure_12, AbortCodes: map1, AnalyticEvents: closure_14, Permissions: closure_15 } = Constants);
const ChannelFlags = fn(1964).ChannelFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadActionCreators.tsx");

export default {
  archiveThread(channel, arg1) {
    const obj = { archived: true };
    if (arg1) {
      obj.locked = true;
    }
    _require = channel;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_12.CHANNEL(channel.id), body: obj, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      let obj = { type: "THREAD_UPDATE", channel: closure_4(body.body) };
      obj.dispatch(obj);
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != tmp4.parent_id;
      }
      if (isForumPostResult) {
        obj = { type: "RESORT_THREADS", channelId: tmp4.parent_id };
        DispatcherDefault.dispatch(obj);
        const tmpResult = DispatcherDefault;
      }
      return body;
    });
  },
  lockThread(channel) {
    closure_0 = channel;
    const self = this;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              const isArchivedThreadResult = tmp3.isArchivedThread();
              closure_128_0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                const obj1 = { value: self.unarchiveThread(tmp3, false), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          const obj2 = { locked: true, archived: closure_128_0 };
          c3 = 3;
          const obj3 = { value: patchThread(closure_129_0, obj2), done: true };
          return obj3;
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  },
  unlockThread(channel) {
    closure_0 = channel;
    const self = this;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              const isArchivedThreadResult = tmp3.isArchivedThread();
              closure_128_0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                const obj1 = { value: self.unarchiveThread(tmp3, true), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          const obj2 = { locked: false, archived: closure_128_0 };
          c3 = 3;
          const obj3 = { value: patchThread(closure_129_0, obj2), done: true };
          return obj3;
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  },
  unarchiveThread(channel, arg1) {
    closure_0 = channel;
    closure_1 = arg1;
    return (async (arg0, value) => {
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
              closure_128_0 = undefined;
              const obj1 = { archived: false };
              closure_128_0 = tmp5.isForumPost();
              if (tmp3) {
                obj1.locked = false;
              }
              c3 = 1;
              c4 = 2;
              c5 = 1;
              let obj2 = { value: patchThread(tmp5, obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_1 = tmp92;
            const body = closure_128_1.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.TOO_MANY_THREADS) {
              let obj8 = tmp3(tmp92[12]);
              const intl7 = tmp5(tmp92[13]).intl;
              const string4 = intl7.string;
              const t4 = tmp5(tmp92[13]).t;
              if (closure_128_0) {
                let string4Result = string4(t4.kwyWNX);
              } else {
                string4Result = string4(t4["PeIE/r"]);
              }
              let obj3 = { title: string4Result, body: null };
              const intl8 = tmp5(tmp92[13]).intl;
              const string5 = intl8.string;
              let KGaiEK = tmp5(tmp92[13]).t;
              if (closure_128_0) {
                KGaiEK = KGaiEK.KGaiEK;
                let string5Result = string5(KGaiEK);
              } else {
                string5Result = string5(KGaiEK.P0wT5S);
              }
              obj3.body = string5Result;
              obj3 = obj8.show(obj3);
            } else {
              const body2 = closure_128_1.body;
              let code1;
              if (body2 != null) {
                code1 = body2.code;
              }
              if (code1 === constants.TOO_MANY_ANNOUNCEMENT_THREADS) {
                let obj6 = tmp3(tmp92[12]);
                let obj4 = { title: null, body: null };
                const intl5 = tmp5(tmp92[13]).intl;
                obj4.title = intl5.string(tmp5(tmp92[13]).t["PeIE/r"]);
                const intl6 = tmp5(tmp92[13]).intl;
                obj4.body = intl6.string(tmp5(tmp92[13]).t.jDMxz2);
                obj6.show(obj4);
              } else if (429 === closure_128_1.status) {
                obj4 = tmp3(tmp92[12]);
                const intl3 = tmp5(tmp92[13]).intl;
                const string3 = intl3.string;
                const t3 = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let string3Result = string3(t3.kwyWNX);
                } else {
                  string3Result = string3(t3["PeIE/r"]);
                }
                const obj5 = { title: string3Result, body: null };
                const intl4 = tmp5(tmp92[13]).intl;
                obj5.body = intl4.string(tmp5(tmp92[13]).t.Whhv4w);
                obj4.show(obj5);
              } else if (403 === closure_128_1.status) {
                obj2 = tmp3(tmp92[12]);
                const intl = tmp5(tmp92[13]).intl;
                const string = intl.string;
                const t = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let stringResult = string(t.kwyWNX);
                } else {
                  stringResult = string(t["PeIE/r"]);
                }
                obj6 = { title: stringResult, body: null };
                const intl2 = tmp5(tmp92[13]).intl;
                const string2 = intl2.string;
                const t2 = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let string2Result = string2(t2.hIXtcT);
                } else {
                  string2Result = string2(t2["96UEzi"]);
                }
                obj6.body = string2Result;
                obj2.show(obj6);
              } else {
                const obj7 = { title: null, body: null };
                const intl9 = tmp5(tmp92[13]).intl;
                obj7.title = intl9.string(tmp5(tmp92[13]).t.j2d6Km);
                const intl10 = tmp5(tmp92[13]).intl;
                obj7.body = intl10.string(tmp5(tmp92[13]).t.fEptJP);
                tmp3(tmp92[12]).show(obj7);
                const obj15 = tmp3(tmp92[12]);
              }
              throw closure_128_1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj8 = { value, done: true };
            return obj8;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp92) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp92;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  unarchiveThreadIfNecessary(id) {
    closure_0 = id;
    const self = this;
    return (async (arg0, value) => {
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
              channel = channel.getChannel(closure_0);
              let canResult = PermissionStore.can(constants.MANAGE_THREADS, channel);
              let isArchivedThreadResult = null != channel;
              if (isArchivedThreadResult) {
                isArchivedThreadResult = channel.isArchivedThread();
              }
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
                const obj1 = { value: self.unarchiveThread(channel, false), done: false };
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          c0 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  setInvitable(id, invitable) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_12.CHANNEL(id.id), body: { invitable }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj = { invitable };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      let obj = { type: "THREAD_UPDATE", channel: closure_4(body.body) };
      obj.dispatch(obj);
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != tmp4.parent_id;
      }
      if (isForumPostResult) {
        obj = { type: "RESORT_THREADS", channelId: tmp4.parent_id };
        DispatcherDefault.dispatch(obj);
        const tmpResult = DispatcherDefault;
      }
      return body;
    });
  },
  joinThread(channel, arg1) {
    closure_0 = channel;
    closure_1 = arg1;
    return (async (arg0, value) => {
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
              const _location = tmp3;
              const forumPost = tmp7;
              closure_128_0 = undefined;
              if (forumPost.isForumPost()) {
                dispatchThreadMemberLocalUpdate(forumPost, true);
              }
              c3 = 1;
              const HTTP = forumPost(tmp49[10]).HTTP;
              const request = { url: closure_1_12.THREAD_MEMBER(forumPost.id), query: null, rejectWithError: null };
              const obj1 = { location: _location };
              request.query = obj1;
              request.rejectWithError = forumPost(tmp49[10]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              let obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            const body = tmp49.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.TOO_MANY_THREAD_MEMBERS) {
              closure_128_0 = closure_129_0.isForumPost();
              obj2 = _location(tmp49[12]);
              const intl = forumPost(tmp49[13]).intl;
              const string = intl.string;
              const t = forumPost(tmp49[13]).t;
              if (closure_128_0) {
                let stringResult = string(t.EMYJFi);
              } else {
                stringResult = string(t.gtdVcs);
              }
              let obj3 = { title: stringResult, body: null };
              const intl2 = forumPost(tmp49[13]).intl;
              const string2 = intl2.string;
              let QYyad3 = forumPost(tmp49[13]).t;
              if (closure_128_0) {
                QYyad3 = QYyad3.QYyad3;
                let string2Result = string2(QYyad3);
              } else {
                string2Result = string2(QYyad3.abMwgm);
              }
              obj3.body = string2Result;
              obj3 = obj2.show(obj3);
            } else {
              const obj4 = { title: null, body: null };
              const intl3 = forumPost(tmp49[13]).intl;
              obj4.title = intl3.string(forumPost(tmp49[13]).t.j2d6Km);
              const intl4 = forumPost(tmp49[13]).intl;
              obj4.body = intl4.string(forumPost(tmp49[13]).t.fEptJP);
              _location(tmp49[12]).show(obj4);
              if (closure_129_0.isForumPost()) {
                dispatchThreadMemberLocalUpdate(closure_129_0, false);
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp49) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp49;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  addMember(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async (arg0, value) => {
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
              const HTTP = closure_0(_location[10]).HTTP;
              const request = { url: closure_1_12.THREAD_MEMBER(closure_0.id, tmp3), query: null, rejectWithError: null };
              const obj1 = { location: _location };
              request.query = obj1;
              request.rejectWithError = closure_0(_location[10]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              let obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            const body = _location.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code !== constants.TOO_MANY_THREAD_MEMBERS) {
              const obj3 = { title: null, body: null };
              const intl3 = closure_0(_location[13]).intl;
              obj3.title = intl3.string(closure_0(_location[13]).t.j2d6Km);
              const intl4 = closure_0(_location[13]).intl;
              obj3.body = intl4.string(closure_0(_location[13]).t.fEptJP);
              tmp3(_location[12]).show(obj3);
              c5 = 3;
              const obj8 = tmp3(_location[12]);
            }
            closure_128_0 = closure_129_0.isForumPost();
            obj2 = tmp3(_location[12]);
            const intl = closure_0(_location[13]).intl;
            const string = intl.string;
            const t = closure_0(_location[13]).t;
            if (closure_128_0) {
              let stringResult = string(t["0yAqqN"]);
            } else {
              stringResult = string(t.YErysD);
            }
            let obj4 = { title: stringResult, body: null };
            const intl2 = closure_0(_location[13]).intl;
            const string2 = intl2.string;
            let QYyad3 = closure_0(_location[13]).t;
            if (closure_128_0) {
              QYyad3 = QYyad3.QYyad3;
              let string2Result = string2(QYyad3);
            } else {
              string2Result = string2(QYyad3.abMwgm);
            }
            obj4.body = string2Result;
            obj4 = obj2.show(obj4);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp33) {
          _location = tmp33;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  leaveThread(channel, location) {
    if (channel.isForumPost()) {
      const obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: channel.id, guildId: channel.getGuildId(), userId: AuthenticationStore.getId(), isJoining: false };
      obj.dispatch(obj);
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_12.THREAD_MEMBER(channel.id), query: { location }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(request);
  },
  removeMember(id, arg1, location) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_12.THREAD_MEMBER(id, arg1), query: { location }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(request);
  },
  setAutoArchiveDuration(id, auto_archive_duration) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_1_12.CHANNEL(id.id), body: { auto_archive_duration }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.patch(request);
  },
  pin(thread) {
    this.updateFlags(thread, thread.flags | ChannelFlags.PINNED, thread.isArchivedThread());
  },
  unpin(thread) {
    this.updateFlags(thread, thread.flags & ~ChannelFlags.PINNED);
  },
  updateFlags(thread, arg1, arg2) {
    closure_0 = thread;
    closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    return (async () => {
      let obj1 = { type: "THREAD_UPDATE", channel: tmp3.merge({ flags }) };
      flags(573).dispatch(obj1);
      const obj3 = { flags };
      if (flag) {
        obj3.archived = false;
      }
      const HTTP = tmp3(1272).HTTP;
      const request = { url: closure_1_12.CHANNEL(tmp3.id), body: obj3, rejectWithError: true };
      await HTTP.patch(request);
      if (1 === tmp7) {
        dependencyMap = 0;
        obj1 = flags(573);
        obj1.dispatch({ type: "THREAD_UPDATE", channel: closure_128_0 });
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      return arg1;
    })();
  },
  replacePin(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    const self = this;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === v6) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const obj1 = { flags: tmp3.flags & ~constants.PINNED };
              const obj2 = { flags: v6.flags | constants.PINNED };
              const mergeResult = tmp3.merge(obj1);
              const mergeResult1 = v6.merge(obj2);
              let obj3 = { type: "THREAD_UPDATE", channel: mergeResult };
              v6(573).dispatch(obj3);
              const obj24 = v6(573);
              const obj4 = { type: "THREAD_UPDATE", channel: mergeResult1 };
              v6(573).dispatch(obj4);
              v6 = 1;
              c3 = 1;
              let obj5 = { value: self.unarchiveThreadIfNecessary(tmp3.id), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              v6 = 2;
              c3 = 1;
              let obj7 = { value: closure_128_2.unarchiveThreadIfNecessary(closure_128_1.id), done: false };
              return obj7;
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              dependencyMap = 1;
              const HTTP2 = tmp3(1272).HTTP;
              const request = { url: closure_1_12.CHANNEL(closure_128_0.id), body: null, rejectWithError: true };
              const obj9 = { flags: closure_128_0.flags & ~constants.PINNED };
              request.body = obj9;
              v6 = 5;
              c3 = 1;
              const obj10 = { value: HTTP2.patch(request), done: false };
              return obj10;
            }
          } else if (3 === tmp8) {
            dependencyMap = 0;
            obj5 = v6(573);
            const obj11 = { type: "THREAD_UPDATE", channel: closure_128_0 };
            obj5.dispatch(obj11);
            obj7 = v6(573);
            const obj12 = { type: "THREAD_UPDATE", channel: closure_128_1 };
            obj7.dispatch(obj12);
            c3 = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          } else {
            if (4 === tmp8) {
              dependencyMap = 0;
              obj3 = v6(573);
              const obj14 = { type: "THREAD_UPDATE", channel: closure_128_1 };
              obj3.dispatch(obj14);
              c3 = 3;
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c3 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                dependencyMap = 2;
                const HTTP = tmp3(1272).HTTP;
                const request1 = { url: closure_1_12.CHANNEL(closure_128_1.id), body: null, rejectWithError: true };
                const obj16 = { flags: closure_128_1.flags | constants.PINNED };
                request1.body = obj16;
                v6 = 6;
                c3 = 1;
                const obj17 = { value: HTTP.patch(request1), done: false };
                return obj17;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp26) {
          if (tmp4 === dependencyMap) {
            c3 = tmp2;
            throw tmp26;
          } else if (tmp === tmp27) {
            v6 = tmp2;
          } else {
            v6 = tmp5;
          }
        }
      }
    })();
  },
  openThreadCreationForMobile(channel, id, Message) {
    let obj = { location: Message, channel_id: channel.id, guild_id: channel.guild_id };
    obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
    obj = { parentMessageId: id, isPrivate: false, location: Message };
    DraftActionCreatorsDefault.changeThreadSettings(channel.id, obj);
    if (null == id) {
      const obj1 = { channelId: channel.id, command: null, section: null };
      ApplicationCommandActionCreators.setActiveCommand(obj1);
      const tmpResult = ApplicationCommandActionCreators;
    }
  },
  setNotificationSettings(channel, muteSettings) {
    closure_0 = channel;
    closure_1 = muteSettings;
    const self = this;
    return (async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const result = tmp4(7781).trackThreadNotificationSettingsUpdated(tmp4, closure_1);
              if (!JoinedThreadsStore.hasJoined(tmp4.id)) {
                c1 = 1;
                dependencyMap = 1;
                const obj1 = { value: self.joinThread(tmp4, "Change Notification Settings"), done: false };
                return obj1;
              }
              const obj8 = tmp4(7781);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          }
          const HTTP = tmp4(1272).HTTP;
          const request = { url: closure_1_12.THREAD_MEMBER_SETTINGS(closure_128_0.id), body: closure_128_1, rejectWithError: tmp4(1272).rejectWithMigratedError() };
          dependencyMap = 3;
          const obj2 = { value: HTTP.patch(request), done: true };
          return obj2;
        } catch (tmp15) {
          dependencyMap = tmp;
          throw tmp15;
        }
      }
    })();
  },
  loadArchivedThreads(sortOrder) {
    ({ guildId: require, channelId } = sortOrder);
    sortOrder = sortOrder.sortOrder;
    const tagFilter = sortOrder.tagFilter;
    const tagSetting = sortOrder.tagSetting;
    const offset = sortOrder.offset;
    if (!ArchivedThreadsStore.isLoading(channelId, sortOrder, tagFilter, tagSetting)) {
      channelId(sortOrder[11]);
      let obj = { type: "LOAD_ARCHIVED_THREADS", channelId, sortOrder, tagFilter, tagSetting };
      obj.dispatch(obj);
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_12.THREAD_SEARCH(channelId), query: null, retries: 2, rejectWithError: true };
      obj = { archived: true, sort_by: "last_message_time", sort_order: "desc", limit: PAGE_SIZE, tag: null, tag_setting: null, offset: null };
      let joined;
      if (tagFilter.size > 0) {
        const _Array = Array;
        joined = Array.from(tagFilter).join(",");
        const arr = Array.from(tagFilter);
      }
      obj.tag = joined;
      obj.tag_setting = tagSetting;
      obj.offset = offset;
      request.query = obj;
      value = HTTP.get(request);
      value.then((body) => {
        ({ threads, members } = body.body);
        if (null == threads) {
          let obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
          obj.dispatch(obj);
        } else {
          obj = { type: "LOAD_ARCHIVED_THREADS_SUCCESS", guildId, channelId, offset, sortOrder, tagFilter, tagSetting, threads, firstMessages: tmp2, mostRecentMessages: tmp3, members: null, owners: null, hasMore: null };
          if (members == null) {
            members = [];
          }
          obj.members = members.map((item) => channelId(sortOrder[18])(item));
          const mapped = threads.map((owner) => owner.owner);
          obj.owners = mapped.filter(GlobalUtils.isNotNullish);
          obj.hasMore = tmp;
          DispatcherDefault.dispatch(obj);
        }
      }, () => {
        const obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
        obj.dispatch(obj);
      });
    }
  },
  searchThreads(arg0, arg1, arg2, arg3, arg4) {
    _require = arg0;
    closure_1 = arg1;
    dependencyMap = arg2;
    asyncGeneratorStep = arg3;
    let MATCH_SOME = arg4;
    if (arg4 === undefined) {
      MATCH_SOME = require("ThreadSearchTagSetting").ThreadSearchTagSetting.MATCH_SOME;
    }
    return (async () => {
      if (null != closure_3) {
        if (tmp36.size > 0) {
          const _Array = Array;
          const joined = Array.from(tmp36).join(",");
          Array.from(tmp36);
        }
      }
      const HTTP = tmp2(name[10]).HTTP;
      const request = { url: closure_1_12.THREAD_SEARCH(tmp3), query: { name, tag: joined, tag_setting: MATCH_SOME }, rejectWithError: tmp2(name[10]).rejectWithMigratedError() };
      await HTTP.get(request);
      const body = arg1.body;
      const threads = body.threads;
      const members = body.members;
      const first_messages = body.first_messages;
      const most_recent_messages = body.most_recent_messages;
      tmp3(name[11]).dispatch({ type: "LOAD_THREADS_SUCCESS", threads, members, guildId: closure_129_0, firstMessages: first_messages, mostRecentMessages: most_recent_messages });
      return threads.map((id) => id.id);
    })();
  },
  summarizeThread(isThread, arg1) {
    _require = isThread;
    if (isThread.isThread()) {
      if (!ThreadSummaryStore.isInProgress()) {
        let flag = arg1;
        let obj = DispatcherDefault;
        obj.dispatch({ type: "SUMMARIZE_THREAD_START" });
        const HTTP = require("HTTPUtils").HTTP;
        const request = { url: closure_12.AI_SUMMARIZE_THREAD(isThread.id), body: null, rejectWithError: null };
        if (arg1 == null) {
          flag = true;
        }
        obj = { ephemeral: flag };
        request.body = obj;
        request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
        const tmp5Result = require("HTTPUtils");
        const postResult = HTTP.post(request);
        return HTTP.post(request).then(() => {
          const obj = { type: "SUMMARIZE_THREAD_SUCCESS", channelId: isThread.id };
          obj.dispatch(obj);
        }).catch(() => {
          let obj = { type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id };
          obj.dispatch(obj);
          obj = { title: null, body: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.j2d6Km);
          const intl2 = util.intl;
          obj.body = intl2.string(util.t.fEptJP);
          AlertActionCreatorsDefault.show(obj);
        });
      }
    }
  }
};