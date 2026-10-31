// === Module 15150: SafetySystemNotificationEmbed ===

// Module 15150 (SafetySystemNotificationEmbed)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1072 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7969 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8396 */;
import SafetyWarningAgeUtils from "SafetyWarningAgeUtils" /* 15148 */;
import SafetyWarningAgeTextExperiment from "SafetyWarningAgeTextExperiment" /* 15149 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

export function createSafetySystemNotificationEmbed(message) {
  if (null != message) {
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
        if (type === MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
          const parseMessageForPropsResult = SafetyHubUtils.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                mapCtaToNativeDataResult = SafetyHubUtils.mapCtaToNativeData(parseMessageForPropsResult.ctas[0], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const tmp6Result = SafetyHubUtils;
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                mapCtaToNativeDataResult1 = SafetyHubUtils.mapCtaToNativeData(parseMessageForPropsResult.ctas[1], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const tmp6Result6 = SafetyHubUtils;
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            const obj2 = { titleText: str, titleIcon: renderer_EmbedUtils.getAssetUriForEmbed(Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 8027 : 8611))), subtitleText: null, descriptionText: null, primaryCtaText: null, primaryCtaType: null, primaryCtaKey: null, secondaryCtaText: null, secondaryCtaType: null, secondaryCtaKey: null, footerTheme: null };
            const tmp6Result7 = renderer_EmbedUtils;
            const tmp6Result8 = SafetyWarningAgeUtils;
            let num = parseMessageForPropsResult.timestamp;
            if (num == null) {
              num = 0;
            }
            const daysAgo = SafetyWarningAgeUtils.getDaysAgo(num);
            const tmp6Result9 = SafetyWarningAgeUtils;
            obj2.subtitleText = tmp6Result8.formatSafetyWarningAge(daysAgo, SafetyWarningAgeTextExperiment.getIsSafetyWarningAgeTextEnabled("safety_warning_system_message"));
            let str4 = parseMessageForPropsResult.body;
            if (str4 == null) {
              str4 = "";
            }
            obj2.descriptionText = str4;
            let text;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            obj2.primaryCtaText = text;
            let type1;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            obj2.primaryCtaType = type1;
            let key;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            obj2.primaryCtaKey = key;
            let text1;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            obj2.secondaryCtaText = text1;
            let type2;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            obj2.secondaryCtaType = type2;
            let key1;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            obj2.secondaryCtaKey = key1;
            obj2.footerTheme = parseMessageForPropsResult.theme;
            return obj2;
          }
        }
      }
    }
  }
}