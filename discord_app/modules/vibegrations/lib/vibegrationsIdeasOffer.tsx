// discord_app/modules/vibegrations/lib/vibegrationsIdeasOffer.tsx
import useVibegrationsPublishActionDefault from "useVibegrationsPublishAction.tsx";
import vibegrationsPublishCard from "vibegrationsPublishCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const turnSettled = fn(12852).turnSettled;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsIdeasOffer.tsx");

export const IDEAS_OFFER_IDLE_DELAY_MS = 15000;
export const isIdeasOfferTurn = function isIdeasOfferTurn(kind) {
  let tmp = "plan_implemented" === kind.kind;
  if (tmp) {
    tmp = turnSettled(kind);
  }
  return tmp;
};
export const useVibegrationsIdeasOfferShown = function useVibegrationsIdeasOfferShown(projectId, kind, arg2) {
  let tmp = null;
  if (null != kind) {
    let tmp2 = "plan_implemented" === kind.kind;
    if (tmp2) {
      tmp2 = turnSettled(kind);
    }
    tmp = null;
    if (tmp2) {
      tmp = kind;
    }
  }
  let publishCta;
  if (tmp != null) {
    publishCta = tmp.publishCta;
  }
  let tmp7 = null;
  if (null != publishCta) {
    tmp7 = projectId;
  }
  let publishCta1;
  if (tmp != null) {
    publishCta1 = tmp.publishCta;
  }
  let result = null != publishCta1;
  if (result) {
    result = vibegrationsPublishCard.isVibegrationsPublishCtaVisible(tmp5Result);
  }
  let id = null;
  if (null != tmp) {
    id = null;
    if (!result) {
      id = null;
      if (!arg2) {
        id = tmp.id;
      }
    }
  }
  tmp5Result = useVibegrationsPublishActionDefault(tmp7);
  [tmp15, tmp16] = noop.useState(null);
  importDefault = tmp16;
  if (tmp17) {
    tmp16(null);
  }
  const items = [id];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _window = window;
      timeout = window.setTimeout(() => closure_1_1(closure_0), 15000);
      return () => window.clearTimeout(closure_0);
    }
  }, items);
  return null != id && tmp15 === id;
};
