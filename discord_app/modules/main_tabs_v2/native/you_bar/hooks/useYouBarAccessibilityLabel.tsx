// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx
import util from "../../../../../intl/index.native.tsx";
import UserUtils from "../../../../../utils/UserUtils.tsx";
import useDiscoverableApplicationStream from "../../../../blocking/useDiscoverableApplicationStream.tsx";
import useUserVoiceActivity from "../../../../activity_status/useUserVoiceActivity.tsx";
import isGameActivityDefault from "../../../../activities/utils/isGameActivity.tsx";
import getActivityStatusTextDefault from "../../../../activity_status/getActivityStatusText.tsx";
import ApplicationStreamingStore from "../../../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import SelfPresenceStore from "../../../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ ActivityTypes: c10, StatusTypes: closure_11 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = ReactCompilerGating.isReactCompilerEnabled() ? (function useYouBarAccessibilityLabel(id) {
  const cResult = name(gameMentionsAsPlainText[9]).c(6);
  let obj = name(gameMentionsAsPlainText[9]);
  name = id(gameMentionsAsPlainText[10]).useName(id);
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
  const obj2 = id(gameMentionsAsPlainText[10]);
  let tmp8 = null;
  if ("" !== text) {
    tmp8 = text;
  }
  gameMentionsAsPlainText = name(gameMentionsAsPlainText[12]).useGameMentionsAsPlainText(tmp8);
  const tmpResult = name(gameMentionsAsPlainText[12]);
  let primaryGuild;
  if (id != null) {
    primaryGuild = id.primaryGuild;
  }
  const userPrimaryGuild = name(gameMentionsAsPlainText[13]).getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === gameMentionsAsPlainText) {
    if (cResult[2] === tag) {
      if (cResult[3] === name) {
        if (cResult[4] === id) {
          let tmp21 = cResult[5];
        }
        return tmp(tmp2[19]).useStateFromStores(first, tmp21);
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
              tmp24 = closure_6;
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
                if (null == name) {
                  intl3 = tmp4(tmp5[17]).intl;
                  stringResult = intl3.string(tmp4(tmp5[17]).t.eXan7B);
                  tmp22 = stringResult;
                } else {
                  str = "";
                }
                intl4 = tmp4(tmp5[17]).intl;
                obj9 = { name: null };
                obj9.name = name;
                stringResult = intl4.formatToPlainString(tmp4(tmp5[17]).t["0wJXSh"], obj9);
              } else {
                found1 = undefined;
                if (activities != null) {
                  found1 = activities.find(() => { ... });
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
                          stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                      }
                      text = stringResult1;
                    }
                    intl2 = tmp4(tmp5[17]).intl;
                    stringResult1 = intl2.string(tmp4(tmp5[17]).t["9FaEzi"]);
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
        tmp23 = tag;
        items1[1] = tag;
        items1[2] = text;
        found2 = items1.filter(() => { ... });
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
  tmp21 = A;
  const tmpResult3 = name(gameMentionsAsPlainText[13]);
}) : (function useYouBarAccessibilityLabel(id) {
  _require = id(4922).useName(id);
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
  let obj = id(4922);
  let tmp6 = null;
  if ("" !== text) {
    tmp6 = text;
  }
  dependencyMap = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(tmp6);
  const tmp3Result = require("useGameMentionsAsPlainText");
  let primaryGuild;
  if (id != null) {
    primaryGuild = id.primaryGuild;
  }
  const userPrimaryGuild = require("GuildTagUtils").getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  const tmp3Result3 = require("GuildTagUtils");
  let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      const items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(id, items);
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      if (null != id) {
        text = null;
        if (status !== constants.OFFLINE) {
          text = null;
          if (status !== constants.INVISIBLE) {
            const activities = PresenceStore.getActivities(id);
            if (null != discoverableApplicationStream) {
              let name;
              if (activities != null) {
                const found = activities.find(isGameActivityDefault);
                if (found != null) {
                  name = found.name;
                }
              }
              if (null == name) {
                const intl3 = util.intl;
                let stringResult = intl3.string(util.t.eXan7B);
              }
              const intl4 = util.intl;
              const obj5 = { name };
              stringResult = intl4.formatToPlainString(util.t["0wJXSh"], obj5);
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
                    if (!voiceChannel.isGroupDM()) {
                      const intl = util.intl;
                      const string = intl.string;
                      const t = util.t;
                      if (isGuildStageVoiceResult) {
                        let stringResult1 = string(t.QygGCN);
                      } else {
                        stringResult1 = string(t.msxteM);
                      }
                      isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                    }
                    text = stringResult1;
                  }
                  const intl2 = util.intl;
                  stringResult1 = intl2.string(util.t["9FaEzi"]);
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
        text = UserUtils.humanizeStatus(status);
        const tmp4Result = UserUtils;
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
});