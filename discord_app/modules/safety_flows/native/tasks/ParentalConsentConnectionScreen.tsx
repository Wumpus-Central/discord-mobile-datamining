// === Module 16741: ParentalConsentConnectionScreen ===

// Module 16741 (ParentalConsentConnectionScreen)
import mergeGuildAvatar from "mergeGuildAvatar";
import PendingRequestRow from "PendingRequestRow";
import useDerivedPendingRequests from "useDerivedPendingRequests";
import { View } from "initialize";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import closure_8 from "mergeGuildAvatar";
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_9 } from "items";
import jsxProd from "dispatcher";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = "https://support.discord.com/hc/articles/14155060633623";
createCacheKey = { body: null, cardSection: null, cardTitle: null };
createCacheKey = { marginTop: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_24, textAlign: "center" };
let result = require("noop").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  let useDerivedPendingRequests;
  let tmp16;
  let tmp17;
  let tmp27;
  const tmp = createCacheKey();
  let obj = onTaskComplete(16732);
  onTaskComplete = obj.useOnTaskComplete();
  let obj1 = onTaskComplete(16731);
  let obj2 = onTaskComplete(11124);
  const getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  getLinkCode(4620)(() => {
    onTaskComplete(tmp21[14]).clearWarning();
  });
  getLinkCode(13930)(getLinkCode);
  let component = obj1.useSafetyFlowTask().task.ui_component.component;
  if (component == null) {
    component = {};
  }
  let str = "";
  let str2 = "";
  if (typeof component.link_code !== "__FORMATJS_LISTFORMAT_DATA__") {
    str2 = component.link_code;
  }
  if (typeof component.link_code_expires_at !== "__FORMATJS_LISTFORMAT_DATA__") {
    str = component.link_code_expires_at;
  }
  const arr = Array.isArray(component.pending_requests) ? component.pending_requests : [];
  let tmp2Result = tmp2(6258);
  const pendingRequestCount = tmp2Result.usePendingRequestCount();
  tmp2Result = tmp2(6258);
  const hasActiveParentLinks = tmp2Result.useHasActiveParentLinks();
  const items = [freshTeenActivityWithMap];
  const stateFromStores = onTaskComplete(589).useStateFromStores(items, () => authStore.getLinkedUsers());
  const tmp2Result1 = onTaskComplete(589);
  const items1 = [freshTeenActivityWithMap];
  const stateFromStores1 = onTaskComplete(589).useStateFromStores(items1, () => authStore.getAreLinkedUsersProcessed());
  if (stateFromStores1) {
    const _Object = Object;
    const values = Object.values(stateFromStores);
    let someResult = values.some((arg0) => null != arg0);
  } else {
    someResult = arr.length > 0;
  }
  let length = pendingRequestCount;
  if (!stateFromStores1) {
    length = arr.length;
  }
  let obj9 = React;
  const tmp14 = stateFromStores4;
  const tmp2Result2 = onTaskComplete(589);
  [tmp16, tmp17] = stateFromStores4(React.useState(someResult), 2);
  if (someResult) {
    someResult = !tmp16;
  }
  if (someResult) {
    tmp17(true);
  }
  const tmp15 = stateFromStores4(React.useState(someResult), 2);
  const items2 = [freshTeenActivityWithMap];
  const stateFromStores2 = onTaskComplete(589).useStateFromStores(items2, () => authStore.getLinkCode());
  const tmp2Result3 = onTaskComplete(589);
  const items3 = [freshTeenActivityWithMap];
  const stateFromStores3 = onTaskComplete(589).useStateFromStores(items3, () => authStore.getLinkCodeExpiresAt());
  let tmp21 = stateFromStores2;
  if (stateFromStores2 == null) {
    tmp21 = str2;
  }
  const dependencyMap = tmp21;
  let parsed = stateFromStores3;
  if (stateFromStores3 == null) {
    const _Date = Date;
    parsed = Date.parse(str);
  }
  const tmp2Result4 = onTaskComplete(589);
  const items4 = [closure_8];
  stateFromStores4 = onTaskComplete(589).useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [stateFromStores4, tmp21];
  const callback = obj9.useCallback(() => {
    let tmp2 = null != stateFromStores4;
    if (tmp2) {
      tmp2 = "" !== tmp21;
    }
    if (tmp2) {
      const result = onTaskComplete(tmp21[18]).shareGuardianConnectLink(stateFromStores4, tmp21);
      const obj = onTaskComplete(tmp21[18]);
    }
  }, items5);
  const tmp2Result5 = onTaskComplete(589);
  const derivedPendingRequests = onTaskComplete(16742).useDerivedPendingRequests(arr, stateFromStores1);
  const tmp2Result6 = onTaskComplete(16742);
  [tmp27, useDerivedPendingRequests] = tmp14(obj9.useState(false), 2);
  const items6 = [onTaskComplete];
  const items7 = [tmp21, parsed, getLinkCode];
  const callback1 = obj9.useCallback(parsed(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            outer1_5(true);
            let c3 = 2;
            let obj1 = { type: null };
            obj1[0] = outer1_0(outer1_2[20]).TaskInputType.Empty;
            v0 = 3;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_0(obj1);
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          callback(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = v0(outer1_2[21]);
            const obj3 = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR", content: null };
            const intl = outer1_0(outer1_2[22]).intl;
            obj3[1] = intl.string(v0(outer1_2[23])["+QRSxc"]);
            obj1.open(obj3);
            c3 = 0;
            callback(false);
            c4 = 3;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = 1;
          }
          c3 = 0;
          callback(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp33) {
        closure_2 = tmp33;
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp33;
        } else if (tmp2 === tmp35) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items6);
  const callback2 = obj9.useCallback(() => {
    let obj = getLinkCode(tmp21[24]);
    obj = { linkCode: tmp21, expiresAt: parsed, onRefresh: getLinkCode, title: null, body: null };
    const intl = onTaskComplete(tmp21[22]).intl;
    obj[3] = intl.string(getLinkCode(tmp21[23]).dMMSA0);
    const intl2 = onTaskComplete(tmp21[22]).intl;
    obj = { link: outer1_12 };
    obj[4] = intl2.format(getLinkCode(tmp21[23])["6GaRTu"], obj);
    obj.openLazy(onTaskComplete(tmp21[26])(tmp21[25], tmp21.paths), outer1_9, obj);
  }, items7);
  obj = { title: null, subtitle: null, subtitleColor: "text-muted", submitting: null, footer: null, children: null };
  let tmp5Result = tmp5(16735);
  let intl = tmp2(1236).intl;
  obj[0] = intl.string(getLinkCode(2487).dMMSA0);
  let intl2 = tmp2(1236).intl;
  const format = intl2.format;
  tmp5Result = tmp5(2487);
  if (tmp16) {
    obj = { pendingCount: null, link: null };
    obj[0] = length;
    obj[1] = c12;
    let formatResult = format(tmp5Result["Ke+kz5"], obj);
  } else {
    obj1 = { link: null };
    obj1[0] = c12;
    formatResult = format(tmp5Result["6GaRTu"], obj1);
  }
  obj[1] = formatResult;
  obj[3] = tmp27;
  obj2 = { spacing: null, children: null };
  obj2[0] = getLinkCode(712).space.PX_16;
  const items8 = [closure_10(getLinkCode(16743), {}), ];
  let tmp30Result = tmp16;
  if (tmp16) {
    let obj3 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj3[1] = intl3.string(tmp5(2487).OaHZUf);
    let tmp38 = !hasActiveParentLinks;
    if (hasActiveParentLinks) {
      tmp38 = tmp27;
    }
    obj3[2] = tmp38;
    obj3[3] = tmp27;
    obj3[4] = callback1;
    tmp30Result = tmp30(tmp2(9941).ModalActionButton, obj3);
  }
  const tmp14Result = tmp14(obj9.useState(false), 2);
  items8[1] = tmp30Result;
  obj2[1] = items8;
  obj[4] = closure_10(onTaskComplete(11134).ModalFooter, { children: closure_11(onTaskComplete(4602).Stack, obj2) });
  const obj5 = { spacing: null, style: null, children: null };
  obj5[0] = getLinkCode(712).space.PX_16;
  obj5[1] = tmp.body;
  if (tmp16) {
    const obj6 = { pendingRequests: null, linkedUsersProcessed: null, expiresAt: null, onRefreshLinkCode: null, onShare: null, onInviteAnotherGuardian: null };
    obj6[0] = derivedPendingRequests;
    obj6[1] = stateFromStores1;
    obj6[2] = parsed;
    obj6[3] = getLinkCode;
    obj6[4] = callback;
    obj6[5] = callback2;
    tmp30Result = tmp30(tmp5(16744), obj6);
  } else {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.cardSection;
    const obj8 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj8[0] = tmp.cardTitle;
    const intl4 = tmp2(1236).intl;
    obj8[3] = intl4.string(tmp5(2225).pojgfk);
    const items9 = [tmp30(tmp2(4189).Text, obj8), ];
    obj9 = { shareActions: "full", linkCode: null, expiresAt: null, onRefresh: null };
    obj9[1] = tmp21;
    obj9[2] = parsed;
    obj9[3] = getLinkCode;
    items9[1] = tmp30(tmp2(13931).ConnectGuardianCard, obj9);
    obj7[1] = items9;
    tmp30Result = tmp36(View, obj7);
  }
  obj5[2] = tmp30Result;
  obj[5] = closure_10(onTaskComplete(4602).Stack, obj5);
  return closure_10(tmp5Result, obj);
};