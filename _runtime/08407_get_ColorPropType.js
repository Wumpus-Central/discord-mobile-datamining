// _runtime/08407_get_ColorPropType.js
import { colorPropType } from "08408_colorPropType.js";
import { emptyFunction } from "08410_emptyFunction.js";
import { emptyFunction } from "08421_emptyFunction.js";
import { 08411__ } from "metro/08411__.js";
import { 08412__ } from "metro/08412__.js";
import { 08422__ } from "metro/08422__.js";
import { 08423__ } from "metro/08423__.js";
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => colorPropType, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => 08411__, set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => emptyFunction, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => 08422__, set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => 08423__, set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => 08412__, set: undefined });

export default obj;