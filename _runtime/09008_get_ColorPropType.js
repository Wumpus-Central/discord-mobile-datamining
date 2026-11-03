// === Module 9008: get ColorPropType ===

// Module 9008 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("colorPropType"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_9011"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_9012"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_9022"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_9023"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_9024"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_9013"), set: undefined });

export default obj;