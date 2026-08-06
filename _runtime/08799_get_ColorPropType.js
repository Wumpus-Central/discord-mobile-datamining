// _runtime/08799_get_ColorPropType.js
import { colorPropType } from "08800_colorPropType.js";
import { emptyFunction } from "08802_emptyFunction.js";
import { emptyFunction } from "08813_emptyFunction.js";
import { 08803__ } from "metro/08803__.js";
import { 08804__ } from "metro/08804__.js";
import { 08814__ } from "metro/08814__.js";
import { 08815__ } from "metro/08815__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08803__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08814__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08815__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08804__, set: undefined });

export default obj;