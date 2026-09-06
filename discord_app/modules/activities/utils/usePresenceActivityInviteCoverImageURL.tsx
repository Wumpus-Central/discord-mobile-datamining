// discord_app/modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx
import getDevicePixelRatioDefault from "../../../utils/getDevicePixelRatio.native.tsx";
import ApplicationAssetUtils from "../../../utils/ApplicationAssetUtils.tsx";
import MessageActivityInviteCoverImageActionCreatorsAll from "../MessageActivityInviteCoverImageActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MessageActivityInviteCoverImageStore from "../MessageActivityInviteCoverImageStore.tsx";

require = fn;
function _getPresenceActivityInviteCoverImageURL(messageId) {
  ({ presenceActivity, application } = messageId);
  let obj = { messageId: messageId.messageId };
  const coverImageURL = MessageActivityInviteCoverImageStore.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * getDevicePixelRatioDefault();
    obj = { cachedImageURL: coverImageURL, imageURL: null };
    let invite_cover_image;
    if (presenceActivity != null) {
      const assets = presenceActivity.assets;
      if (assets != null) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    let assetImage = null;
    if (null != invite_cover_image) {
      assetImage = ApplicationAssetUtils.getAssetImage(
        presenceActivity.application_id,
        presenceActivity.assets.invite_cover_image,
        result,
      );
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
    obj.imageURL = assetImage;
    return obj;
  }
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
  const stateFromStoresObject = messageId(cachedImageURL[4]).useStateFromStoresObject(
    items,
    () => _getPresenceActivityInviteCoverImageURL({ messageId, presenceActivity, application }),
    items1,
  );
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      const obj = { messageId, coverImageURL: tmp };
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
    obj = { messageId, coverImageURL: imageURL };
    MessageActivityInviteCoverImageActionCreatorsAll.setCoverImageURL(obj);
  }
  return imageURL;
};
