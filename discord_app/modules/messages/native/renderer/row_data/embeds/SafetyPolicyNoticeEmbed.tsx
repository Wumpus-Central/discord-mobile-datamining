// === Module 12851: createSafetyPolicyNoticeEmbed ===

// Module 12851 (createSafetyPolicyNoticeEmbed)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3978 */;
import SafetyHubView from "SafetyHubView" /* 5443 */;
import registerAssetDefault from "registerAsset" /* 8118 */;
import frozen from "frozen" /* 8210 */;

const Image = get_ActivityIndicator.Image;
const MessageEmbedTypes = ME.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubView.SafetyHubPolicyNoticeKeys;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

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
            const intl = getSystemLocale.intl;
            obj[0] = intl.string(getSystemLocale.t["4CxGXi"]);
            obj[1] = frozen.getAssetUriForEmbed(Image.resolveAssetSource(registerAssetDefault));
            const intl2 = getSystemLocale.intl;
            obj = { daysAgo: null };
            const obj2 = frozen;
            const obj4 = tDefault();
            obj[0] = obj4.diff(tDefault.unix(parsed), "days");
            obj[2] = intl2.formatToPlainString(getSystemLocale.t.eevFb6, obj);
            const intl3 = getSystemLocale.intl;
            obj[3] = intl3.string(getSystemLocale.t["5CLb0A"]);
            const intl4 = getSystemLocale.intl;
            obj[4] = intl4.string(getSystemLocale.t.zKnzwm);
            obj[5] = rawValue;
            return obj;
          }
        }
      }
    }
  }
};