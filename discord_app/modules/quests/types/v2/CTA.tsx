// === Module 7717: CTA ===

// Module 7717 (CTA)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/types/v2/CTA.tsx");

export const questCtaConfigFromServer = function questCtaConfigFromServer(cta_config) {
  let tmp;
  if (null != cta_config.android) {
    let obj = { androidAppId: cta_config.android.android_app_id };
    tmp = obj;
  }
  obj = { android: tmp, ios: null, link: null, buttonLabel: null, subtitle: null };
  let tmp2;
  if (null != cta_config.ios) {
    obj = { iosAppId: cta_config.ios.ios_app_id };
    tmp2 = obj;
  }
  obj.ios = tmp2;
  ({ link: obj2.link, button_label: obj2.buttonLabel, subtitle: obj2.subtitle } = cta_config);
  return obj;
};