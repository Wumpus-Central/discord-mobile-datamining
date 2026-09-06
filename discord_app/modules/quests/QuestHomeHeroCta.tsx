// discord_app/modules/quests/QuestHomeHeroCta.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

export const questHomeHeroCtaFromServer = function questHomeHeroCtaFromServer(cta) {
  let obj = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    obj = { androidAppId: cta.android.android_app_id };
    tmp = obj;
  }
  obj.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    obj = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj;
  }
  obj.ios = tmp2;
  return obj;
};
