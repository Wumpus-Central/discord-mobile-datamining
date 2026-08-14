// discord_app/modules/parent_tools/hooks/useUserLinks.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import items from "items";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { useSelectedTeen } from "useSelectedTeen.tsx";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_6, FAMILY_CENTER_REQUEST_QR_CODE_URL: error, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: metroImportAll, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: unpackModuleId, UserLinkType: closure_12 } = items);
let result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = function useUserIdsForLinkStatus(arg0) {
  const _require = arg0;
  const items = [freshTeenActivityWithMap];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, arg0];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1);
};
export const useUsersForLinkStatus = function useUsersForLinkStatus(PENDING) {
  let _require = PENDING;
  const items = [freshTeenActivityWithMap];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, PENDING];
  _require = React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  const obj = _defaultAreStatesEqual;
  const items2 = [mergeGuildAvatar];
  const stateFromStoresArray = _defaultAreStatesEqual.useStateFromStoresArray(items2, () => closure_0.map((arg0) => user.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
};
export const useActiveLinkUserIds = function useActiveLinkUserIds() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [freshTeenActivityWithMap];
  stateFromStores = ACTIVE(647).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1);
};
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(linkedUsers.getLinkedUsers());
  const found = values.filter((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === constants.ACTIVE;
    }
    return tmp;
  });
  const sorted = found.sort((updated_at, updated_at2) => {
    const time = new Date(updated_at.updated_at).getTime();
    const date = new Date(updated_at.updated_at);
    return time - new Date(updated_at2.updated_at).getTime();
  });
  const mapped = sorted.map((user_id) => user_id.user_id);
  return mapped.filter((arg0) => null != arg0);
};
export const useActiveLinkUsers = function useActiveLinkUsers() {
  const ACTIVE = constants.ACTIVE;
  let _require = ACTIVE;
  let stateFromStores;
  const items = [freshTeenActivityWithMap];
  stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  _require = React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  const obj = _defaultAreStatesEqual;
  const items2 = [mergeGuildAvatar];
  const stateFromStoresArray = _defaultAreStatesEqual.useStateFromStoresArray(items2, () => closure_0.map((arg0) => user.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
};
export const useHasActiveLinks = function useHasActiveLinks() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [freshTeenActivityWithMap];
  stateFromStores = ACTIVE(647).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1).length > 0;
};
export const useHasActiveParentLinks = function useHasActiveParentLinks() {
  const items = [freshTeenActivityWithMap];
  stateFromStores = stateFromStores(647).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.some((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.ACTIVE;
      }
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }, items1);
};
export const useUserQRLinkUrl = function useUserQRLinkUrl() {
  const items = [freshTeenActivityWithMap];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => linkCode.getLinkCode());
  const obj = defaultAreStatesEqual;
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = callback(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
};
export const useHasMaxConnections = function useHasMaxConnections() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const tmp = stateFromStores(7404)();
  const items = [freshTeenActivityWithMap];
  stateFromStores = ACTIVE(647).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1).length >= (tmp ? closure_8 : closure_9);
};
export const usePendingRequestCount = function usePendingRequestCount() {
  const items = [mergeGuildAvatar];
  stateFromStores = stateFromStores(647).useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(647);
  [][0] = freshTeenActivityWithMap;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === outer1_11.PENDING;
      }
      if (tmp) {
        tmp = stateFromStores.id !== link_status.requestor_id;
      }
      return tmp;
    }).length;
  }
  return num;
};
export const useRequiresParentalConsent = function useRequiresParentalConsent(id) {
  const items = [freshTeenActivityWithMap];
  let tmp = null != id;
  if (tmp) {
    const tmp2 = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers())[id];
    let flag;
    if (tmp2 != null) {
      flag = tmp2.teen_requires_parental_consent;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
export const useAcceptedRequestsCount = function useAcceptedRequestsCount() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [freshTeenActivityWithMap];
  stateFromStores = ACTIVE(647).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return React.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((arg0) => null != arg0);
  }, items1).length;
};
export const useActivityWindowTimeStamp = function useActivityWindowTimeStamp(activityWindowTimestampFormatter) {
  const _require = activityWindowTimestampFormatter;
  let closure_1 = _useSelectedTeen.useSelectedTeenId();
  const obj = _useSelectedTeen;
  const tmp = _require;
  const items = [freshTeenActivityWithMap];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = outer1_5.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = tmp(7122).formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
    const tmpResult = tmp(7122);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  const _require = id;
  const items = [freshTeenActivityWithMap];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => outer1_5.getLinkTimestamp(closure_0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    _getEmptyActivityFormatter.formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
    const tmpResult = _getEmptyActivityFormatter;
  }
};