// discord_app/modules/parent_tools/hooks/useUserLinks.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/UserStore.tsx";
import closure_5 from "../FamilyCenterStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { useSelectedTeen } from "useSelectedTeen.tsx";

require = arg1;
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: closure_6, FAMILY_CENTER_REQUEST_QR_CODE_URL: error, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_8, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: unpackModuleId, UserLinkType: closure_12 } = items);
let result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = function useUserIdsForLinkStatus(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
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
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
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
  const obj = defaultAreStatesEqual;
  const items2 = [closure_4];
  const stateFromStoresArray = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items2, () => closure_0.map((arg0) => user.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
};
export const useActiveLinkUserIds = function useActiveLinkUserIds() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [closure_5];
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
  const items = [closure_5];
  stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
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
  const obj = defaultAreStatesEqual;
  const items2 = [closure_4];
  const stateFromStoresArray = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items2, () => closure_0.map((arg0) => user.getUser(arg0)));
  return stateFromStoresArray.filter((arg0) => null != arg0);
};
export const useHasActiveLinks = function useHasActiveLinks() {
  const ACTIVE = constants.ACTIVE;
  let stateFromStores;
  const items = [closure_5];
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
  const items = [closure_5];
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
  const items = [closure_5];
  const stateFromStores = defaultAreStatesEqual.useStateFromStores(items, () => linkCode.getLinkCode());
  const obj = defaultAreStatesEqual;
  const items1 = [closure_4];
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
  const tmp = stateFromStores(8773)();
  const items = [closure_5];
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
  const items = [closure_4];
  stateFromStores = stateFromStores(647).useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(647);
  [][0] = closure_5;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_1_11.PENDING;
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
  const items = [closure_5];
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
  const items = [closure_5];
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
  closure_1 = require("useSelectedTeen.tsx").useSelectedTeenId();
  const obj = useSelectedTeen;
  const tmp = _require;
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = closure_1_5.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = tmp(7338).formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
    const tmpResult = tmp(7338);
  }
  return result;
};
export const useLinkTimestampText = function useLinkTimestampText(id, status) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_5.getLinkTimestamp(closure_0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    require("../FamilyCenterUtils.tsx").formatLinkTimestamp(Date.parse(stateFromStores), status === constants.PENDING ? closure_10 : closure_6);
    const tmpResult = getEmptyActivityFormatter;
  }
};