// discord_app/modules/report_to_mod/ReportToModStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";

function handleSelectedGuildChange() {
  let lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
  if (lastSelectedGuildId !== c1) {
    c2 = null;
    if (lastSelectedGuildId == null) {
      lastSelectedGuildId = null;
    }
    c1 = lastSelectedGuildId;
  }
}
let c1 = null;
let c2 = null;
let closure_3 = { reportedMessages: {} };
const PersistedStore = initializeDefault.PersistedStore;
class ReportToModStore extends PersistedStore {}
const prototype = ReportToModStore.prototype;
prototype["initialize"] = function initialize(reportedMessages) {
  if (null != reportedMessages) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(reportedMessages.reportedMessages);
    closure_3.reportedMessages = Object.fromEntries(
      entries.map((item) => {
        [tmp, tmp2] = item;
        const items = [tmp, new Set(tmp2)];
        return items;
      }),
    );
  }
  let items = [SelectedGuildStore];
  this.syncWith(items, handleSelectedGuildChange);
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["isUserBanned"] = function isUserBanned(arg0) {
  value = undefined;
  if (_null != null) {
    value = _null.get(arg0);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getReportedMessages"] = function getReportedMessages() {
  return closure_3.reportedMessages;
};
prototype["hasReportedMessage"] = function hasReportedMessage(channel_id, id) {
  let flag;
  if (closure_3.reportedMessages[channel_id] != null) {
    flag = obj.has(id);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
ReportToModStore.displayName = "ReportToModStore";
ReportToModStore.persistKey = "ReportToModStore";
let items = [
  (reportedMessages) => {
    reportedMessages = undefined;
    if (reportedMessages != null) {
      reportedMessages = reportedMessages.reportedMessages;
    }
    if (reportedMessages == null) {
      reportedMessages = {};
    }
    return { reportedMessages };
  },
];
ReportToModStore.migrations = items;
const reportToModStore = new ReportToModStore(DispatcherDefault, {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function handleMessageReportSuccess(channelId) {
    channelId = channelId.channelId;
    if (null == closure_3.reportedMessages[channelId]) {
      const _Set = Set;
      const set = new Set();
      tmp.reportedMessages[channelId] = set;
    }
    closure_3.reportedMessages[channelId].add(channelId.messageId);
  },
  GUILD_BAN_ADD: function handleGuildBanAdd(guildId) {
    let tmp = guildId.guildId === c1;
    if (tmp) {
      tmp = null != _null;
    }
    if (tmp) {
      const result = _null.set(guildId.user.id, true);
    }
  },
  GUILD_BAN_REMOVE: function handleGuildBanRemove(guildId) {
    let tmp = guildId.guildId === c1;
    if (tmp) {
      tmp = null != _null;
    }
    if (tmp) {
      const result = _null.set(guildId.user.id, false);
    }
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleGuildBansLoaded(guildId) {
    ({ bans, userIds } = guildId);
    let set;
    if (guildId.guildId === c1) {
      const _Set = Set;
      set = new Set(
        bans.map((user) => {
          user = user.user;
          let id;
          if (user != null) {
            id = user.id;
          }
          return id;
        }),
      );
      if (userIds == null) {
        userIds = [];
      }
      const set1 = new Set(userIds);
      const found = Array.from(set1).filter((item) => !set.has(item));
      if (null == map) {
        const _Map = Map;
        map = new Map();
      }
      const item = set.forEach((item) => {
        if (map != null) {
          const result = map.set(item, true);
        }
      });
      const item1 = found.forEach((item) => {
        if (map != null) {
          const result = map.set(item, false);
        }
      });
      const arr = Array.from(set1);
    }
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    closure_3.reportedMessages = {};
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/report_to_mod/ReportToModStore.tsx");

export default reportToModStore;
