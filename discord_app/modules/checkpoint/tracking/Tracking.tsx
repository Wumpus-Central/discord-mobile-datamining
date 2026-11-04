// discord_app/modules/checkpoint/tracking/Tracking.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/tracking/Tracking.tsx");

export function trackCheckpoint2026CardClicked(authorId, channel) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { other_user_id: authorId };
  const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(channel));
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
  obj.track(AnalyticEvents.CHECKPOINT_2026_CARD_CLICKED, obj2);
}
export function trackCheckpoint2026Started(source) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { source };
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_STARTED, obj2);
}
export function trackCheckpoint2026StepViewed(step_name) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { step_name };
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_STEP_VIEWED, obj2);
}
export function trackCheckpoint2026Closed(stepName) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { step_name: stepName };
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_CLOSED, obj2);
}
export function trackCheckpoint2026Completed() {
  const obj2 = { step_name: null };
  const obj = AnalyticsUtilsDefault;
  obj2.step_name = CheckpointSessionAnalyticsManagerDefault.getStepName();
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_COMPLETED, obj2);
}
export function trackCheckpoint2026CharacterChoiceSelected(trait_type, option_id) {
  const obj2 = { trait_type, option_id, step_name: null };
  const obj = AnalyticsUtilsDefault;
  obj2.step_name = CheckpointSessionAnalyticsManagerDefault.getStepName();
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, obj2);
}
export function trackCheckpoint2026GiftCtaClicked(id) {
  const obj2 = { other_user_id: id, step_name: null };
  const obj = AnalyticsUtilsDefault;
  obj2.step_name = CheckpointSessionAnalyticsManagerDefault.getStepName();
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_GIFT_CTA_CLICKED, obj2);
}
export function trackCheckpoint2026SidekickMessageSent(other_user_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { other_user_id };
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT, obj2);
}
export function trackCheckpoint2026CardShared(checkpoint_card_type) {
  const obj2 = { checkpoint_card_type, step_name: null };
  const obj = AnalyticsUtilsDefault;
  obj2.step_name = CheckpointSessionAnalyticsManagerDefault.getStepName();
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_CARD_SHARED, obj2);
}
export function trackCheckpoint2026MuteToggled(isMuted) {
  const obj2 = { step_name: null, is_muted: null };
  const obj = AnalyticsUtilsDefault;
  obj2.step_name = CheckpointSessionAnalyticsManagerDefault.getStepName();
  obj2.is_muted = isMuted;
  const merged = Object.assign(CheckpointSessionAnalyticsManagerDefault.getAnalyticsProperties());
  obj.track(AnalyticEvents.CHECKPOINT_2026_MUTE_TOGGLED, obj2);
}
