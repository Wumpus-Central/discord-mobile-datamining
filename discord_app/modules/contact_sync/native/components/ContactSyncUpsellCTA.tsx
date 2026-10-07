// discord_app/modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ContactSyncModalActionCreators from "../ContactSyncModalActionCreators.tsx";
import _modDef13687 from "../../../../../_runtime/metro/13687__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const dismissUpsellCTA = fn(12343).dismissUpsellCTA;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = {
  container: {
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
};
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = _location(576).c(11);
        ({ style, location: _location } = arg0);
        const tmp4 = closure_7();
        if (cResult[0] !== _location) {
          const fn = function o() {
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
          };
          cResult[0] = _location;
          cResult[1] = fn;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              obj = location(closure_1_2[10]);
              obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj4 = { label: null, onPress: null };
              intl = location(closure_1_2[11]).intl;
              obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj4.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj4;
              obj1.options = items;
              result = obj.showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[2] = S;
        } else {
          class S {
            constructor() {
              obj = location(closure_1_2[10]);
              obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj4 = { label: null, onPress: null };
              intl = location(closure_1_2[11]).intl;
              obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj4.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj4;
              obj1.options = items;
              result = obj.showSimpleActionSheet(obj1);
              return;
            }
          }
        }
        if (cResult[3] === style) {
          class S {
            constructor() {
              obj = location(closure_1_2[10]);
              obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
              obj4 = { label: null, onPress: null };
              intl = location(closure_1_2[11]).intl;
              obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
              obj4.onPress = function onPress() {
                closure_1_3();
              };
              items = [];
              items[0] = obj4;
              obj1.options = items;
              result = obj.showSimpleActionSheet(obj1);
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                obj = location(closure_1_2[10]);
                obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj4 = { label: null, onPress: null };
                intl = location(closure_1_2[11]).intl;
                obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj4.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj4;
                obj1.options = items;
                result = obj.showSimpleActionSheet(obj1);
                return;
              }
            }
            const stringResult = obj2.string(_location(1126).t.T6Rfd9);
            let intl = _location(1126).intl;
            const stringResult1 = intl.string(_location(1126).t.c6KIpg);
            cResult[6] = stringResult;
            cResult[7] = stringResult1;
            let tmp9 = stringResult1;
            const tmp8 = stringResult;
          } else {
            class S {
              constructor() {
                obj = location(closure_1_2[10]);
                obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj4 = { label: null, onPress: null };
                intl = location(closure_1_2[11]).intl;
                obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj4.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj4;
                obj1.options = items;
                result = obj.showSimpleActionSheet(obj1);
                return;
              }
            }
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            class S {
              constructor() {
                obj = location(closure_1_2[10]);
                obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
                obj4 = { label: null, onPress: null };
                intl = location(closure_1_2[11]).intl;
                obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
                obj4.onPress = function onPress() {
                  closure_1_3();
                };
                items = [];
                items[0] = obj4;
                obj1.options = items;
                result = obj.showSimpleActionSheet(obj1);
                return;
              }
            }
            return tmp12;
          }
          let obj3 = {
            onPress: tmp5,
            onLongPress: S,
            style: tmp7,
            iconSource: _modDef13687,
            title: tmp8,
            subtitle: tmp9,
          };
          const tmp15 = jsx(_location(8924).FormCTA, {
            onPress: tmp5,
            onLongPress: S,
            style: tmp7,
            iconSource: _modDef13687,
            title: tmp8,
            subtitle: tmp9,
          });
          cResult[8] = tmp5;
          cResult[9] = tmp7;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
        let items = [tmp4.container, style];
        cResult[3] = style;
        cResult[4] = tmp4.container;
        cResult[5] = items;
        let obj = _location(576);
      }
    : (location) => {
        location = location.location;
        let obj = {
          onPress() {
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
          onLongPress() {
            const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
            const obj3 = { label: null, onPress: null };
            const intl = location(1126).intl;
            obj3.label = intl.string(location(1126).t.WAI6xu);
            obj3.onPress = function onPress() {
              closure_1_3();
            };
            const items = [obj3];
            obj2.options = items;
            const result = location(6700).showSimpleActionSheet(obj2);
          },
          style: null,
          iconSource: _modDef13687,
          title: null,
          subtitle: null,
        };
        let items = [closure_7().container, location.style];
        obj.style = items;
        let intl = location(1126).intl;
        obj.title = intl.string(location(1126).t.T6Rfd9);
        const intl2 = location(1126).intl;
        obj.subtitle = intl2.string(location(1126).t.c6KIpg);
        return jsx(location(8924).FormCTA, {
          onPress() {
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
          onLongPress() {
            const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
            const obj3 = { label: null, onPress: null };
            const intl = location(1126).intl;
            obj3.label = intl.string(location(1126).t.WAI6xu);
            obj3.onPress = function onPress() {
              closure_1_3();
            };
            const items = [obj3];
            obj2.options = items;
            const result = location(6700).showSimpleActionSheet(obj2);
          },
          style: null,
          iconSource: _modDef13687,
          title: null,
          subtitle: null,
        });
      },
);
