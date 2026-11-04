// === Module 19834: InterestGuildJoins ===

// Module 19834 (InterestGuildJoins)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoins.tsx");
class InterestGuildJoins {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.snapshot = { joined: [] };
    set = new Set();
    obj.listeners = set;
    obj.getSnapshot = function getSnapshot() {
      return snapshot.snapshot;
    };
    obj.subscribe = function subscribe(arg0) {
      let listeners = arg0;
      listeners = listeners.listeners;
      listeners.add(arg0);
      return () => {
        listeners = listeners.listeners;
        return listeners.delete(listeners);
      };
    };
    closure_0 = undefined;
    closure_1 = obj;
    closure_0 = closure_0(async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              closure_130_0 = closure_0;
              const joined = obj.snapshot.joined;
              if (!joined.includes(closure_0)) {
                const obj4 = { joined: null };
                closure_1 = 0;
                items = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(obj.snapshot.joined, closure_1);
                closure_1 = arraySpreadResult;
                items[arraySpreadResult] = closure_0;
                closure_1 = closure_1 + 1;
                obj4.joined = items;
                obj.update(obj4);
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: obj.joinGuild(closure_0), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              closure_130_1 = closure_4;
              const obj6 = { joined: null };
              const joined1 = closure_131_1.snapshot.joined;
              obj6.joined = joined1.filter((item) => item !== closure_1_0);
              closure_131_1.update(obj6);
              closure_131_1.onFailure(closure_130_1);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          c7 = 3;
        } catch (tmp26) {
          closure_4 = tmp26;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp26;
          } else {
            c6 = tmp;
          }
        }
      }
    });
    obj.join = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.joinGuild = global;
    obj.onFailure = fn;
    return obj;
  }
}
InterestGuildJoins.prototype["update"] = function update(snapshot) {
  this.snapshot = snapshot;
  const listeners = this.listeners;
  const item = listeners.forEach((fn) => fn());
};

export { InterestGuildJoins };