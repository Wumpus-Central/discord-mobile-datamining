// _runtime/08876_get_ColorPropType.js
import { colorPropType } from "08877_colorPropType.js";
import { emptyFunction } from "08879_emptyFunction.js";
import { emptyFunction } from "08890_emptyFunction.js";
import { 08880__ } from "metro/08880__.js";
import { 08881__ } from "metro/08881__.js";
import { 08891__ } from "metro/08891__.js";
import { 08892__ } from "metro/08892__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08880__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08891__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08892__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08881__, set: undefined });

export default obj;