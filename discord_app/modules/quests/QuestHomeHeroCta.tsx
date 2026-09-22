// === Module 11570: QuestHomeHeroCta ===

// Module 11570 (QuestHomeHeroCta)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

export const questHomeHeroCtaFromServer = function questHomeHeroCtaFromServer(cta) {
  const obj = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    const obj2 = { androidAppId: cta.android.android_app_id };
    tmp = obj2;
  }
  obj.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    const obj3 = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj3;
  }
  obj.ios = tmp2;
  return obj;
};