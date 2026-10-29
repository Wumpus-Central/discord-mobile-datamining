// discord_app/modules/conversations/ConversationsUtils.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export function mapConversation(rawConversation) {
  const summary_map = rawConversation.summary_map;
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
            const obj = {
              title: _mod12.upperFirst(filter.title),
              brief_summary: filter.brief_summary,
              key_points: null,
            };
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
      const obj3 = {
        id: rawConversation.id,
        title: null,
        briefSummary: null,
        keyPoints: null,
        channelId: null,
        guildId: null,
        messageIds: null,
        userIds: null,
        startMessageId: null,
        endMessageId: null,
        messageCount: null,
        userCount: null,
        keywords: null,
        summaryMap: null,
        engagement: null,
        substance: null,
        dynamics: null,
      };
      ({ title: obj2.title, brief_summary } = tmp2);
      if (brief_summary == null) {
        brief_summary = null;
      }
      obj3.briefSummary = brief_summary;
      obj3.keyPoints = tmp2.key_points;
      ({
        channel_id: obj2.channelId,
        guild_id: obj2.guildId,
        message_ids: obj2.messageIds,
        user_ids: obj2.userIds,
        start_message_id: obj2.startMessageId,
        end_message_id: obj2.endMessageId,
        message_count: obj2.messageCount,
        user_count: obj2.userCount,
        keywords,
      } = rawConversation);
      if (keywords == null) {
        keywords = [];
      }
      obj3.keywords = keywords;
      let tmp5 = null;
      if (null != rawConversation.summary_map) {
        let obj = { entries: null };
        const entries1 = rawConversation.summary_map.entries;
        obj.entries = entries1.map((summaryType) => ({
          summaryType: summaryType.summary_type,
          contentJson: summaryType.content_json,
        }));
        tmp5 = obj;
      }
      obj3.summaryMap = tmp5;
      ({ engagement: obj2.engagement, substance: obj2.substance, dynamics: obj2.dynamics } = rawConversation);
      tmp4 = obj3;
    }
  }
  return tmp4;
}
