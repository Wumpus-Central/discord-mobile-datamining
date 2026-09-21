// === Module 13550: SafetySystemNotificationEmbed ===

// Module 13550 (SafetySystemNotificationEmbed)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef4348 from "module_4348" /* 4348 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8204 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8690 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

export const createSafetySystemNotificationEmbed = function createSafetySystemNotificationEmbed(message) {
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
                const tmp6Result3 = SafetyHubUtils;
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            const obj2 = { titleText: str, titleIcon: renderer_EmbedUtils.getAssetUriForEmbed(Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 8867 : 5247))), subtitleText: null, descriptionText: null, primaryCtaText: null, primaryCtaType: null, primaryCtaKey: null, secondaryCtaText: null, secondaryCtaType: null, secondaryCtaKey: null, footerTheme: null };
            const intl = util.intl;
            let num = parseMessageForPropsResult.timestamp;
            if (num == null) {
              num = 0;
            }
            const obj3 = { daysAgo: null };
            const tmp6Result4 = renderer_EmbedUtils;
            const obj7 = _modDef4348();
            obj3.daysAgo = obj7.diff(_modDef4348.unix(num), "days");
            obj2.subtitleText = intl.formatToPlainString(util.t.eevFb6, obj3);
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
};