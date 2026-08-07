// _runtime/08816_get_ColorPropType.js
import { colorPropType } from "08817_colorPropType.js";
import { emptyFunction } from "08819_emptyFunction.js";
import { emptyFunction } from "08830_emptyFunction.js";
import { 08820__ } from "metro/08820__.js";
import { 08821__ } from "metro/08821__.js";
import { 08831__ } from "metro/08831__.js";
import { 08832__ } from "metro/08832__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08820__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08831__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08832__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08821__, set: undefined });

export default obj;