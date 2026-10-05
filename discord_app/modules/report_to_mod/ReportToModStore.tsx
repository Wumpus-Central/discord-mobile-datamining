// discord_app/modules/report_to_mod/ReportToModStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map, set;

function handleSelectedGuildChange() {
  let lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
  if (lastSelectedGuildId !== c1) {
    let c2 = null;
    if (lastSelectedGuildId == null) {
      lastSelectedGuildId = null;
    }
    c1 = lastSelectedGuildId;
  }
}
let c1 = null;
let c2 = null;
const _false = { reportedMessages: {} };
const PersistedStore = get_initializedDefault.PersistedStore;
class ReportToModStore extends PersistedStore {
  initialize(reportedMessages) {
    if (null != reportedMessages) {
      const tmp2 = globalThis;
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(reportedMessages.reportedMessages);
      closure_3.reportedMessages = fromEntries(
        entries.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const items = [tmp, new Set(tmp2)];
          new Set(tmp2);
          return items;
        }),
      );
    }
    let items = [SelectedGuildStore];
    this.syncWith(items, handleSelectedGuildChange);
  }
  getState() {
    return closure_3;
  }
  isUserBanned(arg0) {
    let value;
    if (c2 != null) {
      value = c2.get(arg0);
    }
    if (value == null) {
      value = null;
    }
    return value;
  }
  getReportedMessages() {
    return closure_3.reportedMessages;
  }
  hasReportedMessage(channel_id, id) {
    let flag;
    if (closure_3.reportedMessages[channel_id] != null) {
      flag = obj.has(id);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype = ReportToModStore.prototype;
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
let obj = {
  REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function handleMessageReportSuccess(channelId) {
    channelId = channelId.channelId;
    const messageId = channelId.messageId;
    if (null == closure_3.reportedMessages[channelId]) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const reportedMessages = closure_3.reportedMessages;
      reportedMessages[channelId] = new Set();
      set = new Set();
    }
    const obj = closure_3.reportedMessages[channelId];
    obj.add(messageId);
  },
  GUILD_BAN_ADD: function handleGuildBanAdd(guildId) {
    let tmp = guildId.guildId === c1;
    const user = guildId.user;
    if (tmp) {
      tmp = null != c2;
    }
    if (tmp) {
      const result = c2.set(user.id, true);
    }
  },
  GUILD_BAN_REMOVE: function handleGuildBanRemove(guildId) {
    let tmp = guildId.guildId === c1;
    const user = guildId.user;
    if (tmp) {
      tmp = null != c2;
    }
    if (tmp) {
      const result = c2.set(user.id, false);
    }
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function handleGuildBansLoaded(guildId) {
    let userIds;
    ({ bans, userIds } = guildId);
    set = undefined;
    if (guildId.guildId === c1) {
      const _Set = Set;
      const self5 = this;
      const self6 = this;
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
      const _Array = Array;
      const _Set2 = Set;
      if (userIds == null) {
        userIds = [];
      }
      const self = this;
      const self2 = this;
      const _Set21 = new _Set2(userIds);
      const fromResult = from(_Set21);
      const found = fromResult.filter((item) => !set.has(item));
      if (null == map) {
        const _Map = Map;
        const self3 = this;
        const self4 = this;
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
    }
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    let c2 = null;
    closure_3.reportedMessages = {};
  },
};
const reportToModStore = new ReportToModStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/report_to_mod/ReportToModStore.tsx");

export default reportToModStore;
