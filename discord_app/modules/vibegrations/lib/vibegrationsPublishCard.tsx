// === Module 16560: vibegrationsPublishCard ===

// Module 16560 (vibegrationsPublishCard)
import _modDef3715 from "module_3715" /* 3715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishCard.tsx");

export const livePublishCardMessageId = function livePublishCardMessageId(arg0, arg1) {
  if ("unpublished" !== arg1) {
    return null;
  } else {
    let diff = arg0.length - 1;
    if (0 <= diff) {
      while (null == arg0[diff].publishCta) {
        diff = diff - 1;
      }
      return arg0[diff].id;
    }
    return null;
  }
};
export const publishNoticeMessage = function publishNoticeMessage(notice) {
  if (notice.update) {
    const surface = notice.surface;
    if ("bot" === surface) {
      return _modDef3715.ncJb2S;
    } else if ("widget" === surface) {
      return _modDef3715.gSpqdm;
    } else if ("automod" === surface) {
      return _modDef3715.M3cBMT;
    } else {
      return _modDef3715.tg9fgb;
    }
  } else {
    return _modDef3715.ogEl54;
  }
};
export const withLivePublishCard = function withLivePublishCard(stateFromStores1, stateFromStores2) {
  let id = null;
  if ("unpublished" === stateFromStores2) {
    let diff = stateFromStores1.length - 1;
    id = null;
    if (0 <= diff) {
      while (null == stateFromStores1[diff].publishCta) {
        diff = diff - 1;
        id = null;
      }
      id = stateFromStores1[diff].id;
    }
  }
  let mapped = stateFromStores1;
  if (!stateFromStores1.every((publishCta) => {
    let tmp = null == publishCta.publishCta;
    if (!tmp) {
      tmp = publishCta.id === id;
    }
    return tmp;
  })) {
    mapped = stateFromStores1.map((publishCta) => {
      let tmp = publishCta;
      if (null != publishCta.publishCta) {
        tmp = publishCta;
        if (publishCta.id !== id) {
          const obj = {};
          const merged = Object.assign(publishCta);
          obj.publishCta = null;
          tmp = obj;
        }
      }
      return tmp;
    });
  }
  return mapped;
};