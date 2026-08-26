// === Module 9091: get ColorPropType ===

// Module 9091 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(9092) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(9094) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(9095), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(9105) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(9106), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(9107), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(9096), set: undefined });

export default obj;