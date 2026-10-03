// === Module 16592: FrameStackLevel ===

// Module 16592 (FrameStackLevel)
import size from "module_2" /* 2 */;

const obj = { Backstage: "backstage", WithinAppContent: "within-app-content", WithinCallContent: "within-call-content", AboveAppContent: "above-app-content" };
const result = size.fileFinishedImporting("modules/frames/FrameStackLevel.tsx");

export const FrameStackLevel = obj;
export const FRAME_STACK_LEVEL_PRIORITY = { [obj.Backstage]: -1, [obj.WithinAppContent]: 0, [obj.WithinCallContent]: 0, [obj.AboveAppContent]: 1 };