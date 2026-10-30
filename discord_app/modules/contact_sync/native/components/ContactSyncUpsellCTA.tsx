// === Module 15635: ContactSyncUpsellCTA ===

// Module 15635 (ContactSyncUpsellCTA)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14194 */;
import _modDef15636 from "module_15636" /* 15636 */;
import noop from "module_19" /* 19 */;

require = fn;
const dismissUpsellCTA = fn(14197).dismissUpsellCTA;
const Constants = fn(1072);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { container: { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default noop.memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  let obj = {
    onPress: function handleOpen() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress: function openDismissOption() {
      const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      const obj3 = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj3.label = intl.string(location(1114).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(7357).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef15636,
    title: null,
    subtitle: null
  };
  let items = [closure_7().container, location.style];
  obj.style = items;
  let intl = location(1114).intl;
  obj.title = intl.string(location(1114).t.T6Rfd9);
  const intl2 = location(1114).intl;
  obj.subtitle = intl2.string(location(1114).t.c6KIpg);
  return jsx(location(8169).FormCTA, {
    onPress: function handleOpen() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress: function openDismissOption() {
      const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      const obj3 = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj3.label = intl.string(location(1114).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(7357).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef15636,
    title: null,
    subtitle: null
  });
});