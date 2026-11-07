// discord_app/modules/conjure/share/mintConjureShareLink.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _mintConjureShareLink(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.CONJURE_PROJECT_REMIX_TICKET(closure_0),
      body: { share_max_age },
      rejectWithError: true,
    };
    await HTTP.post(request);
    return value.body.ticket;
  })();
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/mintConjureShareLink.tsx");

export function mintConjureShareLink() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
