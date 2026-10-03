// discord_app/modules/frames/FrameStackLevel.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  Backstage: "backstage",
  WithinAppContent: "within-app-content",
  WithinCallContent: "within-call-content",
  AboveAppContent: "above-app-content",
};
const result = size.fileFinishedImporting("modules/frames/FrameStackLevel.tsx");

export const FrameStackLevel = obj;
export const FRAME_STACK_LEVEL_PRIORITY = {
  [obj.Backstage]: -1,
  [obj.WithinAppContent]: 0,
  [obj.WithinCallContent]: 0,
  [obj.AboveAppContent]: 1,
};
