// === Module 9061: get ColorPropType ===

// Module 9061 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(9062) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(9064) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(9065), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(9075) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(9076), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(9077), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(9066), set: undefined });

export default obj;