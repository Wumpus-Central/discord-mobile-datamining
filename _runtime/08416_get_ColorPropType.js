// _runtime/08416_get_ColorPropType.js
import { colorPropType } from "08417_colorPropType.js";
import { emptyFunction } from "08419_emptyFunction.js";
import { emptyFunction } from "08430_emptyFunction.js";
import { 08420__ } from "metro/08420__.js";
import { 08421__ } from "metro/08421__.js";
import { 08431__ } from "metro/08431__.js";
import { 08432__ } from "metro/08432__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08420__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08431__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08432__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08421__, set: undefined });

export default obj;