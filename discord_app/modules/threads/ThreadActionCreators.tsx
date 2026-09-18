// === Module 7967: ThreadActionCreators ===

// Module 7967 (ThreadActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4902 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5066 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7979 */;
import ApplicationCommandActionCreators from "ApplicationCommandActionCreators" /* 7980 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import ArchivedThreadsStore from "ArchivedThreadsStore" /* 7968 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4363 */;
import ThreadSummaryStore from "ThreadSummaryStore" /* 7978 */;

const require = globalThis.__r;

require = fn;
function patchThread(id, body) {
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_12.CHANNEL(id.id), body, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  const obj2 = require("HTTPUtils");
  return HTTP.patch(request).then((body) => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "THREAD_UPDATE", channel: closure_4(body.body) });
    let isForumPostResult = forumPost.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = null != forumPost.parent_id;
    }
    if (isForumPostResult) {
      const obj3 = { type: "RESORT_THREADS", channelId: forumPost.parent_id };
      DispatcherDefault.dispatch(obj3);
      const tmpResult = DispatcherDefault;
    }
    return body;
  });
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "THREAD_MEMBER_LOCAL_UPDATE", id: id.id, guildId: id.getGuildId(), userId: AuthenticationStore.getId(), isJoining });
}
let closure_4 = fn(1962).createChannelRecordFromServer;
const PAGE_SIZE = fn(7968).PAGE_SIZE;
const Constants = fn(1074);
({ Endpoints: closure_12, AbortCodes: map1, AnalyticEvents: closure_14, Permissions: closure_15 } = Constants);
const ChannelFlags = fn(1965).ChannelFlags;
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
      const obj = DispatcherDefault;
      obj.dispatch({ type: "THREAD_UPDATE", channel: closure_4(body.body) });
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != forumPost.parent_id;
      }
      if (isForumPostResult) {
        const obj3 = { type: "RESORT_THREADS", channelId: forumPost.parent_id };
        DispatcherDefault.dispatch(obj3);
        const tmpResult = DispatcherDefault;
      }
      return body;
    });
  },
  lockThread(channel) {
    closure_0 = channel;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              const isArchivedThreadResult = tmp3.isArchivedThread();
              closure_128_0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: self.unarchiveThread(tmp3, false), done: false };
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
          const obj5 = { locked: true, archived: closure_128_0 };
          c3 = 3;
          const obj6 = { value: patchThread(closure_129_0, obj5), done: true };
          return obj6;
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
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              const isArchivedThreadResult = tmp3.isArchivedThread();
              closure_128_0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                const obj4 = { value: self.unarchiveThread(tmp3, true), done: false };
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
          const obj5 = { locked: false, archived: closure_128_0 };
          c3 = 3;
          const obj6 = { value: patchThread(closure_129_0, obj5), done: true };
          return obj6;
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
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              const obj6 = { archived: false };
              closure_128_0 = tmp5.isForumPost();
              if (tmp3) {
                obj6.locked = false;
              }
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj8 = { value: patchThread(tmp5, obj6), done: false };
              return obj8;
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
              const intl7 = tmp5(tmp92[13]).intl;
              const string4 = intl7.string;
              const t4 = tmp5(tmp92[13]).t;
              if (closure_128_0) {
                let string4Result = string4(t4.kwyWNX);
              } else {
                string4Result = string4(t4["PeIE/r"]);
              }
              let obj10 = { title: string4Result, body: null };
              const intl8 = tmp5(tmp92[13]).intl;
              const string5 = intl8.string;
              let KGaiEK = tmp5(tmp92[13]).t;
              if (closure_128_0) {
                KGaiEK = KGaiEK.KGaiEK;
                let string5Result = string5(KGaiEK);
              } else {
                string5Result = string5(KGaiEK.P0wT5S);
              }
              obj10.body = string5Result;
              obj10 = tmp3(tmp92[12]).show(obj10);
              const obj9 = tmp3(tmp92[12]);
            } else {
              const body2 = closure_128_1.body;
              let code1;
              if (body2 != null) {
                code1 = body2.code;
              }
              if (code1 === constants.TOO_MANY_ANNOUNCEMENT_THREADS) {
                const obj11 = { title: null, body: null };
                const intl5 = tmp5(tmp92[13]).intl;
                obj11.title = intl5.string(tmp5(tmp92[13]).t["PeIE/r"]);
                const intl6 = tmp5(tmp92[13]).intl;
                obj11.body = intl6.string(tmp5(tmp92[13]).t.jDMxz2);
                tmp3(tmp92[12]).show(obj11);
                const obj7 = tmp3(tmp92[12]);
              } else if (429 === closure_128_1.status) {
                const intl3 = tmp5(tmp92[13]).intl;
                const string3 = intl3.string;
                const t3 = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let string3Result = string3(t3.kwyWNX);
                } else {
                  string3Result = string3(t3["PeIE/r"]);
                }
                const obj12 = { title: string3Result, body: null };
                const intl4 = tmp5(tmp92[13]).intl;
                obj12.body = intl4.string(tmp5(tmp92[13]).t.Whhv4w);
                tmp3(tmp92[12]).show(obj12);
                const obj5 = tmp3(tmp92[12]);
              } else if (403 === closure_128_1.status) {
                const intl = tmp5(tmp92[13]).intl;
                const string = intl.string;
                const t = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let stringResult = string(t.kwyWNX);
                } else {
                  stringResult = string(t["PeIE/r"]);
                }
                const obj13 = { title: stringResult, body: null };
                const intl2 = tmp5(tmp92[13]).intl;
                const string2 = intl2.string;
                const t2 = tmp5(tmp92[13]).t;
                if (closure_128_0) {
                  let string2Result = string2(t2.hIXtcT);
                } else {
                  string2Result = string2(t2["96UEzi"]);
                }
                obj13.body = string2Result;
                tmp3(tmp92[12]).show(obj13);
                const obj3 = tmp3(tmp92[12]);
              } else {
                const obj14 = { title: null, body: null };
                const intl9 = tmp5(tmp92[13]).intl;
                obj14.title = intl9.string(tmp5(tmp92[13]).t.j2d6Km);
                const intl10 = tmp5(tmp92[13]).intl;
                obj14.body = intl10.string(tmp5(tmp92[13]).t.fEptJP);
                tmp3(tmp92[12]).show(obj14);
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
            const obj16 = { value, done: true };
            return obj16;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
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
    let obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "THREAD_UPDATE", channel: closure_4(body.body) });
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != forumPost.parent_id;
      }
      if (isForumPostResult) {
        const obj3 = { type: "RESORT_THREADS", channelId: forumPost.parent_id };
        DispatcherDefault.dispatch(obj3);
        const tmpResult = DispatcherDefault;
      }
      return body;
    });
  },
  joinThread(channel, arg1) {
    closure_0 = channel;
    closure_1 = arg1;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
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
              const obj5 = { location: _location };
              request.query = obj5;
              request.rejectWithError = forumPost(tmp49[10]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
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
              const intl = forumPost(tmp49[13]).intl;
              const string = intl.string;
              const t = forumPost(tmp49[13]).t;
              if (closure_128_0) {
                let stringResult = string(t.EMYJFi);
              } else {
                stringResult = string(t.gtdVcs);
              }
              let obj8 = { title: stringResult, body: null };
              const intl2 = forumPost(tmp49[13]).intl;
              const string2 = intl2.string;
              let QYyad3 = forumPost(tmp49[13]).t;
              if (closure_128_0) {
                QYyad3 = QYyad3.QYyad3;
                let string2Result = string2(QYyad3);
              } else {
                string2Result = string2(QYyad3.abMwgm);
              }
              obj8.body = string2Result;
              obj8 = _location(tmp49[12]).show(obj8);
              const obj3 = _location(tmp49[12]);
            } else {
              const obj9 = { title: null, body: null };
              const intl3 = forumPost(tmp49[13]).intl;
              obj9.title = intl3.string(forumPost(tmp49[13]).t.j2d6Km);
              const intl4 = forumPost(tmp49[13]).intl;
              obj9.body = intl4.string(forumPost(tmp49[13]).t.fEptJP);
              _location(tmp49[12]).show(obj9);
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
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp7;
              closure_128_0 = undefined;
              c3 = 1;
              const HTTP = closure_0(_location[10]).HTTP;
              const request = { url: closure_1_12.THREAD_MEMBER(closure_0.id, tmp3), query: null, rejectWithError: null };
              const obj5 = { location: _location };
              request.query = obj5;
              request.rejectWithError = closure_0(_location[10]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            const body = _location.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code !== constants.TOO_MANY_THREAD_MEMBERS) {
              const obj7 = { title: null, body: null };
              const intl3 = closure_0(_location[13]).intl;
              obj7.title = intl3.string(closure_0(_location[13]).t.j2d6Km);
              const intl4 = closure_0(_location[13]).intl;
              obj7.body = intl4.string(closure_0(_location[13]).t.fEptJP);
              tmp3(_location[12]).show(obj7);
              c5 = 3;
              const obj8 = tmp3(_location[12]);
            }
            closure_128_0 = closure_129_0.isForumPost();
            const intl = closure_0(_location[13]).intl;
            const string = intl.string;
            const t = closure_0(_location[13]).t;
            if (closure_128_0) {
              let stringResult = string(t["0yAqqN"]);
            } else {
              stringResult = string(t.YErysD);
            }
            let obj9 = { title: stringResult, body: null };
            const intl2 = closure_0(_location[13]).intl;
            const string2 = intl2.string;
            let QYyad3 = closure_0(_location[13]).t;
            if (closure_128_0) {
              QYyad3 = QYyad3.QYyad3;
              let string2Result = string2(QYyad3);
            } else {
              string2Result = string2(QYyad3.abMwgm);
            }
            obj9.body = string2Result;
            obj9 = tmp3(_location[12]).show(obj9);
            const obj3 = tmp3(_location[12]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
      const obj2 = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: channel.id, guildId: channel.getGuildId(), userId: AuthenticationStore.getId(), isJoining: false };
      DispatcherDefault.dispatch(obj2);
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
  updateFlags(thread, arg1) {
    closure_0 = thread;
    closure_1 = arg1;
    let flag = thread2;
    if (thread2 === undefined) {
      flag = false;
    }
    return (async () => {
      flags(573).dispatch({ type: "THREAD_UPDATE", channel: tmp3.merge({ flags }) });
      const obj7 = { flags };
      if (flag) {
        obj7.archived = false;
      }
      const HTTP = tmp3(1271).HTTP;
      const request = { url: closure_1_12.CHANNEL(tmp3.id), body: obj7, rejectWithError: true };
      await HTTP.patch(request);
      if (1 === tmp7) {
        dependencyMap = 0;
        flags(573).dispatch({ type: "THREAD_UPDATE", channel: closure_128_0 });
        c3 = 3;
        flags(573);
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      return value;
    })();
  },
  replacePin(arg0, thread) {
    closure_0 = arg0;
    closure_1 = thread;
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj5 = { flags: tmp3.flags & ~constants.PINNED };
              const obj7 = { flags: v6.flags | constants.PINNED };
              const mergeResult = tmp3.merge(obj5);
              const mergeResult1 = v6.merge(obj7);
              const obj9 = { type: "THREAD_UPDATE", channel: mergeResult };
              v6(573).dispatch(obj9);
              const obj24 = v6(573);
              const obj10 = { type: "THREAD_UPDATE", channel: mergeResult1 };
              v6(573).dispatch(obj10);
              v6 = 1;
              c3 = 1;
              const obj11 = { value: self.unarchiveThreadIfNecessary(tmp3.id), done: false };
              return obj11;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              v6 = 2;
              c3 = 1;
              const obj13 = { value: closure_128_2.unarchiveThreadIfNecessary(closure_128_1.id), done: false };
              return obj13;
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              dependencyMap = 1;
              const HTTP2 = tmp3(1271).HTTP;
              const request = { url: closure_1_12.CHANNEL(closure_128_0.id), body: null, rejectWithError: true };
              const obj15 = { flags: closure_128_0.flags & ~constants.PINNED };
              request.body = obj15;
              v6 = 5;
              c3 = 1;
              const obj16 = { value: HTTP2.patch(request), done: false };
              return obj16;
            }
          } else if (3 === tmp8) {
            dependencyMap = 0;
            const obj17 = { type: "THREAD_UPDATE", channel: closure_128_0 };
            v6(573).dispatch(obj17);
            const obj6 = v6(573);
            const obj18 = { type: "THREAD_UPDATE", channel: closure_128_1 };
            v6(573).dispatch(obj18);
            c3 = 3;
            const obj19 = { value: undefined, done: true };
            return obj19;
          } else {
            if (4 === tmp8) {
              dependencyMap = 0;
              const obj20 = { type: "THREAD_UPDATE", channel: closure_128_1 };
              v6(573).dispatch(obj20);
              c3 = 3;
              const obj4 = v6(573);
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c3 = 3;
                const obj21 = { value, done: true };
                return obj21;
              } else {
                dependencyMap = 2;
                const HTTP = tmp3(1271).HTTP;
                const request1 = { url: closure_1_12.CHANNEL(closure_128_1.id), body: null, rejectWithError: true };
                const obj22 = { flags: closure_128_1.flags | constants.PINNED };
                request1.body = obj22;
                v6 = 6;
                c3 = 1;
                const obj23 = { value: HTTP.patch(request1), done: false };
                return obj23;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c3 = 3;
            const obj = { value, done: true };
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
    AppAnalyticsUtils.trackWithMetadata(constants.THREAD_CREATION_STARTED, { location: Message, channel_id: channel.id, guild_id: channel.guild_id });
    const obj2 = { location: Message, channel_id: channel.id, guild_id: channel.guild_id };
    DraftActionCreatorsDefault.changeThreadSettings(channel.id, { parentMessageId: id, isPrivate: false, location: Message });
    if (null == id) {
      const obj5 = { channelId: channel.id, command: null, section: null };
      ApplicationCommandActionCreators.setActiveCommand(obj5);
      const tmpResult = ApplicationCommandActionCreators;
    }
    const obj4 = { parentMessageId: id, isPrivate: false, location: Message };
  },
  setNotificationSettings(channel, muteSettings) {
    closure_0 = channel;
    closure_1 = muteSettings;
    const self = this;
    return (async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const result = tmp4(7983).trackThreadNotificationSettingsUpdated(tmp4, closure_1);
              if (!JoinedThreadsStore.hasJoined(tmp4.id)) {
                c1 = 1;
                dependencyMap = 1;
                const obj5 = { value: self.joinThread(tmp4, "Change Notification Settings"), done: false };
                return obj5;
              }
              const obj8 = tmp4(7983);
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          }
          const HTTP = tmp4(1271).HTTP;
          const request = { url: closure_1_12.THREAD_MEMBER_SETTINGS(closure_128_0.id), body: closure_128_1, rejectWithError: tmp4(1271).rejectWithMigratedError() };
          dependencyMap = 3;
          const obj6 = { value: HTTP.patch(request), done: true };
          return obj6;
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
      let obj2 = { type: "LOAD_ARCHIVED_THREADS", channelId, sortOrder, tagFilter, tagSetting };
      channelId(sortOrder[11]).dispatch(obj2);
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_12.THREAD_SEARCH(channelId), query: null, retries: 2, rejectWithError: true };
      let obj3 = { archived: true, sort_by: "last_message_time", sort_order: "desc", limit: PAGE_SIZE, tag: null, tag_setting: null, offset: null };
      let joined;
      if (tagFilter.size > 0) {
        const _Array = Array;
        joined = Array.from(tagFilter).join(",");
        const arr = Array.from(tagFilter);
      }
      obj3.tag = joined;
      obj3.tag_setting = tagSetting;
      obj3.offset = offset;
      request.query = obj3;
      value = HTTP.get(request);
      value.then((body) => {
        ({ threads, members } = body.body);
        if (null == threads) {
          const obj2 = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
          DispatcherDefault.dispatch(obj2);
        } else {
          const obj4 = { type: "LOAD_ARCHIVED_THREADS_SUCCESS", guildId, channelId, offset, sortOrder, tagFilter, tagSetting, threads, firstMessages: tmp2, mostRecentMessages: tmp3, members: null, owners: null, hasMore: null };
          if (members == null) {
            members = [];
          }
          obj4.members = members.map((item) => channelId(sortOrder[18])(item));
          const mapped = threads.map((owner) => owner.owner);
          obj4.owners = mapped.filter(GlobalUtils.isNotNullish);
          obj4.hasMore = tmp;
          DispatcherDefault.dispatch(obj4);
        }
      }, () => {
        DispatcherDefault.dispatch({ type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting });
      });
      let obj = channelId(sortOrder[11]);
    }
  },
  searchThreads(arg0, channelId, arg2, arg3, arg4) {
    _require = arg0;
    closure_1 = channelId;
    dependencyMap = arg2;
    asyncGeneratorStep = arg3;
    let MATCH_SOME = arg4;
    if (arg4 === undefined) {
      MATCH_SOME = require("ThreadSearchTagSetting").ThreadSearchTagSetting.MATCH_SOME;
    }
    return (async () => {
      if (null != size) {
        if (size.size > 0) {
          const _Array = Array;
          const joined = Array.from(size).join(",");
          Array.from(size);
        }
      }
      const HTTP = tmp2(name[10]).HTTP;
      const request = { url: closure_1_12.THREAD_SEARCH(tmp3), query: { name, tag: joined, tag_setting: MATCH_SOME }, rejectWithError: tmp2(name[10]).rejectWithMigratedError() };
      await HTTP.get(request);
      const body = value.body;
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
        DispatcherDefault.dispatch({ type: "SUMMARIZE_THREAD_START" });
        const HTTP = require("HTTPUtils").HTTP;
        const request = { url: closure_12.AI_SUMMARIZE_THREAD(isThread.id), body: null, rejectWithError: null };
        if (arg1 == null) {
          flag = true;
        }
        let obj2 = { ephemeral: flag };
        request.body = obj2;
        request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
        const tmp5Result = require("HTTPUtils");
        const postResult = HTTP.post(request);
        return HTTP.post(request).then(() => {
          DispatcherDefault.dispatch({ type: "SUMMARIZE_THREAD_SUCCESS", channelId: isThread.id });
        }).catch(() => {
          DispatcherDefault.dispatch({ type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id });
          const obj2 = { type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id };
          const obj4 = { title: null, body: null };
          const intl = util.intl;
          obj4.title = intl.string(util.t.j2d6Km);
          const intl2 = util.intl;
          obj4.body = intl2.string(util.t.fEptJP);
          AlertActionCreatorsDefault.show(obj4);
        });
      }
    }
  }
};