// === Module 16724: conjurePublishCard ===

// Module 16724 (conjurePublishCard)
import _modDef3753 from "module_3753" /* 3753 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export const isConjurePublishCtaVisible = function isConjurePublishCtaVisible(publish) {
  let tmp = null != publish;
  if (tmp) {
    const status = publish.status;
    state = undefined;
    if (status != null) {
      state = status.state;
    }
    tmp = "unpublished" === state;
  }
  return tmp;
};
export const publishCardServerName = function publishCardServerName(name) {
  let combined = name;
  const arr = Array.from(name);
  if (arr.length > 24) {
    const substr = arr.slice(0, 23);
    const joined = substr.join("");
    const _HermesInternal = HermesInternal;
    combined = "" + joined.trimEnd() + "\u2026";
  }
  return combined;
};
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
export const showsOutdatedNotice = function showsOutdatedNotice(publish) {
  let tmp = null != publish && publish.isUpdate && null == publish.disabledReason;
  if (tmp) {
    tmp = true !== publish.publishing;
  }
  return tmp;
};
export const publishNoticeMessage = function publishNoticeMessage(notice) {
  if (notice.update) {
    const surface = notice.surface;
    if ("bot" === surface) {
      return _modDef3753.zfpeIL;
    } else if ("widget" === surface) {
      return _modDef3753.DxCfTh;
    } else if ("automod" === surface) {
      return _modDef3753["8ytGC3"];
    } else {
      return _modDef3753.WSmpBT;
    }
  } else {
    return _modDef3753.MOrR29;
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