// discord_app/modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../../../Constants.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef4153 from "../../../../../../../_runtime/metro/04153__.js";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import SafetyHubUtils from "../../../../../safety_hub/SafetyHubUtils.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx",
);

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
          let obj = SafetyHubUtils;
          const parseMessageForPropsResult = obj.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                let tmp6Result = SafetyHubUtils;
                mapCtaToNativeDataResult = tmp6Result.mapCtaToNativeData(
                  parseMessageForPropsResult.ctas[0],
                  parseMessageForPropsResult.learn_more_link,
                  parseMessageForPropsResult.classification_id,
                );
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                tmp6Result = SafetyHubUtils;
                mapCtaToNativeDataResult1 = tmp6Result.mapCtaToNativeData(
                  parseMessageForPropsResult.ctas[1],
                  parseMessageForPropsResult.learn_more_link,
                  parseMessageForPropsResult.classification_id,
                );
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            obj = {
              titleText: str,
              titleIcon: renderer_EmbedUtils.getAssetUriForEmbed(
                Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 8589 : 5036)),
              ),
              subtitleText: null,
              descriptionText: null,
              primaryCtaText: null,
              primaryCtaType: null,
              primaryCtaKey: null,
              secondaryCtaText: null,
              secondaryCtaType: null,
              secondaryCtaKey: null,
              footerTheme: null,
            };
            const intl = util.intl;
            let num = parseMessageForPropsResult.timestamp;
            if (num == null) {
              num = 0;
            }
            obj = { daysAgo: null };
            const tmp6Result1 = renderer_EmbedUtils;
            const obj7 = _modDef4153();
            obj.daysAgo = obj7.diff(_modDef4153.unix(num), "days");
            obj.subtitleText = intl.formatToPlainString(util.t.eevFb6, obj);
            let str4 = parseMessageForPropsResult.body;
            if (str4 == null) {
              str4 = "";
            }
            obj.descriptionText = str4;
            let text;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            obj.primaryCtaText = text;
            let type1;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            obj.primaryCtaType = type1;
            let key;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            obj.primaryCtaKey = key;
            let text1;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            obj.secondaryCtaText = text1;
            let type2;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            obj.secondaryCtaType = type2;
            let key1;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            obj.secondaryCtaKey = key1;
            obj.footerTheme = parseMessageForPropsResult.theme;
            return obj;
          }
        }
      }
    }
  }
};
