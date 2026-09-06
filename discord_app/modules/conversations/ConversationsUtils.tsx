// === Module 7599: ConversationsUtils ===

// Module 7599 (ConversationsUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export const mapConversation = function mapConversation(summary_map) {
  summary_map = summary_map.summary_map;
  let found;
  if (summary_map != null) {
    const entries = summary_map.entries;
    found = entries.find((summary_type) => "TOPIC_EXTRACTION_SUMMARY" === summary_type.summary_type);
  }
  let tmp2 = null;
  if (null != found) {
    tmp2 = (function parseTopicExtractionSummary(content_json) {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(content_json);
        let filter = parsed;
        let title;
        if (parsed != null) {
          title = parsed.title;
        }
        let tmp6 = null;
        if (typeof title === "string") {
          let brief_summary;
          if (filter != null) {
            brief_summary = filter.brief_summary;
          }
          tmp6 = null;
          if (typeof brief_summary === "string") {
            const obj = { title: _mod12.upperFirst(filter.title), brief_summary: filter.brief_summary, key_points: null };
            const _Array = Array;
            if (Array.isArray(filter.key_points)) {
              const key_points = filter.key_points;
              const mapped = key_points.map((text) => {
                text = undefined;
                if (text != null) {
                  text = text.text;
                }
                return text;
              });
              filter = mapped.filter;
              let found = filter((str) => typeof str === "string");
            } else {
              found = [];
            }
            obj.key_points = found;
          }
        }
        return tmp6;
      } catch (err) {
        return null;
      }
    })(found.content_json);
  }
  let title;
  if (tmp2 != null) {
    title = tmp2.title;
  }
  let tmp4 = null;
  if (null != title) {
    tmp4 = null;
    if ("" !== tmp2.title) {
      let obj = { id: summary_map.id, title: null, briefSummary: null, keyPoints: null, channelId: null, guildId: null, messageIds: null, userIds: null, startMessageId: null, endMessageId: null, messageCount: null, userCount: null, keywords: null, summaryMap: null, engagement: null, substance: null, dynamics: null, moderation: null };
      ({ title: obj3.title, brief_summary } = tmp2);
      if (brief_summary == null) {
        brief_summary = null;
      }
      obj.briefSummary = brief_summary;
      obj.keyPoints = tmp2.key_points;
      ({ channel_id: obj3.channelId, guild_id: obj3.guildId, message_ids: obj3.messageIds, user_ids: obj3.userIds, start_message_id: obj3.startMessageId, end_message_id: obj3.endMessageId, message_count: obj3.messageCount, user_count: obj3.userCount, keywords } = summary_map);
      if (keywords == null) {
        keywords = [];
      }
      obj.keywords = keywords;
      let tmp5 = null;
      if (null != summary_map.summary_map) {
        obj = { entries: null };
        const entries1 = summary_map.summary_map.entries;
        obj.entries = entries1.map((summaryType) => ({ summaryType: summaryType.summary_type, contentJson: summaryType.content_json }));
        tmp5 = obj;
      }
      obj.summaryMap = tmp5;
      ({ engagement: obj3.engagement, substance: obj3.substance, dynamics: obj3.dynamics } = summary_map);
      let tmp6 = null;
      if (null != summary_map.moderation) {
        const moderation = summary_map.moderation;
        obj = { status: null, statusReason: null, messageViolationRate: null, flaggedMessageCount: null, totalMessageCount: null, flaggedMessageIds: null, flaggedMessageDetails: null, flaggedSummaryDetails: null, flaggedTitle: null, flaggedSummary: null, flaggedKeyPoints: null, failedMessageIds: null };
        ({ status: obj2.status, status_reason: obj2.statusReason, message_violation_rate: obj2.messageViolationRate, flagged_message_count: obj2.flaggedMessageCount, total_message_count: obj2.totalMessageCount, flagged_message_ids: obj2.flaggedMessageIds, flagged_message_details } = moderation);
        obj.flaggedMessageDetails = flagged_message_details.map((messageId) => ({ messageId: messageId.message_id, category: messageId.category, severity: messageId.severity, confidence: messageId.confidence, reason: messageId.reason }));
        ({ flagged_summary_details: obj2.flaggedSummaryDetails, flagged_title: obj2.flaggedTitle, flagged_summary: obj2.flaggedSummary, flagged_key_points: obj2.flaggedKeyPoints, failed_message_ids: obj2.failedMessageIds } = moderation);
        tmp6 = obj;
      }
      obj.moderation = tmp6;
      tmp4 = obj;
    }
  }
  return tmp4;
};