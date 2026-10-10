// === Module 17223: conjurePublishCard ===

// Module 17223 (conjurePublishCard)
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export const isConjurePublishCtaVisible = function isConjurePublishCtaVisible(publish) {
  let tmp = null != publish;
  if (tmp) {
    const status = publish.status;
    let state;
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
export const publishNoticeMessage = function publishNoticeMessage(notice, arg1) {
  if (true === notice.channel_skipped) {
    return _modDef3849.ev23Cw;
  } else if (notice.update) {
    const surface = notice.surface;
    if ("bot" === surface) {
      return _modDef3849.zfpeIL;
    } else if ("widget" === surface) {
      return _modDef3849.DxCfTh;
    } else if ("automod" === surface) {
      return _modDef3849["8ytGC3"];
    } else {
      return _modDef3849.WSmpBT;
    }
  } else {
    if (null == arg1) {
      let MOrR29 = _modDef3849.MOrR29;
    } else {
      MOrR29 = _modDef3849["/npn7F"];
    }
    return MOrR29;
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
      if (null != publishCta.publishCta) {
        if (publishCta.id !== id) {
          value = weakMap.get(publishCta);
          if (null == value) {
            const obj2 = {};
            const merged = Object.assign(publishCta);
            obj2.publishCta = null;
            const result = weakMap.set(publishCta, obj2);
            value = obj2;
          }
          return value;
        }
      }
      return publishCta;
    });
  }
  return mapped;
};