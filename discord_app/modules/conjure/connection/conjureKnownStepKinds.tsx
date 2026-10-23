// discord_app/modules/conjure/connection/conjureKnownStepKinds.tsx
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = {
  app_build_request: true,
  app_profile_updated: true,
  assistant_delta: true,
  attachment: true,
  awaiting_user: true,
  build_error: true,
  clarification: true,
  collect_secrets: true,
  collect_settings: true,
  compaction: true,
  debug_compaction_declined: true,
  debug_compaction_report: true,
  deploying: true,
  error: true,
  force_compaction_result: true,
  healthcheck_deferred: true,
  healthcheck_failed: true,
  ideas: true,
  intake: true,
  node: true,
  patch_notes_draft: true,
  plan_proposed: true,
  preview_app_published: true,
  preview_ready: true,
  project_named: true,
  publish_approval_required: true,
  publish_cta: true,
  publish_options: true,
  publish_progress: true,
  publish_result: true,
  publish_schedule_proposal: true,
  publish_status: true,
  reply: true,
  restart_sandbox_result: true,
  reaction: true,
  restore_proposal: true,
  saving: true,
  segment_settled: true,
  terminal_error: true,
  thinking: true,
  thinking_lifecycle: true,
  todos: true,
  turn_result: true,
  usage: true,
};
const result = size.fileFinishedImporting("modules/conjure/connection/conjureKnownStepKinds.tsx");

export const isKnownStepKind = function isKnownStepKind(kind) {
  return Object.hasOwn(closure_0, kind);
};
