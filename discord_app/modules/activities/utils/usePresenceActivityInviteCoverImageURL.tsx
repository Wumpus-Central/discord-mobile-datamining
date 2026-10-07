// === Module 13097: usePresenceActivityInviteCoverImageURL ===

// Module 13097 (usePresenceActivityInviteCoverImageURL)
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1885 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7832 */;
import MessageActivityInviteCoverImageActionCreatorsAll from "MessageActivityInviteCoverImageActionCreators" /* 13099 */;
import noop from "module_19" /* 19 */;
import MessageActivityInviteCoverImageStore from "MessageActivityInviteCoverImageStore" /* 13098 */;

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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx");

export const usePresenceActivityInviteCoverImageURL = ReactCompilerGating.isReactCompilerEnabled() ? ((messageId) => {
  const cResult = messageId(cachedImageURL[5]).c(11);
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageActivityInviteCoverImageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === application) {
    if (cResult[2] === messageId) {
      if (cResult[3] === presenceActivity) {
        let tmp6 = cResult[4];
        let tmp7 = cResult[5];
      }
      const stateFromStoresObject = tmp(tmp2[6]).useStateFromStoresObject(first, tmp6, tmp7);
      cachedImageURL = stateFromStoresObject.cachedImageURL;
      const imageURL = stateFromStoresObject.imageURL;
      if (cResult[6] === cachedImageURL) {
        if (cResult[7] === imageURL) {
          if (cResult[8] === messageId) {
            let tmp9 = cResult[9];
            let tmp10 = cResult[10];
          }
          const effect = imageURL.useEffect(tmp9, tmp10);
          return imageURL;
        }
      }
      class L {
        constructor() {
          if (cachedImageURL !== imageURL) {
            tmp2 = closure_2;
            tmp3 = closure_3;
            obj = closure_2(closure_3[7]);
            obj1 = { messageId: null, coverImageURL: null };
            tmp4 = messageId;
            obj1.messageId = messageId;
            obj1.coverImageURL = tmp;
            setCoverImageURLResult = obj.setCoverImageURL(obj1);
          }
          return;
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
      const tmpResult = tmp(tmp2[6]);
    }
  }
  const fn = function v() {
    return _getPresenceActivityInviteCoverImageURL({ messageId, presenceActivity, application });
  };
  const items2 = [messageId, presenceActivity, application];
  cResult[1] = application;
  cResult[2] = messageId;
  cResult[3] = presenceActivity;
  cResult[4] = fn;
  cResult[5] = items2;
  tmp7 = items2;
  tmp6 = fn;
  let obj = messageId(cachedImageURL[5]);
  tmp = messageId;
  tmp2 = cachedImageURL;
}) : ((messageId) => {
  messageId = messageId.messageId;
  const presenceActivity = messageId.presenceActivity;
  const application = messageId.application;
  let cachedImageURL;
  const items = [MessageActivityInviteCoverImageStore];
  const items1 = [messageId, presenceActivity, application];
  const stateFromStoresObject = messageId(cachedImageURL[6]).useStateFromStoresObject(items, () => _getPresenceActivityInviteCoverImageURL({ messageId, presenceActivity, application }), items1);
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
});
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