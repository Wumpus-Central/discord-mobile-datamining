// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx
import closure_3 from "../../../../../stores/ApplicationStreamingStore.tsx";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import closure_5 from "../../../../../stores/PermissionStore.tsx";
import closure_6 from "../../../../../stores/PresenceStore.tsx";
import closure_7 from "../../../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../../../stores/SelfPresenceStore.tsx";
import closure_9 from "../../../../../stores/VoiceStateStore.tsx";
import ME from "../../../../../Constants.tsx";
import { YouBarActivityStatusExperiment } from "../YouBarActivityStatusExperiment.tsx";
import { apexExperiment } from "../YouBarGuildTagExperiment.tsx";

const require = arg1;
({ ActivityTypes: c10, StatusTypes: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = function useYouBarAccessibilityLabel(stateFromStores) {
  const _require = id(4292).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj = id(4292);
  dependencyMap = require("../YouBarActivityStatusExperiment.tsx").useYouBarActivityStatusEnabled("YouBar");
  const obj2 = YouBarActivityStatusExperiment;
  const isYouBarGuildTagEnabled = require("../YouBarGuildTagExperiment.tsx").useIsYouBarGuildTagEnabled("YouBar");
  const CustomStatusSetting = require("../../../../user_settings/UserSettings.tsx").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp3Result = tmp3(9049);
  let tmp7 = null;
  if ("" !== text) {
    tmp7 = text;
  }
  closure_3 = tmp3Result.useGameMentionsAsPlainText(tmp7);
  let tmp8;
  if (isYouBarGuildTagEnabled) {
    tmp3Result = tmp3(8043);
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
  const obj3 = apexExperiment;
  let items = [closure_8, closure_3, closure_7, tag, closure_5, closure_9, closure_6];
  return require("../../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null != callback) {
      const status = closure_1_8.getStatus();
      let obj = callback(9202);
      const items = [closure_3, closure_1_7];
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
      obj1 = callback(9203);
      obj = { userId: null };
      obj[0] = id;
      obj = { ChannelStore: null, PermissionStore: null, VoiceStateStore: null };
      obj[0] = tag;
      obj[1] = closure_1_5;
      obj[2] = closure_1_9;
      const voiceChannel = obj1.getVisibleUserVoiceActivity(obj, obj).voiceChannel;
      let text = null;
      if (dependencyMap) {
        text = null;
        if (null != tmp6) {
          text = null;
          if (status !== closure_1_11.OFFLINE) {
            text = null;
            if (status !== closure_1_11.INVISIBLE) {
              const activities = closure_1_6.getActivities(tmp6);
              if (null != discoverableApplicationStream) {
                let name;
                if (activities != null) {
                  const found = activities.find(id(9209));
                  if (found != null) {
                    name = found.name;
                  }
                }
                if (null == name) {
                  const intl3 = tmp4(1236).intl;
                  let stringResult = intl3.string(tmp4(1236).t.eXan7B);
                }
                const intl4 = tmp4(1236).intl;
                obj1 = { name: null };
                obj1[0] = name;
                stringResult = intl4.formatToPlainString(tmp4(1236).t["0wJXSh"], obj1);
              } else {
                let found1;
                if (activities != null) {
                  found1 = activities.find((type) => {
                    type = type.type;
                    return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
                  });
                }
                if (null != found1) {
                  text = id(9214)(found1, true).text;
                } else {
                  text = null;
                  if (null != voiceChannel) {
                    if (!voiceChannel.isDM()) {
                      if (!voiceChannel.isGroupDM()) {
                        const intl = tmp4(1236).intl;
                        const string = intl.string;
                        const t = tmp4(1236).t;
                        if (isGuildStageVoiceResult) {
                          let stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      }
                      text = stringResult1;
                    }
                    const intl2 = tmp4(1236).intl;
                    stringResult1 = intl2.string(tmp4(1236).t["9FaEzi"]);
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
        text = tmp4(4292).humanizeStatus(status);
        const tmp4Result = tmp4(4292);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((arg0) => null != arg0);
      return found2.join(", ");
    }
  });
};