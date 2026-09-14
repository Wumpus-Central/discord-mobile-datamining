// discord_app/modules/quests/QuestHomeHeroCta.tsx
import size from "../../../_runtime/metro/00002__.js";

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
