// === Module 12379: ContactSyncInviteFriends ===

// Module 12379 (ContactSyncInviteFriends)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import FastImageDefault from "FastImage" /* 6163 */;
import showShareActionSheet from "showShareActionSheet" /* 8465 */;
import _modDef12380 from "module_12380" /* 12380 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, button: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncInviteFriends() {
  const cResult = stateFromStores(576).c(26);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    function handleInvitePress() {
      AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL });
      const intl = util.intl;
      let str = "";
      if (null != stateFromStores) {
        str = UserUtilsDefault.getUserTag(tmp6);
        const tmpResult = UserUtilsDefault;
      }
      const obj2 = { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL };
      const formatToPlainStringResult = intl.formatToPlainString(util.t["6E9a1J"], { url: "https://discord.com/", username: str });
      showShareActionSheet.showShareActionSheet({ message: formatToPlainStringResult }, constants2.CONTACT_SYNC_MODAL);
      const tmp5Result = showShareActionSheet;
    }
    cResult[2] = stateFromStores;
    cResult[3] = handleInvitePress;
    let tmp9 = handleInvitePress;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4.art) {
    let obj2 = { style: tmp4.art, source: _modDef12380 };
    const tmp14 = closure_7(FastImageDefault, obj2);
    cResult[4] = tmp4.art;
    cResult[5] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.ZxBpLf);
    cResult[6] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp4.title) {
    const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_7(tmp(5087).Text, obj3);
    cResult[7] = tmp4.title;
    cResult[8] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["fXtCJ+"]);
    cResult[9] = stringResult1;
    let tmp20 = stringResult1;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== tmp4.subtitle) {
    const obj4 = { style: tmp4.subtitle, variant: "text-sm/medium", color: "text-default", children: tmp20 };
    const tmp24 = closure_7(tmp(5087).Text, obj4);
    cResult[10] = tmp4.subtitle;
    cResult[11] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === tmp4.container) {
    if (cResult[13] === tmp22) {
      if (cResult[14] === tmp10) {
        if (cResult[15] === tmp17) {
          let tmp25 = cResult[16];
        }
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(tmp(1126).t["6Qgrev"]);
          cResult[17] = stringResult2;
          let tmp27 = stringResult2;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] !== tmp9) {
          const obj5 = { variant: "primary", size: "lg", text: tmp27, onPress: tmp9 };
          const tmp31 = closure_7(tmp(5376).Button, obj5);
          cResult[18] = tmp9;
          cResult[19] = tmp31;
          let tmp29 = tmp31;
        } else {
          tmp29 = cResult[19];
        }
        if (cResult[20] === tmp4.button) {
          if (cResult[21] === tmp29) {
            let tmp32 = cResult[22];
          }
          if (cResult[23] === tmp25) {
            if (cResult[24] === tmp32) {
              let tmp36 = cResult[25];
            }
            return tmp36;
          }
          const obj6 = { children: null };
          const items1 = [tmp25, tmp32];
          obj6.children = items1;
          const tmp39 = closure_8(closure_9, obj6);
          cResult[23] = tmp25;
          cResult[24] = tmp32;
          cResult[25] = tmp39;
          tmp36 = tmp39;
        }
        const obj7 = { style: tmp4.button, children: tmp29 };
        const tmp35 = closure_7(View, obj7);
        cResult[20] = tmp4.button;
        cResult[21] = tmp29;
        cResult[22] = tmp35;
        tmp32 = tmp35;
      }
    }
  }
  const obj8 = { style: tmp4.container, children: null };
  const items2 = [tmp10, tmp17, tmp22];
  obj8.children = items2;
  const tmp26 = closure_8(View, obj8);
  cResult[12] = tmp4.container;
  cResult[13] = tmp22;
  cResult[14] = tmp10;
  cResult[15] = tmp17;
  cResult[16] = tmp26;
  tmp25 = tmp26;
  let tmpResult = stateFromStores(504);
}) : (function ContactSyncInviteFriends() {
  const tmp = closure_10();
  const items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.art, source: null };
  let obj = require("initialize");
  obj4.source = _modDef12380;
  const items1 = [closure_7(FastImageDefault, obj4), , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = require("util").intl;
  obj5.children = intl.string(require("util").t.ZxBpLf);
  items1[1] = closure_7(require("Text/Text").Text, obj5);
  const obj6 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t["fXtCJ+"]);
  items1[2] = closure_7(require("Text/Text").Text, obj6);
  obj3.children = items1;
  const items2 = [closure_8(View, obj3), ];
  const obj7 = { style: tmp.button, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t["6Qgrev"]);
  obj8.onPress = function handleInvitePress() {
    AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL });
    const intl = util.intl;
    let str = "";
    if (null != closure_0) {
      str = UserUtilsDefault.getUserTag(tmp6);
      const tmpResult = UserUtilsDefault;
    }
    const obj2 = { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL };
    const formatToPlainStringResult = intl.formatToPlainString(util.t["6E9a1J"], { url: "https://discord.com/", username: str });
    showShareActionSheet.showShareActionSheet({ message: formatToPlainStringResult }, constants2.CONTACT_SYNC_MODAL);
    const tmp5Result = showShareActionSheet;
  };
  obj7.children = closure_7(require("components/Button/Button").Button, obj8);
  items2[1] = closure_7(View, obj7);
  obj2.children = items2;
  return closure_8(closure_9, obj2);
});