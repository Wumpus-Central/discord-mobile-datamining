// _runtime/metro/08436__.js
import colorPropType from "../08421_colorPropType.js";
import emptyFunction2 from "../08423_emptyFunction.js";
import _mod8437 from "08437__.js";
import flattenStyle from "../08426_flattenStyle.js";
import emptyFunction from "../04307_emptyFunction.js";

const obj = {
  ellipsizeMode: null,
  numberOfLines: null,
  textBreakStrategy: null,
  onLayout: null,
  onPress: null,
  onLongPress: null,
  pressRetentionOffset: null,
  selectable: null,
  selectionColor: null,
  suppressHighlighting: null,
  style: null,
  testID: null,
  nativeID: null,
  allowFontScaling: null,
  maxFontSizeMultiplier: null,
  accessible: null,
  adjustsFontSizeToFit: null,
  minimumFontScale: null,
  disabled: null,
  dataDetectorType: null,
};
const module_8437 = flattenStyle(_mod8437);
obj[0] = emptyFunction.oneOf(["head", "middle", "tail", "clip"]);
obj[1] = emptyFunction.number;
obj[2] = emptyFunction.oneOf(["simple", "highQuality", "balanced"]);
obj[3] = emptyFunction.func;
obj[4] = emptyFunction.func;
obj[5] = emptyFunction.func;
obj[6] = emptyFunction2;
obj[7] = emptyFunction.bool;
obj[8] = colorPropType;
obj[9] = emptyFunction.bool;
obj[10] = module_8437;
obj[11] = emptyFunction.string;
obj[12] = emptyFunction.string;
obj[13] = emptyFunction.bool;
obj[14] = emptyFunction.number;
obj[15] = emptyFunction.bool;
obj[16] = emptyFunction.bool;
obj[17] = emptyFunction.number;
obj[18] = emptyFunction.bool;
obj[19] = emptyFunction.oneOf(["phoneNumber", "link", "email", "none", "all"]);

export default obj;
