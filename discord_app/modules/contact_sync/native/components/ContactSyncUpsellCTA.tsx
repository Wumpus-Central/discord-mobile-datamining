// === Module 13857: ContactSyncUpsellCTA ===

// Module 13857 (ContactSyncUpsellCTA)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import _modDef13858 from "module_13858" /* 13858 */;
import noop from "module_19" /* 19 */;

require = fn;
const dismissUpsellCTA = fn(12679).dismissUpsellCTA;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default noop.memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  let obj = {
    onPress() {
      const obj = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj.location = { page: str2 };
      obj.track(constants.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      location(7195);
      let obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj.label = intl.string(location(1114).t.WAI6xu);
      obj.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj];
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: null,
    iconSource: _modDef13858,
    title: null,
    subtitle: null
  };
  let items = [closure_7().container, location.style];
  obj.style = items;
  let intl = location(1114).intl;
  obj.title = intl.string(location(1114).t.T6Rfd9);
  const intl2 = location(1114).intl;
  obj.subtitle = intl2.string(location(1114).t.c6KIpg);
  return jsx(location(8593).FormCTA, {
    onPress() {
      const obj = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj.location = { page: str2 };
      obj.track(constants.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      location(7195);
      let obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj.label = intl.string(location(1114).t.WAI6xu);
      obj.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj];
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: null,
    iconSource: _modDef13858,
    title: null,
    subtitle: null
  });
});