import { dismissUpsellCTA } from "setStoredContacts";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ AnalyticEvents: c4, AnalyticsSections: c5 } = ME);
let obj = { container: null };
obj = { padding: 12, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  let obj = {
    onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_5.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj[1] = { page: str2 };
      obj.track(outer1_4.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      location(outer1_2[8]).openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      let obj = location(5552);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1236).intl;
      obj[0] = intl.string(location(1236).t.WAI6xu);
      obj[1] = function onPress() {
        callback();
      };
      const items = [obj];
      obj[1] = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items,
    iconSource: null,
    title: null,
    subtitle: null
  };
  items = [callback().container, location.style];
  obj[3] = importDefault(13016);
  let intl = location(1236).intl;
  obj[4] = intl.string(location(1236).t.T6Rfd9);
  const intl2 = location(1236).intl;
  obj[5] = intl2.string(location(1236).t.c6KIpg);
  return jsx(location(7639).FormCTA, {
    onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_5.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj[1] = { page: str2 };
      obj.track(outer1_4.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      location(outer1_2[8]).openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      let obj = location(5552);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1236).intl;
      obj[0] = intl.string(location(1236).t.WAI6xu);
      obj[1] = function onPress() {
        callback();
      };
      const items = [obj];
      obj[1] = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items,
    iconSource: null,
    title: null,
    subtitle: null
  });
});
let result = require("ME").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;