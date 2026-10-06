// === Module 8062: ValidationUtils ===

// Module 8062 (ValidationUtils)
import size from "module_2" /* 2 */;

const re0 = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
const re1 = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/;
const re2 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const re3 = /^(.*)#[0-9]{1,5}$/;
const re4 = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/;
let closure_5 = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"];
let closure_6 = ["discordtag", "everyone", "here", "discord nitro", "discord"];
const obj = {
  isEmail(query) {
    return re0.test(query);
  },
  isInvite(substr) {
    return re1.test(substr);
  },
  isPhoneNumber(query) {
    return re2.test(query);
  },
  isUserTagLike(query) {
    const match = re3.exec(query);
    if (null != match) {
      if (match.length > 1) {
        let closure_0 = tmp;
        const someResult = closure_5.some((item) => closure_0.includes(item));
        const tmp5 = !someResult && !closure_6.includes(match[1]);
        return tmp5;
      }
    }
    return false;
  },
  isDiscoveryLink(arg0) {
    return re4.test(arg0);
  }
};
const result = size.fileFinishedImporting("utils/ValidationUtils.tsx");

export default obj;