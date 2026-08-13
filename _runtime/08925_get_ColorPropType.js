// _runtime/08925_get_ColorPropType.js
import { colorPropType } from "08926_colorPropType.js";
import { emptyFunction } from "08928_emptyFunction.js";
import { emptyFunction } from "08939_emptyFunction.js";
import { 08929__ } from "metro/08929__.js";
import { 08930__ } from "metro/08930__.js";
import { 08940__ } from "metro/08940__.js";
import { 08941__ } from "metro/08941__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08929__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08940__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08941__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08930__, set: undefined });

export default obj;