// === Module 8705: get ColorPropType ===

// Module 8705 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("colorPropType"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8708"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8709"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8719"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8720"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8721"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8710"), set: undefined });

export default obj;