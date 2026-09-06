// _runtime/metro/07011__.js

export function throttle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function () {
    if (null == timeout) {
      const self = this;
      closure_0.apply(this, tmp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c2 = undefined;
      }, closure_1);
    }
  };
}
