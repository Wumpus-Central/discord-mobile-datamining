// === Module 17099: ParentalConsentConnectionScreen ===

// Module 17099 (ParentalConsentConnectionScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "freshTeenActivityWithMap" /* 5296 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_9 } from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = "https://support.discord.com/hc/articles/14155060633623";
createCacheKey = { body: null, cardSection: null, cardTitle: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_24, textAlign: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_24, textAlign: "center" };
let result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  const tmp = callback();
  let obj = onTaskComplete(str2[10]);
  onTaskComplete = obj.useOnTaskComplete();
  obj1 = onTaskComplete(str2[11]);
  let obj2 = onTaskComplete(str2[12]);
  const getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  getLinkCode(str2[13])(() => {
    onTaskComplete(str2[14]).clearWarning();
  });
  getLinkCode(str2[15])(getLinkCode);
  let component = obj1.useSafetyFlowTask().task.ui_component.component;
  if (component == null) {
    component = {};
  }
  let str = "";
  str2 = "";
  if (typeof component.link_code === "string") {
    str2 = component.link_code;
  }
  if (typeof component.link_code_expires_at === "string") {
    str = component.link_code_expires_at;
  }
  const arr = Array.isArray(component.pending_requests) ? component.pending_requests : [];
  let tmp2Result = tmp2(tmp3[16]);
  const pendingRequestCount = tmp2Result.usePendingRequestCount();
  tmp2Result = tmp2(tmp3[16]);
  const hasActiveParentLinks = tmp2Result.useHasActiveParentLinks();
  const items = [closure_7];
  const stateFromStores = onTaskComplete(str2[17]).useStateFromStores(items, () => authStore.getLinkedUsers());
  const tmp2Result1 = onTaskComplete(str2[17]);
  const items1 = [closure_7];
  const stateFromStores1 = onTaskComplete(str2[17]).useStateFromStores(items1, () => authStore.getAreLinkedUsersProcessed());
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
  const tmp2Result2 = onTaskComplete(str2[17]);
  [tmp16, tmp17] = stateFromStores4(React.useState(someResult), 2);
  if (someResult) {
    someResult = !tmp16;
  }
  if (someResult) {
    tmp17(true);
  }
  const tmp15 = stateFromStores4(React.useState(someResult), 2);
  const items2 = [closure_7];
  const stateFromStores2 = onTaskComplete(str2[17]).useStateFromStores(items2, () => authStore.getLinkCode());
  const tmp2Result3 = onTaskComplete(str2[17]);
  const items3 = [closure_7];
  const stateFromStores3 = onTaskComplete(str2[17]).useStateFromStores(items3, () => authStore.getLinkCodeExpiresAt());
  let tmp21 = stateFromStores2;
  if (stateFromStores2 == null) {
    tmp21 = str2;
  }
  str2 = tmp21;
  let parsed = stateFromStores3;
  if (stateFromStores3 == null) {
    const _Date = Date;
    parsed = Date.parse(str);
  }
  const tmp2Result4 = onTaskComplete(str2[17]);
  const items4 = [closure_8];
  stateFromStores4 = onTaskComplete(str2[17]).useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [stateFromStores4, tmp21];
  callback = obj9.useCallback(() => {
    let tmp2 = null != stateFromStores4;
    if (tmp2) {
      tmp2 = "" !== str2;
    }
    if (tmp2) {
      const result = onTaskComplete(str2[18]).shareGuardianConnectLink(stateFromStores4, str2);
      const obj = onTaskComplete(str2[18]);
    }
  }, items5);
  const tmp2Result5 = onTaskComplete(str2[17]);
  const derivedPendingRequests = onTaskComplete(str2[19]).useDerivedPendingRequests(arr, stateFromStores1);
  const tmp2Result6 = onTaskComplete(str2[19]);
  [tmp27, closure_5] = tmp14(obj9.useState(false), 2);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_0 = tmp4;
            closure_1_5(true);
            c3 = 2;
            obj1 = { type: null };
            obj1[0] = closure_1_0(closure_1_2[20]).TaskInputType.Empty;
            v0 = 3;
            c4 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = closure_1_0(obj1);
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          callback(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            obj1 = v0(closure_1_2[21]);
            const obj3 = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR", content: null };
            const intl = closure_1_0(closure_1_2[22]).intl;
            obj3[1] = intl.string(v0(closure_1_2[23])["+QRSxc"]);
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
    let obj = getLinkCode(str2[24]);
    obj = { linkCode: str2, expiresAt: parsed, onRefresh: getLinkCode, title: null, body: null };
    const intl = onTaskComplete(str2[22]).intl;
    obj[3] = intl.string(getLinkCode(str2[23]).dMMSA0);
    const intl2 = onTaskComplete(str2[22]).intl;
    obj = { link: closure_1_12 };
    obj[4] = intl2.format(getLinkCode(str2[23])["6GaRTu"], obj);
    obj.openLazy(onTaskComplete(str2[26])(str2[25], str2.paths), closure_1_9, obj);
  }, items7);
  obj = { title: null, subtitle: null, subtitleColor: "text-muted", submitting: null, footer: null, children: null };
  let tmp5Result = tmp5(tmp3[27]);
  let intl = tmp2(tmp3[22]).intl;
  obj[0] = intl.string(getLinkCode(str2[23]).dMMSA0);
  let intl2 = tmp2(tmp3[22]).intl;
  const format = intl2.format;
  tmp5Result = tmp5(tmp3[23]);
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
  obj2 = { spacing: tmp5(tmp3[9]).space.PX_16, children: null };
  const items8 = [closure_10(getLinkCode(str2[30]), {}), ];
  let tmp30Result = tmp16;
  if (tmp16) {
    let obj3 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl3 = tmp2(tmp3[22]).intl;
    obj3[1] = intl3.string(tmp5(tmp3[23]).OaHZUf);
    let tmp38 = !hasActiveParentLinks;
    if (hasActiveParentLinks) {
      tmp38 = tmp27;
    }
    obj3[2] = tmp38;
    obj3[3] = tmp27;
    obj3[4] = callback1;
    tmp30Result = tmp30(tmp2(tmp3[31]).ModalActionButton, obj3);
  }
  const tmp14Result = tmp14(obj9.useState(false), 2);
  items8[1] = tmp30Result;
  obj2[1] = items8;
  obj[4] = closure_10(onTaskComplete(str2[28]).ModalFooter, { children: closure_11(onTaskComplete(str2[29]).Stack, obj2) });
  const obj5 = { spacing: getLinkCode(str2[9]).space.PX_16, style: tmp.body, children: null };
  if (tmp16) {
    const obj6 = { pendingRequests: null, linkedUsersProcessed: null, expiresAt: null, onRefreshLinkCode: null, onShare: null, onInviteAnotherGuardian: null };
    obj6[0] = derivedPendingRequests;
    obj6[1] = stateFromStores1;
    obj6[2] = parsed;
    obj6[3] = getLinkCode;
    obj6[4] = callback;
    obj6[5] = callback2;
    tmp30Result = tmp30(tmp5(tmp3[32]), obj6);
  } else {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.cardSection;
    const obj8 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj8[0] = tmp.cardTitle;
    const intl4 = tmp2(tmp3[22]).intl;
    obj8[3] = intl4.string(tmp5(tmp3[34]).pojgfk);
    const items9 = [tmp30(tmp2(tmp3[33]).Text, obj8), ];
    obj9 = { shareActions: "full", linkCode: null, expiresAt: null, onRefresh: null };
    obj9[1] = tmp21;
    obj9[2] = parsed;
    obj9[3] = getLinkCode;
    items9[1] = tmp30(tmp2(tmp3[35]).ConnectGuardianCard, obj9);
    obj7[1] = items9;
    tmp30Result = tmp36(View, obj7);
  }
  obj5[2] = tmp30Result;
  obj[5] = closure_10(onTaskComplete(str2[29]).Stack, obj5);
  return closure_10(tmp5Result, obj);
};