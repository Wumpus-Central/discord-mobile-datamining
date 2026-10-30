// === Module 19326: AgeGateManager ===

// Module 19326 (AgeGateManager)
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;

require = fn;
const AgeGateConstants = fn(1098);
({ EXISTING_USER_AGE_GATE_MODAL_KEY: closure_7, AgeGateSource: closure_8, AgeGateType: closure_9 } = AgeGateConstants);
const Constants = fn(1072);
({ ChannelTypes: c10, GuildNSFWContentLevel: closure_11 } = Constants);
class AgeGateManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, AGE_GATE_MODAL_OPEN: applyArgumentsResult.handleAgeGateModalOpen, AGE_GATE_MODAL_CLOSE: applyArgumentsResult.handleAgeGateModalClose, GUILD_UPDATE: applyArgumentsResult.handleGuildUpdate };
    return applyArgumentsResult;
  }
}
const prototype = AgeGateManager.prototype;
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId();
  AgeGateUtils.maybeShowAgeGate(guildId, channelId);
};
prototype["handleChannelSelect"] = function handleChannelSelect(arg0) {
  ({ guildId, channelId } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  let tmp2 = null != guildId;
  if (tmp2) {
    let type;
    if (channel != null) {
      type = channel.type;
    }
    tmp2 = type !== constants.GUILD_VOICE;
  }
  if (tmp2) {
    AgeGateUtils.maybeShowAgeGate(guildId, channelId);
  }
};
prototype["handleAgeGateModalOpen"] = function handleAgeGateModalOpen(channelId) {
  const source = channelId.source;
  importDefault = source(6728).getAgeGateType(source);
  let obj = source(6728);
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            if (closure_1 === constants2.AGE_ASSURANCE) {
              c2 = 2;
              c3 = 1;
              const obj4 = { value: tmp2(c2[10])(c2[9], c2.paths), done: false };
              return obj4;
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp2(c2[10])(c2[11], c2.paths), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          closure_128_0 = value.default;
          if (closure_129_0 === constants.AUTH) {
            const obj7 = { animation: tmp2(c2[12]).ModalAnimation.SLIDE_IN_OUT };
            closure_128_0.modalConfig = obj7;
          }
          c3 = 3;
          const obj8 = { value: closure_128_0, done: true };
          return obj8;
        }
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  }), { source, channelId: channelId.channelId }, closure_7);
};
prototype["handleAgeGateModalClose"] = function handleAgeGateModalClose() {
  ModalActionCreatorsDefault.popWithKey(React5);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const guildId = SelectedGuildStore.getGuildId();
  let tmp2 = null != guildId && guild.id === guildId;
  if (tmp2) {
    tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
  }
  if (tmp2) {
    AgeGateUtils.maybeShowAgeGate(guild.id, null);
  }
};
const ageGateManager = new AgeGateManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;