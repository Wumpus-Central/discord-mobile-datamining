// discord_app/modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../../Constants.tsx";
import intl2 from "../../../../../../intl/index.native.tsx";
import _modDef4467 from "../../../../../../../_runtime/metro/04467__.js";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import SafetyHubUtils from "../../../../../safety_hub/SafetyHubUtils.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx",
);

export const createSafetySystemNotificationEmbed = function createSafetySystemNotificationEmbed(message) {
  let diff;
  let eevFb6;
  let formatToPlainString;
  let key;
  let key1;
  let obj3;
  let str4;
  let text;
  let text1;
  let tmp14Result;
  let tmp6Result4;
  let type1;
  let type2;
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
          const obj = SafetyHubUtils;
          const parseMessageForPropsResult = obj.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                const tmp6Result = SafetyHubUtils;
                mapCtaToNativeDataResult = tmp6Result.mapCtaToNativeData(
                  parseMessageForPropsResult.ctas[0],
                  parseMessageForPropsResult.learn_more_link,
                  parseMessageForPropsResult.classification_id,
                );
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                const tmp6Result3 = SafetyHubUtils;
                mapCtaToNativeDataResult1 = tmp6Result3.mapCtaToNativeData(
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
            const obj2 = {
              titleText: str,
              titleIcon: tmp6Result4.getAssetUriForEmbed(
                Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 4810 : 5827)),
              ),
              subtitleText: formatToPlainString(eevFb6, obj3),
              descriptionText: str4,
              primaryCtaText: text,
              primaryCtaType: type1,
              primaryCtaKey: key,
              secondaryCtaText: text1,
              secondaryCtaType: type2,
              secondaryCtaKey: key1,
              footerTheme: parseMessageForPropsResult.theme,
            };
            tmp6Result4 = renderer_EmbedUtils;
            const intl = intl2.intl;
            formatToPlainString = intl.formatToPlainString;
            let num = parseMessageForPropsResult.timestamp;
            eevFb6 = intl2.t.eevFb6;
            if (num == null) {
              num = 0;
            }
            obj3 = { daysAgo: diff(tmp14Result.unix(num), "days") };
            diff = _modDef4467().diff;
            _modDef4467();
            str4 = parseMessageForPropsResult.body;
            tmp14Result = _modDef4467;
            if (str4 == null) {
              str4 = "";
            }
            text = undefined;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            type1 = undefined;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            key = undefined;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            text1 = undefined;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            type2 = undefined;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            key1 = undefined;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            return obj2;
          }
        }
      }
    }
  }
};
