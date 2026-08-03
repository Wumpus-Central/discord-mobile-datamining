const result = require("set").fileFinishedImporting("modules/ads/BountyTypes.tsx");

export const bountyCtaFromServer = function bountyCtaFromServer(url) {
  let obj = { url: url.url, buttonLabel: url.button_label, android: null, ios: null };
  let tmp;
  if (null != url.android) {
    obj = { androidAppId: null };
    obj[0] = url.android.android_app_id;
    tmp = obj;
  }
  obj[2] = tmp;
  let tmp2;
  if (null != url.ios) {
    obj = { iosAppId: null };
    obj[0] = url.ios.ios_app_id;
    tmp2 = obj;
  }
  obj[3] = tmp2;
  return obj;
};
export const bountyFromServer = function bountyFromServer(creative_content) {
  let obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: null, videoPreview: null, imagePreview: null, videoHls: null, cta: null, rewardTimerSeconds: null };
  let obj1 = require(9490) /* resolveAsset */;
  obj[3] = obj1.resolveOptionalAdCreativeCdnUrl(creative_content.product_icon);
  obj[4] = require(9490) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  const obj3 = require(9490) /* resolveAsset */;
  obj[5] = require(9490) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  const obj4 = require(9490) /* resolveAsset */;
  obj[6] = require(9490) /* resolveAsset */.resolveAdCreativeCdnUrl(creative_content.video_hls);
  const cta = creative_content.cta;
  obj = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    obj = { androidAppId: null };
    obj[0] = cta.android.android_app_id;
    tmp = obj;
  }
  obj[2] = tmp;
  let tmp2;
  if (null != cta.ios) {
    obj1 = { iosAppId: null };
    obj1[0] = cta.ios.ios_app_id;
    tmp2 = obj1;
  }
  obj[3] = tmp2;
  obj[7] = obj;
  let num = creative_content.reward_timer_seconds;
  if (num == null) {
    num = 15;
  }
  obj[8] = num;
  return obj;
};