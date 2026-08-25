// === Module 6060: compareChannelsByScoreAndPosition ===

// Module 6060 (compareChannelsByScoreAndPosition)
import closure_0 from "ensureGuildLoaded" /* 1391 */;
import { ChannelTypes } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/channel_text_area/compareChannelsByScoreAndPosition.tsx");

export default function compareChannelsByScoreAndPosition(score, score2) {
  if (score.score !== score2.score) {
    return score2.score - score.score;
  } else {
    let record = score.record;
    if (null == record.parent_id) {
      if (record.type === ChannelTypes.GUILD_CATEGORY) {
        record = record.position + 1;
        let position = 1000 * record;
      } else {
        position = record.position;
      }
    } else {
      const channel = store.getChannel(record.parent_id);
      let num;
      if (channel != null) {
        num = channel.position;
      }
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      const sum1 = 1000 * sum + record.position;
      if (record.isGuildVocal()) {
        let sum2 = sum1 + 500;
      } else {
        sum2 = sum1;
      }
      let record2 = score2.record;
      if (null == record2.parent_id) {
        if (record2.type === ChannelTypes.GUILD_CATEGORY) {
          record2 = record2.position + 1;
          let position2 = 1000 * record2;
        } else {
          position2 = record2.position;
        }
      } else {
        const channel1 = store.getChannel(record2.parent_id);
        let num7;
        if (channel1 != null) {
          num7 = channel1.position;
        }
        if (num7 == null) {
          num7 = 0;
        }
        const sum3 = num7 + 1;
        const sum4 = 1000 * sum3 + record2.position;
        if (record2.isGuildVocal()) {
          let sum5 = sum4 + 500;
        } else {
          sum5 = sum4;
        }
        if (sum2 !== sum5) {
          return sum2 - sum5;
        } else {
          let str = score.sortable;
          if (str == null) {
            const comparator = score.comparator;
            let toLocaleLowerCaseResult;
            if (comparator != null) {
              toLocaleLowerCaseResult = comparator.toLocaleLowerCase();
            }
            str = toLocaleLowerCaseResult;
          }
          if (str == null) {
            str = "";
          }
          let str2 = score.sortable;
          if (str2 == null) {
            const comparator2 = score2.comparator;
            let toLocaleLowerCaseResult1;
            if (comparator2 != null) {
              toLocaleLowerCaseResult1 = comparator2.toLocaleLowerCase();
            }
            str2 = toLocaleLowerCaseResult1;
          }
          if (str2 == null) {
            str2 = "";
          }
          let num13 = -1;
          if (str >= str2) {
            let num14 = 0;
            if (str > str2) {
              num14 = 1;
            }
            num13 = num14;
          }
          return num13;
        }
      }
    }
  }
};