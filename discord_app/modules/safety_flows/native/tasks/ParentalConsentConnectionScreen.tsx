// discord_app/modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import _modDef2787 from "../../SafetyFlows.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FamilyCenterConstants from "../../../parent_tools/FamilyCenterConstants.tsx";
import shareGuardianConnectLink from "../../../parent_tools/native/shareGuardianConnectLink.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c4, closure_2;

let c10;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
let closure_9 = FamilyCenterConstants.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = "https://support.discord.com/hc/articles/14155060633623";
let createStyles = createStyles_mod;
let obj = { body: obj2, cardSection: { alignItems: "center" }, cardTitle: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx");

export default function ParentalConsentConnectionScreen() {
  let ModalFooter;
  let Stack2;
  let currentUser;
  let formatResult;
  let intl;
  let intl3;
  let intl4;
  let items8;
  let items9;
  let obj11;
  let obj9;
  let onTaskComplete;
  let someResult;
  let stateFromStores4;
  let str2;
  let tmp16;
  let tmp17;
  let tmp27;
  let tmp30Result2;
  let tmp38;
  const tmp = closure_13();
  let tmp2 = onTaskComplete;
  const tmp3 = str2;
  let obj = onTaskComplete(str2[10]);
  onTaskComplete = obj.useOnTaskComplete();
  let obj2 = onTaskComplete(str2[11]);
  const task = obj2.useSafetyFlowTask().task;
  let obj3 = onTaskComplete(str2[12]);
  const getLinkCode = obj3.useFamilyCenterActions().getLinkCode;
  getLinkCode(str2[13])(() => {
    const obj = onTaskComplete(str2[14]);
    obj.clearWarning();
  });
  getLinkCode(str2[15])(getLinkCode);
  let component = task.ui_component.component;
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
  const tmp2Result = tmp2(tmp3[16]);
  const pendingRequestCount = tmp2Result.usePendingRequestCount();
  const tmp2Result8 = tmp2(tmp3[16]);
  const hasActiveParentLinks = tmp2Result8.useHasActiveParentLinks();
  const items = [FamilyCenterStore];
  const tmp2Result9 = tmp2(tmp3[17]);
  const stateFromStores = tmp2Result9.useStateFromStores(items, () => authStore.getLinkedUsers());
  const items1 = [FamilyCenterStore];
  const tmp2Result10 = tmp2(tmp3[17]);
  const stateFromStores1 = tmp2Result10.useStateFromStores(items1, () => authStore.getAreLinkedUsersProcessed());
  if (stateFromStores1) {
    const _Object = Object;
    const values = Object.values(stateFromStores);
    someResult = values.some((item) => null != item);
  } else {
    someResult = arr.length > 0;
  }
  let length = pendingRequestCount;
  if (!stateFromStores1) {
    length = arr.length;
  }
  [tmp16, tmp17] = stateFromStores4(react.useState(someResult), 2);
  const tmp14 = stateFromStores4;
  const tmp15 = stateFromStores4(react.useState(someResult), 2);
  if (someResult) {
    someResult = !tmp16;
  }
  if (someResult) {
    tmp17(true);
  }
  const items2 = [FamilyCenterStore];
  const tmp2Result11 = tmp2(tmp3[17]);
  const stateFromStores2 = tmp2Result11.useStateFromStores(items2, () => authStore.getLinkCode());
  const items3 = [FamilyCenterStore];
  const tmp2Result12 = tmp2(tmp3[17]);
  const stateFromStores3 = tmp2Result12.useStateFromStores(items3, () => authStore.getLinkCodeExpiresAt());
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
  const items4 = [UserStore];
  const tmp2Result13 = tmp2(tmp3[17]);
  stateFromStores4 = tmp2Result13.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const items5 = [stateFromStores4, tmp21];
  const callback = react.useCallback(() => {
    const tmp2 = null != stateFromStores4 && "" !== str2;
    if (tmp2) {
      const obj = shareGuardianConnectLink;
      const result = obj.shareGuardianConnectLink(stateFromStores4, str2);
    }
  }, items5);
  const tmp2Result14 = tmp2(tmp3[19]);
  const derivedPendingRequests = tmp2Result14.useDerivedPendingRequests(arr, stateFromStores1);
  const tmp14Result = tmp14(react.useState(false), 2);
  [tmp27, react] = tmp14Result;
  const items6 = [onTaskComplete];
  const items7 = [tmp21, parsed, getLinkCode];
  const callback1 = react.useCallback(
    parsed(function* () {
      let closure_0;
      let intl;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              react(true);
              c3 = 2;
              const obj4 = { type: tmp(closure_2[20]).TaskInputType.Empty };
              v2 = 3;
              c4 = 1;
              const obj5 = { value: onTaskComplete(obj4), done: false };
              return obj5;
            }
          } else if (1 === v2) {
            c3 = 0;
            closure_128_5(false);
            throw closure_2;
          } else {
            if (2 === v2) {
              c3 = 1;
              const obj6 = {
                key: "SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR",
                content: intl.string(v2(closure_2[23])["+QRSxc"]),
              };
              const open = v2(closure_2[21]).open;
              const tmp12 = v2(closure_2[21]);
              intl = tmp(closure_2[22]).intl;
              open(obj6);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_5(false);
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_128_5(false);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          closure_2 = tmp30;
          if (0 === c3) {
            c4 = 3;
            throw tmp30;
          } else if (1 === tmp32) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    }),
    items6,
  );
  const callback2 = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = {
      linkCode: str2,
      expiresAt: parsed,
      onRefresh: getLinkCode,
      title: intl.string(_modDef2787.dMMSA0),
      body: intl2.format(_modDef2787["6GaRTu"], obj2),
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(14687, dependencyMap.paths);
    intl = intl5.intl;
    intl2 = intl5.intl;
    obj2 = { link };
    openLazy(tmp2, closure_9, obj);
  }, items7);
  let obj4 = {
    title: intl.string(getLinkCode(tmp3[23]).dMMSA0),
    subtitle: formatResult,
    subtitleColor: "text-muted",
    submitting: tmp27,
    footer: closure_10(ModalFooter, obj9),
    children: closure_10(Stack2, obj11),
  };
  const tmp5Result = getLinkCode(tmp3[27]);
  intl = tmp2(tmp3[22]).intl;
  let intl2 = tmp2(tmp3[22]).intl;
  const format = intl2.format;
  const tmp5Result2 = getLinkCode(tmp3[23]);
  if (tmp16) {
    let obj5 = { pendingCount: length, link };
    formatResult = format(tmp5Result2["Ke+kz5"], obj5);
  } else {
    let obj6 = { link };
    formatResult = format(tmp5Result2["6GaRTu"], obj6);
  }
  ModalFooter = tmp2(tmp3[28]).ModalFooter;
  const obj7 = { spacing: getLinkCode(tmp3[9]).space.PX_16, children: items8 };
  const Stack = tmp2(tmp3[29]).Stack;
  items8 = [closure_10(getLinkCode(tmp3[30]), {})];
  let tmp30Result = tmp16;
  if (tmp30Result) {
    const obj8 = {
      variant: "primary",
      text: intl3.string(getLinkCode(tmp3[23]).OaHZUf),
      disabled: tmp38,
      loading: tmp27,
      onPress: callback1,
    };
    const ModalActionButton = tmp2(tmp3[31]).ModalActionButton;
    intl3 = tmp2(tmp3[22]).intl;
    tmp38 = !hasActiveParentLinks;
    if (hasActiveParentLinks) {
      tmp38 = tmp27;
    }
    tmp30Result = closure_10(ModalActionButton, obj8);
  }
  items8[1] = tmp30Result;
  obj9 = { children: closure_11(Stack, obj7) };
  obj11 = { spacing: getLinkCode(tmp3[9]).space.PX_16, style: tmp.body, children: tmp30Result2 };
  Stack2 = tmp2(tmp3[29]).Stack;
  if (tmp16) {
    const obj12 = {
      pendingRequests: derivedPendingRequests,
      linkedUsersProcessed: stateFromStores1,
      expiresAt: parsed,
      onRefreshLinkCode: getLinkCode,
      onShare: callback,
      onInviteAnotherGuardian: callback2,
    };
    tmp30Result2 = closure_10(tmp5(tmp3[32]), obj12);
  } else {
    const obj13 = { style: tmp.cardSection, children: items9 };
    const obj14 = {
      style: tmp.cardTitle,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: intl4.string(getLinkCode(tmp3[34]).pojgfk),
    };
    const Text = tmp2(tmp3[33]).Text;
    intl4 = tmp2(tmp3[22]).intl;
    items9 = [closure_10(Text, obj14)];
    const obj15 = { shareActions: "full", linkCode: tmp21, expiresAt: parsed, onRefresh: getLinkCode };
    items9[1] = closure_10(tmp2(tmp3[35]).ConnectGuardianCard, obj15);
    tmp30Result2 = closure_11(View, obj13);
  }
  return closure_10(tmp5Result, obj4);
}
