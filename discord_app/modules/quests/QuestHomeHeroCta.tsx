// discord_app/modules/quests/QuestHomeHeroCta.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

export const questHomeHeroCtaFromServer = function questHomeHeroCtaFromServer(cta) {
  let tmp;
  let tmp2;
  const obj = { url: cta.url, buttonLabel: cta.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  if (null != cta.android) {
    tmp = { androidAppId: cta.android.android_app_id };
    const obj2 = { androidAppId: cta.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != cta.ios) {
    tmp2 = { iosAppId: cta.ios.ios_app_id };
    const obj3 = { iosAppId: cta.ios.ios_app_id };
  }
  return obj;
};
