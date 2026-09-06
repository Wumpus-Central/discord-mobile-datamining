// _runtime/08313_get_ColorPropType.js
import { colorPropType } from "08314_colorPropType.js";
import { emptyFunction } from "08316_emptyFunction.js";
import { emptyFunction } from "08327_emptyFunction.js";
import { 08317__ } from "metro/08317__.js";
import { 08318__ } from "metro/08318__.js";
import { 08328__ } from "metro/08328__.js";
import { 08329__ } from "metro/08329__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08317__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08328__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08329__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08318__, set: undefined });

export default obj;