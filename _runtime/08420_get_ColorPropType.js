// === Module 8420: get ColorPropType ===

// Module 8420 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8421) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8423) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8424), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8434) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8435), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8436), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8425), set: undefined });

export default obj;