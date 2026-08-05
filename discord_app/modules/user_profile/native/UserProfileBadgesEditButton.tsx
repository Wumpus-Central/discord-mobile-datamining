// discord_app/modules/user_profile/native/UserProfileBadgesEditButton.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { getBadgeAssetFromCDN } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { apexExperiment } from "../../badges/BadgeManagementExperiment.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: null, badge: null, hideBadgesLink: null };
createCacheKey = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 32, height: 32 };
createCacheKey[2] = { marginLeft: "auto" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(badges) {
  badges = badges.badges;
  let _require;
  const tmp = createCacheKey();
  _require = tmp;
  let obj = _apexExperiment;
  const isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  const callback = React.useCallback(() => {
    callback(closure_2[7]).openLazy(_undefined(closure_2[9])(closure_2[8], closure_2.paths), "Hide Badges", {});
  }, []);
  if (isBadgeManagementEnabled) {
    if (0 !== badges.length) {
      const substr = badges.slice(0, 6);
      const diff = badges.length - substr.length;
      const intl = tmp2(1236).intl;
      obj = { badge_names: null, overflow_count: null };
      const mapped = substr.map((description) => description.description);
      obj[0] = mapped.join(", ");
      obj[1] = diff;
      obj = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(1236).intl;
      obj[0] = intl2.string(tmp2(1236).t.l6w3Vj);
      const obj1 = { role: "button", variant: "text-sm/semibold", color: "text-link", style: null, onPress: null, children: null };
      obj1[3] = tmp.hideBadgesLink;
      obj1[4] = callback;
      const intl3 = tmp2(1236).intl;
      obj1[5] = intl3.string(tmp2(1236).t.XMDvpN);
      obj[1] = callback(tmp2(4281).Text, obj1);
      const obj2 = { style: null, "aria-hidden": true, children: null };
      obj2[0] = tmp.content;
      const items = [
        substr.map((iconSrc) => {
              const obj = { style: _undefined.badge, source: null };
              iconSrc = iconSrc.iconSrc;
              if (iconSrc == null) {
                iconSrc = outer1_6(iconSrc.icon);
              }
              obj[1] = { uri: iconSrc };
              return outer1_7(outer1_4, obj, iconSrc.id);
            }),

      ];
      let tmp11Result = diff > 0;
      if (tmp11Result) {
        const obj3 = { variant: "text-md/normal", children: null };
        const _HermesInternal = HermesInternal;
        obj3[1] = "+" + diff;
        tmp11Result = tmp11(tmp2(4281).Text, obj3);
      }
      items[1] = tmp11Result;
      obj2[2] = items;
      obj[2] = closure_8(closure_5, obj2);
      const obj4 = { text: null };
      obj4[0] = intl.formatToPlainString(tmp2(1236).t.AdyOTw, obj);
      obj[3] = obj4;
      obj[4] = tmp6;
      return callback(tmp2(13832).UserProfileEditFormButton, obj);
    }
  }
  return null;
};