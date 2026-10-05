// === Module 5351: trim ===

// Module 5351 (trim)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5338 */;
import ToString from "ToString" /* 5352 */;

let closure_2 = callBoundIntrinsic("String.prototype.replace");
const obj = /^\s$/;
const isMatch = obj.test("\u180E");
let closure_3 = isMatch ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
let closure_4 = isMatch ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

export default function trim() {
  const tmp = ToString;
  return closure_2(closure_2(tmp(RequireObjectCoercible(this)), closure_3, ""), closure_4, "");
};