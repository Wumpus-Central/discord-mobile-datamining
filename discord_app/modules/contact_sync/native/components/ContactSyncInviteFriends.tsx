// === Module 12364: ContactSyncInviteFriends ===

// Module 12364 (ContactSyncInviteFriends)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import FastImageDefault from "FastImage" /* 5981 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import AssetRegistryDefault from "AssetRegistry" /* 12365 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, button: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_10 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let items1;
  let items2;
  let stateFromStores;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(26);
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
  let tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function x() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { friend_add_type: "Invite", source_page: metroRequire.CONTACT_SYNC_MODAL };
      obj.track(hasOwnProperty.FRIEND_ADD_VIEWED, obj2);
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      let str = "";
      const v6E9a1J = intl4.t["6E9a1J"];
      if (null != stateFromStores) {
        const tmpResult = UserUtilsDefault;
        str = tmpResult.getUserTag(tmp7);
      }
      const formatToPlainStringResult = formatToPlainString(v6E9a1J, { url: "https://discord.com/", username: str });
      const tmp5Result = showShareActionSheet;
      tmp5Result.showShareActionSheet({ message: formatToPlainStringResult }, metroRequire.CONTACT_SYNC_MODAL);
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
  }
  const container = tmp4.container;
  if (cResult[4] !== tmp4.art) {
    let obj2 = { style: tmp4.art, source: AssetRegistryDefault };
    const tmp13 = FastImageDefault;
    const tmp14 = closure_7(tmp13, obj2);
    cResult[4] = tmp4.art;
    cResult[5] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[5];
  }
  const title = tmp4.title;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(stateFromStores(1126).t.ZxBpLf);
    cResult[6] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp4.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = closure_7(stateFromStores(4892).Text, obj3);
    cResult[7] = tmp4.title;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(stateFromStores(1126).t["fXtCJ+"]);
    cResult[9] = stringResult1;
    tmp20 = stringResult1;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] !== tmp4.subtitle) {
    const obj4 = { style: subtitle, variant: "text-sm/medium", color: "text-default", children: tmp20 };
    const tmp24 = closure_7(stateFromStores(4892).Text, obj4);
    cResult[10] = tmp4.subtitle;
    cResult[11] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[11];
  }
  if (cResult[12] === tmp4.container) {
    if (cResult[13] === tmp22) {
      if (cResult[14] === tmp10) {
        let tmp25;
        let tmp27;
        let tmp29;
        if (cResult[15] === tmp17) {
          tmp25 = cResult[16];
        }
        const _Symbol = Symbol;
        const button = tmp4.button;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(stateFromStores(1126).t["6Qgrev"]);
          cResult[17] = stringResult2;
          tmp27 = stringResult2;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] !== tmp9) {
          const obj5 = { variant: "primary", size: "lg", text: tmp27, onPress: tmp9 };
          const tmp31 = closure_7(stateFromStores(5601).Button, obj5);
          cResult[18] = tmp9;
          cResult[19] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[19];
        }
        if (cResult[20] === tmp4.button) {
          let tmp32;
          if (cResult[21] === tmp29) {
            tmp32 = cResult[22];
          }
          if (cResult[23] === tmp25) {
            let tmp36;
            if (cResult[24] === tmp32) {
              tmp36 = cResult[25];
            }
            return tmp36;
          }
          const obj6 = { children: items1 };
          items1 = [tmp25, tmp32];
          const tmp39 = closure_8(closure_9, obj6);
          cResult[23] = tmp25;
          cResult[24] = tmp32;
          cResult[25] = tmp39;
          tmp36 = tmp39;
        }
        const obj7 = { style: button, children: tmp29 };
        const tmp35 = closure_7(View, obj7);
        cResult[20] = tmp4.button;
        cResult[21] = tmp29;
        cResult[22] = tmp35;
        tmp32 = tmp35;
      }
    }
  }
  const obj8 = { style: container, children: items2 };
  items2 = [tmp10, tmp17, tmp22];
  const tmp26 = closure_8(View, obj8);
  cResult[12] = tmp4.container;
  cResult[13] = tmp22;
  cResult[14] = tmp10;
  cResult[15] = tmp17;
  cResult[16] = tmp26;
  tmp25 = tmp26;
}) : (() => {
  let Button;
  let closure_0;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let obj8;
  const tmp = closure_10();
  let obj = require("get initialized");
  const items = [UserStore];
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = { children: items2 };
  const obj3 = { style: tmp.container, children: items1 };
  const obj4 = { style: tmp.art, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items1 = [closure_7(tmp2, obj4), , ];
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.ZxBpLf) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1[1] = closure_7(Text, obj5);
  const obj6 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t["fXtCJ+"]) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[2] = closure_7(Text2, obj6);
  items2 = [closure_8(View, obj3), ];
  const obj7 = { style: tmp.button, children: closure_7(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(require("intl").t["6Qgrev"]),
    onPress() {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { friend_add_type: "Invite", source_page: metroRequire.CONTACT_SYNC_MODAL };
      obj.track(hasOwnProperty.FRIEND_ADD_VIEWED, obj2);
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      let str = "";
      const v6E9a1J = intl4.t["6E9a1J"];
      if (null != closure_0) {
        const tmpResult = UserUtilsDefault;
        str = tmpResult.getUserTag(tmp7);
      }
      const formatToPlainStringResult = formatToPlainString(v6E9a1J, { url: "https://discord.com/", username: str });
      const tmp5Result = showShareActionSheet;
      tmp5Result.showShareActionSheet({ message: formatToPlainStringResult }, metroRequire.CONTACT_SYNC_MODAL);
    }
  };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items2[1] = closure_7(View, obj7);
  return closure_8(closure_9, obj2);
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default tmp5;