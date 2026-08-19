// discord_app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../../Constants.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import tDefault from "../../../../../../../_runtime/03975_t.js";
import SafetyHubView from "../../../../../safety_hub/SafetyHubConstants.tsx";
import registerAssetDefault from "../../../../../../../_runtime/08079_registerAsset.js";
import frozen from "../../EmbedUtils.tsx";

const Image = get_ActivityIndicator.Image;
const MessageEmbedTypes = ME.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubView.SafetyHubPolicyNoticeKeys;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

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
          found = fields1.find((item, index) => item.rawName === constants.CLASSIFICATION_ID);
        }
        let rawValue;
        if (found != null) {
          rawValue = found.rawValue;
        }
        const fields2 = first2.fields;
        let found1;
        if (fields2 != null) {
          found1 = fields2.find((item, index) => item.rawName === constants.INCIDENT_TIMESTAMP);
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