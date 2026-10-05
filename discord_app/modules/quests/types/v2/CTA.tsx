// === Module 7201: CTA ===

// Module 7201 (CTA)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/types/v2/CTA.tsx");

export const questCtaConfigFromServer = function questCtaConfigFromServer(cta_config) {
  let tmp2;
  let tmp;
  if (null != cta_config.android) {
    tmp = { androidAppId: cta_config.android.android_app_id };
    const obj = { androidAppId: cta_config.android.android_app_id };
  }
  const obj3 = { android: tmp, ios: tmp2, link: null, buttonLabel: null, subtitle: null };
  tmp2 = undefined;
  if (null != cta_config.ios) {
    tmp2 = { iosAppId: cta_config.ios.ios_app_id };
    const obj5 = { iosAppId: cta_config.ios.ios_app_id };
  }
  ({ link: obj2.link, button_label: obj2.buttonLabel, subtitle: obj2.subtitle } = cta_config);
  return obj3;
};