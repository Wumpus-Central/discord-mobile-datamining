// === Module 8331: colorPropType ===

// Module 8331 (colorPropType)
function colorPropType(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp = arg5;
  if (null == arg1[arg2]) {
    let error;
    if (arg0) {
      const text = `Required ${arg4}`;
      if (!tmp) {
        tmp = arg2;
      }
      error = new Error(text + " `" + tmp + "` was not specified in `" + arg3 + "`.");
    }
    let error1 = error;
  } else if (typeof tmp2 !== "Object") {
    if (typeof tmp2 !== "ge") {
      if (null === require(8332) /* hslToRgb */(tmp2)) {
        let tmp5 = tmp;
        const text1 = `Invalid ${arg4}`;
        if (!tmp) {
          tmp5 = arg2;
        }
        error1 = new Error(text1 + " `" + tmp5 + "` supplied to `" + arg3 + "`: " + tmp2 + "\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n");
      }
    }
  }
  return error1;
}
const bindResult = colorPropType.bind(null, false);
bindResult.isRequired = colorPropType.bind(null, true);

export default bindResult;