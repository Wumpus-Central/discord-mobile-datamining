// === Module 12287: conjurePublishCard ===

// Module 12287 (conjurePublishCard)
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export const isPublishCardLive = function isPublishCardLive(reason, arg1) {
  let newUiUnpublished = arg1;
  if (null == arg1) {
    return tmp;
  } else if ("new_ui" === reason.reason) {
    newUiUnpublished = newUiUnpublished.newUiUnpublished;
    let tmp3 = true === newUiUnpublished;
  } else {
    tmp3 = "not_live" === newUiUnpublished.publishState;
  }
};
export const isConjurePublishCtaVisible = function isConjurePublishCtaVisible(publish, cta) {
  let tmp = null != publish;
  if (tmp) {
    let newUiUnpublished = publish.status;
    if (null == newUiUnpublished) {
      tmp = tmp2;
    } else if ("new_ui" === cta.reason) {
      newUiUnpublished = newUiUnpublished.newUiUnpublished;
      let tmp4 = true === newUiUnpublished;
    } else {
      tmp4 = "not_live" === newUiUnpublished.publishState;
    }
  }
  return tmp;
};
export const livePublishCardMessageId = function livePublishCardMessageId(arg0, arg1) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    const publishCta = arg0[diff].publishCta;
    while (null == publishCta) {
      diff = diff - 1;
    }
    let newUiUnpublished = arg1;
    if (null == arg1) {
      let id = null;
      if (tmp3) {
        id = arg0[diff].id;
      }
      return id;
    } else if ("new_ui" === publishCta.reason) {
      newUiUnpublished = newUiUnpublished.newUiUnpublished;
      let tmp4 = true === newUiUnpublished;
    } else {
      tmp4 = "not_live" === newUiUnpublished.publishState;
    }
  }
  return null;
};
export const publishNoticeMessage = function publishNoticeMessage(notice, arg1) {
  if (true === notice.commands_failed) {
    let prop = _modDef3830["PrQg+B"];
  } else if (true === notice.channel_skipped) {
    prop = _modDef3830.ev23Cw;
  } else if (notice.update) {
    prop = _modDef3830.gQzuLC;
  } else if (null == arg1) {
    prop = _modDef3830.MOrR29;
  } else {
    prop = _modDef3830["/npn7F"];
  }
  return prop;
};
export const withLivePublishCard = function withLivePublishCard(stateFromStores1, stateFromStores2) {
  let diff = stateFromStores1.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    const publishCta = stateFromStores1[diff].publishCta;
    while (null == publishCta) {
      diff = diff - 1;
      tmp2 = null;
    }
    let newUiUnpublished = stateFromStores2;
    if (null == stateFromStores2) {
      let id = null;
      if (tmp4) {
        id = stateFromStores1[diff].id;
      }
      tmp2 = id;
    } else if ("new_ui" === publishCta.reason) {
      newUiUnpublished = newUiUnpublished.newUiUnpublished;
      let tmp5 = true === newUiUnpublished;
    } else {
      tmp5 = "not_live" === newUiUnpublished.publishState;
    }
  }
  id = tmp2;
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