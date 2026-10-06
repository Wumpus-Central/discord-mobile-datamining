// discord_app/modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import StageChannelParticipants from "../stage_channels/StageChannelParticipants.tsx";
import react from "../../../_runtime/00019_react.js";
import StageChannelParticipantStore from "../stage_channels/StageChannelParticipantStore.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import LiveChannelNoticesStore from "LiveChannelNoticesStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_11 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildActiveEvent;
      let stateFromStores;
      let tmp15;
      let tmp19;
      let tmp21;
      let tmp24;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(14);
      const tmp4 = stateFromStores(guildActiveEvent[12])(arg0);
      const first = tmp4[0];
      let id;
      const first1 = cResult[0];
      if (first != null) {
        id = first.id;
      }
      if (first1 !== id) {
        const first2 = tmp4[0];
        let id1;
        const getChannel = ChannelStore.getChannel;
        if (first2 != null) {
          id1 = first2.id;
        }
        const channel = getChannel(id1);
        const first3 = tmp4[0];
        let id2;
        if (first3 != null) {
          id2 = first3.id;
        }
        cResult[0] = id2;
        cResult[1] = channel;
        tmp8 = channel;
      } else {
        tmp8 = cResult[1];
      }
      _require = tmp8;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageInstanceStore];
        cResult[2] = items;
        tmp15 = items;
      } else {
        tmp15 = cResult[2];
      }
      let id3;
      const tmp17 = cResult[3];
      if (tmp8 != null) {
        id3 = tmp8.id;
      }
      if (tmp17 !== id3) {
        let id4;
        if (tmp8 != null) {
          id4 = tmp8.id;
        }
        const fn = function h() {
          id = undefined;
          const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
          if (id != null) {
            id = id.id;
          }
          return getStageInstanceByChannel(id);
        };
        cResult[3] = id4;
        cResult[4] = fn;
        tmp19 = fn;
      } else {
        tmp19 = cResult[4];
      }
      if (cResult[5] !== tmp8) {
        const items1 = [tmp8];
        cResult[5] = tmp8;
        cResult[6] = items1;
        tmp21 = items1;
      } else {
        tmp21 = cResult[6];
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp15, tmp19, tmp21);
      const tmpResult3 = require("useGuildScheduledEvents");
      guildActiveEvent = tmpResult3.useGuildActiveEvent(arg0);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [LiveChannelNoticesStore];
        cResult[7] = items2;
        tmp24 = items2;
      } else {
        tmp24 = cResult[7];
      }
      let id5;
      const tmp26 = cResult[8];
      if (guildActiveEvent != null) {
        id5 = guildActiveEvent.id;
      }
      if (tmp26 === id5) {
        let tmp30;
        let id6;
        const tmp28 = cResult[9];
        if (stateFromStores != null) {
          id6 = stateFromStores.id;
        }
        if (tmp28 === id6) {
          tmp30 = cResult[10];
        }
        if (cResult[11] === guildActiveEvent) {
          let tmp33;
          let tmp35;
          if (cResult[12] === stateFromStores) {
            tmp33 = cResult[13];
          }
          const tmpResult4 = require("get initialized");
          const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp24, tmp30, tmp33);
          const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
          if (null != guildActiveEvent) {
            tmp35 = null != stateFromStores ? !isStageNoticeHidden : !stateFromStoresObject.isEventNoticeHidden;
          } else {
            tmp35 = null != stateFromStores && !isStageNoticeHidden;
          }
          return tmp35;
        }
        const items3 = [stateFromStores, guildActiveEvent];
        cResult[11] = guildActiveEvent;
        cResult[12] = stateFromStores;
        cResult[13] = items3;
        tmp33 = items3;
      }
      let id7;
      if (guildActiveEvent != null) {
        id7 = guildActiveEvent.id;
      }
      cResult[8] = id7;
      let id8;
      if (stateFromStores != null) {
        id8 = stateFromStores.id;
      }
      class E {
        constructor() {
          let id1;
          let isLiveChannelNoticeHidden2;
          id = undefined;
          const isLiveChannelNoticeHidden = LiveChannelNoticesStore.isLiveChannelNoticeHidden;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          const obj = {
            isStageNoticeHidden: isLiveChannelNoticeHidden({ stageId: id }),
            isEventNoticeHidden: isLiveChannelNoticeHidden2({ eventId: id1 }),
          };
          id1 = undefined;
          isLiveChannelNoticeHidden2 = LiveChannelNoticesStore.isLiveChannelNoticeHidden;
          if (guildActiveEvent != null) {
            id1 = guildActiveEvent.id;
          }
          return obj;
        }
      }
      cResult[9] = id8;
      cResult[10] = E;
      tmp30 = E;
    }
  : (arg0) => {
      let guildActiveEvent;
      let stateFromStores;
      let tmp9;
      const first = stateFromStores(guildActiveEvent[12])(arg0)[0];
      let id;
      const getChannel = ChannelStore.getChannel;
      if (first != null) {
        id = first.id;
      }
      const channel = getChannel(id);
      let obj = channel(tmp[13]);
      const items = [StageInstanceStore];
      const items1 = [channel];
      stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let id;
          const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
          if (channel != null) {
            id = channel.id;
          }
          return getStageInstanceByChannel(id);
        },
        items1,
      );
      const obj2 = channel(guildActiveEvent[14]);
      guildActiveEvent = obj2.useGuildActiveEvent(arg0);
      const items2 = [LiveChannelNoticesStore];
      const items3 = [stateFromStores, guildActiveEvent];
      const obj3 = channel(guildActiveEvent[13]);
      const stateFromStoresObject = obj3.useStateFromStoresObject(
        items2,
        () => {
          let id1;
          let isLiveChannelNoticeHidden2;
          let id;
          const isLiveChannelNoticeHidden = LiveChannelNoticesStore.isLiveChannelNoticeHidden;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          const obj = {
            isStageNoticeHidden: isLiveChannelNoticeHidden({ stageId: id }),
            isEventNoticeHidden: isLiveChannelNoticeHidden2({ eventId: id1 }),
          };
          id1 = undefined;
          isLiveChannelNoticeHidden2 = LiveChannelNoticesStore.isLiveChannelNoticeHidden;
          if (guildActiveEvent != null) {
            id1 = guildActiveEvent.id;
          }
          return obj;
        },
        items3,
      );
      const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
      if (null != guildActiveEvent) {
        tmp9 = null != stateFromStores ? !isStageNoticeHidden : !stateFromStoresObject.isEventNoticeHidden;
      } else {
        tmp9 = null != stateFromStores && !isStageNoticeHidden;
      }
      return tmp9;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activeEventOrStageInstanceChannel;
      let first;
      let tmp10;
      let tmp12;
      let tmp19;
      const tmp = activeEventOrStageInstanceChannel;
      const obj = activeEventOrStageInstanceChannel(576);
      const cResult = obj.c(29);
      const obj2 = activeEventOrStageInstanceChannel(16151);
      activeEventOrStageInstanceChannel = obj2.useActiveEventOrStageInstanceChannel(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== activeEventOrStageInstanceChannel) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
        cResult[1] = activeEventOrStageInstanceChannel;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      const tmpResult5 = tmp(9195);
      const guildActiveEvent = tmpResult5.useGuildActiveEvent(arg0);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
        const items1 = [StageInstanceStore];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      const tmp11 = cResult[4];
      if (activeEventOrStageInstanceChannel != null) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      if (tmp11 !== undefined) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
        if (activeEventOrStageInstanceChannel != null) {
          class S {
            constructor() {
              const canResult =
                null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
              return canResult;
            }
          }
        }
        const fn = function _() {
          let id;
          const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
          if (activeEventOrStageInstanceChannel != null) {
            id = activeEventOrStageInstanceChannel.id;
          }
          return getStageInstanceByChannel(id);
        };
        cResult[4] = tmp13;
        cResult[5] = fn;
        tmp12 = fn;
      } else {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      if (cResult[6] !== activeEventOrStageInstanceChannel) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
        tmp15[0] = activeEventOrStageInstanceChannel;
        cResult[6] = activeEventOrStageInstanceChannel;
        cResult[7] = tmp15;
      } else {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      const tmpResult6 = tmp(504);
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp12, tmp15);
      const useActualStageSpeakerCount = tmp(5595).useActualStageSpeakerCount;
      tmp(5595);
      if (activeEventOrStageInstanceChannel != null) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      const tmp18 = useActualStageSpeakerCount(undefined) > 0;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
        const items2 = [SortedVoiceStateStore];
        cResult[8] = items2;
        tmp19 = items2;
      } else {
        class S {
          constructor() {
            const canResult =
              null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
            return canResult;
          }
        }
      }
      if (cResult[9] !== activeEventOrStageInstanceChannel) {
        class I {
          constructor() {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
            return tmp2;
          }
        }
        cResult[9] = activeEventOrStageInstanceChannel;
        cResult[10] = I;
      } else {
        class I {
          constructor() {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
            return tmp2;
          }
        }
      }
      const tmpResult8 = tmp(504);
      const stateFromStores2 = tmpResult8.useStateFromStores(tmp19, I);
      if (cResult[11] === activeEventOrStageInstanceChannel) {
        class I {
          constructor() {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
            return tmp2;
          }
        }
      }
      if (null == activeEventOrStageInstanceChannel) {
        class I {
          constructor() {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
            return tmp2;
          }
        }
        if (tmp22) {
          class I {
            constructor() {
              const tmp2 =
                null != activeEventOrStageInstanceChannel &&
                SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
              return tmp2;
            }
          }
        }
      } else {
        class I {
          constructor() {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
            return tmp2;
          }
        }
      }
      cResult[11] = activeEventOrStageInstanceChannel;
      cResult[12] = guildActiveEvent;
      cResult[13] = tmp18;
      cResult[14] = stateFromStores2;
      cResult[15] = stateFromStores1;
      cResult[16] = flag;
    }
  : (arg0) => {
      let activeEventOrStageInstanceChannel;
      let entity_type;
      let flag;
      let stateFromStores2;
      let stateFromStores4;
      const tmp = activeEventOrStageInstanceChannel;
      let tmp2 = stateFromStores2;
      const obj = activeEventOrStageInstanceChannel(stateFromStores2[15]);
      activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(arg0);
      const items = [PermissionStore];
      const obj2 = activeEventOrStageInstanceChannel(stateFromStores2[13]);
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const canResult = null != activeEventOrStageInstanceChannel && PermissionStore.can(Permissions.CONNECT, tmp);
        return canResult;
      });
      const obj3 = activeEventOrStageInstanceChannel(stateFromStores2[14]);
      const guildActiveEvent = obj3.useGuildActiveEvent(arg0);
      const items1 = [entity_type];
      const items2 = [activeEventOrStageInstanceChannel];
      const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[13]);
      const stateFromStores1 = obj4.useStateFromStores(
        items1,
        () => {
          let id;
          const getStageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel;
          if (activeEventOrStageInstanceChannel != null) {
            id = activeEventOrStageInstanceChannel.id;
          }
          return getStageInstanceByChannel(id);
        },
        items2,
      );
      let id;
      const useActualStageSpeakerCount = activeEventOrStageInstanceChannel(
        stateFromStores2[16],
      ).useActualStageSpeakerCount;
      activeEventOrStageInstanceChannel(stateFromStores2[16]);
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      const tmp9 = useActualStageSpeakerCount(id) > 0;
      const items3 = [SortedVoiceStateStore];
      const tmpResult = tmp(tmp2[13]);
      tmpResult.useStateFromStores(items3, () => {
        const tmp2 =
          null != activeEventOrStageInstanceChannel && SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
        return tmp2;
      });
      stateFromStores2 = false;
      if (null != activeEventOrStageInstanceChannel) {
        if (null != stateFromStores1) {
          stateFromStores2 = tmp9;
          flag = tmp9;
        }
        const items4 = [stateFromStores4];
        const items5 = [activeEventOrStageInstanceChannel];
        const tmpResult3 = tmp(tmp2[13]);
        const stateFromStores3 = tmpResult3.useStateFromStores(
          items4,
          () => {
            const tmp2 =
              null != activeEventOrStageInstanceChannel &&
              StageChannelParticipantStore.getParticipantCount(
                tmp.id,
                StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
              ) > 0;
            return tmp2;
          },
          items5,
        );
        const items6 = [ApplicationStreamingStore];
        const tmpResult4 = tmp(tmp2[13]);
        stateFromStores4 = tmpResult4.useStateFromStores(items6, () => {
          const tmp2 =
            null != activeEventOrStageInstanceChannel &&
            ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp.id).length > 0;
          return tmp2;
        });
        entity_type = undefined;
        if (guildActiveEvent != null) {
          entity_type = guildActiveEvent.entity_type;
        }
        const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
        return stateFromStores3.useMemo(
          () => ({
            hasButton: entity_type === constants.EXTERNAL || stateFromStores,
            hasSpeakers: stateFromStores2,
            hasAudience: stateFromStores3,
            hasStream: stateFromStores4,
          }),
          items7,
        );
      }
      flag = false;
      const tmp11 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
      if (tmp11) {
        flag = stateFromStores2;
      }
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = tmp2;
export const useGuildLiveChannelNoticeInfo = tmp3;
