// discord_app/modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef2690 from "../../SafetyFlows.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import shareGuardianConnectLink from "../../../parent_tools/native/shareGuardianConnectLink.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_9 = fn(7538).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = "https://support.discord.com/hc/articles/14155060633623";
fn(4560);
let createStyles = { body: null, cardSection: null, cardTitle: null };
createStyles = { marginTop: nativeDefault.space.PX_24 };
createStyles.body = createStyles;
createStyles.cardSection = { alignItems: "center" };
createStyles.cardTitle = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_24,
  textAlign: "center",
};
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  const tmp = closure_13();
  let obj = onTaskComplete(str2[10]);
  onTaskComplete = obj.useOnTaskComplete();
  let obj1 = onTaskComplete(str2[11]);
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
  const items = [FamilyCenterStore];
  const stateFromStores = onTaskComplete(str2[17]).useStateFromStores(items, () => authStore.getLinkedUsers());
  const tmp2Result1 = onTaskComplete(str2[17]);
  const items1 = [FamilyCenterStore];
  const stateFromStores1 = onTaskComplete(str2[17]).useStateFromStores(items1, () =>
    authStore.getAreLinkedUsersProcessed(),
  );
  if (stateFromStores1) {
    const _Object = Object;
    const values = Object.values(stateFromStores);
    let someResult = values.some((item) => null != item);
  } else {
    someResult = arr.length > 0;
  }
  let length = pendingRequestCount;
  if (!stateFromStores1) {
    length = arr.length;
  }
  let obj9 = noop;
  const tmp14 = stateFromStores4;
  const tmp2Result2 = onTaskComplete(str2[17]);
  [tmp16, tmp17] = stateFromStores4(noop.useState(someResult), 2);
  if (someResult) {
    someResult = !tmp16;
  }
  if (someResult) {
    tmp17(true);
  }
  const tmp15 = stateFromStores4(noop.useState(someResult), 2);
  const items2 = [FamilyCenterStore];
  const stateFromStores2 = onTaskComplete(str2[17]).useStateFromStores(items2, () => authStore.getLinkCode());
  const tmp2Result3 = onTaskComplete(str2[17]);
  const items3 = [FamilyCenterStore];
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
  const items4 = [UserStore];
  stateFromStores4 = onTaskComplete(str2[17]).useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [stateFromStores4, tmp21];
  const callback = obj9.useCallback(() => {
    let tmp2 = null != stateFromStores4;
    if (tmp2) {
      tmp2 = "" !== str2;
    }
    if (tmp2) {
      const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores4, str2);
    }
  }, items5);
  const tmp2Result5 = onTaskComplete(str2[17]);
  const derivedPendingRequests = onTaskComplete(str2[19]).useDerivedPendingRequests(arr, stateFromStores1);
  const tmp2Result6 = onTaskComplete(str2[19]);
  [tmp27, noop] = tmp14(obj9.useState(false), 2);
  const items6 = [onTaskComplete];
  const items7 = [tmp21, parsed, getLinkCode];
  const callback1 = obj9.useCallback(
    parsed(function* (arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              noop(true);
              c3 = 2;
              let obj1 = { type: tmp4(tmp33[20]).TaskInputType.Empty };
              v3 = 3;
              c4 = 1;
              const obj2 = { value: onTaskComplete(obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5(false);
            throw tmp33;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              obj1 = v3(tmp33[21]);
              const obj3 = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR", content: null };
              const intl = tmp4(tmp33[22]).intl;
              obj3.content = intl.string(v3(tmp33[23])["+QRSxc"]);
              obj1.open(obj3);
              c3 = 0;
              closure_128_5(false);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c3 = 1;
            }
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp33) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp33;
          } else if (tmp2 === tmp35) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items6,
  );
  const callback2 = obj9.useCallback(() => {
    let obj = { linkCode: str2, expiresAt: parsed, onRefresh: getLinkCode, title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef2690.dMMSA0);
    const intl2 = util.intl;
    obj = { link };
    obj.body = intl2.format(_modDef2690["6GaRTu"], obj);
    obj.openLazy(asyncRequireImpl(14879, dependencyMap.paths), closure_9, obj);
  }, items7);
  obj = { title: null, subtitle: null, subtitleColor: "text-muted", submitting: null, footer: null, children: null };
  tmp5(tmp3[27]);
  let intl = tmp2(tmp3[22]).intl;
  obj.title = intl.string(getLinkCode(str2[23]).dMMSA0);
  let intl2 = tmp2(tmp3[22]).intl;
  const format = intl2.format;
  const tmp5Result = tmp5(tmp3[23]);
  if (tmp16) {
    obj = { pendingCount: length, link };
    let formatResult = format(tmp5Result["Ke+kz5"], obj);
  } else {
    obj1 = { link };
    formatResult = format(tmp5Result["6GaRTu"], obj1);
  }
  obj.subtitle = formatResult;
  obj.submitting = tmp27;
  obj2 = { spacing: tmp5(tmp3[9]).space.PX_16, children: null };
  const items8 = [closure_10(getLinkCode(str2[30]), {})];
  let tmp30Result = tmp16;
  if (tmp16) {
    let obj3 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl3 = tmp2(tmp3[22]).intl;
    obj3.text = intl3.string(tmp5(tmp3[23]).OaHZUf);
    let tmp38 = !hasActiveParentLinks;
    if (hasActiveParentLinks) {
      tmp38 = tmp27;
    }
    obj3.disabled = tmp38;
    obj3.loading = tmp27;
    obj3.onPress = callback1;
    tmp30Result = tmp30(tmp2(tmp3[31]).ModalActionButton, obj3);
  }
  const tmp14Result = tmp14(obj9.useState(false), 2);
  items8[1] = tmp30Result;
  obj2.children = items8;
  obj.footer = closure_10(onTaskComplete(str2[28]).ModalFooter, {
    children: closure_11(onTaskComplete(str2[29]).Stack, obj2),
  });
  const obj5 = { spacing: getLinkCode(str2[9]).space.PX_16, style: tmp.body, children: null };
  if (tmp16) {
    const obj6 = {
      pendingRequests: derivedPendingRequests,
      linkedUsersProcessed: stateFromStores1,
      expiresAt: parsed,
      onRefreshLinkCode: getLinkCode,
      onShare: callback,
      onInviteAnotherGuardian: callback2,
    };
    tmp30Result = tmp30(tmp5(tmp3[32]), obj6);
  } else {
    const obj7 = { style: tmp.cardSection, children: null };
    const obj8 = {
      style: tmp.cardTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl4 = tmp2(tmp3[22]).intl;
    obj8.children = intl4.string(tmp5(tmp3[34]).pojgfk);
    const items9 = [tmp30(tmp2(tmp3[33]).Text, obj8)];
    obj9 = { shareActions: "full", linkCode: tmp21, expiresAt: parsed, onRefresh: getLinkCode };
    items9[1] = tmp30(tmp2(tmp3[35]).ConnectGuardianCard, obj9);
    obj7.children = items9;
    tmp30Result = tmp36(View, obj7);
  }
  obj5.children = tmp30Result;
  obj.children = closure_10(onTaskComplete(str2[29]).Stack, obj5);
  return closure_10(tmp5Result, obj);
}
