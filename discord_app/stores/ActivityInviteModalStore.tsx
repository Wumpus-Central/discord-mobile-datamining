// === Module 14009: ActivityInviteModalStore ===

// Module 14009 (ActivityInviteModalStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import sortByMatchScore from "sortByMatchScore" /* 8699 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import LocalActivityStore from "LocalActivityStore" /* 10647 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6922 */;

const sortByMatchScoreDefault = sortByMatchScore;

require = fn;
function toHeaderResult(intl) {
  const obj = { type: sortByMatchScore.AutocompleterResultTypes.HEADER, sent: false, data: sortByMatchScore.createHeaderResult(intl) };
  return obj;
}
function withSameGameSection(mapped) {
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  if (null == application_id) {
    return mapped;
  } else {
    items = [];
    const items1 = [];
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (nextResult.type === sortByMatchScore.AutocompleterResultTypes.USER) {
        if (true === tmp5.playingSameGame) {
          let arr = items.push(tmp5);
          continue;
        }
      }
      let arr2 = items1.push(tmp5);
    }
    let tmp13 = mapped;
    if (0 !== items.length) {
      tmp13 = mapped;
      if (0 !== items1.length) {
        const intl = util.intl;
        const obj = { name: activity.name };
        const items2 = [toHeaderResult(intl.formatToPlainString(util.t.HBJiRR, obj)), ];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, 1);
        const intl2 = util.intl;
        items2[arraySpreadResult] = toHeaderResult(intl2.string(util.t.Jf0OOQ));
        HermesBuiltin.arraySpread(items1, arraySpreadResult + 1);
        tmp13 = items2;
      }
    }
    return tmp13;
  }
}
function handlePresenceReset() {
  let flag = false;
  if (null != c14) {
    flag = false;
    if (null != c3) {
      c0 = null;
      mapped = mapped.map((type) => {
        if (type.type === sortByMatchScore.AutocompleterResultTypes.USER) {
          const status = PresenceStore.getStatus(type.data.record.id);
          const id = type.data.record.id;
          application_id = undefined;
          if (application_id != null) {
            application_id = application_id.application_id;
          }
          let tmp3 = null != application_id;
          if (tmp3) {
            tmp3 = null != PresenceStore.findActivity(id, (application_id) => application_id.application_id === application_id, null, false);
          }
          if (status !== type.status) {
            const obj2 = {};
            const merged = Object.assign(type);
            obj2.status = status;
            obj2.playingSameGame = tmp3;
            let tmp7 = obj2;
          } else {
            tmp7 = type;
          }
          return tmp7;
        }
        return type;
      });
      const everyResult = mapped.every((item, index) => item === mapped[index]);
      let flag2 = !everyResult;
      if (!everyResult) {
        closure_18 = withSameGameSection(mapped);
        flag2 = true;
      }
      flag = flag2;
    }
  }
  return flag;
}
function handleLocalActivityUpdate() {
  let applicationActivity = null;
  if (null != activity) {
    applicationActivity = null;
    if (null != activity.application_id) {
      applicationActivity = LocalActivityStore.getApplicationActivity(activity.application_id);
    }
  }
  let tmp5 = null != activity;
  if (tmp5) {
    tmp5 = null == applicationActivity || null == applicationActivity.party || null == applicationActivity.party.id;
    const tmp6 = null == applicationActivity || null == applicationActivity.party || null == applicationActivity.party.id;
  }
  if (tmp5) {
    let flag = null != activity;
    if (!flag) {
      flag = null != _null;
    }
    if (flag) {
      activity = null;
      if (null != _null) {
        _null.destroy();
        _null = null;
      }
      flag = true;
      if (null != _null2) {
        _null2();
        _null2 = null;
        flag = true;
      }
    }
    tmp5 = flag;
  }
  return tmp5;
}
const Constants = fn(1085);
({ ChannelTypes: closure_11, ActivityActionTypes: closure_12 } = Constants);
let items = [fn(8699).AutocompleterResultTypes.TEXT_CHANNEL, fn(8699).AutocompleterResultTypes.GROUP_DM, fn(8699).AutocompleterResultTypes.USER];
let c14 = null;
let c15 = null;
items = [];
let mapped = [];
let closure_18 = [];
const Store = initializeDefault.Store;
class ActivityInviteModalStoreClass extends Store {
}
const prototype = ActivityInviteModalStoreClass.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore, GuildStore, LocalActivityStore, PresenceStore, PrivateChannelSortStore, UserStore);
};
prototype["getActivity"] = function getActivity() {
  return c14;
};
prototype["getQuery"] = function getQuery() {
  let str;
  if (_null != null) {
    str = _null.query;
  }
  if (str == null) {
    str = "";
  }
  return str;
};
prototype["getResults"] = function getResults() {
  return closure_18;
};
ActivityInviteModalStoreClass.displayName = "ActivityInviteModalStore";
const activityInviteModalStoreClass = new ActivityInviteModalStoreClass(DispatcherDefault, {
  ACTIVITY_INVITE_MODAL_OPEN: function handleActivitityInviteSetActivity(arg0) {
    ({ activity: c14, resolve: c15 } = arg0);
    items = [];
    if (null == _null) {
      const tmp6 = new sortByMatchScoreDefault((arg0, str) => {
        let arr = arg0;
        if ("" === str.trim()) {
          items = [];
          privateChannelIds = privateChannelIds.getPrivateChannelIds();
          const item = privateChannelIds.forEach((item) => {
            channel = channel.getChannel(item);
            if (null != channel) {
              if (channel.type === constants.DM) {
                const recipientId = channel.getRecipientId();
                user = null;
                if (null != recipientId) {
                  user = user.getUser(recipientId);
                }
                if (null != user) {
                  const obj = { type: sortByMatchScore.AutocompleterResultTypes.USER, record: user, score: 0 };
                  items.push(obj);
                }
              } else if (channel.isMultiUserDM()) {
                const obj2 = { type: sortByMatchScore.AutocompleterResultTypes.GROUP_DM, record: channel, score: 0 };
                items.push(obj2);
              }
            }
          });
          arr = items;
        }
        mapped = arr.map((type) => {
          type = type.type;
          if (items(dependencyMap[8]).AutocompleterResultTypes.USER === type) {
            const record2 = type.record;
            const obj2 = { type: items(dependencyMap[8]).AutocompleterResultTypes.USER, sent: closure_1_16.includes(record2.id), status: status.getStatus(record2.id), playingSameGame: null, data: null };
            const id = record2.id;
            application_id = undefined;
            if (application_id != null) {
              application_id = application_id.application_id;
            }
            let tmp16 = null != application_id;
            if (tmp16) {
              tmp16 = null != status.findActivity(id, (application_id) => application_id.application_id === application_id, null, false);
            }
            obj2.playingSameGame = tmp16;
            obj2.data = type;
            return obj2;
          } else if (items(dependencyMap[8]).AutocompleterResultTypes.TEXT_CHANNEL === type) {
            const record = type.record;
            channel = channel.getChannel(record.parent_id);
            guild = guild.getGuild(record.guild_id);
            const obj3 = { type: items(dependencyMap[8]).AutocompleterResultTypes.TEXT_CHANNEL, sent: closure_1_16.includes(record.id), categoryName: null, guildName: null, data: null };
            let str2 = "";
            if (null != channel) {
              str2 = items(dependencyMap[10]).computeChannelName(channel, user, closure_1_8);
              const tmpResult = items(dependencyMap[10]);
            }
            obj3.categoryName = str2;
            let str3;
            if (guild != null) {
              str3 = guild.name;
            }
            if (str3 == null) {
              str3 = "";
            }
            obj3.guildName = str3;
            obj3.data = type;
            return obj3;
          } else if (items(dependencyMap[8]).AutocompleterResultTypes.GROUP_DM === type) {
            const obj = { type: items(dependencyMap[8]).AutocompleterResultTypes.GROUP_DM, sent: closure_1_16.includes(type.record.id), data: type };
            return obj;
          } else {
            return null;
          }
        });
        const found = mapped.filter((item) => null != item);
        closure_18 = closure_20(found);
        closure_21.emitChange();
      }, items, 100);
      _null = tmp6;
    }
    _null.search("");
  },
  ACTIVITY_INVITE_MODAL_QUERY: function handleActivityInviteQuery(query) {
    query = query.query;
    if (null != _null) {
      if (query !== _null.query) {
        _null.search(query);
      }
    }
    return false;
  },
  ACTIVITY_INVITE_MODAL_SEND: function handleActivityInviteSend(channelId) {
    if (null == activity) {
      return false;
    } else {
      channelId = channelId.channelId;
      const userId = channelId.userId;
      if (null != channelId) {
        const obj2 = { channelId, type: constants.JOIN, activity, location: "Channel Text Area - Invite to Join Modal" };
        let obj = userId(10667);
        userId(10667).sendActivityInvite(obj2).then(() => {
          items = [];
          items[HermesBuiltin.arraySpread(items, 0)] = channelId;
          mapped = mapped.map((type) => {
            let tmp = type;
            if (type.type !== channelId(closure_1_2[8]).AutocompleterResultTypes.HEADER) {
              const obj = {};
              const merged = Object.assign(type);
              obj.sent = closure_1_16.includes(type.data.record.id);
              tmp = obj;
            }
            return tmp;
          });
          closure_18 = withSameGameSection(mapped);
          activityInviteModalStoreClass.emitChange();
        });
        const sendActivityInviteResult = userId(10667).sendActivityInvite(obj2);
      } else if (null != userId) {
        const obj4 = { userId, type: constants.JOIN, activity, location: "Channel Text Area - Invite to Join Modal" };
        const result = userId(10667).sendActivityInviteUser(obj4);
        result.then(() => {
          items = [];
          items[HermesBuiltin.arraySpread(items, 0)] = userId;
          mapped = mapped.map((type) => {
            let tmp = type;
            if (type.type !== channelId(closure_1_2[8]).AutocompleterResultTypes.HEADER) {
              const obj = {};
              const merged = Object.assign(type);
              obj.sent = closure_1_16.includes(type.data.record.id);
              tmp = obj;
            }
            return tmp;
          });
          closure_18 = withSameGameSection(mapped);
          activityInviteModalStoreClass.emitChange();
        });
        const obj3 = userId(10667);
      }
      return false;
    }
  },
  ACTIVITY_INVITE_MODAL_CLOSE: function handleActivityInviteClose() {
    let flag = null != c14;
    if (!flag) {
      flag = null != _null;
    }
    if (flag) {
      c14 = null;
      if (null != _null) {
        _null.destroy();
        _null = null;
      }
      flag = true;
      if (null != _null2) {
        _null2();
        _null2 = null;
        flag = true;
      }
    }
    return flag;
  },
  OVERLAY_SET_INPUT_LOCKED: function handleSetLocked(locked) {
    locked = locked.locked;
    let tmp = !locked;
    if (locked) {
      tmp = null == c14;
    }
    let flag = !tmp;
    if (!tmp) {
      let tmp6 = null != c14;
      if (!tmp6) {
        tmp6 = null != _null;
      }
      flag = true;
      if (tmp6) {
        c14 = null;
        if (null != _null) {
          _null.destroy();
          _null = null;
        }
        flag = true;
        if (null != _null2) {
          _null2();
          _null2 = null;
          flag = true;
        }
      }
    }
    return flag;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    let flag = false;
    if (null != c14) {
      flag = false;
      if (null != c3) {
        if (null != updates) {
          const _Set = Set;
          new Set(updates.map((user) => user.user.id));
        }
        mapped = mapped.map((type) => {
          if (type.type === sortByMatchScore.AutocompleterResultTypes.USER) {
            const status = PresenceStore.getStatus(type.data.record.id);
            const id = type.data.record.id;
            application_id = undefined;
            if (application_id != null) {
              application_id = application_id.application_id;
            }
            let tmp3 = null != application_id;
            if (tmp3) {
              tmp3 = null != PresenceStore.findActivity(id, (application_id) => application_id.application_id === application_id, null, false);
            }
            if (status !== type.status) {
              const obj2 = {};
              const merged = Object.assign(type);
              obj2.status = status;
              obj2.playingSameGame = tmp3;
              let tmp7 = obj2;
            } else {
              tmp7 = type;
            }
            return tmp7;
          }
          return type;
        });
        const everyResult = mapped.every((item, index) => item === mapped[index]);
        let flag2 = !everyResult;
        if (!everyResult) {
          closure_18 = withSameGameSection(mapped);
          flag2 = true;
        }
        flag = flag2;
      }
    }
    return flag;
  },
  PRESENCES_REPLACE: handlePresenceReset,
  CONNECTION_OPEN_SUPPLEMENTAL: handlePresenceReset,
  LOCAL_ACTIVITY_UPDATE: handleLocalActivityUpdate,
  RPC_APP_DISCONNECTED: handleLocalActivityUpdate
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/ActivityInviteModalStore.tsx");

export default activityInviteModalStoreClass;