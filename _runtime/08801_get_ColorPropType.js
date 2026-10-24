// === Module 8801: get ColorPropType ===

// Module 8801 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("colorPropType"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_8804"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_8805"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8815"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8816"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8817"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_8806"), set: undefined });

export default obj;