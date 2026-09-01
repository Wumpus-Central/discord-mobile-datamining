// === Module 8407: get ColorPropType ===

// Module 8407 (get ColorPropType)
const obj = {};
Object.defineProperty(obj, "ColorPropType", { get: () => require(8408) /* colorPropType */, set: undefined });
Object.defineProperty(obj, "EdgeInsetsPropType", { get: () => require(8410) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "ImagePropTypes", { get: () => require(8411), set: undefined });
Object.defineProperty(obj, "PointPropType", { get: () => require(8421) /* emptyFunction */, set: undefined });
Object.defineProperty(obj, "TextInputPropTypes", { get: () => require(8422), set: undefined });
Object.defineProperty(obj, "TextPropTypes", { get: () => require(8423), set: undefined });
Object.defineProperty(obj, "ViewPropTypes", { get: () => require(8412), set: undefined });

export default obj;