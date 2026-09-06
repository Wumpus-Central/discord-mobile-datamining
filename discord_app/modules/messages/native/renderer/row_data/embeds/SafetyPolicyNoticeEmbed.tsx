// discord_app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../../../Constants.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef4153 from "../../../../../../../_runtime/metro/04153__.js";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import SafetyHubConstants from "../../../../../safety_hub/SafetyHubConstants.tsx";
import _modDef8589 from "../../../../../../../_runtime/metro/08589__.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubConstants.SafetyHubPolicyNoticeKeys;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx",
);

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
            let obj = {
              titleText: null,
              titleIcon: null,
              subtitleText: null,
              descriptionText: null,
              ctaText: null,
              classificationId: null,
            };
            const intl = util.intl;
            obj.titleText = intl.string(util.t["4CxGXi"]);
            obj.titleIcon = renderer_EmbedUtils.getAssetUriForEmbed(Image.resolveAssetSource(_modDef8589));
            const intl2 = util.intl;
            obj = { daysAgo: null };
            const obj4 = _modDef4153();
            obj.daysAgo = obj4.diff(_modDef4153.unix(parsed), "days");
            obj.subtitleText = intl2.formatToPlainString(util.t.eevFb6, obj);
            const intl3 = util.intl;
            obj.descriptionText = intl3.string(util.t["5CLb0A"]);
            const intl4 = util.intl;
            obj.ctaText = intl4.string(util.t.zKnzwm);
            obj.classificationId = rawValue;
            return obj;
          }
        }
      }
    }
  }
};
