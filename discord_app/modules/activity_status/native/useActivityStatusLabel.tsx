// === Module 13108: useActivityStatusLabel ===

// Module 13108 (useActivityStatusLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10611 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10612 */;
import isGameActivityDefault from "isGameActivity" /* 10619 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10622 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;

const util = v0wJXSh(1126);
const VoiceActivityStatus = v0wJXSh(10627);
require = fn;
const ActivityTypes = fn(1085).ActivityTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/useActivityStatusLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(gameMentionsAsPlainText[8]).c(10);
  userId = userId.userId;
  const guildId = userId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      if (null == userId) {
        return null;
      } else {
        const activities = PresenceStore.getActivities(tmp);
        state = undefined;
        if (activities != null) {
          const found = activities.find((type) => type.type === constants.CUSTOM_STATUS);
          if (found != null) {
            state = found.state;
          }
        }
        let tmp5 = null;
        if (null != state) {
          tmp5 = null;
          if ("" !== state.trim()) {
            tmp5 = state;
          }
        }
        return tmp5;
      }
    };
    let items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = userId(gameMentionsAsPlainText[8]);
  const stateFromStores = userId(gameMentionsAsPlainText[9]).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = userId(gameMentionsAsPlainText[9]);
  gameMentionsAsPlainText = userId(gameMentionsAsPlainText[10]).useGameMentionsAsPlainText(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === gameMentionsAsPlainText) {
    if (cResult[6] === guildId) {
      if (cResult[7] === userId) {
        let tmp17 = cResult[8];
        let tmp18 = cResult[9];
      }
      return tmp(tmp2[9]).useStateFromStores(tmp10, tmp17, tmp18);
    }
  }
  class U {
    constructor() {
      tmp = userId;
      if (null != userId) {
        tmp2 = closure_7;
        if (closure_7.isBlockedOrIgnored(tmp)) {
          return null;
        }
      }
      if (null != tmp) {
        tmp3 = closure_6;
        activities = closure_6.getActivities(tmp);
      }
      v0wJXSh = closure_0;
      obj = closure_2;
      obj2 = closure_0(closure_2[11]);
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_7;
      discoverableApplicationStream = obj2.getDiscoverableApplicationStream(tmp, items);
      obj3 = closure_0(closure_2[12]);
      obj1 = { userId: tmp, guildId };
      obj8 = { ChannelStore: closure_4, PermissionStore: closure_5, VoiceStateStore: closure_8 };
      voiceChannel = obj3.getVisibleUserVoiceActivity(obj1, obj8).voiceChannel;
      if (null != discoverableApplicationStream) {
        name = undefined;
        if (activities != null) {
          tmp11 = closure_1;
          found = activities.find(closure_1(obj[13]));
          if (found != null) {
            name = found.name;
          }
        }
        if (null == name) {
          intl = v0wJXSh(obj[14]).intl;
          stringResult = intl.string(v0wJXSh(obj[14]).t.eXan7B);
          tmp14 = stringResult;
        } else {
          str = "";
        }
        intl2 = v0wJXSh(obj[14]).intl;
        v0wJXSh = v0wJXSh(obj[14]).t["0wJXSh"];
        obj = { name: null };
        obj.name = name;
        stringResult = intl2.formatToPlainString(v0wJXSh, obj);
      } else {
        found1 = undefined;
        if (activities != null) {
          found1 = activities.find((type) => {
            type = type.type;
            return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
          });
        }
        if (null != found1) {
          tmp8 = closure_1;
          flag = true;
          text = closure_1(obj[15])(found1, true).text;
          if (text == null) {
            text = null;
          }
          voiceActivityStatusText = text;
        } else {
          voiceActivityStatusText = null;
          if (null != voiceChannel) {
            tmp4Result = v0wJXSh(obj[16]);
            voiceActivityStatusText = tmp4Result.getVoiceActivityStatusText(voiceChannel);
          }
        }
        items1 = [, ];
        items1[0] = voiceActivityStatusText;
        tmp15 = closure_2;
        items1[1] = closure_2;
        found2 = items1.filter((item) => {
          let tmp = null != item;
          if (tmp) {
            tmp = "" !== item;
          }
          return tmp;
        });
        str2 = ", ";
        joined = found2.join(", ");
        str3 = "";
        tmp17 = null;
        if ("" !== joined) {
          tmp17 = joined;
        }
        return tmp17;
      }
      return;
    }
  }
  const items3 = [userId, guildId, gameMentionsAsPlainText];
  cResult[5] = gameMentionsAsPlainText;
  cResult[6] = guildId;
  cResult[7] = userId;
  cResult[8] = U;
  cResult[9] = items3;
  tmp18 = items3;
  tmp17 = U;
  const tmpResult3 = userId(gameMentionsAsPlainText[10]);
}) : ((userId) => {
  userId = userId.userId;
  const guildId = userId.guildId;
  let gameMentionsAsPlainText;
  let items = [PresenceStore];
  let items1 = [userId];
  const stateFromStores = userId(gameMentionsAsPlainText[9]).useStateFromStores(items, () => {
    if (null == userId) {
      return null;
    } else {
      const activities = PresenceStore.getActivities(tmp);
      state = undefined;
      if (activities != null) {
        const found = activities.find((type) => type.type === constants.CUSTOM_STATUS);
        if (found != null) {
          state = found.state;
        }
      }
      let tmp5 = null;
      if (null != state) {
        tmp5 = null;
        if ("" !== state.trim()) {
          tmp5 = state;
        }
      }
      return tmp5;
    }
  }, items1);
  let obj = userId(gameMentionsAsPlainText[9]);
  gameMentionsAsPlainText = userId(gameMentionsAsPlainText[10]).useGameMentionsAsPlainText(stateFromStores);
  let obj2 = userId(gameMentionsAsPlainText[10]);
  const items2 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  const items3 = [userId, guildId, gameMentionsAsPlainText];
  return userId(gameMentionsAsPlainText[9]).useStateFromStores(items2, () => {
    if (null != userId) {
      if (RelationshipStore.isBlockedOrIgnored(userId)) {
        return null;
      }
    }
    if (null != userId) {
      const activities = PresenceStore.getActivities(userId);
    }
    let v0wJXSh = require;
    let obj = dependencyMap;
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(userId, items);
    const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity({ userId, guildId }, { ChannelStore, PermissionStore, VoiceStateStore }).voiceChannel;
    if (null != discoverableApplicationStream) {
      let name;
      if (activities != null) {
        const found = activities.find(isGameActivityDefault);
        if (found != null) {
          name = found.name;
        }
      }
      if (null == name) {
        const intl = util.intl;
        let stringResult = intl.string(util.t.eXan7B);
      }
      const intl2 = util.intl;
      v0wJXSh = util.t["0wJXSh"];
      obj = { name };
      stringResult = intl2.formatToPlainString(v0wJXSh, obj);
    } else {
      let found1;
      if (activities != null) {
        found1 = activities.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        let text = getActivityStatusTextDefault(found1, true).text;
        if (text == null) {
          text = null;
        }
        let voiceActivityStatusText = text;
      } else {
        voiceActivityStatusText = null;
        if (null != voiceChannel) {
          voiceActivityStatusText = VoiceActivityStatus.getVoiceActivityStatusText(voiceChannel);
          const v0wJXShResult = VoiceActivityStatus;
        }
      }
      const items1 = [voiceActivityStatusText, gameMentionsAsPlainText];
      const found2 = items1.filter((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = "" !== item;
        }
        return tmp;
      });
      const joined = found2.join(", ");
      let tmp17 = null;
      if ("" !== joined) {
        tmp17 = joined;
      }
      return tmp17;
    }
    const obj4 = { userId, guildId };
    const obj5 = { ChannelStore, PermissionStore, VoiceStateStore };
  }, items3);
});