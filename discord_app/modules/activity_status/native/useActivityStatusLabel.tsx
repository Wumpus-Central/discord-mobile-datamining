// discord_app/modules/activity_status/native/useActivityStatusLabel.tsx
import useDiscoverableApplicationStream from "../../blocking/useDiscoverableApplicationStream.tsx";
import useUserVoiceActivity from "../useUserVoiceActivity.tsx";
import isGameActivityDefault from "../../activities/utils/isGameActivity.tsx";
import getActivityStatusTextDefault from "../getActivityStatusText.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

const util = v0wJXSh(1114);
const VoiceActivityStatus = v0wJXSh(11021);
require = fn;
const ActivityTypes = fn(1074).ActivityTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/useActivityStatusLabel.tsx");

export default function useActivityStatusLabel(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let gameMentionsAsPlainText;
  let items = [PresenceStore];
  let items1 = [userId];
  const stateFromStores = userId(gameMentionsAsPlainText[7]).useStateFromStores(
    items,
    () => {
      if (null == userId) {
        return null;
      } else {
        const activities = PresenceStore.getActivities(tmp);
        let state;
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
    },
    items1,
  );
  let obj = userId(gameMentionsAsPlainText[7]);
  gameMentionsAsPlainText = userId(gameMentionsAsPlainText[8]).useGameMentionsAsPlainText(stateFromStores);
  let obj2 = userId(gameMentionsAsPlainText[8]);
  const items2 = [
    PresenceStore,
    ApplicationStreamingStore,
    RelationshipStore,
    ChannelStore,
    PermissionStore,
    VoiceStateStore,
  ];
  const items3 = [userId, guildId, gameMentionsAsPlainText];
  return userId(gameMentionsAsPlainText[7]).useStateFromStores(
    items2,
    () => {
      if (null != userId) {
        if (RelationshipStore.isBlockedOrIgnored(userId)) {
          return null;
        }
      }
      if (null != userId) {
        const activities = PresenceStore.getActivities(userId);
      }
      let v0wJXSh = require;
      const items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(
        userId,
        items,
      );
      let obj = { userId, guildId };
      obj = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity(obj, obj).voiceChannel;
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
    },
    items3,
  );
}
