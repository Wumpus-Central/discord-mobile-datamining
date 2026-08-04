// discord_app/lib/guild/GuildMemberSubscriptions.tsx
const require = arg1;
const MINUTE = require("set").Millis.MINUTE;
const result = require("DISCORD_EPOCH").fileFinishedImporting("lib/guild/GuildMemberSubscriptions.tsx");
class GuildMemberSubscriptions {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._subscriptions = {};
    obj._unsubscriptions = {};
    delayedCall = new require("start").DelayedCall(c3, () => obj.flushUnsubscriptions());
    obj._unsubscribe = delayedCall;
    obj._onChange = global;
    return obj;
  }
}
const prototype = GuildMemberSubscriptions.prototype;
prototype["reset"] = function reset() {
  this._subscriptions = {};
  this._unsubscriptions = {};
  const _unsubscribe = this._unsubscribe;
  _unsubscribe.cancel();
};
prototype["get"] = function get(arg0) {
  let obj = this._subscriptions[arg0];
  if (obj == null) {
    obj = {};
  }
  return importDefault(11).keys(obj);
};
prototype["clear"] = function clear(arg0) {
  delete tmp3[tmp2];
  delete tmp[tmp2];
};
prototype["subscribe"] = function subscribe(arg0, arg1) {
  const self = this;
  let obj = this._subscriptions[arg0];
  if (obj == null) {
    obj = {};
  }
  let num = obj[arg1];
  if (num == null) {
    num = 0;
  }
  obj[arg1] = num + 1;
  self._subscriptions[arg0] = obj;
  if (1 === obj[arg1]) {
    self._onChange(arg0, self.get(arg0));
  }
  self.checkForLeaks(arg0, arg1);
};
prototype["isSubscribed"] = function isSubscribed(arg0, arg1) {
  let tmp2 = null != this._subscriptions[arg0];
  if (tmp2) {
    tmp2 = null != tmp._subscriptions[arg0][arg1];
  }
  return tmp2;
};
prototype["isSubscribedToAnyMember"] = function isSubscribedToAnyMember(arg0) {
  return this.get(arg0).length > 0;
};
prototype["unsubscribe"] = function unsubscribe(arg0, arg1) {
  const self = this;
  if (this.isSubscribed(arg0, arg1)) {
    let obj = self._unsubscriptions[arg0];
    if (obj == null) {
      obj = {};
    }
    let num = obj[arg1];
    if (num == null) {
      num = 0;
    }
    obj[arg1] = num + 1;
    self._unsubscriptions[arg0] = obj;
    if (1 === obj[arg1]) {
      const _unsubscribe = self._unsubscribe;
      _unsubscribe.delay(false);
    }
  }
};
prototype["checkForLeaks"] = function checkForLeaks(arg0, arg1) {
  let num;
  if (this._subscriptions[arg0] != null) {
    num = tmp[arg1];
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (this._unsubscriptions[arg0] != null) {
    num2 = tmp2[arg1];
  }
  if (num2 == null) {
    num2 = 0;
  }
  const diff = num - num2;
  if (diff > 5) {
    const obj = new importDefault(3)("GuildMemberSubscriptions");
    const _HermesInternal = HermesInternal;
    obj.warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (" + diff + " subscriptions)");
  }
};
prototype["flushUnsubscriptions"] = function flushUnsubscriptions() {
  let self = this;
  self = this;
  if (!obj.isEmpty(this._unsubscriptions)) {
    let item = importDefault(12).forEach(self._unsubscriptions, (arg0, arg1) => {
      const self = tmp3;
      const item = outer1_1(outer1_2[4]).forEach(arg0, (arg0, arg1) => {
        let num = tmp3[arg1];
        if (num == null) {
          num = 0;
        }
        tmp3[arg1] = num - arg0;
        if (tmp3[arg1] <= 0) {
          delete tmp[tmp2];
        }
      });
      const arr = outer1_1(outer1_2[4]);
      if (obj2.isEmpty(self._subscriptions[arg1])) {
        const _subscriptions = obj._subscriptions;
        delete tmp[tmp2];
      }
      self._onChange(arg1, self.get(arg1));
    });
    self._unsubscriptions = {};
    const tmpResult = importDefault(12);
  }
};

export default GuildMemberSubscriptions;