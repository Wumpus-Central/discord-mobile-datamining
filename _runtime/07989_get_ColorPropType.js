// === Module 7989: get ColorPropType ===

// Module 7989 (get ColorPropType)
const require = globalThis.__r;

const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require("normalizeColor"), set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require("module_7992"), set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require("module_7993"), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require("module_8003"), set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require("module_8004"), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require("module_8005"), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require("module_7994"), set: undefined });

export default obj;