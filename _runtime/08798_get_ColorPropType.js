// _runtime/08798_get_ColorPropType.js
import { colorPropType } from "08799_colorPropType.js";
import { emptyFunction } from "08801_emptyFunction.js";
import { emptyFunction } from "08812_emptyFunction.js";
import { 08802__ } from "metro/08802__.js";
import { 08803__ } from "metro/08803__.js";
import { 08813__ } from "metro/08813__.js";
import { 08814__ } from "metro/08814__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08802__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08813__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08814__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08803__, set: undefined });

export default obj;