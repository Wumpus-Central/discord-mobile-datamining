// === Module 12576: conjurePublishCard ===

// Module 12576 (conjurePublishCard)
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

const weakMap = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishCard.tsx");

export function isPublishCardLive(reason, arg1) {
  let newUiUnpublished = arg1;
  if (null == arg1) {
    return tmp;
  } else if ("new_ui" === reason.reason) {
    newUiUnpublished = newUiUnpublished.newUiUnpublished;
    let tmp3 = true === newUiUnpublished;
  } else {
    tmp3 = "not_live" === newUiUnpublished.publishState;
  }
}
export function isConjurePublishCtaVisible(publish, cta) {
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
}
export function livePublishCardMessageId(arg0, arg1) {
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
}
export function publishNoticeMessage(notice, name, automod) {
  if (true === notice.commands_failed) {
  } else if (true === notice.channel_skipped) {
  } else {
    const tmp4 = _modDef3868;
    if (!notice.update) {
      if (automod) {
        let KORRGl = tmp4.KORRGl;
      } else {
        KORRGl = tmp ? tmp4["/npn7F"] : tmp4.MOrR29;
      }
      return KORRGl;
    }
  }
}
export function withLivePublishCard(stateFromStores1, stateFromStores2) {
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
}