// _runtime/01106_growthbookIntegration.js
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.growthbookIntegration = (growthbookClass) => registerSpanErrorInstrumentation.growthbookIntegration({ growthbookClass: growthbookClass.growthbookClass });