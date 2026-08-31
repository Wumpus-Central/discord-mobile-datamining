// _runtime/08375_get_ColorPropType.js
import { colorPropType } from "08376_colorPropType.js";
import { emptyFunction } from "08378_emptyFunction.js";
import { emptyFunction } from "08389_emptyFunction.js";
import { 08379__ } from "metro/08379__.js";
import { 08380__ } from "metro/08380__.js";
import { 08390__ } from "metro/08390__.js";
import { 08391__ } from "metro/08391__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08379__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08390__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08391__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08380__, set: undefined });

export default obj;