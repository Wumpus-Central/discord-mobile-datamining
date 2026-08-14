// _runtime/08939_get_ColorPropType.js
import { colorPropType } from "08940_colorPropType.js";
import { emptyFunction } from "08942_emptyFunction.js";
import { emptyFunction } from "08953_emptyFunction.js";
import { 08943__ } from "metro/08943__.js";
import { 08944__ } from "metro/08944__.js";
import { 08954__ } from "metro/08954__.js";
import { 08955__ } from "metro/08955__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08943__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08954__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08955__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08944__, set: undefined });

export default obj;