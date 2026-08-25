// _runtime/09023_get_ColorPropType.js
import { colorPropType } from "09024_colorPropType.js";
import { emptyFunction } from "09026_emptyFunction.js";
import { emptyFunction } from "09037_emptyFunction.js";
import { 09027__ } from "metro/09027__.js";
import { 09028__ } from "metro/09028__.js";
import { 09038__ } from "metro/09038__.js";
import { 09039__ } from "metro/09039__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 09027__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 09038__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 09039__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 09028__, set: undefined });

export default obj;