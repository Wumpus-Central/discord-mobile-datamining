// discord_app/modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import VoiceUserSummaryDefault from "../../../guild_sidebar/native/VoiceUserSummary.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channels;
      let first;
      let guildId;
      let tmp10;
      let tmp6;
      let tmp7;
      let tmp9;
      let voiceChannelId;
      const obj = guildId(576);
      const cResult = obj.c(19);
      ({ channels, guildId } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return SortedVoiceStateStore.getVoiceStates(guildId);
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SelectedChannelStore];
        const fn2 = function _() {
          return voiceChannelId.getVoiceChannelId();
        };
        cResult[4] = items2;
        cResult[5] = fn2;
        tmp10 = fn2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult4 = guildId(504);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
      if (cResult[6] === channels) {
        if (cResult[7] === stateFromStores1) {
          let tmp13;
          let tmp16;
          if (cResult[8] === stateFromStores) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === channels) {
            if (cResult[11] === stateFromStores1) {
              let tmp15;
              if (cResult[12] === stateFromStores) {
                tmp15 = cResult[13];
              }
              if (cResult[15] === guildId) {
                if (cResult[16] === tmp13) {
                  let tmp18;
                  if (cResult[17] === tmp15) {
                    tmp18 = cResult[18];
                  }
                  return tmp18;
                }
              }
              const tmp21 = jsx(VoiceUserSummaryDefault, {
                users: tmp15,
                max: 8,
                renderIcon: true,
                guildId,
                stageIcon: tmp13,
              });
              cResult[15] = guildId;
              cResult[16] = tmp13;
              cResult[17] = tmp15;
              cResult[18] = tmp21;
              tmp18 = tmp21;
            }
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function b(arg0) {
              return null != arg0;
            };
            cResult[14] = fn3;
            tmp16 = fn3;
          } else {
            tmp16 = cResult[14];
          }
          const obj3 = {
            channels,
            selectedChannelId: "r",
            selectedVoiceChannelId: stateFromStores1,
            voiceStates: stateFromStores,
          };
          const tmpResult5 = guildId(5041);
          const summarizedVoiceUsers = tmpResult5.computeSummarizedVoiceUsers(obj3);
          const found = summarizedVoiceUsers.filter(tmp16);
          cResult[10] = channels;
          cResult[11] = stateFromStores1;
          cResult[12] = stateFromStores;
          cResult[13] = found;
          tmp15 = found;
        }
      }
      const tmpResult6 = guildId(5041);
      const isAnyVoiceStateStageResult = tmpResult6.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores);
      cResult[6] = channels;
      cResult[7] = stateFromStores1;
      cResult[8] = stateFromStores;
      cResult[9] = isAnyVoiceStateStageResult;
      tmp13 = isAnyVoiceStateStageResult;
    }
  : (channels) => {
      let voiceChannelId;
      channels = channels.channels;
      const guildId = channels.guildId;
      let stateFromStores;
      let obj = channels(stateFromStores[6]);
      const items = [SortedVoiceStateStore];
      const items1 = [guildId];
      stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(guildId), items1);
      const items2 = [SelectedChannelStore];
      const obj2 = channels(stateFromStores[6]);
      const stateFromStores1 = obj2.useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
      const items3 = [channels, stateFromStores1, stateFromStores];
      const stageIcon = stateFromStores1.useMemo(() => {
        const obj = ChannelUtils;
        return obj.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores);
      }, items3);
      const obj4 = {
        channels,
        selectedChannelId: "r",
        selectedVoiceChannelId: stateFromStores1,
        voiceStates: stateFromStores,
      };
      const obj3 = channels(stateFromStores[7]);
      const summarizedVoiceUsers = obj3.computeSummarizedVoiceUsers(obj4);
      const users = summarizedVoiceUsers.filter((item) => null != item);
      return jsx(guildId(stateFromStores[8]), { users, max: 8, renderIcon: true, guildId, stageIcon });
    };
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default tmp2;
