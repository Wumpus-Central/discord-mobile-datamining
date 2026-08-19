// === Module 5017: mapConversation ===

// Module 5017 (mapConversation)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export const mapConversation = function mapConversation(summary_map) {
  summary_map = summary_map.summary_map;
  let found;
  if (summary_map != null) {
    const entries = summary_map.entries;
    found = entries.find((item, index) => "TOPIC_EXTRACTION_SUMMARY" === item.summary_type);
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
            const obj = { title: null, brief_summary: null, key_points: null };
            obj[0] = callback(table[0]).upperFirst(filter.title);
            obj[1] = filter.brief_summary;
            const _Array = Array;
            if (Array.isArray(filter.key_points)) {
              const key_points = filter.key_points;
              const mapped = key_points.map((item, index) => {
                let text;
                if (item != null) {
                  text = item.text;
                }
                return text;
              });
              filter = mapped.filter;
              let found = filter((str) => typeof str === "string");
            } else {
              found = [];
            }
            obj[2] = found;
            const obj2 = callback(table[0]);
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
      let obj = { id: null, title: null, briefSummary: null, keyPoints: null, channelId: null, guildId: null, messageIds: null, userIds: null, startMessageId: null, endMessageId: null, messageCount: null, userCount: null, keywords: null, summaryMap: null, engagement: null, substance: null, dynamics: null, moderation: null };
      obj[0] = summary_map.id;
      ({ title: obj3[1], brief_summary } = tmp2);
      if (brief_summary == null) {
        brief_summary = null;
      }
      obj[2] = brief_summary;
      obj[3] = tmp2.key_points;
      ({ channel_id: obj3[4], guild_id: obj3[5], message_ids: obj3[6], user_ids: obj3[7], start_message_id: obj3[8], end_message_id: obj3[9], message_count: obj3[10], user_count: obj3[11], keywords } = summary_map);
      if (keywords == null) {
        keywords = [];
      }
      obj[12] = keywords;
      let tmp5 = null;
      if (null != summary_map.summary_map) {
        obj = { entries: null };
        const entries1 = summary_map.summary_map.entries;
        obj[0] = entries1.map((item, index) => ({ summaryType: item.summary_type, contentJson: item.content_json }));
        tmp5 = obj;
      }
      obj[13] = tmp5;
      ({ engagement: obj3[14], substance: obj3[15], dynamics: obj3[16] } = summary_map);
      let tmp6 = null;
      if (null != summary_map.moderation) {
        const moderation = summary_map.moderation;
        obj = { status: null, statusReason: null, messageViolationRate: null, flaggedMessageCount: null, totalMessageCount: null, flaggedMessageIds: null, flaggedMessageDetails: null, flaggedSummaryDetails: null, flaggedTitle: null, flaggedSummary: null, flaggedKeyPoints: null, failedMessageIds: null };
        ({ status: obj2[0], status_reason: obj2[1], message_violation_rate: obj2[2], flagged_message_count: obj2[3], total_message_count: obj2[4], flagged_message_ids: obj2[5], flagged_message_details } = moderation);
        obj[6] = flagged_message_details.map((item, index) => ({ messageId: item.message_id, category: item.category, severity: item.severity, confidence: item.confidence, reason: item.reason }));
        ({ flagged_summary_details: obj2[7], flagged_title: obj2[8], flagged_summary: obj2[9], flagged_key_points: obj2[10], failed_message_ids: obj2[11] } = moderation);
        tmp6 = obj;
      }
      obj[17] = tmp6;
      tmp4 = obj;
    }
  }
  return tmp4;
};