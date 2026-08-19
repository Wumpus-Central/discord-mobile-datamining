// === Module 8781: obj132 ===

// Module 8781 (obj132)
import obj132 from "obj132" /* 2 */;

const re0 = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
const re1 = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/;
const re2 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const re3 = /^(.*)#[0-9]{1,5}$/;
const re4 = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/;
let closure_5 = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"];
let closure_6 = ["discordtag", "everyone", "here", "discord nitro", "discord"];
const result = obj132.fileFinishedImporting("utils/ValidationUtils.tsx");

export default {
  isEmail(closure_4) {
    return regex.test(closure_4);
  },
  isInvite(substr) {
    return regex2.test(substr);
  },
  isPhoneNumber(query) {
    return regex3.test(query);
  },
  isUserTagLike(query) {
    const match = regex4.exec(query);
    if (null != match) {
      if (match.length > 1) {
        closure_0 = tmp;
        const someResult = closure_5.some((item, index) => closure_0.includes(item));
        let tmp5 = !someResult;
        if (!someResult) {
          tmp5 = !closure_6.includes(tmp);
        }
        return tmp5;
      }
    }
    return false;
  },
  isDiscoveryLink(arg0) {
    return regex5.test(arg0);
  }
};