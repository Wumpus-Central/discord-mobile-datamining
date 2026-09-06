// === Module 8645: useUserLinks ===

// Module 8645 (useUserLinks)
import useStateFromStores from "useStateFromStores" /* 563 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const FamilyCenterConstants = fn(7538);
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: metroRequire, FAMILY_CENTER_REQUEST_QR_CODE_URL: closure_7, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_8, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: closure_11, UserLinkType: closure_12 } = FamilyCenterConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = function useUserIdsForLinkStatus(arg0) {
  _require = arg0;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, arg0];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
};
export const useUsersForLinkStatus = function useUsersForLinkStatus(PENDING) {
  closure_129_0 = PENDING;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  closure_129_1 = stateFromStores;
  const items1 = [stateFromStores, PENDING];
  _require = noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
  const obj = require("useStateFromStores");
  const items2 = [UserStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items2, () => closure_0.map((item) => user.getUser(item)));
  return stateFromStoresArray.filter((item) => null != item);
};
export const useActiveLinkUserIds = function useActiveLinkUserIds() {
  const ACTIVE = constants.ACTIVE;
  const items = [FamilyCenterStore];
  const stateFromStores = ACTIVE(563).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
};
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
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
  return mapped.filter((item) => null != item);
};
export const useActiveLinkUsers = function useActiveLinkUsers() {
  const ACTIVE = constants.ACTIVE;
  _require = undefined;
  closure_129_0 = ACTIVE;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  closure_129_1 = stateFromStores;
  const items1 = [stateFromStores, ACTIVE];
  _require = noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
  const obj = require("useStateFromStores");
  const items2 = [UserStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items2, () => closure_0.map((item) => user.getUser(item)));
  return stateFromStoresArray.filter((item) => null != item);
};
export const useHasActiveLinks = function useHasActiveLinks() {
  const ACTIVE = constants.ACTIVE;
  const items = [FamilyCenterStore];
  const stateFromStores = ACTIVE(563).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length > 0;
};
export const useHasActiveParentLinks = function useHasActiveParentLinks() {
  const items = [FamilyCenterStore];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
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
  const items = [FamilyCenterStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => linkCode.getLinkCode());
  const items1 = [UserStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = React5(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
};
export const useHasMaxConnections = function useHasMaxConnections() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const tmp = stateFromStores(8646)();
  const items = [FamilyCenterStore];
  stateFromStores = ACTIVE(563).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length >= (tmp ? closure_8 : closure_9);
};
export const usePendingRequestCount = function usePendingRequestCount() {
  const items = [UserStore];
  stateFromStores = stateFromStores(563).useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(563);
  [][0] = FamilyCenterStore;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.PENDING;
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
  const items = [FamilyCenterStore];
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
  const items = [FamilyCenterStore];
  const stateFromStores = ACTIVE(563).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, ACTIVE];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === ACTIVE;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1).length;
};
export const useActivityWindowTimeStamp = function useActivityWindowTimeStamp(activityWindowTimestampFormatter) {
  _require = activityWindowTimestampFormatter;
  closure_1 = require("useSelectedTeen").useSelectedTeenId();
  const obj = require("useSelectedTeen");
  const tmp = _require;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = FamilyCenterStore.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = tmp(7593).formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
    const tmpResult = tmp(7593);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  _require = id;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getLinkTimestamp(closure_0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    tmp(7593).formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
    const tmpResult = tmp(7593);
  }
  const obj = require("useStateFromStores");
  tmp = _require;
};