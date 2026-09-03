// === Module 11164: questHomeHeroCtaFromServer ===

// Module 11164 (questHomeHeroCtaFromServer)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

export const questHomeHeroCtaFromServer = function questHomeHeroCtaFromServer(cta) {
  let obj = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    obj = { androidAppId: null };
    obj[0] = cta.android.android_app_id;
    tmp = obj;
  }
  obj[2] = tmp;
  let tmp2;
  if (null != cta.ios) {
    obj = { iosAppId: null };
    obj[0] = cta.ios.ios_app_id;
    tmp2 = obj;
  }
  obj[3] = tmp2;
  return obj;
};