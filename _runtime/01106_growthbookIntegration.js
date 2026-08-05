import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
// _runtime/01106_growthbookIntegration.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.growthbookIntegration = (growthbookClass) => registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.growthbookIntegration({ growthbookClass: growthbookClass.growthbookClass });