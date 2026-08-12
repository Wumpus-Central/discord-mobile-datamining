// _runtime/08921_get_ColorPropType.js
import { colorPropType } from "08922_colorPropType.js";
import { emptyFunction } from "08924_emptyFunction.js";
import { emptyFunction } from "08935_emptyFunction.js";
import { 08925__ } from "metro/08925__.js";
import { 08926__ } from "metro/08926__.js";
import { 08936__ } from "metro/08936__.js";
import { 08937__ } from "metro/08937__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08925__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08936__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08937__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08926__, set: undefined });

export default obj;