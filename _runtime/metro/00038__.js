// _runtime/metro/00038__.js

export default function (arg0, str, arg2, arg3, arg4, arg5, arg6, arg7) {
  const tmp = arg0;
  if (!tmp) {
    let error;
    if (undefined === str) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
      );
    } else {
      const items = [arg2, arg3, arg4, arg5, arg6, arg7];
      let closure_1 = 0;
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error1 = new Error(
        str.replace(/%s/g, () => {
          closure_1 = tmp + 1;
          return items[+closure_1];
        }),
      );
      error = error1;
      error1.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
