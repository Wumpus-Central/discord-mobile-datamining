// === Module 17339: DiceRollLifecycleManager ===

// Module 17339 (DiceRollLifecycleManager)
import util from "util" /* 1114 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import DiceRollStore from "DiceRollStore" /* 11959 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const INITIAL_STATE = fn(11959).INITIAL_STATE;
const DiceRollConstants = fn(9301);
({ AFTER_ROLL_DELAY_MS: closure_7, ALLOWED_DICE_SIDES_SET: closure_8, DEFAULT_DICE_SIDES: closure_9, DISMISS_DELAY_MS: c10, MAX_DICE_COUNT: closure_11, ROLL_DURATION_MS: closure_12 } = DiceRollConstants);
const MessageSendLocation = fn(4553).MessageSendLocation;
class DiceRollLifecycleManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CHANNEL_SELECT(arg0) {
            return applyArgumentsResult.handleChannelSelect(arg0);
          },
      DICE_ROLL_START(channelId) {
            return applyArgumentsResult.handleStartRoll(channelId);
          }
    };
    applyArgumentsResult.rollTimer = null;
    applyArgumentsResult.postRollDismissTimer = null;
    applyArgumentsResult.collapseTimer = null;
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      state = DiceRollStore.getState();
      if (tmp2) {
        applyArgumentsResult.clearTimers();
        applyArgumentsResult.dismiss();
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
      closure_2 = undefined;
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
          obj2.setState(obj);
          items = [];
          for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
            let _Math3 = Math;
            let _Math4 = Math;
            let arr = items.push(Math.floor(Math.random() * tmp4) + 1);
          }
          const _setTimeout = setTimeout;
          channelId.rollTimer = setTimeout(() => {
            applyArgumentsResult.rollTimer = null;
            applyArgumentsResult.finishRoll(channelId, num3, closure_2, items);
          }, closure_1_12);
        }
        obj2 = state;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = DiceRollLifecycleManager.prototype;
prototype["finishRoll"] = function finishRoll(channelId, arg1, arg2, items) {
  const self = this;
  DiceRollStore.setState({ rolling: false, results: items });
  this.postRollDismissTimer = setTimeout(() => {
    self.postRollDismissTimer = null;
    self.dismiss();
  }, React5);
  this.sendMessage(channelId, arg1, arg2, items);
};
prototype["sendMessage"] = function sendMessage(arg0, count, sides, arr) {
  const channel = ChannelStore.getChannel(arg0);
  if (null != channel) {
    let str = channel.getGuildId();
    if (str == null) {
      str = "@me";
    }
    let obj1 = globalThis;
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str + "/" + arg0 + "/roll-dice/" + count + "d" + sides;
    const intl = util.intl;
    let obj = { count, sides };
    const _HermesInternal2 = HermesInternal;
    const combined1 = "[`" + intl.formatToPlainString(util.t.uV5JaG, obj) + "`](" + combined + ")";
    const reduced = arr.reduce((acc, item) => acc + item, 0);
    const intl2 = util.intl;
    obj = { total: reduced, count, sides };
    const result = intl2.formatToMarkdownString(util.t.tmSbYW, obj);
    const mapped = arr.map((item) => ":game_die: " + item.toString());
    let str10 = " ";
    const _HermesInternal3 = HermesInternal;
    const combined2 = "-# " + mapped.join(" ");
    if (1 === count) {
      let combined3 = "### " + result + ` ` + combined1;
    } else {
      const _HermesInternal4 = HermesInternal;
      combined3 = "### " + result + ` ` + combined1 + "\n" + combined2;
    }
    str10 = MessageActionCreatorsDefault;
    obj1 = { location: MessageSendLocation.CHAT_INPUT };
    str10.sendMessage(arg0, obj1.parse(channel, combined3), true, obj1);
  }
};
prototype["dismiss"] = function dismiss() {
  const self = this;
  DiceRollStore.setState({ dismissing: true });
  this.collapseTimer = setTimeout(() => {
    self.collapseTimer = null;
    DiceRollStore.setState(INITIAL_STATE);
  }, closure_10);
};
prototype["clearTimers"] = function clearTimers() {
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
};
const diceRollLifecycleManager = new DiceRollLifecycleManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/dice_roll/DiceRollLifecycleManager.tsx");

export default diceRollLifecycleManager;