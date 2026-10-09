// === Module 14001: ContactSyncUpsellCTA ===

// Module 14001 (ContactSyncUpsellCTA)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12354 */;
import _modDef14002 from "module_14002" /* 14002 */;
import noop from "module_19" /* 19 */;

require = fn;
const dismissUpsellCTA = fn(12357).dismissUpsellCTA;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { container: { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncUpsellCTA(arg0) {
  const cResult = _location(576).c(11);
  ({ style, location: _location } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== _location) {
    function handleOpen() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = _location;
      let str2 = _location;
      if (_location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    }
    cResult[0] = _location;
    cResult[1] = handleOpen;
    let tmp5 = handleOpen;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function openDismissOption() {
      const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      const obj3 = { label: null, onPress: null };
      const intl = _location(1126).intl;
      obj3.label = intl.string(_location(1126).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = _location(6884).showSimpleActionSheet(obj2);
    }
    cResult[2] = openDismissOption;
    let tmp6 = openDismissOption;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === style) {
    if (cResult[4] === tmp4.container) {
      let tmp7 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = _location(1126).intl;
      const stringResult = intl.string(_location(1126).t.T6Rfd9);
      const intl2 = _location(1126).intl;
      const stringResult1 = intl2.string(_location(1126).t.c6KIpg);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      let tmp9 = stringResult1;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5) {
      if (cResult[9] === tmp7) {
        let tmp12 = cResult[10];
      }
      return tmp12;
    }
    let obj2 = { onPress: tmp5, onLongPress: tmp6, style: tmp7, iconSource: _modDef14002, title: tmp8, subtitle: tmp9 };
    const tmp15 = jsx(_location(8563).FormCTA, { onPress: tmp5, onLongPress: tmp6, style: tmp7, iconSource: _modDef14002, title: tmp8, subtitle: tmp9 });
    cResult[8] = tmp5;
    cResult[9] = tmp7;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  let items = [tmp4.container, style];
  cResult[3] = style;
  cResult[4] = tmp4.container;
  cResult[5] = items;
  tmp7 = items;
  let obj = _location(576);
}) : (function ContactSyncUpsellCTA(location) {
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
      const intl = location(1126).intl;
      obj3.label = intl.string(location(1126).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(6884).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef14002,
    title: null,
    subtitle: null
  };
  let items = [closure_7().container, location.style];
  obj.style = items;
  let intl = location(1126).intl;
  obj.title = intl.string(location(1126).t.T6Rfd9);
  const intl2 = location(1126).intl;
  obj.subtitle = intl2.string(location(1126).t.c6KIpg);
  return jsx(location(8563).FormCTA, {
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
      const intl = location(1126).intl;
      obj3.label = intl.string(location(1126).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(6884).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef14002,
    title: null,
    subtitle: null
  });
}));