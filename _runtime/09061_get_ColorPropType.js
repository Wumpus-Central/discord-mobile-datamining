// _runtime/09061_get_ColorPropType.js
import { colorPropType } from "09062_colorPropType.js";
import { emptyFunction } from "09064_emptyFunction.js";
import { emptyFunction } from "09075_emptyFunction.js";
import { 09065__ } from "metro/09065__.js";
import { 09066__ } from "metro/09066__.js";
import { 09076__ } from "metro/09076__.js";
import { 09077__ } from "metro/09077__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 09065__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 09076__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 09077__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 09066__, set: undefined });

export default obj;