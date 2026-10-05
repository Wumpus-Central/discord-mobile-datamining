// === Module 17484: DiceRollLifecycleManager ===

// Module 17484 (DiceRollLifecycleManager)
import intl3 from "intl" /* 1126 */;
import MessageConstants from "MessageConstants" /* 4883 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import MessageParserDefault from "MessageParser" /* 7166 */;
import DiceRollStore2 from "DiceRollStore" /* 11573 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import DiceRollConstants from "DiceRollConstants" /* 8806 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const DiceRollStore = DiceRollStore2;
let state;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const INITIAL_STATE = DiceRollStore2.INITIAL_STATE;
({ AFTER_ROLL_DELAY_MS: metroImportDefault, ALLOWED_DICE_SIDES_SET: metroImportAll, DEFAULT_DICE_SIDES: c9, DISMISS_DELAY_MS: c10, MAX_DICE_COUNT: unpackModuleId, ROLL_DURATION_MS: closure_12 } = DiceRollConstants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
class DiceRollLifecycleManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT(arg0) {
        return require.handleChannelSelect(arg0);
      },
      DICE_ROLL_START(channelId) {
        return require.handleStartRoll(channelId);
      }
    };
    applyArgumentsResult.rollTimer = null;
    applyArgumentsResult.postRollDismissTimer = null;
    applyArgumentsResult.collapseTimer = null;
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      channelId = channelId.channelId;
      state = DiceRollStore.getState();
      const tmp2 = null != state.channelId && state.channelId !== channelId;
      if (tmp2) {
        require.clearTimers();
        require.dismiss();
      }
    };
    applyArgumentsResult.handleStartRoll = function handleStartRoll(channelId) {
      channelId = channelId.channelId;
      let num = channelId.diceCount;
      if (num === undefined) {
        num = 1;
      }
      let diceSides = channelId.diceSides;
      if (diceSides === undefined) {
        diceSides = closure_1_9;
      }
      let num3;
      let closure_2;
      let items;
      if (channelId.getChannelId() === channelId) {
        if (null == state.getState().channelId) {
          num3 = 42;
          if (42 !== num) {
            const _Math = Math;
            const _Math2 = Math;
            num3 = Math.min(Math.max(num, 1), closure_1_11);
          }
          let tmp4 = diceSides;
          if (!set.has(diceSides)) {
            tmp4 = closure_1_9;
          }
          closure_2 = tmp4;
          const obj = { channelId, rolling: true, diceCount: num3, diceSides: tmp4, results: null };
          state.setState(obj);
          items = [];
          for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
            let _Math3 = Math;
            let _Math4 = Math;
            let arr = items.push(Math.floor(Math.random() * tmp4) + 1);
          }
          const _setTimeout = setTimeout;
          channelId.rollTimer = setTimeout(() => {
            require.rollTimer = null;
            require.finishRoll(channelId, num3, closure_2, items);
          }, closure_1_12);
        }
      }
    };
    return applyArgumentsResult;
  }
  finishRoll(channelId, arg1, arg2, items) {
    const self = this;
    const obj = { rolling: false, results: items };
    DiceRollStore.setState(obj);
    this.postRollDismissTimer = setTimeout(() => {
      self.postRollDismissTimer = null;
      self.dismiss();
    }, metroImportDefault);
    this.sendMessage(channelId, arg1, arg2, items);
  }
  sendMessage(arg0, count, sides, arr) {
    const channel = ChannelStore.getChannel(arg0);
    if (null != channel) {
      let combined3;
      let str = channel.getGuildId();
      if (str == null) {
        str = "@me";
      }
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      const combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str + "/" + arg0 + "/roll-dice/" + count + "d" + sides;
      const intl = intl3.intl;
      const _HermesInternal2 = HermesInternal;
      const obj = { count, sides };
      const combined1 = "[`" + intl.formatToPlainString(intl3.t.uV5JaG, obj) + "`](" + combined + ")";
      const reduced = arr.reduce((acc, item) => acc + item, 0);
      const intl2 = intl3.intl;
      const obj2 = { total: reduced, count, sides };
      const result = intl2.formatToMarkdownString(intl3.t.tmSbYW, obj2);
      const mapped = arr.map((item) => ":game_die: " + item.toString());
      const _HermesInternal3 = HermesInternal;
      const combined2 = "-# " + mapped.join(" ");
      if (1 === count) {
        const _HermesInternal5 = HermesInternal;
        combined3 = "### " + result + " " + combined1;
      } else {
        const _HermesInternal4 = HermesInternal;
        combined3 = "### " + result + " " + combined1 + "\n" + combined2;
      }
      const sendMessage = MessageActionCreatorsDefault.sendMessage;
      const obj3 = { location: MessageSendLocation.CHAT_INPUT };
      const obj5 = MessageParserDefault;
      sendMessage(arg0, obj5.parse(channel, combined3), true, obj3);
    }
  }
  dismiss() {
    const self = this;
    DiceRollStore.setState({ dismissing: true });
    this.collapseTimer = setTimeout(() => {
      self.collapseTimer = null;
      DiceRollStore.setState(INITIAL_STATE);
    }, closure_10);
  }
  clearTimers() {
    const self = this;
    if (null != this.rollTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.rollTimer);
      self.rollTimer = null;
    }
    if (null != self.postRollDismissTimer) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(self.postRollDismissTimer);
      self.postRollDismissTimer = null;
    }
    if (null != self.collapseTimer) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(self.collapseTimer);
      self.collapseTimer = null;
    }
  }
}
const prototype = DiceRollLifecycleManager.prototype;
const diceRollLifecycleManager = new DiceRollLifecycleManager();
let result = size.fileFinishedImporting("modules/dice_roll/DiceRollLifecycleManager.tsx");

export default diceRollLifecycleManager;