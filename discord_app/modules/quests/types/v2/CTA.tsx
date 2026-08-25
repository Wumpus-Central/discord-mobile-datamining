// === Module 7319: questCtaConfigFromServer ===

// Module 7319 (questCtaConfigFromServer)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/quests/types/v2/CTA.tsx");

export const questCtaConfigFromServer = function questCtaConfigFromServer(cta_config) {
  let tmp;
  if (null != cta_config.android) {
    let obj = { androidAppId: null };
    obj[0] = cta_config.android.android_app_id;
    tmp = obj;
  }
  obj = { android: tmp, ios: null, link: null, buttonLabel: null, subtitle: null };
  let tmp2;
  if (null != cta_config.ios) {
    obj = { iosAppId: null };
    obj[0] = cta_config.ios.ios_app_id;
    tmp2 = obj;
  }
  obj[1] = tmp2;
  ({ link: obj2[2], button_label: obj2[3], subtitle: obj2[4] } = cta_config);
  return obj;
};