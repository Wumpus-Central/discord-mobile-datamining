// === Module 17153: finishRoll ===

// Module 17153 (finishRoll)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import initializeDefault from "initialize" /* 5494 */;
import trackInviteDefault from "trackInvite" /* 7210 */;
import rebuildDefault from "rebuild" /* 7436 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "handleConnectionOpen" /* 1980 */;
import closure_5 from "INITIAL_STATE" /* 11755 */;
import { INITIAL_STATE } from "INITIAL_STATE" /* 11755 */;
import ROLL_DURATION_MS from "ROLL_DURATION_MS" /* 8165 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4471 */;

require = arg1;
({ AFTER_ROLL_DELAY_MS: error, ALLOWED_DICE_SIDES_SET: closure_8, DEFAULT_DICE_SIDES: c9, DISMISS_DELAY_MS: c10, MAX_DICE_COUNT: unpackModuleId, ROLL_DURATION_MS: closure_12 } = ROLL_DURATION_MS);
initializeDefault;
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
      const state = closure_1_5.getState();
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
      if (closure_1_4.getChannelId() === channelId) {
        if (null == closure_1_5.getState().channelId) {
          num3 = 42;
          if (42 !== num) {
            const _Math = Math;
            const _Math2 = Math;
            num3 = Math.min(Math.max(num, 1), closure_1_11);
          }
          let tmp4 = diceSides;
          if (!closure_1_8.has(diceSides)) {
            tmp4 = closure_1_9;
          }
          closure_2 = tmp4;
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
            channelId.finishRoll(channelId, num3, closure_2, items);
          }, closure_1_12);
        }
        obj2 = closure_1_5;
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = DiceRollLifecycleManager.prototype;
prototype["finishRoll"] = function finishRoll(channelId, arg1, closure_2, items) {
  const self = this;
  store.setState({ rolling: false, results: items });
  this.postRollDismissTimer = setTimeout(() => {
    self.postRollDismissTimer = null;
    self.dismiss();
  }, closure_7);
  this.sendMessage(channelId, arg1, closure_2, items);
};
prototype["sendMessage"] = function sendMessage(arg0, arg1, arg2, arr) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let str = channel.getGuildId();
    if (str == null) {
      str = "@me";
    }
    obj1 = globalThis;
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/channels/" + str + "/" + arg0 + "/roll-dice/" + arg1 + "d" + arg2;
    const intl = getSystemLocale.intl;
    let obj = { count: null, sides: null };
    obj[0] = arg1;
    obj[1] = arg2;
    const _HermesInternal2 = HermesInternal;
    const combined1 = "[`" + intl.formatToPlainString(getSystemLocale.t.uV5JaG, obj) + "`](" + combined + ")";
    const reduced = arr.reduce((arg0, arg1) => arg0 + arg1, 0);
    const intl2 = getSystemLocale.intl;
    obj = { total: null, count: null, sides: null };
    obj[0] = reduced;
    obj[1] = arg1;
    obj[2] = arg2;
    const result = intl2.formatToMarkdownString(getSystemLocale.t.tmSbYW, obj);
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
    str10 = trackInviteDefault;
    obj1 = rebuildDefault;
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
    closure_1_5.setState(closure_1_6);
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
let result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollLifecycleManager.tsx");

export default diceRollLifecycleManager;