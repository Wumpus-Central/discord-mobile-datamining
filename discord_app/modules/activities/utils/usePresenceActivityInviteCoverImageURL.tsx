// === Module 13392: usePresenceActivityInviteCoverImageURL ===

// Module 13392 (usePresenceActivityInviteCoverImageURL)
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1879 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8287 */;
import MessageActivityInviteCoverImageActionCreatorsAll from "MessageActivityInviteCoverImageActionCreators" /* 13394 */;
import noop from "module_19" /* 19 */;
import MessageActivityInviteCoverImageStore from "MessageActivityInviteCoverImageStore" /* 13393 */;

require = fn;
function _getPresenceActivityInviteCoverImageURL(messageId) {
  ({ presenceActivity, application } = messageId);
  const coverImageURL = MessageActivityInviteCoverImageStore.getCoverImageURL({ messageId: messageId.messageId });
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * getDevicePixelRatioDefault();
    const obj3 = { cachedImageURL: coverImageURL, imageURL: null };
    let invite_cover_image;
    if (presenceActivity != null) {
      const assets = presenceActivity.assets;
      if (assets != null) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    let assetImage = null;
    if (null != invite_cover_image) {
      assetImage = ApplicationAssetUtils.getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
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
    obj3.imageURL = assetImage;
    return obj3;
  }
  const obj = { messageId: messageId.messageId };
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = (messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  let cachedImageURL;
  const items = [MessageActivityInviteCoverImageStore];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = messageId(cachedImageURL[4]).useStateFromStoresObject(items, () => _getPresenceActivityInviteCoverImageURL({ messageId, presenceActivity, application }), items1);
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      const obj2 = { messageId, coverImageURL: tmp };
      MessageActivityInviteCoverImageActionCreatorsAll.setCoverImageURL(obj2);
    }
  }, items2);
  return imageURL;
};
export const getPresenceActivityInviteCoverImageURL = function getPresenceActivityInviteCoverImageURL(messageId) {
  messageId = messageId.messageId;
  const tmp = _getPresenceActivityInviteCoverImageURL({ messageId, presenceActivity: messageId.presenceActivity, application: messageId.application });
  const imageURL = tmp.imageURL;
  if (tmp.cachedImageURL !== imageURL) {
    const obj3 = { messageId, coverImageURL: imageURL };
    MessageActivityInviteCoverImageActionCreatorsAll.setCoverImageURL(obj3);
  }
  return imageURL;
};