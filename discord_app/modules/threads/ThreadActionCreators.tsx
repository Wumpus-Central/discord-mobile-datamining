// === Module 7512: patchThread ===

// Module 7512 (patchThread)
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import set from "set" /* 1402 */;
import obj132Default from "obj132" /* 4827 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import dispatcherDefault2 from "dispatcher" /* 7524 */;
import setActiveCommand from "setActiveCommand" /* 7525 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { createChannelRecordFromServer as closure_4 } from "createChannelRecord" /* 1395 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import listKey from "listKey" /* 7513 */;
import { PAGE_SIZE } from "listKey" /* 7513 */;
import storeThread from "storeThread" /* 4023 */;
import handleSummarizeThreadFinish from "handleSummarizeThreadFinish" /* 7523 */;
import ME from "ME" /* 676 */;
import { ChannelFlags } from "set" /* 1398 */;

require = fn;
function patchThread(id, body) {
  const _require = id;
  const HTTP = _require(530).HTTP;
  const obj = { url: closure_12.CHANNEL(id.id), body, rejectWithError: _require(530).rejectWithMigratedError() };
  const obj2 = _require(530);
  return HTTP.patch(obj).then((result) => {
    let obj = { type: "THREAD_UPDATE", channel: closure_1_4(result.body) };
    obj.dispatch(obj);
    let isForumPostResult = forumPost.isForumPost();
    if (isForumPostResult) {
      isForumPostResult = null != forumPost.parent_id;
    }
    if (isForumPostResult) {
      obj = { type: "RESORT_THREADS", channelId: null };
      obj[1] = forumPost.parent_id;
      dispatcherDefault.dispatch(obj);
      const tmpResult = dispatcherDefault;
    }
    return result;
  });
}
function dispatchThreadMemberLocalUpdate(id, isJoining) {
  const obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: id.id, guildId: id.getGuildId(), userId: store.getId(), isJoining };
  obj.dispatch(obj);
}
({ Endpoints: closure_12, AbortCodes: map1, AnalyticEvents: closure_14, Permissions: closure_15 } = ME);
let result = require("obj132").fileFinishedImporting("modules/threads/ThreadActionCreators.tsx");

export default {
  archiveThread(channel, arg1) {
    let obj = { archived: true };
    if (arg1) {
      obj.locked = true;
    }
    const _require = channel;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_12.CHANNEL(channel.id), body: obj, rejectWithError: _require(530).rejectWithMigratedError() };
    const obj3 = _require(530);
    return HTTP.patch(obj).then((result) => {
      let obj = { type: "THREAD_UPDATE", channel: closure_1_4(result.body) };
      obj.dispatch(obj);
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != forumPost.parent_id;
      }
      if (isForumPostResult) {
        obj = { type: "RESORT_THREADS", channelId: null };
        obj[1] = forumPost.parent_id;
        dispatcherDefault.dispatch(obj);
        const tmpResult = dispatcherDefault;
      }
      return result;
    });
  },
  lockThread(channel) {
    closure_0 = channel;
    const self = this;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              c0 = tmp3;
              c0 = undefined;
              const isArchivedThreadResult = channel.isArchivedThread();
              c0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = self.unarchiveThread(channel, false);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          const obj2 = { locked: true, archived: null };
          obj2[1] = c0;
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = closure_1_17(c0, obj2);
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
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              c0 = tmp3;
              c0 = undefined;
              const isArchivedThreadResult = channel.isArchivedThread();
              c0 = isArchivedThreadResult;
              if (isArchivedThreadResult) {
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = self.unarchiveThread(channel, true);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          const obj2 = { locked: false, archived: null };
          obj2[1] = c0;
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = closure_1_17(c0, obj2);
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
              closure_0 = tmp5;
              closure_0 = undefined;
              obj1 = { archived: false };
              closure_0 = channel.isForumPost();
              if (closure_1_1) {
                obj1.locked = false;
              }
              c3 = 1;
              c4 = 2;
              c5 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = closure_1_17(channel, obj1);
              return obj2;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            body = closure_2;
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_13.TOO_MANY_THREADS) {
              let obj8 = closure_1_1(closure_1_2[12]);
              const intl7 = channel(closure_1_2[13]).intl;
              const string4 = intl7.string;
              const t4 = channel(closure_1_2[13]).t;
              if (channel) {
                let string4Result = string4(t4.kwyWNX);
              } else {
                string4Result = string4(t4["PeIE/r"]);
              }
              let obj3 = { title: null, body: null };
              obj3[0] = string4Result;
              const intl8 = channel(closure_1_2[13]).intl;
              const string5 = intl8.string;
              let KGaiEK = channel(closure_1_2[13]).t;
              if (channel) {
                KGaiEK = KGaiEK.KGaiEK;
                let string5Result = string5(KGaiEK);
              } else {
                string5Result = string5(KGaiEK.P0wT5S);
              }
              obj3[1] = string5Result;
              obj3 = obj8.show(obj3);
            } else {
              const body2 = closure_1_1.body;
              let code1;
              if (body2 != null) {
                code1 = body2.code;
              }
              if (code1 === closure_1_13.TOO_MANY_ANNOUNCEMENT_THREADS) {
                let obj6 = closure_1_1(closure_1_2[12]);
                let obj4 = { title: null, body: null };
                const intl5 = channel(closure_1_2[13]).intl;
                obj4[0] = intl5.string(channel(closure_1_2[13]).t["PeIE/r"]);
                const intl6 = channel(closure_1_2[13]).intl;
                obj4[1] = intl6.string(channel(closure_1_2[13]).t.jDMxz2);
                obj6.show(obj4);
              } else if (429 === closure_1_1.status) {
                obj4 = closure_1_1(closure_1_2[12]);
                const intl3 = channel(closure_1_2[13]).intl;
                const string3 = intl3.string;
                const t3 = channel(closure_1_2[13]).t;
                if (channel) {
                  let string3Result = string3(t3.kwyWNX);
                } else {
                  string3Result = string3(t3["PeIE/r"]);
                }
                const obj5 = { title: null, body: null };
                obj5[0] = string3Result;
                const intl4 = channel(closure_1_2[13]).intl;
                obj5[1] = intl4.string(channel(closure_1_2[13]).t.Whhv4w);
                obj4.show(obj5);
              } else if (403 === closure_1_1.status) {
                obj2 = closure_1_1(closure_1_2[12]);
                const intl = channel(closure_1_2[13]).intl;
                const string = intl.string;
                const t = channel(closure_1_2[13]).t;
                if (channel) {
                  let stringResult = string(t.kwyWNX);
                } else {
                  stringResult = string(t["PeIE/r"]);
                }
                obj6 = { title: null, body: null };
                obj6[0] = stringResult;
                const intl2 = channel(closure_1_2[13]).intl;
                const string2 = intl2.string;
                const t2 = channel(closure_1_2[13]).t;
                if (channel) {
                  let string2Result = string2(t2.hIXtcT);
                } else {
                  string2Result = string2(t2["96UEzi"]);
                }
                obj6[1] = string2Result;
                obj2.show(obj6);
              } else {
                const obj7 = { title: null, body: null };
                const intl9 = channel(closure_1_2[13]).intl;
                obj7[0] = intl9.string(channel(closure_1_2[13]).t.j2d6Km);
                const intl10 = channel(closure_1_2[13]).intl;
                obj7[1] = intl10.string(channel(closure_1_2[13]).t.fEptJP);
                closure_1_1(closure_1_2[12]).show(obj7);
                const obj15 = closure_1_1(closure_1_2[12]);
              }
              throw closure_1_1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp92) {
          closure_2 = tmp92;
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
  unarchiveThreadIfNecessary(closure_1_0) {
    closure_0 = require;
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
              const channel = closure_1_6.getChannel(c0);
              let canResult = closure_1_7.can(closure_1_15.MANAGE_THREADS, channel);
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
                obj1 = { value: null, done: false };
                obj1[0] = c1.unarchiveThread(channel, false);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp9) {
          c0 = tmp;
          throw tmp9;
        }
      }
    })();
  },
  setInvitable(id, invitable) {
    let obj = { invitable };
    const _require = id;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_12.CHANNEL(id.id), body: obj, rejectWithError: _require(530).rejectWithMigratedError() };
    const obj3 = _require(530);
    return HTTP.patch(obj).then((result) => {
      let obj = { type: "THREAD_UPDATE", channel: closure_1_4(result.body) };
      obj.dispatch(obj);
      let isForumPostResult = forumPost.isForumPost();
      if (isForumPostResult) {
        isForumPostResult = null != forumPost.parent_id;
      }
      if (isForumPostResult) {
        obj = { type: "RESORT_THREADS", channelId: null };
        obj[1] = forumPost.parent_id;
        dispatcherDefault.dispatch(obj);
        const tmpResult = dispatcherDefault;
      }
      return result;
    });
  },
  joinThread(c5, arg1) {
    closure_0 = c5;
    closure_1 = arg1;
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
              closure_1 = tmp3;
              let lib = tmp7;
              lib = undefined;
              if (lib.isForumPost()) {
                closure_1_18(lib, true);
              }
              c3 = 1;
              const HTTP = lib(closure_1_2[10]).HTTP;
              obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = closure_1_12.THREAD_MEMBER(lib.id);
              let obj2 = { location: null };
              obj2[0] = closure_1_1;
              obj1[1] = obj2;
              let obj6 = lib(closure_1_2[10]);
              obj1[2] = obj6.rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_13.TOO_MANY_THREAD_MEMBERS) {
              lib = lib.isForumPost();
              obj2 = closure_1_1(closure_1_2[12]);
              const intl = lib(closure_1_2[13]).intl;
              const string = intl.string;
              const t = lib(closure_1_2[13]).t;
              if (lib) {
                let stringResult = string(t.EMYJFi);
              } else {
                stringResult = string(t.gtdVcs);
              }
              let obj4 = { title: null, body: null };
              obj4[0] = stringResult;
              const intl2 = lib(closure_1_2[13]).intl;
              const string2 = intl2.string;
              let QYyad3 = lib(closure_1_2[13]).t;
              if (lib) {
                QYyad3 = QYyad3.QYyad3;
                let string2Result = string2(QYyad3);
              } else {
                string2Result = string2(QYyad3.abMwgm);
              }
              obj4[1] = string2Result;
              obj4 = obj2.show(obj4);
            } else {
              const obj5 = { title: null, body: null };
              const intl3 = lib(closure_1_2[13]).intl;
              obj5[0] = intl3.string(lib(closure_1_2[13]).t.j2d6Km);
              const intl4 = lib(closure_1_2[13]).intl;
              obj5[1] = intl4.string(lib(closure_1_2[13]).t.fEptJP);
              closure_1_1(closure_1_2[12]).show(obj5);
              if (lib.isForumPost()) {
                closure_1_18(lib, false);
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp49) {
          body = tmp49;
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
              closure_1 = tmp3;
              let forumPost = tmp7;
              forumPost = undefined;
              c3 = 1;
              const HTTP = forumPost(closure_1_2[10]).HTTP;
              obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = closure_1_12.THREAD_MEMBER(forumPost.id, closure_1_1);
              let obj2 = { location: null };
              obj2[0] = closure_1_2;
              obj1[1] = obj2;
              obj1[2] = forumPost(closure_1_2[10]).rejectWithMigratedError();
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code !== closure_1_13.TOO_MANY_THREAD_MEMBERS) {
              const obj4 = { title: null, body: null };
              const intl3 = forumPost(closure_1_2[13]).intl;
              obj4[0] = intl3.string(forumPost(closure_1_2[13]).t.j2d6Km);
              const intl4 = forumPost(closure_1_2[13]).intl;
              obj4[1] = intl4.string(forumPost(closure_1_2[13]).t.fEptJP);
              closure_1_1(closure_1_2[12]).show(obj4);
              c5 = 3;
              const obj8 = closure_1_1(closure_1_2[12]);
            }
            forumPost = forumPost.isForumPost();
            obj2 = closure_1_1(closure_1_2[12]);
            const intl = forumPost(closure_1_2[13]).intl;
            const string = intl.string;
            const t = forumPost(closure_1_2[13]).t;
            if (forumPost) {
              let stringResult = string(t["0yAqqN"]);
            } else {
              stringResult = string(t.YErysD);
            }
            let obj5 = { title: null, body: null };
            obj5[0] = stringResult;
            const intl2 = forumPost(closure_1_2[13]).intl;
            const string2 = intl2.string;
            let QYyad3 = forumPost(closure_1_2[13]).t;
            if (forumPost) {
              QYyad3 = QYyad3.QYyad3;
              let string2Result = string2(QYyad3);
            } else {
              string2Result = string2(QYyad3.abMwgm);
            }
            obj5[1] = string2Result;
            obj5 = obj2.show(obj5);
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp33) {
          body = tmp33;
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
      let obj = { type: "THREAD_MEMBER_LOCAL_UPDATE", id: null, guildId: null, userId: null, isJoining: false };
      obj[1] = channel.id;
      obj[2] = channel.getGuildId();
      obj[3] = store.getId();
      obj.dispatch(obj);
    }
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_12.THREAD_MEMBER(channel.id), query: obj1, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  removeMember(id, closure_1_1, location) {
    const HTTP = sendRequest.HTTP;
    { url: closure_12.THREAD_MEMBER(id, importDefault), query: obj, rejectWithError: null };
    obj = { location };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.del(obj);
  },
  setAutoArchiveDuration(id, auto_archive_duration) {
    const HTTP = sendRequest.HTTP;
    { url: closure_12.CHANNEL(id.id), body: obj, rejectWithError: null };
    obj = { auto_archive_duration };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  pin(thread) {
    this.updateFlags(thread, thread.flags | ChannelFlags.PINNED, thread.isArchivedThread());
  },
  unpin(thread) {
    this.updateFlags(thread, thread.flags & ~ChannelFlags.PINNED);
  },
  updateFlags(thread, arg1, thread2) {
    closure_0 = thread;
    closure_1 = arg1;
    let flag = thread2;
    if (thread2 === undefined) {
      flag = false;
    }
    return callback(function*() {
      closure_0 = tmp3;
      obj1 = { type: "THREAD_UPDATE", channel: null };
      const obj2 = { flags: null };
      obj2[0] = v0;
      obj1[1] = thread.merge(obj2);
      v0(709).dispatch(obj1);
      const obj3 = { flags: null };
      obj3[0] = v0;
      if (dependencyMap) {
        obj3.archived = false;
      }
      dependencyMap = 1;
      const HTTP = thread(530).HTTP;
      const obj4 = { url: null, body: null, rejectWithError: true };
      obj4[0] = closure_1_12.CHANNEL(thread.id);
      obj4[1] = obj3;
      yield HTTP.patch(obj4);
      if (1 === tmp7) {
        dependencyMap = 0;
        obj1 = v0(709);
        const obj6 = { type: "THREAD_UPDATE", channel: null };
        obj6[1] = closure_0;
        obj1.dispatch(obj6);
        c3 = 3;
      } else if (arg0 === 1) {
        c3 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        dependencyMap = 0;
      }
      dependencyMap = 0;
      return arg1;
    })();
  },
  replacePin(closure_5, closure_0) {
    closure_0 = closure_5;
    closure_1 = closure_0;
    const self = this;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              obj1 = { flags: null };
              obj1[0] = closure_1_0.flags & ~closure_1_16.PINNED;
              const obj2 = { flags: null };
              obj2[0] = v0.flags | closure_1_16.PINNED;
              const mergeResult = closure_1_0.merge(obj1);
              const mergeResult1 = v0.merge(obj2);
              let obj3 = { type: "THREAD_UPDATE", channel: null };
              obj3[1] = mergeResult;
              v0(c2[11]).dispatch(obj3);
              const obj24 = v0(c2[11]);
              const obj4 = { type: "THREAD_UPDATE", channel: null };
              obj4[1] = mergeResult1;
              v0(c2[11]).dispatch(obj4);
              v0 = 1;
              c3 = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = c2.unarchiveThreadIfNecessary(closure_1_0.id);
              return obj5;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              v0 = 2;
              c3 = 1;
              let obj7 = { value: null, done: false };
              obj7[0] = c2.unarchiveThreadIfNecessary(v0.id);
              return obj7;
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              c2 = 1;
              const HTTP2 = closure_1_0(c2[10]).HTTP;
              const obj9 = { url: null, body: null, rejectWithError: true };
              obj9[0] = closure_1_12.CHANNEL(closure_0.id);
              const obj10 = { flags: null };
              obj10[0] = closure_0.flags & ~closure_1_16.PINNED;
              obj9[1] = obj10;
              v0 = 5;
              c3 = 1;
              const obj11 = { value: null, done: false };
              obj11[0] = HTTP2.patch(obj9);
              return obj11;
            }
          } else if (3 === tmp8) {
            c2 = 0;
            obj5 = v0(c2[11]);
            const obj12 = { type: "THREAD_UPDATE", channel: null };
            obj12[1] = closure_0;
            obj5.dispatch(obj12);
            obj7 = v0(c2[11]);
            const obj13 = { type: "THREAD_UPDATE", channel: null };
            obj13[1] = v0;
            obj7.dispatch(obj13);
            c3 = 3;
            const obj14 = { value: null, done: true };
            obj14[0] = undefined;
            return obj14;
          } else {
            if (4 === tmp8) {
              c2 = 0;
              obj3 = v0(c2[11]);
              const obj15 = { type: "THREAD_UPDATE", channel: null };
              obj15[1] = v0;
              obj3.dispatch(obj15);
              c3 = 3;
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj16 = { value: null, done: true };
                obj16[0] = arg1;
                return obj16;
              } else {
                c2 = 2;
                const HTTP = closure_1_0(c2[10]).HTTP;
                const obj17 = { url: null, body: null, rejectWithError: true };
                obj17[0] = closure_1_12.CHANNEL(v0.id);
                const obj18 = { flags: null };
                obj18[0] = v0.flags | closure_1_16.PINNED;
                obj17[1] = obj18;
                v0 = 6;
                c3 = 1;
                const obj19 = { value: null, done: false };
                obj19[0] = HTTP.patch(obj17);
                return obj19;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c2 = 0;
            }
            c2 = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp26) {
          if (tmp4 === c2) {
            c3 = tmp2;
            throw tmp26;
          } else if (tmp === tmp27) {
            v0 = tmp2;
          } else {
            v0 = tmp5;
          }
        }
      }
    })();
  },
  openThreadCreationForMobile(channel, id, Message) {
    let obj = { location: Message, channel_id: channel.id, guild_id: channel.guild_id };
    obj.trackWithMetadata(constants.THREAD_CREATION_STARTED, obj);
    obj = { parentMessageId: id, isPrivate: false, location: Message };
    dispatcherDefault2.changeThreadSettings(channel.id, obj);
    if (null == id) {
      obj1 = { channelId: null, command: null, section: null };
      obj1[0] = channel.id;
      setActiveCommand.setActiveCommand(obj1);
      const tmpResult = setActiveCommand;
    }
  },
  setNotificationSettings(channel, muteSettings) {
    closure_0 = channel;
    closure_1 = muteSettings;
    const self = this;
    return callback(function*() {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const id = tmp4;
              const result = channel(c2[17]).trackThreadNotificationSettingsUpdated(channel, c1);
              if (!closure_1_10.hasJoined(channel.id)) {
                c1 = 1;
                c2 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = c2.joinThread(channel, "Change Notification Settings");
                return obj1;
              }
              const obj8 = channel(c2[17]);
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          const HTTP = channel(c2[10]).HTTP;
          const obj2 = { url: null, body: null, rejectWithError: null };
          obj2[0] = closure_1_12.THREAD_MEMBER_SETTINGS(id.id);
          obj2[1] = c1;
          let obj3 = channel(c2[10]);
          obj2[2] = obj3.rejectWithMigratedError();
          c2 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = HTTP.patch(obj2);
          return obj3;
        } catch (tmp15) {
          c2 = tmp;
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
    if (!loading.isLoading(channelId, sortOrder, tagFilter, tagSetting)) {
      channelId(sortOrder[11]);
      let obj = { type: "LOAD_ARCHIVED_THREADS", channelId: null, sortOrder: null, tagFilter: null, tagSetting: null };
      obj[1] = channelId;
      obj[2] = sortOrder;
      obj[3] = tagFilter;
      obj[4] = tagSetting;
      obj.dispatch(obj);
      const HTTP = require(sortOrder[10]).HTTP;
      obj = { url: null, query: null, retries: 2, rejectWithError: true };
      obj[0] = closure_12.THREAD_SEARCH(channelId);
      obj1 = { archived: true, sort_by: "last_message_time", sort_order: "desc", limit: null, tag: null, tag_setting: null, offset: null };
      obj1[3] = PAGE_SIZE;
      let joined;
      if (tagFilter.size > 0) {
        const _Array = Array;
        joined = Array.from(tagFilter).join(",");
        const arr = Array.from(tagFilter);
      }
      obj1[4] = joined;
      obj1[5] = tagSetting;
      obj1[6] = offset;
      obj[1] = obj1;
      const value = HTTP.get(obj);
      value.then((result) => {
        ({ threads, members } = result.body);
        if (null == threads) {
          channelId(sortOrder[11]);
          let obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId: null, sortOrder: null, tagFilter: null, tagSetting: null };
          obj[1] = channelId;
          obj[2] = sortOrder;
          obj[3] = tagFilter;
          obj[4] = tagSetting;
          obj.dispatch(obj);
        } else {
          obj = { type: "LOAD_ARCHIVED_THREADS_SUCCESS", guildId: null, channelId: null, offset: null, sortOrder: null, tagFilter: null, tagSetting: null, threads: null, firstMessages: null, mostRecentMessages: null, members: null, owners: null, hasMore: null };
          obj[1] = closure_0;
          obj[2] = channelId;
          obj[3] = offset;
          obj[4] = sortOrder;
          obj[5] = tagFilter;
          obj[6] = tagSetting;
          obj[7] = threads;
          obj[8] = tmp2;
          obj[9] = tmp3;
          if (members == null) {
            members = [];
          }
          obj[10] = members.map((item, index) => callback(table[18])(item));
          const mapped = threads.map((item, index) => item.owner);
          obj[11] = mapped.filter(require(sortOrder[19]).isNotNullish);
          obj[12] = tmp;
          channelId(sortOrder[11]).dispatch(obj);
          const obj3 = channelId(sortOrder[11]);
        }
      }, () => {
        channelId(sortOrder[11]);
        const obj = { type: "LOAD_ARCHIVED_THREADS_FAIL", channelId, sortOrder, tagFilter, tagSetting };
        obj.dispatch(obj);
      });
    }
  },
  searchThreads(closure_1_0, closure_1_1, c2, c3, c4) {
    const _require = require;
    closure_1 = importDefault;
    dependencyMap = c2;
    const callback = c3;
    let MATCH_SOME = c4;
    if (c4 === undefined) {
      MATCH_SOME = set.ThreadSearchTagSetting.MATCH_SOME;
    }
    return callback(function*() {
      let threads = tmp3;
      let body = tmp2;
      if (null != first_messages) {
        if (tmp37.size > 0) {
          const _Array = Array;
          const joined = Array.from(tmp37).join(",");
          const arr = Array.from(tmp37);
        }
      }
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = closure_1_12.THREAD_SEARCH(closure_1_1);
      const obj2 = { name: null, tag: null, tag_setting: null };
      obj2[0] = dependencyMap;
      obj2[1] = joined;
      obj2[2] = MATCH_SOME;
      obj1[1] = obj2;
      let obj5 = closure_1_0(530);
      obj1[2] = obj5.rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = body.body;
      threads = body.threads;
      const most_recent_messages = body.most_recent_messages;
      obj5 = { type: "LOAD_THREADS_SUCCESS", threads: null, members: null, guildId: null, firstMessages: null, mostRecentMessages: null };
      obj5[1] = threads;
      obj5[2] = members;
      obj5[3] = body;
      obj5[4] = first_messages;
      obj5[5] = most_recent_messages;
      closure_1_1(709).dispatch(obj5);
      return threads.map((item, index) => item.id);
    })();
  },
  summarizeThread(isThread) {
    const _require = isThread;
    if (isThread.isThread()) {
      if (!inProgress.isInProgress()) {
        let flag = arg1;
        let obj = dispatcherDefault;
        obj.dispatch({ type: "SUMMARIZE_THREAD_START" });
        const HTTP = _require(530).HTTP;
        obj = { url: null, body: null, rejectWithError: null };
        obj[0] = closure_12.AI_SUMMARIZE_THREAD(isThread.id);
        if (arg1 == null) {
          flag = true;
        }
        obj = { ephemeral: null };
        obj[0] = flag;
        obj[1] = obj;
        obj[2] = _require(530).rejectWithMigratedError();
        const tmp5Result = _require(530);
        const postResult = HTTP.post(obj);
        return HTTP.post(obj).then((result) => {
          const obj = { type: "SUMMARIZE_THREAD_SUCCESS", channelId: isThread.id };
          obj.dispatch(obj);
        }).catch((error) => {
          let obj = { type: "SUMMARIZE_THREAD_FAILURE", channelId: isThread.id };
          obj.dispatch(obj);
          obj = { title: null, body: null };
          const intl = isThread(dependencyMap[13]).intl;
          obj[0] = intl.string(isThread(dependencyMap[13]).t.j2d6Km);
          const intl2 = isThread(dependencyMap[13]).intl;
          obj[1] = intl2.string(isThread(dependencyMap[13]).t.fEptJP);
          obj132Default.show(obj);
        });
      }
    }
  }
};