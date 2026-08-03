// === Module 16244: finishRoll ===

// Module 16244 (finishRoll)
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import INITIAL_STATE from "INITIAL_STATE";
import { INITIAL_STATE } from "INITIAL_STATE";
import ROLL_DURATION_MS from "ROLL_DURATION_MS";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import "initialize";

let c10;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
({ AFTER_ROLL_DELAY_MS: error, ALLOWED_DICE_SIDES_SET: metroImportAll, DEFAULT_DICE_SIDES: c9, DISMISS_DELAY_MS: c10, MAX_DICE_COUNT: unpackModuleId, ROLL_DURATION_MS: closure_12 } = ROLL_DURATION_MS);
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
      const state = outer1_5.getState();
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
        diceSides = outer1_9;
      }
      let num3;
      let c2;
      let items;
      if (outer1_4.getChannelId() === channelId) {
        if (null == outer1_5.getState().channelId) {
          num3 = 42;
          if (42 !== num) {
            const _Math = Math;
            const _Math2 = Math;
            num3 = Math.min(Math.max(num, 1), outer1_11);
          }
          let tmp4 = diceSides;
          if (!outer1_8.has(diceSides)) {
            tmp4 = outer1_9;
          }
          c2 = tmp4;
          const obj = { channelId: null, rolling: true, diceCount: null, diceSides: null, results: null };
          obj[0] = channelId;
          obj[2] = num3;
          obj[3] = tmp4;
          obj2.setState(obj);
          items = [];
          for (let num4 = 0; num4 < num3; num4 = num4 + 1) {
            let _Math3 = Math;
            let _Math4 = Math;
            let arr = items.push(Math.floor(Math.random() * tmp4) + 1);
          }
          const _setTimeout = setTimeout;
          channelId.rollTimer = setTimeout(() => {
            channelId.rollTimer = null;
            channelId.finishRoll(channelId, num3, c2, items);
          }, outer1_12);
        }
        obj2 = outer1_5;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = DiceRollLifecycleManager.prototype;
prototype["finishRoll"] = function finishRoll(channelId, arg1, c2, items) {
  const self = this;
  store.setState({ rolling: false, results: items });
  this.postRollDismissTimer = setTimeout(() => {
    self.postRollDismissTimer = null;
    self.dismiss();
  }, closure_7);
  this.sendMessage(channelId, arg1, c2, items);
};
prototype["sendMessage"] = function sendMessage(arg0, arg1, arg2, arr) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let str = channel.getGuildId();
    if (str == null) {
      str = "@me";
    }
    let obj1 = globalThis;
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str + "/" + arg0 + "/roll-dice/" + arg1 + "d" + arg2;
    const intl = require(1236) /* getSystemLocale */.intl;
    let obj = { count: null, sides: null };
    obj[0] = arg1;
    obj[1] = arg2;
    const _HermesInternal2 = HermesInternal;
    const combined1 = "[`" + intl.formatToPlainString(require(1236) /* getSystemLocale */.t.uV5JaG, obj) + "`](" + combined + ")";
    const reduced = arr.reduce((arg0, arg1) => arg0 + arg1, 0);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { total: null, count: null, sides: null };
    obj[0] = reduced;
    obj[1] = arg1;
    obj[2] = arg2;
    const result = intl2.formatToMarkdownString(require(1236) /* getSystemLocale */.t.tmSbYW, obj);
    const mapped = arr.map((arg0) => ":game_die: " + arg0.toString());
    let str10 = " ";
    const _HermesInternal3 = HermesInternal;
    const combined2 = "-# " + mapped.join(" ");
    if (1 === arg1) {
      let combined3 = "### " + result + ` ` + combined1;
    } else {
      const _HermesInternal4 = HermesInternal;
      combined3 = "### " + result + ` ` + combined1 + "\n" + combined2;
    }
    str10 = importDefault(6814);
    obj1 = importDefault(7050);
    obj1 = { location: null };
    obj1[0] = MessageSendLocation.CHAT_INPUT;
    str10.sendMessage(arg0, obj1.parse(channel, combined3), true, obj1);
  }
};
prototype["dismiss"] = function dismiss() {
  const self = this;
  store.setState({ dismissing: true });
  this.collapseTimer = setTimeout(() => {
    self.collapseTimer = null;
    outer1_5.setState(outer1_6);
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
let result = require("INITIAL_STATE").fileFinishedImporting("modules/dice_roll/DiceRollLifecycleManager.tsx");

export default diceRollLifecycleManager;