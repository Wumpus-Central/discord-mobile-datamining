// _runtime/08339_get_ColorPropType.js
import { colorPropType } from "08340_colorPropType.js";
import { emptyFunction } from "08342_emptyFunction.js";
import { emptyFunction } from "08353_emptyFunction.js";
import { 08343__ } from "metro/08343__.js";
import { 08344__ } from "metro/08344__.js";
import { 08354__ } from "metro/08354__.js";
import { 08355__ } from "metro/08355__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08343__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08354__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08355__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08344__, set: undefined });

export default obj;