// _runtime/metro/08329__.js
import colorPropType from "../08314_colorPropType.js";
import emptyFunction2 from "../08316_emptyFunction.js";
import _mod8330 from "08330__.js";
import flattenStyle from "../08319_flattenStyle.js";
import emptyFunction from "../04389_emptyFunction.js";

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
const module_8330 = flattenStyle(_mod8330);
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
obj[10] = module_8330;
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
