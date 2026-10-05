// _runtime/metro/12629__.js
import _mod12589 from "12589__.js";

let diff;

export function makePromiseBuffer(arg0) {
  let closure_0 = arg0;
  const items = [];
  let obj = {
    $: items,
    add(fn) {
      let promise;
      const tmp2 = undefined === promise || items.length < tmp;
      if (tmp2) {
        promise = fn();
        if (-1 === items.indexOf(promise)) {
          items.push(promise);
        }
        const nextPromise = promise.then(() => {
          const first = items.splice(items.indexOf(promise), 1)[0] || Promise.resolve(undefined);
          return first;
        });
        nextPromise.then(null, () => {
          const first = items.splice(items.indexOf(promise), 1)[0] || Promise.resolve(undefined);
          return first.then(null, () => {});
        });
        return promise;
      } else {
        const self = this;
        const self2 = this;
        const rejectedSyncPromise = closure_0(items[0]).rejectedSyncPromise;
        const sentryError = new closure_0(items[1]).SentryError("Not adding Promise because buffer limit was reached.");
        return rejectedSyncPromise(sentryError);
      }
    },
    drain(arg0) {
      let length;
      closure_0 = arg0;
      const syncPromise = new closure_0(items[0]).SyncPromise((fn, arg1) => {
        let closure_3;
        closure_0 = fn;
        let closure_1 = arg1;
        const arr = length;
        if (length.length) {
          const tmp = globalThis;
          const _setTimeout = setTimeout;
          let tmp2 = closure_0;
          const timeout = setTimeout(() => {
            const tmp2 = closure_0 && tmp > 0;
            if (tmp2) {
              closure_0(false);
            }
          }, closure_0);
          const item = arr.forEach((item) => {
            const obj = _mod12589;
            const resolvedSyncPromiseResult = obj.resolvedSyncPromise(item);
            resolvedSyncPromiseResult.then(() => {
              diff = diff - 1;
              if (!diff) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_1_3);
                fn(true);
              }
            }, closure_1);
          });
        } else {
          return fn(true);
        }
      });
      return syncPromise;
    },
  };
  return obj;
}
