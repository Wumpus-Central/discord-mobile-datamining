// discord_app/modules/premium/gifting/GiftingBadgesUtils.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2920 from "GiftingBadge.messages.js";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_5 = fn(8137).getSingleRequirementThreshold;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgesUtils.tsx");

export function getGiftingBadgeAccessibilityLabel(name) {
  let str;
  const count = closure_5(name);
  if (name != null) {
    str = name.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = util.intl;
  return "" + str + ", " + intl.formatToPlainString(_modDef2920.qvx9E4, { count });
}
export function getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier) {
  const tmp = closure_5(currentTier);
  const tmp2 = closure_5(nextTier);
  if (null != nextTier) {
    let num6 = 100;
    if (tmp2 > 0) {
      num6 = (badgeProgress / tmp2) * 100;
    }
    let num3 = num6;
  } else {
    num3 = 100;
    if (tmp > 0) {
      const _Math = Math;
      num3 = (Math.min(tmp, badgeProgress) / tmp) * 100;
    }
  }
  return Math.min(Math.max(num3, 0), 100);
}
export function getGiftingBadgeTierIconUrl(nextTier) {
  let prop;
  if (nextTier != null) {
    prop = nextTier.complex_icon_static_url;
  }
  if (prop == null) {
    let simple_icon_url;
    if (nextTier != null) {
      simple_icon_url = nextTier.simple_icon_url;
    }
    prop = simple_icon_url;
  }
  return prop;
}
export function useGiftingBadgeCoachmarkVariant(location) {
  let flag = location.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  closure_1 = undefined;
  const GiftingBadgeCoachmarkAudienceExperiment = stateFromStores(9483).GiftingBadgeCoachmarkAudienceExperiment;
  const enabled = GiftingBadgeCoachmarkAudienceExperiment.useConfig({ location: location.location }).enabled;
  items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.hasHadPremium();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj = stateFromStores(504);
  const result = stateFromStores(4945).useIsDismissibleContentDismissed_UNSAFE(
    stateFromStores(4746).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  );
  let obj2 = stateFromStores(4945);
  const items1 = [BadgeDirectoryStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () =>
    badgeById.getBadgeById(stateFromStores(dependencyMap[9]).BadgeId.GIFTING),
  );
  let tmp4 = !result;
  if (!result) {
    tmp4 = flag;
  }
  let tmp5 = tmp4;
  if (tmp4) {
    tmp5 = !enabled;
  }
  if (tmp5) {
    tmp5 = stateFromStores;
  }
  stateFromStores = tmp5;
  let tmp6 = tmp4;
  if (tmp4) {
    tmp6 = enabled;
  }
  if (tmp6) {
    tmp6 = null == stateFromStores1;
  }
  closure_1 = tmp6;
  const items2 = [tmp5, tmp6];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const badgeSummary = BadgeDirectoryActionCreators.fetchBadgeSummary(BadgeId.BadgeId.GIFTING);
    } else if (stateFromStores) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items2);
  if (enabled) {
    let tmp9 = null;
    if (tmp4) {
      tmp9 = null;
      if (null != stateFromStores1) {
        tmp9 = null;
        if (!stateFromStores1.hidden) {
          if (stateFromStores) {
            tmp9 = "noCount";
          } else {
            tmp9 = null;
          }
        }
      }
    }
    let str = tmp9;
  } else {
    str = null;
    if (tmp4) {
      str = null;
      if (stateFromStores) {
        str = null;
        if (null != stateFromStores1) {
          str = "count";
        }
      }
    }
  }
  return str;
}
