// _runtime/07999_get_ColorPropType.js
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("metro/08002__.js"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("metro/08003__.js"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("metro/08013__.js"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("metro/08014__.js"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("metro/08015__.js"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("metro/08004__.js"), set: undefined });

export default obj;
