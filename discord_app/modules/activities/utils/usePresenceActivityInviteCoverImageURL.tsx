// === Module 13078: usePresenceActivityInviteCoverImageURL ===

// Module 13078 (usePresenceActivityInviteCoverImageURL)
import react_nativeDefault from "react-native" /* 1885 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7821 */;
import MessageActivityInviteCoverImageActionCreatorsAll from "MessageActivityInviteCoverImageActionCreators" /* 13080 */;
import react from "react" /* 19 */;
import MessageActivityInviteCoverImageStore from "MessageActivityInviteCoverImageStore" /* 13079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function _getPresenceActivityInviteCoverImageURL(messageId) {
  let application;
  let assetImage;
  let presenceActivity;
  ({ presenceActivity, application } = messageId);
  const obj = { messageId: messageId.messageId };
  const coverImageURL = MessageActivityInviteCoverImageStore.getCoverImageURL(obj);
  if (null === coverImageURL) {
    return { cachedImageURL: null, imageURL: null };
  } else {
    const result = 600 * react_nativeDefault();
    let invite_cover_image;
    const obj3 = { cachedImageURL: coverImageURL, imageURL: assetImage };
    if (presenceActivity != null) {
      const assets = presenceActivity.assets;
      if (assets != null) {
        invite_cover_image = assets.invite_cover_image;
      }
    }
    assetImage = null;
    if (null != invite_cover_image) {
      const obj2 = ApplicationAssetUtils;
      assetImage = obj2.getAssetImage(presenceActivity.application_id, presenceActivity.assets.invite_cover_image, result);
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
    return obj3;
  }
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((messageId) => {
  let cachedImageURL;
  let first;
  const tmp = messageId;
  let obj = messageId(cachedImageURL[5]);
  const cResult = obj.c(11);
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  const tmp2 = cachedImageURL;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageActivityInviteCoverImageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === application) {
    if (cResult[2] === messageId) {
      let tmp6;
      let tmp7;
      if (cResult[3] === presenceActivity) {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
      }
      const tmpResult = tmp(tmp2[6]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
      cachedImageURL = stateFromStoresObject.cachedImageURL;
      const imageURL = stateFromStoresObject.imageURL;
      if (cResult[6] === cachedImageURL) {
        if (cResult[7] === imageURL) {
          let tmp9;
          let tmp10;
          if (cResult[8] === messageId) {
            tmp9 = cResult[9];
            tmp10 = cResult[10];
          }
          const effect = imageURL.useEffect(tmp9, tmp10);
          return imageURL;
        }
      }
      class L {
        constructor() {
          if (cachedImageURL !== imageURL) {
            const obj2 = { messageId, coverImageURL: tmp };
            const obj = MessageActivityInviteCoverImageActionCreatorsAll;
            obj.setCoverImageURL(obj2);
          }
        }
      }
      const items1 = [cachedImageURL, imageURL, messageId];
      cResult[6] = cachedImageURL;
      cResult[7] = imageURL;
      cResult[8] = messageId;
      cResult[9] = L;
      cResult[10] = items1;
      tmp10 = items1;
      tmp9 = L;
    }
  }
  const fn = function v() {
    const obj = { messageId, presenceActivity, application };
    return _getPresenceActivityInviteCoverImageURL(obj);
  };
  const items2 = [messageId, presenceActivity, application];
  cResult[1] = application;
  cResult[2] = messageId;
  cResult[3] = presenceActivity;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : ((messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  let cachedImageURL;
  let obj = messageId(cachedImageURL[6]);
  const items = [MessageActivityInviteCoverImageStore];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { messageId, presenceActivity, application };
    return _getPresenceActivityInviteCoverImageURL(obj);
  }, items1);
  cachedImageURL = stateFromStoresObject.cachedImageURL;
  const imageURL = stateFromStoresObject.imageURL;
  const items2 = [cachedImageURL, imageURL, messageId];
  const effect = imageURL.useEffect(() => {
    if (cachedImageURL !== imageURL) {
      const obj2 = { messageId, coverImageURL: tmp };
      const obj = MessageActivityInviteCoverImageActionCreatorsAll;
      obj.setCoverImageURL(obj2);
    }
  }, items2);
  return imageURL;
});
let result = size.fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = tmp2;
export const getPresenceActivityInviteCoverImageURL = function getPresenceActivityInviteCoverImageURL(messageId) {
  messageId = messageId.messageId;
  const obj = { messageId, presenceActivity: messageId.presenceActivity, application: messageId.application };
  const tmp = _getPresenceActivityInviteCoverImageURL(obj);
  const imageURL = tmp.imageURL;
  if (tmp.cachedImageURL !== imageURL) {
    const obj3 = { messageId, coverImageURL: imageURL };
    const obj2 = MessageActivityInviteCoverImageActionCreatorsAll;
    obj2.setCoverImageURL(obj3);
  }
  return imageURL;
};