// _runtime/08420_get_ColorPropType.js
import { colorPropType } from "08421_colorPropType.js";
import { emptyFunction } from "08423_emptyFunction.js";
import { emptyFunction } from "08434_emptyFunction.js";
import { 08424__ } from "metro/08424__.js";
import { 08425__ } from "metro/08425__.js";
import { 08435__ } from "metro/08435__.js";
import { 08436__ } from "metro/08436__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08424__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08435__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08436__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08425__, set: undefined });

export default obj;