// === Module 12345: conjureProjectLink ===

// Module 12345 (conjureProjectLink)
import size from "module_2" /* 2 */;

function parseConjureProjectLink(uRL) {
  if ("https:" !== uRL.protocol) {
    if ("http:" !== uRL.protocol) {
      return null;
    }
  }
  let replaced;
  if (uRL.host != null) {
    replaced = str2.toLowerCase().replace(/^www[.]/, "");
    const str3 = str2.toLowerCase();
  }
  if (null != replaced) {
    if (set.has(replaced)) {
      let match;
      if (uRL.pathname != null) {
        match = str5.match(re1);
      }
      let tmp5 = null;
      if (null != match) {
        const obj = { applicationId: match[1], ticket: null };
        let tmp6 = match[2];
        if (tmp6 == null) {
          tmp6 = null;
        }
        obj.ticket = tmp6;
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  return null;
}
const set = new Set(["conjure.town", "conjure.city"]);
const re1 = /^\/([0-9]{17,20})\/[a-z0-9-]{1,48}(?:\/([A-Za-z0-9_-]{16,200}\.[A-Za-z0-9_-]{16,64}))?\/?$/;
const result = size.fileFinishedImporting("modules/conjure/share/conjureProjectLink.tsx");

export { parseConjureProjectLink };
export function conjureProjectLinkCode(arg0, arg1) {
  let combined = arg0;
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/" + arg1;
  }
  return combined;
}
export function conjureProjectLinkTicket(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    let ticket;
    const tmp9 = parseConjureProjectLink(uRL);
    if (tmp9 != null) {
      ticket = tmp9.ticket;
    }
    if (ticket == null) {
      ticket = null;
    }
    return ticket;
  } catch (err) {
    return null;
  }
}
export function isConjureShareTicketExpired(arg0) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  try {
    const str2 = arg0.split(".", 1)[0];
    const _JSON = JSON;
    const _atob = atob;
    const exp = JSON.parse(atob(arg0.split(".", 1)[0].replace(/-/g, "+").replace(/_/g, "/"))).exp;
    let tmp6 = typeof exp === "number";
    if (typeof exp === "number") {
      tmp6 = 1000 * tmp5 <= timestamp;
    }
    return tmp6;
  } catch (err) {
    return false;
  }
}