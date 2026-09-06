// _runtime/metro/12861__.js
import _mod12821 from "12821__.js";

require = arg1;
const dependencyMap = arg6;

export function makePromiseBuffer(bufferSize) {
  const items = [];
  return {
    $: items,
    add(fn) {
      let tmp2 = undefined === promise;
      if (!tmp2) {
        tmp2 = items.length < tmp;
      }
      if (tmp2) {
        promise = fn();
        let arr = items;
        if (-1 === items.indexOf(promise)) {
          arr = arr.push(promise);
        }
        promise
          .then(() => {
            let first = items.splice(items.indexOf(promise), 1)[0];
            if (!first) {
              first = Promise.resolve(undefined);
            }
            return first;
          })
          .then(null, () => {
            let first = items.splice(items.indexOf(promise), 1)[0];
            if (!first) {
              first = Promise.resolve(undefined);
            }
            return first.then(null, () => {});
          });
        return promise;
      } else {
        const sentryError = new bufferSize(items[1]).SentryError(
          "Not adding Promise because buffer limit was reached.",
        );
        return bufferSize(items[0]).rejectedSyncPromise(sentryError);
      }
    },
    drain(arg0) {
      bufferSize = arg0;
      return new bufferSize(items[0]).SyncPromise((fn, arg1) => {
        closure_0 = fn;
        closure_1 = arg1;
        length = length.length;
        if (length) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let tmp2 = closure_0;
            if (closure_0) {
              tmp2 = tmp > 0;
            }
            if (tmp2) {
              closure_0(false);
            }
          }, closure_0);
          const item = arr.forEach((item) => {
            _mod12821.resolvedSyncPromise(item).then(() => {
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
        arr = length;
      });
    },
  };
}
