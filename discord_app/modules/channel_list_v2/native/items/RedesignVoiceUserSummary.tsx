// === Module 16096: RedesignVoiceUserSummary ===

// Module 16096 (RedesignVoiceUserSummary)
import ChannelUtils from "ChannelUtils" /* 5041 */;
import VoiceUserSummaryDefault from "VoiceUserSummary" /* 16092 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignVoiceUserSummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let summarizedVoiceUsers = guildId;
  const cResult = guildId(576).c(19);
  ({ channels, guildId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj = guildId(576);
  const stateFromStores = summarizedVoiceUsers(504).useStateFromStores(first, tmp5, tmp6);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SelectedChannelStore];
    const fn2 = function _() {
      return voiceChannelId.getVoiceChannelId();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    let tmp9 = fn2;
    let tmp8 = items2;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const summarizedVoiceUsersResult = summarizedVoiceUsers(504);
  const stateFromStores1 = summarizedVoiceUsers(504).useStateFromStores(tmp8, tmp9);
  if (cResult[6] === channels) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === stateFromStores) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] === channels) {
        if (cResult[11] === stateFromStores1) {
          if (cResult[12] === stateFromStores) {
            if (cResult[15] === guildId) {
              if (cResult[16] === tmp12) {
                if (cResult[17] === tmp14) {
                  let tmp18 = cResult[18];
                }
                return tmp18;
              }
            }
            const obj2 = { users: cResult[13], max: 8, renderIcon: true, guildId, stageIcon: tmp12 };
            const tmp21 = jsx(VoiceUserSummaryDefault, { users: cResult[13], max: 8, renderIcon: true, guildId, stageIcon: tmp12 });
            cResult[15] = guildId;
            cResult[16] = tmp12;
            cResult[17] = cResult[13];
            cResult[18] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function b(arg0) {
          return null != arg0;
        };
        cResult[14] = fn3;
        let tmp15 = fn3;
      } else {
        tmp15 = cResult[14];
      }
      const obj3 = { channels, selectedChannelId: "r", selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores };
      summarizedVoiceUsers = summarizedVoiceUsers(5041).computeSummarizedVoiceUsers(obj3);
      const found = summarizedVoiceUsers.filter(tmp15);
      cResult[10] = channels;
      cResult[11] = stateFromStores1;
      cResult[12] = stateFromStores;
      cResult[13] = found;
      const summarizedVoiceUsersResult2 = summarizedVoiceUsers(5041);
    }
  }
  const summarizedVoiceUsersResult1 = summarizedVoiceUsers(504);
  const isAnyVoiceStateStageResult = summarizedVoiceUsers(5041).isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores);
  cResult[6] = channels;
  cResult[7] = stateFromStores1;
  cResult[8] = stateFromStores;
  cResult[9] = isAnyVoiceStateStageResult;
  tmp12 = isAnyVoiceStateStageResult;
  const summarizedVoiceUsersResult3 = summarizedVoiceUsers(5041);
}) : ((channels) => {
  channels = channels.channels;
  const guildId = channels.guildId;
  let stateFromStores;
  const items = [SortedVoiceStateStore];
  const items1 = [guildId];
  stateFromStores = channels(stateFromStores[6]).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStates(guildId), items1);
  const obj = channels(stateFromStores[6]);
  const items2 = [SelectedChannelStore];
  const stateFromStores1 = channels(stateFromStores[6]).useStateFromStores(items2, () => voiceChannelId.getVoiceChannelId());
  const items3 = [channels, stateFromStores1, stateFromStores];
  const stageIcon = stateFromStores1.useMemo(() => ChannelUtils.isAnyVoiceStateStage(channels, stateFromStores1, stateFromStores), items3);
  const obj2 = channels(stateFromStores[6]);
  const obj4 = { channels, selectedChannelId: "r", selectedVoiceChannelId: stateFromStores1, voiceStates: stateFromStores };
  const summarizedVoiceUsers = channels(stateFromStores[7]).computeSummarizedVoiceUsers(obj4);
  const users = summarizedVoiceUsers.filter((item) => null != item);
  return jsx(guildId(stateFromStores[8]), { users, max: 8, renderIcon: true, guildId, stageIcon });
});