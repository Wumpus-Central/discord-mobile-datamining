// discord_app/modules/activity_status/native/useActivityStatusLabel.tsx
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import useDiscoverableApplicationStream from "../../blocking/useDiscoverableApplicationStream.tsx";
import useUserVoiceActivity from "../useUserVoiceActivity.tsx";
import isGameActivityDefault from "../../activities/utils/isGameActivity.tsx";
import getActivityStatusTextDefault from "../getActivityStatusText.tsx";
import VoiceActivityStatus from "VoiceActivityStatus.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let type, userId;

const ActivityTypes = Constants.ActivityTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let gameMentionsAsPlainText;
      let tmp10;
      let tmp6;
      let tmp7;
      const tmp = userId;
      let obj = userId(gameMentionsAsPlainText[8]);
      const cResult = obj.c(10);
      userId = userId.userId;
      const guildId = userId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [PresenceStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function f() {
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
        };
        let items1 = [userId];
        cResult[1] = userId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(gameMentionsAsPlainText[9]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmpResult3 = tmp(gameMentionsAsPlainText[10]);
      gameMentionsAsPlainText = tmpResult3.useGameMentionsAsPlainText(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [
          PresenceStore,
          ApplicationStreamingStore,
          RelationshipStore,
          ChannelStore,
          PermissionStore,
          VoiceStateStore,
        ];
        cResult[4] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === gameMentionsAsPlainText) {
        if (cResult[6] === guildId) {
          let tmp17;
          let tmp18;
          if (cResult[7] === userId) {
            tmp17 = cResult[8];
            tmp18 = cResult[9];
          }
          const tmpResult4 = tmp(gameMentionsAsPlainText[9]);
          return tmpResult4.useStateFromStores(tmp10, tmp17, tmp18);
        }
      }
      class U {
        constructor() {
          let activities;
          let voiceActivityStatusText;
          if (null != userId) {
            if (RelationshipStore.isBlockedOrIgnored(userId)) {
              return null;
            }
          }
          if (null != userId) {
            activities = PresenceStore.getActivities(userId);
          }
          const items = [ApplicationStreamingStore, RelationshipStore];
          const obj = useDiscoverableApplicationStream;
          const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
          const obj2 = useUserVoiceActivity;
          const obj3 = { userId, guildId };
          const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
          const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
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
                const intl2 = intl3.intl;
                const obj5 = { name };
                formatToPlainStringResult = intl2.formatToPlainString(intl3.t["0wJXSh"], obj5);
              }
              voiceActivityStatusText = formatToPlainStringResult;
            }
            const intl = intl3.intl;
            formatToPlainStringResult = intl.string(intl3.t.eXan7B);
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
              voiceActivityStatusText = text;
            } else {
              voiceActivityStatusText = null;
              if (null != voiceChannel) {
                const tmp4Result = VoiceActivityStatus;
                voiceActivityStatusText = tmp4Result.getVoiceActivityStatusText(voiceChannel);
              }
            }
          }
          const items1 = [voiceActivityStatusText, gameMentionsAsPlainText];
          const found2 = items1.filter((item) => null != item && "" !== item);
          const joined = found2.join(", ");
          let tmp16 = null;
          if ("" !== joined) {
            tmp16 = joined;
          }
          return tmp16;
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
    }
  : (userId) => {
      userId = userId.userId;
      const guildId = userId.guildId;
      let gameMentionsAsPlainText;
      let obj = userId(gameMentionsAsPlainText[9]);
      let items = [PresenceStore];
      let items1 = [userId];
      const stateFromStores = obj.useStateFromStores(
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
      let obj2 = userId(gameMentionsAsPlainText[10]);
      gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(stateFromStores);
      let obj3 = userId(gameMentionsAsPlainText[9]);
      const items2 = [
        PresenceStore,
        ApplicationStreamingStore,
        RelationshipStore,
        ChannelStore,
        PermissionStore,
        VoiceStateStore,
      ];
      const items3 = [userId, guildId, gameMentionsAsPlainText];
      return obj3.useStateFromStores(
        items2,
        () => {
          let activities;
          let voiceActivityStatusText;
          if (null != userId) {
            if (RelationshipStore.isBlockedOrIgnored(userId)) {
              return null;
            }
          }
          if (null != userId) {
            activities = PresenceStore.getActivities(userId);
          }
          const items = [ApplicationStreamingStore, RelationshipStore];
          const obj = useDiscoverableApplicationStream;
          const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
          const obj2 = useUserVoiceActivity;
          const obj3 = { userId, guildId };
          const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
          const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
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
                const intl2 = intl3.intl;
                const obj5 = { name };
                formatToPlainStringResult = intl2.formatToPlainString(intl3.t["0wJXSh"], obj5);
              }
              voiceActivityStatusText = formatToPlainStringResult;
            }
            const intl = intl3.intl;
            formatToPlainStringResult = intl.string(intl3.t.eXan7B);
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
              voiceActivityStatusText = text;
            } else {
              voiceActivityStatusText = null;
              if (null != voiceChannel) {
                const tmp4Result = VoiceActivityStatus;
                voiceActivityStatusText = tmp4Result.getVoiceActivityStatusText(voiceChannel);
              }
            }
          }
          const items1 = [voiceActivityStatusText, gameMentionsAsPlainText];
          const found2 = items1.filter((item) => null != item && "" !== item);
          const joined = found2.join(", ");
          let tmp16 = null;
          if ("" !== joined) {
            tmp16 = joined;
          }
          return tmp16;
        },
        items3,
      );
    };
const result = size.fileFinishedImporting("modules/activity_status/native/useActivityStatusLabel.tsx");

export default tmp2;
