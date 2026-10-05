// === Module 16309: useYouBarAccessibilityLabel ===

// Module 16309 (useYouBarAccessibilityLabel)
import intl5 from "intl" /* 1126 */;
import UserUtils from "UserUtils" /* 4722 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10611 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10612 */;
import isGameActivityDefault from "isGameActivity" /* 10619 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10622 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, flag, id, obj1, obj8, obj9, str, str2, tmp10, tmp11, tmp12, tmp17, tmp19, tmp2, tmp22, tmp4, tmp5, tmp6, tmp8, type;

let c10;
let unpackModuleId;
({ ActivityTypes: c10, StatusTypes: unpackModuleId } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let gameMentionsAsPlainText;
  let name;
  const tmp = name;
  let obj = name(gameMentionsAsPlainText[9]);
  const cResult = obj.c(6);
  let obj2 = id(gameMentionsAsPlainText[10]);
  name = obj2.useName(id);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const CustomStatusSetting = tmp(tmp2[11]).CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp9 = null;
  const useGameMentionsAsPlainText = tmp(gameMentionsAsPlainText[12]).useGameMentionsAsPlainText;
  tmp(gameMentionsAsPlainText[12]);
  if ("" !== text) {
    tmp9 = text;
  }
  gameMentionsAsPlainText = useGameMentionsAsPlainText(tmp9);
  let primaryGuild;
  const getUserPrimaryGuild = tmp(gameMentionsAsPlainText[13]).getUserPrimaryGuild;
  tmp(gameMentionsAsPlainText[13]);
  if (id != null) {
    primaryGuild = id.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === gameMentionsAsPlainText) {
    if (cResult[2] === tag) {
      if (cResult[3] === name) {
        let tmp23;
        if (cResult[4] === id) {
          tmp23 = cResult[5];
        }
        const tmpResult4 = tmp(gameMentionsAsPlainText[19]);
        return tmpResult4.useStateFromStores(first, tmp23);
      }
    }
  }
  class A {
    constructor() {
      if (null != closure_0) {
        tmp2 = closure_8;
        status = closure_8.getStatus();
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp7 = closure_3;
        items = [, ];
        items[0] = closure_3;
        tmp8 = closure_7;
        items[1] = closure_7;
        tmp6 = id;
        discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
        obj2 = closure_0(closure_2[15]);
        obj1 = { userId: null };
        obj1.userId = id;
        obj8 = { ChannelStore: null, PermissionStore: null, VoiceStateStore: null };
        tmp10 = closure_4;
        obj8.ChannelStore = closure_4;
        tmp11 = closure_5;
        obj8.PermissionStore = closure_5;
        tmp12 = closure_9;
        obj8.VoiceStateStore = closure_9;
        voiceChannel = obj2.getVisibleUserVoiceActivity(obj1, obj8).voiceChannel;
        text = null;
        if (null != id) {
          text = null;
          if (status !== StatusTypes.OFFLINE) {
            text = null;
            if (status !== StatusTypes.INVISIBLE) {
              tmp23 = closure_6;
              activities = closure_6.getActivities(tmp6);
              if (null != discoverableApplicationStream) {
                name = undefined;
                if (activities != null) {
                  tmp19 = closure_1;
                  found = activities.find(closure_1(tmp5[16]));
                  if (found != null) {
                    name = found.name;
                  }
                }
                if (null != name) {
                  str = "";
                  if ("" !== name) {
                    intl4 = tmp4(tmp5[17]).intl;
                    obj9 = { name: null };
                    obj9.name = name;
                    formatToPlainStringResult = intl4.formatToPlainString(tmp4(tmp5[17]).t["0wJXSh"], obj9);
                  }
                  text = formatToPlainStringResult;
                }
                intl3 = tmp4(tmp5[17]).intl;
                formatToPlainStringResult = intl3.string(tmp4(tmp5[17]).t.eXan7B);
              } else {
                found1 = undefined;
                if (activities != null) {
                  found1 = activities.find(() => { /* body not rendered: F145801 */ });
                }
                if (null != found1) {
                  tmp17 = closure_1;
                  flag = true;
                  text = closure_1(tmp5[18])(found1, true).text;
                } else {
                  text = null;
                  if (null != voiceChannel) {
                    if (!voiceChannel.isDM()) {
                      if (!voiceChannel.isGroupDM()) {
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                        intl = tmp4(tmp5[17]).intl;
                        string = intl.string;
                        t = tmp4(tmp5[17]).t;
                        if (isGuildStageVoiceResult) {
                          stringResult = string(t.QygGCN);
                        } else {
                          stringResult = string(t.msxteM);
                        }
                      }
                      text = stringResult;
                    }
                    intl2 = tmp4(tmp5[17]).intl;
                    stringResult = intl2.string(tmp4(tmp5[17]).t["9FaEzi"]);
                  }
                }
              }
            }
          }
        }
        if (text == null) {
          text = closure_2;
        }
        if (text == null) {
          tmp4Result = tmp4(tmp5[10]);
          text = tmp4Result.humanizeStatus(status);
        }
        items1 = [, , ];
        items1[0] = tmp;
        tmp22 = tag;
        items1[1] = tag;
        items1[2] = text;
        found2 = items1.filter(() => { /* body not rendered: F145802 */ });
        str2 = ", ";
        return found2.join(", ");
      } else {
        return;
      }
    }
  }
  cResult[1] = gameMentionsAsPlainText;
  cResult[2] = tag;
  cResult[3] = name;
  cResult[4] = id;
  cResult[5] = A;
  tmp23 = A;
}) : ((id) => {
  let closure_0;
  let closure_2;
  const tmp = dependencyMap;
  let obj = id(4722);
  _require = obj.useName(id);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp7 = null;
  const useGameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText;
  require("useGameMentionsAsPlainText");
  if ("" !== text) {
    tmp7 = text;
  }
  dependencyMap = useGameMentionsAsPlainText(tmp7);
  let primaryGuild;
  const getUserPrimaryGuild = require("GuildTagUtils").getUserPrimaryGuild;
  require("GuildTagUtils");
  if (id != null) {
    primaryGuild = id.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
  const tmp3Result4 = require("get initialized");
  return tmp3Result4.useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      const items = [ApplicationStreamingStore, RelationshipStore];
      const obj = useDiscoverableApplicationStream;
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const obj2 = useUserVoiceActivity;
      const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      if (null != id) {
        text = null;
        if (status !== unpackModuleId.OFFLINE) {
          text = null;
          if (status !== unpackModuleId.INVISIBLE) {
            const activities = PresenceStore.getActivities(id);
            if (null != discoverableApplicationStream) {
              let name;
              if (activities != null) {
                const found = activities.find(isGameActivityDefault);
                if (found != null) {
                  name = found.name;
                }
              }
              if (null != name) {
                let formatToPlainStringResult;
                if ("" !== name) {
                  const intl4 = intl5.intl;
                  const obj5 = { name };
                  formatToPlainStringResult = intl4.formatToPlainString(intl5.t["0wJXSh"], obj5);
                }
                text = formatToPlainStringResult;
              }
              const intl3 = intl5.intl;
              formatToPlainStringResult = intl3.string(intl5.t.eXan7B);
            } else {
              let found1;
              if (activities != null) {
                found1 = activities.find((type) => {
                  type = type.type;
                  return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
                });
              }
              if (null != found1) {
                text = getActivityStatusTextDefault(found1, true).text;
              } else {
                text = null;
                if (null != voiceChannel) {
                  if (!voiceChannel.isDM()) {
                    let stringResult;
                    if (!voiceChannel.isGroupDM()) {
                      const isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      const intl = intl5.intl;
                      const string = intl.string;
                      const t = intl5.t;
                      if (isGuildStageVoiceResult) {
                        stringResult = string(t.QygGCN);
                      } else {
                        stringResult = string(t.msxteM);
                      }
                    }
                    text = stringResult;
                  }
                  const intl2 = intl5.intl;
                  stringResult = intl2.string(intl5.t["9FaEzi"]);
                }
              }
            }
          }
        }
      }
      if (text == null) {
        text = closure_2;
      }
      if (text == null) {
        const tmp4Result = UserUtils;
        text = tmp4Result.humanizeStatus(status);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = tmp3;