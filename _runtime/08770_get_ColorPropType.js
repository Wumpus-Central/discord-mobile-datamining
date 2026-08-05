// _runtime/08770_get_ColorPropType.js
import { colorPropType } from "08771_colorPropType.js";
import { emptyFunction } from "08773_emptyFunction.js";
import { emptyFunction } from "08784_emptyFunction.js";
import { 08774__ } from "metro/08774__.js";
import { 08775__ } from "metro/08775__.js";
import { 08785__ } from "metro/08785__.js";
import { 08786__ } from "metro/08786__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08774__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08785__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08786__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08775__, set: undefined });

export default obj;