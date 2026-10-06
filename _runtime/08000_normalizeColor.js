// _runtime/08000_normalizeColor.js
import normalizeColor from "08001_normalizeColor.js";

function colorPropType(arg0, arg1, arg2, arg3, arg4, arg5) {
  let _Error1;
  let tmp = arg5;
  if (null == arg1[arg2]) {
    let _Error21;
    if (arg0) {
      const _Error2 = Error;
      const text = `Required ${arg4}`;
      if (!tmp) {
        tmp = arg2;
      }
      const self3 = this;
      const self4 = this;
      _Error21 = new _Error2(text + " `" + tmp + "` was not specified in `" + arg3 + "`.");
    }
    _Error1 = _Error21;
  } else if (typeof arg1[arg2] !== "number") {
    if (typeof arg1[arg2] === "string") {
      if (null === normalizeColor(arg1[arg2])) {
        let tmp5 = tmp;
        const _Error = Error;
        const text1 = `Invalid ${arg4}`;
        if (!tmp) {
          tmp5 = arg2;
        }
        const self = this;
        const self2 = this;
        _Error1 = new _Error(
          text1 +
            " `" +
            tmp5 +
            "` supplied to `" +
            arg3 +
            "`: " +
            tmp2 +
            "\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n",
        );
      }
    }
  }
  return _Error1;
}
const bindResult = colorPropType.bind(null, false);
bindResult.isRequired = colorPropType.bind(null, true);

export default bindResult;
