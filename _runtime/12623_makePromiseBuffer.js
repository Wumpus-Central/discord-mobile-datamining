// === Module 12623: makePromiseBuffer ===

// Module 12623 (makePromiseBuffer)
const require = arg1;
const dependencyMap = arg6;
arg5.makePromiseBuffer = function makePromiseBuffer(arg0) {
  closure_0 = arg0;
  const items = [];
  return {
    $: items,
    add(arg0) {
      let tmp2 = undefined === promise;
      if (!tmp2) {
        tmp2 = items.length < tmp;
      }
      if (tmp2) {
        promise = arg0();
        let arr = items;
        if (-1 === items.indexOf(promise)) {
          arr = arr.push(promise);
        }
        promise.then(() => {
          let first = closure_1_1.splice(closure_1_1.indexOf(promise), 1)[0];
          if (!first) {
            first = Promise.resolve(undefined);
          }
          return first;
        }).then(null, () => {
          let first = closure_1_1.splice(closure_1_1.indexOf(promise), 1)[0];
          if (!first) {
            first = Promise.resolve(undefined);
          }
          return first.then(null, () => {

          });
        });
        return promise;
      } else {
        const sentryError = new callback(items[1]).SentryError("Not adding Promise because buffer limit was reached.");
        return callback(items[0]).rejectedSyncPromise(sentryError);
      }
    },
    drain(arg0) {
      const callback = arg0;
      return new callback(items[0]).SyncPromise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        const length = closure_1_1.length;
        if (length) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            let tmp2 = callback;
            if (callback) {
              tmp2 = tmp > 0;
            }
            if (tmp2) {
              callback(false);
            }
          }, closure_0);
          const item = arr.forEach((arg0) => {
            const obj = callback(items[0]);
            callback(items[0]).resolvedSyncPromise(arg0).then(() => {
              const diff = closure_2 - 1;
              closure_2 = diff;
              if (!diff) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_3);
                callback(true);
              }
            }, closure_1);
          });
        } else {
          return arg0(true);
        }
        arr = closure_1_1;
      });
    }
  };
};