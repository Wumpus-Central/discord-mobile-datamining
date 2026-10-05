// === Module 7107: ConversationsUtils ===

// Module 7107 (ConversationsUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let text;

const result = size.fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export const mapConversation = function mapConversation(rawConversation) {
  let brief_summary;
  let entries1;
  let flagged_message_details;
  let keywords;
  let tmp5;
  let tmp6;
  function parseTopicExtractionSummary(content_json) {
    let found;
    let obj2;
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(content_json);
      let title;
      if (parsed != null) {
        title = parsed.title;
      }
      let tmp7 = null;
      if (typeof title === "string") {
        let brief_summary;
        if (parsed != null) {
          brief_summary = tmp4.brief_summary;
        }
        tmp7 = null;
        if (typeof brief_summary === "string") {
          const obj = { title: obj2.upperFirst(parsed.title), brief_summary: parsed.brief_summary, key_points: found };
          const _Array = Array;
          obj2 = _mod12;
          if (Array.isArray(parsed.key_points)) {
            const key_points = parsed.key_points;
            const mapped = key_points.map((text) => {
              text = undefined;
              if (text != null) {
                text = text.text;
              }
              return text;
            });
            found = mapped.filter((item) => typeof item === "string");
          } else {
            found = [];
          }
          tmp7 = obj;
        }
      }
      return tmp7;
    } catch (err) {
      return null;
    }
  }
  const summary_map = rawConversation.summary_map;
  let found;
  if (summary_map != null) {
    const entries = summary_map.entries;
    found = entries.find((summary_type) => "TOPIC_EXTRACTION_SUMMARY" === summary_type.summary_type);
  }
  let tmp2 = null;
  if (null != found) {
    tmp2 = parseTopicExtractionSummary(found.content_json);
  }
  let title;
  if (tmp2 != null) {
    title = tmp2.title;
  }
  let tmp4 = null;
  if (null != title) {
    tmp4 = null;
    if ("" !== tmp2.title) {
      const obj5 = { id: rawConversation.id, title: null, briefSummary: brief_summary, keyPoints: tmp2.key_points, channelId: null, guildId: null, messageIds: null, userIds: null, startMessageId: null, endMessageId: null, messageCount: null, userCount: null, keywords, summaryMap: tmp5, engagement: null, substance: null, dynamics: null, moderation: tmp6 };
      ({ title: obj3.title, brief_summary } = tmp2);
      if (brief_summary == null) {
        brief_summary = null;
      }
      ({ channel_id: obj3.channelId, guild_id: obj3.guildId, message_ids: obj3.messageIds, user_ids: obj3.userIds, start_message_id: obj3.startMessageId, end_message_id: obj3.endMessageId, message_count: obj3.messageCount, user_count: obj3.userCount, keywords } = rawConversation);
      if (keywords == null) {
        keywords = [];
      }
      tmp5 = null;
      if (null != rawConversation.summary_map) {
        let obj = { entries: entries1.map((summaryType) => ({ summaryType: summaryType.summary_type, contentJson: summaryType.content_json })) };
        entries1 = rawConversation.summary_map.entries;
        tmp5 = obj;
      }
      ({ engagement: obj3.engagement, substance: obj3.substance, dynamics: obj3.dynamics } = rawConversation);
      tmp6 = null;
      if (null != rawConversation.moderation) {
        const moderation = rawConversation.moderation;
        const obj6 = { status: null, statusReason: null, messageViolationRate: null, flaggedMessageCount: null, totalMessageCount: null, flaggedMessageIds: null, flaggedMessageDetails: flagged_message_details.map((messageId) => ({ messageId: messageId.message_id, category: messageId.category, severity: messageId.severity, confidence: messageId.confidence, reason: messageId.reason })), flaggedSummaryDetails: null, flaggedTitle: null, flaggedSummary: null, flaggedKeyPoints: null, failedMessageIds: null };
        ({ status: obj2.status, status_reason: obj2.statusReason, message_violation_rate: obj2.messageViolationRate, flagged_message_count: obj2.flaggedMessageCount, total_message_count: obj2.totalMessageCount, flagged_message_ids: obj2.flaggedMessageIds, flagged_message_details } = moderation);
        ({ flagged_summary_details: obj2.flaggedSummaryDetails, flagged_title: obj2.flaggedTitle, flagged_summary: obj2.flaggedSummary, flagged_key_points: obj2.flaggedKeyPoints, failed_message_ids: obj2.failedMessageIds } = moderation);
        tmp6 = obj6;
      }
      tmp4 = obj5;
    }
  }
  return tmp4;
};