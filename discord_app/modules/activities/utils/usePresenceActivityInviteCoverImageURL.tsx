// === Module 12788: _getPresenceActivityInviteCoverImageURL ===

// Module 12788 (_getPresenceActivityInviteCoverImageURL)
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1896 */;
import updateAssets from "updateAssets" /* 7247 */;
import setCoverImageURLAll from "setCoverImageURL" /* 12790 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getCoverImageURL" /* 12789 */;

require = arg1;
function _getPresenceActivityInviteCoverImageURL(messageId) {
  ({ presenceActivity, application } = messageId);
  let obj = { messageId: messageId.messageId };
  coverImageURL = coverImageURL.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * getDevicePixelRatioDefault();
    obj = { cachedImageURL: null, imageURL: null };
    obj[0] = coverImageURL;
    let invite_cover_image;
    if (presenceActivity != null) {
      const assets = presenceActivity.assets;
      if (assets != null) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    let assetImage = null;
    if (null != invite_cover_image) {
      assetImage = updateAssets.getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
      const obj2 = updateAssets;
    }
    if (assetImage == null) {
      assetImage = coverImageURL;
    }
    if (assetImage == null) {
      assetImage = application.getCoverImageURL(result);
    }
    if (assetImage == null) {
      assetImage = null;
    }
    obj[1] = assetImage;
    return obj;
  }
}
let result = require("set").fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = (messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  let cachedImageURL;
  let imageURL;
  const items = [closure_5];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = messageId(cachedImageURL[4]).useStateFromStoresObject(items, () => closure_1_6({ messageId, presenceActivity, application }), items1);
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      let obj = application(cachedImageURL[5]);
      obj = { messageId: null, coverImageURL: null };
      obj[0] = messageId;
      obj[1] = tmp;
      obj.setCoverImageURL(obj);
    }
  }, items2);
  return imageURL;
};
export const getPresenceActivityInviteCoverImageURL = function getPresenceActivityInviteCoverImageURL(messageId) {
  messageId = messageId.messageId;
  let obj = { messageId, presenceActivity: messageId.presenceActivity, application: messageId.application };
  const tmp = _getPresenceActivityInviteCoverImageURL(obj);
  const imageURL = tmp.imageURL;
  if (tmp.cachedImageURL !== imageURL) {
    obj = { messageId: null, coverImageURL: null };
    obj[0] = messageId;
    obj[1] = imageURL;
    setCoverImageURLAll.setCoverImageURL(obj);
    const obj2 = setCoverImageURLAll;
  }
  return imageURL;
};