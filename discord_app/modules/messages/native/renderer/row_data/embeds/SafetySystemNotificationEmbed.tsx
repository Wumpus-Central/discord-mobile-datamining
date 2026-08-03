// === Module 12508: createSafetySystemNotificationEmbed ===

// Module 12508 (createSafetySystemNotificationEmbed)
import { Image } from "get ActivityIndicator";
import { MessageEmbedTypes } from "ME";

const result = require("t").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

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
          let obj = require(7715) /* parseMessageEmbedForProps */;
          const parseMessageForPropsResult = obj.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                let tmp6Result = tmp6(7715);
                mapCtaToNativeDataResult = tmp6Result.mapCtaToNativeData(parseMessageForPropsResult.ctas[0], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                tmp6Result = tmp6(7715);
                mapCtaToNativeDataResult1 = tmp6Result.mapCtaToNativeData(parseMessageForPropsResult.ctas[1], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            obj = { titleText: null, titleIcon: null, subtitleText: null, descriptionText: null, primaryCtaText: null, primaryCtaType: null, primaryCtaKey: null, secondaryCtaText: null, secondaryCtaType: null, secondaryCtaKey: null, footerTheme: null };
            obj[0] = str;
            obj[1] = tmp6(7853).getAssetUriForEmbed(Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 7761 : 4723)));
            const intl = tmp6(1236).intl;
            let num = parseMessageForPropsResult.timestamp;
            if (num == null) {
              num = 0;
            }
            obj = { daysAgo: null };
            const tmp6Result1 = tmp6(7853);
            const obj7 = importDefault(3837)();
            obj[0] = obj7.diff(importDefault(3837).unix(num), "days");
            obj[2] = intl.formatToPlainString(tmp6(1236).t.eevFb6, obj);
            let str4 = parseMessageForPropsResult.body;
            if (str4 == null) {
              str4 = "";
            }
            obj[3] = str4;
            let text;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            obj[4] = text;
            let type1;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            obj[5] = type1;
            let key;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            obj[6] = key;
            let text1;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            obj[7] = text1;
            let type2;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            obj[8] = type2;
            let key1;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            obj[9] = key1;
            obj[10] = parseMessageForPropsResult.theme;
            return obj;
          }
        }
      }
    }
  }
};