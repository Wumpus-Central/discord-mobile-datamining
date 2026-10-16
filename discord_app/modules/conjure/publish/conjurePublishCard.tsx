// === Module 12048: conjurePublishCard ===

// Module 12048 (conjurePublishCard)
import _modDef3865 from "module_3865" /* 3865 */;
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
export const showsOutdatedNotice = function showsOutdatedNotice(isUpdate) {
  let tmp = null != isUpdate && isUpdate.isUpdate && null == isUpdate.disabledReason;
  if (tmp) {
    tmp = true !== isUpdate.publishing;
  }
  return tmp;
};
export const publishNoticeMessage = function publishNoticeMessage(notice, arg1) {
  if (true === notice.channel_skipped) {
    let ev23Cw = _modDef3865.ev23Cw;
  } else if (notice.update) {
    ev23Cw = _modDef3865.gQzuLC;
  } else if (null == arg1) {
    ev23Cw = _modDef3865.MOrR29;
  } else {
    ev23Cw = _modDef3865["/npn7F"];
  }
  return ev23Cw;
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