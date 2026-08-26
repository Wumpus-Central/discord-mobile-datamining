// _runtime/09091_get_ColorPropType.js
import { colorPropType } from "09092_colorPropType.js";
import { emptyFunction } from "09094_emptyFunction.js";
import { emptyFunction } from "09105_emptyFunction.js";
import { 09095__ } from "metro/09095__.js";
import { 09096__ } from "metro/09096__.js";
import { 09106__ } from "metro/09106__.js";
import { 09107__ } from "metro/09107__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 09095__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 09106__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 09107__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 09096__, set: undefined });

export default obj;