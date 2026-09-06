// discord_app/modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/13858_registerAsset.js";
import { dismissUpsellCTA } from "../ContactSyncPersistedStore.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = arg1;
({ AnalyticEvents: c4, AnalyticsSections: c5 } = ME);
let obj = { container: null };
obj = {
  padding: 12,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  let obj = {
    onPress() {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { type: closure_1_5.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj[1] = { page: str2 };
      obj.track(closure_1_4.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      location(closure_1_2[8]).openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      let obj = location(7195);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj[0] = intl.string(location(1114).t.WAI6xu);
      obj[1] = function onPress() {
        callback();
      };
      const items = [obj];
      obj[1] = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items,
    iconSource: registerAssetDefault,
    title: null,
    subtitle: null,
  };
  items = [callback().container, location.style];
  let intl = location(1114).intl;
  obj[4] = intl.string(location(1114).t.T6Rfd9);
  const intl2 = location(1114).intl;
  obj[5] = intl2.string(location(1114).t.c6KIpg);
  return jsx(location(8593).FormCTA, {
    onPress() {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { type: closure_1_5.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj[1] = { page: str2 };
      obj.track(closure_1_4.OPEN_MODAL, obj);
      if (str == null) {
        str = "Friends List Upsell";
      }
      location(closure_1_2[8]).openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      let obj = location(7195);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = { label: null, onPress: null };
      const intl = location(1114).intl;
      obj[0] = intl.string(location(1114).t.WAI6xu);
      obj[1] = function onPress() {
        callback();
      };
      const items = [obj];
      obj[1] = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items,
    iconSource: registerAssetDefault,
    title: null,
    subtitle: null,
  });
});
let result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
