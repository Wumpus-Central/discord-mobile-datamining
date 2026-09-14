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
let closure_9 = fn(7641).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = "https://support.discord.com/hc/articles/14155060633623";
const createStyles = fn(4636);
let obj2 = { body: { marginTop: nativeDefault.space.PX_24 }, cardSection: { alignItems: "center" }, cardTitle: null };
let obj3 = { marginTop: nativeDefault.space.PX_24 };
obj2.cardTitle = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  const tmp = closure_13();
  onTaskComplete = onTaskComplete(str2[10]).useOnTaskComplete();
  let obj = onTaskComplete(str2[10]);
  let obj2 = onTaskComplete(str2[11]);
  const getLinkCode = onTaskComplete(str2[12]).useFamilyCenterActions().getLinkCode;
  getLinkCode(str2[13])(() => {
    onTaskComplete(str2[14]).clearWarning();
  });
  getLinkCode(str2[15])(getLinkCode);
  let component = obj2.useSafetyFlowTask().task.ui_component.component;
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
  let obj3 = onTaskComplete(str2[12]);
  const pendingRequestCount = onTaskComplete(str2[16]).usePendingRequestCount();
  const tmp2Result = onTaskComplete(str2[16]);
  const hasActiveParentLinks = onTaskComplete(str2[16]).useHasActiveParentLinks();
  const tmp2Result8 = onTaskComplete(str2[16]);
  const items = [FamilyCenterStore];
  const stateFromStores = onTaskComplete(str2[17]).useStateFromStores(items, () => authStore.getLinkedUsers());
  const tmp2Result9 = onTaskComplete(str2[17]);
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
  const tmp14 = stateFromStores4;
  const tmp2Result10 = onTaskComplete(str2[17]);
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
  const tmp2Result11 = onTaskComplete(str2[17]);
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
  const tmp2Result12 = onTaskComplete(str2[17]);
  const items4 = [UserStore];
  stateFromStores4 = onTaskComplete(str2[17]).useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [stateFromStores4, tmp21];
  const callback = noop.useCallback(() => {
    let tmp2 = null != stateFromStores4;
    if (tmp2) {
      tmp2 = "" !== str2;
    }
    if (tmp2) {
      const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores4, str2);
    }
  }, items5);
  const tmp2Result13 = onTaskComplete(str2[17]);
  const derivedPendingRequests = onTaskComplete(str2[19]).useDerivedPendingRequests(arr, stateFromStores1);
  const tmp2Result14 = onTaskComplete(str2[19]);
  [tmp27, noop] = tmp14(noop.useState(false), 2);
  const items6 = [onTaskComplete];
  const items7 = [tmp21, parsed, getLinkCode];
  const callback1 = noop.useCallback(
    parsed(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              noop(true);
              c3 = 2;
              const obj5 = { type: tmp4(tmp33[20]).TaskInputType.Empty };
              v3 = 3;
              c4 = 1;
              const obj6 = { value: onTaskComplete(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5(false);
            throw tmp33;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              const obj7 = { key: "SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR", content: null };
              const intl = tmp4(tmp33[22]).intl;
              obj7.content = intl.string(v3(tmp33[23])["+QRSxc"]);
              v3(tmp33[21]).open(obj7);
              c3 = 0;
              closure_128_5(false);
              c4 = 3;
              const obj2 = v3(tmp33[21]);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c3 = 1;
            }
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            const obj = { value, done: true };
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
  const callback2 = noop.useCallback(() => {
    const obj2 = { linkCode: str2, expiresAt: parsed, onRefresh: getLinkCode, title: null, body: null };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(_modDef2690.dMMSA0);
    const intl2 = util.intl;
    obj2.body = intl2.format(_modDef2690["6GaRTu"], { link });
    obj.openLazy(asyncRequireImpl(14969, dependencyMap.paths), closure_9, obj2);
  }, items7);
  let obj4 = {
    title: null,
    subtitle: null,
    subtitleColor: "text-muted",
    submitting: null,
    footer: null,
    children: null,
  };
  const tmp14Result = tmp14(noop.useState(false), 2);
  let intl = tmp2(tmp3[22]).intl;
  obj4.title = intl.string(getLinkCode(str2[23]).dMMSA0);
  let intl2 = tmp2(tmp3[22]).intl;
  const format = intl2.format;
  const tmp5Result2 = getLinkCode(str2[23]);
  if (tmp16) {
    let obj5 = { pendingCount: length, link };
    let formatResult = format(tmp5Result2["Ke+kz5"], obj5);
  } else {
    let obj6 = { link };
    formatResult = format(tmp5Result2["6GaRTu"], obj6);
  }
  obj4.subtitle = formatResult;
  obj4.submitting = tmp27;
  let obj7 = { spacing: getLinkCode(str2[9]).space.PX_16, children: null };
  const items8 = [closure_10(getLinkCode(str2[30]), {})];
  let tmp30Result = tmp16;
  if (tmp16) {
    const obj8 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl3 = tmp2(tmp3[22]).intl;
    obj8.text = intl3.string(tmp5(tmp3[23]).OaHZUf);
    let tmp38 = !hasActiveParentLinks;
    if (hasActiveParentLinks) {
      tmp38 = tmp27;
    }
    obj8.disabled = tmp38;
    obj8.loading = tmp27;
    obj8.onPress = callback1;
    tmp30Result = closure_10(tmp2(tmp3[31]).ModalActionButton, obj8);
  }
  const tmp5Result = getLinkCode(str2[27]);
  items8[1] = tmp30Result;
  obj7.children = items8;
  obj4.footer = closure_10(onTaskComplete(str2[28]).ModalFooter, {
    children: closure_11(onTaskComplete(str2[29]).Stack, obj7),
  });
  const obj11 = { spacing: getLinkCode(str2[9]).space.PX_16, style: tmp.body, children: null };
  if (tmp16) {
    const obj12 = {
      pendingRequests: derivedPendingRequests,
      linkedUsersProcessed: stateFromStores1,
      expiresAt: parsed,
      onRefreshLinkCode: getLinkCode,
      onShare: callback,
      onInviteAnotherGuardian: callback2,
    };
    let tmp30Result2 = closure_10(tmp5(tmp3[32]), obj12);
  } else {
    const obj13 = { style: tmp.cardSection, children: null };
    const obj14 = {
      style: tmp.cardTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl4 = tmp2(tmp3[22]).intl;
    obj14.children = intl4.string(tmp5(tmp3[34]).pojgfk);
    const items9 = [closure_10(tmp2(tmp3[33]).Text, obj14)];
    const obj15 = { shareActions: "full", linkCode: tmp21, expiresAt: parsed, onRefresh: getLinkCode };
    items9[1] = closure_10(tmp2(tmp3[35]).ConnectGuardianCard, obj15);
    obj13.children = items9;
    tmp30Result2 = closure_11(View, obj13);
  }
  obj11.children = tmp30Result2;
  obj4.children = closure_10(onTaskComplete(str2[29]).Stack, obj11);
  return closure_10(tmp5Result, obj4);
}
