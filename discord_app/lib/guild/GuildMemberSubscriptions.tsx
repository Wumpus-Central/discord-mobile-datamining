// === Module 6798: GuildMemberSubscriptions ===

// Module 6798 (GuildMemberSubscriptions)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1102 */;
import Timers from "Timers" /* 2046 */;
import size from "module_2" /* 2 */;

const MINUTE = DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("lib/guild/GuildMemberSubscriptions.tsx");
class GuildMemberSubscriptions {
  constructor(_onChange) {
    const obj = Object.create(new.target.prototype);
    obj._subscriptions = {};
    obj._unsubscriptions = {};
    const delayedCall = new Timers.DelayedCall(MINUTE, () => obj.flushUnsubscriptions());
    obj._unsubscribe = delayedCall;
    obj._onChange = _onChange;
    return obj;
  }
  reset() {
    this._subscriptions = {};
    this._unsubscriptions = {};
    const _unsubscribe = this._unsubscribe;
    _unsubscribe.cancel();
  }
  get(arg0) {
    let obj = this._subscriptions[arg0];
    if (obj == null) {
      obj = {};
    }
    const obj2 = SnowflakeUtilsDefault;
    return obj2.keys(obj);
  }
  clear(arg0) {
    delete this._subscriptions[arg0];
    delete this._unsubscriptions[arg0];
  }
  subscribe(arg0, arg1) {
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
  }
  isSubscribed(arg0, arg1) {
    return null != this._subscriptions[arg0] && null != tmp._subscriptions[arg0][arg1];
  }
  isSubscribedToAnyMember(arg0) {
    return this.get(arg0).length > 0;
  }
  unsubscribe(arg0, arg1) {
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
  }
  checkForLeaks(arg0, arg1) {
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
      const self = this;
      const self2 = this;
      const _HermesInternal = HermesInternal;
      const obj = new LoggerDefault("GuildMemberSubscriptions");
      obj.warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (" + diff + " subscriptions)");
    }
  }
  flushUnsubscriptions() {
    const self = this;
    const obj = _modDef12;
    if (!obj.isEmpty(this._unsubscriptions)) {
      const tmpResult = _modDef12;
      let item = tmpResult.forEach(self._unsubscriptions, (arg0, arg1) => {
        let closure_0 = tmp2;
        let tmp = arg1;
        const arr = _modDef12;
        const item = arr.forEach(arg0, (arg0, arg1) => {
          let num = closure_0[arg1];
          const tmp = arg1;
          if (num == null) {
            num = 0;
          }
          closure_0[arg1] = num - arg0;
          if (closure_0[arg1] <= 0) {
            delete closure_0[tmp];
          }
        });
        const obj2 = _modDef12;
        if (obj2.isEmpty(self._subscriptions[arg1])) {
          delete self._subscriptions[tmp];
        }
        self._onChange(arg1, self.get(arg1));
      });
      self._unsubscriptions = {};
    }
  }
}
const prototype = GuildMemberSubscriptions.prototype;

export default GuildMemberSubscriptions;