// discord_app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
import { Image } from "get ActivityIndicator";
import { MessageEmbedTypes } from "ME";
import { SafetyHubPolicyNoticeKeys } from "SafetyHubView";

const result = require("SafetyHubView").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

export const createSafetyPolicyNoticeEmbed = function createSafetyPolicyNoticeEmbed(message) {
  if (null != message.embeds) {
    const first = message.embeds[0];
    let fields;
    if (first != null) {
      fields = first.fields;
    }
    if (null != fields) {
      const first1 = message.embeds[0];
      let type;
      if (first1 != null) {
        type = first1.type;
      }
      if (type === MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
        const first2 = message.embeds[0];
        const fields1 = first2.fields;
        let found;
        if (fields1 != null) {
          found = fields1.find((rawName) => rawName.rawName === constants.CLASSIFICATION_ID);
        }
        let rawValue;
        if (found != null) {
          rawValue = found.rawValue;
        }
        const fields2 = first2.fields;
        let found1;
        if (fields2 != null) {
          found1 = fields2.find((rawName) => rawName.rawName === constants.INCIDENT_TIMESTAMP);
        }
        if (null != found1) {
          if (null != found1.rawValue) {
            const _parseFloat = parseFloat;
            const parsed = parseFloat(found1.rawValue);
          }
        }
        if (null != rawValue) {
          if (null != parsed) {
            let obj = { titleText: null, titleIcon: null, subtitleText: null, descriptionText: null, ctaText: null, classificationId: null };
            const intl = require(1236) /* getSystemLocale */.intl;
            obj[0] = intl.string(require(1236) /* getSystemLocale */.t["4CxGXi"]);
            obj[1] = require(7734) /* frozen */.getAssetUriForEmbed(Image.resolveAssetSource(importDefault(7635)));
            const intl2 = require(1236) /* getSystemLocale */.intl;
            obj = { daysAgo: null };
            const obj2 = require(7734) /* frozen */;
            const obj4 = importDefault(3775)();
            obj[0] = obj4.diff(importDefault(3775).unix(parsed), "days");
            obj[2] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.eevFb6, obj);
            const intl3 = require(1236) /* getSystemLocale */.intl;
            obj[3] = intl3.string(require(1236) /* getSystemLocale */.t["5CLb0A"]);
            const intl4 = require(1236) /* getSystemLocale */.intl;
            obj[4] = intl4.string(require(1236) /* getSystemLocale */.t.zKnzwm);
            obj[5] = rawValue;
            return obj;
          }
        }
      }
    }
  }
};