// discord_app/modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import ContactSyncPersistedStore from "../ContactSyncPersistedStore.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13687_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1;

let closure_4;
let hasOwnProperty;
let obj2;
const dismissUpsellCTA = ContactSyncPersistedStore.dismissUpsellCTA;
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let _location;
        let obj2;
        let style;
        let tmp12;
        let tmp5;
        let obj = _location(576);
        const cResult = obj.c(11);
        ({ style, location: _location } = arg0);
        const tmp4 = closure_7();
        if (cResult[0] !== _location) {
          const fn = function o() {
            let str2;
            let str = _location;
            const obj = { type: hasOwnProperty.CONTACT_SYNC_MODAL, location: { page: str2 } };
            str2 = _location;
            const track = AnalyticsUtilsDefault.track;
            const OPEN_MODAL = constants.OPEN_MODAL;
            AnalyticsUtilsDefault;
            if (_location == null) {
              str2 = "Friends List Upsell";
            }
            track(OPEN_MODAL, obj);
            const openContactSyncModal = ContactSyncModalActionCreators.openContactSyncModal;
            ContactSyncModalActionCreators;
            if (str == null) {
              str = "Friends List Upsell";
            }
            openContactSyncModal({}, { page: str });
          };
          cResult[0] = _location;
          cResult[1] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              tmp = location(closure_1_2[10]);
              obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj1 = { label: null, onPress: null };
              showSimpleActionSheet = tmp.showSimpleActionSheet;
              intl = location(closure_1_2[11]).intl;
              obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj1.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj1;
              obj.options = items;
              result = showSimpleActionSheet(obj);
              return;
            }
          }
          cResult[2] = S;
        } else {
          class S {
            constructor() {
              tmp = location(closure_1_2[10]);
              obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj1 = { label: null, onPress: null };
              showSimpleActionSheet = tmp.showSimpleActionSheet;
              intl = location(closure_1_2[11]).intl;
              obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj1.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj1;
              obj.options = items;
              result = showSimpleActionSheet(obj);
              return;
            }
          }
        }
        if (cResult[3] === style) {
          let tmp9;
          let tmp8;
          class S {
            constructor() {
              tmp = location(closure_1_2[10]);
              obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj1 = { label: null, onPress: null };
              showSimpleActionSheet = tmp.showSimpleActionSheet;
              intl = location(closure_1_2[11]).intl;
              obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj1.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj1;
              obj.options = items;
              result = showSimpleActionSheet(obj);
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                tmp = location(closure_1_2[10]);
                obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj1 = { label: null, onPress: null };
                showSimpleActionSheet = tmp.showSimpleActionSheet;
                intl = location(closure_1_2[11]).intl;
                obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj1.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj1;
                obj.options = items;
                result = showSimpleActionSheet(obj);
                return;
              }
            }
            const stringResult = obj2.string(_location(1126).t.T6Rfd9);
            let intl = _location(1126).intl;
            const stringResult1 = intl.string(_location(1126).t.c6KIpg);
            cResult[6] = stringResult;
            cResult[7] = stringResult1;
            tmp9 = stringResult1;
            tmp8 = stringResult;
          } else {
            class S {
              constructor() {
                tmp = location(closure_1_2[10]);
                obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj1 = { label: null, onPress: null };
                showSimpleActionSheet = tmp.showSimpleActionSheet;
                intl = location(closure_1_2[11]).intl;
                obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj1.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj1;
                obj.options = items;
                result = showSimpleActionSheet(obj);
                return;
              }
            }
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            class S {
              constructor() {
                tmp = location(closure_1_2[10]);
                obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj1 = { label: null, onPress: null };
                showSimpleActionSheet = tmp.showSimpleActionSheet;
                intl = location(closure_1_2[11]).intl;
                obj1.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj1.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj1;
                obj.options = items;
                result = showSimpleActionSheet(obj);
                return;
              }
            }
            return tmp12;
          }
          const FormCTA = _location(8924).FormCTA;
          const tmp15 = (
            <FormCTA
              onPress={tmp5}
              onLongPress={S}
              style={tmp7}
              iconSource={AssetRegistryDefault}
              title={tmp8}
              subtitle={tmp9}
            />
          );
          cResult[8] = tmp5;
          cResult[9] = tmp7;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
        let items = [tmp4.container, style];
        cResult[3] = style;
        cResult[4] = tmp4.container;
        cResult[5] = items;
      }
    : (location) => {
        location = location.location;
        const style = location.style;
        let tmp = closure_7();
        let items = [tmp.container, style];
        const FormCTA = location(8924).FormCTA;
        let intl = location(1126).intl;
        const intl2 = location(1126).intl;
        return (
          <FormCTA
            onPress={function onPress() {
              let str2;
              let str = location;
              const obj = { type: hasOwnProperty.CONTACT_SYNC_MODAL, location: { page: str2 } };
              str2 = location;
              const track = AnalyticsUtilsDefault.track;
              const OPEN_MODAL = constants.OPEN_MODAL;
              AnalyticsUtilsDefault;
              if (location == null) {
                str2 = "Friends List Upsell";
              }
              track(OPEN_MODAL, obj);
              const openContactSyncModal = ContactSyncModalActionCreators.openContactSyncModal;
              ContactSyncModalActionCreators;
              if (str == null) {
                str = "Friends List Upsell";
              }
              openContactSyncModal({}, { page: str });
            }}
            onLongPress={function onLongPress() {
              let intl;
              let items;
              const obj = { key: "ContactSyncUpsellLongPress", options: items, hasIcons: false };
              const tmp = location(dependencyMap[10]);
              const showSimpleActionSheet = tmp.showSimpleActionSheet;
              const obj2 = {
                label: intl.string(location(dependencyMap[11]).t.WAI6xu),
                onPress() {
                  closure_1_3();
                },
              };
              intl = location(dependencyMap[11]).intl;
              items = [obj2];
              const result = showSimpleActionSheet(obj);
            }}
            style={items}
            iconSource={AssetRegistryDefault}
            title={intl.string(location(1126).t.T6Rfd9)}
            subtitle={intl2.string(location(1126).t.c6KIpg)}
          />
        );
      },
);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
