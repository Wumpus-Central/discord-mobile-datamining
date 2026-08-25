// === Module 9023: get ColorPropType ===

// Module 9023 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(9024) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(9026) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(9027), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(9037) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(9038), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(9039), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(9028), set: undefined });

export default obj;