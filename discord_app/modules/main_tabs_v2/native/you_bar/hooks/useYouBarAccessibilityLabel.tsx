// === Module 16366: useYouBarAccessibilityLabel ===

// Module 16366 (useYouBarAccessibilityLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10878 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10879 */;
import isGameActivityDefault from "isGameActivity" /* 10886 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10888 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const Constants = fn(1074);
({ ActivityTypes: c10, StatusTypes: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = function useYouBarAccessibilityLabel(stateFromStores) {
  _require = id(4404).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj = id(4404);
  dependencyMap = require("YouBarActivityStatusExperiment").useYouBarActivityStatusEnabled("YouBar");
  const obj2 = require("YouBarActivityStatusExperiment");
  const isYouBarGuildTagEnabled = require("YouBarGuildTagExperiment").useIsYouBarGuildTagEnabled("YouBar");
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp3Result = tmp3(10880);
  let tmp7 = null;
  if ("" !== text) {
    tmp7 = text;
  }
  closure_3 = tmp3Result.useGameMentionsAsPlainText(tmp7);
  let tmp8;
  if (isYouBarGuildTagEnabled) {
    tmp3Result = tmp3(8165);
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    const userPrimaryGuild = tmp3Result.getUserPrimaryGuild(primaryGuild);
    let tag;
    if (userPrimaryGuild != null) {
      tag = userPrimaryGuild.tag;
    }
    tmp8 = tag;
  }
  tag = tmp8;
  const obj3 = require("YouBarGuildTagExperiment");
  let items = [SelfPresenceStore, closure_3, RelationshipStore, tag, PermissionStore, VoiceStateStore, PresenceStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      let obj = useDiscoverableApplicationStream;
      const items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
      let obj1 = useUserVoiceActivity;
      obj = { userId: id };
      obj = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = obj1.getVisibleUserVoiceActivity(obj, obj).voiceChannel;
      let text = null;
      if (closure_2) {
        text = null;
        if (null != tmp6) {
          text = null;
          if (status !== constants.OFFLINE) {
            text = null;
            if (status !== constants.INVISIBLE) {
              const activities = PresenceStore.getActivities(tmp6);
              if (null != discoverableApplicationStream) {
                let name;
                if (activities != null) {
                  const found = activities.find(isGameActivityDefault);
                  if (found != null) {
                    name = found.name;
                  }
                }
                if (null == name) {
                  const intl3 = tmp4(1114).intl;
                  let stringResult = intl3.string(tmp4(1114).t.eXan7B);
                }
                const intl4 = tmp4(1114).intl;
                obj1 = { name };
                stringResult = intl4.formatToPlainString(tmp4(1114).t["0wJXSh"], obj1);
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
                        const intl = tmp4(1114).intl;
                        const string = intl.string;
                        const t = tmp4(1114).t;
                        if (isGuildStageVoiceResult) {
                          let stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      }
                      text = stringResult1;
                    }
                    const intl2 = tmp4(1114).intl;
                    stringResult1 = intl2.string(tmp4(1114).t["9FaEzi"]);
                  }
                }
              }
            }
          }
        }
      }
      if (text == null) {
        text = closure_3;
      }
      if (text == null) {
        text = tmp4(4404).humanizeStatus(status);
        const tmp4Result = tmp4(4404);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
};