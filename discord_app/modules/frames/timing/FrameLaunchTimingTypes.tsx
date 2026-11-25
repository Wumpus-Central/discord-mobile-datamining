// discord_app/modules/frames/timing/FrameLaunchTimingTypes.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/timing/FrameLaunchTimingTypes.tsx");

export const LaunchTrigger = {
  SIDEBAR_MOUSEDOWN: "sidebar_mousedown",
  NAVIGATION: "navigation",
  CONJURE_PREVIEW_PREFETCH: "conjure_preview_prefetch",
  LAUNCH_FRAME: "launch_frame",
};
export const LaunchStep = {
  PROXY_TICKET: "proxy_ticket",
  CSP: "csp",
  APPLICATION: "application",
  LAUNCH_STARTED: "launch_started",
  DISPATCHED: "frame_launch_dispatched",
  IFRAME_CREATED: "iframe_created",
  IFRAME_LOAD: "iframe_load",
  HANDSHAKE: "handshake",
  READY: "ready",
};
export const StepStatus = {
  OK: "ok",
  CACHED: "cached",
  SKIPPED: "skipped",
  PREFETCHED: "prefetched",
  IN_FLIGHT: "in_flight",
  FAILED: "failed",
  PENDING: "pending",
};
export const ResourceKind = { PROXY_TICKET: "proxy_ticket", PREWARM: "prewarm", CSP: "csp", IFRAME: "iframe" };
export const FrameLaunchOutcomeType = {
  READY: "ready",
  FAILED: "failed",
  TIMEOUT: "timeout",
  SUPERSEDED: "superseded",
  STOPPED: "stopped",
  REUSED: "reused",
  ABANDONED: "abandoned",
};
export const FrameLaunchCloseType = {
  SETTLED: "settled",
  CAPPED: "capped",
  FAILED: "failed",
  TIMEOUT: "timeout",
  SUPERSEDED: "superseded",
  STOPPED: "stopped",
  REUSED: "reused",
  ABANDONED: "abandoned",
};
export const PageLoadSource = { HOST: "host" };
