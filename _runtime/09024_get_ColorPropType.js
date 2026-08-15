// _runtime/09024_get_ColorPropType.js
import { colorPropType } from "09025_colorPropType.js";
import { emptyFunction } from "09027_emptyFunction.js";
import { emptyFunction } from "09038_emptyFunction.js";
import { 09028__ } from "metro/09028__.js";
import { 09029__ } from "metro/09029__.js";
import { 09039__ } from "metro/09039__.js";
import { 09040__ } from "metro/09040__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 09028__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 09039__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 09040__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 09029__, set: undefined });

export default obj;