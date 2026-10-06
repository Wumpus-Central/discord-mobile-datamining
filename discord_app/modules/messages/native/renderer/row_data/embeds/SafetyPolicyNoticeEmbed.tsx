// discord_app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../../Constants.tsx";
import intl5 from "../../../../../../intl/index.native.tsx";
import _modDef4467 from "../../../../../../../_runtime/metro/04467__.js";
import AssetRegistryDefault from "../../../../../../../_runtime/04810_AssetRegistry.js";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import SafetyHubConstants from "../../../../../safety_hub/SafetyHubConstants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubConstants.SafetyHubPolicyNoticeKeys;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx",
);

export const createSafetyPolicyNoticeEmbed = function createSafetyPolicyNoticeEmbed(message) {
  let diff;
  let eevFb6;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl4;
  let obj2;
  let obj3;
  let obj4;
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
        let parsed;
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
            parsed = parseFloat(found1.rawValue);
          }
        }
        if (null != rawValue) {
          if (null != parsed) {
            const obj = {
              titleText: intl.string(intl5.t["4CxGXi"]),
              titleIcon: obj2.getAssetUriForEmbed(Image.resolveAssetSource(AssetRegistryDefault)),
              subtitleText: formatToPlainString(eevFb6, obj3),
              descriptionText: intl3.string(intl5.t["5CLb0A"]),
              ctaText: intl4.string(intl5.t.zKnzwm),
              classificationId: rawValue,
            };
            intl = intl5.intl;
            obj2 = renderer_EmbedUtils;
            const intl2 = intl5.intl;
            formatToPlainString = intl2.formatToPlainString;
            obj3 = { daysAgo: diff(obj4.unix(parsed), "days") };
            eevFb6 = intl5.t.eevFb6;
            diff = _modDef4467().diff;
            _modDef4467();
            obj4 = _modDef4467;
            intl3 = intl5.intl;
            intl4 = intl5.intl;
            return obj;
          }
        }
      }
    }
  }
};
