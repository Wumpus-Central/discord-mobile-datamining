// === Module 19013: useYouBarAccessibilityLabel ===

// Module 19013 (useYouBarAccessibilityLabel)
import util from "util" /* 1113 */;
import UserUtils from "UserUtils" /* 5309 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10784 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10785 */;
import isGameActivityDefault from "isGameActivity" /* 10791 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10794 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import PresenceStore from "PresenceStore" /* 6005 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import SelfPresenceStore from "SelfPresenceStore" /* 7252 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;

const require = globalThis.__r;

require = fn;
const StatusTypes = fn(1072).StatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export function useYouBarAccessibilityLabel(stateFromStores) {
  _require = id(5309).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let obj = id(5309);
  let tmp6 = null;
  if ("" !== text) {
    tmp6 = text;
  }
  dependencyMap = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(tmp6);
  const tmp3Result = require("useGameMentionsAsPlainText");
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = require("GuildTagUtils").getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  const tmp3Result3 = require("GuildTagUtils");
  items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(id, items);
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      if (null != id) {
        text = null;
        if (status !== StatusTypes.OFFLINE) {
          text = null;
          if (status !== StatusTypes.INVISIBLE) {
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
                  return type !== closure_1_0(dependencyMap[17]).ActivityTypes.CUSTOM_STATUS && type !== closure_1_0(dependencyMap[17]).ActivityTypes.HANG_STATUS;
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
        text = dependencyMap;
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
}