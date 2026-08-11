// _runtime/08882_get_ColorPropType.js
import { colorPropType } from "08883_colorPropType.js";
import { emptyFunction } from "08885_emptyFunction.js";
import { emptyFunction } from "08896_emptyFunction.js";
import { 08886__ } from "metro/08886__.js";
import { 08887__ } from "metro/08887__.js";
import { 08897__ } from "metro/08897__.js";
import { 08898__ } from "metro/08898__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08886__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08897__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08898__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08887__, set: undefined });

export default obj;