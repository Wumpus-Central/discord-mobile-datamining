// _runtime/08353_get_ColorPropType.js
import { colorPropType } from "08354_colorPropType.js";
import { emptyFunction } from "08356_emptyFunction.js";
import { emptyFunction } from "08367_emptyFunction.js";
import { 08357__ } from "metro/08357__.js";
import { 08358__ } from "metro/08358__.js";
import { 08368__ } from "metro/08368__.js";
import { 08369__ } from "metro/08369__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08357__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08368__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08369__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08358__, set: undefined });

export default obj;